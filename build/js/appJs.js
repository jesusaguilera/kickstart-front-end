angular.module('myNews', []) 

.controller ('myArticles', ['$scope', '$http', function($scope, $http) { 

  // carga alumnos
  $http.get('json/articles.json').then(function(res){
    $scope.articles = res.data.articles;                
    console.log(res.data.articles);
  });

  // añade alumno 
  $scope.saveArticle = function(){
    $scope.alumnos.push({
      title:$scope.newArticle.title, 
      image:$scope.newArticle.image, 
      text:$scope.newArticle.text
    });
  };

  $scope.addArticle = function (){
    alert("hola");
  };

}]);
