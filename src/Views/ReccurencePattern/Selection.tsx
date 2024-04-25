/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useState } from 'react'
import React from 'react'
import ViewModel from '../../ViewModels/ReccurencePattern/Selection'

import DayWeek from '../../Views/ReccurencePattern/DayWeek'
import { ViewModel as DayWeekViewModel } from '../../ViewModels/ReccurencePattern/DayWeek'
import { Model as DayWeekModel } from '../../Models/ReccurencePattern/DayWeek.ts'

import Month from '../../Views/ReccurencePattern/Month'
import { ViewModel as MonthViewModel } from '../../ViewModels/ReccurencePattern/Month'
import { Model as MonthModel } from '../../Models/ReccurencePattern/Month.ts'

import Day from '../../Views/ReccurencePattern/Day'
import { ViewModel as DayViewModel } from '../../ViewModels/ReccurencePattern/Day'
import { Model as DayModel } from '../../Models/ReccurencePattern/Day.ts'

import '../Landing.css'
import { CronExpression } from '../../Models/Cron'

interface SelectionViewProps {
    viewModel: ViewModel
    dayWeekModel: DayWeekModel
    monthModel: MonthModel
    dayModel: DayModel
    UpdateCron: (c : CronExpression, overwriteDayOfMonth?: boolean, overwriteDayOfWeek?: boolean) => void;    
}

const Selection: React.FC<SelectionViewProps> = ({
    viewModel,
    dayWeekModel,
    monthModel,
    dayModel,
    UpdateCron,
}) => {
    const cron = new CronExpression();

    const dayWeekViewModel = new DayWeekViewModel(dayWeekModel);
    const monthViewModel = new MonthViewModel(monthModel);
    const dayViewModel = new DayViewModel(dayModel);

    function DayWeekUpdate() { dayWeekViewModel.UpdateCron(cron); UpdateCron(cron, false, true); } 
    function MonthUpdate() { monthViewModel.UpdateCron(cron); UpdateCron(cron, true); } 
    function DayUpdate() { dayViewModel.UpdateCron(cron); UpdateCron(cron, true); } 

    const [HideDaily, _SetHideDaily] = useState(viewModel.HideDaily);
    const SetHideDaily = (HideDaily : boolean) => {
        viewModel.HideDaily = !viewModel.HideDaily;
        _SetHideDaily(HideDaily);
    }
    const [HideWeekly, _SetHideWeely] = useState(viewModel.HideWeekly);
    const SetHideWeekly = (HideWeekly: boolean) => {
        viewModel.HideWeekly = !viewModel.HideWeekly;
        _SetHideWeely(HideWeekly);
    }
    const [HideMonthly, _SetHideMonthly] = useState(viewModel.HideMonthly);
    const SetHideMonthly = (HideMonthly: boolean) => {
        viewModel.HideMonthly = !viewModel.HideMonthly;
        _SetHideMonthly(HideMonthly);
    }
    const [HideYearly, _SetHideYearly] = useState(viewModel.HideYearly);
    const SetHideYearly = (HideYearly: boolean) => {
        viewModel.HideYearly = !viewModel.HideYearly;
        _SetHideYearly(HideYearly);
    }
    
    /*const handleRadioChange = (e: React.FormEvent<HTMLInputElement>) => {
        if (e.currentTarget.id == "Daily") {
            setHideDaily(!HideDaily);
        }

    }*/
    
    return (
        
            <div className="flex-container-horizontal">
            <div className="flex-container-vertical">
                    <div className="flex-list">
                        <input name="Option" type="radio" id="Daily" checked={!viewModel.HideDaily} onChange={() => SetHideDaily(!HideDaily)}></input>Daily</div>
                    <div className="flex-list">
                        <input name="Option" type="radio" id="Weekly" checked={!viewModel.HideWeekly} onChange={() => SetHideWeekly(!HideWeekly)}></input>Weekly</div>
                    <div className="flex-list">
                        <input name="Option" type="radio" id="Monthly" checked={!viewModel.HideMonthly} onChange={() => SetHideMonthly(!HideMonthly)}></input>Monthly</div>
                    </div>
            <div className="spacer"></div>
            <div hidden={viewModel.HideWeekly}>
                <DayWeek CronUpdate={DayWeekUpdate} viewModel={dayWeekViewModel} />

            </div>
            <div hidden={viewModel.HideMonthly}>
                <Month CronUpdate={MonthUpdate} viewModel={monthViewModel} />

            </div>
            <div hidden={viewModel.HideDaily}>
                <Day CronUpdate={DayUpdate} viewModel={dayViewModel} />

            </div>
        </div>
            
            

        
    )
}

export default Selection