/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jade: {
      compile: {
        options: {
          client: false,
          pretty: true
        },
        files: [ {
          cwd: "app/jade",
          src: ["**/*.jade",'!layout*.*'],
          dest: "dist/",
          expand: true,
          ext: ".html"
        } ]
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/assets/js/app.js' : ['app/js/**/*.js']
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: "compressed"
        },
        files: {
        	'dist/assets/css/main.css':'app/combed/css/main.scss'
        }
      }
    },
    csscomb: {
      dynamic_mappings: {
          expand: true,
          cwd: 'app/css/',
          src: ['**/*.scss', '!*.resorted.css'],
          dest: 'app/combed/css/',
          ext: '.scss'
      }
    },

    watch: {
      comb: {
        files: 'app/css/**/*.scss',
        tasks: ['csscomb']
      },
      css: {
        files: 'app/combed/**/*.scss',
        tasks: ['sass']
      },
      jade: {
        files: 'app/jade/*.jade',
        tasks: ['jade']
      },
      js: {
        files: 'app/js/**/*.js',
        tasks: ['uglify']
      }
    }
  });

  // These plugins provide necessary tasks.{% if (min_concat) { %}
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-csscomb');
  //grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task.
  grunt.registerTask('default', ['watch']);
  //grunt.registerTask('default', ['jade','uglify']);

};