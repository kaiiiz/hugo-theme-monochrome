---
title: 'Bookcase Layout Document'
bookcase_cover_src: 'cover/bookcase.png'
bookcase_cover_src_dark: 'cover/bookcase_dark.png'
weight: 20
---

Bookcase layout is useful for creating another viewpoint of list contents.

> This layout can only be used on section page (`_index.md`).

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

The cover image URL relative to the base URL. (with or without `/` prefix)

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

The dark mode cover image URL relative to the base URL. (with or without `/` prefix)

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

### bookcase_cover_title

The title used in the bookcase cover

> default: fallback to the title of the page

### bookcase_hidden

Hide this item from bookcase

> default: false

### weight

```yaml
---
weight: 3
---
```

> default: [default order](https://gohugo.io/templates/lists/#order-content)
