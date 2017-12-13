class MyFilesComponent {
  /* @ngInject */
  constructor($scope) {
    this.$scope = $scope
  }

  $onInit() {
    this.$scope.$watch(() => this.files, files => console.info(files))
  }
}

module.exports = MyFilesComponent
