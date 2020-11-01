import Component from "../component/component.js";
import {template as widgetHeaderTemplate} from "./widget_header.tmpl.js";
import {IWidgetHeaderCtx} from "../../components/icomponents/iwidget_header.js";
//import style from "../../../css/widget_header.css";

export default class Button extends Component {

  constructor(props: IWidgetHeaderCtx) {
    super("header", widgetHeaderTemplate, {class:"login-widget__header"}, props);
  }

  setProps(props:IWidgetHeaderCtx){
    super.setProps(props);
  }

}
