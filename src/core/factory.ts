///<reference path="../../dts/react.d.ts" />

import React = require('react');
import View = require('./view');

class Factory {
    public static get<P>(Component:React.ComponentClass<P>, props?:P) {
        return React.createElement<P>(<React.ComponentClass<P>>Component, props);
    }
}

export = Factory;