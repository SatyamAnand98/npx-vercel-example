## Example app using Gumlet

[Gumlet](https://www.gumlet.com/) is a video hosting and delivery platform. This example shows how to integrate a Gumlet embed player into a Next.js app.

If you want to learn more about Gumlet, visit the following pages:

- [Gumlet Website](https://www.gumlet.com/)
- [Gumlet Docs](https://docs.gumlet.com/)

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSatyamAnand98%2Fnpx-vercel-example%2Ftree%2Fmain&project-name=npx-vercel-example&repository-name=npx-vercel-example&integration-ids=oac_jnzmjqM10gllKmSrG0SGrHOH)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap this example:

```bash
npx create-next-app my-gumlet-app --example "https://github.com/SatyamAnand98/npx-vercel-example"
```

```bash
yarn create next-app my-gumlet-app --example "https://github.com/SatyamAnand98/npx-vercel-example"
```

```bash
pnpm create next-app my-gumlet-app --example "https://github.com/SatyamAnand98/npx-vercel-example"
```

## Configuration

### Set up a Gumlet player

Create a Gumlet video/playlist and copy either:

- the direct embed URL, or
- the full iframe snippet from Gumlet.

### Set up environment variables

Copy the `.env.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.example .env.local
```

Set each variable in `.env.local`:

- `NEXT_PUBLIC_GUMLET_EMBED_URL` - Your Gumlet embed URL (or iframe snippet source).

### Run Next.js in development mode

```bash
npm install
npm run dev
# or
yarn install
yarn dev
# or
pnpm install
pnpm dev
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000).

You will see either:

- `You are connected to Gumlet!`, or
- `You are NOT connected to Gumlet. Check the README for setup.`

If the player frame appears but playback area is black, use the `Open Gumlet player` link below the embed to verify the source URL directly.

## Deploy on Vercel

You can deploy this app to the cloud with [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

#### Deploy Your Local Project

To deploy your local project to Vercel, push it to GitHub/GitLab/Bitbucket and [import to Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example).

**Important**: When you import your project on Vercel, make sure to click on **Environment Variables** and set them to match your `.env.local` file.

#### Deploy from This Template

Alternatively, you can deploy using this template by clicking the Deploy button below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSatyamAnand98%2Fnpx-vercel-example%2Ftree%2Fmain&project-name=npx-vercel-example&repository-name=npx-vercel-example&integration-ids=oac_jnzmjqM10gllKmSrG0SGrHOH)
