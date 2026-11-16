# Salati — Engineering Case Study

**Arabic-first youth-engagement application | Next.js · TypeScript · Supabase/PostgreSQL**

[← Portfolio home](../../README.md) · [Sanitized technical example](geometry.mjs) · [Example tests](geometry.test.mjs)

> This is a **public engineering write-up**, not an open-source release of the operational platform. The source repository stays private because its history contains participant-related records.

## What I built

Salati supports **students, mentors and administrators** in structured challenges. Students can submit activities and see progress; mentors can review submissions for assigned participants; administrators manage program tasks and settings. The app also includes points, achievements and task-review workflows.

A July 2026 internal cohort report counted **71 registered student accounts** and **51 with activity recorded at some point**. Those are historical figures, not a current active-user count. The larger submission/page-view figures in an earlier résumé have not been independently checked here.

## Architecture at a glance

```text
Arabic RTL UI (Student / Mentor / Admin)
                    |
             Next.js App Router
                    |
                API routes
                    |
         Session + role checks
                    |
         Domain rules / services
                    |
           Supabase / PostgreSQL
```

## Decisions and trade-offs

### Role boundaries live server-side

The private source contains authentication and authorization utilities and role-scoped API handling. Mentor-to-student access is checked on the server; hiding controls in the browser isn't a substitute for authorization.

**Limit:** This does not establish that every endpoint has passed a full security audit.

### Eligibility signals aren't real-world proof

Prayer-documentation workflows include configurable time-window checks, duplicate handling and optional checks of a reported position against configured mosque zones. Geometry and GPS accuracy are relevant to submission eligibility.

**Limit:** GPS, timestamps and uploaded images **cannot prove that someone prayed**. AI-based image verification was explored experimentally and should not be described as reliable verification of prayer completion.

### Rewards need idempotency

Reward utilities handle existing submissions and try to avoid duplicate point awards, including unique-entry conflict handling.

**Limit:** Sequential duplicate prevention is not a substitute for proven concurrency-safe, exactly-once behavior.

### Observe behavior without exposing participants

The app has an explicit analytics-event map and an internal retention report. Public portfolio descriptions omit identifying data, exact participant locations, user-submitted content and operational dashboards.

## What can be reviewed here

- [Small standalone geometry excerpt](geometry.mjs): synthetic locations, no accounts, no database.
- [Six executable tests](geometry.test.mjs) for that example. Run with `node --test portfolio/salati/geometry.test.mjs`.
- [Original repository](https://github.com/abdallhassi/salati) is **private** and intentionally not linked as publicly browseable code.

The public excerpt illustrates one kind of engineering decision; it is **not the full production implementation**. The tests do not establish the deployed app's correctness or security.

## Next engineering improvements

1. Review session expiry, secret handling and every route's authorization.
2. Add explicit concurrency/idempotency testing for rewards.
3. Validate build, API integration and operational monitoring with repeatable test runs.
4. Publish only synthetic demos and scrubbed screenshots.
