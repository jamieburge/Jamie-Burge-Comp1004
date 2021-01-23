$(document).ready(function () {
    $('#map').click(function () {
        $('#page-content-wrapper').load('Map.html');
    })
    $('#home').click(function () {
        $('#page-content-wrapper').load('IndexPanel.html');
    })
    $('#ig').click(function () {
        $('#page-content-wrapper').load('ig.html');
    })
    $('#gjg').click(function () {
        $('#page-content-wrapper').load('GJG.html');
    })
    $('#bba').click(function () {
        $('#page-content-wrapper').load('BBA.html');
    })

});