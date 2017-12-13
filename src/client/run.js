/*@ngInject*/
module.exports = ($window, $http, authService) => {
  const authTokenId = $window.localStorage.getItem('auth_token_id')
  if (authTokenId) {
    $http.get('api/auth-tokens', { params: { authTokenId } }).then(response => {
      authService.authTokenId = authTokenId
      authService.username = response.data.username
    }, error => console.error(error))
  }
}
