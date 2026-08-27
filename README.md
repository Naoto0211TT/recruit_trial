# Coding Trial

採用選考課題として制作したWebサイトです。

Figmaで提供されたデザインをもとに、
Astro / TypeScript / Tailwind CSSを使用して実装しました。

## Demo

[Live Demo](ここに公開URLを記載)

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
- 画像・フォントなどのアセットを適切に管理
- 主要ブラウザでの表示・動作確認

## Highlights

### Component Design

ページ内で再利用するUIをAstroコンポーネントとして分離し、
保守・再利用しやすい構成を意識して実装しました。

### Responsive Design

PCとスマートフォンそれぞれのデザインを確認し、
画面幅に応じてレイアウトや文字サイズ、余白などを調整しました。

### Design Implementation

単純にデザインを再現するだけではなく、
文字サイズや余白、要素間のバランスなどを確認しながら、
実際のWebサイトとして自然に見えることを意識して実装しました。

### Accessibility

適切なHTML要素やalt属性などを意識し、
可能な範囲でアクセシビリティに配慮した実装を行っています。

## AI Usage

AIツールを開発補助として活用しました。

コード生成や実装方法の検討、エラーの原因調査などにAIを利用し、
生成されたコードについては内容を確認した上で、
必要に応じて修正・調整を行っています。

AIによる生成結果をそのまま使用するのではなく、
実装内容を理解した上で動作確認・品質確認を行うことを意識しています。

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
│   ├── components/          # 再利用コンポーネント
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

## Development Environment

本プロジェクトでは、主に以下の環境を使用しています。

- Astro
- TypeScript / ESNext
- Tailwind CSS
- Node.js
- npm

---

## Notes

本リポジトリは採用選考課題として制作したWebサイトのソースコードを掲載しています。
