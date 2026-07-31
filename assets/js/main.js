(function () {
  "use strict";

  /* ---------- ユーティリティ：content.js の値を安全に取得 ---------- */
  function getValue(obj, path) {
    return path.split(".").reduce(function (acc, key) {
      return acc && acc[key] !== undefined ? acc[key] : undefined;
    }, obj);
  }

  /* ---------- ユーティリティ：改行(\n)を <br> として反映するテキスト設定 ---------- */
  function setText(el, value) {
    if (value.indexOf("\n") === -1) {
      el.textContent = value;
      return;
    }
    el.textContent = "";
    value.split("\n").forEach(function (line, i) {
      if (i > 0) el.appendChild(document.createElement("br"));
      el.appendChild(document.createTextNode(line));
    });
  }

  /* ---------- content.js の内容をHTMLへ反映 ---------- */
  function applyContent() {
    if (typeof SITE_CONTENT === "undefined") return;

    // meta情報（タイトル・description）
    if (SITE_CONTENT.meta) {
      if (SITE_CONTENT.meta.title) document.title = SITE_CONTENT.meta.title;
      var desc = document.querySelector('meta[name="description"]');
      if (desc && SITE_CONTENT.meta.description) {
        desc.setAttribute("content", SITE_CONTENT.meta.description);
      }
    }

    // 単一テキスト（data-key）
    document.querySelectorAll("[data-key]").forEach(function (el) {
      var value = getValue(SITE_CONTENT, el.getAttribute("data-key"));
      if (typeof value === "string") {
        setText(el, value);
      }
    });

    // 段落リスト（philosophy.paragraphs のような文字列配列）
    document.querySelectorAll("[data-key-list]").forEach(function (container) {
      var path = container.getAttribute("data-key-list");
      var list = getValue(SITE_CONTENT, path);
      if (!Array.isArray(list)) return;

      if (path === "philosophy.paragraphs") {
        var existingP = container.querySelectorAll("p");
        list.forEach(function (text, i) {
          if (existingP[i]) existingP[i].textContent = text;
        });
        return;
      }

      // オブジェクト配列（business.items / company.rows）
      var itemEls = container.querySelectorAll(":scope > li, :scope > tbody > tr");
      list.forEach(function (item, i) {
        var itemEl = itemEls[i];
        if (!itemEl) return;
        Object.keys(item).forEach(function (field) {
          var fieldEl = itemEl.querySelector('[data-field="' + field + '"]');
          if (!fieldEl) return;
          if (fieldEl.tagName === "IMG") {
            fieldEl.setAttribute("alt", item[field]);
          } else {
            fieldEl.textContent = item[field];
          }
        });
      });
    });

    // メールボタン・住所
    if (SITE_CONTENT.contact && SITE_CONTENT.contact.email) {
      var mailButton = document.getElementById("mailButton");
      var mailAddress = document.getElementById("mailAddress");
      var email = SITE_CONTENT.contact.email;
      if (mailButton) mailButton.setAttribute("href", "mailto:" + email);
      if (mailAddress) mailAddress.textContent = email;
    }
  }

  /* ---------- ダークモード切り替え ---------- */
  function setupThemeToggle() {
    var toggle = document.getElementById("themeToggle");
    if (!toggle) return;

    toggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      var isDark = current ? current === "dark" : prefersDark;
      var next = isDark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("ta-theme", next);
    });
  }

  /* ---------- ヘッダーの背景切り替え ---------- */
  function setupHeaderScroll() {
    var header = document.getElementById("siteHeader");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- モバイルメニューの開閉 ---------- */
  function setupMobileMenu() {
    var toggle = document.getElementById("navToggle");
    var menu = document.getElementById("mobileMenu");
    if (!toggle || !menu) return;

    function closeMenu() {
      menu.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "メニューを開く");
      document.body.classList.remove("menu-open");
    }

    function openMenu() {
      menu.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "メニューを閉じる");
      document.body.classList.add("menu-open");
    }

    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    menu.querySelectorAll("a").forEach(function (link) {
      // 同じクリックの中でメニューを隠すとリンク先へのジャンプが
      // ブラウザにキャンセルされることがあるため、少し遅らせて閉じる
      link.addEventListener("click", function () {
        window.setTimeout(closeMenu, 0);
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---------- ロゴが用意されていれば自動的に文字から切り替える ----------
     assets/images/logo.svg が存在しない間は、ヘッダーは文字だけの
     ワードマーク（Tales Arc）を表示します。将来このファイルを追加すると、
     コードを変更しなくても自動的にロゴ画像へ切り替わります。 */
  function setupBrandLogo() {
    var img = document.querySelector(".brand-logo");
    var text = document.querySelector(".brand-wordmark");
    if (!img || !text) return;

    var probe = new Image();
    probe.onload = function () {
      img.src = "assets/images/logo.svg";
      img.hidden = false;
      text.hidden = true;
    };
    probe.src = "assets/images/logo.svg";
  }

  /* ---------- スクロールで要素をふわっと表示 ---------- */
  function setupReveal() {
    var targets = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || targets.length === 0) {
      targets.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    targets.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- フッターの年 ---------- */
  function setupFooterYear() {
    var el = document.getElementById("footerYear");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyContent();
    setupThemeToggle();
    setupHeaderScroll();
    setupMobileMenu();
    setupBrandLogo();
    setupReveal();
    setupFooterYear();
  });
})();
