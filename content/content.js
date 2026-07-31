/**
 * Tales Arc コーポレートサイト 掲載文章データ
 *
 * ここに書かれている「" "（ダブルクォーテーション）」で囲まれた日本語の文章だけを
 * 書き換えれば、サイトの内容を更新できます。
 * タグや { } [ ] , などの記号は消さないように注意してください。
 *
 * 更新後は index.html をブラウザで開く（またはGitHub Pagesを再読み込みする）と
 * 反映を確認できます。
 */
const SITE_CONTENT = {
  // サイト全体の基本情報（タイトルやSNS共有時の説明文など）
  meta: {
    siteName: "株式会社Tales Arc",
    title: "株式会社Tales Arc｜人と人、想いと未来をつなぐ。",
    description:
      "株式会社Tales Arcは、人や地域、事業が持つ物語や魅力を見つけ、必要としている人へ届ける会社です。SNS・コンテンツ支援、食・体験づくり、地域メディア・地域プロデュースを通じて、人と人との物語の架け橋になります。",
    // 現在はGitHub PagesのURLです。独自ドメインに切り替えたときはREADME.mdの手順に沿って書き換えてください
    // （index.html内のOGP設定・robots.txt・sitemap.xmlも合わせて変更が必要です）
    url: "https://talesarc-jp.github.io/talesarc-site/",
  },

  // Hero（最初に表示される部分）
  // catch内の \n は改行位置です。見出しの行の分かれ方を変えたいときに調整してください。
  hero: {
    catch: "人と人、\n想いと未来をつなぐ。",
    lead:
      "株式会社Tales Arcは、人や地域、事業が持つ物語や魅力を見つけ、必要としている人へ届ける会社です。",
  },

  // Philosophy（会社の理念）
  philosophy: {
    label: "Philosophy",
    heading: "物語と、架け橋。",
    paragraphs: [
      "どんな人にも、どんな場所にも、どんな仕事にも、まだ言葉になっていない物語があります。",
      "小さなお店の一皿に込められた想い。地域に受け継がれてきた景色。誰かが積み重ねてきた時間。それらは、気づかれないまま静かに眠っていることがほとんどです。",
      "私たちの社名「Tales Arc」は、Tales（物語）と Arc（弧・架け橋）という二つの言葉からできています。物語を見つけ、それを必要としている誰かのもとへ届けるための橋を架ける。それが、私たちの仕事だと考えています。",
      "SNSも、食も、地域も、私たちにとっては別々の事業ではありません。すべては「物語を見つけ、届ける」という一つの理念でつながっています。",
      "私たちは、物語と物語のあいだに立ち、静かに橋を架け続ける会社でありたいと思っています。",
    ],
  },

  // Business（事業紹介）
  business: {
    label: "Business",
    heading: "3つの事業、ひとつの理念。",
    lead:
      "事業の形はそれぞれ違っても、目指している場所は同じです。人や地域が持つ物語を見つけ、必要としている人へ届けること。",
    // photoAlt は各写真の説明文です。assets/img/photos/business-1.jpg 〜 business-3.jpg を
    // 差し替えたら、写真の内容に合わせて書き換えてください。
    items: [
      {
        title: "SNS・コンテンツ支援",
        description:
          "Instagramを中心としたSNS運用支援、コンテンツ制作、ブランディング支援を行っています。伝えたい想いを、届くかたちに変えていくお手伝いをします。",
        photoAlt: "スマートフォンでSNS投稿を作成している様子",
      },
      {
        title: "食・体験づくり",
        description:
          "オンラインお菓子教室、イベント、レシピ制作、動画制作など、食を通して学びや楽しさ、人とのつながりを生み出す活動を行っています。",
        photoAlt: "お菓子づくりの様子",
      },
      {
        title: "地域メディア・地域プロデュース",
        description:
          "地域の人・お店・文化・イベントを発信し、新しい出会いや地域とのつながりを生み出す活動を行っています。",
        photoAlt: "地域の街並みの風景",
      },
    ],
  },

  // Company（会社概要）
  company: {
    label: "Company",
    heading: "会社概要",
    rows: [
      { term: "会社名", detail: "株式会社Tales Arc" },
      {
        term: "所在地",
        detail: "〒110-0005　東京都台東区上野一丁目17番6号",
      },
      { term: "活動拠点", detail: "埼玉県さいたま市岩槻区を中心に活動しています。" },
      { term: "メールアドレス", detail: "info@talesarc.com" },
      {
        term: "事業内容",
        detail: "SNS・コンテンツ支援 ／ 食・体験づくり ／ 地域メディア・地域プロデュース",
      },
    ],
  },

  // Contact（お問い合わせ）
  contact: {
    label: "Contact",
    heading: "お問い合わせ",
    lead: "ご質問・ご相談は、メールにて承っております。下のボタンからお気軽にご連絡ください。",
    email: "info@talesarc.com",
    buttonLabel: "メールを送る",
  },

  // フッター
  footer: {
    copyright: "Tales Arc Inc. All Rights Reserved.",
    privacyLabel: "Privacy Policy",
  },
};
