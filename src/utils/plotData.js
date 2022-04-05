export default class PlotData {
    points = [];
    charts = {};

    constructor(title) {
        this.title = title;
    }

    addPoint(timestamp, values) {
        let diff = Object.keys(values)
            .filter(v => !Object.keys(this.charts).includes(v));
        if (diff.length) {
            const errorMessage = "chart names not defined";
            throw new Error(diff + errorMessage);
        }
        this.points.push({
            "timestamp": timestamp,
            "values": values
        });
    }

    addChartInfo(name, color = null) {
        if (color == null) {
            color = PlotData.randomColor();
        }
        this.charts[name] = {
            "color": color
        }
    }

    static randomColor() {
        return "#" + Math.floor(Math.random() * 16777215)
            .toString(16);
    }
}