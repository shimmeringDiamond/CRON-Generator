import React, { useEffect, useState } from 'react'
import {ViewModel} from '../../ViewModels/ReccurencePattern/Day'

import './DayWeek.css'

interface DayViewProps {
    viewModel: ViewModel
    CronUpdate: () => void
}
const Day: React.FC<DayViewProps> = ({ viewModel, CronUpdate }) => {    

    const [recur, _SetRecur] = useState(viewModel.Recur)
    const SetRecur = (Value: number) => {
        viewModel.Recur = Value
        _SetRecur(Value)
        CronUpdate();
    }
    const [toggleRecur, _SetToggleRecur] = useState(viewModel.ToggleRecur);
    const SetToggleRecur = (Value: boolean) => {
        console.log(Value);
        viewModel.ToggleRecur = Value;
        _SetToggleRecur(viewModel.ToggleRecur);
        CronUpdate();
    }



    return (
        
            <div className="flex-container-vertical">
                <div className="flex-list">
                <input type="checkbox" name="DayOption" checked={toggleRecur} onChange={(e: React.FormEvent<HTMLInputElement>) => SetToggleRecur(e.currentTarget.checked)}></input> Every
                <input type="text" className="small-input" value={recur} onChange={(e: React.FormEvent<HTMLInputElement>) => SetRecur(Number(e.currentTarget.value)) }></input> Day of the month
                </div>
                
            </div>
            

        
    )
}

export default Day