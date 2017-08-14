# Twitch Emotion Recognition
An online tool that recognizes user emotions as they watch a Twitch stream.
You can find the [live version here](https://twitch-emotion-recognition.herokuapp.com/).

# Introduction
This project is a tool that makes use of the Affectiva API to detect the emotions of a user using video feed from their camera as they watch a Twitch stream.
The idea behind this tool is to help content creators discover what the users felt while watching their content. Having a better insight into what the user experienced can help content creators improve.

For example, a comedian could see which jokes were successful and which ones weren't. 

Similarly, a streamer could see how their audience is feeling, and whether or not they should change the way they stream in order to get a better response.

# How does it work?
This project uses the following APIs:
- Affectiva: To detect user emotions using a video feed with facial expressions.
- Twitch: To embed a Twitch stream on the page for the user to watch.
- Google Charts: To display the probability of the various emotions in real time.

Users are prompted for a Twitch stream link, after which the stream is opened and the different components are loaded. The user can then simply watch the stream and see their emotions being represented on a bar chart.

All the emotion recognition work is being done in the browser by the Affectiva API.

Here are some sample screenshots of my sister and myself testing the tool:

Testing joy,

![Joy test](/sample-screenshots/joy-test.png?raw=true "Joy test")

Testing surprise,

![Surprise-test](/sample-screenshots/surprise-test.png?raw=true "Surprise test")

Testing anger,

![Anger-test](/sample-screenshots/anger-test.png?raw=true "Anger test")

# Limitations
- As of now, I can't store data for viewing later. I could save data to a database, but I don't want everyone's data to be available to everyone, and so I need to have some form of authentication in place.
- I want to add functionality to see your results after you're done watching the stream so you can view your emotions during different points in the stream. The problem here is that the Twitch API doesn't allow me to get the current time of the livestream from the time it went live. It also doesn't give me access to rewind the stream programmatically. Perhaps I could have a page with timestamps and screenshots, along with a chart instead.
