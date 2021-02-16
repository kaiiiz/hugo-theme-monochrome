---
title: '頁面設定'
weight: 3
bookcase_cover_src: 'cover/catalogue.png'
bookcase_cover_src_dark: 'cover/catalogue_dark.png'
---

# 頁面設定

這些設定存在在 page 的 front-matter 中。

## Layout

Graytr 內建多種不同版型。你可以根據你的需求來改變 section 或 page 的樣式，更多資訊可以查看 [Layout](/hugo-theme-graytr/zh-tw/layouts)。

## Navbar title

支援 HTML

```yaml
---
navbar_title: "Graytr"
---
```

> default: theme's [`navbarTitle`](/hugo-theme-graytr/zh-tw/configuration/theme#navbar-title)

## Footer

支援 HTML

```yaml
---
footer: "Copyright © 2021 by kaiiiz"
---
```

> default: theme's [`footer`](/hugo-theme-graytr/zh-tw/configuration/theme/#footer)

## Table of Contents

```yaml
---
toc: false
---
```

> default: theme's [`enableTOC`](/hugo-theme-graytr/zh-tw/configuration/theme/#table-of-contents)

## External library

### MathJax

```yaml
---
math: false
---
```

> default: theme's [`enableMathJax`](/hugo-theme-graytr/zh-tw/configuration/theme/#mathjax)

### Zooming.js

```yaml
---
zooming_js: false
---
```

> default: theme's [`enableZoomingJS`](/hugo-theme-graytr/zh-tw/configuration/theme/#zoomingjs)

### Disqus

```yaml
---
disqus: false
---
```

> default: site's [`disqusShortname`](/hugo-theme-graytr/zh-tw/configuration/site/#disqus)

### Google Analytics

```yaml
---
ga: false
---
```

> default: site's [`googleAnalytics`](/hugo-theme-graytr/zh-tw/configuration/site/#google-analytics)

## Syntax Highlighting

### Chroma

```yaml
---
code_copy: false
---
```

> default: theme's [`enableCodeCopy`](/hugo-theme-graytr/zh-tw/configuration/theme/#using-chroma-hugo-built-in)

### Prism.js

```yaml
---
prism_lineno: false
---
```

> default: theme's [`enablePrismJSLineNo`](/hugo-theme-graytr/zh-tw/configuration/theme/#using-prismjs)

## SEO

### Author

```yaml
---
author: "kaiiiz"
---
```

> default: theme's [`author`](/hugo-theme-graytr/zh-tw/configuration/theme/#author)

### Description

```yaml
---
description: "Configuration of hugo-theme-graytr"
---
```

> default: description 的 `meta` tag 將不會被生成

### Keywords

```yaml
---
keywords:
- hugo
- hugo theme
- hugo theme graytr
---
```

> default: keywords 的 `meta` tag 將不會被生成


### Open Graph

一個是否渲染 open graph template 的開關，Open Graph 的設定請查看 [Open Graph](https://gohugo.io/templates/internal#open-graph)。

```yaml
---
open_graph: false
---
```

> default: theme's [`enableOpenGraph`](/hugo-theme-graytr/zh-tw/configuration/theme/#open-graph)

### Twitter Cards

一個是否渲染 twitter cards template 的開關，Twitter Cards 的設定請查看 [Twitter Cards](https://gohugo.io/templates/internal#twitter-cards)。

```yaml
---
twitter_cards: false
---
```

> default: theme's [`enableTwitterCards`](/hugo-theme-graytr/zh-tw/configuration/theme/#twitter-cards)
