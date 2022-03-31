---
title: "Icon"
bookcase_cover_src: "cover/coding.png"
bookcase_cover_src_dark: "cover/coding_dark.png"
---

# Icon

Monochrome built-in icons.

## Usage

```
{{</* icon name="" link="" */>}}
```

Paramters:

- `link`: Render link for icon
- `name`: Icon name

## Available Built-in Icons

Icons from [Feather icons](https://feathericons.com/)

| name     | svg                                  |
| -------- | ------------------------------------ |
| earth    | {{< icon name="earth" >}}    |
| moon     | {{< icon name="moon" >}}     |
| sun      | {{< icon name="sun" >}}      |
| github   | {{< icon name="github" >}}   |
| facebook | {{< icon name="facebook" >}} |
| rss      | {{< icon name="rss" >}}      |
| twitter  | {{< icon name="twitter" >}}  |
| mail     | {{< icon name="mail" >}}     |

## Examples

```html
{{</* icon name="github" link="https://github.com/kaiiiz/hugo-theme-monochrome" */>}}
```

{{< icon name="github" link="https://github.com/kaiiiz/hugo-theme-monochrome" >}}
