class AxisSide {
    static LEFT = new AxisSide("LEFT")
    static RIGHT = new AxisSide("RIGHT")

    constructor(side) {
        side = side.toLowerCase()
        if (side !== "left" && side !== "right") {
            throw new Error("side != left and right")
        }
        this.value = side
    }

}

export {AxisSide}