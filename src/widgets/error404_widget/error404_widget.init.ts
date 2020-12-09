import Error from 'components/error/error';
import {IComponent} from 'components/icomponents/icomponent';
import {IComponentChild} from 'components/icomponents/icomponent_child';

export const initData: Array<IComponentChild<IComponent>> = [
	{
		componentClass: Error,
		componentAttrs: {},
		componentCtx: {
			code: 404,
			text: 'Страница не найдена'
		},
		rootElement: '.error_widget__error'
	}
];
