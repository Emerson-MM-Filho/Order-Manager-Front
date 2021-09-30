export const newDate = new Date()
export const day = newDate.getDate()
export const month = newDate.getMonth()+1
export const year = newDate.getFullYear()
export const hour = newDate.getHours()
export const minutes = newDate.getMinutes()

export const currentDate = `${year}-${month < 10 ? `0${month}` : month}-${day}`
export const currentTime = `${hour}:${minutes < 10 ? `0${minutes}` : minutes}`