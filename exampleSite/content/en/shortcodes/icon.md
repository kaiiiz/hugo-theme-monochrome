---
title: "Icon"
bookcase_cover_src: "cover/coding.png"
bookcase_cover_src_dark: "cover/coding_dark.png"
---

# Icon

Monochrome built-in icons.

## Usage

```
{{</* icon sets="" name="" link="" */>}}
```

Paramters:

- `sets`: Icon sets (Supported value: `feather`)
- `link`: Render link for icon
- `name`: Icon name

## Available Icons

Icons from [Feather icons](https://feathericons.com/)

| name     | svg                                  |
| -------- | ------------------------------------ |
| globe    | {{< icon sets="feather" name="globe" >}}    |
| moon     | {{< icon sets="feather" name="moon" >}}     |
| sun      | {{< icon sets="feather" name="sun" >}}      |
| github   | {{< icon sets="feather" name="github" >}}   |
| facebook | {{< icon sets="feather" name="facebook" >}} |
| rss      | {{< icon sets="feather" name="rss" >}}      |
| twitter  | {{< icon sets="feather" name="twitter" >}}  |
| mail     | {{< icon sets="feather" name="mail" >}}     |

## Examples

```html
{{</* icon sets="feather" name="github" link="https://github.com/kaiiiz/hugo-theme-monochrome" */>}}
```

{{< icon sets="feather" name="github" link="https://github.com/kaiiiz/hugo-theme-monochrome" >}}
