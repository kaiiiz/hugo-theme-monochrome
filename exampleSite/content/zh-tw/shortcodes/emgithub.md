---
title: 'Embed github'
bookcase_cover_src: 'cover/coding.png'
bookcase_cover_src_dark: 'cover/coding_dark.png'
---

# Embed github

直接 embed github source code 到網站中，並支援語法高亮 (Prism.js)

## 使用

```
{{</* emgithub target="" lang="" hl="" tab_size="" /*/>}}
```

Paramters:

* `target` (required): 合法的 github 網址，舉例來說:
  * https://github.com/torvalds/linux/blob/v5.4/README
  * https://github.com/torvalds/linux/blob/v5.4/README#L1
  * https://github.com/torvalds/linux/blob/v5.4/README#L1-L7
* `lang` (optional): 使用何種語言做語法高亮？預設為 `text`
* `hl` (optional): 行數高亮設定，細節參考 [Prism.js Line Highlight Plugin](https://prismjs.com/plugins/line-highlight/)
* `tab_size` (optional): 預設為 4

## 範例

```html
{{</* emgithub target="https://github.com/torvalds/linux/blob/v5.4/README" /*/>}}
```

{{< emgithub target="https://github.com/torvalds/linux/blob/v5.4/README" >}}

```html
{{</* emgithub target="https://github.com/torvalds/linux/blob/v5.4/arch/arm64/kernel/stacktrace.c#L171-L199" lang=c tab_size=8 hl="172-173,192" /*/>}}
```

{{< emgithub target="https://github.com/torvalds/linux/blob/v5.4/arch/arm64/kernel/stacktrace.c#L171-L199" lang=c tab_size=8 hl="171-172,192" >}}
