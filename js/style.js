

$(document).ready(function(){


    // input focus in login form
    $('.form-group-login').click(function(){
        $(this).children('input').focus();
    });
 
    $('.sidebar-toggle, .close-mobile').click(function(){
      $('.dashboard').toggleClass('hide-sidebar');
    });
    $('.sort').click(function(){
      $('.sort').removeClass('active');
      $(this).toggleClass('active');
    });

    $('#home-tab').click(function(){
      $('.right-tabs-control').removeClass('show-button'); 
    });
    $('#profile-tab').click(function(){
      $('.right-tabs-control').addClass('show-button'); 
    });
 
       let ctx = document.getElementById("chart").getContext('2d'); 
       var chartEl = document.getElementById("chart");
        chartEl.height = 50;

        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, "#ff6c00");
        gradientStroke.addColorStop(1, "#ff3b74");

        var gradientBkgrd = ctx.createLinearGradient(0, 100, 0, 400);
        gradientBkgrd.addColorStop(0, "rgba(244,94,132,0.2)");
        gradientBkgrd.addColorStop(1, "rgba(249,135,94,0)");

        let draw = Chart.controllers.line.prototype.draw;
        Chart.controllers.line = Chart.controllers.line.extend({
            draw: function() {
                draw.apply(this, arguments);
                let ctx = this.chart.chart.ctx;
                let _stroke = ctx.stroke;
                ctx.stroke = function() {
                    ctx.save();
                    //ctx.shadowColor = 'rgba(244,94,132,0.8)';
                    ctx.shadowBlur = 8;
                    ctx.shadowOffsetX = 0;
                    ctx.shadowOffsetY = 6;
                    _stroke.apply(this, arguments)
                    ctx.restore();
                }
            }
        });
 

        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: ["12AM", "2AM", "4AM", "6AM", "8AM", "10AM", "12PM", "2PM", "4PM", "6PM", "8PM", "10PM", "11PM"],
                datasets: [{
                    label: "Temperature",
                    backgroundColor: gradientBkgrd,
                    borderColor: gradientStroke,
                    data: [21, 22, 23, 12, 30, 12, 12, 12, 21, 22, 23, 35, 23, 12, 34, 12, 21, 22, 23, 12, 23, 12, 36, 12, 21, 22, 23, 12, 23, 12, 34, 12],
                    pointBorderColor: "#798DA6",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: gradientStroke,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 4,
                    pointRadius: 3,
                    borderWidth: 2,
                    pointHitRadius: 16,
                    tension: 0
                }]
            },

            // Configuration options go here
            options: {
                maintainAspectRatio: false,
                tooltips: {
                    backgroundColor:'#F3F9FD',
                    displayColors:false,
                    titleFontColor: '#000', 
                    bodyFontColor: '#000'
                
                },      
            legend: {
                    display: false
            },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display:false
                        },
                        ticks: {
                            fontColor: "#798DA6", 
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            fontColor: "#798DA6", 
                            // Include a dollar sign in the ticks
                            callback: function(value, index, values) {
                                return (value / 1) + ' C';
                            }
                        }
                    }],
                }
            }
        });
        

        let ctx2 = document.getElementById("chart2").getContext('2d'); 
        var chartEl2 = document.getElementById("chart2");
        chartEl2.height = 50;

        var gradientStroke = ctx2.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, "#ff6c00");
        gradientStroke.addColorStop(1, "#ff3b74");

        var gradientBkgrd = ctx2.createLinearGradient(0, 100, 0, 400);
        gradientBkgrd.addColorStop(0, "rgba(244,94,132,0.2)");
        gradientBkgrd.addColorStop(1, "rgba(249,135,94,0)");

        let draw2 = Chart.controllers.line.prototype.draw;
        Chart.controllers.line = Chart.controllers.line.extend({
            draw: function() {
                draw2.apply(this, arguments);
                let ctx2 = this.chart.chart.ctx2;
                let _stroke = ctx2.stroke;
                ctx2.stroke = function() {
                    ctx.save();
                    //ctx.shadowColor = 'rgba(244,94,132,0.8)';
                    ctx2.shadowBlur = 8;
                    ctx2.shadowOffsetX = 0;
                    ctx2.shadowOffsetY = 6;
                    _stroke.apply(this, arguments)
                    ctx2.restore();
                }
            }
        });

        var chart2 = new Chart(ctx2, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: ["12AM", "2AM", "4AM", "6AM", "8AM", "10AM", "12PM", "2PM", "4PM", "6PM", "8PM", "10PM", "11PM"],
                datasets: [{
                    label: "Temperature",
                    backgroundColor: gradientBkgrd,
                    borderColor: gradientStroke,
                    data: [21, 22, 30, 22, 22, 30, 40, 30, 21, 22, 23, 3, 20, 40],
                    pointBorderColor: "#798DA6",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: gradientStroke,
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 4,
                    pointRadius: 3,
                    borderWidth: 2,
                    pointHitRadius: 16,
                    tension: 0
                }]
            },

            // Configuration options go here
            options: {
                maintainAspectRatio: false,
                tooltips: {
                    backgroundColor:'#F3F9FD',
                    displayColors:false,
                    titleFontColor: '#000', 
                    bodyFontColor: '#000'
                
                },      
            legend: {
                    display: false
            },
                scales: {
                    xAxes: [{
                        gridLines: {
                            display:false
                        },
                        ticks: {
                            fontColor: "#798DA6", 
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            fontColor: "#798DA6", 
                            // Include a dollar sign in the ticks
                            callback: function(value, index, values) {
                                return (value / 1) + '%';
                            }
                        }
                    }],
                }
            }
        }); 
    
     

});

