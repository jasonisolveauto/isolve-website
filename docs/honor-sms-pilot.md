# Honor GMC vehicle-service SMS pilot

Status: review draft. Proposed paper-consent workflow; not implemented, published, or submitted to Twilio. Complete every bracketed item before use. This packet supports the pilot without building an online enrollment system.

## Details to finish once

| Item | Value |
| --- | --- |
| Customer-facing sender | Honor GMC — confirmed by Jason |
| Registered legal entity and DBA relationship | [CONFIRM HONOR LEGAL BUSINESS NAME AND DBA] |
| Dealership service support | [HONOR SERVICE PHONE OR EMAIL] |
| Dealership privacy notice | [HONOR PRIVACY POLICY URL] |
| Platform provider | iSolve Automotive LLC |
| Platform privacy notice | https://www.isolveauto.com/privacy — proposed; verify published final page |
| Honor SMS terms | [HONOR SMS TERMS URL ON HONOR BUSINESS DOMAIN] |
| Supplemental platform terms | https://www.isolveauto.com/terms — proposed; verify published final page |
| Program | Honor GMC Vehicle Service Updates |
| Campaign use case | Customer Care |

Use the dealership's legal business information for its brand registration. Enter its EIN directly in Twilio; do not add it to this repository or the public form. iSolve's approved profile is the software-provider profile, not evidence of Honor's brand approval.

For the campaign privacy and terms URL fields, use Honor-specific policies covering this program; host the SMS terms on Honor's business domain. Generic iSolve pages are supplemental platform disclosures, not replacements for Honor's campaign policies. Confirm the campaign is associated with Honor's appropriate registered brand rather than the iSolve brand shown in the earlier onboarding screenshot.

## Customer-facing paper form

**Honor GMC Vehicle Service Updates — optional SMS enrollment**

Sender: [HONOR LEGAL BUSINESS NAME], doing business as Honor GMC [CONFIRM DBA]. Messaging technology provided by iSolve Automotive LLC.

**☐ Yes, I agree to receive recurring vehicle-service text messages from Honor GMC at the mobile number below.** Messages may include repair-order updates, estimates, requests for repair decisions, service-task coordination, vehicle status, and pickup or delivery arrangements. Message frequency varies with service activity. Message and data rates may apply. Reply **STOP** to unsubscribe or **HELP** for assistance. Consent is optional and is not a condition of purchasing or receiving services. This consent covers Honor GMC's service messages only and does not enroll me in promotional messages or another dealership's program.

I confirm that I am the subscriber or authorized user of this mobile number.

Name: ______________________________

Mobile number: ______________________________

Fleet/organization (if applicable): ______________________________

Signature: ______________________________  Date: __________________

Support: [HONOR SERVICE PHONE OR EMAIL]. Platform support: jason@isolveauto.com.

Privacy: [HONOR PRIVACY POLICY URL] and https://www.isolveauto.com/privacy

SMS terms: [HONOR SMS TERMS URL ON HONOR BUSINESS DOMAIN] and the program details below. Supplemental platform terms: https://www.isolveauto.com/terms.

Form version: Honor SMS pilot v1. Provide the completed final form and program details to the recipient.

### Honor program details supplied with the form

Honor GMC sends service-related texts to enrolled customers and fleet contacts using iSolve. You can reply with service questions and coordinate work with dealership staff. SMS enrollment itself does not authorize repairs. Message frequency varies. Message and data rates may apply. Reply STOP to stop this program's messages; one opt-out confirmation may follow. Reply HELP or contact [HONOR SERVICE PHONE OR EMAIL] for assistance. You may arrange phone or email communication instead of texts. Carriers are not liable for delayed or undelivered messages. SMS is not an emergency service.

Honor handles customer records under its privacy notice at [HONOR PRIVACY POLICY URL]. iSolve's processing is described at https://www.isolveauto.com/privacy. Mobile numbers and SMS consent are not sold or shared with third parties or affiliates for marketing or promotional purposes. Service providers may process the information needed to deliver messages and maintain consent and opt-out records for Honor. Consent does not transfer to another dealership.

