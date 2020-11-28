import Button from '../../components/button/button';
import {IComponent} from '../../components/icomponents/icomponent';
import {IComponentChild} from '../../components/icomponents/icomponent_child';
import Input from '../../components/input/input';
import WidgetHeader from '../../components/widget_header/widget_header';

export const dataInit: Array<IComponentChild<IComponent>> = [
	{
		componentClass: WidgetHeader,
		componentCtx: {
			title: 'Регистрация'

		},
		rootElement: '.login-widget__header',
		componentAttrs: {}
	},
	{
		componentClass: Input,
		componentCtx: {
			name: 'second_name',
			placeholder: 'Фамилия',
			pattern: '[А-Яа-я\\-]{2,15}',
			requirments: 'Используйте русские буквы, дефис'
		},
		rootElement: '.register-widget__content',
		componentAttrs: {style: 'width:138px'}
	},
	{
		componentClass: Input,
		componentCtx: {
			name: 'first_name',
			placeholder: 'Имя',
			pattern: '[А-Яа-я\\-]{2,15}',
			requirments: 'Используйте русские буквы, дефис'
		},
		rootElement: '.register-widget__content',
		componentAttrs: {style: 'width:138px'}
	},
	{
		componentClass: Input,
		componentCtx: {
			name: 'login',
			placeholder: 'Логин',
			pattern: '[А-Яа-я\\-]{2,15}',
			requirments: 'Используйте латинские буквы, цифры, подчеркивание'
		},
		rootElement: '.register-widget__content',
		componentAttrs: {style: 'width:138px'}
	},
	{
		componentClass: Input,
		componentCtx: {
			name: 'email',
			type: 'email',
			placeholder: 'Почта',
			requirments: 'Невалидный адрес'
		},
		rootElement: '.register-widget__content',
		componentAttrs: {style: 'width:138px'}
	},
	{
		componentClass: Input,
		componentCtx: {
			name: 'phone',
			type: 'tel',
			placeholder: 'Телефон',
			pattern: '\\+[0-9]{11}',
			requirments: 'Введите номер в формате +71231112233'
		},
		rootElement: '.register-widget__content',
		componentAttrs: {style: 'width:138px'}
	},
	{
		componentClass: Input,
		componentCtx: {
			name: 'password',
			type: 'password',
			placeholder: 'Пароль',
			pattern: '\\S{6,15}',
			requirments: 'Не менее 6 символов: буквы, цифры, спецсимволы '
		},
		rootElement: '.register-widget__content',
		componentAttrs: {style: 'width:138px'}
	},
	{
		componentClass: Button,
		componentCtx: {
			title: 'Зарегистрироваться'

		},
		rootElement: '.login-widget__action',
		componentAttrs: {}
	}
];
