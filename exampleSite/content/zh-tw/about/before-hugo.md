---
title: '歷史'
weight: -100
gallery_title_link: '/123'
gallery_img_src: 'pottery.jpg'
gallery_img_caption: '<span>Photo by <a href="https://unsplash.com/@mochiel?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Mercy</a> on <a href="https://unsplash.com/s/photos/vase?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>'
gallery_statistic:
- key: key1
  value: value1
- key: key2
  value: value2
- key: key3
  value: value3
---

我在 2018 年初時，透過 [hexo](https://hexo.io/) 建立了第一個我的 blog，當時 hexo 所實現的的功能已經能滿足我的大部分需求。然而隨著時間流逝，我對於內容掌控度的需求逐漸提升，也希望可以有更好的架構能維護我不同類型的資料。

在 2019 年時，我設計與實作了 [hexo-theme-book](https://github.com/kaiiiz/hexo-theme-book)，為 hexo 提供了一個完全客製化的導覽目錄功能，但是因為架構限制而導致這個實作並不完美，仍然需要在 runtime 執行 JavaScript，無法直接透過 template 來生成對應的 HTML。

又過了半年，某一次被別人推坑了 [hugo](https://gohugo.io/)，隨便玩了一下發現他的架構設計十分優秀，文件十分完整，並且 golang 生成頁面的速度相較 node.js 快的非常多。於是在 2020 年的夏天，我開始計畫從 hexo 轉移到 hugo，並嘗試實作一個自己的主題。
