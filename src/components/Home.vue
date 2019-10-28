<template>
  <div>
    <MyButton :greet="greetText" geeee="geeee" @clicked="myClicked"></MyButton>
    <ResetButton v-model="greetText"></ResetButton>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import MyButton from '@/components/MyButton.vue'
import ResetButton from '@/components/ResetButton.vue'
  
@Component({
  components: {
    MyButton,
    ResetButton,
  }
})
export default class Home extends Vue {
  // createdではなくここに初期値を設定してあげないと再代入できない模様
  // createdのほうが優先される
  public greetText: string = "greett"
  // public greetText: string

  public comments: string[] = []

  // createdをすると親がこのイベントを監視して、myclickedで変更しても変更が効かなかった。
  // ~createdが呼ばれて毎回上書きされるのではないだろうか~ そんなことはなかったわからない
  created() {
    console.log('home is created')
    this.greetText = "greetText"
  }

  public myClicked() {
    console.log('called myclicked in home components')
    this.greetText = "こんにちわ"
  }
}
</script>