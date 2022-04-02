---
title: 'Gallery Layout Document'
bookcase_cover_src: 'cover/picture.png'
bookcase_cover_src_dark: 'cover/picture_dark.png'
weight: 30
---

# Gallery Layout Document

Gallery layout is useful for demonstrating pictures and its statistical data.

> This layout can be used on both section page and regular post.

## Configuration

```yaml
---
type: 'gallery'
---
```

> Specify `type` in front-matter will change the template lookup order.

### gallery_resources

Content resources. URL can be an absolute path (with `/` prefix, relative to base URL), or relative path (without `/`, relative to current path)

> Hugo will handle multilingual scenario out of the box

For example:

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

> default: error will occur in page


## Resouces Configuration

These settings are under the resource specified in `gallery_resources`.

### title

Title of image.

```yaml
---
title: 'Gallery'
---
```

> default: no title

### gallery_title_link

Link of the title.

```yaml
---
gallery_title_link: 'https://github.com/kaiiiz'
---
```

> default: no title link

### gallery_img_src

Image URL. URL must be relative to base URL. (without `/` prefix)

For example:

```
https://kaiiiz.github.io/hugo-theme-monochrome/thanks.jpg
        \_____________________________________/\________/
                    base URL                gallery_img_src
```

```yaml
---
gallery_img_src: 'thanks.jpg'
---
```

> default: no image

### gallery_img_link

Link of the image.

```yaml
---
gallery_img_link: 'https://github.com/kaiiiz'
---
```

> default: no image link

### gallery_img_caption

Caption of the image. HTML is available.

```yaml
---
gallery_img_caption: '<span>Photo by <a href="https://unsplash.com/@swimstaralex?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Alexander Sinn</a> on <a href="https://unsplash.com/s/photos/thanks?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>'
---
```

> default: no figure caption under image

### gallery_statistic

Statistic of the image. The format is:

```yaml
---
- key: key1
  value: value1
- key: key2
  value: value2
---
```

key and value both support markdown syntax.

> default: no figure caption under image

### weight

```yaml
---
weight: 3
---
```

> default: [default order](https://gohugo.io/templates/lists/#order-content)

## Headless Bundle

Hugo supports an amazing feature called **Headless Bundle**, which elegantly resolved the resouces publish issue.

For example, if you don't want to publish the resouces of the gallery layout, you can create a leaf bundle and specified `headless = true` in `index.md`'s front-matter. These resources will only be used during rendering process. In other word, no file will be generated to `/public` folder.

Checkout [Headless Bundle](https://gohugo.io/content-management/page-bundles/#headless-bundle) for more details.
