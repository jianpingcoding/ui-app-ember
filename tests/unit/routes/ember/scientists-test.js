import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ember/scientists', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:ember/scientists');
    assert.ok(route);
  });
});
