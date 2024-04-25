import { Model } from "../../Models/ReccurencePattern/Month"
import ViewModelBase from "../ViewModelBase"

class ViewModel extends ViewModelBase<Model>{
    constructor(model: Model = new Model()) {
        super(model);
    }
    get Day(): number {
        return this._Model.Day
    }
    set Day(value: number) {
        this._Model.Day = value
    }
    get Recur(): number {
        return this._Model.Day
    }
    set Recur(value: number) {
        this._Model.Recur = this._Model.clamp(value)
    }
    get Toggle(): boolean {
        return this._Model.Toggle;
    }
    set Toggle(value: boolean) {
        this._Model.Toggle = value;
    }


}

export {
    ViewModel,
}