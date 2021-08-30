const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting () {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your Project Name',
        default: this.appname,
      }
    ]).then(answers => {
      this.answers = answers
    })
  }

  writing () {
    // 把每一个文件通过模板转换到目标路径

    const templates = [
      '.DS_Store',
      'babel.config.js',
      'package.json',
      'README.md',
      'webpack.common.js',
      'webpack.dev.js',
      'webpack.prod.js',
      'public/favicon.ico',
      'public/index.html',
      'src/App.vue',
      'src/assets',
      'src/components',
      'src/main.js',
      'src/style.less',
      'src/assets/logo.png',
      'src/components/HelloWorld.vue',
    ]

    const context = this.answers
    templates.forEach(item => {
      const tmpl = this.templatePath(item);
      const output = this.destinationPath(item);
      this.fs.copyTpl(tmpl, output, context);
    })


  }
}