---
title: "Icon"
bookcase_cover_src: "cover/coding.png"
bookcase_cover_src_dark: "cover/coding_dark.png"
---

# Icon

Monochrome built-in icons.

## Usage

```
{{</* icon vendor="" name="" link="" */>}}
```

Paramters:

- `vendor`: Icon vendor (Supported value: `feather`)
- `link`: Render link for icon
- `name`: Icon name

## Available Icons

Icons from [Feather icons](https://feathericons.com/)

| name     | svg                                  |
| -------- | ------------------------------------ |
| globe    | {{< icon vendor="feather" name="globe" >}}    |
| moon     | {{< icon vendor="feather" name="moon" >}}     |
| sun      | {{< icon vendor="feather" name="sun" >}}      |
| github   | {{< icon vendor="feather" name="github" >}}   |
| facebook | {{< icon vendor="feather" name="facebook" >}} |
| rss      | {{< icon vendor="feather" name="rss" >}}      |
| twitter  | {{< icon vendor="feather" name="twitter" >}}  |
| mail     | {{< icon vendor="feather" name="mail" >}}     |

## Examples

```html
{{</* icon vendor="feather" name="github" link="https://github.com/kaiiiz/hugo-theme-monochrome" */>}}
```

{{< icon vendor="feather" name="github" link="https://github.com/kaiiiz/hugo-theme-monochrome" >}}
