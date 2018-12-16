# futugram - backend

Backend of Futugram - A small web application that allows users to upload photos and share them with the wider world.

## Setup

1.  `cp variables.env.sample variables.env`
2.  Fill these variables inside `variables.env`:

    - `PRISMA_ENDPOINT` with a valid Prisma endpoint
    - `PRISMA_SECRET` with a valid Prisma secret key
    - `FRONTEND_URL` with the url of the frontend project (default to http://localhost:7777)
    - `APP_SECRET` with a personal secret key
    - `GOOGLE_GEOCODER_API_KEY` with a Google API key (You can use the same key that you already used for the frontend)

3.  Run `npm install`
4.  Run `npm run dev`
