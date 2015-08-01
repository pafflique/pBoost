/// <reference path="../../../dts/r.d.ts" />
///<amd-dependency path="sass!./task-style" />
///<amd-dependency path="jsx!./task-template" />

var style = require('sass!./task-style');
var template = require('jsx!./task-template');

import React = require('react');
import View = require('core/View');

interface IState {

}

class Task extends View<Task.IProps, IState> {
    protected template() {
        return template;
    }
}

module Task {
    export interface IProps {
        name:string;
    }
}

export = Task;