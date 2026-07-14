import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";
import { useRef } from "react";

const Resume = ({ data }) => {
  const resumeRef = useRef(null);
  const {
    personalInformation = {},
    summary = "",
    skills = [],
    experience = [],
    education = [],
    certifications = [],
    projects = [],
    achievements = [],
    languages = [],
    interests = [],
  } = data || {};

  const formatTechnologies = (technologiesUsed) => {
    if (Array.isArray(technologiesUsed)) {
      return technologiesUsed.join(", ");
    }

    return technologiesUsed || "";
  };

  const handleDownloadPdf = () => {
    toPng(resumeRef.current, { quality: 1.0 })
      .then((dataUrl) => {
        const pdf = new jsPDF("p", "mm", "a4");
        pdf.addImage(dataUrl, "PNG", 10, 10, 190, 0);
        pdf.save(`${personalInformation.fullName || "resume"}.pdf`);
      })
      .catch((err) => {
        console.error("Error generating PDF", err);
      });
  };

  return (
    <>
      <div
        ref={resumeRef}
        className="max-w-4xl mx-auto shadow-2xl rounded-lg p-8 space-y-6 bg-base-100 text-base-content border border-gray-200 dark:border-gray-700 transition-all duration-300"
      >
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-primary">
            {personalInformation.fullName}
          </h1>
          <p className="text-lg text-gray-500">{personalInformation.location}</p>

          <div className="flex flex-wrap justify-center gap-4 mt-2">
            {personalInformation.email && (
              <a
                href={`mailto:${personalInformation.email}`}
                className="flex items-center text-secondary hover:underline"
              >
                <FaEnvelope className="mr-2" /> {personalInformation.email}
              </a>
            )}
            {personalInformation.phoneNumber && (
              <p className="flex items-center text-gray-500">
                <FaPhone className="mr-2" /> {personalInformation.phoneNumber}
              </p>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-2">
            {personalInformation.gitHub && (
              <a
                href={personalInformation.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 flex items-center"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            )}
            {personalInformation.linkedIn && (
              <a
                href={personalInformation.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 flex items-center"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
            )}
          </div>
        </div>

        <div className="divider"></div>

        <section>
          <h2 className="text-2xl font-semibold text-secondary">Summary</h2>
          <p className="text-gray-700 dark:text-gray-300">{summary}</p>
        </section>

        <div className="divider"></div>

        <section>
          <h2 className="text-2xl font-semibold text-secondary">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            {skills.map((skill, index) => (
              <div
                key={`${skill.title}-${index}`}
                className="badge badge-outline badge-lg px-4 py-2"
              >
                {skill.title} -{" "}
                <span className="ml-1 font-semibold">{skill.level}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="divider"></div>

        <section>
          <h2 className="text-2xl font-semibold text-secondary">Experience</h2>
          {experience.map((exp, index) => (
            <div
              key={`${exp.jobTitle}-${index}`}
              className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold">{exp.jobTitle}</h3>
              <p className="text-gray-500">
                {exp.company} | {exp.location}
              </p>
              <p className="text-gray-400">{exp.duration}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {exp.responsibility}
              </p>
            </div>
          ))}
        </section>

        <div className="divider"></div>

        <section>
          <h2 className="text-2xl font-semibold text-secondary">Education</h2>
          {education.map((edu, index) => (
            <div
              key={`${edu.degree}-${index}`}
              className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              <p className="text-gray-500">
                {edu.university}, {edu.location}
              </p>
              <p className="text-gray-400">
                Graduation Year: {edu.graduationYear}
              </p>
            </div>
          ))}
        </section>

        <div className="divider"></div>

        <section>
          <h2 className="text-2xl font-semibold text-secondary">
            Certifications
          </h2>
          {certifications.map((cert, index) => (
            <div
              key={`${cert.title}-${index}`}
              className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold">{cert.title}</h3>
              <p className="text-gray-500">
                {cert.issuingOrganization} - {cert.year}
              </p>
            </div>
          ))}
        </section>

        <div className="divider"></div>

        <section>
          <h2 className="text-2xl font-semibold text-secondary">Projects</h2>
          {projects.map((proj, index) => (
            <div
              key={`${proj.title}-${index}`}
              className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold">{proj.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {proj.description}
              </p>
              <p className="text-gray-500">
                Technologies: {formatTechnologies(proj.technologiesUsed)}
              </p>
              {proj.githubLink && (
                <a
                  href={proj.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub Link
                </a>
              )}
            </div>
          ))}
        </section>

        <div className="divider"></div>

        <section>
          <h2 className="text-2xl font-semibold text-secondary">
            Achievements
          </h2>
          {achievements.map((ach, index) => (
            <div
              key={`${ach.title}-${index}`}
              className="mb-4 p-4 rounded-lg shadow-md bg-base-200 border border-gray-300 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold">{ach.title}</h3>
              <p className="text-gray-500">{ach.year}</p>
              <p className="text-gray-600 dark:text-gray-300">
                {ach.extraInformation}
              </p>
            </div>
          ))}
        </section>

        <div className="divider"></div>

        <section>
          <h2 className="text-2xl font-semibold text-secondary">Languages</h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            {languages.map((lang, index) => (
              <li key={`${lang.name}-${index}`}>{lang.name}</li>
            ))}
          </ul>
        </section>

        <div className="divider"></div>

        <section>
          <h2 className="text-2xl font-semibold text-secondary">Interests</h2>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            {interests.map((interest, index) => (
              <li key={`${interest.name}-${index}`}>{interest.name}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="flex justify-center mt-4">
        <button type="button" onClick={handleDownloadPdf} className="btn btn-primary">
          Print
        </button>
      </section>
    </>
  );
};

export default Resume;
