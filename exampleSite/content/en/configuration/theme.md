---
title: 'Theme Settings'
weight: 2
bookcase_cover_src: 'cover/catalogue.png'
bookcase_cover_src_dark: 'cover/catalogue_dark.png'
changelogs:
---

# Theme Configuration

These values are inside your toml config file.

## Navbar title

HTML is available.

```toml
[params]
navbar_title = "Monochrome" # default: site's `title`
```

## Footer

HTML is available.

```toml
[params]
footer = "Copyright © 2021 by kaiiiz" # default: None
```

## Table of Contents

TOC global settings.

```toml
[params]
enable_toc = true # default: true
```

### Table of Contents Position

TOC position global setting.

```toml
[params]
toc_position = "right" # "top" | "right", default: "top"
```

## Collapsible Menu

Collapsible global settings.

```toml
[params]
enable_collapsible_toc = false # default: false
enable_collapsible_changelogs = false # default: false
```
## Navbar menu

Monochrome uses built-in menu system supported by hugo itself. (Checkout [document](https://gohugo.io/content-management/menus) for more details.) By default, the menu called `navbar` is used to decide which item need to be rendered on the navbar.

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

toml example:

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

yaml example:

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

### Hide Navbar on Scroll

Hide navbar on scroll

```toml
[params]
hide_navbar_on_scroll = true # true | false, default: true
```

## List Layout

```toml
[params]
  [params.list_layout]
  enable_group_by_year = true # default: true
  enable_show_date = true # default: true
  enable_pagination = false # default: false
```

## Header Anchor Link

Render an anchor link next to the header element.

```toml
[params]
enable_header_anchor = false # default: true
```

## External Library

### MathJax

Use `$` ... `$` or `\(` ... `\)` to create inline result, `$$` ... `$$` or `\\[` ... `\\]` to create block result.

> You may also want to setup the [Goldmark passthrough extension](https://gohugo.io/content-management/mathematics).
>
> Besides, double-escape the `$` delimiter (`\\$`) if you encounter rendering issue outside the math context.

```toml
[params]
enable_math = true # default: false
```

### Zooming.js

Zooming.js global setting.

```toml
[params]
enable_zooming_js = false # default: true
```

### Site Search

Add the following settings to hugo.toml:

```toml
[outputs]
home = ["HTML", "RSS", "JSON"]
```

Enable site search

```toml
[params]
enable_site_search = true # default: false
```

## Syntax Highlighting

### Using Chroma (server-side)

See [Syntax Highlighting](https://gohugo.io/content-management/syntax-highlighting) for more details.

```toml
[param]
  [param.syntax_highlight]
  lib = "builtin" # "builtin" | "prism.js" (default: "builtin")
    [param.syntax_highlight.builtin]
    enable_code_copy = true # default: true
```

### Using Prism.js (client-side)

Disable markup highlight feature

```toml
[markup.highlight]
codeFences = false
lineNos = false
```

Enable Prism.js

```toml
[param]
  [params.syntax_highlight]
  lib = "prism.js" # "builtin" | "prism.js" (default: "builtin")
    [params.syntax_highlight.prism]
    enable_code_copy = true # default: true
    enable_line_no = true # default: true
```

## SEO

### Author

```toml
[params]
author = "kaiiiz" # default: no author `meta` tag
```

### Open Graph

A flag to render open graph internal template. See [Open Graph](https://gohugo.io/templates/internal#open-graph) for additional settings.

```toml
[params]
enable_open_graph = false # default: true
```

### X (Twitter) Cards

A flag to render open X (twitter) cards template. See [X (Twitter) Cards](https://gohugo.io/templates/embedded/#x-twitter-cards) for additional settings.

```toml
[params]
enable_twitter_cards = false # default: true
```

## Custom CSS

You can override the default styles by creating a new `/static/user.css` file.

## Default Color Scheme

You can set the default color scheme for your website

```toml
[params]
color_scheme = "dark" # "light" or "dark"
```

> default: "light"

## Custom head

You can insert your custom code in `<head>` section using the `/layouts/_partials/user_head.html` file.

This is useful for inject third-partiy libraries (e.g. Google Ads) or your custom script. 

## Custom template at the end of page

To insert custom content at the end of each page, create the file at: `/layouts/_partials/user_content_end.html`.

This is useful for injecting custom components, such as a comment service.
