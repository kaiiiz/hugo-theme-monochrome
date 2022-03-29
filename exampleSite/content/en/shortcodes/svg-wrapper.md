---
title: "SVG Wrapper"
bookcase_cover_src: "cover/coding.png"
bookcase_cover_src_dark: "cover/coding_dark.png"
---

# SVG Wrapper

Wrap SVG with dark/bright color styles, it's useful for dark mode compatibility.

## Usage

```
{{</* svg-wrapper name="" link="" */>}}
svg inline
{{</* /svg-wrapper */>}}
```

Paramters:

- `link`: Render link for svg
- `name`: Use theme built-in svg

## Available Built-in SVG

Icon from [Feather icons](https://feathericons.com/)

| name     | svg                                  |
| -------- | ------------------------------------ |
| earth    | {{< svg-wrapper name="earth" />}}    |
| moon     | {{< svg-wrapper name="moon" />}}     |
| sun      | {{< svg-wrapper name="sun" />}}      |
| github   | {{< svg-wrapper name="github" />}}   |
| facebook | {{< svg-wrapper name="facebook" />}} |
| rss      | {{< svg-wrapper name="rss" />}}      |
| twitter  | {{< svg-wrapper name="twitter" />}}  |
| mail     | {{< svg-wrapper name="mail" />}}     |

## Examples

```html
{{</* svg-wrapper link="https://github.com/kaiiiz/hugo-theme-monochrome" */>}}
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
{{</* /svg-wrapper */>}}
```

{{< svg-wrapper link="https://github.com/kaiiiz/hugo-theme-monochrome" >}}
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
{{< /svg-wrapper >}}

```html
{{</* svg-wrapper name="github" link="https://github.com/kaiiiz/hugo-theme-monochrome" */>}}
```

{{< svg-wrapper name="github" link="https://github.com/kaiiiz/hugo-theme-monochrome" >}}
