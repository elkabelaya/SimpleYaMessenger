import Button from '../../components/button/button';
import {IComponent} from '../../components/icomponents/icomponent';
import {IComponentChild} from '../../components/icomponents/icomponent_child';
import Input from '../../components/input/input';
import WidgetHeader from '../../components/widget_header/widget_header';

export const initData: Array<IComponentChild<IComponent>> = [
	{
		componentClass: WidgetHeader,
		componentCtx: {
			title: 'Вход'

		},
		rootElement: '.login-widget__header',
		componentAttrs: {}
	},
	{
		componentClass: Input,
		componentCtx: {
			name: 'login',
			type: 'email',
			placeholder: 'Почта',
			requirments: 'Некорректная почта'
		},
		rootElement: '.login-widget__content',
		componentAttrs: {}
	},
	{
		componentClass: Input,
		componentCtx: {
			name: 'password',
			type: 'password',
			placeholder: 'Пароль',
			requirments: 'Некорректный пароль'
		},
		rootElement: '.login-widget__content',
		componentAttrs: {}
	},
	{
		componentClass: Button,
		componentCtx: {
			title: 'Авторизоваться'

		},
		rootElement: '.login-widget__action',
		componentAttrs: {}
	}
];
