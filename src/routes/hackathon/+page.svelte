<script lang="ts">
  import Logo from "$lib/images/oxneurotech_logo.png";
  import BackgroundTrail from "../BackgroundTrail.svelte";

  const luma = "https://luma.com/ceww7ooe";
  const email = "president@oxneurotech.com";
  const pageUrl = "https://oxneurotech.com/hackathon";
  const poster = "/oxford-neurotech-hackathon-poster.jpg";
  const shareText =
    "Join the Oxford NeuroTech Hackathon, 7–8 November 2026 at the Mathematical Institute, Oxford. £5,000+ in prizes, free meals, 150+ builders.";
  const shareLinks = [
    [
      "WhatsApp",
      `https://wa.me/?text=${encodeURIComponent(`${shareText} ${pageUrl}`)}`,
    ],
    [
      "X",
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`,
    ],
    [
      "LinkedIn",
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
    ],
    [
      "Facebook",
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
    ],
  ];
  let shareStatus = $state("");

  async function sharePoster() {
    try {
      const blob = await (await fetch(poster)).blob();
      const file = new File([blob], "oxford-neurotech-hackathon.jpg", {
        type: blob.type || "image/jpeg",
      });
      const withFile = {
        files: [file],
        title: "Oxford NeuroTech Hackathon",
        text: `${shareText} ${pageUrl}`,
      };
      if (navigator.canShare?.(withFile))
        return await navigator.share(withFile);
      if (navigator.share)
        return await navigator.share({
          title: "Oxford NeuroTech Hackathon",
          text: shareText,
          url: pageUrl,
        });
      await navigator.clipboard.writeText(pageUrl);
      shareStatus = "Link copied — paste it anywhere.";
    } catch (error) {
      if ((error as Error).name !== "AbortError")
        shareStatus = "Sharing isn’t available here — use a button below.";
    }
  }

  async function copyLink() {
    await navigator.clipboard.writeText(pageUrl);
    shareStatus = "Link copied.";
  }

  const partnerRoutes = [
    [
      "Suggested £4,000",
      "Track sponsor",
      "Become the exclusive sponsor of one technical track, covering its prizes and a share of venue hire and catering.",
    ],
    [
      "Hardware or in-kind support",
      "BCI equipment partner",
      "Put research-grade BCI systems in teams’ hands all weekend, with the option to open the event with practical training.",
    ],
    [
      "Tools, credits, or support",
      "AI partner",
      "Power decoding models, data pipelines, and agentic projects across all four tracks with your platform.",
    ],
    [
      "Additional £4,000",
      "Headline partner",
      "Become the sole headline partner, with the event presented as “powered by [your company]” across all materials.",
    ],
  ];
  const benefits = [
    [
      "Naming & visibility",
      "Branding across the event, poster, and advertising, with track or official-partner recognition.",
    ],
    [
      "A seat at the table",
      "Nominate an industry judge to join leading Oxford principal investigators on a track panel.",
    ],
    [
      "Talent access",
      "Meet technical participants for recruitment, community building, and early-stage scouting.",
    ],
    [
      "Your platform, on site",
      "Showcase products, run a talk or workshop, and let teams prototype with your hardware or tools.",
    ],
    [
      "Startup pipeline",
      "Get an early look at projects and teams evaluated specifically for startup potential.",
    ],
  ];
</script>

<svelte:head>
  <title>Oxford NeuroTech Hackathon 2026 | OxNeurotech</title>
  <meta
    name="description"
    content="Join the first Oxford NeuroTech Hackathon, 7–8 November 2026 at the Mathematical Institute, Oxford."
  />
  <meta property="og:title" content="Oxford NeuroTech Hackathon 2026" />
  <meta
    property="og:description"
    content="Build innovative solutions at the intersection of neuroscience and technology. 7–8 November 2026, Oxford."
  />
  <meta property="og:url" content={pageUrl} />
  <meta property="og:image" content={`https://oxneurotech.com${poster}`} />
  <meta property="og:image:width" content="891" />
  <meta property="og:image:height" content="1280" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div
  class="min-h-screen overflow-hidden bg-blue-zodiac-800 text-slate-200 selection:bg-coral-blush-500/30"
>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-blue-zodiac-900/90 backdrop-blur-xl"
  >
    <div
      class="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8"
    >
      <a href="/" aria-label="OxNeurotech home"
        ><img src={Logo} alt="OxNeurotech" class="h-11 w-auto" /></a
      >
      <nav
        class="hidden items-center gap-7 font-mono text-xs uppercase tracking-[0.16em] text-slate-400 md:flex"
      >
        <a class="transition hover:text-white" href="#about">About</a>
        <a class="transition hover:text-white" href="#poster">Poster</a>
        <a class="transition hover:text-white" href="#partners">Partners</a>
      </nav>
      <a
        href={luma}
        target="_blank"
        rel="noreferrer"
        class="rounded-full bg-coral-blush-500 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-blue-zodiac-950 transition hover:bg-coral-blush-300"
        >Apply now</a
      >
    </div>
  </header>

  <BackgroundTrail />
  <main class="relative z-10">
    <section
      class="relative flex min-h-screen items-center border-b border-white/10 px-5 pb-20 pt-32 sm:px-8"
    >
      <div
        class="pointer-events-none absolute left-[8%] top-28 h-64 w-64 rounded-full bg-coral-blush-500/10 blur-3xl"
      ></div>
      <div
        class="pointer-events-none absolute bottom-20 right-[6%] h-96 w-96 rounded-full bg-mint-tulip-400/10 blur-3xl"
      ></div>
      <div
        class="relative mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1fr_19rem] lg:items-end"
      >
        <div>
          <h1
            class="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.055em] text-white sm:text-7xl lg:text-[6.8rem]"
          >
            The first Oxford <span class="text-coral-blush-400">NeuroTech</span>
            Hackathon
          </h1>
          <p
            class="mt-7 max-w-3xl text-2xl font-bold tracking-tight text-mint-tulip-300 sm:text-3xl lg:text-4xl"
          >
            Build the future of neurotechnology.
          </p>
          <p
            class="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
          >
            Build innovative solutions at the intersection of neuroscience and
            technology. A weekend for neuroscientists, engineers, clinicians,
            computer scientists, designers, entrepreneurs, and anyone curious
            enough to build.
          </p>
          <div class="mt-10 flex flex-wrap gap-4">
            <a
              href={luma}
              target="_blank"
              rel="noreferrer"
              class="button-primary">Apply on Luma ↗</a
            >
            <a href="#poster" class="button-secondary">Share the poster</a>
            <a href="#partners" class="button-secondary">Partner with us</a>
          </div>
        </div>
        <aside class="border-l-2 border-coral-blush-500 pl-6">
          <p class="label">When</p>
          <p class="mt-2 text-3xl font-bold text-white">7–8 November</p>
          <p class="text-xl text-coral-blush-300">2026</p>
          <div class="my-6 h-px bg-white/10"></div>
          <p class="label">Where</p>
          <p class="mt-2 text-lg font-semibold text-white">
            Mathematical Institute
          </p>
          <p class="text-slate-400">University of Oxford, OX2 6GG</p>
        </aside>
      </div>
    </section>

    <section
      class="border-b border-white/10 bg-blue-zodiac-900/45 px-5 py-10 sm:px-8"
    >
      <div
        class="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 lg:grid-cols-4"
      >
        {#each [["£5,000+", "worth of prizes"], ["Free", "meals"], ["Tours", "of Oxford"], ["150+", "participants"]] as stat}
          <div class="bg-blue-zodiac-900 px-5 py-7 text-center">
            <p class="text-3xl font-black text-white sm:text-4xl">{stat[0]}</p>
            <p class="label mt-2">{stat[1]}</p>
          </div>
        {/each}
      </div>
    </section>

    <section id="about" class="px-5 py-24 sm:px-8 lg:py-32">
      <div class="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p class="eyebrow">The event</p>
          <h2 class="section-title">Ideas become experiments.</h2>
        </div>
        <div class="space-y-6 text-lg leading-relaxed text-slate-300">
          <p>
            Teams will tackle challenges across neuroscience, AI, computation,
            medical technology, and human health—turning ambitious ideas into
            working prototypes over one weekend.
          </p>
          <p>
            The hackathon runs across four tracks spanning the neurotechnology
            stack, from peripheral nervous-system interfaces to sub-cortical
            implants.
          </p>
          <p>
            You do not need a polished idea or a pre-formed team. Bring your
            skills, curiosity, and willingness to build. Teams can have up to
            5 members. Whether this is your first hackathon or your tenth, you
            are welcome.
          </p>
          <div
            class="rounded-lg border border-mint-tulip-400/25 bg-mint-tulip-400/5 p-6 text-base"
          >
            Each track is judged by leading Oxford principal investigators and
            an industry judge. The overall project most likely to become a
            successful startup also receives a small startup fund and
            consultation with a venture capital partner.
          </div>
        </div>
      </div>
    </section>

    <section class="px-5 py-24 sm:px-8 lg:py-32">
      <div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p class="eyebrow">The venue</p>
          <h2 class="section-title">Built for a weekend of making.</h2>
          <p class="mt-7 text-lg leading-relaxed text-slate-300">
            The Andrew Wiles Building is Oxford’s largest purpose-built event
            venue and a leading setting for hackathons, conferences, and
            symposia. Participants will have dedicated use of the mezzanine,
            classrooms, and a 360-seat tiered lecture theatre for talks and
            pitches.
          </p>
          <p class="mt-5 leading-relaxed text-slate-400">
            Guided tours of Oxford and its historic colleges will run throughout
            the weekend.
          </p>
        </div>
        <div
          class="rounded-xl border border-white/10 bg-gradient-to-br from-pale-sky-500/10 to-coral-blush-500/10 p-8 sm:p-10"
        >
          <p class="eyebrow">Who we are</p>
          <p class="mt-5 text-xl font-semibold leading-relaxed text-white">
            OxNeurotech is an official University of Oxford student society
            connecting more than 200 active members across 10+ departments.
          </p>
          <p class="mt-6 leading-relaxed text-slate-300">
            The event is delivered by a committee of eight DPhil, Master’s, and
            undergraduate students, with Professor Tim Denison as the society’s
            senior member. Oxford’s neuroscience and neural-engineering
            ecosystem gives teams direct access to research depth and a growing
            biomedical startup community.
          </p>
        </div>
      </div>
    </section>

    <section
      id="poster"
      class="border-t border-white/10 px-5 py-24 sm:px-8 lg:py-32"
    >
      <div
        class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-20"
      >
        <a href={poster} target="_blank" rel="noreferrer" class="block">
          <img
            src={poster}
            alt="Oxford NeuroTech Hackathon poster: 7–8 November 2026, Mathematical Institute, University of Oxford. £5,000+ worth of prizes, free meals, tours of Oxford, 150+ participants. Scan the QR code to apply."
            width="891"
            height="1280"
            loading="lazy"
            class="w-full rounded-xl border border-white/10 shadow-2xl shadow-black/40 transition hover:-translate-y-1"
          />
        </a>
        <div>
          <p class="eyebrow">Spread the word</p>
          <h2 class="section-title">Share the poster.</h2>
          <p class="mt-7 max-w-xl text-lg leading-relaxed text-slate-300">
            Know someone who should be building with us? Send them the poster —
            the QR code takes them straight to the application.
          </p>
          <div class="mt-10 flex flex-wrap gap-4">
            <button type="button" class="button-primary" onclick={sharePoster}
              >Share poster ↗</button
            >
            <a
              href={poster}
              download="oxford-neurotech-hackathon.jpg"
              class="button-secondary">Download</a
            >
          </div>
          <div
            class="mt-6 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-[0.16em] text-slate-400"
          >
            {#each shareLinks as link}
              <a
                href={link[1]}
                target="_blank"
                rel="noreferrer"
                class="transition hover:text-mint-tulip-300">{link[0]}</a
              >
            {/each}
            <button
              type="button"
              class="uppercase tracking-[0.16em] transition hover:text-mint-tulip-300"
              onclick={copyLink}>Copy link</button
            >
          </div>
          <p
            class="mt-4 min-h-5 text-sm text-mint-tulip-300"
            aria-live="polite"
          >
            {shareStatus}
          </p>
        </div>
      </div>
    </section>

    <section
      id="partners"
      class="border-y border-white/10 bg-[#091126]/80 px-5 py-24 sm:px-8 lg:py-32"
    >
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p class="eyebrow">Partner with the hackathon</p>
            <h2 class="section-title max-w-4xl">
              Put your technology in the hands of builders.
            </h2>
          </div>
          <p class="text-lg leading-relaxed text-slate-400">
            We welcome financial sponsorship, equipment loans, tools, credits,
            and in-kind support. Partnerships can be tailored to your technology
            and goals.
          </p>
        </div>
        <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {#each partnerRoutes as route}
            <article
              class="rounded-xl border border-white/10 bg-blue-zodiac-800/55 p-6"
            >
              <p class="label font-bold text-mint-tulip-300">{route[0]}</p>
              <h3 class="mt-4 text-xl font-bold text-white">{route[1]}</h3>
              <p class="mt-4 text-sm leading-relaxed text-slate-400">
                {route[2]}
              </p>
            </article>
          {/each}
        </div>
        <div class="mt-20 max-w-3xl">
          <div>
            <h3 class="text-3xl font-bold text-white">What partners receive</h3>
            <div class="mt-7 divide-y divide-white/10 border-y border-white/10">
              {#each benefits as benefit, i}
                <div class="grid grid-cols-[2rem_1fr] gap-3 py-5">
                  <span class="font-mono text-xs text-coral-blush-400"
                    >0{i + 1}</span
                  >
                  <div>
                    <h4 class="font-semibold text-white">{benefit[0]}</h4>
                    <p class="mt-1 text-sm leading-relaxed text-slate-400">
                      {benefit[1]}
                    </p>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="px-5 py-24 text-center sm:px-8 lg:py-32">
      <div class="mx-auto max-w-4xl">
        <p class="eyebrow">7–8 November 2026 · Oxford</p>
        <h2
          class="mt-5 text-4xl font-black tracking-tight text-white sm:text-6xl"
        >
          Bring your skills. Build something real.
        </h2>
        <div class="mt-10 flex flex-wrap justify-center gap-4">
          <a href={luma} target="_blank" rel="noreferrer" class="button-primary"
            >Apply on Luma ↗</a
          ><a
            href={`mailto:${email}?subject=Oxford%20Neurotechnology%20Hackathon%202026%20partnership`}
            class="button-secondary">Discuss a partnership</a
          >
        </div>
        <p class="mt-8 text-sm text-slate-500">
          Partnership enquiries: Mattan Pelah, Chair of OxNeurotech · <a
            class="text-slate-300 underline decoration-white/25 underline-offset-4 hover:text-white"
            href={`mailto:${email}`}>{email}</a
          >
        </p>
      </div>
    </section>
  </main>
  <footer class="relative z-10 border-t border-white/10 px-5 py-8 sm:px-8">
    <div
      class="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"
    >
      <p>An official student society of the University of Oxford</p>
      <a
        href="/"
        class="font-mono text-xs uppercase tracking-widest transition hover:text-white"
        >← OxNeurotech home</a
      >
    </div>
  </footer>
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  .eyebrow,
  .label {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      monospace;
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
  .eyebrow {
    font-weight: 700;
    color: #55f3db;
  }
  .label {
    color: #64748b;
  }
  .section-title {
    margin-top: 1rem;
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 900;
    line-height: 1;
    letter-spacing: -0.045em;
    color: white;
  }
  .button-primary,
  .button-secondary {
    border-radius: 0.375rem;
    padding: 1rem 1.75rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      monospace;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition: 0.2s;
  }
  .button-primary {
    background: #f68888;
    color: #010205;
  }
  .button-primary:hover {
    background: #fac4c4;
    transform: translateY(-2px);
  }
  .button-secondary {
    border: 1px solid rgba(255, 255, 255, 0.25);
    color: white;
  }
  .button-secondary:hover {
    border-color: #55f3db;
    color: #55f3db;
  }
</style>
