import { CronExpression } from "./Cron";

interface IModel {
    UpdateCron: (CurrentCron: CronExpression) => void;
}

export default IModel;