# DevHub

> A full-stack project to practice React (Next.js), Express API, TypeScript, Docker, CI/CD, REST & GraphQL, hexagonal architecture, and monorepo patterns.

---

## 🏗 Architecture Overview

This project is structured as a **monorepo** using `pnpm` workspaces.  
It’s designed to be modular, scalable, and easy to test.                           

### Workspace Structure

```
DevHub/
├─ apps/
│ ├─ web/ # Next.js frontend
│ │ ├─ src/
│ │ └─ package.json
│ └─ api/ # Express backend
│ ├─ src/
│ │ ├─ app.ts
│ │ ├─ server.ts
│ │ └─ routes/
│ └─ package.json
├─ packages/
│ └─ config/ # Shared TypeScript config and settings
├─ package.json
├─ pnpm-workspace.yaml
└─ README.md
```

---

### 🔹 Backend (API)

- Built with **Express + TypeScript**  
- Follows a **hexagonal architecture** pattern (clean separation between application, domain, and infrastructure layers)  
- Example route: `/api/health` → returns `{ status: "ok" }`  
- `app.ts` defines routes & middleware, `server.ts` starts the server (separation allows easy testing)  
- Future additions:
  - REST & GraphQL endpoints
  - Swagger (OpenAPI)
  - Authentication & authorization
  - Prisma + MongoDB / PostgreSQL
  - OpenTelemetry integration

---

### 🔹 Frontend (Web)

- Built with **Next.js + TypeScript**  
- Uses **src/** folder for organization  
- Supports **absolute imports** and **shared UI packages**  
- Planned features:
  - Storybook + design tokens
  - Atomic design system
  - OAuth 2.0 authentication
  - CI/CD for deployment
  - Dockerized environment

---

### 🔹 Shared Packages

- `@devhub/config` → TypeScript shared config for apps and packages  
- Future UI packages for reusable components (`@devhub/ui`)

---

### 🧩 Monorepo Features

- Managed with **pnpm workspaces**  
- Single root lockfile for dependency consistency  
- Turbopack / Next.js configured for workspace awareness  
- ESLint + Prettier shared configuration

---

### 🚀 Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Start the whole project:
```bash
pnpm dev
```

To run single repo individually:
```bash
pnpm -F api dev/api
```


API health check: http://localhost:3001/api/health


