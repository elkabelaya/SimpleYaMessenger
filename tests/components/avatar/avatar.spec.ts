import Avatar from "../../../src/components/avatar/avatar"
//import { IAvatarCtx } from "../../../src/components/icomponents/iavatar";

describe("Avatar", () => {
  it("returns avatar", () => {
    const props = {url:"someurl"};
    const avatarComponent = new Avatar(props);
    expect(avatarComponent.element.innerHTML === `<label for="avatar" class="widget-user__avatar">
                                      <img  src="someurl" />
                                    </label>
                                    <input type="file" id="avatar" name="avatar"/>`);
  });
});
