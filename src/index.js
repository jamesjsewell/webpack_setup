console.log('test')
console.log('this is line 2')
console.log('this is on line 3')

import './style.scss';
import _ from 'lodash';

function component() {

    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = '<div class="hello">hi <div class="world">sup</di></div>'

    return element;

}

document.body.appendChild(component());

