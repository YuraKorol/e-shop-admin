import Vue from 'vue'

import ui from '@/components/ui'

ui.forEach(component => Vue.component(component.name, component))