---
title: 'Balloon'
bookcase_cover_src: 'balloon.png'
---

Balloon is useful for demonstrating information step-by-step.

> This layout can be used on both list layout and single layout.

## Configuration

In page front-matter

```yaml
---
type: 'balloon'
---
```

> Specify `type` in front-matter will change the template lookup order.

### balloon_img_src

Balloon head image URL. URL must be related to base URL. (without /)

For example:

```
https://kaiiiz.github.io/hugo-theme-graytr/thanks.jpg
        \_________________________________/\________/
                    base URL              balloon_img_src
```

```yaml
---
balloon_img_src: 'thanks.jpg'
---
```

> default: image become dot

### balloon_circle

Ballon head shape can be square or circle.

```yaml
---
balloon_circle: true
---
```

> default: true

### balloon_resources

Content resources. URL must relative to base URL. (with /)

Take this page for example:

```
https://kaiiiz.github.io/hugo-theme-graytr/about
        \________________________________/\____/
                    base URL           balloon_resources
```

```yaml
---
balloon_resources: "/about"
---
```

> default: error will occur in page

### weight

You can adjust the order of item inside balloon by explicit specifying weight.

> default: sort pages by alphabetical order

## Trick

Hugo supports an amazing feature called **Headless Bundle**, which elegantly resolved the resouces publish issue.

For example, if you don't want to publish the resouces of the balloon layout, you can create a leaf bundle and specified `headless = true` in `index.md`'s front-matter. These resources will only be used during rendering process. In other word, no file will be generated to `/public` folder.

Checkout [Headless Bundle](https://gohugo.io/content-management/page-bundles/#headless-bundle) for more details.
