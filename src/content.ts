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
  legalOperator: 'Reckley Ventures, LLC operating Exit Strategy Cleaning',
  url: 'https://exitstrategycleaning.com',
  temporaryWebsiteUrl: 'https://exitcleaning-8akvwvwe.manus.space/',
  category: 'Professional Cleaning & Property Services',
  status: 'Operating brand / platform development planned',
  phone: '301-453-5477',
  phoneHref: 'tel:+13014535477',
  email: 'exitstrategycleaning@myyahoo.com',
  emailHref: 'mailto:exitstrategycleaning@myyahoo.com',
  supportEmail: 'exitstrategycleaning@myyahoo.com',
  mailingAddress: COMPANY.address,
  summary: 'Professional move-out, move-in, deep, recurring, and commercial cleaning services.',
  detail: 'Exit Strategy Cleaning helps homes, property owners, offices, and turnover teams prepare spaces for the next chapter with dependable, detail-focused cleaning services.',
  serviceAreas: ['Washington, DC', 'Maryland', 'Virginia', 'West Virginia', 'Pennsylvania'],
  serviceArea: 'Washington, DC, Maryland, Virginia, West Virginia, and Pennsylvania',
  services: ['Move-out cleaning', 'Move-in cleaning', 'Deep cleaning', 'Recurring residential cleaning', 'Small commercial cleaning'],
  verificationStatus: 'Core service categories and contact details require ongoing owner confirmation; conflicting temporary-site contact claims are not reused.',
  logo: '/exit-strategy-cleaning-logo.png',
  headerLogo: '/exit-strategy-cleaning-header.png',
}

export type LegalSection = { id: string; title: string; body: string[] }

export const EXIT_PRIVACY_SECTIONS: LegalSection[] = [
  { id: 'operator', title: 'Operator and scope', body: [`This draft describes how ${EXIT_STRATEGY.legalOperator} may handle information for the current public website, quote requests, cleaning-service communications, and related customer-service interactions. It does not describe a future provider marketplace as active.`] },
  { id: 'customer-info', title: 'Information customers may provide', body: ['Depending on the request, customers may provide a name, email address, telephone number, service address, billing information, requested service, property details, room or property size, cleaning priorities, requested dates and times, quote photographs, special instructions, access or parking instructions, pet information, alarm or entry instructions, commercial-property information, invoice details, and customer-service communications.'] },
  { id: 'photos-access', title: 'Property photographs and access information', body: ['Photos may be requested or collected for quoting, service planning, completion records, quality review, condition documentation, or damage disputes if the current workflow supports that use. Photos should not intentionally capture sensitive personal information unnecessarily. Customers should not send door codes, alarm codes, payment-card data, government IDs, or other sensitive security information through an unsecured public request.', 'Where access details are provided, they are used only to coordinate the requested service and should be protected from unnecessary disclosure.'] },
  { id: 'service-personnel', title: 'Service personnel information', body: ['If current operations involve employees or service providers, Exit Strategy Cleaning may handle basic identity, contact, availability, service-area, job, payment, check-in, service-photo, or quality records as actually required for operations. This draft does not claim that background checks, GPS check-in, insurance verification, or a particular worker classification are currently required.'] },
  { id: 'payments-sharing', title: 'Payments and sharing', body: ['Payments or invoices may be handled through authorized third-party processors or business systems. Reckley Ventures does not claim to store full payment-card numbers. Information may be shared as needed with assigned service personnel, payment and communication providers, hosting or scheduling systems, professional advisers, insurers where applicable, safety or fraud services, legal authorities, and business-service providers.'] },
  { id: 'marketing', title: 'Communications and marketing', body: ['Quote, appointment, service, invoice, and support messages are transactional communications. Marketing email or SMS should be used only where enabled and permitted. Where applicable, recipients may opt out of marketing messages while still receiving necessary service communications.'] },
  { id: 'retention', title: 'Retention and rights', body: ['Records may be retained as needed for customer service, contracts, payment and accounting, tax, insurance, damage disputes, fraud prevention, safety, legal compliance, and ordinary business records. No fixed retention period is promised here. Depending on applicable law, individuals may request access, correction, deletion where applicable, or communication-preference changes.'] },
  { id: 'children-future', title: 'Adults and future development', body: ['The website and service-request process are intended for adults arranging property services. Any future provider marketplace or customer platform may be governed by supplemental terms and privacy disclosures when launched. Features and availability remain subject to development, testing, and market activation.'] },
  { id: 'contact', title: 'Contact and review status', body: [`Privacy and data questions may be sent to ${EXIT_STRATEGY.email}. This is a draft for business and attorney review, not an attorney-approved policy.`] },
]

