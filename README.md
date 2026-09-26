# PrepOS - AI-Powered Placement Preparation Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-0.1.0-blue)](https://github.com/SujithRK768/PrepOS)
[![Python](https://img.shields.io/badge/Python-3.10%2B-brightgreen)](https://www.python.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-brightgreen)](https://nodejs.org/)

## Overview

PrepOS is an AI-powered placement preparation platform designed to help students and job seekers prepare for technical interviews and placement rounds. The platform combines adaptive readiness benchmarking, dynamic mock interview sessions, live coding practice, and detailed post-interview analytics.

### Core Goals
- Benchmark candidate readiness against company tiers: FAANG, Fintech, Product, and Service
- Generate dynamic technical interview questions using LLMs
- Evaluate candidate responses for technical accuracy, communication, and edge-case reasoning
- Provide actionable feedback and personalized improvement recommendations
- Help students monitor readiness trends over time

---

## Architecture

### System Layers

- Frontend: Next.js App Router
- Backend: FastAPI
- Database: PostgreSQL + Prisma
- AI Layer: OpenAI GPT-based interviewer and evaluator
- Analytics: Scorecards and readiness summaries

### High-Level Flow

```text
Candidate Profile
      ↓
Readiness Assessment
      ↓
Mock Interview Session
      ↓
LLM Question Generation + Candidate Answer Analysis
      ↓
Technical + Communication Scorecard
      ↓
Dashboard & Improvement Recommendations
```

---

## Key Features

### 1. Adaptive Placement Readiness Dashboard
- Candidate readiness score across several dimensions
- Company-tier benchmarking
- Skill-level radar chart
- Actionable improvement suggestions

### 2. AI Dynamic Mock Interviewer
- Start live interview sessions
- Generate real-time follow-up questions based on prior answers
- Evaluate candidate reasoning, code quality, and communication
- Maintain session state for interactive interview flow

### 3. Live Coding Workspace
- Monaco Editor-based code environment
- Real-time coding prompts
- Candidate answer capture with explanation and context

### 4. Post-Interview Analytics
- Technical accuracy scoring
- Communication score
- Edge-case handling assessment
- Detailed feedback and recommendation engine

---

## Tech Stack

| Layer | Stack |
|-------|-------|
| Frontend | Next.js, React, TypeScript, Tailwind CSS |
| Backend | FastAPI, Python |
| Database | PostgreSQL |
| ORM / Schema | Prisma |
| AI | OpenAI API |
| Editor | Monaco Editor |
| Visualization | Recharts |

---

## Repository Structure

```text
PrepOS/
├── apps/
│   ├── web/                     # Next.js frontend
│   │   ├── app/
│   │   ├── components/
│   │   ├── lib/
│   │   └── package.json
│   └── backend/                # FastAPI backend
│       ├── app/
│       ├── requirements.txt
│       └── .env.example
├── infra/
│   └── docker-compose.yml
├── docs/
│   ├── architecture.md
│   └── api-documentation.md
├── .gitignore
├── README.md
├── package.json
└── LICENSE
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js 18+
- Python 3.10+
- PostgreSQL 14+
- npm or yarn
- Git

### 1. Clone the repository

```bash
git clone https://github.com/SujithRK768/PrepOS.git
cd PrepOS
```

### 2. Backend setup

```bash
cd apps/backend
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
```

Update the backend `.env` file with your actual values:

```bash
DATABASE_URL=postgresql://postgres:password@localhost:5432/prepos
OPENAI_API_KEY=your_openai_api_key
ENV=development
HOST=0.0.0.0
PORT=8000
```

#### Start backend

```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

API docs will be available at:
- http://localhost:8000/docs

### 3. Frontend setup

```bash
cd apps/web
npm install
cp .env.example .env.local
```

Update the frontend `.env.local`:

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
```

#### Start frontend

```bash
npm run dev
```

Frontend will be available at:
- http://localhost:3000

---

## Local Development Workflow

### Authentication and user setup
- Create a candidate profile and role preferences
- Save desired company tier (FAANG, Fintech, Product, Service)
- Track historical skill scores

### Readiness scoring flow
- Candidate answer data is submitted to readiness scoring endpoint
- Skill benchmarks are aggregated by domain
- Overall readiness score is calculated using weighted scoring
- Dashboard updates with current benchmark levels

### Interview flow
- Start a mock interview session from frontend
- Receive first LLM-generated question
- Submit answer with code or explanations
- Continue with dynamic follow-up questions
- Generate scorecard after completion

---

## API Routes

### Readiness Endpoint
- `POST /api/v1/readiness/score`
- Calculates placement readiness based on candidate responses and skill benchmarks

### Interview Endpoints
- `POST /api/v1/interview/session/init`
- `POST /api/v1/interview/session/{session_id}/answer`
- `POST /api/v1/interview/scorecard`
- `GET /api/v1/interview/session/{session_id}`

---

## Database Models (Current Phase)

### User
- id
- email
- name
- role
- college
- graduationYear
- targetTier
- createdAt
- updatedAt

### Skill
- id
- userId
- name
- domain
- score
- percentile
- targetLevel
- confidence
- lastAssessedAt

### InterviewSession
- id
- userId
- mode
- status
- questionSet
- durationMinutes
- overallScore
- technicalScore
- communicationScore
- summary
- createdAt
- updatedAt

### Feedback
- id
- userId
- interviewSessionId
- type
- title
- content
- score
- createdAt

---

## Roadmap

### Current Phase
- Readiness dashboard foundation
- AI interview session flow
- Scorecard generation logic
- Frontend dashboard MVP

### Next Phases
- Judge0 code execution integration
- Speech-to-text interviews
- Candidate authentication and authorization
- Persistent database integration for all interview data
- Recommendation engine and adaptive study paths

---

## Contributing

We welcome contributions from developers, designers, and recruiters. Please follow the usual GitHub flow:

```bash
git checkout -b feature/your-feature-name
git commit -m "Add your feature"
git push origin feature/your-feature-name
```

Then open a pull request against the repository.

---

## License

This project is licensed under the MIT License.

---

## Support

For questions, feedback, or bug reports, open an issue in the GitHub repository or contact the maintainer.

---

## Maintainer

- SujithRK768
- GitHub: https://github.com/SujithRK768
