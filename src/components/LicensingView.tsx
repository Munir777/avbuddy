import { useState } from "react";
import {
  LICENSING_AUTHORITIES,
  LICENSE_LEVELS,
  type LicenseLevelKey,
} from "../data/licensing";

export default function LicensingView() {
  const [authorityKey, setAuthorityKey] = useState(LICENSING_AUTHORITIES[0].key);
  const [levelKey, setLevelKey] = useState<LicenseLevelKey>(LICENSE_LEVELS[0].key);

  const authority =
    LICENSING_AUTHORITIES.find((a) => a.key === authorityKey) ?? LICENSING_AUTHORITIES[0];
  const level = LICENSE_LEVELS.find((l) => l.key === levelKey) ?? LICENSE_LEVELS[0];

  return (
    <div>
      <div className="interview-intro">
        <div className="interview-intro__title">LICENSING HUB</div>
        <p className="interview-intro__text">
          Pilot licensing pathways by country. Pick a regulator, then a licence level — detailed
          requirement breakdowns and practice questions are being added here over time.
        </p>
      </div>

      <div className="licensing">
        <aside className="licensing__sidebar">
          {LICENSING_AUTHORITIES.map((a) => {
            const isActiveAuthority = a.key === authorityKey;
            return (
              <div key={a.key} className="licensing__group">
                <button
                  type="button"
                  className={
                    "licensing__authority" + (isActiveAuthority ? " licensing__authority--active" : "")
                  }
                  onClick={() => setAuthorityKey(a.key)}
                >
                  <span className="licensing__authority-country">{a.country}</span>
                  <span className="licensing__authority-abbr">{a.authorityAbbr}</span>
                </button>
                {isActiveAuthority && (
                  <div className="licensing__levels">
                    {LICENSE_LEVELS.map((l) => (
                      <button
                        key={l.key}
                        type="button"
                        className={
                          "licensing__level" + (l.key === levelKey ? " licensing__level--active" : "")
                        }
                        onClick={() => setLevelKey(l.key)}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </aside>

        <div className="licensing__content card">
          <div className="licensing__content-header">
            <span className="licensing__crumb">
              {authority.country} · {authority.authorityAbbr}
            </span>
            <h3 className="licensing__content-title">
              {level.fullName} <span className="licensing__content-badge">{level.label}</span>
            </h3>
            <span className="licensing__content-reg">{authority.regulator}</span>
          </div>
          <p className="licensing__content-body">{authority.summary}</p>
          <div className="licensing__soon">
            <strong>Coming soon —</strong> {authority.authorityAbbr} {level.label} requirements,
            exam structure, and dedicated practice questions. In the meantime, the ATPL General
            Knowledge, A320 Systems, and 737 MAX 8 question banks are ready now in Study, Quiz,
            and Exam mode.
          </div>
        </div>
      </div>
    </div>
  );
}
