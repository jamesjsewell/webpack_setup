console.log('test')
console.log('this is line 2')
console.log('this is on line 3')

import './style.css';
import _ from 'lodash';

function component() {

    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;

}

document.body.appendChild(component());

