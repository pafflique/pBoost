require.config({
    baseUrl: 'build/compiled/',
    deps: ['react'],
    callback: function(React) {
        window.React = React;
    },
    paths: {
        react: '../../bower_components/react/react',
        JSXTransformer: '../../vendor/plugin/JSXTransformer',
        sassUtil: '../../vendor/plugin/sass/util',
        sassLib: '../../vendor/plugin/sass/sassLib',
        sass: '../../vendor/plugin/sass/sass',
        jsx: '../../vendor/plugin/jsx',
        text: '../../vendor/plugin/text'
    },
    text: {
        'baseUrl': 'src/'
    },
    jsx: {
        fileExtension: '.html'
    },
    waitSeconds: 15
});