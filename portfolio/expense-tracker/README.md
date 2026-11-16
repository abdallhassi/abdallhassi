# Expense Tracker — React & Spring Boot application

[← Portfolio](../../README.md) · [Browse actual source code](https://github.com/AbdAssi208/expense-tracker)

**React/Vite · Java/Spring Boot · JPA · PostgreSQL · Docker**

This coursework/personal full-stack application has real frontend and backend source, rather than just a concept README.

## Paths worth reviewing

- [API/controllers](https://github.com/AbdAssi208/expense-tracker/tree/main/backend/src/main/java/com/abd/expensetracker/controller) — authentication, categories, income and transactions.
- [Backend service implementations](https://github.com/AbdAssi208/expense-tracker/tree/main/backend/src/main/java/com/abd/expensetracker/service/impl) — per-user transaction handling and persistence.
- [Frontend modules](https://github.com/AbdAssi208/expense-tracker/tree/main/frontend/src/modules) — authentication, dashboard, incomes, categories and transactions.
- [Spring Security configuration](https://github.com/AbdAssi208/expense-tracker/blob/main/backend/src/main/java/com/abd/expensetracker/config/SecurityConfig.java) — protected routes and JWT filter.

## Technical note

The transaction service uses owner-scoped repository lookups when listing, retrieving, updating and deleting transactions. This is a concrete example of not relying solely on frontend authorization.

**Security limitations:** The existing public repository currently has development-default JWT secret and database credential values, enables the H2 console in one configuration, and has mixed PostgreSQL/H2 defaults. These need hardening and a full Git-history audit before any real deployment. I do **not** claim a production-hardened authentication system or currently working hosted demo.

**Build/test limitation:** I inspected the structure and selected source files; I have not run or certified the full stack end-to-end.
