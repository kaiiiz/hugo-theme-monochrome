---
title: 'Bookcase'
bookcase_cover_src: 'cover/bookcase.png'
bookcase_cover_src_dark: 'cover/bookcase_dark.png'
weight: 20
---

Bookcase 可以為列表提供不同的樣式。

> 這個版型僅可在列表使用

## 設定

```yaml
---
type: 'bookcase'
---
```

> 在 front-matter 指定 `type` 會改變 template 的使用順序

### bookcase_list_sections

列出 subsections

```yaml
---
bookcase_list_sections: true
---
```

> default: true

### bookcase_list_pages

列出 pages

```yaml
---
bookcase_list_pages: true
---
```

> default: true

## 資源設定

這些設定會存在在 `balloon_resources` 指定的目錄下的頁面

```
.
├── books.md <- config is located in here!
├── category
│   └── _index.md <- and here!
└── _index.md <- your bookcase layout
```

### bookcase_cover_src

圖片路徑，路徑必須相對於 base URL (注意沒有 `/` 的前綴)

> 圖片比例：2:3 (寬:高)

舉例來說:

```
https://kaiiiz.github.io/hugo-theme-monochrome/thanks.jpg
        \_____________________________________/\________/
                    base URL              bookcase_cover_src
```

```yaml
---
bookcase_cover_src: 'thanks.jpg'
---
```

> default: 使用 bookcase_cover_src_dark 的值, 如果都沒有值，圖片會變成空值

### bookcase_cover_src_dark

在黑色模式下的圖片路徑，路徑必須相對於 base URL (注意沒有 `/` 的前綴)

> 圖片比例：2:3 (寬:高)

舉例來說:

```
https://kaiiiz.github.io/hugo-theme-monochrome/thanks.jpg
        \_____________________________________/\________/
                    base URL              bookcase_cover_src
```

```yaml
---
bookcase_cover_src_dark: 'thanks.jpg'
---
```

> default: 使用 bookcase_cover_src 的值, 如果都沒有值，圖片會變成空值


### weight

```yaml
---
weight: 3
---
```

> default: [預設排序](https://gohugo.io/templates/lists/#order-content)
