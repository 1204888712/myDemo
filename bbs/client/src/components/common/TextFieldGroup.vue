<template>
    <div class="form-group">
      <input
        class="form-control form-control-lg" 
         :class="{'is-invalid': error}"
        :type="type"
        ref="input"
        :value="value"
        :placeholder="placeholder"
        :name='name'
        :disabled='disabled'
        @input="$emit('input', $event.target.value)"
        @blur="$emit('blur')"
      >
      <!-- 必须使用$emit向上传输事件和值,让父级组件可以更改它的data,这是v-model使用在组件上的造成的(v-model会劫持组件的prop的value和input事件) -->
      <!-- 可以添加一个blur备用 -->
      <!-- $event.target.value   事件触发对象的数据值 -->
      <div v-if="error" class="invalid-feedback">
         {{error}}
      </div>
      <small v-if="info" className="form-text text-muted">{{info}}</small>
    </div>
  </template>
  
  <script>
  export default {
    name: "textFieldGroup",
    props: {
      type: {
        type: String,
        default: "text"
      },
      value: String,
      placeholder: String,
      name: String,
      error: String,
      info: String,
      disabled: Boolean
    },
    data() {
      return {};
    },
    created() {},
    methods: {}
  };
  </script>
  
  <style scoped>
  </style>
  