# Gumlet + Next.js Starter

A Next.js Pages Router starter, customized for **Gumlet integration**.

## Included in the UI

- Docs link:
  `https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app`
- Learn link:
  `https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app`
- Templates link:
  `https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app`
- Deploy link (uses `main` branch of `SatyamAnand98/npx-vercel-example`):
  `https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSatyamAnand98%2Fnpx-vercel-example%2Ftree%2Fmain&project-name=npx-vercel-example&repository-name=npx-vercel-example&integration-ids=oac_jnzmjqM10gllKmSrG0SGrHOH`

## Run locally

```bash
npm install
npm run dev
```

## Gumlet integration

1. Create `.env.local`.
2. Add your Gumlet embed value (URL or full iframe snippet):

```bash
NEXT_PUBLIC_GUMLET_EMBED_URL=https://play.gumlet.io/embed/playlist/<playlist_id>
```

3. Reload the page to see your Gumlet player rendered in the embed panel.
4. If the player frame is visible but playback is black, use the "open player directly" link shown below the iframe.
