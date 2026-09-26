# PrepOS - AI-Powered Placement Preparation Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-0.1.0-blue)](https://github.com/SujithRK768/PrepOS)
[![Python](https://img.shields.io/badge/Python-3.10%2B-brightgreen)](https://www.python.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-brightgreen)](https://nodejs.org/)
feat/phase3-frontend-complete

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

[![FastAPI](https://img.shields.io/badge/FastAPI-0.104-green)](https://fastapi.tiangolo.com/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)

## 🎯 Overview

**PrepOS** is an AI-powered platform designed to help students and job seekers prepare for technical placement interviews and assessments. The platform combines:

- **Adaptive Readiness Assessment** - Benchmark placement readiness against company tiers (FAANG, Fintech, Product, Service)
- **AI Dynamic Mock Interviewer** - Real-time interview sessions with LLM-generated follow-up questions
- **Live Coding Environment** - Monaco Editor-based code workspace with problem statements
- **Comprehensive Analytics** - Multi-dimensional scorecards (Technical Accuracy, Communication, Code Quality)
- **Personalized Feedback** - Actionable improvement recommendations based on performance

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                  FRONTEND (Next.js 14)                          │
├─────────────────────────────────────────────────────────────────┤
│ • Dashboard: Readiness Radar & Company Tier Benchmarking        │
│ • Interview Room: Monaco Editor + Live Transcript               │
│ • Analytics: Detailed Scorecards & Recommendations              │
│ • Dark Theme UI with Recharts Visualizations                    │
└──────────────────────┬──────────────────────────────────────────┘
                       │ REST API (JSON)
                       │ HTTP/HTTPS
                       ▼
┌─────────────────────────────────────────────────────────────────┐
│                   API LAYER (FastAPI)                           │
├─────────────────────────────────────────────────────────────────┤
│ • Interview Sessions: Create, update, retrieve session state    │
│ • LLM Service: GPT-3.5-turbo for Q&A generation & evaluation    │
│ • Readiness Scoring: Calculate weighted placement readiness     │
│ • Answer Evaluation: Multi-dimensional candidate assessment     │
│ • Scorecard Generation: Aggregate feedback & recommendations    │
└──────────────────────┬──────────────────────────────────────────┘
                       │ ORM (Prisma)
                       │ PostgreSQL Queries
                       ▼
┌─────────────────────────────────────────────────────────────────┐
│                DATABASE (PostgreSQL)                            │
├─────────────────────────────────────────────────────────────────┤
│ • Users: Candidate profiles & credentials                       │
│ • Skills: Skill benchmarks & assessment history                 │
│ • Interviews: Session records & metadata                        │
│ • Feedback: Scorecards & evaluation results                     │
└─────────────────────────────────────────────────────────────────┘
```

### Technology Stack

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Frontend** | Next.js 14 (App Router) | Server-side rendering, API integration |
| **UI Library** | React 18 + Tailwind CSS | Component-based UI with dark theme |
| **Code Editor** | Monaco Editor | Live code editing with syntax highlighting |
| **Visualizations** | Recharts | Interactive charts (Radar, Bar, Line) |
| **Backend** | FastAPI (Python) | Async REST API with automatic documentation |
| **LLM** | OpenAI GPT-3.5-turbo | Dynamic question generation & evaluation |
| **Database** | PostgreSQL 14+ | Relational data storage |
| **ORM** | Prisma | Schema management & type-safe queries |
| **Authentication** | JWT (Future Phase) | Secure API access |

---

## ✨ Feature Breakdown

### Phase 1: Foundation & Data Layer ✅
- **Database Schema** with Prisma
  - User profiles with role-based access
  - Skill benchmarks by domain and company tier
  - Interview sessions with comprehensive metadata
  - Feedback and evaluation records
- **Readiness Score Calculation**
  - Weighted scoring across 7 skill domains
  - Company-tier specific weight adjustments
  - Percentile-based assessment
- **Initial API Endpoints**
  - `POST /api/v1/readiness/score` - Calculate placement readiness
  - Ready for Prisma integration

### Phase 2: AI Mock Interviewer ✅
- **Real-time Interview Sessions**
  - Stateful session management with UUIDs
  - Dynamic question generation via LLM
  - Live follow-up question generation
- **LLM Integration**
  - OpenAI GPT-3.5-turbo integration
  - System prompt for technical interviewer
  - Context-aware follow-up questions
  - JSON-based structured answer evaluation
- **Multi-Dimensional Scoring**
  - Technical: correctness, approach, code quality, edge cases
  - Communication: clarity, understanding, articulation, collaboration
  - Weighted overall scoring formula
- **Interview API Endpoints**
  - `POST /api/v1/interview/session/init` - Start interview
  - `POST /api/v1/interview/session/{id}/answer` - Submit answer & get follow-up
  - `POST /api/v1/interview/scorecard` - Generate final scorecard
  - `GET /api/v1/interview/session/{id}` - Retrieve session details

### Phase 3: Frontend Dashboard & Analytics ✅
- **Readiness Dashboard** (`/dashboard`)
  - 5-dimensional skill radar chart
  - Company tier benchmarking (FAANG, Fintech, Product, Service)
  - Top strengths and focus areas sidebar
  - Overall readiness score with performance badges
- **Interview Room** (`/interview`)
  - Interview setup with difficulty selection
  - Monaco Editor for live code editing
  - Countdown timer (45 minutes default)
  - Dual-pane layout: Editor + Transcript
  - Dynamic Q&A interview flow
  - Answer submission with explanation capture
- **Analytics Report** (`/analytics`)
  - Technical accuracy breakdown (6 metrics)
  - Communication skills assessment (4 dimensions)
  - Performance trend line chart
  - Strengths and improvement areas
  - Personalized action recommendations
  - Interview duration and progress tracking

### Phase 4: Documentation & Consolidation ✅
- Comprehensive README with setup instructions
- Architecture documentation
- API reference guide
- Feature breakdown
- Local development workflow

---

## 📁 Project Structure

```
PrepOS/
├── apps/
│   ├── web/                              # Next.js Frontend
│   │   ├── app/
│   │   │   ├── dashboard/page.tsx        # Readiness dashboard
│   │   │   ├── interview/page.tsx        # Interview room
│   │   │   ├── analytics/page.tsx        # Post-interview analytics
│   │   │   ├── page.tsx                  # Home page
│   │   │   ├── layout.tsx                # Root layout
│   │   │   └── globals.css               # Global styles
│   │   ├── components/                   # Reusable UI components
│   │   ├── lib/                          # Utilities
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── tailwind.config.ts
│   │   ├── next.config.js
│   │   └── .env.example
│   │
│   └── backend/                          # FastAPI Backend
│       ├── app/
│       │   ├── api/v1/
│       │   │   ├── interview.py          # Interview endpoints
│       │   │   ├── readiness.py          # Readiness endpoints
│       │   │   └── routes.py
│       │   ├── schemas/                  # Pydantic models
│       │   │   ├── interview.py
│       │   │   ├── readiness.py
│       │   │   └── user.py
│       │   ├── services/                 # Business logic
│       │   │   ├── llm_service.py        # LLM integration
│       │   │   ├── interview_service.py  # Interview flow
│       │   │   └── readiness_service.py  # Scoring logic
│       │   ├── models/                   # SQLAlchemy models
│       │   ├── core/                     # Configuration
│       │   └── main.py                   # FastAPI entry point
│       ├── requirements.txt
│       ├── .env.example
│       └── README.md
│
├── infra/
│   └── docker-compose.yml                # Docker services
│
├── docs/
│   ├── ARCHITECTURE.md                   # Detailed architecture
│   ├── API.md                            # API documentation
│   └── SETUP.md                          # Setup guide
│
├── .gitignore
├── README.md                             # This file
└── package.json                          # Monorepo root
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** - [Download](https://nodejs.org/)
- **Python 3.10+** - [Download](https://www.python.org/)
- **PostgreSQL 14+** - [Download](https://www.postgresql.org/)
- **Git** - [Download](https://git-scm.com/)
- **OpenAI API Key** - [Get key](https://platform.openai.com/api-keys)

### Step 1: Clone Repository
main

```bash
git clone https://github.com/SujithRK768/PrepOS.git
cd PrepOS
```

feat/phase3-frontend-complete
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

### Step 2: Backend Setup

```bash
cd apps/backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env

# Edit .env with your values:
# DATABASE_URL=postgresql://user:password@localhost:5432/prepos
# OPENAI_API_KEY=sk_your_key_here
# ENV=development
```

### Step 3: Database Setup

**Option A: Using Docker**
```bash
cd infra
docker-compose up -d
# PostgreSQL starts on localhost:5432
```

**Option B: Manual PostgreSQL**
```bash
createdb prepos
# Update DATABASE_URL in apps/backend/.env
```

### Step 4: Frontend Setup

```bash
cd apps/web

# Install dependencies
npm install

# Configure environment
cp .env.example .env.local

# Edit .env.local:
# NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Step 5: Run Applications

**Terminal 1 - Backend**
```bash
cd apps/backend
source venv/bin/activate
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

**Terminal 2 - Frontend**
```bash
cd apps/web
npm run dev
```

### Step 6: Verify Setup

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8000/docs
- **Health Check:** `curl http://localhost:8000/health`

---

## 📚 API Documentation

### Base URL
```
http://localhost:8000/api/v1
```

### Interactive Docs
Visit **http://localhost:8000/docs** for Swagger UI with all endpoints

### Core Endpoints

#### 1. Initialize Interview Session
```http
POST /interview/session/init
Content-Type: application/json

{
  "candidate_id": "cand_123",
  "interview_topic": "DSA",
  "difficulty": "medium",
  "duration_minutes": 45,
  "num_questions": 3
}
```

**Response (200)**
```json
{
  "session_id": "550e8400-e29b-41d4-a716-446655440000",
  "candidate_id": "cand_123",
  "interview_topic": "DSA",
  "difficulty": "medium",
  "first_question": "Given an array of integers, find the two numbers that add up to a target...",
  "started_at": "2026-09-26T12:00:00Z"
}
```

#### 2. Submit Answer & Get Follow-Up
```http
POST /interview/session/{session_id}/answer
Content-Type: application/json

{
  "session_id": "550e8400-e29b-41d4-a716-446655440000",
  "candidate_answer": {
    "question_id": "q1",
    "question_text": "Two Sum Problem...",
    "answer": "I would use a hash map...",
    "code_snippet": "def twoSum(nums, target):\n    seen = {}\n    for num in nums:\n        ...",
    "approach_explanation": "Hash map for O(n) time complexity",
    "time_taken_seconds": 540,
    "confidence": 85
  }
}
```

**Response (200)**
```json
{
  "session_id": "550e8400-e29b-41d4-a716-446655440000",
  "follow_up_question": "Good! Now, what if we need to handle duplicate numbers?",
  "rationale": "Follow-up generated based on candidate response analysis.",
  "question_number": 1,
  "is_final": false
}
```

#### 3. Generate Interview Scorecard
```http
POST /interview/scorecard
Content-Type: application/json

{
  "session_id": "550e8400-e29b-41d4-a716-446655440000",
  "candidate_id": "cand_123",
  "interview_topic": "DSA",
  "answers": [...]
}
```

**Response (200)**
```json
{
  "session_id": "550e8400-e29b-41d4-a716-446655440000",
  "candidate_id": "cand_123",
  "scorecard": {
    "technical_accuracy": {
      "correctness": 88,
      "approach": 82,
      "code_quality": 85,
      "edge_case_handling": 76,
      "time_complexity": 90,
      "space_complexity": 78
    },
    "communication": {
      "clarity": 87,
      "problem_understanding": 89,
      "articulation": 84,
      "collaboration": 88
    },
    "overall_score": 84.5,
    "strengths": ["Strong algorithmic thinking", "Clear code articulation"],
    "areas_for_improvement": ["Edge case handling", "Trade-off explanation"],
    "detailed_feedback": "..."
  },
  "recommendations": ["Continue practicing edge cases..."],
  "generated_at": "2026-09-26T12:15:00Z"
}
```

#### 4. Calculate Readiness Score
```http
POST /readiness/score
Content-Type: application/json

{
  "candidate_id": "cand_123",
  "answers": [
    {
      "question_id": "q1",
      "category": "DSA",
      "score": 88,
      "difficulty": "medium",
      "time_taken_seconds": 540,
      "confidence": 80
    }
  ]
}
```

**Response (200)**
```json
{
  "candidate_id": "cand_123",
  "overall_readiness_score": 81.64,
  "readiness_level": "Strong",
  "benchmark_scores": [
    { "category": "DSA", "score": 82, "weight": 0.3 },
    { "category": "SYSTEM_DESIGN", "score": 76, "weight": 0.2 }
  ],
  "generated_at": "2026-09-26T12:00:00Z"
}
```

---

## 🎓 User Workflow

### For Candidates

1. **Visit Dashboard** (`/dashboard`)
   - View placement readiness score
   - See skill benchmarks across 5 dimensions
   - Check company tier readiness (FAANG, Fintech, Product, Service)
   - Identify strengths and focus areas

2. **Start Mock Interview** (`/interview`)
   - Select interview topic and difficulty
   - Receive AI-generated technical question
   - Write code in Monaco Editor
   - Provide explanation of approach
   - Receive dynamic follow-up questions based on response
   - Complete 3-5 interview questions

3. **Review Performance** (`/analytics`)
   - View detailed scorecard with 10+ metrics
   - See performance trends over multiple interviews
   - Read personalized strengths and improvement areas
   - Get actionable recommendations
   - Download report (future feature)

---

## 🔐 Environment Configuration

### Backend (.env)

```bash
# Database
DATABASE_URL=postgresql://postgres:password@localhost:5432/prepos

# OpenAI API
OPENAI_API_KEY=sk_your_key_here

# Server
ENV=development
HOST=0.0.0.0
PORT=8000

# JWT (Future)
SECRET_KEY=your_secret_key
ALGORITHM=HS256
```

### Frontend (.env.local)

```bash
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_APP_NAME=PrepOS
```

---

## 🧪 Testing

### Backend Tests
```bash
cd apps/backend
pytest --cov=app
```

### Frontend Tests
```bash
cd apps/web
npm run test
npm run test:coverage
```

---

## 📊 Database Schema

### Users
```sql
CREATE TABLE user_profiles (
  id VARCHAR PRIMARY KEY,
  email VARCHAR UNIQUE NOT NULL,
  name VARCHAR NOT NULL,
  role VARCHAR,
  college VARCHAR,
  target_tier VARCHAR,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Skills
```sql
CREATE TABLE skill_benchmarks (
  id VARCHAR PRIMARY KEY,
  user_id VARCHAR NOT NULL,
  skill_name VARCHAR NOT NULL,
  category VARCHAR NOT NULL,
  score FLOAT NOT NULL,
  percentile FLOAT,
  target_tier VARCHAR,
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES user_profiles(id)
);
```

### Interview Sessions
```sql
CREATE TABLE interview_sessions (
  id VARCHAR PRIMARY KEY,
  user_id VARCHAR NOT NULL,
  type VARCHAR NOT NULL,
  status VARCHAR NOT NULL,
  overall_score FLOAT,
  technical_score FLOAT,
  communication_score FLOAT,
  started_at TIMESTAMP,
  ended_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES user_profiles(id)
);
```

### Feedback
```sql
CREATE TABLE feedback (
  id VARCHAR PRIMARY KEY,
  user_id VARCHAR NOT NULL,
  interview_session_id VARCHAR,
  type VARCHAR NOT NULL,
  content TEXT,
  score FLOAT,
  created_at TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES user_profiles(id),
  FOREIGN KEY (interview_session_id) REFERENCES interview_sessions(id)
);
```

---

## 🎯 Roadmap

### Current Release (v0.1.0)
- ✅ Phase 1: Database schema and readiness scoring API
- ✅ Phase 2: AI mock interviewer with LLM integration
- ✅ Phase 3: Full frontend dashboard and analytics
- ✅ Phase 4: Documentation and consolidation

### Future Phases

**Phase 5: Code Execution & Testing**
- Judge0 API integration for live code execution
- Real-time code testing and validation
- Test case evaluation

**Phase 6: Voice & Speech**
- Speech-to-text transcription
- Audio interview capability
- Real-time transcript generation

**Phase 7: Advanced Features**
- User authentication and authorization
- Interview session persistence
- Progress tracking dashboard
- Peer benchmarking
- Study recommendations engine

**Phase 8: Mobile & Enterprise**
- React Native mobile app
- Enterprise dashboard
- Bulk candidate management
- Analytics and reporting

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add your feature description"
   ```
4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request**

For detailed guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 📄 License

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) file for details.

---

## 🐛 Troubleshooting

### Backend Issues

**Error: `No module named 'app'`**
- Solution: Ensure you're in `apps/backend` directory with virtual environment activated

**Error: `Database connection refused`**
- Solution: Verify PostgreSQL is running on localhost:5432
- Check DATABASE_URL in .env file
- Run `docker-compose up -d` if using Docker

**Error: `OPENAI_API_KEY not set`**
- Solution: Add valid OpenAI API key to .env file
- Get key from https://platform.openai.com/api-keys

### Frontend Issues

**Error: `Module not found: @monaco-editor/react`**
- Solution: Run `npm install` in apps/web directory

**Error: `API connection refused`**
- Solution: Ensure backend is running on localhost:8000
- Check NEXT_PUBLIC_API_URL in .env.local

---

## 📞 Support & Contact

- **GitHub Issues:** [Create an issue](https://github.com/SujithRK768/PrepOS/issues)
- **Email:** sujith777star@gmail.com
- **GitHub:** [@SujithRK768](https://github.com/SujithRK768)

---

## 🌟 Show Your Support

If you find PrepOS helpful, please consider starring the repository!

⭐ [Star PrepOS](https://github.com/SujithRK768/PrepOS)

---

## 📖 Additional Documentation

- **[Architecture Deep Dive](docs/ARCHITECTURE.md)** - Detailed system design
- **[API Reference](docs/API.md)** - Complete API documentation
- **[Setup Guide](docs/SETUP.md)** - Detailed installation instructions

---

**Last Updated:** September 26, 2026  
**Version:** 0.1.0 (Beta)  
**Status:** 🚀 In Active Development

Made with ❤️ by [SujithRK768](https://github.com/SujithRK768)
main
