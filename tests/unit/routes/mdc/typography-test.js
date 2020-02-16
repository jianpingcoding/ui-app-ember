import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | mdc/typography', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:mdc/typography');
    assert.ok(route);
  });
});
