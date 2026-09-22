import { useEffect, useState } from "react";
import "../styles/app.css";
import "./library.css";
import avbuddyLogo from "../assets/avbuddy-logo.png";
import {
  findLibraryCategory,
  findLibrarySubject,
  getLibrarySubjects,
  getSampleQuestions,
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

function useDocMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", description);
  }, [title, description]);
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
    "Study Library — AvBuddy",
    "Free sample A320 systems, ATPL general knowledge and 737 MAX 8 questions with explanations and FCOM references. No account needed."
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
    subject ? `${subject.name} — Study Library — AvBuddy` : "Study Library — AvBuddy",
    subject
      ? `Browse ${subject.categories.length} ${subject.name} categories with free sample questions and explanations.`
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
      <h1 className="lib__title">{subject.name}</h1>
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
    category ? `${category.system} Questions — ${category.subjectName} — AvBuddy` : "Study Library — AvBuddy",
    category
      ? `Sample ${category.system} questions from the ${category.subjectName} bank with explanations and FCOM-backed references.`
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
      <h1 className="lib__title">{category.system}</h1>
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
