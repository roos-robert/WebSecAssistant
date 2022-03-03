import { Howl } from 'howler';

class AudioPlayer {
  howl = null;

  play(filename) {
    this.stop();
    this.howl = new Howl({
      src: [browser.runtime.getURL('audio/' + filename)],
      autoplay: true,
      loop: false,
      volume: 0.5,
    });
  }

  stop() {
    if (this.howl) {
      this.howl.stop();
      this.howl = null;
    }
  }
}

export const audioPlayer = new AudioPlayer();
export default audioPlayer;
