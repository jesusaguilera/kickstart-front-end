angular.module('myNews', []) 

.controller ('myArticles', ['$scope', function($scope) { 
  // Lista de alumnos
  $scope.articles = [
    {title:"Juan Martín", 
      image:"4º ESO", 
      text:"Nunc pharetra turpis finibus auctor commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In convallis, est eget condimentum tincidunt, odio risus dapibus lectus, non lacinia mauris velit sed elit. Curabitur lobortis neque id facilisis venenatis."}
  ];

  // Añade alumno ( modelo )
  $scope.saveArticle = function(){
    $scope.alumnos.push({
      title:$scope.newArticle.title, 
      image:$scope.newArticle.image, 
      text:$scope.newArticle.text
    });
  };

  $scope.addArticle function (){
    alert("hola");
  };

}]);



