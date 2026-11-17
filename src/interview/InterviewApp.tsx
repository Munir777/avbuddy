import { useEffect, useState } from "react";
import { useDocMeta, SITE_ORIGIN } from "../lib/docMeta";
import "../styles/app.css";
import "../library/library.css";
import avbuddyLogo from "../assets/avbuddy-logo.png";
import { INTERVIEW_QUESTIONS } from "../data/interviewPrep";
import type { SharedEntry } from "../data/sharedMaterial";
import { interviewCategories, airlinesWithMaterial, COMMUNITY_AT_BUILD, type CommunityPost } from "./routes";
import { fetchCommunityEntries } from "../lib/submissions";

// Starts from the build-time snapshot (so prerendered HTML and first render
// match), then swaps in the live list so newly approved posts appear without
// waiting for a redeploy.
function useCommunityPosts(): CommunityPost[] {
  const [posts, setPosts] = useState<CommunityPost[]>(COMMUNITY_AT_BUILD);
  useEffect(() => {
    let cancelled = false;
    fetchCommunityEntries().then((live) => {
      if (!cancelled && live.length > 0) setPosts(live);
    });
    return () => {
      cancelled = true;
    };
  }, []);
  return posts;
}

// Public, crawlable Interview Prep + Airline Interview pages. Inside the app
// these only exist as tabs (React state, no URL), so search engines never saw
// them. Same pattern as /library and /licensing: its own tiny router,
// prerendered to static HTML at build time (scripts/prerender.mjs).
//
//   /interview-prep                    -> competency categories
//   /interview-prep/:categorySlug      -> every question + how to answer
//   /airline-interviews                -> airlines with shared material
//   /airline-interviews/:airlineSlug   -> that airline's full writeups
//
// Approved user submissions are fetched client-side by the in-app Shared
// Material tab and are NOT part of these static pages.

function usePath() {
  const [pathname, setPathname] = useState(window.location.pathname);
  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);
  const navigate = (to: string) => {
    window.history.pushState({}, "", to);
    setPathname(to);
    window.scrollTo(0, 0);
  };
  return { pathname, navigate };
}

type Nav = (to: string) => void;

function Link({ to, navigate, className, children }: { to: string; navigate: Nav; className?: string; children: React.ReactNode }) {
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}

function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: SITE_ORIGIN + item.path,
    })),
  };
}

function Paragraphs({ text, className }: { text: string; className?: string }) {
  return (
    <>
      {text
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter(Boolean)
        .map((p, i) => (
          <p key={i} className={className}>
            {p}
          </p>
        ))}
    </>
  );
}

function Cta() {
  return (
    <div className="lib__cta">
      <p className="lib__cta-text">
        AvBuddy is a free pilot study app: interview preparation, airline interview experiences shared by
        candidates, and technical question banks for the A320, 737 MAX, ATPL, FAA ATP and Transport Canada
        SAMRA/SARON, with progress that syncs across your devices.
      </p>
      <a className="btn-primary" href="/">
        Open AvBuddy — free
      </a>
    </div>
  );
}

function CrossLinks({ navigate }: { navigate: Nav }) {
  return (
    <p className="lib__subtitle" style={{ marginTop: 24 }}>
      More on AvBuddy: <Link to="/interview-prep" navigate={navigate}>Pilot interview questions</Link> ·{" "}
      <Link to="/airline-interviews" navigate={navigate}>Airline interview experiences</Link> ·{" "}
      <a href="/library">Technical question bank</a> · <a href="/licensing">Licensing hub</a>
    </p>
  );
}

/* ---------------- Interview prep ---------------- */

function InterviewIndex({ navigate }: { navigate: Nav }) {
  const cats = interviewCategories();
  useDocMeta(
    `Airline Pilot Interview Questions & How to Answer (${INTERVIEW_QUESTIONS.length}) | AvBuddy`,
    `${INTERVIEW_QUESTIONS.length} airline pilot competency interview questions in ${cats.length} areas — CRM, leadership, decision-making, safety culture and more — with guidance on how to structure each answer (STAR).`
  );
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Pilot Interview Questions", path: "/interview-prep" }])} />
      <div className="lib__crumbs">Interview Preparation</div>
      <h1 className="lib__title">Airline Pilot Interview Questions</h1>
      <p className="lib__subtitle">
        {INTERVIEW_QUESTIONS.length} competency-based (HR / behavioural) questions that airline panels ask pilots,
        each with guidance on how to structure a strong answer. Your content should always come from your own
        flying — these show you what the panel is listening for.
      </p>
      <div className="lib__grid">
        {cats.map((c) => (
          <Link key={c.slug} to={`/interview-prep/${c.slug}`} navigate={navigate} className="lib__card">
            <div className="lib__card-title">{c.name}</div>
            <div className="lib__card-meta">{c.questions.length} questions</div>
            <div className="lib__card-blurb">{c.questions[0].question}</div>
          </Link>
        ))}
      </div>
      <CrossLinks navigate={navigate} />
      <Cta />
    </>
  );
}

