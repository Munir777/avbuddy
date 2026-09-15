// Kept in sync by hand with AIRLINES in src/data/sharedMaterial.ts. Not
// imported across the api/src boundary on purpose -- each Vercel function
// bundles independently, and this keeps that bundling self-contained
// rather than depending on how the platform's bundler resolves a relative
// import that reaches outside the api/ directory. There are only ever a
// handful of airlines, so the duplication is cheap to keep in sync.
export const SUBMITTABLE_AIRLINES = ["Emirates", "Qatar Airways", "Etihad", "Riyadh Air", "FlyDubai"] as const;
