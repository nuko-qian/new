<template>
  <div class="hello">
    <div class="banner">
      <ul class="con" :style="classobj">
        <li>1</li>
        <li>2</li>

      </ul>

  </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}

</script>

<style lang="scss">
</style>
