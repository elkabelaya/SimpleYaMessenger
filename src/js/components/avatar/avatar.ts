import Component from "../component/component.js";
import { IAvatarCtx } from "../icomponents/iavatar.js";
import {template as itemTemplate} from "./avatar.tmpl.js";
//import style from "../../../css/button.css";

export default class Button extends Component {

  constructor(props: IAvatarCtx, attr:object) {
    super(undefined, itemTemplate, attr, props);
  }

  setProps(props:IAvatarCtx){
    super.setProps(props);
  }

}
