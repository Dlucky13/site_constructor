import {model} from './model';
import {Site} from './classes/site'
import './styles/main.css';
import {Sidebar} from "./classes/sidebar";

const site = new Site('#site')

function updateHTML(newBlock) {
   model.push(newBlock);
   site.render(model);
}
new Sidebar('#panel', updateHTML)

site.render(model);




