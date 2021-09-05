'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the polished ${chalk.red('generator-gulp')} generator!`
      )
    );

    const prompts = [
      {
        type: 'install',
        name: 'generator-gulp-single',
        message: 'Would you like to install gulp-single-page',
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('**'),
      this.destinationPath('./')
    );
  }

  install() {
    this.installDependencies({
      bower:false
    });
  }
};
