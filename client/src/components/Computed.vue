<template>
  <div>
    
    <div>
      <p v-bind:style="{backgroundColor: mixColor}">{{ mixColor }}</p>
      <b-field label="red">
        <b-slider type="is-danger" v-model="r" :min="0" :max="255"></b-slider>
      </b-field>
      <b-field label="green">
        <b-slider type="is-success" v-model="g" :min="0" :max="255"></b-slider>
      </b-field>
      <b-field label="blue">
        <b-slider type="is-info" v-model="b" :min="0" :max="255"></b-slider>
      </b-field>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'

@Component
export default class Computed extends Vue {
  r: number
  g: number
  b: number 

  constructor() {
    super()
    this.r = 0
    this.g = 0
    this.b = 0
  }

  get mixColor(): string {
    return "RGB(" + this.r + "," + this.g + "," + this.b + ")"
  } 
}
</script>