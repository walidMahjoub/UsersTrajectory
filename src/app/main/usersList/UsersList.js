import React, {useEffect, useState} from 'react'
import {FormattedMessage} from 'react-intl'
import {Table, Icon} from 'antd';
import trajectoryApi from 'apis/trajectory'

const UsersList = ({history}) => {
    const [trajectoryIds, setTrajectoryIds] = useState([])

    const redirectToUserTrajectory = userId => {
        const path = `/user-trajectory/${userId}`
        history.push(path)
    }

    const columns = [
        {
            title: <FormattedMessage id="app.main.userList.title"/>,
            dataIndex: 'id', key: 'id'
        },
        {
            title: <FormattedMessage id="app.main.userList.action"/>,
            dataIndex: '',
            key: 'x',
            render: record => <Icon type="zoom-in" onClick={() => redirectToUserTrajectory(record.id)}/>,
        },
    ];

    useEffect(() => {
        const fetchAllTrajectoryIds = () => {
            const idList = trajectoryApi.fetchAllTrajectoryIds()
            setTrajectoryIds(idList.map(item => ({id: item, key: item})))
        }
        fetchAllTrajectoryIds()
    }, [])

    return (
        <div>
            <h1>
                <FormattedMessage id="app.main.userList.title"/>
                <Table dataSource={trajectoryIds} columns={columns}/>
            </h1>
        </div>
    )
}

export default UsersList
