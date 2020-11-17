import {
  isObjectKey,
  getValueFromObject,

} from "../../../src/js/utils/data/data_helpers"

describe("isObjectKey", () => {
  it("detects object keys", () => {
    expect(isObjectKey("f.h.j"));
  });
  it("detects non-object keys", () => {
    expect(!isObjectKey("f"));
  });
  it("detects non-object keys", () => {
    expect(!isObjectKey("f,g"));
  });
  it("detects non-object keys", () => {
    expect(!isObjectKey("f:g"));
  });
});




describe("getValueFromObject", () => {
  it("gets key by path", () => {
    expect(getValueFromObject("f.h.j", {f:{g:{h:5}}},0) === 5);
  });
  it("returns default", () => {
    expect(getValueFromObject("f.h.j", {f:{g:5}},0) === 0);
  });
  it("returns default", () => {
    expect(getValueFromObject("", {f:{g:5}},0) === 0);
  });
});
