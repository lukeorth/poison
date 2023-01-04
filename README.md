# Poison

![Poison screenshot](https://github.com/LukeOrth/poison/blob/master/images/screenshot.png)

### DEMO - https://poison-theme.netlify.app/

*Poison* is a **clean**, **professional** Hugo theme designed to **captivate** your readers.

It's also **tiny** and **privacy conscious** with *no external dependencies*.  That's right---no JavaScript frameworks, icon packs, or Google fonts.  No ads or trackers polluting your console window (try it out and take a look).  **We kept things simple**.  A little vanilla JavaScript, a dash of CSS, and the power of Hugo.

All of the static assets for the site (JS files, CSS, and fonts) are located within the theme's */static/* directory.  **That way you know *exactly* what's going on your site**.

---

## Contents

- [Features](#features)
  - [Built-in shortcodes](#built-in-shortcodes)
  - [Light/Dark mode](#light/dark-mode)
  - [Table of contents](#table-of-contents)
  - [Tabs](#tabs)
  - [Tag posts by "Series"](#tag-by-series)
- [Options](#options)
  - [Sidebar menu](#sidebar-menu)
  - [Sidebar description](#sidebar-description)
  - [Sticky sidebar content](#sticky-sidebar-content)
  - [Themes](#themes)
  - [Reverse layout](#reverse-layout)
  - [Disqus](#disqus)
  - [Google Analytics](#google-analytics)
- [Installation](#installation)
- [Author](#author)
- [Ported by](#ported-by)
- [License](#license)

## Features

In addition to the standard Built-in templates and shortcodes that come with Hugo, *Poison* offers some unique features of its own.

- **Light & dark mode** -- Give readers the choice to read in light or dark mode.  The user's preference is stored in local storage.  Light mode is the default for first time visitors, but you can change this in your config file.
- **Table of contents** -- Provide a floating table of contents for readers with large enough screens (i.e. *screen-width > 1600 pixels*).
- **Series** -- Sensibly link and display content into "series" (i.e. *Tutorial One*, *Tutorial Two*, etc.).
   
   This is done with a custom taxonomy, so just add `series` to the frontmatter on the content you'd like to group together.

    ```yaml
    ---
    title: "Example to demonstrate how to use series"
    date: 2022-10-04
    draft: false
    series: "How to use poison"
    tags: ["Hugo"]
    ---
    ```

- **KaTeX** -- Make your mathematical notations pop.

    For notations that should appear on their own line, use the block quotes `$$ ... $$`
    
    $$ 5 \times 5 = 25 $$

    For notations that should appear on the same line, use the inline quotes `$ ... $`
    
- **Tabs** -- Some content is just better viewed in tabs.  Luckily we have a shortcode for that.
![image](https://user-images.githubusercontent.com/35306887/210614932-5b2e53e7-8f8e-436a-b3c6-905f33018688.png)
![image](https://user-images.githubusercontent.com/35306887/210615011-b9d4e670-1713-43fe-b285-a33ca285df73.png)

    ---
    Here's the code for the tabs shown above...

    ```
    {{</* tabs tabTotal="2" */>}}

    {{%/* tab tabName="First Tab" */%}}
    This is markdown content.
    {{%/* /tab */%}}

    {{</* tab tabName="Second Tab" */>}}
    {{</* highlight text */>}}
    This is a code block.
    {{</* highlight */>}}
    {{</* /tab */>}}

    {{</* /tabs */>}}
    ```
 
### Quick Start

To give you a running start this installation puts a fully configured [starter repo](https://github.com/forestryio/hyde-hugo-starter) into your Git account and sets it up in a content manager / CMS. 

_[Forestry](https://forestry.io) Starter-Kit:_

[![Import this project into Forestry](https://assets.forestry.io/import-to-forestry.svg)](https://app.forestry.io/quick-start?repo=forestryio/hyde-hugo-starter&provider=github&engine=hugo&version=0.49)

### Standard Installation

To install Hyde as your default theme, first install this repository in the `themes/` directory:

    $ cd themes/
    $ git clone https://github.com/spf13/hyde.git

Second, specify `hyde` as your default theme in the `config.toml` file. Just add the line

    theme = "hyde"

at the top of the file.


## Options

Hyde includes some customizable options, typically applied via classes on the `<body>` element.


### Sidebar menu

Create a list of nav links in the sidebar by assigning "menu=main" in the front matter, like so:

**TOML**
```toml
theme = "hyde"

[Menus]
  main = [
      {Name = "Github", URL = "https://github.com/username/"},
      {Name = "LinkedIn", URL = "https://www.linkedin.com/in/username/"}
  ]
```

**YAML**
```yaml
theme: "hyde"

Menus:
  main:
    - Name: "Github"
      URL: "https://github.com/username/"
    - Name: "LinkedIn"
      URL: "https://www.linkedin.com/in/username/"
```

### Sidebar description
Customise the describe of your page using `description`, like so:

**TOML**
```toml
theme = "hyde"

[params]
  description = "Your custom description"
```

**YAML**
```yaml
theme: "hyde"

params:
  description = "Your custom description"
```


### Sticky sidebar content

By default Hyde ships with a sidebar that affixes it's content to the bottom of the sidebar. You can optionally disabled this by removing the `.sidebar-sticky` class from the sidebar's `.container`. Sidebar content will then normally flow from top to bottom.

```html
<!-- Default sidebar -->
<div class="sidebar">
  <div class="container sidebar-sticky">
    ...
  </div>
</div>

<!-- Modified sidebar -->
<div class="sidebar">
  <div class="container">
    ...
  </div>
</div>
```


### Themes

Hyde ships with eight optional themes based on the [base16 color scheme](https://github.com/chriskempson/base16). Apply a theme to change the color scheme (mostly applies to sidebar and links).

![Hyde in red](https://f.cloud.github.com/assets/98681/1831229/42b0b354-7384-11e3-8462-31b8df193fe5.png)

There are eight themes available at this time.

![Hyde theme classes](https://f.cloud.github.com/assets/98681/1817044/e5b0ec06-6f68-11e3-83d7-acd1942797a1.png)

To use a theme, add the `themeColor` variable under `params`, like so:

**TOML**
```toml
theme = "hyde"

[params]
  themeColor = "theme-base-09"
```

**YAML**
```yaml
theme: "hyde"

params:
  themeColor: "theme-base-09"
```

To create your own theme, look to the Themes section of [included CSS file](https://github.com/poole/hyde/blob/master/public/css/hyde.css). Copy any existing theme (they're only a few lines of CSS), rename it, and change the provided colors.

### Reverse layout

![Hyde with reverse layout](https://f.cloud.github.com/assets/98681/1831230/42b0d3ac-7384-11e3-8d54-2065afd03f9e.png)

To reverse page orientation, add the `layoutReverse` variable under `params`, like so:

**TOML**
```toml
theme = "hyde"

[params]
  layoutReverse = true
```

**YAML**
```yaml
theme: "hyde"

params:
  layoutReverse: true
```

### Disqus

You can optionally enable a comment system powered by Disqus for the posts. Simply add the variable `disqusShortname` to your config file.

**TOML**
```toml
disqusShortname = "spf13"
```

**YAML**
```yaml
disqusShortname : spf13
```

> **Note:** Previous version 1.0 the Disqus shortname had to be defined inside the `[params]` block.


## Google Analytics

Google Analytics can be enabled by assigning your tracking code to the `googleAnalytics` variable in the config file:

**TOML**
```toml
googleAnalytics = "Your tracking code"
```

**YAML**
```yaml
googleAnalytics: Your tracking code
```

## Author
**Mark Otto**
- <https://github.com/mdo>
- <https://twitter.com/mdo>

## Ported By
**Steve Francia**
- <https://github.com/spf13>
- <https://twitter.com/spf13>

## License

Open sourced under the [MIT license](LICENSE.md).

<3
