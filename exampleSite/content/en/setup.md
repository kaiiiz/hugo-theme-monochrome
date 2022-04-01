---
title: 'Setup'
---

This document shows a brief guide to setup hugo-theme-monochrome in your hugo project.

## Quick Start

### Install Hugo

You need "extended" version of hugo to support SASS. Checkout [Install Hugo](https://gohugo.io/getting-started/installing/) for more details.

Take Linux for example:

```bash
snap install hugo --channel=extended
```

> The minimum hugo version that hugo-theme-monochrome required is `0.80.0`

### Create a New Site

```bash
hugo new site <project name>
```

### Add a Theme

```bash
cd <project name>
git init
git submodule add https://github.com/kaiiiz/hugo-theme-monochrome.git themes/hugo-theme-monochrome
```

Then add `theme = "hugo-theme-monochrome"` to your `config.toml`

### Customize the Theme

See [Configuration](/hugo-theme-monochrome/configuration/).

### Start the Hugo server

```bash
hugo server
```

Minify CSS and JS resources. The minifier of JavaScript here is powered by [ESBuild](https://github.com/evanw/esbuild).

```bash
hugo server --environment production
```

### Build static pages

Generate files to `/public` folder, `--minify` option can minify other resouces (e.g. HTML/XML/JSON...).

See [Configure Minify](https://gohugo.io/getting-started/configuration/#configure-minify) to adjust the behavior of hugo minifier (powered by [minify](https://github.com/tdewolff/minify)).

```bash
hugo --environment production --minify
```

### Deployment

Push `/public` folder to your server. This site is built by using Github Action and Github Pages. The CI script is available [here](https://github.com/kaiiiz/hugo-theme-monochrome/blob/main/.github/workflows/gh-pages.yml).

## Run exampleSite

```bash
git clone https://github.com/kaiiiz/hugo-theme-monochrome
cd hugo-theme-monochrome/exampleSite
hugo --themesDir=../.. server
```
