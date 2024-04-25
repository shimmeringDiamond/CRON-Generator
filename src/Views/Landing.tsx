/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react'
import './Landing.css'

import { CronExpression } from '../Models/Cron'

import { Model as TimeModel } from '../Models/Time'
import TimeViewModel from '../ViewModels/Time'
import Time from './Time'

import { Model as SelectionModel } from '../Models/ReccurencePattern/Selection'
import SelectionViewModel from '../ViewModels/ReccurencePattern/Selection'
import Selection from './ReccurencePattern/Selection'

import { Model as DayWeekModel } from '../Models/ReccurencePattern/DayWeek.ts'
import { Model as MonthModel } from '../Models/ReccurencePattern/Month.ts'
import { Model as DayModel } from '../Models/ReccurencePattern/Day.ts'

interface AppViewProps {
    selectionModel: SelectionModel
    dayWeekModel: DayWeekModel
    monthModel: MonthModel
    dayModel: DayModel
    timeModel: TimeModel
    cron: CronExpression
}

const App: React.FC<AppViewProps> = ({
    selectionModel,
    timeModel,
    dayWeekModel,
    monthModel,
    dayModel,
    cron
}) => {
    const selectionViewModel = new SelectionViewModel(selectionModel);
    const timeViewModel = new TimeViewModel(timeModel);


    const [cronString, setCronString] = useState("");

    function CronUpdate () {
        console.log(cron.toString());
        setCronString(cron.toString());
    }

    function TimeCronUpdate() { timeViewModel.UpdateCron(cron); CronUpdate(); } 
    function SelectionCronUpdate(c: CronExpression, overwriteDayOfMonth = false) { cron.combine(c, overwriteDayOfMonth); CronUpdate(); } 
   
    return (
    <>
        <fieldset>
              <legend>Time</legend>
              <Time viewModel={timeViewModel} CronUpdate={TimeCronUpdate} />
           
        </fieldset>
        <fieldset>
              <legend>Reccurence Pattern</legend>
                <Selection dayModel={dayModel}
                    dayWeekModel={dayWeekModel}
                    monthModel={monthModel}
                    UpdateCron={SelectionCronUpdate}
                    viewModel={selectionViewModel} />
        </fieldset>
        
        <fieldset>
                <legend>Cron</legend>
                {cronString }
        </fieldset>


      
    </>
  )
}


export default App;
