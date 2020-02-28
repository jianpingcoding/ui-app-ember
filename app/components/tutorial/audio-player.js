import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class AudioPlayerComponent extends Component {
  @action
  play() {
    this.audioElement.play();
  }
}