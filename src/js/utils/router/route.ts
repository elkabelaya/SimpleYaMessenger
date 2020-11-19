import Component from '../../components/component/component';
import {render} from '../render_dom';
import { IRoutCTX } from '../iutils/irout';

export default class Route {
    private _blockClass: unknown;
    private _block?: Component;
    private _props: unknown;

    constructor(view:unknown , props:IRoutCTX) {
        this._blockClass = view;
        this._block = undefined;
        this._props = props;
    }


    leave() {
        if (this._block) {
            this._block.hide();
        }
    }


    render() {
        if (!this._block) {
            this._block = new this._blockClass();


        }
        this._block!.render();
        render(this._props.rootQuery, this._block!);
        this._block!.show();
    }
}
