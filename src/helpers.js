export const timeSince = (previous, absoluteDuration = false, current = new Date(), longForm = true) => {
    const msPerSecond = 1000
    const msPerMinute = 60 * 1000
    const msPerHour = msPerMinute * 60
    const msPerDay = msPerHour * 24
    const msPerWeek = msPerDay * 7
    const msPerYear = msPerDay * 365

    const elapsed = new Date(current) - new Date(previous)

    let humanizedTime
    if (elapsed < msPerMinute) {
        humanizedTime = '< 1m'
    }
    else if (elapsed < msPerHour) {
        const now = Math.round(elapsed / msPerMinute)
        humanizedTime = (longForm ? `${now} minutes` : `${now}m`)
    }
    else if (elapsed < msPerDay) {
        const now = Math.round(elapsed / msPerHour)
        humanizedTime = (longForm ? `${now} hours` : `${now}h`)
    }
    else if (elapsed < msPerWeek) {
        const now = Math.round(elapsed / msPerDay)
        humanizedTime = (longForm ? `${now} days` : `${now}d`)
    }
    else if (elapsed < msPerYear) {
        const now = Math.round(elapsed / msPerWeek)
        humanizedTime = (longForm ? `${now} weeks` : `${now}w`)
    }
    else {
        const now = Math.round(elapsed / msPerYear)
        humanizedTime = (longForm ? `${now} years` : `${now}y`)
    }

    if (absoluteDuration) {
        return humanizedTime
    }
    else {
        return elapsed > 0 ? `${humanizedTime} ago` : `in ${humanizedTime}`
    }
}