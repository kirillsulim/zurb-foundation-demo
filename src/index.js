import './style/foundation.scss';

import 'foundation-sites/dist/js/foundation';
import _ from 'lodash';
import $ from 'jquery';


function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
}
  
document.body.appendChild(component());
$(document).foundation();
