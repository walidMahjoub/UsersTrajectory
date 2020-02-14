import React, {useState, useEffect} from 'react'
import trajectoryApi from 'apis/trajectory'
import {FormattedMessage} from 'react-intl'
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
} from "bizcharts"
import {calculArrests, calculDistance, trajectoryDuration, averageSpeed} from 'helpers/trajectory'
import style from './UserTrajectoryInfos.scss'

const UserTrajectoryInfos = ({match: {params: {userId}}}) => {
    const [points, setPoints] = useState([])

    useEffect(() => {
        const fetchTrajectoryPoints = () => {
            return trajectoryApi.fetchTrajectoryPoints(userId)
        }
        setPoints(fetchTrajectoryPoints())
    }, [userId])

    if (!points) {
        return (
            <FormattedMessage
                id="app.main.userTrajectory.noTrajectory"
                values={{id: userId}}
            />
        )
    }
    return (
        <div>
            <h1>
                <FormattedMessage
                    id="app.main.userTrajectory.title"
                    values={{id: userId}}
                />
            </h1>
            <div className={style.container}>
                <div>
                    <div>
                        <FormattedMessage
                            id="app.main.userTrajectory.nbArrests"
                            values={{nbArrests: calculArrests(points)}}
                        />
                    </div>
                    <div>
                        <FormattedMessage
                            id="app.main.userTrajectory.distance"
                            values={{distance: calculDistance(points)}}
                        />
                    </div>
                    <div>
                        <FormattedMessage
                            id="app.main.userTrajectory.trajectoryDuration"
                            values={{trajectoryDuration: trajectoryDuration(points)}}
                        />
                    </div>
                    <div>
                        <FormattedMessage
                            id="app.main.userTrajectory.averageSpeed"
                            values={{averageSpeed: averageSpeed(points)}}
                        />
                    </div>
                </div>
                <div>
                    <Chart height={window.innerHeight} data={points} forceFit>
                        <Axis name="x"/>
                        <Axis name="y"/>
                        <Tooltip crosshairs={{type: "y"}}/>
                        <Geom type="line" position="x*y"/>
                    </Chart>
                </div>

            </div>
        </div>
    )
}

export default UserTrajectoryInfos
