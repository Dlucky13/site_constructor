import './styles/main.css';
import {model} from './model';

const app = document.querySelector('#app');
const site = document.querySelector('#site');

model.forEach(node => site.insertAdjacentHTML('beforeend', node.toHTML()))



