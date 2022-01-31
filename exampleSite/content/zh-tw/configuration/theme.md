---
title: '主題設定'
weight: 2
bookcase_cover_src: 'cover/catalogue.png'
bookcase_cover_src_dark: 'cover/catalogue_dark.png'
changelogs:
- tag: 'v0.8.0'
  description:
  - '新增 `enableCollapsibleTOC` 及 `enableCollapsibleChangelogs` 屬性'
---

# 主題設定

這些設定是在網站的 toml 設定檔裡面

## Navbar title

支援 HTML

```toml
[params]
navbarTitle = "Monochrome"
```

> default: site's [`title`](/hugo-theme-monochrome/zh-tw/configuration/site#site-title)

## Footer

支援 HTML

```toml
[params]
footer = "Copyright © 2021 by kaiiiz"
```

> default: footer 不會被渲染

## Table of Contents

```toml
[params]
enableTOC = false
```

> default: true

## Collapsible Menu

若要全局開啟支援折疊的 TOC:

```toml
[params]
enableCollapsibleTOC = true
```

> default: false

若要全局開啟支援折疊的 Changelogs:

```toml
[params]
enableCollapsibleChangelogs = true
```

> default: false

## Navbar menu

Monochrome 使用 hugo 內建的 menu 系統，參考 [官方文件](https://gohugo.io/content-management/menus)。預設 `navbar` 這個 menu 會被拿來渲染到頂部。

最簡單的 menu 使用模式是透過將以下設定加到某個頁面中的 front-matter，hugo 即會將該頁面加入 navbar 這個 menu 中。([simple method mentioned in document](https://gohugo.io/content-management/menus#simple))

```yaml
---
menu: navbar
---
```

預設 hugo 支援權重，可以明確指定權重來調整在 navbar 中的順序，如果有兩個權重相同的頁面，將會套用[預設排序](https://gohugo.io/templates/lists/#order-content)。

```yaml
---
menu:
  navbar:
    weight: -99
---
```

### 使用 config file 設定 navbar

如果不想使用 front-matter 的方式控制 navbar，可以使用 config file 來設定。請參考 [Add Non-content Entries to a Menu](https://gohugo.io/content-management/menus#add-non-content-entries-to-a-menu)，你也可以參考[這個網站的目錄設定](https://github.com/kaiiiz/hugo-theme-monochrome/tree/main/exampleSite/config/_default/menus)。

```toml
[[menu.navbar]]
identifier = "about"
name = "about"
title = "about"
url = "/about/"
weight = 100

[[menu.navbar]]
identifier = "series"
name = "series"
url = "/series/"
weight = -100

[[menu.navbar]]
identifier = "categories"
name = "categories"
url = "/categories/"
weight = 80
```

```yaml
menu:
  navbar:
  - identifier: about
    name: about
    title: about
    url: /about/
    weight: 100
  - identifier: series
    name: series
    url: /series/
    weight: -100
  - identifier: categories
    name: categories
    url: /categories/
    weight: 80
```

## External Library

### MathJax

使用 `$` 渲染 inline 的結果, `$$` 渲染 block 的結果

```toml
[params]
enableMathJax = true
```

> default: false

### Zooming.js

```toml
[params]
enableZoomingJS = false
```

> default: true

### Site Search

```toml
[params]
enableSiteSearch = true
```

> default: false

## Syntax Highlighting

### Chroma (server-side)

參考 [Syntax Highlighting](https://gohugo.io/content-management/syntax-highlighting) 來做設定。Monochrome 還提供複製程式碼的功能。

```toml
[params]
enableCodeCopy = false
```

> default: true

### Prism.js (client-side)

關閉 markup highlight

```toml
[markup.highlight]
codeFences = false
lineNos = false
```

啟用 Prism.js

```toml
[params]
usePrismJS = true
```

> default: false

啟用行數功能

```toml
[params]
enablePrismJSLineNo = true
```

> default: true

## SEO

### Author

```toml
[params]
author = "kaiiiz"
```

> default: author 的 `meta` tag 將不會被生成


### Open Graph

一個是否渲染 open graph template 的開關，Open Graph 的設定請查看 [Open Graph](https://gohugo.io/templates/internal#open-graph)。

```toml
[params]
enableOpenGraph = false
```

> default: true

### Twitter Cards

一個是否渲染 twitter cards template 的開關，Twitter Cards 的設定請查看 [Twitter Cards](https://gohugo.io/templates/internal#twitter-cards)。

```toml
[params]
enableTwitterCards = false
```

> default: true
