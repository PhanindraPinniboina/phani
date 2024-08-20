var timer;

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "Time Remaining: " + minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0; // To prevent displaying negative values
            alert("Time's up! Submit your essay.");
            // You can perform additional actions when the timer reaches zero.
        }
    }, 1000);
}

// Set the countdown timer to 20 minutes
window.onload = function () {
    var twentyMinutes = 20 * 60,
        display = document.getElementById('timer');
    startTimer(twentyMinutes, display);
};

//date
const date = new Date();
document.getElementById("date").innerHTML = date;
// Function to count words in the textarea
function countWords() {
    var essayText = document.getElementById('essayInput').value;
    var wordCount = essayText.split(/\s+/).filter(function (word) {
        return word.length > 0;
    }).length;

    document.getElementById('wordCount').textContent = wordCount;
}

// Attach the countWords function to the input event of the textarea
document.getElementById('essayInput').addEventListener('input', countWords);

// Function to save the essay as a .doc file
function saveAsDocument() {
    var essayText = document.getElementById('essayInput').value;

    var blob = new Blob(['\ufeff', essayText], {
        type: 'application/msword'
    });

    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;
    link.download = 'essay.doc';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}