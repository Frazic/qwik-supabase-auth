import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://hekswwlkwkqoslseucwn.supabase.co";
const supabasePublicAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhla3N3d2xrd2txb3Nsc2V1Y3duIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM2MDQxMDYsImV4cCI6MTk4OTE4MDEwNn0.4pFByy904Uso4ju6Rg577b8Plgu1kXJ4l6dOP7OILWA";

export const supabase = createClient(supabaseURL, supabasePublicAnonKey);