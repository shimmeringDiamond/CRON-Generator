/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
import App from "../../Views/Landing";
import {CronExpression} from "../Cron";
import {DaysOfWeek} from "../Cron";
import IModel from "../ModelBase";

function getBaseLog(number: number, base: number) {
    return Math.log(number) / Math.log(base);
}

const Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

class Model implements IModel{
    Days: string[]
    DayOption: DaysOfWeek

    constructor() {
        this.Days =Days;
        this.DayOption = DaysOfWeek.None;
    }
    
    UpdateCron(CurrentCron: CronExpression) {

        let Last = -1;
        for (const value in DaysOfWeek) {
            const numValue = Number(value);
            if (numValue == 0)
                continue;
            if ((numValue & this.DayOption) > 0) {
                let Append = ",";
                const numToAdd = getBaseLog(numValue, 2).toString()
                if (numValue != DaysOfWeek.Sat)
                    Append = (numValue << 1 & this.DayOption) > 1 ? "" : ",";
                if (Last == 0 || Last == -1)
                    CurrentCron.DayOfWeek.Value += numToAdd + Append;                
                else if (Append == ",")
                    CurrentCron.DayOfWeek.Value += "-" + numToAdd + Append

                Last = 1;
            } else { Last = 0; }
        }
        //add removal for ending ","
        if (CurrentCron.DayOfWeek.Value.endsWith(",")) {
            CurrentCron.DayOfWeek.Value = CurrentCron.DayOfWeek.Value.slice(0, -1);
        }
        CurrentCron.DayOfWeek.Value = CurrentCron.DayOfWeek.Value.replace("*", "");

    }
}



export {
    Model,
    Days,
}