## Staff process for this pilot

1. Give each recipient the completed form and linked notices before enrollment. Leave the checkbox unchecked. A fleet manager cannot opt every employee into texts by supplying a contact list.
2. Collect the checked box, signature, mobile number, and date. Record the staff member, named sender, form version, and collection method. Give the recipient a copy; securely retain the signed original or scan in the authorized business records system, never this repository.
3. Add only consenting numbers to Honor's messaging list. Preserve the consent record and later opt-outs. A number listed on an RO alone is not this consent.
4. Before live customer messaging, verify the approved campaign/number association and test two-way delivery, HELP, STOP, and suppression of later messages. Handle opt-outs received by staff as well as keyword replies. Keep Honor's sender and consent records separate from future dealer programs.

## Twilio campaign description

Draft for use after confirming the legal entity and sender details:

> [HONOR LEGAL BUSINESS NAME], doing business as Honor GMC [CONFIRM DBA], uses iSolve Automotive LLC's software to exchange vehicle-service messages between dealership employees and customers, including fleet representatives who have opted in. Messages cover repair-order updates, estimates and repair decisions, service-task coordination, vehicle status, and pickup or delivery arrangements. Recipients can reply with questions and coordinate service with dealership staff. This Customer Care campaign does not send promotional messages.

## Twilio consent description

Select **Paper Form** only if the process below is actually adopted. Do not claim a web-form, verbal, or keyword enrollment process that is not in use.

> Before receiving recurring service texts, each recipient is given Honor GMC's optional SMS consent form and program details. The recipient checks the consent box, provides their mobile number, and signs and dates the form. The form identifies Honor GMC as the sender and describes the service-message purpose, variable frequency, possible message/data charges, STOP and HELP instructions, optional participation, support contact, and applicable privacy and SMS terms links. Honor retains the signed form and its version with the consent record. SMS consent is not required to receive vehicle service. Privacy notices: [HONOR PRIVACY POLICY URL] and https://www.isolveauto.com/privacy. SMS terms: [HONOR SMS TERMS URL ON HONOR BUSINESS DOMAIN]. A blank copy of the actual final form and Honor program details is available at [PUBLIC FORM EVIDENCE URL].

Provide reviewers a publicly accessible blank final form or screenshot of it; never upload a signed customer form as public opt-in evidence. The evidence URL must work without login. Do not submit draft policy URLs or placeholders.

## Example messages

Illustrative service details only; use examples matching the deployed workflow.

1. Honor GMC: RO 12345 for unit 42 is awaiting parts. We will update you when they arrive. Reply with any questions. Reply STOP to opt out.
2. Honor GMC: Your estimate for unit 42 is ready. Please contact your service advisor to review the recommended work. Reply STOP to opt out.
3. Honor GMC: Service is complete for unit 42. Please reply to coordinate pickup or delivery. Reply STOP to opt out.

Proposed enrollment confirmation, to send only after consent and messaging activation:

> Honor GMC: You are enrolled in vehicle-service updates. Msg frequency varies. Msg & data rates may apply. Reply HELP for help or STOP to opt out.

Proposed HELP reply; configure and test before use:

> Honor GMC Vehicle Service Updates: For help contact [HONOR SERVICE PHONE OR EMAIL]. Msg frequency varies. Msg & data rates may apply. Reply STOP to opt out.

Use the actual configured opt-out confirmation; do not add a second automated reply if Twilio already sends one.

## Reuse for later dealerships

Keep `/privacy` and `/terms` as shared iSolve platform disclosures. Copy this packet for each dealership business, replacing sender identity, support, policy links, and campaign details. Obtain that sender's own recipient consent and complete the appropriate customer profile, brand, and campaign registration. Multiple locations under one legal entity require checking the actual ownership and brand structure; this template does not assume one legal entity per rooftop.

## Sources

- https://www.twilio.com/en-us/legal/messaging-policy
- https://www.twilio.com/docs/messaging/compliance/a2p-10dlc/collect-business-info
- https://www.twilio.com/docs/messaging/compliance/a2p-10dlc/onboarding-isv
