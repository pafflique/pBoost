require.config({
    baseUrl: 'src/',
    deps: ['react'],
    callback: function(React) {
        window.React = React;
    },
    paths: {
        react: '../bower_components/react/react',
        JSXTransformer: '../vendor/plugin/JSXTransformer',
        sassUtil: '../vendor/plugin/sass/util',
        sassLib: '../vendor/plugin/sass/sassLib',
        sass: '../vendor/plugin/sass/sass',
        jsx: '../vendor/plugin/jsx',
        text: '../vendor/plugin/text'
    },
    jsx: {
        fileExtension: '.html'
    },
    waitSeconds: 15
});