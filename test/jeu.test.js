import { test, expect } from 'vitest';
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