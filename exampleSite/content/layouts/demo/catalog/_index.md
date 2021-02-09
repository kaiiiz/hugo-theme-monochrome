---
title: 'Catalog'
bookcase_cover_src: 'catalogue.png'
type: 'catalog'
weight: 3
---

Catalog layout is useful for customizing list contents.

The default list layout will list all pages under the current section, but with catalog layout, you can put any word in any place! (Just like regular page)

For example: [Go to catalog demo post 1](demo1), or [Go to home page](/hugo-theme-graytr)

## Why catalog layout?

You may wonder why not just use `index.md` to render a regular page?

Consider this situation in bookcase layout (expand mode):

```
.
├── category1
│   ├── subcategory
│   │   └── _index.md
│   └── _index.md
├── _index.md <- bookcase layout
└── category2
    ├── subcategory
    │   └── _index.md
    └── index.md <- !!!!!
```

Bookcase will not expand category2 to its index page, since it's not a subsection under bookcase layout.

And if using `_index.md`, it will fallback to default list layout in `/category2`. If you don't want to use default list layout, catalog layout is used in this situation.
