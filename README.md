# futugram

Futugram - A small web application that allows users to upload photos and share them with the wider world.

## Demo:

Demo [here](https://futugramapp-frontend.herokuapp.com).

## Stack:

- Frontend:

  - React (UI):

    - Next.js: Server Side Rendering, routing and tooling.
    - Styled Components: Styling
    - React-Apollo: Interfacing with Apollo Client

  - Apollo Client (Managing data):
    - Perform GraphQL Mutations and Queries.
    - Caching GraphQL Data.
    - Managing error and loading states.

- Backend:

  - GraphQL Yoga (Express GraphQL Server):

    - Implements Query and Mutation Resolvers.
    - Authentication.
    - Custom logic (Geolocation).

  - Prisma (GraphQL Databse Interface):
    - Queried by Yoga Server.
    - Provides a set of GraphQL CRUD APIs for different database.
    - Schema definition.
    - Data relationships.

## Setup:

To setup the project go inside the `backend` and the `frontend` folders and follow the instructions.
