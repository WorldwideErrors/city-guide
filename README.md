# City Guide Web App
For Front-End Development we got a guide to build our own PWA (Progressive Web App). 
The base of this application was a city guide app about Eindhoven and Tilburg.

To make it more of my own work I made it more efficient by adding loose components and made it more future-proof.
I did this by adding a few files. 

## Infrastructure and Domain (Services)

First I added city.ts. City.ts is the interface of a city, basically a blueprint about what a city needs for existing.
cities.ts is the file where all the cities are coming from, it's basically our data source. This one is existing of city.ts "components". These are all made in the same way. 

The city.repository.ts is responsible for their own tasks, its basically a kind of service level where it is making the "queries". I can in this case get the city by their name. It gives the information from cities to the application without making the application be able to do anything else with this data. It's not able to manipulate or delete the data.

## Components
Because it is a tutorial where I only want to show some of the basics, to make sure I am able to use it in my own projects, I made some loose components, but did not build the whole application in components. In a real project I would have rebuild the whole application and made the whole page out of components. 

In this case we have the HeaderSection and the HeaderButtons. The headerbuttons are used, as nullable, in the HeaderSection. This is because HeaderSection is used twice in the city pages, but also in the homepage. The only difference is that in the homepage there are two buttons added. To make the code as maintainable as possible I did reuse the code and did not use code duplication.

We also have the todo card, transport section and factitems. These are also components that are used multiple times in the code, which made me want to move it to a component. 

## Benefits of a PWA
Why build a PWA? Progressive Web Apps combine the best of web and mobile apps. Users can install your site like a native app, use it offline, and get a fast, app-like experience - all without app store approval or downloads.

- Installable app that users can add to their home screen
- Offline functionality so your app works without internet
- Fast loading with smart caching strategies
- Native app feel with custom icons and splash screens
- Modern UI built with Tailwind CSS v4

## Tech Stack
- React + Typescript
- Next.JS
- Tailwindcss
- @ducanh2912/next-pwa

## File Explorer


## Installation
```
git clone https://github.com/WorldwideErrors/city-guide
cd my-city-guide

npm install

npm run dev
```
### Or run it as PWA
If you want to run it as a PWA you can build it and start it after doing npm install.

```
npm run build

npm start
```
