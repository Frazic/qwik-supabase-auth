import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <main>
        {/* <Header /> */}
        <section>
          <Slot />
        </section>
      </main>
      <footer>
      </footer>
    </>
  );
});
