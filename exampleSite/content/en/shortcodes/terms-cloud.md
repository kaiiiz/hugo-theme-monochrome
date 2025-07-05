---
title: 'Terms Cloud'
bookcase_cover_src: 'cover/coding.png'
bookcase_cover_src_dark: 'cover/coding_dark.png'
---

# Terms Cloud

Render terms cloud, hugo supports `tag` and `category` terms by default, if you want to add your custom terms. Follow the instructions in the [document](https://gohugo.io/content-management/taxonomies/#configure-taxonomies).

## Usage

```
{{</* terms-cloud terms="" sortby="" order="" /*/>}}
```

Parameters:

* `terms`: terms name
* `sortby`: `count` or `alphabetical` (default: `count`)
* `order`: `asc` or `desc` (default: `asc`)

## Examples

```html
{{</* terms-cloud terms="series" */>}}
```

{{< terms-cloud terms="series" >}}

```html
{{</* terms-cloud terms="tags" order="desc" */>}}
```

{{< terms-cloud terms="tags" order="desc" >}}

```html
{{</* terms-cloud terms="tags" sortby="alphabetical" */>}}
```

{{< terms-cloud terms="tags" sortby="alphabetical" >}}

