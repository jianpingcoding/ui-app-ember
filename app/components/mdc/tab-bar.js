import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class MdcTabBarComponent extends Component {
    
  @action
  changeTab(tabIndex) {
    alert(tabIndex);
  }
}