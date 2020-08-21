import './styles/main.css';
import {model} from './model';
import {templates} from "./templates";

const app = document.querySelector('#app');
const site = document.querySelector('#site');

let html = model.forEach(node => {
   const generate = templates[node.type];
   if (generate) {
      const content = generate(node);
      site.insertAdjacentHTML('beforeend', content);
   }
})



