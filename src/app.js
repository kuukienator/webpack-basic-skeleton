import './style.css';

import Model from './models/model';

const model = new Model('Max Mustermann', 32);

document.querySelector('.placeholder').innerHTML = model.greet();