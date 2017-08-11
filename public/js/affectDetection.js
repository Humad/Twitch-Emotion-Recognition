var divRoot = $("#affDetection")[0];
var width = 640;
var height = 480;
var faceMode = affdex.FaceDetectorMode.LARGE_FACES;

var detector = new affdex.CameraDetector(divRoot, width, height, faceMode);

detector.addEventListener("onInitializeSuccess", function() {
    console.log("Initialized successfully!");
    $("#face_video_canvas").css("display", "block");
    $("#face_video").css("display", "none");
});

detector.addEventListener("onInitializeFailure", function() {
    console.log("Failed to initialize");
});

detector.addEventListener("onWebcamConnectSuccess", function() {
	console.log("I was able to connect to the camera successfully.");
});

detector.addEventListener("onWebcamConnectFailure", function() {
	console.log("I've failed to connect to the camera :(");
});

detector.detectAllExpressions();
detector.detectAllEmotions();
detector.detectAllEmojis();
detector.detectAllAppearance();

detector.start();
