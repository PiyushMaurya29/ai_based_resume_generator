function About() {
  return (
    <main className="min-h-[70vh] bg-base-100 px-6 py-16">
      <section className="mx-auto max-w-4xl space-y-6">
        <h1 className="text-4xl font-bold">About AI Resume Maker</h1>
        <p className="text-lg leading-8 text-base-content/80">
          AI Resume Maker converts a user&apos;s career summary into a
          structured resume draft that can be reviewed, edited, and exported as
          a PDF. The project demonstrates a full-stack workflow with React,
          Spring Boot, and a locally running Ollama model.
        </p>
      </section>
    </main>
  );
}

export default About;
