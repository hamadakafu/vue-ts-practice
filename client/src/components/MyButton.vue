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
    <div>
      <input type="text" v-model="manyInputText" placeholder="many input text"/>
      <button @click="onManySubmit" v-bind:disabled="this.manyInputText.length === 0">Submit</button>
      <p>{{ inputText }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from "vue-property-decorator"
import {HelloPromiseClient} from "@/pb/sample_grpc_web_pb"
import {Request, Response} from "@/pb/sample_pb"

@Component
export default class MyButton extends Vue {
  @Prop() // 設定されないかもしれないので?。必ず設定されるときは!。
  // Propは親のプロパティを使うためのもの
  // 親のプロパティを変更するにはEmit経由でやる必要がある。
  public greet!: string
  public geeee: string = "geeee"
  
  inputText: string = ""
  manyInputText: string = ""

  comments: string[] = []
  
  public isok: boolean = false

  helloClient: HelloPromiseClient

  invalid(): boolean {
    return this.inputText.length === 0
  }

  constructor() {
    super()
    this.helloClient = new HelloPromiseClient('http://' + window.location.hostname + ':8081', null, null);
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
    let req = new Request()
    req.setName(this.inputText)
    this.helloClient.oneHello(req).then((res) => {
      this.comments.push(res.getMessage())
    }).catch((err) => {
      console.log(err)
    }); 
    this.inputText = ""
  }

  onManySubmit() {
    let req = new Request()
    req.setName(this.manyInputText)
    let stream = this.helloClient.manyHello(req)
    stream.on('data', (res: Response) => {
      this.comments.push(res.getMessage())
    })
  }
}
</script>