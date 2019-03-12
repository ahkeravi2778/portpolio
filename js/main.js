$(document).ready(function () {
    $('#ahome').click(function () {
        $("#skills").addClass('none');
        $("#example").addClass('none');
        $("#contact").addClass('none');
        $("#about").removeClass('none');
    })


    $('#askill').click(function () {
        $("#skills").removeClass('none');
        $("#example").addClass('none');
        $("#contact").addClass('none');
        $("#about").addClass('none');
    })


    $('#aexample').click(function () {
        $("#skills").addClass('none');
        $("#example").removeClass('none');
        $("#contact").addClass('none');
        $("#about").addClass('none');
    })


    $('#acontact').click(function () {
        $("#skills").addClass('none');
        $("#example").addClass('none');
        $("#contact").removeClass('none');
        $("#about").addClass('none');
    })


})