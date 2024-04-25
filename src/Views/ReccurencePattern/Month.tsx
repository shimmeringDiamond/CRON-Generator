import React, { useState } from 'react'
import {ViewModel} from '../../ViewModels/ReccurencePattern/Month'

import './DayWeek.css'

interface MonthViewProps {
    viewModel: ViewModel
    CronUpdate: () => void
}
const Month: React.FC<MonthViewProps> = ({ viewModel, CronUpdate }) => {

    const [recur, _SetRecur] = useState(viewModel.Recur)
    const SetRecur = (Value: number) => {
        viewModel.Recur = Value;
        _SetRecur(Value);
        CronUpdate();
    }
    const [day, _SetDay] = useState(viewModel.Day)
    const SetDay = (Value: number) => {        
        viewModel.Day = Value;
        _SetDay(viewModel.Day);
        CronUpdate();
    }
    const [toggle, _SetToggle] = useState(viewModel.Toggle);
    const SetToggle = (Value: boolean) => {
        console.log(Value);
        viewModel.Toggle = Value;
        _SetToggle(viewModel.Toggle);
        CronUpdate();
    }


    return (
        <>
            <div className="flex-container-vertical">
                <div className="flex-list">
                    <input type="checkbox" name="MonthOption" checked={toggle} onChange={(e: React.FormEvent<HTMLInputElement>) => SetToggle(e.currentTarget.checked)}></input>
                    Day <input className="small-input" type="text" value={day} onChange={(e: React.FormEvent<HTMLInputElement>) => SetDay(Number(e.currentTarget.value))}></input>
                    Of Every <input className="small-input" type="text" value={recur} onChange={(e: React.FormEvent<HTMLInputElement>) => SetRecur(Number(e.currentTarget.value))}></input>Month(s)

                </div>                
            </div>
        </>

    )
}
export default Month