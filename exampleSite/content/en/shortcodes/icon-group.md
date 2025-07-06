---
title: 'Icon Group'
bookcase_cover_src: 'cover/coding.png'
bookcase_cover_src_dark: 'cover/coding_dark.png'
---

# Icon Group

Wrap icons with grid layout

## Usage

```
{{</* icon-group */>}}

{{</* /icon-group */>}}
```

Parameters:

- `gap`: Gap between icons (default: `0.375rem`)

## Examples

```html
{{</* icon-group */>}}
{{</* icon vendor="feather" name="github" */>}}
{{</* icon vendor="feather" name="rss" */>}}
{{</* icon vendor="feather" name="twitter" */>}}
{{</* /icon-group */>}}
```

{{< icon-group >}}
{{< icon vendor="feather" name="github" >}}
{{< icon vendor="feather" name="rss" >}}
{{< icon vendor="feather" name="twitter" >}}
{{< /icon-group >}}


```html
{{</* icon-group gap="1rem" */>}}
{{</* icon vendor="feather" name="github" */>}}
{{</* icon vendor="feather" name="rss" */>}}
{{</* icon vendor="feather" name="twitter" */>}}
{{</* /icon-group */>}}
```

{{< icon-group gap="1rem" >}}
{{< icon vendor="feather" name="github" >}}
{{< icon vendor="feather" name="rss" >}}
{{< icon vendor="feather" name="twitter" >}}
{{< /icon-group >}}

```html
{{</* icon-group gap="1rem" */>}}
{{</* icon vendor="simple" name="github" width="1.75rem" height="1.75rem" */>}}
{{</* icon vendor="simple" name="rss" width=".75rem" height=".75rem" */>}}
{{</* /icon-group */>}}
```

{{< icon-group gap="1rem" >}}
{{< icon vendor="simple" name="github" width="1.75rem" height="1.75rem" >}}
{{< icon vendor="simple" name="rss" width=".75rem" height=".75rem" >}}
{{< /icon-group >}}
