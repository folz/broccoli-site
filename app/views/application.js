/* global hljs */

import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.run.schedule('afterRender', function() {
      hljs.initHighlightingOnLoad();
    });
  }
});
