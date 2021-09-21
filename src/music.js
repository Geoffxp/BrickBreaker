export default class MusicPlayer {
    constructor() {
        this.theme = document.getElementById("theme");
        this.loseLife = document.getElementById("loseLife")
        this.levelup = document.getElementById("nextLevel");
        this.winner = document.getElementById("winner");
        this.loser = document.getElementById("loser");
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
    nextLevel() {
        this.theme.pause();
        this.levelup.play();
        this.levelup.addEventListener("ended", () => this.theme.play())
    }
    win() {
        this.theme.pause();
        this.levelup.pause();
        this.levelup.currentTime = 0;
        this.winner.play();
        this.winner.addEventListener("ended", () => this.theme.play())
    }
    lose() {
        this.theme.pause();
        this.loseLife.pause();
        this.loseLife.currentTime = 0;
        this.loser.play();
        this.loser.addEventListener("ended", () => this.theme.play())
    }
    ouch() {
        this.loseLife.play();
    }
}