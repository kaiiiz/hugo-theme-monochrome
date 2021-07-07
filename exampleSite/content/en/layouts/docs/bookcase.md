---
title: 'Bookcase'
bookcase_cover_src: 'cover/bookcase.png'
bookcase_cover_src_dark: 'cover/bookcase_dark.png'
weight: 20
---

Bookcase layout is useful for creating another viewpoint of list contents.

> This layout can only be used on list layout.

## Configuration

```yaml
---
type: 'bookcase'
---
```

> Specify `type` in front-matter will change the template lookup order.

### bookcase_list_sections

List subsections.

```yaml
---
bookcase_list_sections: true
---
```

> default: true

### bookcase_list_pages

List pages.

```yaml
---
bookcase_list_pages: true
---
```

> default: true

## Resouces Configuration

These parameters are located in bookcase item's resource. For example:

```
.
├── books.md <- config is located in here!
├── category
│   └── _index.md <- and here!
└── _index.md <- your bookcase layout
```

### bookcase_cover_src

The cover image URL. URL must be relative to base URL. (without `/` prefix)

> Image ratio is 2:3 (width:height)

For example:

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

> default: fallback to bookcase_cover_src_dark, if failed, image become empty

### bookcase_cover_src_dark

The cover image URL for dark mode. URL must be relative to base URL. (without `/` prefix)

> Image ratio is 2:3 (width:height)

For example:

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

> default: fallback to bookcase_cover_src, if failed, image become empty


### weight

```yaml
---
weight: 3
---
```

> default: [default order](https://gohugo.io/templates/lists/#order-content)
