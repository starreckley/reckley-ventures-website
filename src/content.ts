export const COMPANY = {
  name: 'Reckley Ventures, LLC',
  attention: 'Attn: HELLO KAR',
  state: 'Maryland',
  formed: 'February 24, 2025',
  address: ['100 Middletown Parkway', 'Unit 202 #817', 'Middletown, MD 21769'],
  founder: 'Aaron Reckley',
  domain: 'https://reckleyventures.us',
}

export const CONTACT = {
  email: 'support@reckleyventures.us',
  emailHref: 'mailto:support@reckleyventures.us',
  phone: '301-660-6028',
  phoneHref: 'tel:+13016606028',
  general: { label: 'Official contact', address: 'support@reckleyventures.us', active: true },
  legal: { label: 'Legal and privacy', address: 'support@reckleyventures.us', active: true },
  privacy: { label: 'Privacy and account', address: 'support@reckleyventures.us', active: true },
  compliance: { label: 'Compliance', address: 'support@reckleyventures.us', active: true },
  karSupport: { label: 'KAR Support', address: 'support@reckleyventures.us', active: true },
  partnerships: { label: 'Business partnerships', address: 'support@reckleyventures.us', active: true },
}

export const KAR = {
  name: 'KAR',
  url: 'https://hellokar.com',
  category: 'Transportation technology',
  status: 'In development / controlled testing',
  summary: 'A driver-first transportation technology marketplace designed around clearer choices and greater provider control.',
  detail: 'KAR is designed to give independent transportation providers greater control over rates, availability, service areas, and customer relationships—while giving riders clearer choices.',
}

export const EXIT_STRATEGY = {
  name: 'Exit Strategy Cleaning',
  url: 'https://exitstrategycleaning.com',
  category: 'Residential and commercial cleaning',
  status: 'Operating company',
  phone: '301-453-5477',
  phoneHref: 'tel:+13014535477',
  email: 'exitstrategycleaning@myyahoo.com',
  emailHref: 'mailto:exitstrategycleaning@myyahoo.com',
  summary: 'Professional move-out, move-in, deep, recurring, and commercial cleaning services.',
  detail: 'Exit Strategy Cleaning helps homes, property owners, offices, and turnover teams prepare spaces for the next chapter with dependable, detail-focused cleaning services.',
  serviceArea: 'Washington, DC, Maryland, Virginia, West Virginia, and Pennsylvania',
  logo: '/exit-strategy-cleaning-logo.png',
  headerLogo: '/exit-strategy-cleaning-header.png',
}

export type LegalSection = { id: string; title: string; body: string[] }

