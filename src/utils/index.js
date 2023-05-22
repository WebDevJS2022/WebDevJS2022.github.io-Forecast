const PRESSURE_UNITS = 0.750062 // для перевода из гектоПаскаль в мм рт ст

export const capitalizeFirstLetter = (str) => {
    if (!str) return ''

    return str.charAt(0).toUpperCase() + str.slice(1)
}

export const getPressureMm = (hpa) => {
    return Math.round(hpa * PRESSURE_UNITS)
}