export const EXIT_WEBSITE_TERMS_SECTIONS: LegalSection[] = [
  { id: 'acceptance', title: 'Acceptance and website use', body: ['These draft terms govern use of the public Exit Strategy Cleaning website and informational content. By using the website, visitors should use it lawfully and provide accurate information in quote or contact requests.'] },
  { id: 'quotes', title: 'Quote requests and availability', body: ['A quote request is not a booking and does not guarantee availability, price, service scope, or completion time. Any estimate or quote is subject to review of customer-provided information and the applicable service agreement.'] },
  { id: 'content-ip', title: 'Content and intellectual property', body: ['Website text, brand assets, photographs, layout, and other content belong to Reckley Ventures, LLC, Exit Strategy Cleaning, or their licensors. Visitors may not misuse, copy, impersonate, disrupt, scrape, or introduce malicious material into the website.'] },
  { id: 'third-parties', title: 'Third-party links and communications', body: ['The website may link to third-party websites or services. Those destinations have their own terms and privacy practices. Electronic communications may be used to respond to quote, service, support, or legal requests.'] },
  { id: 'availability', title: 'Availability and disclaimers', body: ['The website may contain errors, omissions, or interruptions. Website information is provided for general purposes and does not replace a written service agreement. No booking, service-quality, deposit, savings, or outcome guarantee is created by the website alone.'] },
  { id: 'changes-contact', title: 'Changes and contact', body: [`These terms may change as the website and business evolve. Questions may be sent to ${EXIT_STRATEGY.email}. These terms are a draft for review and are distinct from Cleaning Service Terms.`] },
]

export const CLEANING_SERVICE_TERMS_SECTIONS: LegalSection[] = [
  { id: 'review', title: 'Draft status and contract formation', body: ['These draft Cleaning Service Terms are intended as a framework for requested or booked cleaning work. They are not a final customer contract until the business confirms its quote, invoice, service-agreement, cancellation, payment, complaint, damage, and governing-law decisions.'] },
  { id: 'pricing-scope', title: 'Quotes, pricing, and scope', body: ['The business must confirm whether estimates or fixed quotes are used, when prices may change because property conditions differ, which add-ons and taxes apply, and whether minimum, commercial, or recurring-service pricing exists. Services and exclusions should be stated in the applicable quote or service agreement.'] },
  { id: 'property-access', title: 'Property readiness and access', body: ['Customers may need to provide safe access, working utilities, parking or building instructions, and accurate property details. Customers should secure valuables, confidential documents, medications, firearms, fragile items, pets, and areas cleaners should not enter. Customers should not assume hazardous-material remediation, mold remediation, bodily-fluid cleanup, pest remediation, heavy-item movement, or construction-debris removal is included unless expressly agreed.'] },
  { id: 'scheduling-payment', title: 'Scheduling and payment', body: ['Appointment windows, delays, rescheduling, cancellation, lockout, no-access, deposits, payment methods, late payments, failed payments, chargebacks, and commercial invoicing remain business decisions for confirmation. No unresolved fee or payment architecture is promised by this draft.'] },
  { id: 'quality-damage', title: 'Service concerns, photos, and damage', body: ['The business must confirm its complaint, re-clean, satisfaction, damage-reporting, and incident process. Cleaning cannot guarantee a landlord’s security-deposit decision. Photos may be used for quoting, proof of completion, quality review, condition documentation, or disputes when operationally appropriate; marketing use should require separate permission. Liability language requires attorney review.'] },
  { id: 'recurring-commercial', title: 'Recurring and commercial services', body: ['If recurring or commercial services are offered, the applicable agreement should identify frequency, schedule changes, skipped visits, cancellation, approved contacts, invoice or ACH/card processes, change orders, keys, access, confidentiality, and building-security requirements.'] },
  { id: 'contact', title: 'Contact and review status', body: [`Questions may be sent to ${EXIT_STRATEGY.email}. This draft is subject to business and attorney review and does not state that every listed service or payment method is currently available.`] },
]

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
