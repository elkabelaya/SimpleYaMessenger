import Component from '../../components/component/component';
import {INewable} from '../custom_types';
import Route from './route';

export default class Router {
	private static __instance: Router;
	private readonly _routes: Map<string, any>;
	private readonly _history: History;
	private readonly _currentRoute?: Route;
	private readonly _rootQuery: string;
	private readonly _errorPath: string;

	constructor(rootQuery = '', errorPath = '') {
		if (Router.__instance) {
			// TODO: переписать класс без варнинга
			/* eslint-disable-next-line no-constructor-return */
			return Router.__instance;
		}

		this._routes = new Map();
		this._history = window.history;
		this._rootQuery = rootQuery;
		this._errorPath = errorPath;
		Router.__instance = this;
	}

	use(pathname: string, block: INewable<Component>) {
		const route = new Route(block, {rootQuery: this._rootQuery});
		this._routes.set(pathname, route);
		return this;
	}

	start() {
		const clickEventName: string = document?.ontouchstart ? 'touchstart' : 'click';
		window.addEventListener(clickEventName, (event: any) => {
			if (event.target.pathname) {
				event.preventDefault();
				this.go(event.target.pathname);
			}
		});

		window.onpopstate = ((event: any) => {
			this.go(event.currentTarget.location.pathname);
		});

		this.go(window.location.pathname);
	}

	_onRoute(path?: string) {
		if (path !== undefined) {
			const route: Route = this._routes.get(path) || this._routes.get(this._errorPath);
			if (route) {
				if (this._currentRoute) {
					this._currentRoute.leave();
				}

				route.render();
			}
		}
	}

	go(pathname?: string) {
		console.log('go', pathname);
		if (pathname) {
			this._history.pushState({}, '', pathname);
			this._onRoute(pathname);
		}
	}
}
