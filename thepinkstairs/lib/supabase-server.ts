// lib/supabase-server.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// TEMP: log to debug (these will show in your terminal)
console.log("Loaded Supabase URL:", supabaseUrl);
console.log("Has Supabase key:", !!supabaseKey);

if (!supabaseUrl) {
  throw new Error(
    "NEXT_PUBLIC_SUPABASE_URL is required. Check .env.local and restart `npm run dev`."
  );
}

if (!supabaseKey) {
  throw new Error(
    "SUPABASE_SERVICE_ROLE_KEY is required. Check .env.local and restart `npm run dev`."
  );
}

export const supabaseServer = createClient(supabaseUrl, supabaseKey);
