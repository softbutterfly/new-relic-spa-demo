import Vue from 'vue'

import {
  // Components
  Button,
  Layout,
  LocaleProvider,
  Icon,
  Row,
  Col,
  Menu,
  Steps,
  Upload,
  Modal,
  Form,
  Input,
  Checkbox,
  // Directives
  message
} from 'ant-design-vue'

Vue.component(LocaleProvider.name, LocaleProvider)

Vue.component(Layout.name, Layout)
Vue.component(Layout.Header.name, Layout.Header)
Vue.component(Layout.Content.name, Layout.Content)
Vue.component(Layout.Footer.name, Layout.Footer)
Vue.component(Layout.Sider.name, Layout.Sider)

Vue.component(Row.name, Row)
Vue.component(Col.name, Col)

Vue.component(Icon.name, Icon)
Vue.component(Button.name, Button)
Vue.component(Button.Group.name, Button.Group)

Vue.component(Menu.name, Menu)
Vue.component(Menu.Item.name, Menu.Item)

Vue.component(Steps.name, Steps)
Vue.component(Steps.Step.name, Steps.Step)

Vue.component(Upload.name, Upload)
Vue.component(Modal.name, Modal)

Vue.component(Form.name, Form)
Vue.component(Form.Item.name, Form.Item)
Vue.component(Input.name, Input)
Vue.component(Checkbox.name, Checkbox)

Vue.prototype.$message = message
// Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning
Vue.prototype.$confirm = Modal.confirm
