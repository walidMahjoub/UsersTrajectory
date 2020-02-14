import trajectoris from 'data/trajectoires.json'

export default {
    fetchAllTrajectoryIds: () => trajectoris.map(item => item.id),
    fetchTrajectoryPoints: id => {
        try{
            const trajectory = trajectoris.find(item => item.id === id )
            if(!trajectory) {
                throw `no trajectory with id : ${id}`
            }
            return trajectory.points.sort(({timeA}, timeB) => timeA < timeB)
        } catch (e) {
            console.error(e)
            return null
        }
    }
}

