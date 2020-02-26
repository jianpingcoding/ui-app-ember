import Route from '@ember/routing/route';

export default class MdcIndexRoute extends Route {
    model() {
        return {
            tabBarInfo: {
                activeIndex: 1,
                items: [{
                    name: "Typography",
                    index: 1
                },{
                    name: "Theme",
                    index: 2
                }]
            }
        };
    }
}
