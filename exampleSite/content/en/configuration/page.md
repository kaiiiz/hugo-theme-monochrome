---
title: 'Page Settings'
weight: 3
bookcase_cover_src: 'cover/catalogue.png'
bookcase_cover_src_dark: 'cover/catalogue_dark.png'
changelogs:
- tag: 'v0.9.0'
  description:
  - 'Rename `collapsibleTOC` to `collapsible_toc` for consistency'
  - 'Rename `collapsibleChangelogs` to `collapsible_changelogs` for consistency'
- tag: 'v0.8.0'
  description:
  - 'Add `collapsibleTOC` and `collapsibleChangelogs` properties'
- tag: 'v0.7.0'
  description:
  - 'Add `changelogs` property'
  - "Update `disqus` fallback policy for none post pages"
---

# Page Settings

These values are inside your page's front-matter.

## Layout

Monochrome support different types of layout. You can change the layout of section or regular page according to your needs. Checkout [Layout](/hugo-theme-monochrome/layouts) for more details.

## Navbar title

HTML is available.

```yaml
---
navbar_title: "Monochrome"
---
```

> default: theme's [`navbarTitle`](/hugo-theme-monochrome/configuration/theme#navbar-title)

## Footer

HTML is available.

```yaml
---
footer: "Copyright © 2021 by kaiiiz"
---
```

> default: theme's [`footer`](/hugo-theme-monochrome/configuration/theme/#footer)

## Table of Contents

```yaml
---
toc: false
---
```

> default: theme's [`enableTOC`](/hugo-theme-monochrome/configuration/theme/#table-of-contents)

### Collapsible Table of Contents

```yaml
---
collapsible_toc: false
---
```

> default: theme's [`enableCollapsibleTOC`](/hugo-theme-monochrome/configuration/theme/#collapsible-menu)

## Changelogs

```yaml
---
changelogs:
- tag: '20210623'
  description:
  - 'changelog example 1'
  - 'changelog example 2'
- tag: '20210624'
  description:
  - 'changelog example 3'
  - 'changelog example 4'
---
```

tag and description both support markdown syntax.

> default: None

### Collapsible Changelogs

```yaml
---
collapsible_changelogs: false
---
```

> default: theme's [`enableCollapsibleChangelogs`](/hugo-theme-monochrome/configuration/theme/#collapsible-menu)

## External library

### MathJax

```yaml
---
math: false
---
```

> default: theme's [`enableMathJax`](/hugo-theme-monochrome/configuration/theme/#mathjax)

### Zooming.js

```yaml
---
zooming_js: false
---
```

> default: theme's [`enableZoomingJS`](/hugo-theme-monochrome/configuration/theme/#zoomingjs)

### Disqus

```yaml
---
disqus: false
---
```

> default for post page: site's [`disqusShortname`](/hugo-theme-monochrome/zh-tw/configuration/site/#disqus)
> 
> default for other pages: false

### Google Analytics

```yaml
---
ga: false
---
```

> default: site's [`googleAnalytics`](/hugo-theme-monochrome/configuration/site/#google-analytics)

## Syntax Highlighting

### Chroma

```yaml
---
code_copy: false
---
```

> default: theme's [`enableCodeCopy`](/hugo-theme-monochrome/configuration/theme/#using-chroma-hugo-built-in)

### Prism.js

```yaml
---
prism_lineno: false
---
```

> default: theme's [`enablePrismJSLineNo`](/hugo-theme-monochrome/configuration/theme/#using-prismjs)

## SEO

### Author

```yaml
---
author: "kaiiiz"
---
```

> default: theme's [`author`](/hugo-theme-monochrome/configuration/theme/#author)

### Description

```yaml
---
description: "Configuration of hugo-theme-monochrome"
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
- hugo theme monochrome
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

> default: theme's [`enableOpenGraph`](/hugo-theme-monochrome/configuration/theme/#open-graph)

### Twitter Cards

A flag to render open twitter cards template. See [Twitter Cards](https://gohugo.io/templates/internal#twitter-cards) for additional settings.

```yaml
---
twitter_cards: false
---
```

> default: theme's [`enableTwitterCards`](/hugo-theme-monochrome/configuration/theme/#twitter-cards)
