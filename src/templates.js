import {col, row} from "./utils";

function title(node) {
   const { tag, styles} = node.options;
   return row(col(`
      <${tag}>${node.value}</${tag}>
   `), styles)
}

function textRow(node) {
   return row( col(`
      <p>${node.value}</p>
   `), node.options.styles)
}

function textColumn(node) {
   const html = node.value.map( item => col(item));
   return row(html.join(''), node.options.styles)
}

function img(node) {
   const {alt, styles, imgStyles} = node.options;
   return row(col(`
      <img src="${node.value}" alt="${alt}" style="${imgStyles}"/>
   `),styles)
}

export const templates = { textRow, textColumn, title, img};