# 株式会社Tales Arc コーポレートサイト

このフォルダには、株式会社Tales Arcのコーポレートサイト（1ページ構成）一式が入っています。
HTML・CSS・JavaScriptのみで作られており、特別なソフトやツールを使わずに公開・更新できます。

```
talesarc-site/
├── index.html                 サイト本体（1ページ）
├── privacy.html                 プライバシーポリシー（準備中の仮ページ）
├── 404.html                    存在しないページを開いたときの画面
├── robots.txt                   検索エンジン向けの設定
├── sitemap.xml                   検索エンジン向けのページ一覧
├── .gitignore                    GitHubに含めない不要ファイルの設定
├── content/
│   └── content.js               サイトに表示される文章（ここだけ編集すればOK）
└── assets/
    ├── css/style.css             デザイン（色・余白・レイアウトなど）
    ├── js/main.js                動き（ダークモード切り替え・メニュー開閉など）
    ├── images/
    │   └── logo.svg               （まだ存在しません）ロゴ完成後に置く場所
    └── img/
        ├── favicon.svg 等         ファビコン・SNSシェア画像
        └── photos/                サイトに使われている写真（差し替え用）
```

---

## 1. 文章を更新したいとき

サイトの中の文章（理念・事業内容・会社概要など）は、すべて
[`content/content.js`](content/content.js) という1つのファイルにまとまっています。

1. `content/content.js` をテキストエディタ（メモ帳やVS Codeなど）で開く
2. `" "`（ダブルクォーテーション）で囲まれている日本語の部分だけを書き換える
3. ファイルを保存する
4. `index.html` をブラウザで開き直す、またはGitHub Pagesに公開している場合はアップロードし直す

**注意点**

- `" "` の外側にある `{ }` `[ ]` `,` `:` などの記号は消さないでください。記号を消すと、サイトが正しく表示されなくなることがあります。
- 事業内容（`business.items`）や会社概要（`company.rows`）のように、複数の項目が並んでいる部分は、同じ形（`{ ... }`のかたまり）をコピーして増やすことで項目を追加できます。増やす場合は、直前の `}` の後ろに `,` を忘れずに付けてください。
- 迷ったときは、書き換える前のファイルをコピーしてバックアップしておくと安心です。

---

## 2. 写真を差し替えたいとき

サイトで使われている写真は、すべて `assets/img/photos/` フォルダの中にあります。
**同じファイル名のまま、写真を上書き保存するだけ**で差し替わります。コードを触る必要はありません。

| ファイル名 | 使われている場所 | 推奨する写真の比率・向き |
| --- | --- | --- |
| `assets/img/photos/hero.jpg` | 一番上（ファーストビュー）の背景写真 | 横長（例：2400×1500px程度） |
| `assets/img/photos/business-1.jpg` | 事業紹介「SNS・コンテンツ支援」 | 横4：縦3 |
| `assets/img/photos/business-2.jpg` | 事業紹介「食・体験づくり」 | 横4：縦3 |
| `assets/img/photos/business-3.jpg` | 事業紹介「地域メディア・地域プロデュース」 | 横4：縦3 |

現在は写真の代わりに、ブランドカラーを使った柔らかいグラデーション画像を仮置きしています。
今後、以下のような写真をご用意いただくと、サイトの世界観がより伝わります。

- `hero.jpg`：岩槻の街並みや、人が自然に会話している様子など
- `business-1.jpg`：SNS発信・撮影・コンテンツ制作の様子
- `business-2.jpg`：お菓子づくりや食にまつわる体験の様子
- `business-3.jpg`：地域の風景やお店、イベントの様子

**手順**

1. 差し替えたい写真を、上の表と同じファイル名（例：`hero.jpg`）で保存する
2. `assets/img/photos/` フォルダの中の同名ファイルを、その写真で上書きする
3. `index.html` をブラウザで開き直す（GitHub Pagesの場合はアップロードし直す）

写真のファイルサイズは、表示速度を保つため2MB程度までに圧縮することをおすすめします（スマートフォンの写真編集アプリや、無料の画像圧縮サイトで簡単に行えます）。

写真の説明文（目の不自由な方の読み上げに使われます）を変更したい場合は、
`content/content.js` の中の `photoAlt` という項目を、写真の内容に合わせて書き換えてください。

---

## 3. ロゴが完成したら追加する方法

現在ヘッダー左上には、ロゴマークを使わず「TALES ARC」という文字だけを配置しています
（創業間もないため、ロゴは今後プロに制作を依頼する予定です）。

