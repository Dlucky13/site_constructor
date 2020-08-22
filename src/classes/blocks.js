import {col, row} from "../utils";

class Block {
   constructor( value, options) {
      this.value = value
      this.options = options
   }

   toHTML() {
      throw new Error('toHTML must be declared in child block')
   }
}

export class TitleBlock extends Block{
   constructor (value, options) {
      super(value, options)
   }

   toHTML() {
      const { tag = 'h2', styles} = this.options;
      return row(col(`
      <${tag}>${this.value}</${tag}>
   `), styles)
   }
}

export class TextRowBlock extends Block {
   constructor(value, options) {
      super(value, options)
   }

   toHTML() {
      return row( col(`
         <p>${this.value}</p>
         `), this.options.styles)
   }
}

export class TextColumnBlock extends Block {
   constructor(value, options) {
      super(value, options)
   }

   toHTML() {
      const html = this.value.map( item => col(item));
      return row(html.join(''), this.options.styles)
   }
}

export class ImgBlock extends Block{
   constructor(value, options) {
      super(value, options)
   }

   toHTML() {
      const {alt, styles, imgStyles} = this.options;
      return row(col(`
      <img src="${this.value}" alt="${alt}" style="${imgStyles}"/>
   `),styles)
   }
}