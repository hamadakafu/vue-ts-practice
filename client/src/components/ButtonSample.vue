<template>
  <!-- template内は必ず一つのDOMしか置けないのでdivを置く-->
  <div>

    <div>
      <label><input type="checkbox" value="normal checkbox" v-model="checkbox"/></label><br/>
      <label><input type="checkbox" value="multi check" v-model="checks"/></label><br/>
      <p>{{ checks }}</p>
      <b-checkbox v-model="checkbox"></b-checkbox>
    </div>

    <div>
      <b-button>sample button</b-button>
    </div>

    <div>
      <b-checkbox v-model="isTrue" true-value="True" false-value="False">{{ isTrue }}</b-checkbox>
    </div>

    <div>
      <b-checkbox v-bind:disabled="isDisable">{{ isDisable }}</b-checkbox>
      <b-checkbox v-model="isDisable" v-on:click="toggleDisable">{{ isDisable }}</b-checkbox>
    </div>

  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from "vue-property-decorator"
import {HelloPromiseClient} from "@/pb/sample_grpc_web_pb"
import {Request, Response} from "@/pb/sample_pb"

@Component
export default class ButtonSample extends Vue {
  @Prop() // 設定されないかもしれないので?。必ず設定されるときは!。
  // Propは親のプロパティを使うためのもの
  // 親のプロパティを変更するにはEmit経由でやる必要がある。
  public greet!: string
  public geeee: string = "geeeetext"
  
  checkbox: boolean = true
  checks: boolean[] = []

  isok: boolean = false
  isTrue: string = "True"
  isDisable: boolean = true

  constructor() {
    super()
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

  toggleDisable() {
    console.log('too')
    if (this.isDisable) {
      this.isDisable = false
    } else {
      this.isDisable = true
    }
  }

}
</script>