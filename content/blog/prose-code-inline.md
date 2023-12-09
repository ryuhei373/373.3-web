---
title: ProseCode と ProseCodeInline
createdAt: 2023-12-09
updatedAt: 2023-12-09
articleId: 3
---

markdown でインラインコード（ `hogehoge` ← これ ）を書いたときのスタイルをあてるのに苦労したという話。基本的に [nuxt-modules/mdc の Prose Component 一覧](https://github.com/nuxt-modules/mdc/tree/main/src/runtime/components/prose)にあるコンポーネントを `components/content` 以下でオーバーライドすればいいのだが、ひと悶着あった。

<!--more--> 

## 謎
https://github.com/nuxt-modules/mdc/tree/main/src/runtime/components/prose を見ると、`ProseCode` しか存在しないのでインラインは `ProseCode`、コードブロックは `ProsePre` あたりで上書きすればいいのかなと思って実装したんだけど、スタイルがあたらず困る。

インスペクタで見てみると呼び出し元が `@nuxt/content/dist/runtime/components/Prose/ProseCodeInline.vue` との記述があったので、`ProseCode` じゃなくて `ProseCodeInline` をオーバーライドすればいいのか？とリネームしたら無事にスタイルがあたった。

とはいえ前述の github のソースに `ProseCodeInline` なんてなかったやろがい！と憤慨しながら [content のドキュメントの Prose Components](https://content.nuxt.com/components/prose) を読み返すと確かに `ProseCodeInline` は存在しているんだが、記述にある[ソースへのリンク先](https://github.com/nuxt-modules/mdc/blob/main/src/runtime/components/prose/ProseCodeInline.vue)を確認すると Not Found であり、つまりどういうことなの？となってしまった。

## （真の意味で）なにもわからない
とりあえずは mdc とは別に content は content で `ProseCode`、`ProseCodeInline`、`ProsePre` を持ってるからそれを使えば良いと飲み込むことにしたが、ざっと調べてもどうしてそうなっているのか、何故ドキュメントにはその辺の説明はなくソースのリンク先も Not Found なのかとかはわからなかった。誰か詳しい人がいたら教えてください。
