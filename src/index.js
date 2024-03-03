import _ from 'lodash';
import './styles.css';

console.log("Test Pack Watched reverted");

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    //element.textContent = myName('Max');

    element.classList.add('hello');
  
    return element;
  }
  
  document.body.appendChild(component());