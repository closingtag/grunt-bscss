/*
 * grunt-bscss
 * https://github.com/closingtag/grunt-bscss
 *
 * Copyright (c) 2015 Robert Weber
 * Licensed under the MIT license.
 */

'use strict';

var bs = require('bscss');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('bscss', 'A grunt plugin to use bscss', function() {

    var options = this.options({
      browser: 'chrome'
    });    

    // Iterate over all specified file groups.

    this.files.forEach(function(f) {

      // Concat specified files.
      var src = f.src.filter(function(filepath) {

        // Warn on and remove invalid source files (if nonull was set).
        
        if (!grunt.file.exists(filepath)) {

          grunt.log.warn('Source file "' + filepath + '" not found.');

          return false;
        } else {

          return true;
        }

      }).map(function(filepath) {
        
        // Read file source.
        return bs.transform(grunt.file.read(filepath), options.browser);

      }).join(grunt.util.linefeed);

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');

    });
  });

};
