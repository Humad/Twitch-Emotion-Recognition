var height = $("#twitch-embed").height();
var width = $("#twitch-embed").width();
var statusLog = $("#status");
var started = false;
var savedData = {};
var splitLink = twitchLink.split('/');
var channel = splitLink[splitLink.length - 1];

var player = new Twitch.Player("twitch-embed", {
    height: height,
    width: width,
    channel: channel,
    layout: "video",
    autoplay: false
  });

player.addEventListener(Twitch.Player.PLAY, function() {
    statusLog.append("<p>Starting stream</p>");
    detector.start();
});

player.addEventListener(Twitch.Player.PAUSE, function() {
    statusLog.append("<p>Stream paused</p>");
    detector.stop();
});

$("#start-button").on("click", function() {
    if (!started) {
        statusLog.append("<p>Application started</p>");
        started = true;
        player.play();
    } else {
        player.pause();
        started = false;
        statusLog.append("<p>Application stopped</p>");
    }
});


// Display results. Currently disabled because results can get too large in size
// $("#results-button").on("click", function() {
//     player.pause();
//     started = false;
//     statusLog.append("<p>Application stopped</p>");
//
//     console.log(JSON.stringify(savedData));
// });
