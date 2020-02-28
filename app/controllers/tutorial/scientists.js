import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TutorialScientistsController extends Controller {
    @tracked multiple = 3;

    @action
    updateMultiple(newMultiple) {
        this.multiple = newMultiple;
    }
}
