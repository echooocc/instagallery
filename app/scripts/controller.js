'use strict';

angular.module('instapp', ['hashtag.service'])
.controller('mainCtrl', function(hashtags) {
  var vm = this;
  vm.search = function() {
    vm.ishashtag = true;
    vm.hashtags = [];
    if (vm.hashtag) {
      hashtags.getData(vm.hashtag)
      .then(function(hashtags) {
        vm.hashtags = hashtags;
      });
    }
  };
});
