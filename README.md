## Description

> - A backend application that examines the file metadata using NodeJS. The main
    technology stack used in this project are REST APIs, TypeScript, ExpressJS,
    and NodeJS.

<br />

[Screencast from Sunday, 26 March, 2023 07:21:37 PM PST.webm](https://user-images.githubusercontent.com/69438999/227772355-9ef73e7e-abef-4961-b08b-c0e2b9d30d1b.webm)



<br />
<br />
<br />

## Setup

> - Create a new `.env` file and put the corresponding `key-value` pairs.

```bash
# * Local
PORT=
```

<br />

> - Run the following commands.

```bash
yarn install
yarn build
yarn dev
```

<br />
<br />
<br />


## REST API Endpoints
> - Analyse a file.
```bash
# Upload a File
HTTP METHOD: POST
URL: http://localhost:15000/api/analyse
Body (Form Data): { upfile: File }
```
