import {CronExpression} from "../Cron";
import IModel from "../ModelBase";


class Model implements IModel {
    Recur: number
    Weekday: boolean
    ToggleRecur: boolean
    constructor() {
        this.Weekday = false
        this.Recur = 1
        this.ToggleRecur = false
    }
    clamp(value: number): number {
        const allowedValues = new CronExpression().DayOfMonth.AllowedValues;
        return Math.min(Math.max(value, allowedValues[0]), allowedValues[1]);
    }
    UpdateCron(CurrentCron: CronExpression) {
        if (this.ToggleRecur && this.Recur != 1)
            CurrentCron.DayOfMonth.Step = this.Recur;
        else
            CurrentCron.DayOfMonth.Step = 1;

    }
}
export {
    Model,
}