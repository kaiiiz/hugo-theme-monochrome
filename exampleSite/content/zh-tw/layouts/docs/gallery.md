---
title: 'Gallery'
bookcase_cover_src: 'cover/picture.png'
bookcase_cover_src_dark: 'cover/picture_dark.png'
weight: 30
---

Gallery 可以展示圖片輔以一些相關數據與說明。

> 這個版型可以在列表與單頁使用

## Configuration

```yaml
---
type: 'gallery'
---
```

> 在 front-matter 指定 `type` 會改變 template 的使用順序

### gallery_resources

資源的路徑。路徑可以是絕對路徑或是相對路徑。

> Hugo 會正確的處理支援多國語言的情況

舉例來說:

```
https://kaiiiz.github.io/hugo-theme-monochrome/about
        \____________________________________/\____/
                    base URL           gallery_resources
```

```yaml
---
gallery_resources: '/about'
---
```

> default: 錯誤訊息會被渲染在頁面上


## 資源設定

這些設定會存在在 `gallery_resources` 指定的目錄下的頁面

### title

圖片的標題

```yaml
---
title: 'Gallery'
---
```

> default: 標題不會被渲染

### gallery_title_link

圖片標題的連結

```yaml
---
gallery_title_link: 'https://github.com/kaiiiz'
---
```

> default: 連結不會被渲染

### gallery_img_src

圖片路徑，路徑必須相對於 base URL (注意沒有 `/` 的前綴)

舉例來說:

```
https://kaiiiz.github.io/hugo-theme-monochrome/thanks.jpg
        \_____________________________________/\________/
                    base URL              gallery_img_src
```

```yaml
---
gallery_img_src: 'thanks.jpg'
---
```

> default: 圖片不會被渲染

### gallery_img_link

圖片的連結

```yaml
---
gallery_img_link: 'https://github.com/kaiiiz'
---
```

> default: 連結不會被渲染

### gallery_img_caption

圖片下方的小標，支援 HTML

```yaml
---
gallery_img_caption: '<span>Photo by <a href="https://unsplash.com/@swimstaralex?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Alexander Sinn</a> on <a href="https://unsplash.com/s/photos/thanks?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>'
---
```

> default: 圖片下方的小標不會被渲染

### gallery_statistic

圖片的數據，格式為:

```yaml
---
- key: key1
  value: value1
- key: key2
  value: value2
---
```

key 及 value 皆支援 markdown 渲染。

> default: 圖片的數據不會被渲染

### weight

```yaml
---
weight: 3
---
```

> default: [預設排序](https://gohugo.io/templates/lists/#order-content)

## 技巧

Hugo 支援 **Headless Bundle**，可以很優雅的解決資源是否要被發布的問題。

舉例來說，如果你不想要 balloon 版型中的資源被發布，可以透過建立一個 leaf bundle 並在 `index.md` 的 front-matter 中指定 `headless = true`。這些資源將僅被使用在渲染頁面的過程，也就是說對應的目錄不會被生成到 `/public` 中。

更多資訊請參考 [Headless Bundle](https://gohugo.io/content-management/page-bundles/#headless-bundle)
