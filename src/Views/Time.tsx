/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from 'react'
import React from 'react'
import ViewModel from '../ViewModels/Time'
import './Landing.css'

interface UserViewProps {
    viewModel: ViewModel
    CronUpdate: () => void
}

const Time: React.FC<UserViewProps> = ({   
    viewModel,
    CronUpdate,
}) => {
    const [StartTime, SetStartTime] = useState(viewModel.StartTime);
    const [EndTime, SetEndTime] = useState(viewModel.EndTime);

    const handleStartTimeChange = (e: React.FormEvent<HTMLInputElement>) => {      
        viewModel.StartTime = e.currentTarget.value;
        SetStartTime(e.currentTarget.value);
        CronUpdate();
    }
    const handleEndTimeChange = (e: React.FormEvent<HTMLInputElement>) => {
        viewModel.EndTime = e.currentTarget.value;
        SetEndTime(e.currentTarget.value);
        CronUpdate();
    }
    const toggle = () => {
        viewModel.Toggle = !viewModel.Toggle;
        CronUpdate();
    }
    
    return (
        <>
            <button onClick={toggle}>Toggle</button>
        <label> Start:
                <input type="time" value={StartTime} onChange={handleStartTimeChange}></input>
        </label>
        <label> End:
                <input type="time" value={EndTime} onChange={handleEndTimeChange}></input>
            </label>
        </>
    )
}

export default Time