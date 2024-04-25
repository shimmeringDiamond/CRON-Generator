import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Views/Landing.tsx'

import { Model as SelectionModel } from './Models/ReccurencePattern/Selection.ts'
import { Model as TimeModel } from './Models/Time.ts'
import { Model as DayWeekModel } from './Models/ReccurencePattern/DayWeek.ts'
import { Model as MonthModel } from './Models/ReccurencePattern/Month.ts'
import { Model as DayModel } from './Models/ReccurencePattern/Day.ts'


import './index.css'
import { CronExpression } from './Models/Cron.ts'

const selectionModel = new SelectionModel();
const timeModel = new TimeModel();
const dayWeekModel = new DayWeekModel();
const monthModel = new MonthModel();
const dayModel = new DayModel();

const cron = new CronExpression();

console.log("new main app")

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <App dayWeekModel={dayWeekModel}
            monthModel={monthModel}
            dayModel={dayModel}
            selectionModel={selectionModel}
            timeModel={timeModel}
            cron={cron}        />
  </React.StrictMode>
)
