---
title: 'List'
bookcase_cover_src: 'cover/catalogue.png'
bookcase_cover_src_dark: 'cover/catalogue_dark.png'
weight: 40
changelogs:
- tag: 'v0.9.0'
  description:
  - '新增 `group_by_year`, `show_date` 屬性'
---

List layout 是預設產生 section 時會套用的樣式. Monochrome 提供一些參數調整它的行為。

## 設定

### List posts

你可以透過宣告 `list_posts` 來透過 `_index.md` 的內容完全客製化列表的樣式。

```yaml
list_posts: false
```

> default: true

### Group by year

控制是否將列表以年做群組。

```yaml
group_by_year: false
```

> default: true

### Show date

顯示/隱藏列表中文章的日期。

```yaml
show_date: false
```

> default: true
