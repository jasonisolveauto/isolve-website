# Privacy and terms publication review

Status: iSolve publication candidate on the review branch. Not published or submitted to Twilio. Dealer-specific enrollment and registration are separate from this website release.

The `/privacy` and `/terms` routes contain generic iSolve policy copy, without dealer names or bracketed implementation notes. Both retain a prepublication notice and `noindex, nofollow` metadata until release approval. This is a search-engine request, not access control; preview URLs and repository files may be public.

This section is for Jason and the implementation team. Do not publish it as part of the policies.

## Business details to confirm

1. Confirmed by Jason: privacy and support contact is jason@isolveauto.com; business mailing address is 15 Half Moon Bend, Coronado, CA 92118.

2. Confirmed by Jason: iSolve does not accept payments yet. Revisit payment and billing disclosures before introducing paid services.

3. Website review completed for the main layout, homepage, marketing content, scorecards page, screenshot components, header/footer, YouTube player, package manifest, and Next.js configuration in jasonisolveauto/isolve-website. No Google Analytics, Google Tag Manager, Meta Pixel, or similar integration was found there or in the nine first-party JavaScript bundles referenced by the live homepage. The YouTube player loads eagerly and autoplays muted through youtube-nocookie.com. This was a source and static bundle review, not a browser network/cookie audit. Hosting-injected behavior and platform.isolveauto.com remain unverified. A subsequent source review of iSolve-Platform found Vercel Web Analytics in app/layout.tsx, rendered when NODE_ENV is production. Platform source is not proof of the current deployment or analytics collection settings.

4. Verify active providers and processing locations. Vercel, Supabase, and Resend have been discussed; Twilio is being registered. Verify use and data flows instead of treating all discussed integrations as enabled.

