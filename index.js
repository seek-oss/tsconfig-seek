module.exports = {
  extends: [
    'tslint:latest', 
    'tslint-config-prettier'
  ],
  rules: {
    'object-literal-sort-keys': false,
    'ordered-imports': false,
    'interface-name': [true, 'never-prefix'],
    'no-implicit-dependencies': [true, 'dev'],
    'no-submodule-imports': false,
    'member-access': false
  }
}
