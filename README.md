# Coding Trial

採用選考課題として制作したWebサイトです。

Figmaで提供されたデザインをもとに、Astro / TypeScript / Tailwind CSSを使用して実装しました。

## Demo

[Live Demo](https://naoto0211tt.github.io/recruit_trial/)

## Technologies

- Astro
- TypeScript
- Tailwind CSS
- HTML
- CSS
- JavaScript
- Node.js
- npm

## Implementation

- FigmaデザインをもとにしたWebサイトの実装
- PC / SPのレスポンシブ対応
- AstroコンポーネントによるUIのコンポーネント化
- TypeScriptによる実装
- Tailwind CSSによるスタイリング
- セマンティックなHTML構造を意識した実装
- 画像・フォントなどのアセット管理
- 表示・動作確認およびLint / Buildによる品質確認

## Highlights

### Component Design

ページ内で再利用するUIをAstroコンポーネントとして分離し、保守・再利用しやすい構成を意識して実装しました。

### Responsive Design

PCとスマートフォンそれぞれのデザインをもとに、画面幅に応じてレイアウトや文字サイズ、余白などを調整しました。

### Design Implementation

文字サイズや余白、要素間のバランスなどを確認しながら、デザインをWebサイトとして自然に再現することを意識して実装しました。

### Accessibility

セマンティックなHTML要素やalt属性、ARIA属性などを使用し、可能な範囲でアクセシビリティに配慮しました。

## AI Usage

開発補助としてAIツールを活用しています。

実装方法の検討、コード生成、エラーの原因調査などにAIを利用し、生成されたコードについては表示や動作を確認しながら、必要に応じて修正・調整を行いました。

## Development

### Install

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

### Type Check

```bash
npm run check
```

### Lint

```bash
npm run lint-script
npm run lint-html
```

### Format

```bash
npm run format
```

## Project Structure

主なディレクトリ構成です。

```text
/
├── src/
│   ├── @types/              # 型定義
│   ├── components/          # UIコンポーネント
│   ├── constants/           # 共通定数
│   ├── images/              # 画像
│   ├── layouts/             # レイアウト用Astroコンポーネント
│   ├── lib/                 # 汎用処理・ユーティリティ
│   ├── pages/               # ページ用Astroファイル
│   ├── statics/             # 静的ファイル
│   ├── styles/              # 共通CSS
│   └── svg-sprite/          # SVGスプライト
├── script/
├── template/
├── astro.config.ts
├── vite.config.ts
├── project.config.ts
└── package.json
```

## Notes

本リポジトリは、採用選考課題として制作したWebサイトのソースコードを公開したものです。
