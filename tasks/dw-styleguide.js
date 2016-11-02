/**
 * grunt-dw-styleguide
 *
 * Copyright (c) 2016 denkwerk GmbH
 */
module.exports = function(grunt) {
    'use strict';

    var styleguide = require('npm-dw-styleguide');

    grunt.registerMultiTask('dw-styleguide', function() {
        var options = this.options();

        if (!options.inputPath) {
            throw new Error('You must specify an input path.');
        }

        if (!options.docPath) {
            throw new Error('You must specify a doc path.');
        }

        if (!options.outputPath) {
            throw new Error('You must specify an output path.');
        }

        styleguide(options.inputPath, options.docPath, options.outputPath);
    });
};
