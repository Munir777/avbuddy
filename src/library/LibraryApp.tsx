import { useEffect, useState } from "react";
import { useDocMeta, SITE_ORIGIN } from "../lib/docMeta";
import type { Question } from "../types";
import "../styles/app.css";
import "./library.css";
import avbuddyLogo from "../assets/avbuddy-logo.png";
import {
  findLibraryCategory,
  findLibrarySubject,
  getLibrarySubjects,
  getSampleQuestions,
  subjectSeo,
} from "../lib/library";

// Public, crawlable study-library pages: no sign-in, no clicks required to
// see real content. A curated sample of each category's Q&A renders
// directly in the initial DOM so search engines have something real to
// index, separate from the interactive Study/Quiz/Exam app at "/".
//
// Tiny path-based router of its own (mirrors the /admin check in main.tsx)
// rather than pulling in react-router for one subtree:
//   /library                          -> index of subjects
//   /library/:subjectSlug             -> categories within a subject
//   /library/:subjectSlug/:systemSlug -> sample questions for a category

function segmentsFromPath(pathname: string): string[] {
  return pathname
    .replace(/^\/library\/?/, "")
    .split("/")
    .filter(Boolean);
}

function useLibraryPath() {
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


// schema.org structured data, rendered into the page (and the prerendered
// HTML) so search engines can show breadcrumbs and Q&A study cards.
// "<" is escaped so question text can never close the <script> tag early.
// Search results show ~60-70 characters of a title, so the exam + topic go
// first and the tagline is only added when it still fits.
function categoryTitle(subjectName: string, system: string): string {
  const seo = subjectSeo(subjectName);
  const base = `${seo.short} ${system} Questions`;
  const withTagline = `${base} — ${seo.shortTagline} | AvBuddy`;
  return withTagline.length <= 70 ? withTagline : `${base} | AvBuddy`;
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

function quizLd(name: string, about: string, questions: Question[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name,
    about: { "@type": "Thing", name: about },
    educationalLevel: "Professional pilot",
    hasPart: questions.map((q) => ({
      "@type": "Question",
      eduQuestionType: "Multiple choice",
      text: q.q,
      suggestedAnswer: q.options
        .filter((_, i) => i !== q.answer)
        .map((text) => ({ "@type": "Answer", text })),
      acceptedAnswer: {
        "@type": "Answer",
        text: q.options[q.answer],
        answerExplanation: { "@type": "Comment", text: q.explain },
      },
    })),
  };
}

function LibraryLink({
  to,
  navigate,
  className,
  children,
}: {
  to: string;
  navigate: (to: string) => void;
  className?: string;
  children: React.ReactNode;
}) {
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

function SignInCta({ subjectName, questionCount }: { subjectName: string; questionCount: number }) {
  return (
    <div className="lib__cta">
      <p className="lib__cta-text">
        This is a small sample. The full {subjectName} bank has {questionCount} FCOM-backed questions,
        available in Study, Quiz and Exam mode with progress tracking that syncs across your devices.
      </p>
      <a className="btn-primary" href="/">
        Open AvBuddy — sign in free
      </a>
    </div>
  );
}

function LibraryIndex({ navigate }: { navigate: (to: string) => void }) {
  const subjects = getLibrarySubjects();
  useDocMeta(
    "Free Pilot Question Banks: A320, 737, ATPL, FAA ATP & SAMRA/SARON | AvBuddy",
    "Free practice questions with explanations for A320 and 737 type ratings, ATPL theory, the FAA ATP written and Transport Canada SAMRA/SARON exams. No account needed."
  );
  return (
    <>
      <div className="lib__crumbs">Study Library</div>
      <h1 className="lib__title">Study Library</h1>
      <p className="lib__subtitle">
        Free sample questions from AvBuddy's question banks — real explanations, no account needed.
        Pick a subject to browse its categories.
      </p>
      <div className="lib__grid">
        {subjects.map((s) => (
          <LibraryLink key={s.slug} to={`/library/${s.slug}`} navigate={navigate} className="lib__card">
            <div className="lib__card-title">{s.name}</div>
            <div className="lib__card-meta">
              {s.categories.length} categories · {s.questionCount} questions
            </div>
            <div className="lib__card-blurb">{s.blurb}</div>
          </LibraryLink>
        ))}
      </div>
    </>
  );
}

function LibrarySubjectPage({
  subjectSlug,
  navigate,
}: {
  subjectSlug: string;
  navigate: (to: string) => void;
}) {
  const subject = findLibrarySubject(subjectSlug);
  useDocMeta(
    subject
      ? `Free ${subjectSeo(subject.name).bankName} — ${subjectSeo(subject.name).tagline} | AvBuddy`
      : "Study Library — AvBuddy",
    subject
      ? `${subject.questionCount.toLocaleString("en-US")} ${subject.name} practice questions across ${subject.categories.length} categories, with ${subjectSeo(subject.name).refs}. Free sample questions, no account needed.`
      : "AvBuddy study library."
  );

  if (!subject) {
    return (
      <>
        <div className="lib__crumbs">
          <LibraryLink to="/library" navigate={navigate}>
            Study Library
          </LibraryLink>
        </div>
        <h1 className="lib__title">Not found</h1>
        <p className="lib__subtitle">That subject doesn't exist in the library.</p>
      </>
    );
  }

  return (
    <>
      <div className="lib__crumbs">
        <LibraryLink to="/library" navigate={navigate}>
          Study Library
        </LibraryLink>{" "}
        / {subject.name}
      </div>
      <JsonLd
        data={breadcrumbLd([
          { name: "Study Library", path: "/library" },
          { name: subject.name, path: `/library/${subject.slug}` },
        ])}
      />
      <h1 className="lib__title">{subjectSeo(subject.name).bankName}</h1>
      <p className="lib__subtitle">{subject.blurb}</p>
      <div className="lib__grid">
        {subject.categories.map((c) => (
          <LibraryLink
            key={c.slug}
            to={`/library/${subject.slug}/${c.slug}`}
            navigate={navigate}
            className="lib__card"
          >
            <div className="lib__card-title">{c.system}</div>
            <div className="lib__card-meta">{c.questionCount} questions</div>
          </LibraryLink>
        ))}
      </div>
    </>
  );
}

function LibraryCategoryPage({
  subjectSlug,
  systemSlug,
  navigate,
}: {
  subjectSlug: string;
  systemSlug: string;
  navigate: (to: string) => void;
}) {
  const category = findLibraryCategory(subjectSlug, systemSlug);
  const subject = category ? findLibrarySubject(category.subjectSlug) : undefined;
  const sample = category ? getSampleQuestions(category.subjectName, category.system) : [];
  useDocMeta(
    category
      ? categoryTitle(category.subjectName, category.system)
      : "Study Library — AvBuddy",
    category
      ? `Free ${subjectSeo(category.subjectName).short} ${category.system} practice questions (${category.questionCount} in the bank) with ${subjectSeo(category.subjectName).refs}. Part of AvBuddy's ${subjectSeo(category.subjectName).bankName}.`
      : "AvBuddy study library."
  );

  if (!category) {
    return (
      <>
        <div className="lib__crumbs">
          <LibraryLink to="/library" navigate={navigate}>
            Study Library
          </LibraryLink>
        </div>
        <h1 className="lib__title">Not found</h1>
        <p className="lib__subtitle">That category doesn't exist in the library.</p>
      </>
    );
  }

  return (
    <>
      <div className="lib__crumbs">
        <LibraryLink to="/library" navigate={navigate}>
          Study Library
        </LibraryLink>{" "}
        /{" "}
        <LibraryLink to={`/library/${category.subjectSlug}`} navigate={navigate}>
          {category.subjectName}
        </LibraryLink>{" "}
        / {category.system}
      </div>
      <JsonLd
        data={breadcrumbLd([
          { name: "Study Library", path: "/library" },
          { name: category.subjectName, path: `/library/${category.subjectSlug}` },
          { name: category.system, path: `/library/${category.subjectSlug}/${category.slug}` },
        ])}
      />
      <JsonLd
        data={quizLd(
          `${subjectSeo(category.subjectName).short} ${category.system} practice questions`,
          `${category.subjectName}: ${category.system}`,
          sample.filter((q) => !q.optionImages && !q.diagram)
        )}
      />
      <h1 className="lib__title">
        {subjectSeo(category.subjectName).short} {category.system} Questions
      </h1>
      <p className="lib__subtitle">
        {category.subjectName} · {category.questionCount} questions in this category · sample below
      </p>

      {sample.map((q) => (
        <div className="lib__q" key={q.id}>
          <p className="lib__q-text">{q.q}</p>
          <ul className="lib__q-options">
            {q.options.map((opt, i) => (
              <li key={i} className={"lib__q-option" + (i === q.answer ? " lib__q-option--correct" : "")}>
                {opt}
              </li>
            ))}
          </ul>
          <p className="lib__q-explain">
            <strong>Explanation: </strong>
            {q.explain}
          </p>
          {q.reference && <p className="lib__q-ref">{q.reference}</p>}
        </div>
      ))}

      <SignInCta subjectName={category.subjectName} questionCount={subject?.questionCount ?? category.questionCount} />
    </>
  );
}

export default function LibraryApp() {
  const { pathname, navigate } = useLibraryPath();
  const [subjectSlug, systemSlug] = segmentsFromPath(pathname);

  return (
    <div className="lib">
      <div className="lib__container">
        {/* Plain link, not the SPA-style LibraryLink: "/" is a different
            React root entirely (the real App), so this needs a real page
            load, not a pushState within the Library's own router. */}
        <a href="/" className="lib__brand">
          <img src={avbuddyLogo} alt="AvBuddy" />
        </a>

        {!subjectSlug && <LibraryIndex navigate={navigate} />}
        {subjectSlug && !systemSlug && <LibrarySubjectPage subjectSlug={subjectSlug} navigate={navigate} />}
        {subjectSlug && systemSlug && (
          <LibraryCategoryPage subjectSlug={subjectSlug} systemSlug={systemSlug} navigate={navigate} />
        )}
      </div>
    </div>
  );
}
