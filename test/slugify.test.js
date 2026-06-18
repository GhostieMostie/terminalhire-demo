import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/slugify.js';

test('slugifies a simple string', () => {
  assert.equal(slugify('hello'), 'hello');
});

test('collapses runs of separators into a single hyphen', () => {
  assert.equal(slugify('Hello, World!'), 'hello-world');
  assert.equal(slugify('Multiple   spaces'), 'multiple-spaces');
});

test('trims leading and trailing hyphens', () => {
  assert.equal(slugify('  spaced out  '), 'spaced-out');
  assert.equal(slugify('Trailing punctuation!!!'), 'trailing-punctuation');
});

test('supports a custom separator without changing default behavior', () => {
  assert.equal(slugify('Hello, World!', '_'), 'hello_world');
  assert.equal(slugify('  spaced  out  ', '_'), 'spaced_out');
  assert.equal(slugify('Hello, World!'), 'hello-world');
});
