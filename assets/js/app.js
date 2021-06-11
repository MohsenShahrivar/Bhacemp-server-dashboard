/*
google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBackgroundColor);

function drawBackgroundColor() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Memory');

    data.addRows([
        [0, 0],   [1, 10],  [2, 23],  [3, 17],  [4, 18],  [5, 9]
    ]);

    var options = {
        colors: ['#2e8384', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        axisTitlesPosition : 'none',
        hAxis: {
            textStyle:{
                color: 'green'
            },
            title: 'Memory',
            gridlines: {
                color: 'transparent',
                minSpacing: 20
            }
        },
        vAxis: {
            textStyle:{
                color: 'green'
            },
            title: 'Popularity',
            gridlines: {
                color: 'transparent',
                minSpacing: 20
            },
            baselineColor: 'blue'
        },
        backgroundColor: 'none',
    };


    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}*/

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    // Set Data for Memory Chart
    var memoey_data = google.visualization.arrayToDataTable([
        ['Days', 'Memory'],
        ['1',  2],
        ['2',  3],
        ['3',  1],
        ['4',  3],
        ['5',  1],
        ['6',  6],
        ['7',  5.5],
        ['8',  6.5]
    ]);

    var memory_options = {
        title: 'Memory Usage',
        titleTextStyle: {
            color: "none",    // any HTML string color ('red', '#cc00cc')
            fontSize: "10", // 12, 18 whatever you want (don't specify px)
        },
        curveType: 'function',
        legend: { position: 'none' },
        colors: ['#2e8384'],
        axisTitlesPosition : 'none',
        hAxis: {
            textStyle:{
                color: 'none'
            },
            gridlines: {
                color: 'transparent',
                minSpacing: 20
            },
            baselineColor: 'none'
        },
        vAxis: {
            textStyle:{
                color: 'none'
            },
            gridlines: {
                color: 'transparent',
                minSpacing: 20
            },
            baselineColor: 'none'
        },
        backgroundColor: 'none',
        'width':100,
        'height':100
    };


    // Set Data for Logouts Chart
    var logouts_data = google.visualization.arrayToDataTable([
        ['Days', 'Logouts'],
        ['1',  1],
        ['2',  3],
        ['3',  3.5],
        ['4',  5.5],
        ['5',  2.5],
        ['6',  5],
        ['7',  4.5],
        ['8',  6],
        ['9',  4]
    ]);

    var logouts_options = {
        title: 'LogOuts Statistics',
        titleTextStyle: {
            color: "none",    // any HTML string color ('red', '#cc00cc')
            fontSize: "10", // 12, 18 whatever you want (don't specify px)
        },
        curveType: 'function',
        legend: { position: 'none' },
        colors: ['#23b9d9'],
        axisTitlesPosition : 'none',
        hAxis: {
            textStyle:{
                color: 'none'
            },
            gridlines: {
                color: 'transparent',
                minSpacing: 20
            },
            baselineColor: 'none'
        },
        vAxis: {
            textStyle:{
                color: 'none'
            },
            gridlines: {
                color: 'transparent',
                minSpacing: 20
            },
            baselineColor: 'none'
        },
        backgroundColor: 'none',
        'width':100,
        'height':100
    };


    // Set Data for Sign ups Chart
    var sign_ups_data = google.visualization.arrayToDataTable([
        ['Days', 'Sign ups'],
        ['1',  10],
        ['1.3',  9],
        ['2',  5],
        ['2.5',  4.5],
        ['3',  1],
        ['4',  4],
        ['5',  3.5],
        ['6',  8],
        ['8',  2],
        ['8.5',  2.5]
    ]);

    var sign_ups_options = {
        title: 'Sign ups Statistics',
        titleTextStyle: {
            color: "none",    // any HTML string color ('red', '#cc00cc')
            fontSize: "10", // 12, 18 whatever you want (don't specify px)
        },
        curveType: 'function',
        legend: { position: 'none' },
        colors: ['#1b59b5'],
        axisTitlesPosition : 'none',
        hAxis: {
            textStyle:{
                color: 'none'
            },
            gridlines: {
                color: 'transparent',
                minSpacing: 20
            },
            baselineColor: 'none'
        },
        vAxis: {
            textStyle:{
                color: 'none'
            },
            gridlines: {
                color: 'transparent',
                minSpacing: 20
            },
            baselineColor: 'none'
        },
        backgroundColor: 'none',
        'width':100,
        'height':100
    };


    // Set Data for Sign outs Chart
    var sign_outs_data = google.visualization.arrayToDataTable([
        ['Days', 'Sign outs'],
        ['1',  1],
        ['1.2',  1.1],
        ['2',  2],
        ['3',  0.5],
        ['4',  1.8],
        ['5',  1.5],
        ['6',  3],
        ['6.7',  1.4],
        ['7',  1]
    ]);

    var sign_outs_options = {
        title: 'Sign outs Statistics',
        titleTextStyle: {
            color: "none",    // any HTML string color ('red', '#cc00cc')
            fontSize: "10", // 12, 18 whatever you want (don't specify px)
        },
        curveType: 'function',
        legend: { position: 'none' },
        colors: ['#c7630a'],
        axisTitlesPosition : 'none',
        hAxis: {
            textStyle:{
                color: 'none'
            },
            gridlines: {
                color: 'transparent',
                minSpacing: 20
            },
            baselineColor: 'none'
        },
        vAxis: {
            textStyle:{
                color: 'none'
            },
            gridlines: {
                color: 'transparent',
                minSpacing: 20
            },
            baselineColor: 'none'
        },
        backgroundColor: 'none',
        'width':100,
        'height':100
    };


    // Set Data for Server Request Chart
    var server_request_data = google.visualization.arrayToDataTable([
        ['Days', 'WebServer 1', 'Web Server 2'],
        ['13',  0, 1],
        ['14',  8, 8],
        ['15',  23, 27],
        ['16',  5, 19],
        ['17',  18, 59],
        ['18',  1, 16],
        ['19',  78, 100],
        ['20',  92, 125],
        ['21',  125, 35],
        ['22',  42, 18]
    ]);

    var server_request_options = {
        title: 'Server Request Statistics',
        chartArea: {width: '90%', height: '70%'},
        titleTextStyle: {
            color: "none",    // any HTML string color ('red', '#cc00cc')
            fontSize: "10", // 12, 18 whatever you want (don't specify px)
        },
        curveType: 'function',
        legend: {
            position: 'top',
            alignment: 'end',
            textStyle: {
                color: '#ccc'
            }
        },
        titlePosition: 'in',
        axisTitlesPosition: 'in',
        colors: ['#c7630a', '#0dada7'],
        hAxis: {
            textStyle:{
                color: '#ccc'
            },
            gridlines: {
                color: '#ccc',
            },
            baselineColor: 'none'
        },
        vAxis: {
            textStyle:{
                color: '#ccc'
            },
            gridlines: {
                color: '#cccc',
            },
            baselineColor: 'none'
        },
        backgroundColor: 'none',
        height: 250
    };


    var memory_chart = new google.visualization.LineChart(document.getElementById('memory-chart'));

    memory_chart.draw(memoey_data, memory_options);

    var logouts_chart = new google.visualization.LineChart(document.getElementById('logouts-chart'));

    logouts_chart.draw(logouts_data, logouts_options);

    var sign_ups_chart = new google.visualization.LineChart(document.getElementById('signups-chart'));

    sign_ups_chart.draw(sign_ups_data, sign_ups_options);

    var sign_outs_chart = new google.visualization.LineChart(document.getElementById('signouts-chart'));

    sign_outs_chart.draw(sign_outs_data, sign_outs_options);

    var server_request_chart = new google.visualization.LineChart(document.getElementById('server-request-chart'));

    server_request_chart.draw(server_request_data, server_request_options);

}



