const PRESSURE_UNITS = 0.75006157584566

export const capitalizeFirstLetter = (str) => {
  if (!str) return ''

  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const getPressureMm = (hpa) => {
  return Math.round(hpa * PRESSURE_UNITS)
}