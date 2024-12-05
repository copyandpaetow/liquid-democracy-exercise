# Liquid Democracy Coding Exercise

## Setup

clone the repo into a folder of your choice and move to it. From there its:

```
cd liquid-democracy-exercise/
npm install
npm run dev
```

## Assumptions

- this is the start of a bigger codebase
- the data needs to be fetched from an API and is likely be pagninated (300 entries but only 6 visible)
- no assets were provided, so I either copied them or look for something similar
- CSR is used for simplicity, realistically this would be a SSR/SSG project
- no external libraries should be used

## Things left out on purpose

- tests
- a dedicated favicon
- any configuration like prettier/eslint/tsconfig etc. The default react-vite settings were used
- testing on other browsers besides Chrome

## notes
- as part of the assumption about the api I included a loading error in 25% of the cases. You might need to refresh if that happens
- the data is mostly dynamic and vary between reloads
- the design respects the dark/light mode settings of the browser / os. This can be set in the devTools e.g. chrome devTools > rendering > emulate CSS media feature prefers-color-scheme
