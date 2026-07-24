# Reckley Ventures, LLC — Official Website

Premium corporate website and KAR legal/compliance center for Reckley Ventures, LLC.

## Local development

```bash
npm install
npm run dev
```

Production validation:

```bash
npm run build
```

The generated static site is written to `dist`.

## Netlify setup

1. In Netlify, choose **Add new site → Import an existing project** and connect `starreckley/reckley-ventures-website`.
2. Use build command `npm run build` and publish directory `dist`.
3. Add `reckleyventures.us` under Domain management → Domains.
4. In GoDaddy DNS, enter the Netlify DNS records shown in Netlify for the root domain and `www` host. Remove conflicting parking records.
5. Wait for DNS verification, then confirm the Netlify certificate is provisioned and HTTPS is active.
6. Future updates deploy by pushing changes to `main`; Netlify will build and publish automatically.

## Configuration

Public contact mailboxes, company facts, portfolio data, and document content are centralized in `src/content.ts`.

The KAR privacy policy and terms are drafts and must receive final legal/business review before commercial launch. The source audit is internal-only in `AUDIT-KAR-LEGAL.md` and is not linked from the public site.
