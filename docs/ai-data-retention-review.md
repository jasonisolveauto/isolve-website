# AI and translation retention review

Status: evidence review for the unpublished privacy-policy draft. No provider settings, AI flags, data, or production deployments were changed.

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

| Service | Content retention and training policy | Account evidence still needed |
| --- | --- | --- |
| OpenAI API | No model training by default unless opted in. Abuse-monitoring content is normally retained up to 30 days, with legal/safety exceptions. Zero Data Retention requires eligibility and configuration; it is not established here. | Organization/project sharing controls, any retention agreement, and applicable project. |
| Azure Translator text API | Translation request content is not persistently stored or used for training. | Confirm the actual service and request path used. |
| Azure Custom Translator | Uploaded training documents are retained until deleted or account expiry and used for the customer's custom system. | Current workspace documents/models and whether real records were uploaded. |
| DeepL API Pro | Text is processed temporarily and deleted after the service, with exceptions for requested saved/customization content; it is not used to improve the service. API Free must be assessed separately. | Exact API plan, applicable contract and any saved/customization features. |

Sources: [OpenAI data controls](https://developers.openai.com/api/docs/guides/your-data), [OpenAI sharing controls](https://help.openai.com/en/articles/10306912-sharing-feedback-evaluation-and-fine-tuning-data-and-api-inputs-and-outputs-with-openai), [Microsoft no-trace and customization policy](https://www.microsoft.com/en-us/translator/business/notrace), [DeepL privacy policy, sections 3, 4, 6.5 and 13](https://www.deepl.com/en/privacy).

These are provider policy statements, not verification of iSolve account settings. No claim of universal zero retention or universal no-training is established.

## Recommended settings and evidence

1. OpenAI: inspect Settings → Organization → Data controls, including sharing at organization and project levels. Keep feedback, evaluation/fine-tuning data sharing, and API input/output sharing disabled for real records. Record the actual selection; do not infer it from defaults. Check retention controls separately. A screenshot should exclude keys, tokens and billing details.
2. Azure: inspect Custom Translator workspace documents and models. Record what remains and whether it is synthetic or real. Ordinary translation and deliberate custom-model training must be described separately. Do not delete existing training or audit material as part of this review.
3. DeepL: confirm API Free versus API Pro in the account. Recommend API Pro for real-record testing after reviewing applicable terms; keep Free evaluation synthetic until reviewed. No paid upgrade is authorized by this recommendation.
4. Minimize outbound data: preserve authoritative repair records inside iSolve; prepare a separate provider payload that omits VINs, RO identifiers and contact details when they are unnecessary for language work. This is a proposed improvement, not an implemented redaction control.
5. Make `store: false` explicit on applicable OpenAI requests in a separately reviewed runtime change. It is not a substitute for disabling data sharing or for approved retention controls.

## iSolve's own retention

Provider deletion does not delete iSolve originals, English outputs, uploads, exports, local test copies, audit evidence, or backups. The existing application preserves historical identity/reporting attribution when access is deactivated. No universal automatic purge schedule has been verified.

Proposed policy decision, not implemented: remove disposable real-record test copies and raw outputs within 30 days after their evaluation closes, unless a documented investigation or required retention applies. Preserve authoritative repair records and required audit evidence under the applicable dealership agreement. Decide backup expiry and privacy-request handling before promising a deletion deadline. Do not apply this proposal to existing immutable B2 evidence or staging records without a separate reviewed plan.

## Remaining publication questions

- Actual OpenAI sharing/retention selections.
- DeepL plan and whether any real records used that service.
- Azure Custom Translator current uploads and models.
- Approved iSolve retention/deletion rules and backup coverage.

Complete these in the privacy draft before removing its review notice. No runtime configuration or data deletion is part of this website PR.

