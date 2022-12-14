# [Yellow Teapot | Test](https://yellow-teapot-test.web.app/)

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-red.svg" alt="Version">
</p>

<br>

<p align="center" >
  <img align="center" src="./public/logo.png" width="200">
</p>

<br>

The goal of this test is to recreate a vertical slice of our web app. This will be a simplified version of our “user buy a pack” story.

1. _User land on our landing page with a call to buy packs_
2. _User can browse our packs and see the details of them_
3. _User can buy a pack and reveal the cards he got_
4. _User can see the cards he own_

<br>
<br>

## 💬 **About the Frontend**

Yellow Teapot | Test has a responsive Single Page Application (SPA) Frontend build with the Vue.js (V3) ecosystem and Typescript. Vue's Composition API is heavivly used throughout the application.

> [**Vite**](https://vitejs.dev/), We use the latest Vite version, which aims to reduce project configuration to the minimum possible. Build and roll-up configuration is organized and distributed on several files: package.json, vite.config.json.

> [**Tailwind**](https://tailwindcss.com/) A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup. Tailwind is used along Postcss in the style snippet on Vue File Components. Root configuration can be found in: tailwind.config.js, postcss.config.js and src/assets/index.postcss .

> **CI/CD** This project has a continuos integration and deployment setup using Firebase Hosting as static server and Github Actions for the build. You can check configuration in '/firebase.json', './.firebaserc' and './github/'.

> [**Firebase**](https://firebase.google.com/) Firebase SDK is used across the whole project, with Firestore and Authentication as the main usecases.

<br>

## 🚀 **Onboarding**

You will need a Windows, Mac or Linux computer with command line access and permission to install new system packages. An active Internet connection is required to install the following required software:

- Node https://nodejs.org/en/
- NPM https://www.npmjs.com/
- Yarn https://yarnpkg.com/

To initialize the project, using the terminal, navigate to the folder containing the project and run the `yarn install` command. This will install all the necessary packages and prepare your project for local development. Then you can use `yarn dev`

<br>

## 📓 **Additional Notes**

**Integrated linter**. The style of the application code is configured with **eslint** and **prettier**, in case of any style error we suggest you run the `yarn lint` command in the root of the project to solve it.

**Commit Standard**. The project aims to standardize commits as much as possible, therefore we invite you to use the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

**Router Layout System** For a consistent application layout we use a system that handles the content through the application router and children routes that enable dynamic content rendering, while conserving and not reloading the principal layout components such as footer, header, navigation drawer, etc...

<br>
<br>

## 💻 **Browser Support**

Currently, we aim to support the latest two versions of the following browsers:

<img src="https://s3.amazonaws.com/creativetim_bucket/github/browser/chrome.png" width="64" height="64"> <img src="https://cdn.vuetifyjs.com/images/browser/firefox.png" width="64" height="64"> <img src="https://cdn.vuetifyjs.com/images/browser/edge.png" width="64" height="64"> <img src="https://cdn.vuetifyjs.com/images/browser/safari.png" width="64" height="64"> <img src="https://cdn.vuetifyjs.com/images/browser/opera.png" width="64" height="64">
