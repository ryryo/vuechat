<template>
  <div class="test">
    <h1>This is an about page</h1>

    <p>
      {{msg}}
    </p>
    <input type="text" v-model="msg">

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>