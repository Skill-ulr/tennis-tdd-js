import { test, expect } from 'vitest';
import { Jeu } from '../src/jeu.js';

const fauxClassement = { enregistrer: () => {} };

test('Le score initial est Zéro-Zéro', () => {
  const jeu = new Jeu("Alice", "Bob", fauxClassement);
  expect(jeu.score()).toBe("Zéro-Zéro");
});