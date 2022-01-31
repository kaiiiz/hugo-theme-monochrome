---
title: 'Theme Settings'
weight: 2
bookcase_cover_src: 'cover/catalogue.png'
bookcase_cover_src_dark: 'cover/catalogue_dark.png'
changelogs:
- tag: 'v0.8.0'
  description:
  - 'Add `enableCollapsibleTOC` and `enableCollapsibleChangelogs` properties'
---

# Theme Configuration

These values are inside your toml config file.

## Navbar title

HTML is available.

```toml
[params]
navbarTitle = "Monochrome"
```

> default: site's [`title`](/hugo-theme-monochrome/configuration/site#site-title)

## Footer

HTML is available.

```toml
[params]
footer = "Copyright © 2021 by kaiiiz"
```

> default: footer section will not be rendered.

## Table of Contents

```toml
[params]
enableTOC = false
```

> default: true

## Collapsible Menu

To enable the collapsible TOC globally, add:

```toml
[params]
enableCollapsibleTOC = true
```

> default: false

To enable the collapsible changelogs globally, add:

```toml
[params]
enableCollapsibleChangelogs = true
```

> default: false

## Navbar menu

Monochrome uses built-in menu system supported by hugo itself. (Checkout [document](https://gohugo.io/content-management/menus) for more deatil.) By default, the menu called `navbar` is used to decide which item need to be rendered on the navbar.

So you can simply add the following code to your page front-matter, and the menu info will be handled by hugo out of the box. ([simple method mentioned in document](https://gohugo.io/content-management/menus#simple))

```yaml
---
menu: navbar
---
```

Also, weighted value is supported out of the box, you can explicit assign the weight of the navbar entry, hugo will first sort the menu using weight, if there has two entries shared the same weight, the [default order](https://gohugo.io/templates/lists/#order-content) will be applied.

```yaml
---
menu:
  navbar:
    weight: -99
---
```

### Navbar settings in config
If you try to put entry that aren't attached to a piece of content, or you want to organize your navbar into a single file, checkout [Add Non-content Entries to a Menu](https://gohugo.io/content-management/menus#add-non-content-entries-to-a-menu) or [Configuration file of demo site](https://github.com/kaiiiz/hugo-theme-monochrome/tree/main/exampleSite/config/_default/menus) and set these values in your toml settings file.

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

Use `$` to create inline result, `$$` to create block result.

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

### Using Chroma (server-side)

See [Syntax Highlighting](https://gohugo.io/content-management/syntax-highlighting) for more details.

```toml
[params]
enableCodeCopy = false
```

> default: true

### Using Prism.js (client-side)

Disable markup highlight feature

```toml
[markup.highlight]
codeFences = false
lineNos = false
```

Enable Prism.js

```toml
[params]
usePrismJS = true
```

> default: false

Enable line numbers feature

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

> default: not generate author `meta` tag


### Open Graph

A flag to render open graph internal template. See [Open Graph](https://gohugo.io/templates/internal#open-graph) for additional settings.

```toml
[params]
enableOpenGraph = false
```

> default: true

### Twitter Cards

A flag to render open twitter cards template. See [Twitter Cards](https://gohugo.io/templates/internal#twitter-cards) for additional settings.

```toml
[params]
enableTwitterCards = false
```

> default: true
