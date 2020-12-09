import {
  isObjectKey,
  getValueFromObject,

} from "../../../src/utils/data/data_helpers"

describe("isObjectKey", () => {
  it("detects object keys", () => {
    expect(isObjectKey("f.h.j")).toBeTruthy();
  });
  it("detects non-object keys", () => {
    expect(isObjectKey("f")).toBeFalsy();
  });
  it("detects non-object keys", () => {
    expect(isObjectKey("f,g")).toBeFalsy();
  });
  it("detects non-object keys", () => {
    expect(isObjectKey("f:g")).toBeFalsy();
  });
});




describe("getValueFromObject", () => {
  it("gets key by path", () => {
    expect(getValueFromObject("f.g.h", {f:{g:{h:5}}},0)).toBe(5);
  });
  it("returns default", () => {
    expect(getValueFromObject("f.h.j", {f:{g:5}},0)).toBe(0);
  });
  it("returns default", () => {
    expect(getValueFromObject("", {f:{g:5}},0)).toBe(0);
  });
  it("returns default if no object passed", () => {
    expect(getValueFromObject("", undefined, 0)).toBe(0);
  });
});
