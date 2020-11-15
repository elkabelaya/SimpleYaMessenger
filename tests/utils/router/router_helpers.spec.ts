import {getRoutePath}  from "../../../src/js/utils/router/router_helpers"



describe("getRoutePathForTarget", () => {
  it("get route path", () => {
    expect(getRoutePath(location.origin + "/testpath")).toBe("/testpath");

  });

  it("get route path", () => {
    expect(getRoutePath(undefined)).toBe(null);

  });

  it("get route path", () => {
    expect(getRoutePath(location.origin + "/")).toBe("/");

  });
});
