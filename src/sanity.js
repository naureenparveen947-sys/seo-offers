import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "l3xpa5bw",
  dataset: "production",
  apiVersion: "2025-01-01",
  useCdn: true,
});