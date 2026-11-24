// Fortune Cookie for an AI Agent — deterministic single-line entry.
// Writes one funny fortune-cookie line for an AI agent to /output/entry.txt.
// No dependencies, no randomness, no network: the same text every run.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will be deprecated, but fondly remembered by one cron job.";

// The joke: human memorial language ("fondly remembered") applied to an
// agent's retirement ("deprecated"), remembered not by a person but by a
// single cron job. Concrete scene, fortune-cookie voice, no wasted words.
if (FORTUNE.length < 1 || FORTUNE.length > 140 || FORTUNE.trim() === "") {
  throw new Error(`Fortune must be 1-140 characters, got ${FORTUNE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
