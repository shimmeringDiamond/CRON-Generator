import { CronExpression } from "../Models/Cron";
import IModel from "../Models/ModelBase";

class ViewModelBase<TModel extends IModel> {
    protected _Model: TModel;
    constructor(model: TModel) {
        this._Model = model;
    }
    UpdateCron(currentCron: CronExpression) {
        this._Model.UpdateCron(currentCron);
    }
}
export default ViewModelBase;