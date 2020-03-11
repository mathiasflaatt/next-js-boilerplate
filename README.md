# Next.js bootsrap

- Node.js
- Express
- Next.js
- Typescript

## Projectstructure

#### /components

Here we add React-components where the pages in /pages, can use.

#### /lib

Her we add utillity functions, (hooks, typings, ect.)

#### /pages

Each file is a "React-page". Pages that starts with '_' is special that overrides standard behaviour in next.js

#### /server

Add backend logic here.


#### /public/static

Here we find static files.
Served by express on /s, when fetching use `assetBase` from `@libs/util`

## Environment

| Key                  | Default value                                  |
| -------------------- | ---------------------------------------------- |
| HOST_URL             | http://localhost:4000/                         |
| PORT                 | 4000                                           |
| VERSION              | x.x.x                                          |
| SESSION_SECRET       | some-session-secret                            |



## Configuration

Add `.env`, in root and override default environment variables.

## Build/run

    npn install
    npm run dev