5. Confirmed by Jason: iSolve does not sell customer information or share it with other companies for advertising; AI and translation features remain disabled for customers and are still being tested. The platform’s production decision and account lifecycle code preserve historical reporting and audit attribution when access is deactivated. Verify implementation of the approved retention periods, backup expiry, privacy-request handling, security practices, and the providers used in testing. Jason confirmed that testing uses real vehicle information (VINs, mileage, and repair-order data) and made-up sample data, with no customer names. This confirmation is specific to testing and does not change the platform’s general collection disclosures. Verify whether real records leave iSolve, what information is transmitted, and the applicable provider retention and model-training settings; do not assume the records are anonymized. Determine whether state-specific or international notices are needed for the actual business and audience. Provider code and public-policy findings, account checks and the approved temporary-test-copy retention rule are recorded in [the retention review](https://github.com/jasonisolveauto/isolve-website/blob/codex/privacy-sms-terms-review/docs/ai-data-retention-review.md). Screenshots confirm the OpenAI sharing selections and saved API-call-logging change, the DeepL API Developer plan, and the five generic Azure dictionary pairs. Jason confirms no real data has gone to DeepL. Jason approved deletion of disposable real-data testing copies and temporary AI outputs within 30 days after the relevant testing finishes. Jason also approved the pilot schedule: complete repair records for seven years after final RO closure; saved warranty stories and related audit history for the same period; routine technical/security logs for 12 months; and a 35-day rolling backup window. Legal holds and longer applicable legal or contract requirements override routine deletion. Cleanup and backup configuration remain unimplemented or unverified. Runtime account mapping remains unverified.

6. Jason confirmed Honor GMC as the pilot sender. Its legal business name and DBA relationship still need confirmation for registration, along with a dealership service support contact and applicable dealership privacy-policy URL. Keep iSolve's shared policies generic for participating dealerships; identify Honor in its consent, program details, campaign, and sample messages.

## SMS implementation

The [Honor pilot SMS packet](honor-sms-pilot.md) contains a proposed signed paper form, sender-specific program details, campaign description, opt-in description, and sample messages. It is a draft, not an implemented enrollment flow. Complete the marked dealer details and publish the applicable policies before collecting consent or submitting the campaign. Reuse the structure for later dealerships with their own sender details and appropriate registration; do not enroll them under Honor's identity.

Use a separate, optional, unchecked consent box on a web form or a signed paper consent form. This is a proposed process, not an existing implementation. Twilio’s policy specifically requires software customers to obtain written consent from downstream users. A general fleet relationship or a phone number on a repair order is not the proposed consent record.

Proposed consent wording, after replacing all placeholders:

“I agree to receive recurring vehicle-service text messages from [DEALERSHIP REGISTERED NAME], using the iSolve Automotive platform, at the mobile number I provide. Messages concern repair orders, estimates, service decisions, vehicle status, and pickup or delivery. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe or HELP for assistance. SMS consent is optional and is not a condition of purchasing services. [Privacy Policy link] [SMS Terms link].”

Keep the consent wording and version, named sender, mobile number, affirmative action or signature, date, and collection method. Configure and test STOP suppression and HELP replies before sending. Obtain each recipient’s consent rather than treating a fleet administrator’s approval as consent for every employee.

The iSolve policy pages describe the platform. They do not automatically replace a dealership’s privacy policy or authorize all dealerships to share one campaign. A dealership may link to applicable platform disclosures alongside its own notices, but its enrollment and registration must consistently identify the actual sender.

## Website preparation

Publish the finalized Privacy Policy at /privacy and Terms and SMS Terms at /terms. Add visible footer links on the public site and links from relevant platform enrollment screens. Each dealership enrollment flow must show the applicable sender-specific terms and privacy links before consent.

Confirm that the published pages are accessible without login, display correctly on mobile, and contain no draft notices or unresolved placeholders. Validate all links and support contacts. Do not submit proposed URLs to Twilio as though they are live.

## Reference basis

- [Twilio Messaging Policy](https://www.twilio.com/en-us/legal/messaging-policy): sender-specific consent, written consent for downstream users, records, and opt-out requirements.

- [Twilio brand information guidance](https://www.twilio.com/docs/api/errors/30894): campaigns must identify the actual business behind the messages.

- [Twilio opt-in flow guidance](https://www.twilio.com/docs/api/errors/30909): a verifiable enrollment process and appropriate disclosures are needed.

- [California Attorney General privacy-policy guidance](https://www.oag.ca.gov/news/press-releases/attorney-general-kamala-d-harris-issues-guide-privacy-policies-and-do-not-track): accurate data disclosures and browser-tracking explanations.

- [iSolve website](https://www.isolveauto.com/): public website and platform scope.

## Release steps

1. Approve the publication candidate and set the actual publication date in `components/LegalDocument.tsx`. Internal follow-ups below must not be mistaken for verified operating controls.
2. Remove the prepublication notice, draft metadata wording, and `robots` overrides as part of the approved release. Keep substantive disclosures intact.
3. Review the dealership sender and consent implementation separately. These static website pages do not implement enrollment, STOP/HELP, or Twilio registration.
4. Run `npm run build` and `npm run lint`; check both pages and footer links on mobile and desktop.
5. Merge and deploy through the existing Vercel project only after content approval. Verify the live `/privacy` and `/terms` URLs without login before entering them in Twilio.


## Public-copy decisions

- Public policy pages use participating-dealership language; Honor appears only in internal pilot documentation.
- Retention uses purpose-based criteria. The approved seven-year / 12-month / 35-day / 30-day schedule remains in the internal retention review until implementation is verified; no automated deletion or backup-expiry claim is made publicly.
- The analytics disclosure describes the platform configuration identified in source, without claiming a live browser audit. The public website's known YouTube behavior and lack of custom Do Not Track handling are disclosed. Do not equate Do Not Track with Global Privacy Control or claim verified GPC behavior.
- AI disclosure retains the testing scope and providers, without publishing account screenshots, audit conclusions, universal no-training claims, or a zero-retention promise.
- No processing-country list is asserted without verification. No arbitration, class-action waiver, fixed liability cap, indemnity, or governing-law clause is introduced for this pilot; those are optional commercial-contract work, not a website placeholder.
- The policy makes no claim of universal legal compliance or guaranteed Twilio approval. Future features and material data-practice changes require updating the notice.

## Preserved internal review notes

The following were removed from public-facing copy, not resolved by deletion. They remain implementation follow-ups alongside the confirmed facts above.

[CONFIRM ANY ADDITIONAL USE FOR ANALYTICS, PRODUCT IMPROVEMENT, OR MARKETING AND DESCRIBE IT ACCURATELY BEFORE PUBLICATION.]

[ANALYTICS REVIEW: No standalone analytics or advertising tracker was found in the reviewed marketing website source and nine first-party homepage bundles. The website embeds YouTube. Separately, the platform root layout includes Vercel Web Analytics when NODE_ENV is production. Confirm that this source matches the live deployment, then finalize the analytics disclosure and review platform cookies and any hosting-injected tracking.]

<strong>Browser privacy signals:</strong> [No custom Do Not Track or Global Privacy Control handling was identified in the reviewed public website code. Confirm deployed behavior, third-party video behavior, and the platform’s response before inserting a final disclosure. Do not treat the two signals as interchangeable.]

[REVIEW SCOPE: Azure evidence covers the displayed sentence dictionary, not every workspace or model. Confirm runtime credentials use the reviewed accounts. Do not assert universal zero retention or no training.]

[APPROVED PILOT SCHEDULE — IMPLEMENTATION PENDING: Retain complete repair records for 7 years after final RO closure. Keep saved warranty stories and related repair/warranty audit history for the same period. Retain routine security and technical logs for 12 months, with relevant incident evidence retained longer when necessary. Use a 35-day rolling disaster-recovery backup window. Delete disposable real-data testing copies and temporary AI outputs within 30 days after testing finishes. Legal holds and longer applicable legal or contractual requirements override routine deletion. Verify cleanup and backup configuration before presenting these periods as operating practice.]

[VERIFY THESE RETENTION, DELETION, BACKUP, ACCESS-CONTROL, AND SECURITY STATEMENTS AGAINST ACTUAL PRACTICES.]

[CONFIRM THE COUNTRIES IN WHICH ISOLVE AND ITS PROVIDERS STORE OR ACCESS PERSONAL INFORMATION, THEN ADD AN ACCURATE PROCESSING-LOCATIONS STATEMENT. ASSESS ADDITIONAL NOTICES IF SERVING USERS OUTSIDE THE UNITED STATES.]

[BEFORE PUBLICATION, DECIDE WHETHER A SEPARATE COMMERCIAL AGREEMENT WILL ADDRESS LIABILITY LIMITS, INDEMNITY, GOVERNING LAW, AND DISPUTE RESOLUTION. THIS DRAFT DOES NOT CREATE AN ARBITRATION REQUIREMENT, CLASS-ACTION WAIVER, OR FIXED LIABILITY CAP.]
