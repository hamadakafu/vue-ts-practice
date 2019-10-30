<template>
  <div>
    <b-field label="markdown">
      <b-input type="textarea" v-model="markdownText" placeholder="Input Markdown Text"></b-input>
    </b-field>
    <div v-html="convertMarkdown"></div>
    <div>
      <p>{{ convertMarkdown }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  head: {
    script: [
      { type: 'text/javascript', src: "https://cdn.rawgit.com/ktquez/vue-head/master/vue-head.js"},
      { type: 'text/javascript', src: "https://cdnjs.cloudflare.com/ajax/libs/marked/0.4.0/marked.min.js"}
    ],
  },
})
export default class Markdown extends Vue {
  markdownText: string

  constructor() {
    super()
    this.markdownText = ""
  }

  get convertMarkdown(): string {
    return marked(this.markdownText)
  }
}
</script>