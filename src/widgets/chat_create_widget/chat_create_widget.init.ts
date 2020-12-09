
import Input from 'components/input/input';
import Button from 'components/button/button';
import WidgetHeader from 'components/widget_header/widget_header';
import {IComponent} from 'components/icomponents/icomponent';
import {IComponentChild} from 'components/icomponents/icomponent_child';

export const initData: Array<IComponentChild<IComponent>> = [
	{
		componentClass: WidgetHeader,
		componentCtx: {
			title: 'Новый чат'

		},
		rootElement: '.login-widget__header',
		componentAttrs: {}
	},
	{
		componentName: 'title',
		componentClass: Input,
		componentCtx: {
			name: 'title',
			placeholder: 'Название',
			pattern: '[А-Яа-я\\-]{2,15}',
			requirments: 'Используйте русские буквы, дефис'
		},
		rootElement: '.login-widget__content',
		componentAttrs: {}
	},
	{
		componentClass: Button,
		componentCtx: {
			title: 'Создать'

		},
		rootElement: '.login-widget__action',
		componentAttrs: {}
	}

];
