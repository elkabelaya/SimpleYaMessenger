import Component from "../component/component";
import {template as widgetHeaderTemplate} from "./widget_header.tmpl";
import {IWidgetHeaderCtx} from "../../components/icomponents/iwidget_header";
//import style from "../../../css/widget_header.css";

export default class WidgetHeader extends Component {

  constructor(props: IWidgetHeaderCtx) {
    super("header", widgetHeaderTemplate, {class:"login-widget__header"}, props);
  }

  setProps(props:IWidgetHeaderCtx){
    super.setProps(props);
  }

}
