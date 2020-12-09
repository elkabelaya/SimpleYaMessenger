import Input from 'components/input/input';
import Button from 'components/button/button';
import Avatar from 'components/avatar/avatar';
import {IComponent} from 'components/icomponents/icomponent';
import {IComponentChild} from 'components/icomponents/icomponent_child';

export const initData: Array<IComponentChild<IComponent>> = [
	{
		componentName: 'avatar',
		componentClass: Avatar,
		componentAttrs: {},
		componentCtx: {
			url: ''

		},
		rootElement: '.account_widget__avatar'
	},
	{
		componentName: 'second_name',
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
			name: 'display_name',
			placeholder: 'Ник',
			pattern: '[А-Яа-я\\-]{2,15}',
			requirments: 'Введите ник'
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
			title: 'Сохранить'

		},
		rootElement: '.login-widget__action',
		componentAttrs: {}
	}
];
