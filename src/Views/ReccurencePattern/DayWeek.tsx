import { useState } from 'react'
import React from 'react'
import {ViewModel} from '../../ViewModels/ReccurencePattern/DayWeek'

import './DayWeek.css'

interface DayWeekViewProps {
    viewModel: ViewModel
    CronUpdate: () => void
}
const DayWeek: React.FC<DayWeekViewProps> = ({ viewModel, CronUpdate }) => {

    const [changed, _SetChanged] = useState(0)
    const SetChanged = (Day: string, Value: boolean) => {
        _SetChanged(changed+1)
        viewModel.setOption(Day, Value)
        CronUpdate();
    }


    return (
        <>       
        <table cellSpacing="5" cellPadding="5">
        <tbody>
            <tr>
                {viewModel.Days.map((day, index) => (
                    <th key={index}>{day}</th>
                ))}              
            </tr>       
       
            <tr>
                    {viewModel.Days.map((day, index) => (
                        <td key={index}><input onClick={(e: React.FormEvent<HTMLInputElement>) => SetChanged(day, e.currentTarget.checked)} type="checkbox"></input></td>
                )) }
                
            </tr>
        </tbody>
        </table>
        </>
        
        

    )
}

export default DayWeek