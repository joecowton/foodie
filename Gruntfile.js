module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webdriver: {
      test: {
        configFile: './test/wdio.conf.js'
      }
    }
  })

  grunt.loadNpmTasks('grunt-webdriver');
  grunt.loadNpmTasks('grunt-selenium-standalone');

  grunt.registerTask('default', ['webdriver']);
};
