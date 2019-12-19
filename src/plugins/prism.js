import Vue from 'vue'
import Prism from 'vue-prismjs'

import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-javascript'

import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import 'prismjs/plugins/unescaped-markup/prism-unescaped-markup.js'
import 'prismjs/plugins/unescaped-markup/prism-unescaped-markup.css'

Vue.component('prism', Prism)
