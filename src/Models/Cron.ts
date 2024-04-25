class CronField {
    Value: string;
    Step: number;
    AllowedValues: number[];

    constructor(Value: string, Step: number, AllowedValues: number[]) {
        this.Value = Value;
        this.Step = Step;
        this.AllowedValues = AllowedValues;
    }
}

class CronExpression {
    Minute: CronField;
    Hour: CronField;
    DayOfMonth: CronField;
    Month: CronField;
    DayOfWeek: CronField;
    EndField: string;

    constructor(Minute: CronField = new CronField("*", 1, [0, 59]),
        Hour: CronField = new CronField("*", 1, [0, 23]),
        DayOfMonth: CronField = new CronField("*", 1, [1, 31]),
        Month: CronField = new CronField("*", 1, [1, 12]),
        DayOfWeek: CronField = new CronField("*", 1, [0, 6]),
        EndField = ""
    )
    {    
        this.Minute = Minute;
        this.Hour = Hour;
        this.DayOfMonth = DayOfMonth;
        this.Month = Month;
        this.DayOfWeek = DayOfWeek;
        this.EndField = EndField;
    }
    toString(): string {
        return`${this.Minute.Value}${this.Minute.Step === 1 ? '' : `/${this.Minute.Step}`}
             ${this.Hour.Value}${this.Hour.Step === 1 ? '' : `/${this.Hour.Step}`}
             ${this.DayOfMonth.Value}${this.DayOfMonth.Step === 1 ? '' : `/${this.DayOfMonth.Step}`}
             ${this.Month.Value}${this.Month.Step === 1 ? '' : `/${this.Month.Step}`}
             ${this.DayOfWeek.Value}${this.DayOfWeek.Step === 1 ? '' : `/${this.DayOfWeek.Step}`}
             ${this.EndField}`;
    }
    combine(addition: CronExpression, overwriteDayOfMonth = false, overwiteDayOfWeek=false): CronExpression {
        //foreach assigned cron field in addition, if the corresponding value in base is not assigned, set it
        this.Minute = addition.Minute.Value != "*" ? addition.Minute : this.Minute;
        this.Hour = addition.Hour.Value != "*" ? addition.Hour : this.Hour;
        if (overwriteDayOfMonth)
            this.DayOfMonth = addition.DayOfMonth
        else
            this.DayOfMonth = addition.DayOfMonth.Value != "*" ? addition.DayOfMonth : this.DayOfMonth;
        this.Month = addition.Month.Value != "*" ? addition.Month : this.Month;
        this.Month.Step = addition.Month.Step;
        if (overwiteDayOfWeek) {
            this.DayOfWeek = addition.DayOfWeek;
            this.EndField = addition.EndField;
        }       
        else {
            this.DayOfWeek = addition.DayOfWeek.Value != "*" ? addition.DayOfWeek : this.DayOfWeek;
            this.EndField = addition.EndField + this.EndField;
        }
            

        return this;
    }
}
enum DaysOfWeek {
    None = 0,
    Sun = 1,
    Mon = 1 << 1,
    Tue = 1 << 2,
    Wed = 1 << 3,
    Thu = 1 << 4,
    Fri = 1 << 5,
    Sat = 1 << 6
}
enum MonthsOfYear {
    None = 0,
    January = 1,
    February = 1 << 1,
    March = 1 << 2,
    April = 1 << 3,
    May = 1 << 4,
    June = 1 << 5,
    July = 1 << 6,
    August = 1 << 7,
    September = 1 << 8,
    October = 1 << 9,
    November = 1 << 10,
    December = 1 << 11
}

let Minute = new CronField("", 0, [0, 59]);
let Hour = new CronField("", 0, [0, 23]);
let DayOfMonth = new CronField("", 0, [1, 31]);
let Month = new CronField("", 0, [1, 12]);
let DayOfWeek = new CronField("", 0, [0, 6]);

let Cron = new CronExpression(Minute, Hour, DayOfMonth, Month, DayOfWeek, "");

export {
    CronExpression,
    MonthsOfYear,
    DaysOfWeek,
}