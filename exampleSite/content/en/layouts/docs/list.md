---
title: 'List'
bookcase_cover_src: 'cover/catalogue.png'
bookcase_cover_src_dark: 'cover/catalogue_dark.png'
weight: 40
changelogs:
- tag: 'v0.9.0'
  description:
  - 'Add `group_by_year`, `show_date` properties'
---

List layout is built-in section layout. Monochrome add options to adjust its behavior.

## Configuration

### List posts

You can fully customize your index page through the content of `_index.md` and decide whether render the default list layout by specifying `list_posts`.

```yaml
list_posts: false
```

> default: true

### Group by year

An option to control group setting.

```yaml
group_by_year: false
```

> default: true

### Show date

Show / Hide date right after the post entry.

```yaml
show_date: false
```

> default: true
