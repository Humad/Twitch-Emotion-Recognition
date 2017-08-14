$(document).ready(function(){

    var height = $("#twitch-embed").height();
    var width = $("#twitch-embed").width();
    var statusLog = $("#status");
    var started = false;

    var player = new Twitch.Player("twitch-embed", {
        height: height,
        width: width,
        channel: "monstercat",
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
});
