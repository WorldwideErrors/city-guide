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
city-guide/
├── app/                    # Next.js application directory
├── shared/                 # Shared business logic and data layer
├── public/                 # Static assets
├── package.json
├── tsconfig.json
└── next.config.ts

### /app - Application Layer
The app directory contains all Next.js application code, including pages, layouts, and UI components.
Key responsibilities:

- Page routing and layouts
- UI rendering
- User interaction handling
- Component composition

### /app/components - Reusable UI Components
This directory houses reusable React components that promote code maintainability and prevent duplication.
Component examples:

HeaderSection - Main header component used across pages

Accepts optional HeaderButtons as children
Used on homepage (with buttons) and city pages (without buttons)

- HeaderButtons - Navigation buttons for the homepage
- TodoCard - Reusable card component for displaying to-do items
- TransportSection - Component for displaying transportation information
- FactItems - Component for rendering city facts

### /shared - Shared Business Logic
The shared directory contains code that can be reused across the entire project or even in other projects.
Key responsibilities:

- Domain models and interfaces
- Data repositories
- Business logic
- Type definitions

### /shared/domain - Domain Layer
Contains the core business entities and type definitions that represent the application's domain model.

city.ts - The City interface (blueprint)

Defines the structure and properties a city must have
Ensures type safety across the application

Purpose:
- Defines the "shape" of data
- Provides TypeScript interfaces for type checking
- Documents what properties entities should have
- Serves as contracts between different layers

### /shared/infrastructure - Infrastructure Layer
Contains the data access logic and repositories that interact with data sources.

cities.ts - The data source
- Contains all city data
- Structured according to the City interface from domain layer
- Acts as the "database" for this tutorial project

city.repository.ts - The Repository service
- Encapsulates data access logic
- Provides clean API for querying cities
- Separates data access from business logic

Key benefits:
- Separation of concerns: Data access is isolated from UI components
- Read-only access: Application can query but not modify data
- Abstraction: Components don't need to know where data comes from
- Future-proof: Easy to swap data source (API, database, etc.) without changing components

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
