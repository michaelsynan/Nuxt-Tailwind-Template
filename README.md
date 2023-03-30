
![Nuxt TailwindCSS Pinia Template Repo](/public/nuxt-tailwind-starter.png)

![GitHub last commit](https://img.shields.io/github/last-commit/michaelsynan/Nuxt-Tailwind-Template)
![License: MOZ 2.0](https://img.shields.io/badge/license-MLP%202.0-green)

# Nuxt Tailwind Template with Pinia 🎉

**Website demo:** https://michaelsynan.github.io/Nuxt-Tailwind-Template/

Minimal [Nuxt 3](https://nuxt.com/) Tailwind and Pinia starter repo, with assets, layouts, pages and components directories set up. 

**Includes** 👇
- TailwindCSS ([docs](https://tailwindcss.com/docs/installation))
- Pinia ([docs](https://pinia.vuejs.org/core-concepts/))
- unplugin-icons ([repo](https://github.com/antfu/unplugin-icons) | [icon look-up](https://icones.js.org/))
- Basic base styles
- Pages directory
- Default layout
- Optional [Base Layer](https://github.com/michaelsynan/nuxt-base-layer)  for additional comments via extends

## Instructions
```
git clone https://github.com/michaelsynan/Nuxt-Tailwind-Template.git

cd Nuxt-Tailwind-Template/

npm install

npm run dev
```

## Enable & Customize Base Layer
Take advantage of pre-built components using Nuxt extends.

1. Clone the [Base Layer](https://github.com/michaelsynan/nuxt-base-layer) repo.
2. Uncomment in nuxt.config.ts and update Nuxt config file:
```
//  extends: [
//    'github:michaelsynan/nuxt-base-layer#master'
//  ]
```

## Deploy Static Site to GitHub Pages
See this [gist](https://gist.github.com/michaelsynan/307a267eff9b35e1b7f333da5e151e99). 

## Roadmap
 - [x] [Base Layer](https://github.com/michaelsynan/nuxt-base-layer) components via extends
 - [ ] Nuxt 3 Beginners Guide
 
 <br />
