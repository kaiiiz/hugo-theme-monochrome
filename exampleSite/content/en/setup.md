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

### Setup Dependencies

Prepare a composite package.json file for your project.

```bash
hugo mod npm pack
```

Install dependencies

```bash
npm install
```

> Remember to ignore `node_modules` folder

### Setup PostCSS

hugo-theme-monochrome is powered by [tailwindcss](https://tailwindcss.com/). For better quality of CSS purging in production, you should add the following config to your `config.toml`, or the default settings generated from demo site will be applied.

See [CSS purging with PostCSS](https://gohugo.io/hugo-pipes/postprocess/#css-purging-with-postcss) for more details.

```toml
[build]
  writeStats = true
```

### Customize the Theme

See [Configuration](/hugo-theme-monochrome/configuration/).

### Start the Hugo server

```bash
hugo server
```

Minify CSS and JS resources, PurgeCSS will also be applied. The minifier of JavaScript here is powered by [ESBuild](https://github.com/evanw/esbuild).

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
hugo --themesDir=../.. mod npm pack
npm install
hugo --themesDir=../.. server
```
