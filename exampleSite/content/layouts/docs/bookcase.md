---
title: 'Bookcase'
bookcase_cover_src: 'cover/bookcase.png'
bookcase_cover_src_dark: 'cover/bookcase_dark.png'
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

### bookcase_cover_src

The cover image URL. URL must be related to base URL. (without /)

> Image ratio is 2:3 (width:height)

For example:

```
https://kaiiiz.github.io/hugo-theme-graytr/thanks.jpg
        \_________________________________/\________/
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

> default: fallback to bookcase_cover_src_dark, if failed, image become empty

### bookcase_cover_src_dark

The cover image URL for dark mode. URL must be related to base URL. (without /)

> Image ratio is 2:3 (width:height)

For example:

```
https://kaiiiz.github.io/hugo-theme-graytr/thanks.jpg
        \_________________________________/\________/
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
bookcase_cover_src_dark: 'thanks.jpg'
---
```

> default: fallback to bookcase_cover_src, if failed, image become empty

### weight

You can adjust the order of item inside bookcase by explicit specifying weight.

```yaml
---
weight: 3
---
```

> default: sort pages by alphabetical order

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
