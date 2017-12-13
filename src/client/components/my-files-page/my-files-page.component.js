const angular = require('angular')

class MyFilesComponent {
  /* @ngInject */
  constructor($http, $scope) {
    this.$http = $http
    this.$scope = $scope
  }

  saveFile() {
    const [file] = this.files
    const formData = new FormData()
    formData.append('file', file)
    this.$http.post('api/files', formData, {
      transformRequest: angular.identity,
      headers: { 'Content-Type': undefined }
    }).then(console.info, console.error)
  }
}

module.exports = MyFilesComponent
