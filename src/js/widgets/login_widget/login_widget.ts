
import Input from  "../../components/input/input.js";
import Button from  "../../components/button/button.js";
import WidgetHeader from  "../../components/widget_header/widget_header.js";
import {template as loginWidgetTemplate} from "./login_widget.tmpl.js"
import { IComponent } from "../../components/icomponents/icomponent.js";
import Component from "../../components/component/component.js";
import { IComponentChild } from "../../components/icomponents/icomponent_child.js";
//import style from "../../../css/account_widget.css";

export default class LoginWidget extends Component {

  constructor() {
/*<div  class="login-widget__header"/>
                                  <main class="login-widget__content">
                                    <form method="POST" class="login-widget__form">
                                      <div class="login-widget__content"/>
                                      <div class="login-widget__action"/>*/
    const data:IComponentChild<IComponent>[] = [
      {
        componentClass: WidgetHeader,
        componentCtx: {
          title: "Вход",

        },
        rootElement:".login-widget__header"
      },
      {
        componentClass: Input,
        componentCtx: {
          name: "login",
          type: "email",
          placeholder: "Почта",
          requirments: "Некорректная почта"
        },
        rootElement:".login-widget__content"
      },
      {
        componentClass: Input,
        componentCtx: {
          name: "password",
          type: "password",
          placeholder: "Пароль",
          requirments: "Некорректный пароль"
        },
        rootElement:".login-widget__content"
      },
      {
        componentClass: Button,
        componentCtx: {
          title: "Авторизоваться",

        },
        rootElement:".login-widget__action"
      },
    ];
    super(undefined, loginWidgetTemplate, undefined, undefined, undefined, data);
  }


}
