$(document).ready(function () {
    $.ajax({
        url: "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=5534AF9696A18889B116F974530A1065&steamids=76561198824775250",
    }).done(function (data) {
        var json = JSON.parse(data);
        $('#playerName').text(json['response']['players'][0]['personaname']);
    });
});