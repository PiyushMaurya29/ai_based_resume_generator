# AI Based Resume Generator

AI Based Resume Generator is a full-stack web application that turns a plain-English career description into a structured, editable resume. The frontend provides a guided resume-generation workflow and PDF export, while the backend uses Spring AI with Ollama to generate resume JSON from a reusable prompt template.

## Features



- Generate resume content from a natural-language profile description
- Review and edit personal details, summary, skills, experience, education, certifications, projects, achievements, languages, and interests
- Export the generated resume as a PDF
- Local AI workflow using Ollama through Spring AI
- Responsive React UI built with Tailwind CSS and DaisyUI
- REST API backend built with Spring Boot

## Tech Stack

**Frontend:** React, Vite, Tailwind CSS, DaisyUI, React Hook Form, Axios, jsPDF, html-to-image

**Backend:** Java 21, Spring Boot, Spring AI, Ollama, Maven

## Project Structure

```text
ai_based_resume_generator/
├── resume_frontend/       # React + Vite client
├── resume-ai-backend/     # Spring Boot API
├── README.md              # Project documentation
├── LICENSE                # MIT license
└── .gitignore             # Git hygiene rules
```

## Prerequisites

- Node.js 18 or newer
- Java 21
- Maven, or the included Maven wrapper
- Ollama installed and running locally
- An Ollama chat model, for example:

```bash
ollama pull deepseek-r1:latest
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/your-username/ai_based_resume_generator.git
cd ai_based_resume_generator
```

### 1. Start the Backend

```bash
cd resume-ai-backend
./mvnw spring-boot:run
```

On Windows PowerShell:

```powershell
cd resume-ai-backend
.\mvnw.cmd spring-boot:run
```

The backend runs at:

```text
http://localhost:8080
```

By default, the backend uses `deepseek-r1:latest`. To use another Ollama model:

```bash
OLLAMA_CHAT_MODEL=llama3.1:latest ./mvnw spring-boot:run
```

### 2. Start the Frontend

Open a second terminal:

```bash
cd resume_frontend
npm install
npm run dev
```

The frontend runs at:

```text
http://localhost:5173
```

If your backend runs on a different URL, create `resume_frontend/.env`:

```env
VITE_API_BASE_URL=http://localhost:8080
```

## API Overview

### Generate Resume

```http
POST /api/v1/resume/generate
Content-Type: application/json
```

Request body:

```json
{
  "userDescription": "I am a Java developer with two years of Spring Boot experience..."
}
```

The backend returns a parsed response with generated resume data under the `data` key.

## Quality Checks

Frontend:

```bash
cd resume_frontend
npm run lint
npm run build
```

Backend:

```bash
cd resume-ai-backend
./mvnw test
```

On Windows PowerShell:

```powershell
cd resume-ai-backend
.\mvnw.cmd test
```

## Resume Highlights

You can describe this project on a resume as:

> Built a full-stack AI resume generator using React, Spring Boot, Spring AI, and Ollama, enabling users to generate editable resume sections from natural-language input and export the final resume as a PDF.

## Future Improvements

- Add authentication and saved resume history
- Add multiple resume templates
- Improve PDF pagination for long resumes
- Add deployment configuration for cloud hosting

## License

This project is licensed under the MIT License.
