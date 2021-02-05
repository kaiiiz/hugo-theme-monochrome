---
title: 'Configuration'
menu:
  navbar:
    weight: -99
toc: true
author: kaiiiz
description: Configuration of hugo-theme-artisan
keywords:
- hugo
- hugo theme
- hugo theme artisan
---

This document shows some customizable values that are used in this theme. By adjusting these values, you can easily change the appearance of your website without touching the source code.

## Basic settings

This section shows some basic settings that are important for building a website using hugo. You can get more information in [All Configuration Settings](https://gohugo.io/getting-started/configuration/#all-configuration-settings).

### Site title

In your config.toml

```toml
title = "Artisan"
```

> Site title. This value will become the content of `<title>` tag in html.

### Theme

In your config.toml

```toml
theme = "hugo-theme-artisan"
```

> Set this value to the corresponding folder name of your theme. (located by default in /themes/THEMENAME/)

### Base URL

In your config.toml

```toml
baseURL = "https://kaiiiz.github.io/hugo-theme-artisan"
```

> Hostname (and path) to the root.


## Navbar title

In your config.toml

```toml
[params]
navTitle = "Artisan"
```

> [Will fallback to `title` value in config.toml](#site-title) if this value is not set.

## Footer text

In your config.toml

```toml
[params]
footerText = "Copyright © 2021 by kaiiiz"
```

> If this value is not present, footer section will not be rendered.

## Navbar menu

Artisan uses built-in menu system supported from hugo itself. (Checkout [document](https://gohugo.io/content-management/menus) for more deatil.) By default, artisan uses the menu called `navbar` to decide which item need to be rendered on the navbar.

So you can simply add the following code to your page front-matter, and the menu info will be handled by hugo out of the box. ([simple method mentioned in document](https://gohugo.io/content-management/menus#simple))

```md
---
menu: navbar
---
```

Also, weighted value is supported out of the box, you can explicit assign the weight of the navbar item, hugo will first sort the menu using weight, if there has two item shared the same weight, the alphabetical order will be applied.

```md
---
menu:
  navbar:
    weight: -99
---
```

If you try to put entry that aren't attached to a piece of content, checkout [Add Non-content Entries to a Menu](https://gohugo.io/content-management/menus#add-non-content-entries-to-a-menu) for more detail.

## Layout

Artisan support many different types of layout. You can change the layout of section or regular page according to your needs. Checkout [Layout](/hugo-theme-artisan/layout) for more detail.

## Page metadata settings

These configurations may effect the result of SEO.

### Author

In page front-matter

```md
---
author: "kaiiiz"
---
```

### Description

In page front-matter

```md
---
description: "Configuration of hugo-theme-artisan"
---
```

### Keywords

In page front-matter

```md
---
keywords:
- hugo
- hugo theme
- hugo theme artisan
---
```
