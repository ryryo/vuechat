<template>
  <div class="chat">
    <h1>{{ msg }}</h1>
    <p>
      チャットを簡単に作れると良いな。
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <router-link to="/article">Article</router-link>
      </li>
      <li>
        <router-link to="/top">Top</router-link>
      </li>
      <li>
        <router-link to="/">HelloWorld</router-link>
      </li>
    </ul>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
a {
  color: #42b983;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  a {
   color: #420033;
  }
}
</style>