export const PRIVACY_SECTIONS: LegalSection[] = [
  { id: 'scope', title: 'Scope and company', body: ['This policy describes how Reckley Ventures, LLC, doing business as KAR where applicable, may collect and use information in connection with KAR rider, driver/provider, website, support, and administrative interactions. It is written conservatively for review before commercial launch.'] },
  { id: 'collected', title: 'Information collected', body: ['KAR may collect names, email addresses, telephone numbers, account credentials, rider profiles, provider business profiles, identity-verification information, driver and vehicle documents, insurance and registration information, profile and verification photographs, communications, support interactions, ratings, reviews, device information, logs, diagnostics, payment and transaction metadata, subscription information, promotion and referral attribution, safety reports, and fraud or risk signals.', 'Where provider onboarding requires screening, KAR may process consumer-reporting or screening information and related FCRA disclosures and authorizations through appropriate vendors.'] },
  { id: 'location', title: 'Location information', body: ['KAR may use foreground and precise location to support ride requests, pickup and destination coordination, navigation, trip status, safety functions, and provider availability. For eligible provider activity, background location may be used while a provider is online, en route, or participating in a ride, including ride restoration and safety functionality. KAR does not describe background location as continuous while a provider is offline unless that behavior is confirmed.', 'Users can manage location permissions through device settings. Turning off a permission may limit parts of the service.'] },
  { id: 'payments', title: 'Payments and subscriptions', body: ['Payment-card or banking information may be processed by third-party payment providers such as Stripe. KAR may receive payment confirmations, limited payment details, transaction metadata, subscription information, and records needed for support, accounting, fraud prevention, and legal compliance. This policy does not claim that Reckley Ventures stores full card numbers.'] },
  { id: 'sharing', title: 'How information may be shared', body: ['KAR may share information as needed with service providers supporting identity verification, screening, payments, mapping and navigation, SMS/email/push communications, cloud hosting and storage, customer support, fraud and safety operations, analytics, legal compliance, and corporate transactions. Information may also be disclosed when required by law or to protect users, the public, KAR, or its rights.'] },
  { id: 'retention', title: 'Retention', body: ['KAR does not publish fixed retention periods here. Categories of information may be retained as needed for legal compliance, safety, fraud prevention, tax and accounting, dispute handling, insurance, regulatory obligations, and enforcement of agreements.'] },
  { id: 'choices', title: 'Choices and rights', body: [`Depending on applicable law, users may request access, correction, deletion, or other rights. Users may manage location permissions, notifications, marketing preferences, and SMS opt-outs where applicable. Privacy requests may be sent to ${CONTACT.email}. See the account deletion page for additional instructions.`] },
  { id: 'children', title: 'Children and security', body: ['KAR is not intended for users below the approved minimum age established in KAR’s account rules. The final age threshold must be confirmed before publication. We use administrative, technical, and organizational safeguards designed to protect information, but no system can be guaranteed secure.'] },
  { id: 'changes', title: 'Changes and contact', body: [`This policy may be updated as KAR evolves. The effective date and document version will be updated when a final policy is approved. Questions may be sent to ${CONTACT.email}.`] },
]

export const TERMS_SECTIONS: LegalSection[] = [
  { id: 'role', title: 'KAR’s role', body: ['KAR is a transportation technology marketplace operated by Reckley Ventures, LLC. It helps riders discover and request transportation services offered by independent transportation providers. KAR is not the transportation provider and does not represent independent providers as employees.'] },
  { id: 'choice', title: 'Provider settings and rider choice', body: ['Independent providers may configure rates and business settings, subject to applicable marketplace rules. Riders may compare provider-specific choices or use Quick Match where available. Market availability varies and no ride, quote, reservation, or response is guaranteed.'] },
  { id: 'eligibility', title: 'Eligibility and accounts', body: ['Users must meet applicable age, geographic, identity, and other eligibility requirements. Account holders are responsible for accurate information, account security, and activity performed through their accounts.'] },
  { id: 'payments', title: 'Payments, subscriptions, and promotions', body: ['Accepted quotes and scheduled reservations may become binding under published rules. KAR may charge subscription or software fees to providers. Core transportation commission is currently structured as 0%, subject to published terms; payment processing and other third-party fees may apply. Provider transportation revenue is distinct from KAR subscription revenue.', 'Promotions funded by KAR do not reduce provider gross unless an expressly provider-funded program is voluntarily accepted. Referrals and promotions may be inactive or subject to campaign terms. Unreleased or unfinished payment behavior is not promised by these draft terms.'] },
  { id: 'safety', title: 'Safety and acceptable use', body: ['Users must use KAR lawfully and respectfully, follow safety instructions, and not misuse the marketplace, interfere with the service, impersonate others, harass, defraud, or submit unlawful content. KAR is not an emergency service. Call 911 or the appropriate local emergency service when immediate assistance is required.'] },
  { id: 'ip', title: 'Intellectual property', body: ['KAR and its licensors retain rights in the service, software, branding, content, and related intellectual property. These terms grant only the limited rights needed to use the service as intended.'] },
  { id: 'legal', title: 'Disclaimers, disputes, and termination', body: ['The service may be unavailable or contain errors. Transportation is provided by independent providers. Any warranty disclaimers, limitation of liability, dispute-resolution process, governing law, and termination provisions must receive final attorney review before commercial launch.'] },
  { id: 'contact', title: 'Contact and review status', body: [`Questions may be sent to ${CONTACT.email}. These terms are a draft subject to final legal review before commercial launch and should not be treated as a final contract until approved.`] },
]
