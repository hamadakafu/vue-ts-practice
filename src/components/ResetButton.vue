<template>
  <div>
    <button @click="onClick">Reset</button>
  </div>
</template>

<script lang="ts">
  import {Component, Emit, Prop, Vue} from 'vue-property-decorator'
  
  @Component
  export default class ResetButton extends Vue {
    public initialValue!: string 
  
    // 初期化の際に必要かどうか
    // @Prop({required: true})
    @Prop()
    public value!: string
  
    @Emit()
    public input(value: string) {}

    // ライフサイクルフックで呼ばれる
    // 最初に作られたときに呼ばれる
    public created() {
      console.log("created")
      this.initialValue = "initial value"
    }
  
    public onClick() {
      this.input(this.initialValue)
    }
  }
</script>