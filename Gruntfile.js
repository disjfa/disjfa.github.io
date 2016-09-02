module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        app: {
            baseurl: 'disjfa.github.io',
            app: ''
        },
        clean: {
            bootstrap: ['_sass/bootstrap']
        },
        copy: {
            options: {},
            fontawesome: {
                expand: true,
                cwd: 'node_modules/font-awesome/fonts',
                src: '**',
                dest: 'fonts'
            },
            fontawesomesass: {
                expand: true,
                cwd: 'node_modules/font-awesome/scss',
                src: '**',
                dest: '_sass/font-awesome'
            },
            bootstrap: {
                expand: true,
                cwd: 'node_modules/bootstrap/scss',
                src: '**',
                dest: '_sass/bootstrap'
            },
            bootstrapjs: {
                flatten: true,
                src: 'node_modules/bootstrap/dist/js/bootstrap.min.js',
                dest: 'js/bootstrap.min.js'
            },
            tether: {
                flatten: true,
                src: 'node_modules/tether/dist/js/tether.min.js',
                dest: 'js/tether.min.js'
            },
            jquery: {
                flatten: true,
                src: 'node_modules/jquery/dist/jquery.slim.min.js',
                dest: 'js/jquery.slim.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'copy']);
};