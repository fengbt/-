import Vue from 'vue'
import Message from './index.vue'

const Builder = Vue.extend(Message)
let instance = null

class GetComponent {
  constructor(options, content) {
    this.options = options
    this.content = content
  }
  init() {
    if (instance) return
    instance = new Builder({
      render: (h) => {
        return (
          <Message props={{
            ...this.options
          }} scopedSlots={{ default: () => this.content.btn }}/>
        )
      }
    })
    // console.log(instance)
    // 两秒后消失
    setTimeout(() => {
      this.hide()
    }, 1000)
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)
    return instance
  }
  // 消失
  hide() {
    instance.vm.$el.remove()
    instance = null
  }
}

/**
 * component实例
 * @param {*} options
 * @returns
 */
const getComponent = (options, content) => {
  return new GetComponent(options, content)
}

export default {
  install(vue) {
    vue.prototype.$Message = getComponent
  }
}
