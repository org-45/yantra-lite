const recognition = new webkitSpeechRecognition();
const notesDiv = document.getElementById("notes");

recognition.onresult = function(event) {
    const note = event.results[0][0].transcript;
    const noteElement = document.createElement("p");
    noteElement.textContent = note;
    notesDiv.appendChild(noteElement);
};

recognition.onerror = function(event) {
    console.error("Error occurred in recognition: " + event.error);
};

recognition.onend = function() {
    recognition.start();
};

recognition.start();

