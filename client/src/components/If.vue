<template>
  <div>

    <div>
      <p v-if="isTrue">True</p>
      <p v-else>False</p>
      <b-button @click="renewIsTrue">renew isTrue</b-button>
    </div>

    <div>
      <p v-if="num === 0">num is 0: {{ num }}</p>
      <p v-else-if="num === 1">num is 1: {{ num }}</p>
      <p v-else>num is else: {{ num }}</p>
      <b-button @click="renewNum">renew num</b-button>
    </div>

  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from "vue-property-decorator"

@Component
export default class If extends Vue {
  isTrue: boolean
  num: number

  constructor() {
    super()
    this.isTrue = true
    this.num = 0
  }

  renewIsTrue() {
    this.isTrue = Math.random() >= 0.5
  }

  renewNum() {
    const randomNum = Math.random()
    if (randomNum < 0.5) {
      this.num = 0
    } else if (randomNum < 0.8) {
      this.num = 0.75
    } else {
      this.num = 1
    }
    this.num
  }
}
</script>