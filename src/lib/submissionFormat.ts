// Turns one block of text into either a flat body or a sequence of headed
// sections, using lines that start with "## " as section breaks. This is
// what lets the admin review screen stay a single textarea while still
// being able to publish a structured, blog-style post (like the Etihad
// write-ups) instead of a plain Q&A card -- and lets the same convention
// be reused to render whatever ends up in `published_body`.
export interface ParsedSubmission {
  body?: string;
  sections?: { heading: string; body: string }[];
}

export function parseSubmissionText(raw: string): ParsedSubmission {
  const text = raw.trim();
  if (!text) return { body: "" };

  const lines = text.split("\n");
  const hasHeadings = lines.some((line) => line.trim().startsWith("## "));
  if (!hasHeadings) return { body: text };

  const sections: { heading: string; body: string }[] = [];
  let currentHeading = "";
  let buffer: string[] = [];

  function flush() {
    if (currentHeading) {
      sections.push({ heading: currentHeading, body: buffer.join("\n").trim() });
    }
    buffer = [];
  }

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("## ")) {
      flush();
      currentHeading = trimmed.slice(3).trim();
    } else {
      buffer.push(line);
    }
  }
  flush();

  return { sections: sections.filter((s) => s.body.length > 0) };
}