google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawnewChart);
function drawnewChart() {
    var data = google.visualization.arrayToDataTable([
        ["Time", "Second", { role: "style" } ],
        ["14", 2.8, "#0dada7"],
        ["15", 1.4, "#0dada7"],
        ["16", 2, "#0dada7"],
        ["17", 1.7, "#0dada7"],
        ["18", 2.3, "#0dada7"],
        ["19", 3, "#0dada7"],
        ["20", 2.7, "#0dada7"]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        { calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation" },
        2]);

    var options = {
        title: 'Server Request Statistics',
        chartArea: {
            width: '90%'
        },
        titleTextStyle: {
            color: "none",    // any HTML string color ('red', '#cc00cc')
            fontSize: "10", // 12, 18 whatever you want (don't specify px)
        },
        hAxis: {
            textStyle:{
                color: '#ccc'
            },
            gridlines: {
                color: '#ccc',
            },
            baselineColor: 'none'
        },
        vAxis: {
            textStyle:{
                color: '#ccc'
            },
            gridlines: {
                color: '#cccc',
            },
            baselineColor: 'none'
        },
        backgroundColor: 'none',
        height: 250,
        bar: {
            groupWidth: "10%"
        },
        legend: {
            position: "none"
        },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("client-side-fullpage-load-chart"));
    chart.draw(view, options);

}