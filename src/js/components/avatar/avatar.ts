import Component from "../component/component";
import { IAvatarCtx } from "../icomponents/iavatar";
import {template as itemTemplate} from "./avatar.tmpl";
//import style from "../../../css/button.css";

export default class Avatar extends Component {

  constructor(props: IAvatarCtx, attr:object = {}) {
    super("div", itemTemplate, attr, props);
  }

  setProps(props:IAvatarCtx){
    super.setProps(props);
  }

}
