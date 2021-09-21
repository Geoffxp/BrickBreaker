export default class MusicPlayer {
    constructor() {
        this.theme = document.getElementById("theme");
        this.musicBtn = document.getElementById("muteMusic");
        this.soundsBtn = document.getElementById("muteSounds");
        this.musicBtn.addEventListener("click", event => {
            if (!this.musicBtn.classList.contains("pressed")) {
                this.musicBtn.classList.add("pressed");
                this.theme.muted = true;
            } else {
                this.musicBtn.classList.remove("pressed");
                this.theme.muted = false;
            }
        })
        this.soundsBtn.addEventListener("click", event => {
            if (!this.soundsBtn.classList.contains("pressed")) {
                this.soundsBtn.classList.add("pressed");
            } else {
                this.soundsBtn.classList.remove("pressed");
            }
        })
    }

    play() {
        this.theme.play()
        this.theme.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }
}