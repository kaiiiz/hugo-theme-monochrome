---
title: 'Changelog'
toc: false
---

## Changelog

### v0.8.0 - 2021/07/29

* Improve: flexsearch multilingual search capability
* Improve: widen the control range of navbar menu items
* Change: flexsearch can now search index pages
* Change: the post content in RSS is changed from summary to full text
* Add: collapsible TOC and Changelogs

### v0.7.1 - 2021/07/08

* Change: adjust the style of changelogs
* Fix: flexsearch search API issue

### v0.7.0 - 2021/06/24

* Bump dependencies version
* Add: `changelogs` property
* Add: support disqus for index page (turn off by default)
* Change: theme name from 'Graytr' to 'Monochrome'
* Change: improve navbar responsiveness
* Fix: widen the control range of navbar menu icon

### v0.6.2 - 2021/04/15

* Fix: google search console authentication failed if ga code not in `<head>`
* Fix: `clipboard-polyfill/text` dependency resolved issue

### v0.6.1 - 2021/02/17

* Fix: codepen shortcode id
* Change baseurl to example.com in exampleSite

### v0.6.0 - 2021/02/16

* Support MathJax
* Add shortcodes: `jsfiddle`, `codepen`, `color-block`, `icon-group`, `terms-cloud`
* Add option: `list_posts` in list layout
* Fix: not register touchend event

### v0.5.0 - 2021/02/15

* Support multilingual mode
  * Add i18n
* Support Open Graph, Twitter Card
* Adjust svg-wrapper shortcode
  * Add some social icons: `facebook`, `github`, `twitter`, `rss`, `mail`
* Support site search (powered by flexsearch)
* Disable unused features in tailwindcss (speedup building time)
* Reorganize parameters
* Remove default image to figure transformation, using built-in shortcode instead

### v0.4.0 - 2021/02/12

* Support dark mode
  * Add `bookcase_cover_src_dark` for bookcase layout
  * Add `balloon_img_src_dark` for balloon layout
  * Add shortcode: svg-wrapper
* Prism.js integration (v1.23.0)
* Code copy feature for code block

### v0.3.0 - 2021/02/10

* Support nested navbar
* Implement default homepage layout
* Adjust the purpose of bookcase layout
* Remove catalog layout

### v0.2.0 - 2021/02/09

* A better responsive navbar
* Implement default taxonomy and term layout
* Adjust article styles

### v0.1.0 - 2021/02/08

Initial release.

