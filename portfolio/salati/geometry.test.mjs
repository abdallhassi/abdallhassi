import test from 'node:test';
import assert from 'node:assert/strict';
import { haversineMeters, isPointInsidePolygon } from './geometry.mjs';

const square = [
  { lat: 0, lng: 0 },
  { lat: 0, lng: 2 },
  { lat: 2, lng: 2 },
  { lat: 2, lng: 0 },
];

test('inside', () => assert.equal(isPointInsidePolygon(1, 1, square), true));
test('outside', () => assert.equal(isPointInsidePolygon(3, 3, square), false));
test('degenerate polygon', () => assert.equal(isPointInsidePolygon(1, 1, square.slice(0, 2)), false));
test('zero distance', () => assert.equal(haversineMeters(0, 0, 0, 0), 0));
test('one degree latitude', () => assert.ok(haversineMeters(0, 0, 1, 0) > 110_000));
test('symmetric distance', () => assert.ok(Math.abs(haversineMeters(1, 2, 4, 5) - haversineMeters(4, 5, 1, 2)) < 1e-9));
