This is a template built with [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

After exec git clone, open the project with your fav code editor and execute the following command:

```sh
npm run first:run

# or

yarn first:run
```

### Run without Docker

If you want to run locally, just exec one of the commands bellow:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Run with Docker


```sh
docker compose -f docker-compose.dev.yml up
# or with -d to run in background
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## About this template

Every time we want to start a new project we need install a bunch of libs and configure everything.
So I decided to create this template to make easier our developer life.

### Libs

- Axios (to make requests)
- Ant Design (ui kit) with tailwind
- Next-International (multi langs)
- React Hook Forms
- React Toastify (beaultiful)
- Zod (schema validation)
- zustand (state manager)

Libs to help with code style and better commits

- Commitlint
- Lint staged
- husky
- prettier
- eslint (default on Next)

## Learn more about Next

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

