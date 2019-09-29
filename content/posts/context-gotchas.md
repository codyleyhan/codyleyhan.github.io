---
title: "Go Context Gotchas"
date: 2019-09-29T11:36:41-07:00
description: "Common gotchas around using Go contexts"
draft: false
toc: false
images:
summary: "Potential problems or bugs you might run into when using go contexts."
tags:
  - context
  - go
  - golang
  - middleware
---

[Context](https://golang.org/pkg/context/) in Go are an extremely useful utility when developing services in order to propagate information beyond a
function.  The problem is there are a number of gotchas that make working with context somewhat difficult.