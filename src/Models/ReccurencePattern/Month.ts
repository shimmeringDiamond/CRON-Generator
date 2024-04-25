import {CronExpression} from "../Cron";
import IModel from "../ModelBase";

class Model implements IModel {
    Day: number;
    Recur: number;
    Toggle: boolean;

    constructor() {
        this.Day = 1;
        this.Recur = 1;
        this.Toggle = false;
    }
    clamp(value: number): number {
        const allowedValues = new CronExpression().Month.AllowedValues;
        return Math.min(Math.max(value, allowedValues[0]), allowedValues[1]);
    }
    UpdateCron(CurrentCron: CronExpression) {
        if (this.Toggle) {
            CurrentCron.Month.Step = this.Recur;
            CurrentCron.DayOfMonth.Value = this.Day.toString();
        }       
    }
}


export {
    Model,
}