import './style.scss';
import example from './example/example_module.js'

function component() {
 
    example()

    var element = document.createElement('div');
    element.innerHTML = '<div class="hello">hi <div class="world">sup</di><div>testing</div></div>'

    return element;

}

document.body.appendChild(component());

