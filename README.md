# リネアワークス中途採用コーディングテスト

この度は、株式会社リネアワークスのフロントエンドエンジニア募集にご興味を抱いていただき、誠にありがとうございます。

## はじめに

弊社が通常のWEBサイトを制作する際に、使用しているフロントエンドの開発環境に近い構成の環境を使用して、実際にLPのコーディングを行っていただきます。  
本テストは、フロントエンドエンジニアとしての基本的なスキル（主にWEBサイトのコーディング）と、弊社に入社いただけた際、スムーズに業務に合流できるかを確認させていただくためのものとなります。

## 課題内容

- 日本CLT技術研究所WEBサイト内、CLT CROSS LAMINATED TIMBER(<https://nc-labo.jp/lp/clt/>) ページ（※一部課題用に変更しています）を再現してください。  
※Figmaファイルの内容で実装。  
※バックエンドの実装は不要です。デザインファイルは下記`デザインファイル`を参照ください。
- 最終提出物は、GitHubのリポジトリにpushしていただいたソースコード（※実装に必要な設定ファイルや、開発時に作成した補助ドキュメントも含めてください）と、テストサイトの表示内容となります。
- 現状公開されているサイトをご覧いただいても構いません。
- 実装にあたっては、Figmaファイルの内容を正としてください。公開中のサイトは、挙動やコンテンツ確認のための参考情報としてご利用ください。
- レスポンシブデザインとし、ブレークポイント768px。※768px以上がPCデザイン表示、それ未満がSPデザイン表示で実装してください。
- 使用するフォントは、お送りさせていただいたデザインファイルを確認の上、適切なWEBフォントをGoogle Fontsから使用してください。
- 実装に使用するフレームワーク、ライブラリやプラグインの追加・変更は自由です。
- 課題に関する質問は、本リポジトリのissue(<https://github.com/lineaworks/recruit_trial/issues>)にて`question`のラベルを付けてトピックの作成をお願いいたします。

### 提出期限・提出内容

- 提出期限は、課題共有日から2週間以内とします。
- Fork後のGitHubリポジトリに、実装に必要なソースコード、設定ファイル、追加した依存関係、開発時に作成した補助ドキュメントを含めてpushしてください。
- `npm run build` で生成された `dist` 配下のファイル一式を、指定のテストサイトFTP環境へアップロードしてください。
- AIエージェント向けのコンテキストファイルや設定ファイルを作成した場合は、提出物に含めてください。

### 実装・確認条件

- 対象ブラウザは、主要ブラウザ（Chrome / Safari / Firefox / Edge）の各最新バージョンとします。
- PCデザインは768px以上、SPデザインは768px未満を基準に実装してください。
- Figmaファイルと公開中サイトに差分がある場合は、Figmaファイルの内容を優先してください。
- 提出前に `npm run check`、`npm run lint-script`、`npm run lint-html`、`npm run build` が通ることを確認してください。

### 評価観点

- デザイン再現度（※重要度高）
- レスポンシブ対応（※重要度高）
- HTML構造の妥当性
- CSSの設計・保守性
- 画像、フォント、アセットの扱い
- アクセシビリティへの配慮
- `npm run check`、`npm run lint-script`、`npm run lint-html`、`npm run build` が通ること
- 追加した依存関係や設定変更の妥当性

### 技術構成

本課題では、下記の技術構成を前提としたフロントエンド開発環境を用意しています。

- Astro (for HTML / component)
- TypeScript / ESNext (for JavaScript)
- CSS / Tailwind CSS (for stylesheet)
- Node.js ^20.19.0 または >=22.12.0
- npm

実装に使用するフレームワーク、ライブラリ、プラグインの追加・変更は自由です。  
ただし、追加・変更に伴って必要となる依存関係のインストール、設定ファイル、ビルドスクリプトの変更は、提出物に含めてください。

AIエージェントやコード補完ツールを利用して実装していただいて問題ありません。  
ただし、生成されたコードをそのまま提出するのではなく、内容を理解し、動作確認・品質確認を行ったうえで提出してください。

AIエージェント向けのコンテキストファイルや設定ファイルを作成した場合は、提出物に含めていただけると、開発時の判断や工夫を確認しやすくなります。  
例: `AGENTS.md`、`CLAUDE.md`、独自スキル、プロンプト、エージェント設定ファイルなど

### デザインファイル

[Figma Design](https://www.figma.com/design/fX4ciKstxZxV4NlLDCn2PO/%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%86%E3%82%B9%E3%83%882026?node-id=0-1&p=f&t=8iLJV7VBAYfqTKD7-0)  
※編集権限は付与できませんので、お手数ですが、アクセス後に一度ローカルにDLしていただき、再度ご自身のアカウントでインポートをお願いいたします。

### テストサイトURL

別途送付させていただくテストサイトのURLを参照してください。

### テストサイトFTP

別途送付させていただくFTP情報を参照してください。  
提出時は `npm run build` で生成された `dist` 配下のファイル一式を、指定のFTP環境へアップロードしてください。

## HOW TO START

※ Git LFS を使用します。未導入の場合は `brew install git-lfs && git lfs install` を実行してください。  
※ 本READMEのセットアップ手順はmacOS / Homebrew環境を前提に記載しています。Windows / Linux環境で実施する場合は、各OSに応じた方法で Git LFS、mkcert、Node.js、npm をセットアップしてください。環境差分によりREADME通りに進められない場合は、同等の状態で開発・ビルドできるよう調整して構いません。

### 1.リポジトリのFork

本リポジトリ(<https://github.com/lineaworks/recruit_trial>)をForkし、ソースコードを取得してください。  

※GitHubのアカウントが必要になります。お持ちでない方は作成してください。  
※お手数ですが、Fork後のリポジトリのURLを弊社までご連絡ください。

手順は、[forkしたリポジトリを更新する方法](https://qiita.com/taoki11111/items/6582dafeb971f66d1f79)の手順1、2をご参照ください。  
※本リポジトリへのpush、プルリクエストは受け付けておりませんので、upstream登録は不要です。

### 2.環境変数の設定

`.env.example`を`.env`に複製してローカル環境用の環境変数を設定してください。

```bash
cp .env.example .env
```

### 3.ローカル環境用の証明書発行

ローカル環境用の自己証明書を発行してください。

``` bash
brew install mkcert # mkcertが未インストールの場合
mkcert -install # mkcertが未インストールの場合
mkcert -cert-file ./certs/server.crt -key-file ./certs/server.key localhost
```

### 4.npmパッケージのインストール

プロジェクトルートにて、
下記コマンドを実行して、必要なパッケージ群をインストールしてください。

```npm
npm ci
```

### 5.フロントエンド開発環境の起動

```npm
npm run dev
```

### 6.ブラウザで表示を確認

ローカルサーバーが起動して、規定のブラウザが起動し、ページが表示されます。

## フロントエンド開発環境について

### ディレクトリ構造

主な作業対象は `src` 配下です。用途に応じて、下記のディレクトリを使用してください。

- `src/pages` には、ページとなるAstroファイルを配置してください。
- `src/layouts` には、ページ共通のレイアウト用Astroコンポーネントを配置しています。
- `src/components` には、ページ内で再利用するAstroコンポーネントを配置してください。
- `src/styles` には、サイト全体で読み込むCSSを配置しています。基本的なスタイリングはTailwind CSSの利用を想定していますが、必要に応じてCSSファイルを追加して構いません。
- `src/lib` には、汎用処理、外部ライブラリのラッパー、共通ユーティリティなどを配置してください。
- `src/constants` には、サイト内で共通利用する定数を配置してください。
- `src/@types` には、グローバル変数やライブラリの型定義ファイルを配置してください。
- `src/images` には、加工・最適化対象の画像を配置してください。
- `src/statics` には、画像、PDF、フォントなど、そのまま公開する静的ファイルを配置してください。
- `src/icon-font/svg` には、アイコンフォント生成用のSVGファイルを配置してください。
- `src/svg-sprite` には、SVGスプライト生成用のSVGファイルを配置してください。

上記に当てはまらないファイルが増える場合は、用途や責務に応じて `src` 配下に適切なディレクトリを作成してください。

```markdown
/
├── src/
│   ├── @types/              # 型定義
│   ├── components/          # 再利用コンポーネント
│   ├── constants/           # 共通定数
│   ├── icon-font/
│   │   ├── preview/        # アイコンフォント確認用HTML
│   │   └── svg/            # アイコンフォント生成用SVG
│   ├── images/              # 加工・最適化対象の画像
│   ├── layouts/             # レイアウト用Astroコンポーネント
│   ├── lib/                 # 汎用処理・ラッパー
│   ├── pages/               # ページ用Astroファイル
│   ├── statics/             # そのまま公開する静的ファイル
│   ├── styles/              # 共通CSS
│   └── svg-sprite/          # SVGスプライト生成用SVG
├── script/
│   └── node/                # アセット生成などの補助スクリプト
├── template/                 # 生成処理で使用するテンプレート
├── astro.config.ts
├── vite.config.ts
├── project.config.ts
└── package.json
```

`.astro`、`.tmp`、`dist` は生成ディレクトリです。通常、直接編集する必要はありません。

### 各種コマンド

#### 開発サーバー起動

初回のアセット生成後、Astroの開発サーバーとアセット監視を起動します。

```npm
npm run dev
```

#### プロダクションビルド

静的アセットの生成、不要ファイルのクリーンアップ、Astroの本番ビルドを実行します。

```npm
npm run build
```

#### ビルド結果のプレビュー

本番ビルド後、生成されたページをローカルで確認します。

```npm
npm run preview
```

#### 型チェック / Astroチェック

TypeScriptとAstroファイルのチェックを実行します。

```npm
npm run check
```

#### Lint

HTML / Astro / TypeScript / JavaScript / CSS / MarkdownのLintを実行します。

```npm
npm run lint-script
npm run lint-html
```

#### フォーマット

Lintの自動修正とPrettierによる整形をまとめて実行します。

```npm
npm run format
```

### Astro

- ページは `src/pages` 配下に作成してください。
- 共通レイアウトは `src/layouts` 配下に配置しています。
- Astroコンポーネント、TypeScript、CSSを組み合わせて実装できます。

### Stylesheet

- サイト全体のスタイルは `src/styles/global.css` を起点に読み込んでいます。
- Tailwind CSSを利用できますが、必須ではありません。扱いやすい方法でスタイリングしていただいて構いません。
- ページ固有のスタイルは、Astroコンポーネント内の `<style>` または関連するCSSファイルで管理してください。
- Sass等のCSSプリプロセッサを導入いただいても問題ありません。

#### 記述例

##### Tailwind CSS

```astro
<div class="w-full bg-[url('/images/common/background_image.webp')] px-20 md:px-40">
  <h1 class="text-2xl md:text-xl">Title</h1>
  <p class="leading-loose tracking-wide text-gray-200">Text</p>
</div>
```

##### Astro Scoped Styles

```astro
<div class="page">
  <h1>Title</h1>
  <p>Text</p>
</div>

<style>
  .page {
    width: 100%;
    padding-inline: 5rem;
    background-image: url("/images/common/background_image.webp");
  }

  h1 {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  p {
    color: #e5e7eb;
    line-height: 2;
    letter-spacing: 0.025em;
  }

  @media (width >= 48rem) {
    div {
      padding-inline: 10rem;
    }

    h1 {
      font-size: 1.25rem;
      line-height: 1.75rem;
    }
  }
</style>
```

##### External Styles

外部CSSファイルを使う場合は、Astroコンポーネントやページのフロントマターで `import` します。

```css
/* src/styles/page.css */
.page {
  width: 100%;
  padding-inline: 5rem;
  background-image: url("/images/common/background_image.webp");
}

.page h1 {
  font-size: 1.5rem;
  line-height: 2rem;
}

.page p {
  color: #e5e7eb;
  line-height: 2;
  letter-spacing: 0.025em;
}

@media (width >= 48rem) {
  .page {
    padding-inline: 10rem;
  }

  .page h1 {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
}
```

```astro
---
import "@/styles/page.css";
---

<div class="page">
  <h1>Title</h1>
  <p>Text</p>
</div>
```

静的ファイルとして配置したCSS、または外部URLのCSSを読み込む場合は、絶対パスで `<link>` を使用できます。  
配置場所については [Static Files](#static-files) を参照してください。

```astro
<head>
  <link rel="stylesheet" href="/page.css" />
</head>
```

[About External Styles](https://docs.astro.build/ja/guides/styling/#external-styles)

### JavaScript / TypeScript

- TypeScript / ESNextを使用できます。
- 共通処理やユーティリティは `src/lib` や `src/constants` を必要に応じて使用してください。
- Astroページやレイアウトから必要なスクリプトを読み込んで実装してください。

#### 記述例

##### Client-Side Scripts

ブラウザ上で実行する処理は、Astroコンポーネント内の `<script>` に記述できます。

```astro
<button
  type="button"
  data-button
>
  Click
</button>

<script>
  const button = document.querySelector<HTMLButtonElement>('[data-button]');

  button?.addEventListener('click', () => {
    console.log('clicked');
  });
</script>
```

##### Import Local Scripts

処理を別ファイルに分ける場合は、`<script>` 内でJavaScript / TypeScriptファイルを `import` します。

```ts
// script.ts
const button = document.querySelector<HTMLButtonElement>('[data-button]');

button?.addEventListener('click', () => {
  console.log('clicked');
});
```

```astro
<button
  type="button"
  data-button
>
  Click
</button>

<script>
  import './script';
</script>
```

##### Load External Scripts

静的ファイルとして配置したJavaScript、または外部URLのJavaScriptを読み込む場合は、絶対パスで `<script src>` を使用できます。  
配置場所については [Static Files](#static-files) を参照してください。

```js
// src/statics/page.js
const button = document.querySelector('[data-button]');

button?.addEventListener('click', () => {
  console.log('clicked');
});
```

```astro
<button
  type="button"
  data-button
>
  Click
</button>

<script src="/page.js"></script>
```

[About Load External Scripts](https://docs.astro.build/ja/guides/client-side-scripts/#load-external-scripts)

### Images

- 加工・最適化対象の画像は `src/images` 配下に配置してください。
- `npm run compile:images` または `npm run compile` で画像を生成します。

### Static Files

- 画像、PDF、フォントなど、そのまま公開する静的ファイルは `src/statics` 配下に配置してください。
- `npm run compile:statics` または `npm run compile` で公開用ディレクトリへコピーします。

### Icon Font / SVG Sprite

- アイコンフォントやSVGスプライトは、実装上必要な場合に利用してください。
- アイコンフォント用のSVGは `src/icon-font/svg` 配下に配置してください。
- SVGスプライト用のSVGは `src/svg-sprite` 配下に配置してください。
- 必要に応じて `npm run compile:icon-font`、`npm run compile:svg-sprite`、または `npm run compile` を実行してください。
