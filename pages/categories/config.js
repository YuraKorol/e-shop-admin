import { BIconX }from 'bootstrap-vue'
export const columns = [
  {
    _id: 1,
    name: 'Category name',
    key: 'title'
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
  singleName: 'category',
  crudName: 'categories',
  formName: 'Category form'
}