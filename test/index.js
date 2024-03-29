import path from 'path';
import fs from 'fs';
import assert from 'assert';
import { transformFileSync } from '@babel/core';
import plugin from '../src';
import stylesheet from 'babel-plugin-transform-jsx-stylesheet';

function trim(str) {
  return str.replace(/^\s+|\s+$/, '');
}

describe('', () => {
  const fixturesDir = path.join(__dirname, 'fixtures');
  fs.readdirSync(fixturesDir).map((caseName) => {
    it(`should ${caseName.split('-').join(' ')}`, () => {
      const fixtureDir = path.join(fixturesDir, caseName);
      const actualPath = path.join(fixtureDir, 'actual.js');
      const actual = transformFileSync(actualPath, {
        plugins: [[plugin, {
          directive: caseName === 'directive' ? 'classList' : undefined
        }], caseName === 'stylesheet' ? stylesheet : null].filter(p => !!p),
        parserOpts: {
          plugins: ['jsx']
        },
      }).code;

      const expected = fs.readFileSync(
          path.join(fixtureDir, 'expected.js')
      ).toString();

      assert.equal(trim(actual), trim(expected));
    });
  });
});
