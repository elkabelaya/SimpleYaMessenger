import Input from "../../components/input/input.js";
import Button from "../../components/button/button.js";
import WidgetHeader from "../../components/widget_header/widget_header.js";
import { template as loginWidgetTemplate } from "./register_widget.tmpl.js";
import Component from "../../components/component/component.js";
//import style from "../../../css/account_widget.css";
export default class LoginWidget extends Component {
    constructor() {
        const data = [
            {
                componentClass: WidgetHeader,
                componentCtx: {
                    title: "Регистрация",
                },
                rootElement: ".login-widget__header"
            },
            {
                componentClass: Input,
                componentCtx: {
                    name: "second_name",
                    placeholder: "Фамилия",
                    pattern: "[А-Яа-я\\-]]{2,15}",
                    requirments: "Используйте русские буквы, дефис"
                },
                rootElement: ".login-widget__content",
                componentAttrs: { width: "138px" },
            },
            {
                componentClass: Input,
                componentCtx: {
                    name: "first_name",
                    placeholder: "Имя",
                    pattern: "[А-Яа-я\\-]]{2,15}",
                    requirments: "Используйте русские буквы, дефис"
                },
                rootElement: ".login-widget__content",
                componentAttrs: { width: "138px" },
            },
            {
                componentClass: Input,
                componentCtx: {
                    name: "login",
                    placeholder: "Логин",
                    pattern: "[А-Яа-я\\-]]{2,15}",
                    requirments: "Используйте латинские буквы, цифры, подчеркивание"
                },
                rootElement: ".login-widget__content",
                componentAttrs: { width: "138px" },
            },
            {
                componentClass: Input,
                componentCtx: {
                    name: "login",
                    type: "email",
                    placeholder: "Почта",
                    requirments: "Невалидный адрес"
                },
                rootElement: ".login-widget__content",
                componentAttrs: { width: "138px" },
            },
            {
                componentClass: Input,
                componentCtx: {
                    name: "phone",
                    type: "tel",
                    placeholder: "Телефон",
                    pattern: "\\+[0-9]{11}",
                    requirments: "Введите номер в формате +71231112233"
                },
                rootElement: ".login-widget__content",
                componentAttrs: { width: "138px" },
            },
            {
                componentClass: Input,
                componentCtx: {
                    name: "password",
                    type: "password",
                    placeholder: "Пароль",
                    pattern: "\\S{6,15}",
                    requirments: "Не менее 6 символов: буквы, цифры, спецсимволы "
                },
                rootElement: ".login-widget__content",
                componentAttrs: { width: "138px" },
            },
            {
                componentClass: Button,
                componentCtx: {
                    title: "Зарегистрироваться",
                },
                rootElement: ".login-widget__action"
            },
        ];
        super(undefined, loginWidgetTemplate, undefined, undefined, undefined, data);
    }
}
