---
title: 'Balloon'
bookcase_cover_src: 'cover/balloon.png'
bookcase_cover_src_dark: 'cover/balloon_dark.png'
weight: 10
---

Balloon is useful for demonstrating information step-by-step.

> This layout can be used on both list layout and single layout.

## Configuration

```yaml
---
type: 'balloon'
---
```

> Specify `type` in front-matter will change the template lookup order.

### balloon_resources

Content resources. URL can be an absolute path (with `/` prefix, relative to base URL), or relative path (without `/`, relative to current path)

> Hugo will handle multilingual scenario out of the box

For example:

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

> default: error will occur in page

### balloon_img_src

Balloon head image URL. URL must be relative to base URL. (without `/` prefix)

For example:

```
https://kaiiiz.github.io/hugo-theme-monochrome/thanks.jpg
        \_____________________________________/\________/
                    base URL                 balloon_img_src
```

```yaml
---
balloon_img_src: 'thanks.jpg'
---
```

> default: fallback to balloon_img_src_dark, if failed, image become dot

### balloon_img_src_dark

Balloon head image URL for dark mode. URL must be relative to base URL. (without `/` prefix)

For example:

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

> default: fallback to balloon_img_src, if failed, image become dot

### balloon_circle

balloon head shape can be square or circle.

```yaml
---
balloon_circle: true
---
```

> default: true

## Resouces Configuration

These settings are under the resource specified in `balloon_resources`.

### title

Title of content card.

```yaml
---
title: 'Story before hugo'
---
```

> default: no title

### weight

```yaml
---
weight: 3
---
```

> default: [default order](https://gohugo.io/templates/lists/#order-content)

## Trick

Hugo supports an amazing feature called **Headless Bundle**, which elegantly resolved the resouces publish issue.

For example, if you don't want to publish the resouces of the balloon layout, you can create a leaf bundle and specified `headless = true` in `index.md`'s front-matter. These resources will only be used during rendering process. In other word, no file will be generated to `/public` folder.

Checkout [Headless Bundle](https://gohugo.io/content-management/page-bundles/#headless-bundle) for more details.
