class TimeInterval {
    constructor(startDate, endDate) {
        if (endDate.valueOf() === "PRESENT".valueOf()){
               this.endDate = Infinity
        } else {
            this.endDate = new Date(endDate)
        }
        this.startDate = new Date(startDate)
    }
}

export {TimeInterval}