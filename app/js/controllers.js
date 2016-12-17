'use strict';


bookApp.controller('BookListCtrl', function($scope, Books) {
    $scope.books = Books.query();
});

bookApp.controller('BookOne', function($scope, Books) {
    $scope.book = Books.get({bookId: 'book'});
});
