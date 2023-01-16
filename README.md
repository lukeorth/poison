# Poison

![Poison screenshot](https://raw.githubusercontent.com/lukeorth/poison/master/images/screenshot.png)

### DEMO - https://poison-theme.netlify.app/

*Poison* is a **clean**, **professional** Hugo theme designed to **captivate** your readers.

It's also **tiny** and **privacy conscious** with *no external dependencies*.  That's right---no JavaScript frameworks, icon packs, or Google fonts.  No ads or trackers polluting your console window (try it out and take a look).  

**We kept things simple**.  A little vanilla JavaScript, a dash of CSS, and the power of Hugo.

All of the static assets for the site (JS files, CSS, and fonts) are located within the theme's */static/* directory.  **That way you know *exactly* what's going on your site**.

---

## Contents

- [Features](#features)
  - [Light and Dark mode](#light-and-dark-mode)
  - [Table of contents](#table-of-contents)
  - [Series](#series)
  - [KaTeX](#katex)
  - [Tabs](#tabs)
- [Installation](#installation)
- [How to Configure](#how-to-configure)
  - [The Sidebar Menu](#the-sidebar-menu)
  - [Example Config](#example-config)
- [Author](#author)
- [Ported by](#ported-by)
- [License](#license)

## Features

In addition to the standard Built-in templates and shortcodes that come with Hugo, *Poison* offers some unique features of its own.

### Light and Dark Mode
Give readers the choice to read in light or dark mode.  The user's preference is stored in local storage.  Light mode is the default for first time visitors, but you can change this in your config file.
<p float="left">
  <img src="https://user-images.githubusercontent.com/35306887/210615342-ab3e0b88-fbd2-405a-bad1-2fa8b21982be.png" width="700" />
  <img src="https://user-images.githubusercontent.com/35306887/210615432-7484c310-0b0d-46eb-b491-4b50c2e8a2aa.png" width="700" />
</p>

### Table of Contents
Provide a floating table of contents for readers with large enough screens (i.e. *screen-width > 1600 pixels*).

### Series
Sensibly link and display content into "series" (i.e. *Tutorial One*, *Tutorial Two*, etc.).
   
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

### KaTeX
Make your mathematical notations pop.

For notations that should appear on their own line, use the block quotes `$$ ... $$`
    
$$ 5 \times 5 = 25 $$

For notations that should appear on the same line, use the inline quotes `$ ... $`
    
### Tabs
Some content is just better viewed in tabs.  Luckily we have a shortcode for that.
<p float="left">
  <img src="https://user-images.githubusercontent.com/35306887/210614932-5b2e53e7-8f8e-436a-b3c6-905f33018688.png" width="700" />
  <img src="https://user-images.githubusercontent.com/35306887/210615011-b9d4e670-1713-43fe-b285-a33ca285df73.png" width="700" />
</p>

Here's the code for the tabs shown above...

```
{{</* tabs tabTotal="2" */>}}

{{%/* tab tabName="First Tab" */%}}
This is markdown content.
{{%/* /tab */%}}

{{</* tab tabName="Second Tab" */>}}
{{</* highlight text */>}}
This is a code block.
{{</* /highlight */>}}
{{</* /tab */>}}

{{</* /tabs */>}}
```
 
## Installation

First, clone this repository into your `themes` directory:

```
git clone https://github.com/lukeorth/poison.git themes/poison --depth=1
```

Next, specify `poison` as the default theme in your config.toml file by adding the following line:

```
theme = "poison"
```

Lastly, if there are any future updates to this repository that you wish to include in your local copy, these can be retrieved by running:

```
cd themes/poison

git pull
```

For more information on how to get started with Hugo and themes, read the official [quick start guide](https://gohugo.io/getting-started/quick-start/).

## How to Configure

After successfully installing *Poison*, the last step is to configure it.

### The Sidebar Menu

Any items you want displayed in your sidebar menu *must* satisfy two requirements.  They must:

1. Have a corresponding markdown file in your */content/* directory.
2. Be declared in your *config.toml* file (example below).

There are two types of menu items:

1. **Single Page** -- The *About* menu item (to the left) is a good example of this.  It displays a direct link to an individual page.
2. **List** -- The *Posts* menu item is a good example of this.  It displays a directory and dynamically lists the contents (i.e. pages) contained by date.  List items have two optional configurations: a subheading (like the *Recent* subheading that appears on the menu to the left), and a maximum number of items to display.

The sidebar menu items are configured with a dictionary value in your *config.toml* file.  I've included an example below.  Additionally, there is a placeholder for this in the *config.toml* file shown in the next section.

**Important**: You *must* have a markdown file present at the path specified in order for your menu item to be displayed.

```toml
menu = [
        # Dict keys:
            # Name:         The name to display on the menu.
            # URL:          The directory relative to the content directory.
            # HasChildren:  If the directory's files should be listed.  Default is true.
            # Limit:        If the files should be listed, how many should be shown.

        # SINGLE PAGE
        # Note that you must put your markdown file 
        # inside of a directory with the same name.

        # Example:
        # ... /content/about/about.md
        {Name = "About", URL = "/about/", HasChildren = false},
        
        # LIST
        # This example has a subheading of "Recent"
        # and will display up to 5 items.

        # Example:
        # ... /content/posts/introducing-poison.md
        {Name = "Posts", URL = "/posts/", Pre = "Recent", HasChildren = true, Limit = 5},

        # Example of a list without a subheading or limit.
        {Name = "Projects", URL = "/projects/"},
    ]
```

### Example Config
I recommend starting by copying/pasting the following code into your config.toml file.  Once you see how it looks, play with the settings as needed.

**NOTE**: To display an image in your sidebar, you'll need to uncomment the `brand_image` path below and have it point to an image file in your project.  The path is relative to the `static` directory.  If you don't have an image, just leave this line commented out.

```toml
baseURL = "/"
languageCode = "en-us"
theme = "poison"
paginate = 10
pluralizelisttitles = false

[params]
    brand = "Poison"                    # name of your site - appears in the sidebar
    # brand_image = "/images/test.jpg"    # path to the image shown in the sidebar
    description = "Update this description..."
    dark_mode = true                    # optional - defaults to false

    # MENU PLACEHOLDER
    # Menu dict keys:
        # Name:         The name to display on the menu.
        # URL:          The directory relative to the content directory.
        # HasChildren:  If the directory's files should be listed.  Default is true.
        # Limit:        If the files should be listed, how many should be shown.
    menu = [
        {Name = "About", URL = "/about/", HasChildren = false},
        {Name = "Posts", URL = "/posts/", Pre = "Recent", HasChildren = true, Limit = 5},
    ]

    # Links to your socials.  Delete any you don't need/use. 
    github_url = "https://github.com"
    linkedin_url = "https://linkedin.com"
    twitter_url = "https://twitter.com"
    discord_url = "https://discord.com"
    youtube_url = "https://youtube.com"
    instagram_url = "https://instagram.com"
    facebook_url = "https://facebook.com"

    # Hex colors for your sidebar.
    sidebar_bg_color = "#202020"            # default is #202020
    sidebar_img_border_color = "#515151"    # default is #515151
    sidebar_p_color = "#909090"             # default is #909090
    sidebar_h1_color = "#FFF"               # default is #FFF
    sidebar_a_color = "#FFF"                # default is #FFF
    sidebar_socials_color = "#FFF"          # default is #FFF
    moon_sun_color = "#FFF"                 # default is #FFF
    moon_sun_background_color = "#515151"   # default is #515151

    # Hex colors for your content in light mode.
    text_color = "#222"             # default is #222
    content_bg_color = "#FAF9F6"    # default is #FAF9F6
    post_title_color = "#303030"    # default is #303030
    list_color = "#5a5a5a"          # default is #5a5a5a
    link_color = "#268bd2"          # default is #268bd2
    date_color = "#515151"          # default is #515151

    # Hex colors for your content in dark mode
    text_color_dark = "#eee"            # default is #eee
    content_bg_color_dark = "#121212"   # default is #121212
    post_title_color_dark = "#DBE2E9"   # default is #DBE2E9
    list_color_dark = "#9d9d9d"         # default is #9d9d9d
    link_color_dark = "#268bd2"         # default is #268bd2
    date_color_dark = "#9a9a9a"         # default is #9a9a9a

[taxonomies]
    series = 'series'
    tags = 'tags'
```

## Author
**Mark Otto**
- <https://github.com/mdo>
- <https://twitter.com/mdo>

## Ported By
**Luke Orth**
- <https://github.com/lukeorth>

## License

Open sourced under the [GNU General Public License v3.0](LICENSE.md).
