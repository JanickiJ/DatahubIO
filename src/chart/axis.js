class Axis {
    unit;
    decimals;

    constructor(unit, decimals) {
        if (unit == null) {
            unit = ""
        }
        if (decimals == null) {
            decimals = 2
        }
        this.unit = unit;
        this.decimals = decimals;
    }
}

export {Axis}