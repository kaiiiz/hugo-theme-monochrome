---
title: 'Setup'
---

# Setup

This document shows a brief guide to setup hugo-theme-monochrome in your hugo project.

## Quick Start

### Install Hugo

You need "extended" version of hugo to support SASS. Checkout [Install Hugo](https://gohugo.io/getting-started/installing/) for more details.

Take Linux for example:

```bash
snap install hugo --channel=extended
```

> The minimum hugo version that hugo-theme-monochrome required is `0.146.0`

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

Then add `theme = "hugo-theme-monochrome"` to your `hugo.toml`

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

Generate files to `/public` folder, `--minify` option can minify other resources (e.g. HTML/XML/JSON...).

See [Configure Minify](https://gohugo.io/getting-started/configuration/#configure-minify) to adjust the behavior of hugo minifier (powered by [minify](https://github.com/tdewolff/minify)).

```bash
hugo --environment production --minify
```

### Deployment

Push `/public` folder to your server.

> For reference, this site is built by using Github Action and Github Pages. The CI script is available [here](https://github.com/kaiiiz/hugo-theme-monochrome/blob/main/.github/workflows/gh-pages.yml).

#### Deployment on github

If you want to deploy your own site on github and you would like it to be built using Github Action and Github Pages you can follow [these instructions](https://gohugo.io/hosting-and-deployment/hosting-on-github/#build-hugo-with-github-action) on the HUGO website with the only change being to uncomment the following line in Setup Hugo:

```
# extended: true
```

This is needed since Monochrome uses SCSS.

Otherwise the Github Action will fail with the following message:

```
Run hugo --minify
Start building sites … 
hugo v0.96.0-2fd4a7d3d6845e75f8b8ae3a2a7bd91438967bbb linux/amd64 BuildDate=2022-03-26T09:15:58Z VendorInfo=gohugoio
Error: Error building site: TOCSS: failed to transform "scss/core.scss" (text/x-scss). Check your Hugo installation; you need the extended version to build SCSS/SASS.: this feature is not available in your current Hugo version, see https://goo.gl/YMrWcn for more information
Total in 156 ms
Error: Process completed with exit code 255.
```

## Run exampleSite

```bash
git clone https://github.com/kaiiiz/hugo-theme-monochrome
cd hugo-theme-monochrome/exampleSite
hugo --themesDir=../.. server
```
