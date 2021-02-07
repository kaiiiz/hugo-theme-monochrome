---
title: 'Bookcase'
bookcase_cover_src: 'bookcase.png'
---

Bookcase layout is useful for creating another viewpoint of list contents.

> This layout can only be used on list layout.

## Configuration

In page front-matter

```yaml
---
type: 'bookcase'
---
```

> Specify `type` in front-matter will change the template lookup order.


### bookcase_mode

The mode of bookcase layout. Two options are available: 'list' or 'expand'.

List mode will list subsections or pages in current level.

Expand mode will expand the contents of subsection (another subsections or pages) to multi-layer. Checkout [Multi-Layer Bookcase](/hugo-theme-artisan/layouts/demo/bookcase/multi-layer-bookcase/) for demonstration.

```yaml
---
bookcase_mode: 'list'
---
```

> default: 'list'

### bookcase_cover_src

The cover image URL. URL must be related to base URL. (without /)

For example:

```
https://kaiiiz.github.io/hugo-theme-artisan/thanks.jpg
        \__________________________________/\________/
                    base URL              bookcase_cover_src
```


This parameter is located in bookcase item's resource. Take list mode for example:

```
.
├── books.md <- bookcase_cover_src is located in here!
├── category
│   └── _index.md <- and here!
└── _index.md <- your bookcase layout
```

```yaml
---
bookcase_cover_src: 'thanks.jpg'
---
```

> default: image become empty

### weight

You can adjust the order of item inside bookcase by explicit specifying weight.

```yaml
---
weight: 3
---
```

> default: sort pages by alphabetical order

## List mode

These options will only be used if `bookcase_mode` is set to list.

### bookcase_list_sections

Expand sections to the layer of bookcase.

```yaml
---
bookcase_list_sections: true
---
```

> default: true

### bookcase_list_pages

Expand regular pages to the layer of bookcase.

```yaml
---
bookcase_list_pages: true
---
```

> default: true

## Expand mode

These options will only be used if `bookcase_mode` is set to expand.

### bookcase_expand_sections

Expand sections to the layer of bookcase.

This parameter is located in subsection. For example:

```
.
├── books
│   ├── _index.md <- bookcase_expand_sections is located in here!
│   └── business-and-money <- this subsection will show in bookcase
│       └── _index.md
└── _index.md <- your bookcase layout
```

```yaml
---
bookcase_expand_sections: true
---
```

> default: true

### bookcase_expand_pages

Expand regular pages to the layer of bookcase.

This parameter is located in subsection. For example:

```
.
├── books
│   ├── _index.md <- bookcase_expand_pages is located in here!
│   └── business-and-money.md <- this page will show in bookcase
└── _index.md <- your bookcase layout
```

```yaml
---
bookcase_expand_pages: true
---
```

> default: true

### bookcase_expand_reveal_content

Decide whether reveal the content of `_index.md` into bookcase index page.

This parameter is located in subsection. For example:

```
.
├── books
│   └── _index.md <- bookcase_expand_reveal_content is located in here!
└── _index.md <- your bookcase layout
```

```yaml
---
bookcase_expand_reveal_content: true
---
```

> default: true
