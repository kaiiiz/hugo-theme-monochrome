---
title: 'Configuration'
toc: true
author: kaiiiz
description: Configuration of hugo-theme-graytr
keywords:
- hugo
- hugo theme
- hugo theme graytr
---

This document shows some customizable values that are used in this theme. By adjusting these values, you can easily change the appearance of your website without touching the source code.

## Site settings

These settings are important for building a website using hugo. You can get more information in [All Configuration Settings](https://gohugo.io/getting-started/configuration/#all-configuration-settings).

### Site title

In your config.toml

```toml
title = "Graytr"
```

> Site title. This value will become the content of `<title>` tag in html.

### Theme

In your config.toml

```toml
theme = "hugo-theme-graytr"
```

> Set this value to the corresponding folder name of your theme. (located by default in /themes/THEMENAME/)

### Base URL

In your config.toml

```toml
baseURL = "https://kaiiiz.github.io/hugo-theme-graytr"
```

> Hostname (and path) to the root.

### favicon

Simply add `favicon.ico` to your site's static folder.

## Theme Settings

### Navbar mode

```toml
[params]
navbarMode = "blog"
```

### Navbar title

In your config.toml

```toml
[params]
navbarTitle = "Graytr"
```

> default: [`title` value in config.toml](#site-title)

### Footer

In your config.toml. HTML is available.

```toml
[params]
footer = "Copyright © 2021 by kaiiiz"
```

> default: footer section will not be rendered.

### Navbar menu

Graytr uses built-in menu system supported by hugo itself. (Checkout [document](https://gohugo.io/content-management/menus) for more deatil.) By default, the menu called `navbar` is used to decide which item need to be rendered on the navbar.

So you can simply add the following code to your page front-matter, and the menu info will be handled by hugo out of the box. ([simple method mentioned in document](https://gohugo.io/content-management/menus#simple))

```yaml
---
menu: navbar
---
```

Also, weighted value is supported out of the box, you can explicit assign the weight of the navbar entry, hugo will first sort the menu using weight, if there has two entries shared the same weight, the alphabetical order will be applied.

```yaml
---
menu:
  navbar:
    weight: -99
---
```

If you try to put entry that aren't attached to a piece of content, checkout [Add Non-content Entries to a Menu](https://gohugo.io/content-management/menus#add-non-content-entries-to-a-menu) for more detail.

### Disqus

In your config.toml

```toml
disqusShortname = "xxx"
```

Other settings checkout [Disqus - Internal Templates](https://gohugo.io/templates/internal/#disqus) for more details.

### Google Analytics

In your config.toml

```toml
googleAnalytics = "xxx"
```

### Syntax Highlighting

#### Using Chroma (Hugo built-in)

See [Syntax Highlighting](https://gohugo.io/content-management/syntax-highlighting) for more details.

Copy button is enabled by default, you can disable it by setting:

```toml
[params]
copyBtn = false
```

#### Using Prism.js

Disable markup highlight features

```toml
[markup.highlight]
codeFences = false
lineNos = false
```

Enable Prism.js

```toml
[params]
usePrism = true
```

## Page Settings

### Layout

Graytr support many different types of layout. You can change the layout of section or regular page according to your needs. Checkout [Layout](/hugo-theme-graytr/layouts) for more detail.

### Table of Contents

In page front-matter

```yaml
---
toc: false
---
```

> This setting will only be used in regular page or catalog layout.

> default: true

### Metadata

These configurations may effect the result of SEO.

#### Author

In page front-matter

```yaml
---
author: "kaiiiz"
---
```

> default: no author metadata

#### Description

In page front-matter

```yaml
---
description: "Configuration of hugo-theme-graytr"
---
```

> default: no description metadata

#### Keywords

In page front-matter

```yaml
---
keywords:
- hugo
- hugo theme
- hugo theme graytr
---
```

> default: no keywords metadata

### Zooming.js

In page front-matter

```yaml
---
zooming_js: false
---
```

> default: true

### Disqus

In page front-matter

```yaml
---
disqus: true
---
```

> default: false

### Google Analytics

In page front-matter

```yaml
---
google_analytics: false
---
```

> default: true
