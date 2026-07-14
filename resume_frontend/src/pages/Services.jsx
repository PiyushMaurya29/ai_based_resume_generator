function Services() {
  return (
    <main className="min-h-[70vh] bg-base-100 px-6 py-16">
      <section className="mx-auto max-w-5xl">
        <h1 className="mb-10 text-4xl font-bold">Features</h1>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-lg bg-base-200 p-6 shadow">
            <h2 className="text-xl font-semibold">AI Resume Drafting</h2>
            <p className="mt-3 text-base-content/75">
              Generate a structured resume from a natural-language career
              description.
            </p>
          </article>
          <article className="rounded-lg bg-base-200 p-6 shadow">
            <h2 className="text-xl font-semibold">Editable Sections</h2>
            <p className="mt-3 text-base-content/75">
              Review and refine personal details, skills, experience,
              education, projects, and achievements.
            </p>
          </article>
          <article className="rounded-lg bg-base-200 p-6 shadow">
            <h2 className="text-xl font-semibold">PDF Export</h2>
            <p className="mt-3 text-base-content/75">
              Download the generated resume as a shareable PDF file.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Services;
