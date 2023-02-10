import { describe, expect, it } from "vitest";
import { flatArrays } from "../exercises/e16";
import { flatArraysData } from "../data/data";

describe('flatArrays', () => {
  const arr = [['d', 'r'], 'z', 'b', ['f', 'y']];
  it('Should exist', () => {
    expect(flatArrays).toBeInstanceOf(Function);
  });
  it('Should return an array of overall length of two arrays', () => {
    expect(flatArrays(flatArraysData).length).toEqual(flatArraysData.flat().length);
  });
  it('Should return an array that gives specific items when flattened', () => {
    expect(flatArrays(arr)).toEqual(['d', 'r', 'z', 'b', 'f', 'y']);
  });
  it('Should return an array that gives specific string when joined', () => {
    expect(flatArrays(flatArraysData).join(' ')).toEqual('Yay ! this works as expected !');
  });
});
