export const schema = [
  {
    tag: 'input',
    type: 'text',
    name: 'email',
    label: 'Email',
    placeholder: 'Enter email',
    model: 'email',
    styleClasses: 'mt-6 w-80',
    validation: 'email|required'
  },
  {
    tag: 'input',
    type: 'password',
    name: 'password',
    label: 'Password',
    placeholder: 'Enter password',
    model: 'password',
    styleClasses: 'my-6 w-80',
    validation: 'required|min:6'
  }
]

export const data = {
  email: '',
  password: ''
}