# Memo
MVVM
Model
View
View-Model: viewとmodelをどう結びつけるかを記述する。ex) v-for v-if v-show...

[vue in typescript](https://blog.asial.co.jp/2019/05/07/TypeScript_%2B_Vue_js_の始め方)

## vue create <project_name>

## Componentは値を直接変更してはいけない
イベントとして処理する必要がある。

## modelバインディングする際には
v-bindはタグの属性をVueオブジェクトのあるプロパティにバインドする。
v-modelはvalue属性とinput属性を勝手にバインドしてくれる糖衣構文。
```ts
<v-bind:value="text" v-on:input="text = 'hgoe'">
<v-model="text">
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
関数の場合はカッコを付けて呼ぶ必要がある

## ?をプロパティにつける
class内で
```ts
sumeNumber?: number
```
のように?をつけると、なくてもあってもいいことになる。
初期化されていない場合、v-bindやv-model内で使うことができない。

## v-model.number
nubmerをつけないと数字を入力しても、文字列に変換される

## v-bind記法
v-bind記法は2つある。
```ts
<li v-bind:key="hogeid">
<li :key="hogeid">
```

## v-on記法
v-on記法は2つある
```ts
<a v-on:click="onClick"></a>
<a @click="onClick"></a>
```

## TypeScript内でpublicをつける
~templateから使っているプロパティや関数はpublicをつけないと怒られる。~
そんなことなかった。

## v-onにはkeyupとkeydownの2つ種類がある。
v-on:keyup.tabだとフォームが移動したあとで発行されるのでタイミングが遅い。
v-on:keydown.tabを使うべき。
さらにこのままだとイベントを発行できるが、フォームの移動が発生してしまうので、
v-on:keydown.prevent.tabを使うとデフォルトの挙動をpreventする
他にもドットで修飾子をつけて挙動を変えることができる。

ref: <https://qiita.com/zaru/items/e40eaa8a48688d1928f6>

## computed in TypeScript
getterとsetterとして記述することでcomputedプロパティを表すことができる。

# vue router
ページが切り替わるたびにコンポーネントはもう一度作られる値を維持することはできない

# Buefy

## keyup.deleteではイベントを撮ってこれない
v-on:keyup.native.deleteとする必要がある