import Route from '@ember/routing/route';

export default class TutorialScientistsRoute extends Route {
    model() {
        return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
    }
}
