import pic from './assets/array.jpeg'

export const model = [
   {type: 'title', value: 'Функции высшего порядка', options: {
      styles: 'background: rgba(14, 134, 173, .8); color: #000; text-align: center',
      tag: 'h2'
   }},
   {type: 'img', value: pic, options: {
         alt: 'array_sample',
         styles: 'margin: 10px; text-align: center',
         imgStyles: 'width: 400px; height: auto'
   }},

   {type: 'textRow', value: 'Функции, которые работают с другими функциями, либо принимая их \n' +
         'в качестве аргументов, либо возвращая их, называются функциями высшего \n' +
         'порядка. Поскольку, как мы уже видели, функции являются обычными зна-\n' +
         'чениями, в существовании функций высшего порядка нет ничего особенно \n' +
         'примечательного. Сам термин пришел из математики, где различие между \n' +
         'функциями и другими значениями более явное', options: {
      styles: 'background: rgba(14, 134, 173, .8); color: #fff; padding: 10px'
   }},

   {type: 'textColumn', value: [
      'Метод \n' +
      'forEach можно использовать для циклического перебора элементов масси-\n' +
      'ва.',
      'Метод filter возвращает новый массив, содержащий только элементы, \n' +
      'удовлетворяющие условию предикативной функции. ',
      'Преобразование мас-\n' +
      'сива посредством выполнения функции для каждого элемента выполняется \n' +
      'с помощью map. ',
      'Чтобы объединить все элементы массива в одно значение, \n' +
      'можно использовать reduce.',
      ], options: {
      styles: 'padding: 1rem; background-color:rgba(63, 31, 161, .4); color: #fff'
      }},

]