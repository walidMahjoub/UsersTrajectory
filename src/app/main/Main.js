import React from 'react'
import {Route} from 'react-router-dom'
import UsersList from './usersList/UsersList'
import UserTrajectoryInfos from './userTrajectoyInfos/UserTrajectoryInfos'
import style from './Main.scss'

const Main = () => (
    <div className={style.main}>
            <Route exact path="/" component={UsersList}/>
            <Route exact path="/user-trajectory/:userId" component={UserTrajectoryInfos}/>
    </div>
)

export default Main
