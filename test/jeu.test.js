import { test, expect, vi } from 'vitest';
import { Jeu } from '../src/jeu.js';

const fauxClassement = { enregistrer: () => {} };

test('Le score initial est Zéro-Zéro', () => {
  const jeu = new Jeu("Alice", "Bob", fauxClassement);
  expect(jeu.score()).toBe("Zéro-Zéro");
});

test('Alice marque un point, le score est Quinze-Zéro', () => {
  const jeu = new Jeu("Alice", "Bob", fauxClassement);
  jeu.pointPour("Alice");
  expect(jeu.score()).toBe("Quinze-Zéro");
});

test('À 1 partout, le score est Quinze-A', () => {
  const jeu = new Jeu("Alice", "Bob", fauxClassement);
  jeu.pointPour("Alice");
  jeu.pointPour("Bob");
  expect(jeu.score()).toBe("Quinze-A");
});

test('À 3 partout (40-40), le score est Égalité', () => {
  const jeu = new Jeu("Alice", "Bob", fauxClassement);
  jeu.pointPour("Alice");
  jeu.pointPour("Alice");
  jeu.pointPour("Alice");
  jeu.pointPour("Bob");
  jeu.pointPour("Bob");
  jeu.pointPour("Bob");
  expect(jeu.score()).toBe("Égalité");
});

test('Alice gagne le match au 4ème point', () => {
  const jeu = new Jeu("Alice", "Bob", fauxClassement);
  jeu.pointPour("Alice");
  jeu.pointPour("Alice");
  jeu.pointPour("Alice");
  jeu.pointPour("Alice");
  expect(jeu.score()).toBe("Victoire Alice");
});

test('Enregistre le résultat dans le classement lors de la victoire', () => {
  const espionClassement = { enregistrer: vi.fn() };
  const jeu = new Jeu("Alice", "Bob", espionClassement);

  jeu.pointPour("Alice");
  jeu.pointPour("Alice");
  jeu.pointPour("Alice");
  jeu.pointPour("Alice");

  expect(espionClassement.enregistrer).toHaveBeenCalledTimes(1);
  expect(espionClassement.enregistrer).toHaveBeenCalledWith("Alice", "Bob");
});