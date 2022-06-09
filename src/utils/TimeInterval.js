class TimeInterval {
  constructor(startDate, endDate) {
    if (endDate===null || endDate===Infinity || endDate.valueOf() === "PRESENT".valueOf()) {
      this.endDate = Infinity
    } else {
      this.endDate = new Date(endDate)
    }
    this.startDate = new Date(startDate)
  }

  getStart() {
    return this.startDate
  }

  getEnd() {
    return ((this.endDate === Infinity || this.endDate == null) ? new Date() : this.endDate)
  }

}

function expandToMatch(ti,other){
  if (!(ti instanceof TimeInterval))
    ti = new TimeInterval(ti.startDate, ti.endDate)
  if (!(other instanceof TimeInterval))
    other = new TimeInterval(other.startDate, other.endDate)
  ti.startDate = ti.startDate < other.startDate ? ti.startDate : other.startDate;
  ti.endDate = ti.endDate > other.endDate ? ti.endDate : other.endDate;
  return ti;
}

function isIn(ti, date) {
  if (!(ti instanceof TimeInterval))
    ti = new TimeInterval(ti.startDate, ti.endDate)
  return ti.startDate < date && date < ti.endDate;
}

export {TimeInterval, isIn, expandToMatch}
