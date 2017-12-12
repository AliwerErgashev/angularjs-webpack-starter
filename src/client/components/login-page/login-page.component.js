class LoginPageComponent {
  /*@ngInject*/
  constructor($http, authService) {
    this.$http = $http;
    this.authService = authService;
  }

  $onInit() {
    this._username = 'user1';
    this._password = 'pass1';
  }

  processLogin() {
    const { _username, _password } = this;
    this.$http.post('api/auth-tokens', {
      username: _username,
      password: _password
    }).then(response => {
      this.authService.persistToken(response.data.id);
      this.authService.username = _username;
    }, error => console.error(error));
  }

  get username() {
    return this.authService.username;
  }
}

module.exports = LoginPageComponent;
