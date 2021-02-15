---
title: 'Page Settings'
weight: 3
bookcase_cover_src: 'cover/catalogue.png'
bookcase_cover_src_dark: 'cover/catalogue_dark.png'
---

# Page Settings

These values are inside your page's front-matter.

## Layout

Graytr support different types of layout. You can change the layout of section or regular page according to your needs. Checkout [Layout](/hugo-theme-graytr/layouts) for more details.

## Navbar title

HTML is available.

```yaml
---
navbar_title: "Graytr"
---
```

> default: theme's [`navbarTitle`](/hugo-theme-graytr/configuration/theme#navbar-title)

## Footer

HTML is available.

```yaml
---
footer: "Copyright © 2021 by kaiiiz"
---
```

> default: theme's [`footer`](/hugo-theme-graytr/configuration/theme/#footer)

## Table of Contents

```yaml
---
toc: false
---
```

> default: theme's [`enableTOC`](/hugo-theme-graytr/configuration/theme/#table-of-contents)

## External library

### Zooming.js

```yaml
---
zooming_js: false
---
```

> default: theme's [`enableZoomingJS`](/hugo-theme-graytr/configuration/theme/#zoomingjs)

### Disqus

```yaml
---
disqus: false
---
```

> default: site's [`disqusShortname`](/hugo-theme-graytr/configuration/site/#disqus)

### Google Analytics

```yaml
---
ga: false
---
```

> default: site's [`googleAnalytics`](/hugo-theme-graytr/configuration/site/#google-analytics)

## Syntax Highlighting

### Chroma

```yaml
---
code_copy: false
---
```

> default: theme's [`enableCodeCopy`](/hugo-theme-graytr/configuration/theme/#using-chroma-hugo-built-in)

### Prism.js

```yaml
---
prism_lineno: false
---
```

> default: theme's [`enablePrismJSLineNo`](/hugo-theme-graytr/configuration/theme/#using-prismjs)

## SEO

### Author

```yaml
---
author: "kaiiiz"
---
```

> default: theme's [`author`](/hugo-theme-graytr/configuration/theme/#author)

### Description

```yaml
---
description: "Configuration of hugo-theme-graytr"
---
```

> default: not generate description `meta` tag

### Keywords

In page front-matter

```yaml
---
keywords:
- hugo
- hugo theme
- hugo theme graytr
---
```

> default: not generate keywords `meta` tag


### Open Graph

A flag to render open graph internal template. See [Open Graph](https://gohugo.io/templates/internal#open-graph) for additional settings.

```yaml
---
open_graph: false
---
```

> default: theme's [`enableOpenGraph`](/hugo-theme-graytr/configuration/theme/#open-graph)

### Twitter Cards

A flag to render open twitter cards template. See [Twitter Cards](https://gohugo.io/templates/internal#twitter-cards) for additional settings.

```yaml
---
twitter_cards: false
---
```

> default: theme's [`enableTwitterCards`](/hugo-theme-graytr/configuration/theme/#twitter-cards)
