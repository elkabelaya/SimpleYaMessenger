import Route from "./route";
import { getRoutePath } from "./router_helpers";

export default class Router {
  private static __instance: Router;
  private _routes: Map<string,any>;
  private _history: History;
  private _currentRoute: any;
  private _rootQuery: string;

  constructor(rootQuery:string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this._routes = new Map();
    this._history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;
    Router.__instance = this;
  }

  use(pathname:string, block:any) {
        const route = new Route( block, {rootQuery: this._rootQuery});

        this._routes.set(pathname,route);

        return this;
  }

  start() {

    const clickEventName: string = document && document.ontouchstart ? 'touchstart' : 'click';
    window.addEventListener(clickEventName, ((event:any ) => {
        event.preventDefault();
      this.go(event.target.href);

    }).bind(this));


    window.onpopstate = ((event:any) => {
      console.log("onpopstate",event.currentTarget.location.href);
      this.go(event.currentTarget.location.href);
    }).bind(this);

    this.go(window.location.href);
  }

  _onRoute(path?:string) {
    if(path != null){


      const route:Route = this._routes.get(path);
      console.log("_onRoute", path, route,this._routes);
      if (route) {
        if (this._currentRoute) {
          this._currentRoute.leave();
        }
        route.render();
      }
    }
  }


  go(pathname?: string) {
    let path:string|null = getRoutePath(pathname);
    if(path){
      this._history.pushState({}, "", pathname);
      this._onRoute(path);
    }
  }


}
