---
title: 'Site Settings'
weight: 1
bookcase_cover_src: 'cover/catalogue.png'
bookcase_cover_src_dark: 'cover/catalogue_dark.png'
---

# Site Configuration

These settings are important for building a website using hugo. See [All Configuration Settings](https://gohugo.io/getting-started/configuration/#all-configuration-settings) for more details.

## Site title

Site title. This value will become the content of `<title>` tag in html.

```toml
title = "Monochrome"
```

## Theme

Set this value to the corresponding folder name of your theme. (located by default in `/themes/THEMENAME/`)

```toml
theme = "hugo-theme-monochrome"
```

## Base URL

Hostname (and path) to the root.

```toml
baseURL = "https://kaiiiz.github.io/hugo-theme-monochrome"
```

## favicon

Add `favicon.ico` to your site's static folder.

## External library

### Disqus

```toml
disqusShortname = "xxx"
```

Other settings checkout [Disqus - Internal Templates](https://gohugo.io/templates/internal/#disqus) for more details.

### Google Analytics

```toml
googleAnalytics = "xxx"
```
