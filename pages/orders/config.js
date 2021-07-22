import { BIconX }from 'bootstrap-vue'
export const columns = [
  {
    _id: 1,
    name: 'Full name',
    key: 'fullname'
  },
  {
    _id: 2,
    name: 'Email',
    key: 'email'
  },
  {
    _id: 3,
    name: 'Phone',
    key: 'phone'
  }
]

// Details of actions: _id, name, label, bg, icon, action

export const actions = [
  {
    _id: 1,
    name: 'edit',
    action: 'Edit',
    label: 'Edit',
    bg: 'yellow'
  },
  {
    _id: 2,
    name: 'delete',
    action: 'Delete',
    bg: 'red',
    icon: BIconX
  }
]

export const config = {
  singleName: 'order',
  crudName: 'orders',
  formName: 'Order form'
}