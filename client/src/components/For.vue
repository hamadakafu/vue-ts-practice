<template>
  <div>

  <div>
    <b-button @click="addComment">Add Comment</b-button>
    <ul>
      <li v-for="comment in comments" v-bind:key="comment.id">{{ comment.id }}: {{ comment }}</li>
    </ul>
  </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class For extends Vue {
  comments: string[]

  constructor() {
    super()
    this.comments = []
  }

  addComment() {
    this.comments.push(Math.random().toString(10+26).slice(-8))
  }
}
</script>