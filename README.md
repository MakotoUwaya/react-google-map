# Google Maps React プロジェクト

このプロジェクトは、[@vis.gl/react-google-maps](https://visgl.github.io/react-google-maps/) を使用して、React アプリケーションで Google Maps を扱う検証プロジェクトです。

## 技術スタック

- React 19
- TypeScript
- Vite
- TailwindCSS
- @vis.gl/react-google-maps
- Vitest（ユニットテスト）
- Playwright（E2Eテスト）

## 開発環境のセットアップ

1. リポジトリをクローンする
```bash
git clone <repository-url>
cd google-map-sample
```

2. 依存関係をインストール
```bash
pnpm install
```

3. 環境変数の設定
- `.env` ファイルを作成し、Google Maps API キーを設定
```env
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

4. 開発サーバーの起動
```bash
pnpm dev
```

## 利用可能なスクリプト

- `pnpm dev` - 開発サーバーの起動
- `pnpm build` - プロダクションビルドの作成
- `pnpm preview` - ビルドしたアプリケーションのプレビュー
- `pnpm test` - ユニットテストの実行
- `pnpm test:ui` - UIモードでのテスト実行
- `pnpm test:coverage` - テストカバレッジの生成
- `pnpm e2e` - E2Eテストの実行
- `pnpm e2e:ui` - UIモードでのE2Eテスト実行
- `pnpm lint` - ESLintによるコード検証
- `pnpm format` - Prettierによるコードフォーマット

## ドキュメント

詳細な情報については、以下のドキュメントを参照してください：
- [@vis.gl/react-google-maps ドキュメント](https://visgl.github.io/react-google-maps/)
- [React ドキュメント](https://react.dev/)
