export class Site {
   constructor(selector) {
      this.$el = document.querySelector(selector)
   }

   render(model) {
      model.forEach( elem => {
         this.$el.insertAdjacentHTML('beforeend', elem.toHTML())
      })
   }
}