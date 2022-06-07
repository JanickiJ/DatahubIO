class TimeInterval {
  constructor(startDate, endDate) {
    if (endDate===null || endDate.valueOf() === "PRESENT".valueOf()) {
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

  // isIn(date) {
  //   return this.startDate < date && date < this.endDate;
  // }aaaa
}

function expandToMatch(dupa,other){
  if (!(dupa instanceof TimeInterval))
    dupa = new TimeInterval(dupa.startDate, dupa.endDate)
  if (!(other instanceof TimeInterval))
    other = new TimeInterval(other.startDate, other.endDate)
  dupa.startDate = dupa.startDate < other.startDate ? dupa.startDate : other.startDate;
  dupa.endDate = dupa.endDate > other.endDate ? dupa.endDate : other.endDate;
  return dupa;
}

function isIn(ti, date) {
  if (!(ti instanceof TimeInterval))
    ti = new TimeInterval(ti.startDate, ti.endDate)
  return ti.startDate < date && date < ti.endDate;
}

export {TimeInterval, isIn, expandToMatch}
