<template>
  <div class="message" :style="{top:top}">
    <div class="message-wrapper" :style="{width:width, color:color,background:bgColor,borderRadius: borderRadius}">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    title: {
      type: String,
      default: '这个是message信息'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    },
    color: {
      type: String,
      default: '100px'
    },
    bgColor: {
      type: String,
      default: 'rgba(0,0,0,0.5)'
    },
    borderRadius: {
      type: String,
      default: '15px'
    },
    top: {
      type: String,
      default: '100px'
    }
  }
}
</script>

<style lang="scss" scoped>
.message{
  position: fixed;
  left: 50%;
  .message-wrapper{
    display:flex;
    justify-items: center;
    flex-direction: column;
    text-align: center;
    color: #fff;
    line-height: 50px;
    padding: 10px
  }
}
</style>
