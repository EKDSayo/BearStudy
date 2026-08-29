/*
 * StudyBear Supabase connection layer — V27
 *
 * This first integration layer ONLY connects the Supabase client.
 * Existing StudyBear localStorage/auth/learning logic is intentionally kept
 * untouched so the current website cannot be frozen by a missing key.
 *
 * NEVER put sb_secret_* or service_role keys in this file.
 */

const STUDYBEAR_SUPABASE_URL = "https://qsnalxspipzpgzdmwopo.supabase.co";

/*
 * Paste your Supabase Publishable key here:
 * Supabase → Settings → API Keys → Publishable key
 */
const STUDYBEAR_SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable__Rt-_bzPhpIbhD1ZRb9SZA_BRhN9vyE";

let supabaseClient = null;
let studyBearSupabaseReady = false;

function initStudyBearSupabase() {
  if (!window.supabase || typeof window.supabase.createClient !== "function") {
    console.warn("[StudyBear] Supabase library is not available.");
    return null;
  }

  if (
    !STUDYBEAR_SUPABASE_PUBLISHABLE_KEY ||
    STUDYBEAR_SUPABASE_PUBLISHABLE_KEY === "PASTE_YOUR_SB_PUBLISHABLE_KEY_HERE"
  ) {
    console.info("[StudyBear] Publishable key is not configured yet.");
    return null;
  }

  try {
    supabaseClient = window.supabase.createClient(
      STUDYBEAR_SUPABASE_URL,
      STUDYBEAR_SUPABASE_PUBLISHABLE_KEY,
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true
        }
      }
    );

    studyBearSupabaseReady = true;
    window.studyBearSupabase = supabaseClient;
    console.info("[StudyBear] Supabase client initialized.");
    return supabaseClient;
  } catch (error) {
    console.error("[StudyBear] Supabase initialization failed:", error);
    return null;
  }
}

// Non-blocking: a missing/invalid key must never disable the existing website.
window.addEventListener("DOMContentLoaded", () => {
  initStudyBearSupabase();
});
