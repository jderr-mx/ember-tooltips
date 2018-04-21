import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { afterTooltipRenderChange, findTooltip } from 'dummy/tests/helpers/ember-tooltips';

moduleForComponent('ember-tooltip', 'Integration | Config | body-element-id', {
  integration: true
});

test('Tooltip is rendered on rootElement not body', function(assert) {
  assert.expect(2);

  this.render(hbs`{{ember-tooltip isShown=true}}`);

  afterTooltipRenderChange(assert, () => {
    const $tooltip = findTooltip();
    const $tooltipParent = $tooltip.parentElement;
    const tooltipParentId = $tooltipParent.getAttribute('id');

    assert.notEqual(
      $tooltipParent.getAttribute('tagname'),
      'body',
      'The tooltip should not be a child of the document body'
    );

    assert.equal(tooltipParentId, 'ember-testing', 'The tooltip should be a child of the #ember-testing rootElement');
  });
});
