'use strict';

module.exports = function(grunt) {

require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: ['dist'],

        copy: {
            all: {
              expand: true,
              cwd: 'app/',
              src: ['*.css','*.html','/images/**/*','!Gruntfile.js'],
              dest: '/dist',
              flatten: true,
              filer: 'isfile'
            },
        },

        browserify: {
            all: {
                src: 'app/js/**/*.js',
                dest: 'dist/client.js'
            },
            options: {
              transform: ['debowerify'],
              debug: true
            }
        },

        jshint: {
            all: ['Gruntfile.js', 'app/js/**/**/*.js', 'test/**/*.js','server.js'],
            options: {
                jshintrc: false,
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },

        connect: {
            options: {
                port: process.env.PORT || 3000,
                base: 'dist/'
              },
            all: {}
        },

        watch: {
            scripts: {
                files: ['api/**/*.js','app/js/**/*.js','test/**/*.js']
            },
            express: {
                files: ['server.js'],
                tasks: ['browserify'],
                options: {
                    spawn: false
                }
            }
        },

        express: {
            dev: {
                options: {
                    script: 'server.js'
                }
            },
            prod: {
                options: {
                    script: 'server.js',
                    node_env: 'production'
                }
            },
            test: {
                options: {
                    script: 'server.js'
                }
            }
        }

    });

    grunt.registerTask('default', 'jshint');

};