ロゴが完成したら、次の1手順だけで、文字からロゴ画像に自動的に切り替わります。

1. 完成したロゴ画像を `logo.svg` という名前で保存する
2. `assets/images/` フォルダの中に、そのファイルを入れる

これだけで完了です。`index.html` や CSS を書き換える必要はありません
（サイトを開いたときに、ロゴファイルがあるかどうかを自動で確認し、あれば
ロゴ画像を、なければ「TALES ARC」の文字を表示する仕組みになっています）。

- ロゴは背景が透明のSVG形式をおすすめします（PNGでも構いません。その場合は `logo.png` ではなく、ファイル名を `logo.svg` に合わせて書き出すか、`assets/js/main.js`内の `setupBrandLogo` 関数にある `"assets/images/logo.svg"` の部分をファイル名に合わせて書き換えてください）
- 見た目の高さはヘッダーに合わせて自動的に22px程度へ縮小されます。横長・正方形どちらのロゴでも収まります

---

## 4. GitHubへ公開する（はじめての方向け・手順つき）

GitHub Pagesは、GitHubに保存したファイルをそのままホームページとして公開できる無料の仕組みです。
このサイトは、現在 **GitHub PagesのURL（`https://talesarc-jp.github.io/talesarc-site/`）** を前提に設定されています。

このフォルダは、すでに `git`（変更履歴を管理する仕組み）で管理できる状態（1回目の記録＝コミット済み）になっています。以下の手順どおりに進めれば、迷わず公開できます。

### 事前準備：GitHubアカウント

