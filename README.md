# Astro News

A news site Created with Astro

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   └── components/
│       └── bases/
│           └── head.astro
│   └── content/
│       └── articles/
│           └── article-01/
│               └── images/
│                   └── cover-article-01.png
│               └── index.md
│           └── article-02/
│               └── images/
│                   └── cover-article-02.png
│               └── index.md
│       └── authors/
│           └── john-doe/
│               └── avatar.jpg
│               └── index.md
│       └── categories/
│           └── bussiness.json
│       └── tags/
│           └── ai.json
│       └── _schema.ts
│       └── config.ts
│   └── pages/
│       └── index.astro
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
