const path = require('path');

module.exports = {
  // モードを "development" または "production" に設定
  mode: 'development',

  // エントリーポイントの設定
  entry: './src/index.js', // このファイルからビルドが始まります

  // 出力の設定
  output: {
    filename: 'bundle.js', // 出力されるファイル名
    path: path.resolve(__dirname, 'dist'), // 出力ディレクトリ
    publicPath: '/', // サーバーパスの設定
  },

  // モジュールの設定
  module: {
    rules: [
      {
        test: /\.js$/, // .jsファイルを対象に
        exclude: /node_modules/, // node_modules ディレクトリは除外
        use: {
          loader: 'babel-loader', // Babelを使用してES6をトランスパイル
          options: {
            presets: ['@babel/preset-env'] // ES6の構文を変換
          }
        }
      },
      {
        test: /\.png$/, // .pngファイルを対象に
        use: [
          {
            loader: 'file-loader', // file-loaderを使用してファイルを処理
            options: {
              outputPath: 'images', // 画像ファイルの出力ディレクトリ
              name: '[name].[ext]', // ファイル名の設定
            },
          },
        ],
      },
      {
        test: /\.css$/, // .cssファイルを対象に
        use: ['style-loader', 'css-loader'] // CSSをバンドルするために使用
      }
    ],
  },

  // 開発サーバーの設定
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // 静的ファイルのディレクトリ
    compress: true, // 圧縮を有効に
    port: 9000, // ポート番号
    publicPath: '/', // バンドルされたファイルにアクセスするための公開URLパス
    hot: true, // ホットリロードを有効に
  }
};
