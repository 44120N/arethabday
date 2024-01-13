function logHappyBirthday() {
    console.log("Happy Birthday, Aretha!");
}

function handleButtonClick() {
    alert("Happy Birthday, Aretha! 🎉");
    alert("Wishing you all the best!");
    alert("Hope you get better at programming.");
    const audio = document.getElementById("birthdayAudio");

    if (audio.paused || audio.ended) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0;
    }

    // Add a visual effect
    const button = document.getElementById("birthdayButton");
    button.style.backgroundColor = "#AA00FF"; // Change button color
    setTimeout(() => {
        button.style.backgroundColor = "blue"; // Restore original color
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
    logHappyBirthday();

    const button = document.getElementById("birthdayButton");
    button.addEventListener("click", handleButtonClick);
});