import './style.scss';
import _ from 'lodash';

function component() {

    var element = document.createElement('div');

    element.innerHTML = '<div class="hello">hi <div class="world">sup</di><div>testing</div></div>'

    return element;

}

document.body.appendChild(component());

