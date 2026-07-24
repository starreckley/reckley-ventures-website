# Internal KAR legal-materials audit

Date: July 24, 2026

## Sources checked

- `starreckley/Kar-Website` (private, default branch `main`)
- `starreckley/kar-mobile` (private, default branch `main`)
- `starreckley/kar-backend` (private, default branch `master`)
- `starreckley/kar-admin-dashboard` (private, default branch `main`)
- `starreckley/reckley-ventures-website` (current public site repository)
- `https://hellokar.com/`, `/privacy`, and `/terms`

## Findings

The connected GitHub code-search index returned no indexed matches for privacy, terms, account deletion, FCRA, Stripe, Checkr, background location, or support across the four KAR repositories. The public HelloKAR pages were reachable, but the available fetch exposed only page titles/images and no readable policy text. No authoritative existing KAR policy or terms document could therefore be verified from the connected sources during this pass.

The website redesign uses the requested conservative Core-oriented concepts as a working draft, including provider-set settings, rider choice, 0% Core transportation commission subject to published terms, Stripe as a possible third-party processor, screening/FCRA disclosures, location categories, and category-based retention. These statements require confirmation against current production code, approved business rules, and counsel review.

## Public routes linked by the redesign

- `/kar`
- `/legal`
- `/privacy/kar`
- `/terms/kar`
- `/account-deletion/kar`
- `/support/kar`

## Items requiring attorney/business confirmation

- approved minimum age and rider/provider eligibility rules
- exact background-location behavior while online, en route, and during rides
- actual screening and consumer-reporting vendors and FCRA workflows
- payment processor responsibilities and live payment behavior
- Core commission and provider subscription terms
- data retention schedules and state privacy rights notices
- dispute resolution, governing law, limitation of liability, and termination terms
- active KAR support mailbox and published support workflow
- effective dates and final document versions
