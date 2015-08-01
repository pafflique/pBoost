///<reference path="../../dts/react.d.ts" />

import React = require('react');

class View<P, S> extends React.Component<P, S> {
    protected template():string {
        console.error('Method "render" must be defined!');

        return '';
    }

    private render() {
        return eval(this.template());
    }
}

export = View;