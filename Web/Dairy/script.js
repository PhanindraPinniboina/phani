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