function InterviewCategoryPage({ slug, navigate }: { slug: string; navigate: Nav }) {
  const cat = interviewCategories().find((c) => c.slug === slug);
  useDocMeta(
    cat ? `${cat.name} Pilot Interview Questions | AvBuddy` : "Pilot Interview Questions | AvBuddy",
    cat
      ? `${cat.questions.length} airline pilot interview questions on ${cat.name.toLowerCase()}, with how to answer each one using STAR: what the panel is listening for and what to avoid.`
      : "Airline pilot interview questions."
  );
  if (!cat) {
    return (
      <>
        <div className="lib__crumbs">
          <Link to="/interview-prep" navigate={navigate}>Interview Preparation</Link>
        </div>
        <h1 className="lib__title">Not found</h1>
      </>
    );
  }
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Pilot Interview Questions", path: "/interview-prep" },
          { name: cat.name, path: `/interview-prep/${cat.slug}` },
        ])}
      />
      <div className="lib__crumbs">
        <Link to="/interview-prep" navigate={navigate}>Interview Preparation</Link> / {cat.name}
      </div>
      <h1 className="lib__title">{cat.name}: Pilot Interview Questions</h1>
      <p className="lib__subtitle">
        {cat.questions.length} airline pilot interview questions on {cat.name.toLowerCase()}, with guidance on how
        to answer each.
      </p>
      {cat.questions.map((q) => (
        <div className="lib__q" key={q.id}>
          <h2 className="lib__q-text">{q.question}</h2>
          <p className="lib__summary">{q.teaser}</p>
          <div className="lib__q-explain">
            <strong>How to answer: </strong>
            {q.howToAnswer}
          </div>
        </div>
      ))}
      <CrossLinks navigate={navigate} />
      <Cta />
    </>
  );
}

/* ---------------- Airline interviews ---------------- */

function AirlineIndex({ navigate, community }: { navigate: Nav; community: CommunityPost[] }) {
  const airlines = airlinesWithMaterial(community);
  const names = airlines.map((a) => a.name).join(", ");
  useDocMeta(
    "Airline Pilot Interview Experiences by Airline | AvBuddy",
    `Pilot interview experiences shared by candidates: assessment stages, panel questions, technical exams and simulator checks for ${names}.`
  );
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Airline Interview Experiences", path: "/airline-interviews" }])} />
      <div className="lib__crumbs">Airline Interview Experiences</div>
      <h1 className="lib__title">Airline Pilot Interview Experiences</h1>
      <p className="lib__subtitle">
        What the assessment actually looked like, shared by pilots who went through it: format, panel questions,
        technical exams and simulator checks, organised by airline.
      </p>
      <div className="lib__grid">
        {airlines.map((a) => (
          <Link key={a.slug} to={`/airline-interviews/${a.slug}`} navigate={navigate} className="lib__card">
            <div className="lib__card-title">{a.name} pilot interview</div>
            <div className="lib__card-meta">
              {a.entries.length} {a.entries.length === 1 ? "writeup" : "writeups"}
            </div>
            <div className="lib__card-blurb">{a.entries.map((e) => e.title).join(" · ")}</div>
          </Link>
        ))}
      </div>
      <CrossLinks navigate={navigate} />
      <Cta />
    </>
  );
}

function Entry({ entry }: { entry: SharedEntry }) {
  return (
    <div className="lib__q">
      <h2 className="lib__q-text">{entry.title}</h2>
      {entry.summary && <p className="lib__summary">{entry.summary}</p>}
      {entry.body && <Paragraphs text={entry.body} className="lib__prose" />}
      {entry.sections?.map((s) => (
        <div key={s.heading}>
          <h3 className="lib__card-title" style={{ marginTop: 16 }}>
            {s.heading}
          </h3>
          <Paragraphs text={s.body} className="lib__prose" />
        </div>
      ))}
      {entry.note && <p className="lib__q-ref">{entry.note}</p>}
    </div>
  );
}

function AirlinePage({ slug, navigate, community }: { slug: string; navigate: Nav; community: CommunityPost[] }) {
  const airline = airlinesWithMaterial(community).find((a) => a.slug === slug);
  useDocMeta(
    airline ? `${airline.name} Pilot Interview Experience | AvBuddy` : "Airline Interview Experiences | AvBuddy",
    airline
      ? `${airline.name} pilot interview and assessment, as shared by candidates: ${airline.entries
          .map((e) => e.title)
          .join(", ")
          .slice(0, 110)}.`
      : "Airline pilot interview experiences."
  );
  if (!airline) {
    return (
      <>
        <div className="lib__crumbs">
          <Link to="/airline-interviews" navigate={navigate}>Airline Interview Experiences</Link>
        </div>
        <h1 className="lib__title">Not found</h1>
      </>
    );
  }
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Airline Interview Experiences", path: "/airline-interviews" },
          { name: airline.name, path: `/airline-interviews/${airline.slug}` },
        ])}
      />
      <div className="lib__crumbs">
        <Link to="/airline-interviews" navigate={navigate}>Airline Interview Experiences</Link> / {airline.name}
      </div>
      <h1 className="lib__title">{airline.name} Pilot Interview</h1>
      <p className="lib__subtitle">
        Assessment experiences and questions shared by pilots who went through the {airline.name} selection
        process. Details vary by candidate and session — treat these as what came up, not a fixed script.
      </p>
      {airline.entries.map((e, i) => (
        <Entry key={`${e.id}-${i}`} entry={e} />
      ))}
      <CrossLinks navigate={navigate} />
      <Cta />
    </>
  );
}

export default function InterviewApp() {
  const { pathname, navigate } = usePath();
  const [section, slug] = pathname.split("/").filter(Boolean);
  const community = useCommunityPosts();
  return (
    <div className="lib">
      <div className="lib__container">
        {/* Plain link: "/" is a different React root (the real App). */}
        <a href="/" className="lib__brand">
          <img src={avbuddyLogo} alt="AvBuddy" />
        </a>
        {section === "interview-prep" && !slug && <InterviewIndex navigate={navigate} />}
        {section === "interview-prep" && slug && <InterviewCategoryPage slug={slug} navigate={navigate} />}
        {section === "airline-interviews" && !slug && <AirlineIndex navigate={navigate} community={community} />}
        {section === "airline-interviews" && slug && <AirlinePage slug={slug} navigate={navigate} community={community} />}
      </div>
    </div>
  );
}
