---
title: 'Balloon'
bookcase_cover_src: 'cover/balloon.png'
bookcase_cover_src_dark: 'cover/balloon_dark.png'
weight: 10
---

Balloon 可以將階段的資訊選染成卡片樣式。

> 這個版型可以在列表與單頁使用

## 設定

```yaml
---
type: 'balloon'
---
```

> 在 front-matter 指定 `type` 會改變 template 的使用順序

### balloon_resources

資源的路徑。路徑可以是絕對路徑或是相對路徑。

> Hugo 會正確的處理支援多國語言的情況

舉例來說:

```
https://kaiiiz.github.io/hugo-theme-monochrome/about
        \____________________________________/\____/
                    base URL           balloon_resources
```

```yaml
---
balloon_resources: "/about"
---
```

> default: 錯誤訊息會被渲染在頁面上

### balloon_img_src

圖片路徑，路徑必須相對於 base URL (注意沒有 `/` 的前綴)

舉例來說:

```
https://kaiiiz.github.io/hugo-theme-monochrome/thanks.jpg
        \_____________________________________/\________/
                    base URL              balloon_img_src
```

```yaml
---
balloon_img_src: 'thanks.jpg'
---
```

> default: 使用 balloon_img_src_dark 的值, 如果都沒有值，圖片會變成一個點

### balloon_img_src_dark

在黑色模式下的圖片路徑，路徑必須相對於 base URL (注意沒有 `/` 的前綴)

舉例來說:

```
https://kaiiiz.github.io/hugo-theme-monochrome/thanks.jpg
        \_____________________________________/\________/
                    base URL              balloon_img_src
```

```yaml
---
balloon_img_src_dark: 'thanks.jpg'
---
```

> default: 使用 balloon_img_src 的值, 如果都沒有值，圖片會變成一個點

### balloon_circle

是否將圖形套用圓形樣式

```yaml
---
balloon_circle: true
---
```

> default: true

## 資源設定

這些設定會存在在 `balloon_resources` 指定的目錄下的頁面

### title

單個卡片的標題

```yaml
---
title: 'Story before hugo'
---
```

> default: 沒有標題

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
