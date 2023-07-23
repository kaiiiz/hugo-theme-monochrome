---
title: 'Bookcase'
---

# Bookcase

Render bookcase layout

## Usage

```
{{</* bookcase section="" /*/>}}
```

`section`: Content resources. Must be a section. Path can be an absolute path (with `/` prefix, relative to base URL), or relative path (without `/`, relative to current path)

> Hugo will handle multilingual scenario out of the box

For example:

```
https://kaiiiz.github.io/hugo-theme-monochrome/configuration
        \____________________________________/\____________/
                    base URL                   section path
```



## Examples

```html
{{</* bookcase section="/configuration" */>}}
```

{{< bookcase section="/configuration" >}}
