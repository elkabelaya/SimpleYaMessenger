import Route from "./route";


export default class Router {
  private static __instance: Router;
  private _routes: Map<string,any>;
  private _history: History;
  private _currentRoute: any;
  private _rootQuery: string;
  private _errorPath: string;

  constructor(rootQuery:string = "", errorPath:string="") {
    if (Router.__instance) {
      return Router.__instance;
    }

    this._routes = new Map();
    this._history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;
    this._errorPath = errorPath;
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
      if(event.target.pathname){
       event.preventDefault();
       this.go(event.target.pathname);
     }

    }).bind(this));


    window.onpopstate = ((event:any) => {
      this.go(event.currentTarget.location.pathname);
    }).bind(this);

    this.go(window.location.pathname);
  }

  _onRoute(path?:string) {
    if(path != null){


      const route:Route = this._routes.get(path) || this._routes.get(this._errorPath);
      if (route) {
        if (this._currentRoute) {
          this._currentRoute.leave();
        }
        route.render();
      }
    }
  }


  go(pathname?: string) {

    console.log("go", pathname);
    if(pathname){
      this._history.pushState({}, "", pathname);
      this._onRoute(pathname);
    }
  }


}
