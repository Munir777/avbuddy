import { useState } from "react";
import { AIRLINES, SHARED_MATERIAL, type Airline, type SharedEntry } from "../data/sharedMaterial";

function EntryCard({ entry }: { entry: SharedEntry }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card interview-item">
      <button type="button" className="interview-item__question" onClick={() => setOpen((o) => !o)}>
        <span className="shared-entry__heading">
          <span className="interview-item__text">{entry.title}</span>
          {entry.summary && !open && <span className="shared-entry__summary">{entry.summary}</span>}
        </span>
        <span className="interview-item__chevron">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="interview-item__answer shared-entry__content">
          {entry.sections ? (
            entry.sections.map((section, i) => (
              <div key={i} className="shared-entry__section">
                <div className="shared-entry__section-heading">{section.heading}</div>
                <p className="shared-entry__body">{section.body}</p>
              </div>
            ))
          ) : (
            <p className="shared-entry__body">{entry.body}</p>
          )}
          {entry.note && <div className="shared-entry__note">{entry.note}</div>}
        </div>
      )}
    </div>
  );
}

export default function SharedMaterialView() {
  const [activeAirline, setActiveAirline] = useState<Airline>(AIRLINES[0]);
  const entries = SHARED_MATERIAL[activeAirline];

  return (
    <div>
      <div className="card interview-intro">
        <div className="interview-intro__title">Shared interview material, by airline</div>
        <p className="interview-intro__text">
          Notes and experiences gathered from real interview processes, organised by airline. Curated for now —
          candidate submissions are a planned feature.
        </p>
      </div>

      <div className="filters">
        {AIRLINES.map((airline) => (
          <button
            key={airline}
            onClick={() => setActiveAirline(airline)}
            className={"filter-chip" + (activeAirline === airline ? " filter-chip--active" : "")}
          >
            {airline.toUpperCase()} ({SHARED_MATERIAL[airline].length})
          </button>
        ))}
      </div>

      {entries.length === 0 ? (
        <div className="card">
          <div className="progress__empty">No shared material for {activeAirline} yet — check back soon.</div>
        </div>
      ) : (
        <div className="interview-list">
          {entries.map((entry) => (
            <EntryCard key={entry.id} entry={entry} />
          ))}
        </div>
      )}
    </div>
  );
}
