import Ember from "ember";
import debounceComputed from "ember-inspector/computed/debounce";
import searchMatch from "ember-inspector/utils/search-match";
const { Controller, computed, get } = Ember;
const { filter } = computed;

export default Controller.extend({
  needs: ['application'],
  search: null,
  searchVal: debounceComputed('search', 300),
  filtered: filter('model', function(item) {
    return searchMatch(get(item, 'message'), this.get('search'));
  }).property('model.@each.message', 'search')
});

