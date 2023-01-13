import { component$, $, useClientEffect$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { supabase } from '~/utils/supabase';
import type { Session } from '@supabase/supabase-js';

export default component$(() => {

  const sessionSignal = useSignal<Session | null>();

  const handleSignup = $(async (event: Event) => {
    event.preventDefault();

    // @ts-ignore
    const email = event.target?.email.value

    try {
      const { error } = await supabase.auth.signInWithOtp({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert(error.error_description || error.message)
    }
  })

  const handleLogOut = $(async () => {
    await supabase.auth.signOut();
  })

  useClientEffect$(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      sessionSignal.value = session;
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      sessionSignal.value = session;
    })
  })

  return (
    <div>
      <form onSubmit$={handleSignup} preventdefault:submit>
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
          autoComplete="email"
          required
        />
        <button type="submit">Submit</button>
      </form>
      {sessionSignal.value &&
        <button onClick$={handleLogOut}>Log out</button>
      }
      <p>{sessionSignal.value ? "Logged in!" : "Not logged in :c"}</p>
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
