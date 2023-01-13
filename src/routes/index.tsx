import { component$, useClientEffect$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { createClient, Session } from '@supabase/supabase-js'

export default component$(() => {
  // Create a single supabase client for interacting with your database
  const sessionSignal = useSignal<Session | null>(null);

  useClientEffect$(() => {
    const supabase = createClient('https://hekswwlkwkqoslseucwn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhla3N3d2xrd2txb3Nsc2V1Y3duIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM2MDQxMDYsImV4cCI6MTk4OTE4MDEwNn0.4pFByy904Uso4ju6Rg577b8Plgu1kXJ4l6dOP7OILWA');
    supabase.auth.getSession().then(({ data: { session } }) => {
      sessionSignal.value = session;
    })
  })
  return (
    <div>
      {sessionSignal.value ? "Logged in" : "Not logged in"}
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Supabase Auth',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
