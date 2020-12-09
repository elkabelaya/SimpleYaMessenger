import Avatar from "components/avatar/avatar";

describe("Avatar", () => {
  it("returns avatar", () => {
    const props = {url:"someurl"};
    const avatarComponent:Avatar = new Avatar(props);
    
    expect(avatarComponent.element.innerHTML.split(" ").join("").split(/\n/).join("")).toBe(`
        <label for="avatar" class="widget-user__avatar">
            <img  src="someurl">
        </label>
        <input type="file" id="avatar" name="avatar">`
        .split(" ").join("").split(/\n/).join(""));
  });
});
