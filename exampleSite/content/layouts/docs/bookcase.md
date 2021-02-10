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

### bookcase_cover_src

The cover image URL. URL must be related to base URL. (without /)

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

> default: image become empty

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
