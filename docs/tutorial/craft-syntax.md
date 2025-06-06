---
sidebar_position: 2
---

# 基本的な奏法

Axentaxでは奏法に装飾することを`スタイル`と呼んでいます。\
ここでは基本的なスタイルの記述方法について学びます。

## 接頭辞指定

`接頭辞`とは音の先頭に記載するという意味です。

### ストロークな弾き方

コードやtab記法の先頭にシングルクォーテーション`'`を付与すると\
付与した数に応じてストロークな弾き方を再現します

```
@@ {
  '''E // ジャラーンな感じ
}
```

### アップ・ピッキング

コードやtab記法の先頭にびっくりマーク`!`を付与するとアップ・ピッキングとなります。

```
@@ {
  !C
  !''''C // ストロークとミックスした指定
}
```

### スライド・イン

出だしで一瞬スライドします。\
二つのtabを`>>`区切りで記載します。\
以下サンプルでは、2フレットから5フレットまでスライドします。

```
@@ {
  ||2|2||>>|||5|5|
}
```

スピードを1-500の範囲で指定できます。
指定する場合、最初のtabの直後に`!数値`のように記載します。

```
@@ {
  ||2|2||>>|||10|10|
  r ||2|2||!200>>|||10|10|
  r ||2|2||!20>>|||10|10|
}
```
:::info 数値が小さいほど速いスライド、数値が大きいほど遅いスライドになります。
:::

## スタイル指定

音の末尾に:から始まるスタイルを記述しさまざまな効果を演出します。\
[Playground](https://axentax.github.io/axentax-playground/)実際のコードを試してみましょう。

<a id="tone-length"></a>

### スタイルによる音長

[基本的な記載方法の音の長さ](/docs/tutorial/basic-syntax#tone-length)で紹介した接尾辞の音長指定の他に\
スタイルによっても音長指定できます。

以下のように分数指定することで、全音符から16分音符等を指定できます

```
@@ {
  // スタイル指定
  C:1/4
  Dm:1/8
  Em:1/16
  Fmaj:1/16
  // 接尾辞指定
  '''G~~~
}
```

接尾辞の指定と両方指定できます。\
以下の場合、どちらの`C`も同じ音の長さになります。

```
@@ 1/4 {
  C // 4分音符
  C^:1/2 // 2分音符の半分
}
```

### 音量調整

`:v`スタイル指定で音量調整できます。

```
@@ {
  // 全弦一括指定
  // 1から100までの間の音量を指定できます。
  Em:v100

  // 弦毎の指定
  // 1から100までの間の音量を低音弦から指定します
  0|2|0|0|0|0:v(20|30|40|50|60|70) // 低音弦の音量を下げる例
  0|2|0|0|0|0:v(100|30|40|50|60|70) // 6弦の音量を上げた例
}
```
