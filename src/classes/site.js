export class Site {
   constructor(selector) {
      this.$el = document.querySelector(selector)
   }

   render(model) {
      this.$el.innerHTML = '';
      model.forEach( elem => {
         this.$el.insertAdjacentHTML('beforeend', elem.toHTML())
      })
   }
}