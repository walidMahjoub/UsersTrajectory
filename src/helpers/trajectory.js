const SECONDS_IN_MINUTE = 60

export const calculArrests = points => points.length

const distanceBetWeenTwoPoints = (point1, point2) => Math.pow(Math.pow((point2.x - point1.x), 2) + Math.pow((point2.y - point1.y), 2), 0.5)

export const calculDistance = points => {
    let distance = 0;
    for (let i = 1; i < points.length; i++) {
        distance += distanceBetWeenTwoPoints(points[i - 1], points[i])
    }
    return distance.toFixed(2);
}

export const trajectoryDuration = points => {
    if (!points.length) {
        return 0;
    }
    return ((points[points.length - 1].time - points[0].time) / SECONDS_IN_MINUTE).toFixed(2)
}

export const averageSpeed = points => (calculDistance(points) / trajectoryDuration(points)).toFixed(2)
