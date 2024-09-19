---
title: CSS Tutorial
description: This is a brief CSS tutorial for beginners and advanced learners.
slug: cssTutorial
date: "2023-10-01"
author: "Adnan"
image: /img3.png
---

# Introduction

[CSS] (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. In this tutorial, we will cover the basics of CSS, including syntax, selectors, properties, and more.

## Table of Contents

1. [What is CSS?](#what-is-css)
2. [Setting Up the Environment](#setting-up-the-environment)
3. [Basic Syntax](#basic-syntax)
4. [Selectors](#selectors)
5. [Properties](#properties)
6. [Box Model](#box-model)
7. [Flexbox](#flexbox)
8. [Grid](#grid)
9. [Responsive Design](#responsive-design)
10. [Conclusion](#conclusion)

## What is CSS?

CSS is a stylesheet language that allows you to control the layout and appearance of your web pages. It is one of the core technologies of the World Wide Web, alongside [HTML] and [JavaScript].

## Setting Up the Environment

Before we start styling, we need to set up our development environment. You can use any text editor like [Visual Studio Code], [Sublime Text], or even Notepad++. Make sure you have a modern web browser like [Google Chrome] or [Firefox].

## Basic Syntax

CSS syntax is the set of rules that define a correctly structured CSS stylesheet. Here are some basic syntax rules:

- A CSS rule consists of a selector and a declaration block.
- The selector points to the HTML element you want to style.
- The declaration block contains one or more declarations separated by semicolons.
- Each declaration includes a CSS property name and a value, separated by a colon.

Example:

```css showLineNumbers
body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}
```

```css showLineNumbers
/* Define some variables using CSS custom properties */
:root {
    --main-bg-color: #f0f0f0;
    --main-text-color: #333;
    --highlight-color: #ff6347;
}

/* Apply styles to the body */
body {
    background-color: var(--main-bg-color);
    color: var(--main-text-color);
    font-family: Arial, sans-serif;
}

h1 {
    color: var(--highlight-color);
    text-align: center;
}

p {
    font-size: 16px;
    line-height: 1.5;
}


button {
    background-color: var(--highlight-color);
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}

button:hover {
    background-color: darken(var(--highlight-color), 10%);
}

```