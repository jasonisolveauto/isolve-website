# AI and translation retention review

Status: evidence review for the unpublished privacy-policy draft. Jason approved the temporary-testing retention rule during this review. Implementation is pending. Jason disabled OpenAI API call logging and supplied a successful-save screenshot; this website change does not modify provider settings, AI flags, data, or production deployments.

## Confirmed scope

Jason confirmed that testing uses VINs, mileage and repair-order information plus made-up samples, with no customer names. This is specific to testing. It does not establish anonymization or exclude other identifying details from free-text repair narratives.

AI and translation remain disabled for customer use. A disabled customer feature does not stop separate local evaluation tools from sending data to a provider.

## Project evidence

Reviewed iSolve-Platform branch `vero/b2-platform-ai-language` at `ec69721851a0a31d50a50443eb0221000e35ca2d`.

- [Provider adapters](https://github.com/jasonisolveauto/iSolve-Platform/blob/ec69721851a0a31d50a50443eb0221000e35ca2d/lib/platform-ai/providers.ts): direct OpenAI Chat Completions; Azure text translation; DeepL Free/Pro endpoint selection. The OpenAI request does not explicitly set `store`. HTTP `cache: no-store` is not a provider retention or training control.
- [Manual English processing](https://github.com/jasonisolveauto/iSolve-Platform/blob/ec69721851a0a31d50a50443eb0221000e35ca2d/lib/vero/manual-english-translation.ts): OpenAI receives original Concern/Cause/Correction, candidate translation and segment comparisons. Azure receives selected text segments through the shared adapter. VINs or other identifiers can travel when included in that supplied text; there is no general identifier-removal step in the reviewed adapter. This does not prove every VIN column is sent in every request.
- [Earlier story translator](https://github.com/jasonisolveauto/iSolve-Platform/blob/ec69721851a0a31d50a50443eb0221000e35ca2d/lib/vero/story-translation-provider.ts): sends source tokens and original/candidate text to OpenAI for generation and comparison.
- [DeepL evaluation](https://github.com/jasonisolveauto/iSolve-Platform/blob/ec69721851a0a31d50a50443eb0221000e35ca2d/docs/vero-b2-deepl-evaluation.md): supports both API Free and API Pro. The documented initial runner permits synthetic fixtures; account tier and later real-record use are unverified.
- [Azure customization review](https://github.com/jasonisolveauto/iSolve-Platform/blob/ec69721851a0a31d50a50443eb0221000e35ca2d/docs/vero-b2-azure-customization-review.md): an October 18 portal record reports submission of a five-pair sentence dictionary for custom training. Its prepared reference sentences were synthetic. This is evidence of a recorded submission, not current completion, current uploads, or publication.
- [Controlled run design](https://github.com/jasonisolveauto/iSolve-Platform/blob/ec69721851a0a31d50a50443eb0221000e35ca2d/docs/vero-b2-manual-english-controlled-run.md): separate local Azure translation and OpenAI meaning-review workflow; originals, saved English and audit evidence are retained in iSolve. Time-limited execution rights are not data-deletion timers.

## Provider policies checked November 3, 2026

| Service | Content retention and training policy | Account evidence and limits |
| --- | --- | --- |
| OpenAI API | No model training by default unless opted in. Abuse-monitoring content is normally retained up to 30 days, with legal/safety exceptions. Zero Data Retention requires eligibility and configuration; it is not established here. | Screenshots show all three sharing options disabled in the iSolve Automotive organization. API call logging changed from Enabled per call to Disabled with a success banner. Audit logging was left unchanged. Runtime credential-to-organization mapping has not been verified. |
| Azure Translator text API | Translation request content is not persistently stored or used for training. | Confirm the actual service and request path used. |
| Azure Custom Translator | Uploaded training documents are retained until deleted or account expiry and used for the customer's custom system. | iSolve Automotive B2 project screenshots show one sentence dictionary, iSolve Automotive Sentences v1, created October 18, 2026. All five English/Spanish pairs were reviewed and contain generic repair phrases without identifiers. This does not inventory every workspace or verify model publication. |
| DeepL API Developer | Terms section 3.3.2 permits perpetual retention of content and processed content; section 8.3.11 prohibits personal-data processing. Do not apply paid-plan deletion assurances to this plan. | Account screenshot confirms active API Developer, free subscription. Jason confirms no real data has been submitted, only made-up test examples. |

Sources: [OpenAI data controls](https://developers.openai.com/api/docs/guides/your-data), [OpenAI sharing controls](https://help.openai.com/en/articles/10306912-sharing-feedback-evaluation-and-fine-tuning-data-and-api-inputs-and-outputs-with-openai), [Microsoft no-trace and customization policy](https://www.microsoft.com/en-us/translator/business/notrace), [DeepL privacy policy, sections 3, 4, 6.5 and 13](https://www.deepl.com/en/privacy).

Additional sources for the exact DeepL plan: [API Developer terms](https://www.deepl.com/en/pro-license) and [API plan comparison](https://support.deepl.com/hc/en-us/articles/360021200939-DeepL-API-plans). API Growth is the current paid upgrade option; no upgrade was performed. The table distinguishes published policies, screenshot evidence and user confirmation. No claim of universal zero retention or universal no-training is established.

## Recommended settings and evidence

1. OpenAI: keep the reviewed sharing options and optional API call logging disabled. Verify runtime credentials belong to the reviewed organization before relying on these settings for a specific workflow. Disabled call logging is not Zero Data Retention.
2. Azure: the displayed dictionary has been reviewed. Ordinary translation and deliberate custom-model training must be described separately. No training material or models were deleted, trained or published during this review.
3. DeepL: keep API Developer evaluation synthetic. Review API Growth terms and obtain approval before any paid upgrade or use of real records. No paid upgrade is authorized by this recommendation.
4. Minimize outbound data: preserve authoritative repair records inside iSolve; prepare a separate provider payload that omits VINs, RO identifiers and contact details when they are unnecessary for language work. This is a proposed improvement, not an implemented redaction control.
5. Make `store: false` explicit on applicable OpenAI requests in a separately reviewed runtime change. It is not a substitute for disabling data sharing or for approved retention controls.

## iSolve's own retention

Provider deletion does not delete iSolve originals, English outputs, uploads, exports, local test copies, audit evidence, or backups. The existing application preserves historical identity/reporting attribution when access is deactivated. No universal automatic purge schedule has been verified.

## Approved pilot retention schedule

Jason approved these periods on November 2, 2026 (Pacific time). These are pilot policy decisions, not claims that every period is legally mandated or already configured.

| Record category | Approved period |
| --- | --- |
| Complete repair records, including estimates, approvals, invoices and relevant messages/attachments | 7 years after final RO closure |
| Saved warranty stories, originals, translations, revisions and approvals | Same period as the associated RO |
| Related repair/warranty audit history | Same period as the associated record |
| Routine security and technical logs | 12 months; retain relevant incident evidence longer when necessary |
| Disaster-recovery backups | 35-day rolling window, pending configuration verification |
| Disposable real-data testing copies and temporary AI outputs | Delete within 30 days after the relevant testing finishes |

Legal holds and longer applicable legal or contractual requirements override routine deletion. Original records and required audit evidence are not disposable testing copies. The approval does not authorize bulk deletion of existing immutable B2 evidence or staging records. A backup window is not a substitute for retaining primary records for their full required period.

Legal basis and limits: [California BAR](https://www.bar.ca.gov/wir) specifies a minimum of three years for repair invoices, estimates, work orders and authorization records. The seven-year schedule is a business-policy choice for repair history, warranty support, disputes and audits, not a universal legal minimum. Manufacturer and fleet contract requirements may differ. [FAR 4.703](https://www.acquisition.gov/far/4.703) can measure applicable federal-contract retention from final payment, subject to record-specific periods and contract clauses. For information covered by the [FTC Safeguards Rule](https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know), the two-year disposal provision and its business-need, legal and feasibility exceptions must be considered; do not apply seven years indiscriminately to every customer-data category.

Pilot implementation follow-up: identify the covered records and retention start dates, assign a cleanup owner, honor preservation exceptions, and verify deletion and backup handling. No cleanup job, backup configuration or manual deletion was performed by this website change. Keep implementation proportionate to the pilot; do not describe an unverified schedule as enforced.

## Remaining publication questions

- Runtime account mapping and any Azure uploads outside the reviewed dictionary, if relevant to the disclosed workflows.
- Implementation of the approved pilot schedule, backup expiry, and privacy-request handling.

Complete these in the privacy draft before removing its review notice. No runtime configuration or data deletion is part of this website PR.

