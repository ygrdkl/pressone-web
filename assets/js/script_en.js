'use strict';

$(function() {


  /*
  |--------------------------------------------------------------------------
  | Configure your website
  |--------------------------------------------------------------------------
  |
  | We provided several configuration variables for your ease of development.
  | Read their complete description and modify them based on your need.
  |
  */

  thesaas.config({

    /*
    |--------------------------------------------------------------------------
    | Google Analytics Tracking
    |--------------------------------------------------------------------------
    |
    | If you want to use Google Analytics, you can specify your Tracking ID in
    | this option. Your key would be a value like: UA-12345678-9
    |
    */

    googleAnalyticsId: 'UA-101243619-1',

    /*
    |--------------------------------------------------------------------------
    | Smooth Scroll
    |--------------------------------------------------------------------------
    |
    | If true, the browser's scrollbar moves smoothly on scroll and gives your
    | visitor a better experience for scrolling.
    |
    */

    smoothScroll: true

  });



  /*
  |--------------------------------------------------------------------------
  | Custom Javascript code
  |--------------------------------------------------------------------------
  |
  | Now that you configured your website, you can write additional Javascript
  | code below this comment. You might want to add more plugins and initialize
  | them in this file.
  |
  */

    var nowChart = new Chart($("#now-chart"), {
        type: 'pie',
        data: {
          labels: ["Channel", "Publisher", "Producer"],
          datasets: [{
            data: [60, 30, 10],
            backgroundColor: [
              'rgba(184, 184, 184, 1)',
              'rgba(154, 154, 154, 1)',
              'rgba(142, 166, 230, 1)'
            ],
            borderWidth: 1
          }]
        }
    })

    var futureChart = new Chart($("#future-chart"), {
        type: 'pie',
        data: {
          labels: ["Producer", "User", "Platform"],
          datasets: [{
            data: [49, 49, 2],
            backgroundColor: [
              'rgba(142, 166, 230, 1)',
              'rgba(142, 229, 200, 1)',
              'rgba(200, 144, 122, 1)'
            ],
            borderWidth: 1
          }]
        }
    })

    var contentChart = new Chart($("#content-chart"), {
        type: 'doughnut',
        data: {
          labels: ["Paid Content", "Paying Content"],
          datasets: [{
            data: [90, 10],
            backgroundColor: [
              'rgba(142, 166, 230, 1)',
              'rgba(142, 229, 200, 1)'
            ],
            borderWidth: 1
          }]
        }
    })

    var usersChart = new Chart($('#users-chart'), {
        type: 'line',
        data: {
            labels: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            datasets: [{
              label: "User",
              data: [80, 280, 480, 800, 1000, 1400, 1900, 2400, 3100, 4000],
              backgroundColor: 'rgba(142, 229, 200, 1)',
              borderColor: 'rgba(142, 229, 200, 1)',
              fill: false,
              pointStyle: 'line'
            }, {
              label: "Producer",
              data: [20, 120, 420, 800, 1500, 2200, 3000, 4000, 5000, 6000],
              backgroundColor: 'rgba(142, 166, 230, 1)',
              borderColor: 'rgba(142, 166, 230, 1)',
              fill: false,
              pointStyle: 'line'
            }]
        },
        options: {
            scales: {
              xAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Propgation'
                }
              }],
              yAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Reward'
                }
              }]
            }
        }
    })

});
