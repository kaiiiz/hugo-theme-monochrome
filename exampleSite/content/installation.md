---
title: 'Installation'
menu:
  navbar:
    weight: -100
toc: false
---

## Installation

This page shows a brief guide to setup hugo-theme-artisan to your hugo project.

### Install Hugo

You need "extended" version of hugo to support SASS. Checkout [Install Hugo](https://gohugo.io/getting-started/installing/) for more detail.

Take Linux for example:

```bash
snap install hugo --channel=extended
```

> The minimum hugo version that hugo-theme-artisan required is `0.78.0`

### Create a New Site

```bash
hugo new site <project name>
```

### Add a Theme

```bash
cd <project name>
git init
git submodule add https://github.com/kaiiiz/hugo-theme-artisan.git themes/hugo-theme-artisan
```

### Setup Dependencies

hugo-theme-artisan is powered by [tailwindcss](https://tailwindcss.com/), so [PostCSS](https://postcss.org/) is required for processing macro, purge... etc.

If you are not using the Hugo Snap package, PostCSS and its plugins need to be installed in the global environment:

```bash
sudo yarn global add postcss postcss-cli autoprefixer
```

> [Hugo document](https://gohugo.io/hugo-pipes/postcss) has more information about PostCSS setup.

Then prepares a composite package.json file for your project. (new in [0.78.0](https://gohugo.io/news/0.78.0-relnotes/))

```bash
hugo mod npm pack
```

Finally, install the dependencies

```bash
npm install
```

### Customize the Theme

Checkout [Configuration](/hugo-theme-artisan/configuration/) for more details.

