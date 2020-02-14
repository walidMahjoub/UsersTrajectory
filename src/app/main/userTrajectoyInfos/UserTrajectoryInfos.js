import React, {useState, useEffect} from 'react'
import trajectoryApi from 'apis/trajectory'
import {FormattedMessage} from 'react-intl'
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
} from "bizcharts"

const UserTrajectoryInfos = ({match : {params: {userId}}}) => {
    const [points, setPoints] = useState([])

    useEffect(() => {
        const fetchTrajectoryPoints = () => {
            return trajectoryApi.fetchTrajectoryPoints(userId)
        }
        setPoints(fetchTrajectoryPoints())
    }, [userId])

    if(!points) {
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
            <Chart height={window.innerHeight} data={points} forceFit>
                <Axis name="x" />
                <Axis name="y" />
                <Tooltip crosshairs={{ type : "y" }} />
                <Geom type="line" position="x*y" />
            </Chart>
        </div>
    )
}

export default UserTrajectoryInfos
