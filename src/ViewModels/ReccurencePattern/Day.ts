import { Model } from "../../Models/ReccurencePattern/Day"
import ViewModelBase from "../ViewModelBase"

class ViewModel extends ViewModelBase<Model> {
    constructor(model: Model = new Model()) {
        super(model)
    }
    get Recur() {
        return this._Model.Recur
    }
    set Recur(value: number) {
        this._Model.Recur = this._Model.clamp(value);
        
    }
    get ToggleRecur() : boolean {
        return this._Model.ToggleRecur;
    }
    set ToggleRecur(value: boolean) {
        this._Model.ToggleRecur = value;

    }
   
}
export {
    ViewModel,
}