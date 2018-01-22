'use strict';

// import styles from 'style.css'

var app = {
    title: 'Add Number App',
    subtitle: 'Put your life in the hand of a computer',
    options: ['one', 'two']
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var removeOptions = function removeOptions() {
    app.options = [];
    render();
};

var appRoot = document.getElementById('app');
var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            ' ',
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.title
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No Options'
        ),
        React.createElement(
            'p',
            null,
            ' ',
            app.options.length
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'Item One'
            ),
            React.createElement(
                'li',
                null,
                'Item Two'
            )
        ),
        React.createElement('br', null),
        ' ',
        React.createElement('br', null),
        React.createElement(
            'button',
            { onClick: removeOptions },
            'Remove Options'
        ),
        React.createElement('br', null),
        ' ',
        React.createElement('br', null),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Options'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
