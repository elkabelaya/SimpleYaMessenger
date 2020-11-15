
import Input from  "../../components/input/input";
import Button from  "../../components/button/button";
import WidgetHeader from  "../../components/widget_header/widget_header";
import {template as loginWidgetTemplate} from "./login_widget.tmpl"
import { IComponent } from "../../components/icomponents/icomponent";
import { IComponentChild } from "../../components/icomponents/icomponent_child";
import FormWidget from "../form_widget/form_widget";
//import style from "../../../css/account_widget.css";

export default class LoginWidget extends FormWidget {

  constructor() {

    const data:IComponentChild<IComponent>[] = [
      {
        componentClass: WidgetHeader,
        componentCtx: {
          title: "Вход",

        },
        rootElement:".login-widget__header",
        componentAttrs:{}
      },
      {
        componentClass: Input,
        componentCtx: {
          name: "login",
          type: "email",
          placeholder: "Почта",
          requirments: "Некорректная почта"
        },
        rootElement:".login-widget__content",
        componentAttrs:{}
      },
      {
        componentClass: Input,
        componentCtx: {
          name: "password",
          type: "password",
          placeholder: "Пароль",
          requirments: "Некорректный пароль"
        },
        rootElement:".login-widget__content",
        componentAttrs:{}
      },
      {
        componentClass: Button,
        componentCtx: {
          title: "Авторизоваться",

        },
        rootElement:".login-widget__action",
        componentAttrs:{}
      },
    ];
    super("div", loginWidgetTemplate, {}, {}, undefined, data);
  }


}
