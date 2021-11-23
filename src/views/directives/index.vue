<template>
  <div class="main">
    <div v-for="(val,i) in list" :key="i" v-img="val.url" class="bg" />
  </div>
</template>

<script>
export default {
  directives: {
    'img': {
      inserted(el, binding) {
        // console.log(el, binding)
        // 随机背景色
        const color = Math.floor(Math.random() * 1000000)
        el.style.backgroundColor = '#' + color

        const img = new Image()
        img.src = binding.value
        img.onload = function() {
          el.style.backgroundImage = `url(${binding.value})`
          el.classList.add('img')
        }
      }
    }
  },
  data: function() {
    return {
      list: [
        {
          url: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/7abc2b532f725d394feaf0141547ade7.svg'
        },
        {
          url: 'https://pluspng.com/img-png/hawaiian-turtle-png-tribal-turtle-clipart-282.png'
        },
        {
          url: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/7abc2b532f725d394feaf0141547ade7.svg'
        }

      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.main{
    .bg{
        height: 200px;
        width: 33%;
        float: left;

    }
    .img{
       background-size : contain;
        background-repeat:no-repeat;
    }
}
</style>
