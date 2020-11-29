import Component from '../component/component';
import {template as widgetHeaderTemplate} from './widget_header.tmpl';
import {IWidgetHeaderCtx} from '../../components/icomponents/iwidget_header';
import './widget_header.less';

export default class WidgetHeader extends Component {
	constructor(props: IWidgetHeaderCtx) {
		super({class: 'login-widget__header'}, props);
	}

	get tagName() {
		return 'header';
	}

	get template() {
		return widgetHeaderTemplate;
	}

	setProps(props: IWidgetHeaderCtx) {
		super.setProps(props);
	}
}
