import Route from '@ember/routing/route';

export default class TutorialScientistsRoute extends Route {
  model() {
    return {
      title: 'Scientists',
      copyright: {
        year: "2020",
        name: "JIANPING"
      },
      scientists: [{
        firstName: 'Marie',
        lastName: 'Curie',
        contact: {
          countryCode: "65",
          number: "83478343"
        },
        isActive: true
      }, {
        firstName: 'Mae',
        lastName: 'Jemison',
        contact: {
          countryCode: "86",
          number: "13349889893"
        },
        age: 30
      }]
    };
  }
}
