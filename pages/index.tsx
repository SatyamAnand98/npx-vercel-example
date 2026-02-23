import Head from "next/head";
import Image from "next/image";

type ResourceCard = {
  title: string;
  href: string;
  description: string;
};

const resourceCards: ResourceCard[] = [
  {
    title: "Docs",
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
    description: "Find in-depth information about Next.js features and API."
  },
  {
    title: "Learn",
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
    description: "Learn about Next.js in an interactive course with quizzes."
  },
  {
    title: "Templates",
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
    description: "Explore starter templates for Next.js."
  },
  {
    title: "Deploy",
    href: "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSatyamAnand98%2Fnpx-vercel-example%2Ftree%2Fmain&project-name=npx-vercel-example&repository-name=npx-vercel-example&integration-ids=oac_jnzmjqM10gllKmSrG0SGrHOH",
    description: "Instantly deploy this starter from SatyamAnand98/npx-vercel-example."
  }
];

const gumletRawEmbedValue = process.env.NEXT_PUBLIC_GUMLET_EMBED_URL;

function getEmbedSrcFromRawValue(rawValue: string): string {
  const trimmed = rawValue.trim();
  if (!trimmed) return "";

  const iframeSrcMatch = trimmed.match(/src=["']([^"']+)["']/i);
  return iframeSrcMatch?.[1] ?? trimmed;
}

function buildGumletIframeUrl(rawValue: string | undefined): string | null {
  if (!rawValue) return null;

  const embedSrc = getEmbedSrcFromRawValue(rawValue);
  if (!embedSrc) return null;

  try {
    const url = new URL(embedSrc);
    url.searchParams.set("playsinline", "1");
    url.searchParams.set("preload", "true");
    if (!url.searchParams.has("autoplay")) url.searchParams.set("autoplay", "1");
    if (!url.searchParams.has("muted")) url.searchParams.set("muted", "1");
    return url.toString();
  } catch {
    return null;
  }
}

export default function HomePage() {
  const gumletEmbedUrl = buildGumletIframeUrl(gumletRawEmbedValue);
  const gumletConnected = Boolean(gumletEmbedUrl);

  return (
    <>
      <Head>
        <title>Gumlet + Next.js Starter</title>
        <meta
          name="description"
          content="A Next.js starter that showcases Gumlet integration with a production-ready landing layout."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="page-shell">
        <div className="top-row">
          <p className="chip">
            Pages Router: Get started by editing <code>pages/index.tsx</code>
          </p>
          <a
            className="by-vercel"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noreferrer"
          >
            <span>By</span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority />
          </a>
        </div>

        <section className="hero">
          <div className="brand-row" aria-label="Next.js plus Gumlet">
            <Image src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
            <span className="brand-plus">+</span>
            <span className="gumlet-brand">
              <Image src="/logo192.png" alt="" width={28} height={28} />
              <span>Gumlet</span>
            </span>
          </div>

          <h2 className={gumletConnected ? "status connected" : "status"}>
            {gumletConnected
              ? "You are connected to Gumlet!"
              : "You are NOT connected to Gumlet. Check the README for setup."}
          </h2>

          <p className="router-note">
            This page uses the <strong>Pages Router</strong> for a Gumlet embed workflow.
          </p>
        </section>

        <section className="embed-panel" aria-labelledby="gumlet-panel-title">
          <h3 id="gumlet-panel-title">Gumlet Embed Preview</h3>

          {gumletEmbedUrl ? (
            <>
              <div className="player-wrap">
                <iframe
                  title="Gumlet Player"
                  src={gumletEmbedUrl}
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <p className="embed-debug">
                If the player area is black, open directly:{" "}
                <a href={gumletEmbedUrl} target="_blank" rel="noreferrer">
                  Open Gumlet player
                </a>
              </p>
            </>
          ) : (
            <div className="embed-placeholder">
              Set <code>NEXT_PUBLIC_GUMLET_EMBED_URL</code> in <code>.env.local</code> to render your
              Gumlet player.
            </div>
          )}
        </section>

        <section className="links-grid" aria-label="Next.js resources">
          {resourceCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noreferrer"
              className="resource-card"
            >
              <h3>
                {card.title}{" "}
                <span className="resource-arrow" aria-hidden="true">
                  -&gt;
                </span>
              </h3>
              <p>{card.description}</p>
            </a>
          ))}
        </section>
      </main>
    </>
  );
}
