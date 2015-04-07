# grunt-bscss

> A grunt plugin to use [bscss](http://bscss.csspatterns.com/)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-bscss --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-bscss');
```

## The "bscss" task

### Overview
In your project's Gruntfile, add a section named `bscss` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  bscss: {
    options: {
      browser: 'chrome'
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.browser
Type: `String`
Default value: `'chrome'`

Target browser to optimize for. Values are  `'chrome','ios','safari','firefox','opera','ie6','ie7','ie8','ie9','ie10','ie11'`. Right now only one values is possible as BSCSS does only support one.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
7-4-2014: Create repo
