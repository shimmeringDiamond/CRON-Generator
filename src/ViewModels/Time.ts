import { Model } from '../Models/Time'
import ViewModelBase from './ViewModelBase';

class ViewModel extends ViewModelBase<Model> {
    useless: number;
    constructor(model: Model = new Model()) {        
        super(model);
        this.useless = 0; //Its useless! such wow!
    }
    get StartTime(): string {        
        return this._Model.StartTime.getTime().toString();
    }
    set StartTime(StartTime: string) {
        const [hours, minutes] = StartTime.split(':');
        this._Model.StartTime.setHours(parseInt(hours, 10));
        this._Model.StartTime.setMinutes(parseInt(minutes, 10));
    }
    get EndTime(): string {
        return this._Model.EndTime.getTime().toString();
    }
    set EndTime(EndTime: string) {     
        const [hours, minutes] = EndTime.split(':');
        this._Model.EndTime.setHours(parseInt(hours, 10));
        this._Model.EndTime.setMinutes(parseInt(minutes, 10));       
    }
    get Toggle(): boolean {
        return this._Model.Toggle;
    }
    set Toggle(value: boolean) {
        this._Model.Toggle = value;
    }
    
}

export default ViewModel