google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawInitial);

var chart;

var chartOptions = {
    title : 'Emotion Probabilities',
    vAxis: {
        title: 'Probability',
        maxValue: 100,
        minValue: 0,
        viewWindowMode: 'maximized'
    },
    legend:{
        position: 'none'
    },
    seriesType: 'bars',
    series: {5: {type: 'line'}},
    animation: {
        startup: true,
        duration: 500,
        easing: "out",

    }
};

var chartData = [
    ['Emotion', 'Level', {role: "style"}],
    ['Joy', 0, "#fff176"],
    ['Sadness', 0, "#1565c0"],
    ['Disgust', 0, "#388e3c"],
    ['Contempt', 0, "#795548"],
    ['Anger', 0, "#d32f2f"],
    ['Fear', 0, "#8e24aa"],
    ['Surprise', 0, "#ec407a"],
    ['Engagement', 0, "#009688"]
];

statusLog.append("<p>Setting up bar chart</p>")

function drawInitial() {

    var chartTable = google.visualization.arrayToDataTable(chartData);

    chart = new google.visualization.ColumnChart(document.getElementById('aff-graph'));
    chart.draw(chartTable, chartOptions);
}
