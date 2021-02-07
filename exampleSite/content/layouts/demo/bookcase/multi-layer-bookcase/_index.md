---
title: 'Multi-Layer Bookcase'
bookcase_cover_src: '/hugo-theme-artisan/bookcase.png'
type: 'bookcase'
bookcase_mode: 'expand'
weight: -500
---

## Multi-Layer Bookcase

Bookcase layout can expand each subsection's contents (another subsections or regular pages) to a layer of bookcase.

It's useful if subsection is only used for categorize the inner content.

```
.
├── books <- category
│   ├── arts-and-photography <- inner subsection
│   │   └── _index.md
│   ├── biographies-and-memoirs
│   │   └── _index.md
│   ├── business-and-money
│   │   └── _index.md
│   └── _index.md
├── _index.md <- you are here
└── popular-in-books
    ├── award-winner
    │   └── _index.md
    ├── bargain-books
    │   └── _index.md
    └── _index.md
```
