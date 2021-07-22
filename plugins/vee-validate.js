import { extend }from 'vee-validate'
import { required, email, min }from 'vee-validate/dist/rules'

extend('email', {
  ...email,
  message: 'Enter the correct email'
})

extend('required', {
  ...required,
  message: 'This field is required'
})

extend('min', {
  ...min,
  message: 'This field must be {length} characters'
})