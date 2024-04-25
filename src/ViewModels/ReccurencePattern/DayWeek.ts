import {Model} from "../../Models/ReccurencePattern/DayWeek"
import {DaysOfWeek} from "../../Models/Cron"
import ViewModelBase from "../ViewModelBase"

class ViewModel extends ViewModelBase<Model> {
    constructor(model : Model = new Model()) {
        super(model);
    }
    get Days() {
        return this._Model.Days
    }
    setOption(Day: string, Value: boolean) {
        const DayValue = DaysOfWeek[Day.substring(0, 3) as keyof typeof DaysOfWeek]
        Value ? this._Model.DayOption |= DayValue : this._Model.DayOption -= DayValue       
    }
    getOption(): number {
        return this._Model.DayOption
    }

}

export {
    ViewModel,
}