import trajectoris from 'data/trajectoires.json'

export default {
    fetchAllTrajectoryIds: () => trajectoris.map(item => item.id)
}
