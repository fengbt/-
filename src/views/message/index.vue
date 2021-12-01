<template>
  <div>
    <el-button @click="onSuccess">成功</el-button>
    <el-button @click="onFailure">失败</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    onSuccess() {
      // console.log('success')
      // console.log(this.$Message())
      this.$Message({
        title: '成功',
        bgColor: 'green',
        width: '400px',
        color: '#ccc',
        top: '200px'
      }).init()
    },
    onFailure() {
      // console.log('failure')
      this.$Message({
        title: '失败,成功，失败,失败,成功，失败,失败,成功，失败,失败,成功，失败,失败,成功，失败,失败,成功，失败,失败,成功，失败,失败,成功，失败,',
        bgColor: 'red',
        width: '400px',
        color: 'black'
      }).init()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
