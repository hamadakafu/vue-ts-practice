<template>
  <div>

    <div>
      <textarea v-model="buefySimpleText" placeholder="textarea"></textarea>
      <b-field label="buefySimpleText">
        <b-input v-model="buefySimpleText"></b-input>
      </b-field>
      <p>{{ buefySimpleText }}: {{ buefySimpleText.length }}</p>
    </div>

    <div>
      <input type="text" v-model="inputText" placeholder="goe"/>
      <button @click="onSubmit" v-bind:disabled="inputText.length === 0">Submit</button>
      <p>{{ inputText }}</p>
    </div>

    <div>
      <input type="text" v-model.lazy="lazyInput" placeholder="lazyInput"/>
      <!-- buefy ではlazyが何故か聞かない https://github.com/buefy/buefy/issues/401 -->
      <b-field label="lazyInput">
        <b-input v-model.lazy="lazyInput" placeholder="ng lazyInput"></b-input><br/>
        <b-input :value="lazyInput" @change.native="lazyInput = $event.target.value" placeholder="ok lazyInput"></b-input>
      </b-field>
      <p>lazyInput: {{ lazyInput }}</p>
    </div>

    <div>
      <b-field label="numberInput">
        <b-input v-model.number="numberInput"></b-input>
      </b-field>
      <p>numberInput: {{ numberInput }}</p>
    </div>

    <div>
      <b-field label="trimInput">
        <b-input v-model.trim="trimInput" placeholder="trimInput"></b-input>
      </b-field>
      <p>trimInput: ({{ trimInput }})</p>
    </div>

    <div>
      <b-field label="focusInput">
        <b-input id="focusInput" v-model="focusInput" placeholder="focusInput"></b-input>
      </b-field>
      <p>focusInput: {{ focusInput }}</p>
      <button @click="focusFocusInput">focus</button>
    </div>

    <div>
      <b-field label="tabInput">
        <b-input v-model="tabInput" v-on:keydown.native.prevent.tab="tabKey" placeholder="tabInput"></b-input>
      </b-field>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator"

@Component
export default class TextSample extends Vue {
  buefySimpleText: string
  inputText: string
  lazyInput: string
  numberInput: number
  trimInput: string
  focusInput: string
  tabInput: string

  constructor() {
    super()
    this.buefySimpleText = ""
    this.inputText = ""
    this.lazyInput = ""
    this.numberInput = 0
    this.trimInput = ""
    this.focusInput = ""
    this.tabInput = ""
  }

  onSubmit() {
    console.log('submitted')
  }

  onManySubmit() {
    console.log('submitted')
  }

  focusFocusInput() {
    let fi = document.getElementById('focusInput')
    if (fi !== null) {
      fi.focus()
    }
  }

  tabKey() {
    this.tabInput += "    "
  }
}
</script>