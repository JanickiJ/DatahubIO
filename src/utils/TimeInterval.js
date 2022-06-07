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
    return ((this.endDate === Infinity) ? new Date() : this.endDate)
  }

  // isIn(date) {
  //   return this.startDate < date && date < this.endDate;
  // }

  expandToMatch(other){
    this.startDate = this.startDate < other.startDate ? this.startDate : other.startDate;
    this.endDate = this.endDate > other.endDate ? this.endDate : other.endDate;
  }
}

function isIn(ti, date) {
  ti = new TimeInterval(ti.startDate, ti.endDate)
  return ti.startDate < date && date < ti.endDate;
}

export {TimeInterval, isIn}