[github.com](https://github.com) にアクセスし、アカウントをお持ちでなければ作成してください（無料）。

### 手順A：ターミナルを使う方法（このREADMEの前提・おすすめ）

**① 空のリポジトリ（保管場所）をGitHub上に作る**

1. GitHubにログインした状態で、右上の「+」→「New repository」を開く
2. Repository name に `talesarc-site` と入力する（この名前にすると、サイト内のURL設定をそのまま使えます）
3. 「Add a README file」などのチェックはすべて**オフのまま**にする（このフォルダにすでに用意されているため）
4. 「Create repository」をクリックする
5. 作成後に表示される画面の中の `https://github.com/（あなたのアカウント名）/talesarc-site.git` という形のURL（HTTPS）をコピーしておく

**② パソコンの「ターミナル」アプリを開く**

Macの場合：Launchpad → 「その他」→「ターミナル」で開けます。

**③ このフォルダに移動する**

ターミナルに `cd ` （半角のシーディー＋半角スペース）と入力したあと、Finderでこの `talesarc-site` フォルダのアイコンをターミナルの画面にドラッグ＆ドロップすると、パスが自動で入力されます。そのままEnterキーを押してください。

**④ GitHubへ接続して送信（Push）する**

以下を1行ずつ、コピーして貼り付けて実行してください（②でコピーしたURLの部分は、実際のものに置き換えてください）。

```bash
git remote add origin https://github.com/（あなたのアカウント名）/talesarc-site.git
git branch -M main
git push -u origin main
```

初回はGitHubのユーザー名とパスワード（またはトークン）の入力を求められることがあります。パスワードでのログインが廃止されている場合は、GitHubの案内に沿って「Personal Access Token」を発行し、パスワード欄にそれを入力してください。

**⑤ GitHub Pagesを有効にする**

1. GitHub上のリポジトリページで「Settings」タブを開く
2. 左メニューの「Pages」を開く
3. 「Branch」を `main`、フォルダを `/ (root)` に設定して「Save」を押す
4. 数分待つと、`https://（あなたのアカウント名）.github.io/talesarc-site/` でサイトが公開されます

### 手順B：ターミナルを使いたくない方向け（GitHub Desktop）

コマンド操作に抵抗がある場合は、[GitHub Desktop](https://desktop.github.com/) という無料アプリを使うと、ボタン操作だけで同じことができます。インストール後、「Add local repository」からこの `talesarc-site` フォルダを選び、「Publish repository」ボタンを押すだけで手順A全体を代わりに行ってくれます。公開後は、上記「⑤ GitHub Pagesを有効にする」だけ手動で行ってください。

### 今後、内容を更新したとき

`content/content.js` などのファイルを編集したあとは、ターミナルで次の3行を実行すると、変更がサイトに反映されます（GitHub Desktopの場合は「Commit」→「Push origin」ボタン）。

```bash
git add .
git commit -m "文章を更新"
git push
```

反映まで数分かかることがあります。それでも変わらない場合は、`index.html` などの中にある `?v=1` の数字を1つ増やす（`?v=2` にする）と、キャッシュが更新されて反映されやすくなります。

---

## 5. 独自ドメイン（talesarc.com）に切り替える手順

将来、独自ドメイン（`talesarc.com`）を取得したときは、以下の手順で切り替えられます。

1. お使いのドメイン管理サービス（お名前.comなど）で、GitHub Pages向けのDNS設定を行う
   - Aレコード、またはCNAMEレコードをGitHubの案内に沿って設定します（詳細はGitHub公式ヘルプ「Managing a custom domain for your GitHub Pages site」を参照してください）
2. リポジトリ直下に `CNAME` という名前のファイル（拡張子なし）を作成し、中身に `talesarc.com` とだけ書いて保存する
3. GitHubの「Settings」→「Pages」画面で、独自ドメインが反映されていることを確認する
4. 反映まで数十分〜最大24時間ほどかかることがあります
5. 下記の「URLを直す場所」を、すべて `https://talesarc.com/` に書き換える

### URLを直す場所（GitHub Pages ⇔ 独自ドメイン 切り替え共通）

| ファイル | 書き換える箇所 |
| --- | --- |
| `index.html` | `<link rel="canonical" ...>`、`<meta property="og:url">`、`<meta property="og:image">`、`<meta name="twitter:image">`、末尾付近の構造化データ（`application/ld+json`）内の `url` と `logo` |
| `content/content.js` | `meta.url` |
| `robots.txt` | `Sitemap:` の行 |
| `sitemap.xml` | `<loc>` の中身 |
| `404.html` | 「トップページへ戻る」ボタンの `href="/talesarc-site/"` の部分。独自ドメインに切り替えたときは `href="/"` に書き換えてください |

すべて `https://talesarc-jp.github.io/talesarc-site/` の部分を探して、新しいURL（例：`https://talesarc.com/`）に置き換えれば完了です。

---

## 6. Google検索への登録準備

サイトを公開しただけでは、Googleにはまだ知られていません。以下の3ステップで、Google検索に登録・認識してもらう準備ができます（すべて無料です）。

### ① Google Search Consoleにサイトを登録する

1. [Google Search Console](https://search.google.com/search-console) を開き、Googleアカウントでログインする
2. 「プロパティを追加」→「URLプレフィックス」を選び、`https://talesarc-jp.github.io/talesarc-site/`（独自ドメインに切り替え済みの場合は `https://talesarc.com/`）を入力する
3. 所有権の確認方法として「HTMLタグ」を選ぶと、`<meta name="google-site-verification" content="...">` という1行が表示されます
4. その1行を `index.html` の `<head>` タグの中（他の `<meta>` タグが並んでいる場所）に追加して保存し、GitHubへPushする
5. Search Consoleの画面に戻り「確認」ボタンを押す

### ② サイトマップを送信する

1. Search Consoleの左メニューから「サイトマップ」を開く
2. 入力欄に `sitemap.xml` とだけ入力して「送信」を押す（このファイルはすでに用意されています）

### ③ 個別ページのインデックス登録をリクエストする

1. Search Consoleの上部にある検索窓に、公開したサイトのURL（例：`https://talesarc-jp.github.io/talesarc-site/`）を貼り付けて検索する
2. 「インデックス登録をリクエスト」ボタンを押す
3. 数分〜数日でGoogleがサイトを確認し、検索結果に表示されるようになります（すぐには反映されないことがあります）

独自ドメインに切り替えた場合は、Search Console上に新しいプロパティ（`https://talesarc.com/`）を追加登録し、①〜③を改めて行ってください。

---

## 7. その他の仕様

- **ダークモード**：閲覧している方の端末設定（ライトモード／ダークモード）に自動で合わせて表示が切り替わります。画面右上のボタンでも手動で切り替えができ、選択した状態はブラウザに記憶されます。
- **スマートフォン表示**：画面幅が狭いときは、右上に三本線のメニューボタンが表示され、タップするとメニューが開きます。
- **お問い合わせ**：フォームは使わず、ボタンを押すとメールソフトが開き、`info@talesarc.com` 宛てにメールを送れる仕組みです。
- **Privacy Policy**：フッターにリンクがありますが、[`privacy.html`](privacy.html) の中身は「準備中」の仮ページです。内容が決まり次第、差し替えてください。

---

## 8. お問い合わせ

このサイト自体についてのご質問は、制作を依頼した担当者にご確認ください。
