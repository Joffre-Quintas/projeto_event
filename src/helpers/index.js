const treatmentDate = (dateTime) => {
  const [date, time] = dateTime.split(' ')
  const [day, month, year] = date.split('/')

  const dateISO = `${year}-${month}-${day}T${time}:00Z`
  return dateISO
}

module.exports = {
  treatmentDate
}