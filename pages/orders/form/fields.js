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
      type: 'textArea',
      inputType: 'text',
      label: 'Description',
      placeholder: 'Enter description of game',
      model: 'description',
      max: 500,
      rows: 10,
      hint: 'Max 250 characters',
      styleClasses: 'text-center col-md-6 mx-auto mt-6'
    }
  ]
}

export const data = {
  title: '',
  description: ''
}