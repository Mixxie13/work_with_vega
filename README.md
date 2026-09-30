# Vega Morada — portfolio

A Next.js portfolio refreshed with a dark navy technical theme, subtle grid, blue/teal accents, connected workflow illustration, and responsive layouts. The abstract logo uses two flowing ribbons and the same blue-to-teal gradient (#6EAEFF to #55D4C3) as the portfolio. It appears in the header, footer, and browser icon. The full Vega Morada logo on the portfolio’s navy background is available as `public/vega-morada-logo.svg`. The portrait, client case studies, project descriptions, and contact links are retained.

## Requested updates

- 6+ years of experience.
- 6+ CRM implementations.
- AI Content Repurposing Engine explicitly uses Zapier in its tags and implementation description.
- Testimonials are not displayed.
- All 23 projects from the supplied old portfolio are included: Zoho (7), n8n (5), Make.com (8), Zapier (3), with an All filter.
- Company names display as We Clear Junk and The Lucky Harvest, without acronyms.
- Introduction says “From CRMs to AI automation”.
- API Orchestration Workflows and AI Operations Automation were removed at the owner's request.
- Tools use four category cards. Added HubSpot, Pipedrive, GoHighLevel, WordPress, and LinkedIn Sales Navigator. Removed Lucidspark.
- The hours card displays 3.6 hrs and “Average saved / worker / week”, without a visible research note or source link at the owner's request. This number comes from self-reported automation savings in Slack’s 2023 survey, not measured client results; the underlying source is documented in `automation-time-savings-research.md`.
- 19 project screenshots are bundled locally in `public/projects`. The old WooCommerce Product Variant Updates screenshot URL returns 404; its project details remain included with a styled illustration instead.

## Run locally

Requires Node.js 20.9 or newer.

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

```bash
pnpm typecheck
pnpm build
pnpm start
```

The optional Sharp install script is disabled in `pnpm-workspace.yaml`; this project uses unoptimized images and ships the platform's prebuilt dependency.

## Contact form

Copy `.env.local.example` to `.env.local` and configure `EMAIL_USER` and `EMAIL_PASSWORD` with your Gmail sender account and app password. Never commit `.env.local`. The email route is retained from the original portfolio. The form now shows sending, success, and error states, and includes direct email/LinkedIn/Upwork alternatives.

The site can be deployed on your existing Next.js host. Upload the source to the existing repository or import it in your existing v0 project. This package does not deploy or change your live website.

## Main files

- `components/hero.tsx`: introduction, workflow illustration, experience counts.
- `components/header.tsx`: desktop and mobile navigation.
- `components/services.tsx`: services.
- `components/experience.tsx`: original case studies.
- `components/projects.tsx`: project examples and accessible detail expanders.
- `components/contact.tsx`: contact links and form.
- `app/globals.css`: colors, grid, layouts, and responsive styles.
