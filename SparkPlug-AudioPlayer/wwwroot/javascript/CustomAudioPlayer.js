
export function playbuttonaudio(isplaying) {
    var x = document.getElementById("audioplayer");
    var button = document.getElementById("playpausebutton");

    if (isplaying === true) {
        button.className = "bi bi-pause-circle";
        x.play();
    }
    else {
        button.className = "bi bi-play-circle";
        x.pause();
    }
}

 // Progress Bar functionality........
export function getAudioDuration() {
    var audio = document.getElementById("audioplayer");
    var trackLength = document.getElementById("trackLength");

    trackLength.innerText = "loading...";

    audio.addEventListener('loadedmetadata', (event) => { });

    audio.onloadedmetadata = (event) => {
        trackLength.innerText = formatTime(audio.duration);
    }
}

export function currenttime() {
    var audio = document.getElementById("audioplayer");
    
    // As the audio is playing update the value.
    var position = document.getElementById("currentProgress");
    var myprogress = document.getElementById('my-progress');
    var myprogressBar = document.getElementById('my-progress-bar');

    audio.addEventListener('timeupdate', function () {
        position.innerHTML = formatTime(audio.currentTime);

        // As the video is playing, update MY-Progress-bar
        if (!myprogress.getAttribute('max')) myprogress.setAttribute('max', audio.duration);
        myprogress.value = audio.currentTime;
        myprogressBar.style.width = Math.floor((audio.currentTime / audio.duration) * 100) + '%';
    })

    // Users clicking within the progress bar
    myprogress.addEventListener('click', function (e) {
        var pos = (e.pageX - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
        audio.currentTime = pos * audio.duration;
    })

     //add event listener to tell if the audio has finished playing...
    audio.addEventListener('ended', function () {
        var button = document.getElementById("playpausebutton");
        button.className = "bi bi-arrow-repeat"
        audio.load();
        myprogressBar.style.width = 0;
    })
}

    function formatTime(duration) {
        var currentTime = duration;

        var hour = Math.floor(currentTime / 3600);
        var minute = Math.floor((currentTime - hour * 3600) / 60);
        var seconds = Math.floor(currentTime - (hour * 3600 + minute * 60));
        if (hour < 10)
            hour = "0" + hour;
        if (minute < 10)
            minute = "0" + minute;
        if (seconds < 10)
            seconds = "0" + seconds;

        var formattedPosition = hour + ":" + minute + ":" + seconds;
        return formattedPosition;
    }



