---
title: 'Terms Cloud'
bookcase_cover_src: 'cover/coding.png'
bookcase_cover_src_dark: 'cover/coding_dark.png'
---

# Terms Cloud

Render terms cloud, hugo supports `tag` and `category` terms by default, if you want to add your custom terms. Follow the instructions in the [document](https://gohugo.io/content-management/taxonomies/#configure-taxonomies).

## Usage

```
{{</* terms-cloud terms="" /*/>}}
```

Paramters:

* `terms`: terms name

## Examples

```html
{{</* terms-cloud terms="tags" */>}}
```

{{< terms-cloud terms="tags" >}}

```html
{{</* terms-cloud terms="series" */>}}
```

{{< terms-cloud terms="series" >}}
