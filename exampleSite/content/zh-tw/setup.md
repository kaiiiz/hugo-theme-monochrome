---
title: '建置'
---

這份文件將指引你如何使用 hugo-theme-monochrome 在你的 hugo 專案中。

## 建置

### 安裝

你需要 "extended" 版本的 Hugo 來得到 SASS 的支援。參考 [Install Hugo](https://gohugo.io/getting-started/installing/) 來得到更多資訊。

以 Linux 為例:

```bash
snap install hugo --channel=extended
```

> hugo 的版本必須為 `0.80.0` 以上

### 建立專案

```bash
hugo new site <project name>
```

### 添加主題

```bash
cd <project name>
git init
git submodule add https://github.com/kaiiiz/hugo-theme-monochrome.git themes/hugo-theme-monochrome
```

將 `theme = "hugo-theme-monochrome"` 加到 `config.toml`

### 安裝依賴

準備專案的 package.json

```bash
hugo mod npm pack
```

安裝

```bash
npm install
```

> 記得將 `node_modules` 設定在 `.gitignore` 中

### 配置 PostCSS

hugo-theme-monochrome 是透過 [tailwindcss](https://tailwindcss.com/) 這套框架實作的。你應該添加以下的設定在你的 `config.toml` 來達到更好的 CSS Purging 效果，如果這個選項沒有被指定，exampleSite 中的設定將會被使用。

參考 [CSS purging with PostCSS](https://gohugo.io/hugo-pipes/postprocess/#css-purging-with-postcss) 來得到更多資訊。

```toml
[build]
  writeStats = true
```

### 設定主題

參考 [Configuration](/hugo-theme-monochrome/configuration/)

### 開啟 Server

```bash
hugo server
```

最小化 CSS 與 JS 資源，PurgeCSS 也會被啟用。在這裡的 JavaScript minifier 是透過 [ESBuild](https://github.com/evanw/esbuild) 實現。

```bash
hugo server --environment production
```

### 生成靜態頁面

生成靜態頁面到 `/public` 目錄，`--minify` 參數可以最小化其他資源（HTML/XML/JSON...等）。

參考 [Configure Minify](https://gohugo.io/getting-started/configuration/#configure-minify) 來調整 minifier 的行為 (在這裡的 minifier 是透過 [minify](https://github.com/tdewolff/minify) 實現)。

```bash
hugo --environment production --minify
```

### 部署

將 `/public` 目錄推送到你的伺服器，這個演示網站是透過 Github Action 及 Github Pages 建置。CI 腳本可以參考 [github](https://github.com/kaiiiz/hugo-theme-monochrome/blob/main/.github/workflows/gh-pages.yml)。

## 演示網站

```bash
git clone https://github.com/kaiiiz/hugo-theme-monochrome
cd hugo-theme-monochrome/exampleSite
hugo --themesDir=../.. mod npm pack
npm install
hugo --themesDir=../.. server
```
