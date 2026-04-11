# OtizKeeper - Technical PRD & Roadmap

## 1. Project Overview

[cite_start]OtizKeeper is a performance-driven human capital ecosystem designed to reshape workforce connections through structured systems[cite: 4, 66]. [cite_start]Unlike traditional job boards, it operates as a controlled matching engine that standardizes roles and profiles with AI-assisted intelligence[cite: 5, 7, 13].

[cite_start]**Core Philosophy:** People → Performance → Prosperity[cite: 80, 249].

---

## 2. System Principles & Rules

- [cite_start]**No Job Board Behavior:** No public job listings, no unrestricted applications, and no open browsing of the talent pool[cite: 5, 43, 271].
- **Bilateral Consent:** The system identifies matches, but **Talent must explicitly accept** a match before their profile is visible to the Employer.
- [cite_start]**Controlled Access:** Matches are filtered, ranked, and optionally reviewed by Admins before being sent to employers[cite: 33].
- [cite_start]**Structured Infrastructure:** HR is treated as business infrastructure, focusing on measurable outcomes rather than administration[cite: 89, 155].

---

## 3. Technical Stack

- **Frontend:** Next.js (App Router), Tailwind CSS v4 (CSS-first config), TypeScript.
- **Backend:** Node.js, Express.js, TypeScript.
- **ORM & Database:** Prisma ORM with PostgreSQL (Neon/Supabase).
- **AI Layer:** OpenAI API for CV parsing and role structuring.
- [cite_start]**Infrastructure:** Vercel (Frontend), Render (Backend)[cite: 9].

---

## 4. Service Ecosystem (The Four Pillars)

[cite_start]OtizKeeper operates across four interconnected service areas[cite: 91, 165]:

1. [cite_start]**Corporate HR & Performance Solutions:** Structured systems for growing organizations[cite: 92].
2. [cite_start]**Career Services:** Strategic positioning and mobility for professionals[cite: 94].
3. [cite_start]**Corporate Learning & Performance Academy:** Impact-driven training programs[cite: 96].
4. [cite_start]**Domestic Staffing Services:** Professionalizing household workforce management[cite: 98].

---

## 5. Database Schema (High-Level)

- **User:** Handles RBAC (EMPLOYER, TALENT, ADMIN).
- [cite_start]**TalentProfile:** Stores AI scores, skills, and O’Connect™ tier status[cite: 25, 36].
- **EmployerProfile:** Company details and industry information.
- [cite_start]**RoleRequest:** AI-structured workforce needs[cite: 28].
- **AiAnalysis:** JSON data from CV parsing, scores, and feedback.
- **Match:** Tracks the lifecycle (IDENTIFIED → PENDING_CONSENT → ACCEPTED → HIRED).
- [cite_start]**Tier (O’Connect™):** Basic, Verified, Premium visibility levels[cite: 35, 36].

---

## 6. Design Strategy

- **Visual Identity:** Purple (Primary), Charcoal Black, and High-Clarity White spaces.
- [cite_start]**UX Principles:** Serious, vision-driven, and uncluttered[cite: 147].
- **Hierarchy:** Architectural grid (8pt), subtle animations (Framer Motion), and card-based data grouping.

---

## 7. Implementation Milestones (Visual-First Roadmap)

### Milestone 1: Visual Foundation & Landing Page (P0)

- [ ] Setup Next.js with Tailwind CSS v4 (CSS-first theme configuration).
- [cite_start][ ] Build the Landing Page based on the March content flow [cite: 228-315].
- [cite_start][ ] Create clickable cards for the 4 core service pillars[cite: 171].

### Milestone 2: Interactive Flow Mockups (P0)

- [ ] Build the Talent Dashboard mockup (AI Score & Tier Badge display).
- [ ] Build the Match Consent UI (The "Accept Match" flow for talent).
- [ ] Build the Employer Dashboard mockup (Role Request summary & matched candidates).

### Milestone 3: Auth & Database Infrastructure (P1)

- [ ] Initialize Prisma and deploy schema to PostgreSQL.
- [ ] Build Express JWT authentication with role-based middleware.
- [ ] Implement basic Profile CRUD (Create, Read, Update, Delete).

### Milestone 4: AI Intelligence & Matching (P1)

- [ ] Integrate OpenAI for CV Parsing (Talent) and Role Structuring (Employer).
- [ ] Implement the Matching Algorithm (Skills + Experience + Tier).
- [ ] Finalize the "Bilateral Consent" state machine logic.

### Milestone 5: Admin Panel & Deployment (P2)

- [cite_start][ ] Build the Admin Dashboard for user/match moderation[cite: 38].
- [cite_start][ ] Deploy Frontend (Vercel) and Backend (Render)[cite: 9].
- [cite_start][ ] Performance Audit (Targeting <500ms API response)[cite: 18].
