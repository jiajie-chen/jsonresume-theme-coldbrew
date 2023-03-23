# @jiajie-chen/jsonresume-theme-coldbrew

This is the Coldbrew theme repository for the [Json Resume](https://jsonresume.org/) project.
It was originally forked from the [json-resume-caffeine](https://github.com/kelyvin/jsonresume-theme-caffeine) project.

## Table of Contents

-   [Installation](#installation)
-   [Features](#features)
-   [Getting Started](#getting-started)
-   [Running](#running)
-   [Theme Overrides](#theme-overrides)
    -   [Icons](#icons)
    -   [About](#about)
    -   [Colors](#colors)
-   [Developer Environment](#developer-environment)
-   [Creating your resume.json](#creating-your-resumejson)
-   [Building the project](#building-the-project)
-   [Exporting your resume](#exporting-your-resume)

## Installation

This project relies on [resumed](https://github.com/rbardini/resumed) to generate resumes using this theme.
Note that [resume-cli](https://github.com/jsonresume/resume-cli) may not work, as this theme uses
async rendering.

You can install this theme by running:

```bash
npm install @jiajie-chen/jsonresume-theme-coldbrew
```

## Features

This theme environment comes equipped with the following features to make your development environment easier:

-   **Vite** for building and testing.
-   **Sass** and **Preact with Typescript** support for styling and templating.

## Getting Started

When building the project for the very first time, run the following command to install all of your packages.

```bash
npm install
```

## Running

To run the project, simply run the following command

```bash
npm run dev
```

Running the command above will automatically build your project, load your resume with the theme, listen for changes, and automatically refresh the browser on file changes.

## Creating your resume.json

This project comes with `resume-sample.json` in `src/assets/`, which is a sample json resume you can build from.

Please review the [schema here](https://jsonresume.org/schema/) when creating your `resume.json`.

Review the [resumed](https://github.com/rbardini/resumed) docs to see how to build resumes from JSON using this theme.

### Icons

All the icons used in the theme are generated through [Font-Awesome](http://fontawesome.io/). So make sure the `network` key that you specify within your `profiles` json config matches the corresponding font-awesome style name. For example:

```
"profiles": [
  {
    "network": "Twitter",
    ...
  },
  {
    "network": "Facebook",
    ...
  }
```

The Twitter and Facebook network keys will be appended to `fa-` to generate `fa-twitter` and `fa-facebook` respectively. Be sure to search within the [font awesome icons](http://fontawesome.io/icons/) to figure out the correct network name you want to use for the icon (i.e. if you want to use a different facebook icon, change the network name to [Facebook-Official](http://fontawesome.io/icon/facebook-official/) or [Facebook-Square](http://fontawesome.io/icon/facebook-square/)).

### About

The entire about section on the left column is populated through the `basics` json config. This section is intentionally kept narrow to provide a quick summary and prevent it from taking up too much real estate on the resume.

However, unfortunately it may be too narrow for folks with really long emails or website names. You can adjust the width of the left column by going into `src/styles/utils/_variables.scss` and adjusting the two following variables:

    ```
    $aside-width            : 160px;
    $aside-margin           : 20px;
    ```

    `aside-width` will determine how wide to keep the left column, and `aside-margin` will determine how much space you want to leave between the left column and the main content on the right.

### Colors

If you want to change the default color used within the theme with your own custom color, change the `$primary-color` variable within `variable.scss` with your own.

```
$primary-color          : $slate-green;
```
