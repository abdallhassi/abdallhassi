# Abdallh Assi

**Software Engineering · Algorithms & Systems · Full-Stack Development**

B.Sc. **Computer Science & Management**, Tel Aviv University. I enjoy turning CS fundamentals into working code—from numerical C/Python extensions and advanced data structures to role-based web applications.

[LinkedIn](https://www.linkedin.com/in/abdallhassi/) · [Email](mailto:abd90assi@gmail.com) · [Engineering work ↓](#selected-engineering-work)

---

## Selected engineering work

### 01 · Salati — Youth Engagement Platform
**Next.js · TypeScript · Supabase/PostgreSQL · API authorization · Geospatial rules**

A real-user, Arabic-first application with separate **student, mentor and administrator** workflows for tasks, reviews, progress and rewards.

**Engineering challenges:** server-side authorization, role-scoped APIs, time/location eligibility, duplicate-submission handling, and responsible activity telemetry.

**Pilot evidence:** a July 2026 internal report recorded 71 registered student accounts and 51 with activity at some point. These are dated counts, not current active users.

**[Read the architecture & engineering case study →](portfolio/salati/README.md)** · [Browse a sanitized code example](portfolio/salati/geometry.mjs) · [See its tests](portfolio/salati/geometry.test.mjs)

*The original [Salati repository](https://github.com/abdallhassi/salati) remains private to protect participant information and allow a deeper security review. The public excerpt is isolated and uses synthetic coordinates.*

### 02 · SymNMF — Numerical Clustering Engine
**C · Python · NumPy · Native extension · Valgrind**

Implemented symmetric nonnegative matrix factorization operations in C with Python integration, investigated memory/integration issues on Linux, and compared clustering results with K-Means using silhouette scores.

**Course project grade:** 100/100 (per résumé). **[Technical case study →](portfolio/symnmf/README.md)**

*Source files are not claimed to be public or independently reviewed yet.*

### 03 · Advanced Data Structures — AVL Trees & Fibonacci Heaps
**Python · Data Structures · Complexity Analysis**

Coursework in self-balancing search trees and heap operations, including rotations, deletion, consolidation and cascading cuts. Worked with **Emad Khaled**, as credited in the original repo.

**Course project grade:** 100/100 (per résumé). [Original assignment archives](https://github.com/AbdAssi208/data-structures) · **[Project context →](portfolio/advanced-data-structures/README.md)**

*The existing submissions are ZIP archives; browsable source and repeatable tests are being organized.*

### 04 · Expense Tracker — Frontend & Backend
**React · Vite · Java · Spring Boot · PostgreSQL · Docker**

A finance-tracking app with source code for transactions, categories, income, authentication and user-scoped backend operations.

**[Browse actual source →](https://github.com/AbdAssi208/expense-tracker)** · [Read what to inspect and current limitations](portfolio/expense-tracker/README.md)

*The repository has development settings requiring security hardening; no production security or live deployment claim is made.*

---

## Technical toolkit

| Area | Technologies |
| --- | --- |
| **Languages** | C, C++, Python, Java, TypeScript, SQL |
| **Foundations** | Algorithms, data structures, OOP, complexity analysis |
| **Web & data** | Next.js, React, REST APIs, Spring Boot, PostgreSQL, Supabase |
| **Systems & tools** | Linux, Git, Docker, Valgrind, debugging |

## Quick paths for reviewers

- **2 minutes:** [Salati engineering decisions and honest limitations](portfolio/salati/README.md#decisions-and-trade-offs).
- **Code review:** [Expense Tracker backend service logic](https://github.com/AbdAssi208/expense-tracker/tree/main/backend/src/main/java/com/abd/expensetracker/service/impl).
- **Runnable minimal example:** `node --test portfolio/salati/geometry.test.mjs` from this repository.

> **Portfolio note:** I distinguish code that is public and inspectable from case studies based on private code or course submissions. I do not claim that an untested build, security property, or usage metric has been verified.

---

<sub>Primary public engineering portfolio: [github.com/abdallhassi](https://github.com/abdallhassi). Earlier coursework repositories remain under [AbdAssi208](https://github.com/AbdAssi208) while code and history are reviewed for consolidation.</sub>
