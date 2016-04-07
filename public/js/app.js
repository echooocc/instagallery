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

'use strict';

angular.module('hashtag.service', [])
.constant('API_BASE_URL', ' http://localhost:3000/hashtag/')
.factory('hashtags', function($http, API_BASE_URL) {
  var service = {};

  service.getData = function (tag) {
    return $http.get(API_BASE_URL + tag)
      .then(function(res) {
        return res.data.data;
      })
      .then(null, function(err) {
        throw err;
      });
  };

  return service;
});
