export const schema = {
  fields: [
    {
      type: 'input',
      inputType: 'text',
      label: 'Title',
      placeholder: 'Enter name of game',
      model: 'title',
      styleClasses: 'text-center col-md-6 mx-auto mt-6'
    },
    {
      type: 'input',
      inputType: 'text',
      label: 'Image',
      placeholder: 'Enter link to image',
      model: 'imageUrl',
      styleClasses: 'text-center col-md-6 mx-auto mt-6'
    },
    {
      type: 'textArea',
      inputType: 'text',
      label: 'Description',
      placeholder: 'Enter description of game',
      model: 'description',
      max: 500,
      rows: 10,
      hint: 'Max 250 characters',
      styleClasses: 'text-center col-md-6 mx-auto mt-6'
    },
    {
      type: 'input',
      inputType: 'number',
      label: 'Price',
      placeholder: 'Enter price of game',
      model: 'price',
      styleClasses: 'text-center col-md-6 mx-auto mt-6'
    },
    {
      type: 'input',
      inputType: 'number',
      label: 'Amount',
      placeholder: 'Enter amount available of games',
      model: 'amount',
      styleClasses: 'text-center col-md-6 mx-auto mt-6'
    }
  ]
}

export const data = {
  title: '',
  description: '',
  price: 0,
  amount: 0,
  imageUrl: ''
}