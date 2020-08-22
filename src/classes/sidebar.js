import {TextRowBlock, TitleBlock} from "./blocks";

export class Sidebar {
   constructor(selector, update) {
      this.$el = document.querySelector(selector)
      this.update = update;

      this.init()
   }

   init() {
      this.$el.addEventListener('submit', this.addBlock.bind(this))
      this.$el.innerHTML = this.template
   }

   get template() {
      return [
         block('title'),
         block('text')
      ].join('');
   }

   addBlock(evt) {
      evt.preventDefault();

      const type = evt.target.name;
      const value = evt.target.value.value;
      const styles = evt.target.styles.value;

      const BlockTemplate = type === 'title' ? TitleBlock : TextRowBlock;

      const newBlock = new BlockTemplate(value, {styles});
      this.update(newBlock);

      evt.target.value.value = '';
      evt.target.styles.value = '';

   }
}

function block(type) {
   return `
   <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
         <input class="form-control from-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
         <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Create</button>
   </form>
   <hr />
   `
}