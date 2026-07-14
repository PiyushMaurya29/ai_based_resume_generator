import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div className="bg-base-100">
      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">
              Create Your Perfect Resume with AI
            </h1>
            <p className="py-6 text-lg">
              Build a professional resume in minutes. Describe your background,
              review the generated sections, and export a polished PDF.
            </p>
            <Link to={"/generate-resume"} className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4 font-bold text-primary">AI</div>
                <h3 className="card-title">AI-Powered</h3>
                <p>
                  Generate tailored resume content from a natural-language
                  career description.
                </p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4 font-bold text-primary">EDIT</div>
                <h3 className="card-title">Editable Sections</h3>
                <p>
                  Refine skills, education, experience, projects, achievements,
                  languages, and interests before exporting.
                </p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4 font-bold text-primary">PDF</div>
                <h3 className="card-title">PDF Export</h3>
                <p>
                  Download the final resume as a PDF that is ready to share with
                  recruiters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Your Resume?
          </h2>
          <p className="mb-8 text-lg">
            Turn your experience into a structured resume draft with a local AI
            workflow.
          </p>
          <Link to={"/generate-resume"} className="btn btn-primary">
            Get Started Now
          </Link>
        </div>
      </section>

      <footer className="footer p-10 bg-base-100 text-base-content">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="footer-title">AI Resume Maker</h4>
              <p>Your go-to tool for creating professional resumes with AI.</p>
            </div>
            <div>
              <h4 className="footer-title">Quick Links</h4>
              <Link to="/about" className="link link-hover">
                About Us
              </Link>
              <Link to="/services" className="link link-hover">
                Features
              </Link>
              <Link to="/contact" className="link link-hover">
                Contact
              </Link>
            </div>
            <div>
              <h4 className="footer-title">Tech Stack</h4>
              <p>React, Tailwind CSS, Spring Boot, Spring AI, Ollama</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
