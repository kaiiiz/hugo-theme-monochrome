---
title: 'Color Block'
bookcase_cover_src: 'cover/coding.png'
bookcase_cover_src_dark: 'cover/coding_dark.png'
---

# Color Block

帶有背景顏色的區塊

## 使用

```
{{</* color-block style="" */>}}

{{</* /color-block */>}}
```

參數:

* `style`:
  * success
  * info
  * warning
  * error

## 範例

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
