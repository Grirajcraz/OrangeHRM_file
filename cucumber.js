module.exports = {
  default: {
    requireModule: ['tsx/cjs'],
    require: ['support/**/*.ts', 'step-definition/**/*.ts'],
    paths: ['features/**/*.feature'],
    format: [
      'progress-bar',
      'html:reports/cucumber-report.html',
      'json:reports/cucumber-report.json'
    ]
  }
};