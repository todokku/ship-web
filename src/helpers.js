export const timeSince = (previous, absoluteDuration = false, current = new Date(), longForm = true) => {
    const msPerSecond = 1000
    const msPerMinute = msPerSecond * 60
    const msPerHour = msPerMinute * 60
    const msPerDay = msPerHour * 24
    const msPerWeek = msPerDay * 7
    const msPerYear = msPerDay * 365

    const elapsed = new Date(current) - new Date(previous)

    let now
    let humanizedTime
    if (elapsed < msPerMinute) {
        humanizedTime = (longForm ? 'less than a minute' : '< 1m')
    }
    else if (elapsed < msPerHour) {
        now = Math.round(elapsed / msPerMinute)
        humanizedTime = (longForm ? `${now} minute` : `${now}m`)
    }
    else if (elapsed < msPerDay) {
        now = Math.round(elapsed / msPerHour)
        humanizedTime = (longForm ? `${now} hour` : `${now}h`)
    }
    else if (elapsed < msPerWeek) {
        now = Math.round(elapsed / msPerDay)
        humanizedTime = (longForm ? `${now} day` : `${now}d`)
    }
    else if (elapsed < msPerYear) {
        now = Math.round(elapsed / msPerWeek)
        humanizedTime = (longForm ? `${now} week` : `${now}w`)
    }
    else {
        now = Math.round(elapsed / msPerYear)
        humanizedTime = (longForm ? `${now} year` : `${now}y`)
    }

    // Pluralize result
    if (longForm && now > 1) {
        humanizedTime += 's'
    }

    if (absoluteDuration) {
        return humanizedTime
    }
    else {
        return elapsed > 0 ? `${humanizedTime} ago` : `in ${humanizedTime}`
    }
}