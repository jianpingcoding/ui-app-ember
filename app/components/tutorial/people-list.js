import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TutorialPeopleListComponent extends Component {
  //Tracked Properties
  @tracked count = 0;

  categories = {
    'Bourbons': ['Bulleit', 'Four Roses', 'Woodford Reserve'],
    'Ryes': ['WhistlePig', 'High West']
  };

  // Passing Arguments to Actions
  @action
  showName(name) {
    alert(`The person's name is ${name}! Has copyright: ${this.args.hasCopyright}`); // Combining Arguments and State
  }

  @action
  change(amount) {
    this.count = this.count + amount;
  }

  // Combining Arguments and Actions
  @action
  double() {
    this.args.updateMultiple(this.args.multiple * 2);
  }

  @action
  focus(element) {
    element.focus();
  }
}