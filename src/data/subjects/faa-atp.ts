import type { Question } from "../../types";
import { FAA_ATP_BATCH_01_QUESTIONS } from "../categories/faa-atp/batch-01";
import { FAA_ATP_BATCH_02_QUESTIONS } from "../categories/faa-atp/batch-02";
import { FAA_ATP_BATCH_03_QUESTIONS } from "../categories/faa-atp/batch-03";
import { FAA_ATP_BATCH_04_QUESTIONS } from "../categories/faa-atp/batch-04";
import { FAA_ATP_BATCH_05_QUESTIONS } from "../categories/faa-atp/batch-05";
import { FAA_ATP_BATCH_06_QUESTIONS } from "../categories/faa-atp/batch-06";
import { FAA_ATP_BATCH_07_QUESTIONS } from "../categories/faa-atp/batch-07";
import { FAA_ATP_BATCH_08_QUESTIONS } from "../categories/faa-atp/batch-08";
import { FAA_ATP_BATCH_09_QUESTIONS } from "../categories/faa-atp/batch-09";
import { FAA_ATP_BATCH_10_QUESTIONS } from "../categories/faa-atp/batch-10";
import { FAA_ATP_BATCH_11_QUESTIONS } from "../categories/faa-atp/batch-11";
import { FAA_ATP_BATCH_12_QUESTIONS } from "../categories/faa-atp/batch-12";
import { FAA_ATP_BATCH_13_QUESTIONS } from "../categories/faa-atp/batch-13";
import { FAA_ATP_BATCH_14_QUESTIONS } from "../categories/faa-atp/batch-14";
import { FAA_ATP_BATCH_15_QUESTIONS } from "../categories/faa-atp/batch-15";
import { FAA_ATP_BATCH_16_QUESTIONS } from "../categories/faa-atp/batch-16";
import { FAA_ATP_BATCH_17_QUESTIONS } from "../categories/faa-atp/batch-17";

// One subject's questions, in display order. Kept in its own module so the
// main app can load each subject as a separate chunk on demand (see
// src/data/bank.ts) instead of shipping the whole bank on first paint.
// IDs are NOT assigned here -- see src/data/index.ts / bank.ts.
export const SUBJECT = "FAA ATP";

const questions: Question[] = [
  ...FAA_ATP_BATCH_01_QUESTIONS,
  ...FAA_ATP_BATCH_02_QUESTIONS,
  ...FAA_ATP_BATCH_03_QUESTIONS,
  ...FAA_ATP_BATCH_04_QUESTIONS,
  ...FAA_ATP_BATCH_05_QUESTIONS,
  ...FAA_ATP_BATCH_06_QUESTIONS,
  ...FAA_ATP_BATCH_07_QUESTIONS,
  ...FAA_ATP_BATCH_08_QUESTIONS,
  ...FAA_ATP_BATCH_09_QUESTIONS,
  ...FAA_ATP_BATCH_10_QUESTIONS,
  ...FAA_ATP_BATCH_11_QUESTIONS,
  ...FAA_ATP_BATCH_12_QUESTIONS,
  ...FAA_ATP_BATCH_13_QUESTIONS,
  ...FAA_ATP_BATCH_14_QUESTIONS,
  ...FAA_ATP_BATCH_15_QUESTIONS,
  ...FAA_ATP_BATCH_16_QUESTIONS,
  ...FAA_ATP_BATCH_17_QUESTIONS,
].map((q) => ({ ...q, subject: q.subject ?? SUBJECT }));

export default questions;
