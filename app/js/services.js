
angular.module('booksServices', ['ngResource']).
    factory('Books', function($resource){
  return $resource('data/:bookId.json', {}, {
    query: {method:'GET', params:{bookId:'books'}, isArray:true}
  });
});