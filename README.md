You need "extended" version of hugo to support SASS. Checkout [Install Hugo](https://gohugo.io/getting-started/installing/) for more detail.

## PostCSS

[PostCSS](https://gohugo.io/hugo-pipes/postcss/)

```
yarn install
```

### Production

```
hugo server --environment development
```

Check minify & PurgeCSS

```
hugo server --environment production
```

### Config

```toml
[menu]
  [[menu.nav]]
    identifier = "blog"
    name = "Blog"
    url = "/blog/"
    weight = 1

[params.nav]
title = "YK's"
```

### Layout

#### Balloon

```md
---
type: 'balloon'
balloon_img: "/images/sticker.jpg"
balloon_resources: "/about"
---
```
