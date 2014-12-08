import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    var that = this;
    Ember.run.schedule('afterRender', function() {
      hljs.initHighlightingOnLoad();
    });
  }
});
