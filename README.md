# TOTVS Front-end Challenge

All the instructions, architecture and decisions about the project can be found below.

## Language and Framework

Following the challenge recommendation, it was used JavaScript and its framework, React.

## Dependencies

- [TypeScript](https://www.typescriptlang.org/): it types the code at runtime.
- [Styled Components](https://styled-components.com/): it optimizes the styling experience for React components.
- [React Icons](https://react-icons.github.io/react-icons/): an easier way to get svg icons as React components.
- [React Leaflet](https://react-leaflet.js.org/): it provides bindings between React and [Leaflet](https://leafletjs.com/), rendering all mapping features.

## Architecture

This project architecture was created in order to support its growth and keep it organized.

**Project Tree**

```
├── public
│  ├── favicon.ico
│  └── index.html
├── src
│  ├── __mocks__
│  │  ├── activities.ts
│  │  ├── user-finances.ts
│  │  └── user-info.ts
│  ├── components
│  │  ├── Header
│  │  │  ├── index.tsx
│  │  │  └── styles.ts
│  │  ├── Section
│  │  │  ├── index.tsx
│  │  │  └── styles.ts
│  │  ├── SectionTitle
│  │  │  ├── index.tsx
│  │  │  ├── styles.ts
│  │  │  └── types.d.ts
│  │  ├── Sidebar
│  │  │  ├── index.tsx
│  │  │  └── styles.ts
│  │  ├── SquareNumber
│  │  │  ├── index.tsx
│  │  │  ├── styles.ts
│  │  │  └── types.d.ts
│  │  └── Timeline
│  │     ├── hooks.tsx
│  │     ├── index.tsx
│  │     ├── styles.ts
│  │     └── types.d.ts
│  ├── pages
│  │  └── Home
│  │     ├── Activities
│  │     │  ├── hooks.tsx
│  │     │  ├── index.tsx
│  │     │  ├── styles.ts
│  │     │  └── types.d.ts
│  │     ├── Assets
│  │     │  ├── hooks.tsx
│  │     │  ├── index.tsx
│  │     │  ├── styles.ts
│  │     │  └── types.d.ts
│  │     ├── Credit
│  │     │  ├── hooks.tsx
│  │     │  ├── index.tsx
│  │     │  └── styles.ts
│  │     ├── Info
│  │     │  ├── hooks.tsx
│  │     │  ├── index.tsx
│  │     │  ├── styles.ts
│  │     │  └── types.d.ts
│  │     ├── Local
│  │     │  ├── index.tsx
│  │     │  └── styles.ts
│  │     ├── Opportunities
│  │     │  ├── hooks.tsx
│  │     │  ├── index.tsx
│  │     │  └── styles.ts
│  │     ├── Sales
│  │     │  ├── index.tsx
│  │     │  └── styles.ts
│  │     ├── index.tsx
│  │     └── styles.ts
│  ├── styles
│  │  └── GlobalStyles.ts
│  ├── App.tsx
│  ├── index.tsx
│  ├── react-app-env.d.ts
│  └── types.d.ts
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

The simplified version of the project tree is described below:

- **components**: react components used inside the pages and that can be reusable
- **pages**: homepage and components used in it
- **styles**: global styles to be used in the entire application

## Settings

You must have Git installed in your machine to download the following GitHub repository:

- https://github.com/danielejsantos/frontend-challenge

Or you can download it by following the command:

`git clone https://github.com/danielejsantos/frontend-challenge.git`

Then, you must install its dependencies. At the root, run the command:

```
# with yarn:
yarn install
# with npm:
npm install
```

## How to run

Navigate to the root folder and run the following command:

```
# with yarn:
yarn start
# with npm:
npm start
```
