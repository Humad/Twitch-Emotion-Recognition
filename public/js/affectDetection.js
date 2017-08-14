var divRoot = $("#aff-detection")[0];
var width = $("#aff-detection").width();
var height = $("#aff-detection").height();
var faceMode = affdex.FaceDetectorMode.LARGE_FACES;
var statusLog = $("#status");

var detector = new affdex.CameraDetector(divRoot, width, height, faceMode);

detector.addEventListener("onInitializeSuccess", function() {
    $("#face_video_canvas").css("display", "block");
    statusLog.append("<p>Camera Detector initialized successfully</p>");
    statusLog.append("<p>Emotion recognition started</p>");
});

detector.addEventListener("onInitializeFailure", function() {
    statusLog.append("<p>Camera Detector failed to initialize</p>")
});

detector.addEventListener("onWebcamConnectSuccess", function() {
    statusLog.append("<p>Connected to camera</p>");
    console.log("Connected to camera");
    $("#face_video").css("display", "none");
});

detector.addEventListener("onWebcamConnectFailure", function() {
	statusLog.append("<p>Failed to connect to camera</p>");
});

detector.addEventListener("onStopSuccess", function() {
    statusLog.append("<p>Camera Detector stopped</p>");
});

detector.addEventListener("onStopFailure", function() {
    statusLog.append("<p>Camera Detector could not stop</p>");
});

detector.addEventListener("onImageResultsSuccess", function(faces, image, timestamp) {
    if (faces.length > 0) {
        $("#num-faces").html(faces.length);
        drawFeaturePoints(image, faces[0].featurePoints);


        var count = 1;
        for (var key in faces[0].emotions) {
            chartData[count][1] = Number(faces[0].emotions[key].toFixed(0));
            count++;
        }

    } else {

        $("#num-faces").html("0");

        for (var i = 1; i < chartData.length; i++) {
            chartData[i][1] = 0;
        }

    }

    chart.draw(google.visualization.arrayToDataTable(chartData), chartOptions);
});

function drawFeaturePoints(img, featurePoints) {
    var contxt = $('#face_video_canvas')[0].getContext('2d');

    var hRatio = contxt.canvas.width / img.width;
    var vRatio = contxt.canvas.height / img.height;
    var ratio = Math.min(hRatio, vRatio);

    contxt.strokeStyle = "#FFFFFF";
    for (var id in featurePoints) {
      contxt.beginPath();
      contxt.arc(featurePoints[id].x,
        featurePoints[id].y, 2, 0, 2 * Math.PI);
      contxt.stroke();
    }
}

detector.detectAllEmotions();
detector.detectEmotions.valence = false;
detector.detectAllExpressions();
detector.detectAllEmojis();
detector.detectAllAppearance();
