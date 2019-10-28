<template>
  <div class="app">
    <!-- greetプロパティに"hello"を設定する
    <MyButton greet="hello"></MyButton> 
    -->
    <!-- binding する App.greetTextをMybuttonのgreetに使う 
      上位にあるコンポーネントの値を使っている
      下にあるMyButtonは上のApp.greetTextを監視しているので変更を検知できる。
      上位にあるコンポーネントのプロパティを更新したい場合は、Emitで上位の関数を呼び出す
    -->
    <MyButton :greet="greetText" geeee="geijfaojwao" @clicked="onMyButtonClicked"></MyButton> 
    <ResetButton v-model="greetText"></ResetButton> 
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import MyButton from "./components/MyButton.vue"
  import ResetButton from "./components/ResetButton.vue"

  @Component({
    components: {
      MyButton,
      ResetButton,
    },
  })

  export default class App extends Vue{
    public greetText: string = "hoge"

    public onMyButtonClicked() {
      this.greetText = "こんにちわ"
    }
  }
</script>