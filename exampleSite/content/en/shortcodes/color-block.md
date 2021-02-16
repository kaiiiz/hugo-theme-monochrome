---
title: 'Color Block'
bookcase_cover_src: 'cover/coding.png'
bookcase_cover_src_dark: 'cover/coding_dark.png'
---

# Color Block

A block with color

## Usage

```
{{</* color-block style="" */>}}

{{</* /color-block */>}}
```

Paramters:

* `style`: block style
  * success
  * info
  * warning
  * error

## Examples

```html
{{</* color-block */>}}
hello world
{{</* /color-block */>}}
```

{{< color-block >}}
hello world
{{< /color-block >}}


```html
{{</* color-block style="success" */>}}
hello world
{{</* /color-block */>}}
```

{{< color-block style="success" >}}
hello world
{{< /color-block >}}


```html
{{</* color-block style="info" */>}}
hello world
{{</* /color-block */>}}
```

{{< color-block style="info" >}}
hello world
{{< /color-block >}}

```html
{{</* color-block style="warning" */>}}
hello world
{{</* /color-block */>}}
```

{{< color-block style="warning" >}}
hello world
{{< /color-block >}}

```html
{{</* color-block style="error" */>}}
hello world
{{</* /color-block */>}}
```

{{< color-block style="error" >}}
hello world
{{< /color-block >}}
