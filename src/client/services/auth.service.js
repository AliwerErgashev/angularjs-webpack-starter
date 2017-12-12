class AuthService {
  /*@ngInject*/
  constructor($window) {
    this.$window = $window;
    this._username = null;
    this._authTokenId = null;
  }

  persistToken(authTokenId) {
    this._authTokenId = authTokenId;
    this.$window.localStorage.setItem('auth_token_id', authTokenId);
  }

  set authTokenId(authTokenId) {
    this._authTokenId = authTokenId;
  }

  get username() {
    return this._username;
  }

  set username(username) {
    this._username = username;
  }
}

module.exports = AuthService;
