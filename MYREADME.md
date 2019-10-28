# Memo

## vue create <project_name>

## Componentは値を直接変更してはいけない
イベントとして処理する必要がある。

## modelバインディングする際には
```ts
<v-model="text">
<v-bind:value="text" v-on:input="text = 'hgoe'">
```
v-modelは糖衣構文で、
valueとinputを定義する必要がある
```ts
@Prop()
public value

@Emit()
public input(value)
```
## クラス属性
```ts
<MyButton class='my-button'>
```
とすると、MyButton.template直下の要素にクラスが付与される。

## v-ifとv-show
両者とも、booleanでDOMを表示するかをコントロールするが、
v-showは非表示の間にもデータを保持し、cssで見せるか見せないかの切り替えをする。
v-showは必ず初期化をするが、v-ifはtrueになるまで、初期化されない

## routerの追加
`vue add router`

## v-bind:<hoge> = "値"
hogeにはtag内のプロパティを指定して、そのプロパティの値を値で管理するという意味