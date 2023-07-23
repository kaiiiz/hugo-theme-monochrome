---
title: 'Recent Posts'
---

# Recent Posts

Render recent posts list

## Usage

```
{{</* recent-posts sortby="" limit="" */>}}
```

Paramters:

* `sortby`: `publishDate` or `lastMod`
* `limit`: positive integer, `0` means unlimited

## Examples

```html
{{</* recent-posts sortby="lastMod" limit=5 */>}}
```

{{< recent-posts sortby="lastMod" limit=5 >}}
