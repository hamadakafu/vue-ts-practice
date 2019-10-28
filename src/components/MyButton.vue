<template>
  <!-- template内は必ず一つのDOMしか置けないのでdivを置く-->
  <div>
    <!-- @で監視する -->
    <button @click="onClick">MyButton</button>
    <p>greet: {{ greet }}</p>
    <p>geeee: {{ geeee }}</p>
    <p v-if="isok">isok!</p>
    <ul>
      <li v-for="c in comments" v-bind:key="c.id">{{ c }}</li>
    </ul>
    <div>
      <input type="text" v-model="inputText" placeholder="goe"/>
      <button @click="onSubmit" v-bind:disabled="invalid()">Submit</button>
      <p>{{ inputText }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from "vue-property-decorator"

@Component
export default class MyButton extends Vue {
  @Prop() // 設定されないかもしれないので?。必ず設定されるときは!。
  // Propは親のプロパティを使うためのもの
  // 親のプロパティを変更するにはEmit経由でやる必要がある。
  public greet!: string
  public geeee: string = "geeee"
  
  inputText: string = ""

  comments: string[] = []
  
  public isok: boolean = false

  invalid(): boolean {
    return this.inputText.length === 0
  }
  
  //この関数の実行直後に親の紐付けたプロパティが呼ばれる
  // 引数を渡すことも可能
  @Emit()
  public clicked() {
    console.log("clicked")
    console.log(this.greet)
    this.geeee = Math.random().toString(36).slice(-8)
    this.isok = Math.random() >= 0.5
  }

  // @Emit('clicked')にすることでclicked()を作って実行する必要がなくなる
  public onClick() {
    this.clicked()
    console.log(this.greet)
    console.log(this.geeee)
    this.comments.push(this.geeee)
  }

  onSubmit() {
    this.comments.push(this.inputText)
    this.inputText = ""
  }
}
</script>