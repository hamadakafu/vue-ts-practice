<template>
  <div id="app">
    <b-navbar>
      <template slot="start">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/button-sample' }">ButtonSample</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/text-sample' }">TextSample</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/if' }">If</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/for' }">For</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/computed' }">Computed</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/markdown' }">Markdown</b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/button-sample' }">ButtonSample</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/text-sample' }">TextSample</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/if' }">If</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/for' }">For</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/computed' }">Computed</b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/markdown' }">Markdown</b-navbar-item>
      </template>
    </b-navbar>
    <router-link to="/">Home</router-link> |
    <router-link to="/button-sample">ButtonSample</router-link> |
    <router-link to="/text-sample">TextSample</router-link> |
    <router-link to="/if">If</router-link> |
    <router-link to="/for">For</router-link> |
    <router-link to="/computed">Computed</router-link> |
    <router-link to="/markdown">Markdown</router-link>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
