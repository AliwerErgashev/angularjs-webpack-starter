/* @ngInject */
module.exports = $parse => ({
  link: (scope, element, attrs) => {
    const setter = $parse(attrs.fileModel).assign;
    element.on('change', event => scope.$apply(() => setter(scope, event.target.files)));
  }
});
