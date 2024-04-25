import { ViewModel } from "../ViewModels/ReccurencePattern/DayWeek";
import {CronExpression} from "./Cron";
import IModel from "./ModelBase";

class Model implements IModel{
    StartTime: Date;
    EndTime: Date;
    Toggle: boolean;
    constructor() {
        this.StartTime = new Date();
        this.EndTime = new Date();
        this.Toggle = true;
        this.StartTime.setMinutes(0); this.StartTime.setSeconds(0); this.StartTime.setHours(9);
        this.EndTime.setMinutes(0); this.EndTime.setSeconds(0); this.EndTime.setHours(0);

    }

    UpdateCron(CurrentCron: CronExpression) {
        if (this.Toggle) {
            CurrentCron.Minute.Value = this.StartTime.getMinutes().toString();
            CurrentCron.Hour.Value = this.StartTime.getHours().toString();

            if (this.EndTime != null) {
                CurrentCron.EndField = `ending at ${this.EndTime.toLocaleTimeString()}`
            }
        }
        else {
            CurrentCron.Minute.Value = "*";
            CurrentCron.Hour.Value = "*";
            CurrentCron.EndField = "";
        }
        
    }

}

export {
    Model
} 