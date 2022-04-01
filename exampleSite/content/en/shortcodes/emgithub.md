---
title: 'Embed github'
bookcase_cover_src: 'cover/coding.png'
bookcase_cover_src_dark: 'cover/coding_dark.png'
---

# Embed github

Directly embed github source code like gist with Prism.js syntax highlight.

## Usage

```
{{</* emgithub target="" lang="" hl="" tab_size="" /*/>}}
```

Paramters:

* `target` (required): A valid github file url, for example:
  * https://github.com/torvalds/linux/blob/v5.4/README
  * https://github.com/torvalds/linux/blob/v5.4/README#L1
  * https://github.com/torvalds/linux/blob/v5.4/README#L1-L7
* `lang` (optional): Which language should use for syntax highlighting? `text` will be applied by default.
* `hl` (optional): Line highlight settings. For details, please refer [Prism.js Line Highlight Plugin](https://prismjs.com/plugins/line-highlight/)
* `tab_size` (optional): Default setting is 4 characters.

## Examples

```html
{{</* emgithub target="https://github.com/torvalds/linux/blob/v5.4/README" /*/>}}
```

{{< emgithub target="https://github.com/torvalds/linux/blob/v5.4/README" >}}

```html
{{</* emgithub target="https://github.com/torvalds/linux/blob/v5.4/arch/arm64/kernel/stacktrace.c#L171-L199" lang=c tab_size=8 hl="172-173,192" /*/>}}
```

{{< emgithub target="https://github.com/torvalds/linux/blob/v5.4/arch/arm64/kernel/stacktrace.c#L171-L199" lang=c tab_size=8 hl="171-172,192" >}}
