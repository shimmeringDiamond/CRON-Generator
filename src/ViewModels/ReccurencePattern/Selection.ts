import { Model } from '../../Models/ReccurencePattern/Selection'
import {Options} from '../../Models/ReccurencePattern/Selection'

class ViewModel  {
    private _Model: Model;

    constructor(model: Model = new Model()) {
        this._Model = model;
    }
    getOption(): string {
        console.log(Options[this._Model.Option])
        return Options[this._Model.Option]
    }
    
    get HideDaily(): boolean {
        return (this._Model.Option & Options.Daily) < 1;
    }
    set HideDaily(Hide: boolean) {
        Hide ? this._Model.Option = Options.None : this._Model.Option = Options.Daily;
        console.log("set option to " + Options[this._Model.Option])
    }
    get HideWeekly(): boolean {
        return (this._Model.Option & Options.Weekly) < 1;
    }
    set HideWeekly(Hide: boolean) {
        Hide ? this._Model.Option == Options.None : this._Model.Option = Options.Weekly;
        console.log("set option to " + Options[this._Model.Option])
    }
    get HideMonthly(): boolean {
        return (this._Model.Option & Options.Monthly) < 1;
    }
    set HideMonthly(Hide: boolean) {
        Hide ? this._Model.Option = Options.None : this._Model.Option = Options.Monthly;
        console.log("set option to " + Options[this._Model.Option])
    }
    get HideYearly(): boolean {
        return (this._Model.Option & Options.Yearly) < 1;
    }
    set HideYearly(Hide: boolean) {
        Hide ? this._Model.Option = Options.None : this._Model.Option = Options.Yearly;
        console.log("set option to " + Options[this._Model.Option])
    }
    
}

export default ViewModel;