# Privacy and terms publication review

Status: draft review branch only. Do not merge or submit these URLs to Twilio until the content and messaging behavior are verified.

The `/privacy` and `/terms` routes retain every unresolved item from the policy draft. Both have a visible draft notice and `noindex, nofollow` metadata. This is a search-engine request, not access control; preview URLs and repository files may be public.

This section is for Jason and the implementation team. Do not publish it as part of the policies.

## Business details to confirm

1. Confirmed by Jason: privacy and support contact is jason@isolveauto.com; business mailing address is 15 Half Moon Bend, Coronado, CA 92118.

2. Confirmed by Jason: iSolve does not accept payments yet. Revisit payment and billing disclosures before introducing paid services.

3. Website review completed for the main layout, homepage, marketing content, scorecards page, screenshot components, header/footer, YouTube player, package manifest, and Next.js configuration in jasonisolveauto/isolve-website. No Google Analytics, Google Tag Manager, Meta Pixel, or similar integration was found there or in the nine first-party JavaScript bundles referenced by the live homepage. The YouTube player loads eagerly and autoplays muted through youtube-nocookie.com. This was a source and static bundle review, not a browser network/cookie audit. Hosting-injected behavior and platform.isolveauto.com remain unverified. A subsequent source review of iSolve-Platform found Vercel Web Analytics in app/layout.tsx, rendered when NODE_ENV is production. Platform source is not proof of the current deployment or analytics collection settings.

4. Verify active providers and processing locations. Vercel, Supabase, and Resend have been discussed; Twilio is being registered. Verify use and data flows instead of treating all discussed integrations as enabled.

5. Confirmed by Jason: iSolve does not sell customer information or share it with other companies for advertising; AI and translation features remain disabled for customers and are still being tested. The platform’s production decision and account lifecycle code preserve historical reporting and audit attribution when access is deactivated. Still verify retention periods, backup expiry, privacy-request handling, security practices, and the providers used in testing. Jason confirmed that testing uses real vehicle information (VINs, mileage, and repair-order data) and made-up sample data, with no customer names. This confirmation is specific to testing and does not change the platform’s general collection disclosures. Verify whether real records leave iSolve, what information is transmitted, and the applicable provider retention and model-training settings; do not assume the records are anonymized. Determine whether state-specific or international notices are needed for the actual business and audience. Provider code and public-policy findings, account checks and a proposed temporary-test-copy retention rule are recorded in [the retention review](https://github.com/jasonisolveauto/isolve-website/blob/codex/privacy-sms-terms-review/docs/ai-data-retention-review.md). Provider settings and deletion schedules remain unverified; proposed controls have not been implemented.

6. Confirm the legal name and sender brand of the first dealership campaign. Honor GMC is the anticipated use context, not a verified legal entity name for registration.

## SMS implementation

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

1. Resolve all bracketed review items in both page files against actual website and platform practices, and set the effective date in `components/LegalDocument.tsx`.
2. Remove the review notice, review-note styling/markup, draft metadata wording, and `robots` overrides only when the policies are final. Keep substantive disclosures intact.
3. Review the dealership sender and consent implementation separately. These static website pages do not implement enrollment, STOP/HELP, or Twilio registration.
4. Run `npm run build` and `npm run lint`; check both pages and footer links on mobile and desktop.
5. Merge and deploy through the existing Vercel project only after content approval. Verify the live `/privacy` and `/terms` URLs without login before entering them in Twilio.

