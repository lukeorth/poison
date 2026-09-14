> [!CAUTION]
> This is a fork of https://github.com/lukeorth/poison with personal modifications
> These modifications are purely to fit my needs and may not be backwards compatible with upstream

# Poison

*Poison* is a **clean**, **professional** Hugo theme designed to **captivate** your readers.

It's also **tiny** and **privacy conscious** with *no external dependencies*.  No JavaScript frameworks, icon packs, or Google fonts.  No ads or trackers polluting your console window.  **We kept things simple**.  A little vanilla JavaScript, a dash of CSS, and the power of Hugo.

All the static assets for the site (JS files, CSS, and fonts) are located within the theme's */assets/* directory.  **That way you know *exactly* what's going onto your site**.

## DEMO

See `exampleSite`.

---

## Contents

- [Poison](#poison)
  - [DEMO](#demo)
  - [Contents](#contents)
  - [Features](#features)
    - [Light and dark mode](#light-and-dark-mode)
    - [Table of contents](#table-of-contents)
    - [Series](#series)
    - [KaTeX](#katex)
    - [Tabs](#tabs)
    - [Mermaid diagrams](#mermaid-diagrams)
    - [PlantUML diagrams](#plantuml-diagrams)
    - [Details](#details)
  - [Installation](#installation)
  - [How to Configure](#how-to-configure)
    - [The sidebar menu](#the-sidebar-menu)
    - [The front page](#the-front-page)
    - [Example config](#example-config)
    - [Custom CSS](#custom-css)
  - [Suggestions / Contributions](#suggestions--contributions)
  - [License](#license)

## Features

In addition to the standard Built-in templates and shortcodes that come with Hugo, *Poison* offers some unique features of its own.

### Light and dark mode

Give readers the choice to read in light or dark mode.  The user's preference is stored in local storage.  Dark mode is the default for first time visitors, but you can change this in your config file.

### Table of contents

Provide a floating table of contents for readers with large enough screens (i.e. *screen-width > 1600 pixels*).

If you prefer not to display a table of contents, you can disable them site-wide in your ```config.toml``` file.

```toml
[params]
    hideToc: true
```

Alternatively, you can choose to disable the table of contents on a per-post basis by putting the flag in the frontmatter of an individual post.

```yaml
---
title: "Example to demonstrate how to hide the table of contents on a single post"
date: 2023-07-10
draft: false
hideToc: true
tags: ["Hugo"]
---
```

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

**Note**: *Enabling KaTeX will add external dependencies.*

### Tabs

Some content is just better viewed in tabs.  Luckily we have a shortcode for that.

<p float="left">
  <img src="https://user-images.githubusercontent.com/35306887/210614932-5b2e53e7-8f8e-436a-b3c6-905f33018688.png" width="700" />
  <img src="https://user-images.githubusercontent.com/35306887/210615011-b9d4e670-1713-43fe-b285-a33ca285df73.png" width="700" />
</p>

Here's the code for the tabs shown above...

```md
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

### Mermaid diagrams

You can embed rendered Mermaid diagrams.  

**Note**: *Enabling Mermaid diagrams will add external dependencies.*

![image](https://github.com/lukeorth/poison/assets/35306887/e21041c3-528e-4941-88ba-310742d99c91)

For an example of how to do this, please visit the [Poison demo site](https://poison.lukeorth.com/posts/introducing-poison/#mermaid-diagrams).

### PlantUML diagrams

You can embed rendered PlantUML diagrams.  

**Note**: *Enabling PlantUML diagrams will add external dependencies.*

![image](https://github.com/lukeorth/poison/assets/35306887/8093ff68-28e4-43c8-8f21-67a3d5615af4)

For an example of how to do this, please visit the [Poison demo site](https://poison.lukeorth.com/posts/introducing-poison/#plantuml-diagrams);

### Details

There's a shortcode for encoding detail dropdowns into your pages.

![image](https://github.com/user-attachments/assets/ce2390c1-e4f0-4f70-a65d-7a319f14a859)

Here's the code for the detail dropdown above:

```md
{{</* details summary="A detail dropdown" */>}}
Markdown content
{{</* /details */>}}
```

## Installation

First, clone this repository into your `themes` directory:

```sh
git submodule add https://github.com/TheGroundZero/poison.git themes/poison
git submodule init
git submodule update
```

Next, specify `poison` as the default theme in your *hugo.yaml* file by adding the following line:

```yaml
theme: poison
```

Lastly, if there are any future updates to this repository that you wish to include in your local copy, these can be retrieved by running:

```sh
git submodule update
# or
git pull --recurse-submodules
```

For more information on how to get started with Hugo and themes, read the official [quick start guide](https://gohugo.io/getting-started/quick-start/).

## How to Configure

After successfully installing *Poison*, the last step is to configure it.

### The sidebar menu

> [!CAUTION]
> This fork differs from the upstream repo

Any items you want displayed in your sidebar menu *must* satisfy two requirements.  They must:

1. Have a corresponding markdown file in your */content/* directory.
2. Be declared in your *hugo.yaml* file (example below).

There are two types of menu items:

1. **Single Page** -- The *About* menu item (to the left) is a good example of this.  
   It displays a direct link to an individual page. 
   For arbitrary single pages, the page content must be located at `content/<foo>/index.md`.
2. **List** -- The *Blog* menu item is a good example of this.  
   It displays a directory and dynamically lists the contents (i.e. pages) ordered by date.  
   List items have two optional configurations: a subheading (like the *Recent* subheading that appears on the menu to the left), and a maximum number of items to display.

The sidebar menu items are configured with a dictionary value in your *config* file.  
I've included an example below.  
Additionally, there is a placeholder for this in the *hugo.yaml* file shown in the next section.

**Important**: You *must* have a markdown file present at the path specified in order for your menu item to be displayed.

```yaml
menus:
  main:
    - name: About
      pageRef: /about/          # Use pageRef for local links (path relative to /content)
      weight: 10                # Used for ordering
    - name: Blog
      pageRef: /blog/
      pre: Recent               # Subheading to show before children
      weight: 20
    - name: Post 1
      pageRef: /blog/myfirstpost.md
      weight: 1
      parent: Blog              # Configure this link as a Child of the menu item with the name "Blog"
    - name: External links      # Don't add pageRef or URL for heading
      weight: 30
    - name: Example
      url: https://example.org  # Use URL for external sites
      title: This is an example # Title to be used for link (Name as fallback)
      weight: 31
      params:
        rel: nofollow           # Additional rel attributes
                                # External URLs by default have 'external noopener noreferrer'

```

### The front page

When visiting the base url for the site, i.e. `your.domain.com/`, a paginated feed of your recently added content is displayed in reverse chronological order. By default, only content in the "posts" [page bundle](https://gohugo.io/content-management/page-bundles/) is displayed. You can configure a list of page bundle names to be included on this page by adding the `front_page_content` parameter to your config.toml file.

```toml
[params]
  front_page_content = ["posts", "projects"]
```

### Example config

> [!CAUTION]
> This fork differs from the upstream repo
> Breaking changes in `menus`, `params.social`, and `params.style`. 

I recommend starting by copying/pasting the following code into your *hugo.yaml* file.  Once you see how it looks, play with the settings as needed.

**NOTE**: To display an image in your sidebar, you'll need to uncomment the `remote_brand_image` and set a image URL or the `brand_image` path below and have it point to an image file in your project.  The path is relative to the `static` directory.  If you don't have an image, just leave both lines commented out.

```yaml
baseURL: https://yourdomain.tld
languageCode: "en-us"
theme: "poison"
paginate: 10
pluralizelisttitles: false   # removes the automatically appended "s" on sidebar entries

menus:
  main:
    - name: About
      pageRef: /about/          # Use pageRef for local links (path relative to /content)
      weight: 10                # Used for ordering
    - name: Blog
      pageRef: /blog/
      pre: Recent               # Subheading to show before children
      weight: 20
      params:
        haschildren: true       # Show list of recent children pages
        limit: 5                # Limit children being displayed
    - name: External links      # Don't add pageRef or URL for heading
      weight: 30
    - name: Example
      url: https://example.org  # Use URL for external sites
      title: This is an example # Title to be used for link (Name as fallback)
      weight: 31
      params:
        rel: nofollow           # Additional rel attributes
                                # External URLs by default have 'external noopener noreferrer'

params:
  brand: "Poison"                         # name of your site - appears in the sidebar
  # remote_brand_image = 'https://github.com/USERNAME.png' # path to a remote file
  # brand_image: "/images/test.jpg"       # path to the image shown in the sidebar
  description: Update this description... # Used as default meta description if not specified in front matter
  dark_mode: true                         # optional - defaults to false
  # favicon: "favicon.png"                # path to favicon (defaults to favicon.png)

  front_page_content:
    - posts # Equivalent to the default value, add page bundle names to include them on the front page.

  # NOTE: If you don't want to use RSS, comment or delete the following lines
  # Adds an RSS icon to the end of the socials which links to {{ .Site.BaseURL }}/index.xml
  rss_icon: true
  # Which section the RSS icon links to, defaults to all content. See https://gohugo.io/templates/rss/#section-rss
  rss_section: posts

  social:
    - name: bluesky
      url: https://bsky.app/
      rel: me
    - name: mastodon
      url: https://mastodon.social/
      rel: me
    - name: github
      url: https://github.com/
      rel: me
    - name: twitter
      url: https://twitter.com/
      rel: me

  style:
    # Hex colors for your sidebar.
    moon_sun_background_color: "#515151"   # default is #515151
    moon_sun_color: "#FFF"                 # default is #FFF
    sidebar_a_color: "#FFF"                # default is #FFF
    sidebar_bg_color: "#202020"            # default is #202020
    sidebar_h1_color: "#FFF"               # default is #FFF
    sidebar_img_border_color: "#515151"    # default is #515151
    sidebar_p_color: "#909090"             # default is #909090
    sidebar_socials_color: "#FFF"          # default is #FFF

    # Hex colors for your content in light mode.
    code_color: "#000"                     # default is #000
    code_background_color: "#E5E5E5"       # default is #E5E5E5
    code_block_color: "#FFF"               # default is #FFF
    code_block_background_color: "#272822" # default is #272822
    content_bg_color: "#FAF9F6"            # default is #FAF9F6
    date_color: "#515151"                  # default is #515151
    link_color: "#268BD2"                  # default is #268BD2
    list_color: "#5A5A5A"                  # default is #5A5A5A
    post_title_color: "#303030"            # default is #303030
    table_border_color: "#E5E5E5"          # default is #E5E5E5
    table_stripe_color: "#F9F9F9"          # default is #F9F9F9
    text_color: "#222"                     # default is #222

    # Hex colors for your content in dark mode
    code_color_dark: "#FFF"                        # default is #FFF
    code_background_color_dark: "#515151"          # default is #515151
    code_block_color_dark: "#FFF"                  # default is #FFF
    code_block_background_color_dark: "#272822"    # default is #272822
    content_bg_color_dark: "#121212"               # default is #121212
    date_color_dark: "#9A9A9A"                     # default is #9A9A9A
    link_color_dark: "#268BD2"                     # default is #268BD2
    list_color_dark: "#9D9D9D"                     # default is #9D9D9D
    post_title_color_dark: "#DBE2E9"               # default is #DBE2E9
    table_border_color_dark: "#515151"             # default is #515151
    table_stripe_color_dark: "#202020"             # default is #202020
    text_color_dark: "#EEE"                        # default is #EEE

taxonomies:
    series: series
    tags: tags
```

### Custom CSS

You can override any setting in Poison's static CSS files by adding your own
`/assets/css/99_custom.css` file. For example, if you want to override the title font and
font size, you could add this:

```css
.sidebar-about h1 {
  font-size: 1.4em;
  font-family: "Monaco", monospace;
}
```

## Suggestions / Contributions

Please feel free to add suggestions for new features by opening a new issue in [GitHub](https://github.com/TheGroundZero/poison).

## License

Open sourced under the [GNU General Public License v3.0](LICENSE.md).
