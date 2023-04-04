function start()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/iFuK1WtUW/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}