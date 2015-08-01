import React = require('react');
import Factory = require('core/factory');
import Task = require('view/task/task');

class App {
    public start(elContainer:HTMLElement) {
        var factory = Factory.get(Task, {name: 'World'});
        React.render(factory, elContainer);
    }
}


export = App;