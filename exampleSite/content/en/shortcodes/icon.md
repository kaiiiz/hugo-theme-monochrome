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

Parameters:

- `vendor`: Icon vendor (Supported value: `feather`, `simple`)
- `link`: Render link for icon
- `name`: Icon name
- `width`: Icon width
- `height`: Icon height

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

Icons from [Simple icons](https://simpleicons.org/)

| name     | svg                                  |
| -------- | ------------------------------------ |
| dotenv    | {{< icon vendor="simple" name="dotenv" >}}    |
| dotnet     | {{< icon vendor="simple" name="dotnet" >}}     |
| e     | {{< icon vendor="simple" name="e" >}}     |
| 1001tracklists     | {{< icon vendor="simple" name="1001tracklists" >}}     |

## Examples

```html
{{</* icon vendor="feather" name="github" link="https://github.com/kaiiiz/hugo-theme-monochrome" */>}}
```

{{< icon vendor="feather" name="github" link="https://github.com/kaiiiz/hugo-theme-monochrome" >}}

```html
{{</* icon vendor="simple" name="github" link="https://github.com/kaiiiz/hugo-theme-monochrome" */>}}
```

{{< icon vendor="simple" name="github" link="https://github.com/kaiiiz/hugo-theme-monochrome" >}}

```html
{{</* icon vendor="simple" name="github" width="1rem" height="1rem" link="https://github.com/kaiiiz/hugo-theme-monochrome" */>}}
```

{{< icon vendor="simple" name="github" width="1rem" height="1rem" link="https://github.com/kaiiiz/hugo-theme-monochrome" >}}
