import { useEffect, useState } from "react";
import "../styles/app.css";
import "../library/library.css";
import avbuddyLogo from "../assets/avbuddy-logo.png";
import {
  LICENSING_AUTHORITIES,
  LICENSE_LEVELS,
  findLicensingAuthority,
  findLicenseLevel,
} from "../data/licensing";

// Public, crawlable Licensing Hub pages: no sign-in, no clicks required to
// see real content. Mirrors the /library pattern (its own tiny router,
// separate from the interactive app at "/") so search engines have a real
// URL per country and per licence level to index.
//
//   /licensing                       -> index of countries/regulators
//   /licensing/:authoritySlug        -> licence levels within that country
//   /licensing/:authoritySlug/:levelSlug -> overview for that licence

function segmentsFromPath(pathname: string): string[] {
  return pathname
    .replace(/^\/licensing\/?/, "")
    .split("/")
    .filter(Boolean);
}

function useLicensingPath() {
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

function LicensingLink({
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

function SignInCta() {
  return (
    <div className="lib__cta">
      <p className="lib__cta-text">
        Full requirement breakdowns and dedicated practice questions are on the way. In the
        meantime, the ATPL General Knowledge, A320 Systems, and 737 MAX 8 question banks are ready
        now in Study, Quiz and Exam mode with progress tracking that syncs across your devices.
      </p>
      <a className="btn-primary" href="/">
        Open AvBuddy — sign in free
      </a>
    </div>
  );
}

function LicensingIndex({ navigate }: { navigate: (to: string) => void }) {
  useDocMeta(
    "Pilot Licensing Hub — AvBuddy",
    "Pilot licensing pathways for Canada (Transport Canada), the US (FAA) and Europe (EASA) — PPL, CPL, Instrument Rating and ATPL side by side."
  );
  return (
    <>
      <div className="lib__crumbs">Licensing Hub</div>
      <h1 className="lib__title">Licensing Hub</h1>
      <p className="lib__subtitle">
        Pilot licensing pathways by country. Pick a regulator to see its licence levels — PPL,
        CPL, Instrument Rating and ATPL.
      </p>
      <div className="lib__grid">
        {LICENSING_AUTHORITIES.map((a) => (
          <LicensingLink key={a.key} to={`/licensing/${a.key}`} navigate={navigate} className="lib__card">
            <div className="lib__card-title">
              {a.country} — {a.authorityAbbr}
            </div>
            <div className="lib__card-meta">{a.authorityName}</div>
            <div className="lib__card-blurb">{a.summary}</div>
          </LicensingLink>
        ))}
      </div>
    </>
  );
}

function LicensingAuthorityPage({
  authoritySlug,
  navigate,
}: {
  authoritySlug: string;
  navigate: (to: string) => void;
}) {
  const authority = findLicensingAuthority(authoritySlug);
  useDocMeta(
    authority ? `${authority.country} Pilot Licensing (${authority.authorityAbbr}) — AvBuddy` : "Licensing Hub — AvBuddy",
    authority
      ? `${authority.authorityName} pilot licensing under ${authority.regulator}: PPL, CPL, Instrument Rating and ATPL.`
      : "AvBuddy licensing hub."
  );

  if (!authority) {
    return (
      <>
        <div className="lib__crumbs">
          <LicensingLink to="/licensing" navigate={navigate}>
            Licensing Hub
          </LicensingLink>
        </div>
        <h1 className="lib__title">Not found</h1>
        <p className="lib__subtitle">That country isn't in the licensing hub.</p>
      </>
    );
  }

  return (
    <>
      <div className="lib__crumbs">
        <LicensingLink to="/licensing" navigate={navigate}>
          Licensing Hub
        </LicensingLink>{" "}
        / {authority.country}
      </div>
      <h1 className="lib__title">
        {authority.country} — {authority.authorityAbbr}
      </h1>
      <p className="lib__subtitle">{authority.summary}</p>
      <div className="lib__grid">
        {LICENSE_LEVELS.map((l) => (
          <LicensingLink
            key={l.key}
            to={`/licensing/${authority.key}/${l.key}`}
            navigate={navigate}
            className="lib__card"
          >
            <div className="lib__card-title">{l.fullName}</div>
            <div className="lib__card-meta">{l.label}</div>
          </LicensingLink>
        ))}
      </div>
    </>
  );
}

function LicensingLevelPage({
  authoritySlug,
  levelSlug,
  navigate,
}: {
  authoritySlug: string;
  levelSlug: string;
  navigate: (to: string) => void;
}) {
  const authority = findLicensingAuthority(authoritySlug);
  const level = findLicenseLevel(levelSlug);
  useDocMeta(
    authority && level
      ? `${authority.authorityAbbr} ${level.label} (${level.fullName}) — AvBuddy`
      : "Licensing Hub — AvBuddy",
    authority && level
      ? `${level.fullName} (${level.label}) under ${authority.regulator} — ${authority.country} pilot licensing overview.`
      : "AvBuddy licensing hub."
  );

  if (!authority || !level) {
    return (
      <>
        <div className="lib__crumbs">
          <LicensingLink to="/licensing" navigate={navigate}>
            Licensing Hub
          </LicensingLink>
        </div>
        <h1 className="lib__title">Not found</h1>
        <p className="lib__subtitle">That licence page doesn't exist.</p>
      </>
    );
  }

  return (
    <>
      <div className="lib__crumbs">
        <LicensingLink to="/licensing" navigate={navigate}>
          Licensing Hub
        </LicensingLink>{" "}
        /{" "}
        <LicensingLink to={`/licensing/${authority.key}`} navigate={navigate}>
          {authority.country}
        </LicensingLink>{" "}
        / {level.label}
      </div>
      <h1 className="lib__title">
        {authority.country} {level.fullName} ({level.label})
      </h1>
      <p className="lib__subtitle">{authority.regulator}</p>

      <div className="lib__q">
        <p className="lib__q-text">{authority.summary}</p>
      </div>

      <SignInCta />
    </>
  );
}

export default function LicensingApp() {
  const { pathname, navigate } = useLicensingPath();
  const [authoritySlug, levelSlug] = segmentsFromPath(pathname);

  return (
    <div className="lib">
      <div className="lib__container">
        {/* Plain link, not the SPA-style LicensingLink: "/" is a different
            React root entirely (the real App), so this needs a real page
            load, not a pushState within this router. */}
        <a href="/" className="lib__brand">
          <img src={avbuddyLogo} alt="AvBuddy" />
        </a>

        {!authoritySlug && <LicensingIndex navigate={navigate} />}
        {authoritySlug && !levelSlug && (
          <LicensingAuthorityPage authoritySlug={authoritySlug} navigate={navigate} />
        )}
        {authoritySlug && levelSlug && (
          <LicensingLevelPage authoritySlug={authoritySlug} levelSlug={levelSlug} navigate={navigate} />
        )}
      </div>
    </div>
  );
}
