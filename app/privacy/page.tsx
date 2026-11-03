import type { Metadata } from "next";
import Link from "next/link";
import LegalDocument from "../../components/LegalDocument";

export const metadata: Metadata = {
  title: "Privacy Policy — Review Draft | iSolve Automotive",
  description:
    "Review draft of iSolve Automotive LLC’s privacy policy. Not yet effective.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    id: "our-role-and-dealership-information",
    title: "Our role and dealership information",
    content: (
      <>
        <p>
          We manage information collected for our own website, business
          inquiries, account administration, and support. When a dealership or
          fleet organization uses our platform to manage its records, we process
          that information on its behalf under our agreement with that
          organization.
        </p>
        <p>
          A dealership remains responsible for its vehicle services, customer
          relationships, and its own privacy notices. A fleet organization may
          also manage information about its employees and representatives.
          Requests about records controlled by those organizations should be
          directed to the relevant organization. We will assist with requests
          involving information we process on their behalf as appropriate.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    content: (
      <>
        <p>
          The information we handle depends on the features you use and the
          records your organization provides:
        </p>
        <ul>
          <li>
            <strong>Contact and business information:</strong> names, email
            addresses, telephone numbers, business addresses, organization
            names, job roles, and fleet affiliations.
          </li>
          <li>
            <strong>Account information:</strong> account identifiers,
            organizational access permissions, authentication records,
            preferences, and support requests.
          </li>
          <li>
            <strong>Vehicle and service information:</strong> VINs, license
            plates, unit numbers, mileage, repair orders, reported concerns,
            estimates, authorization decisions, service notes, status updates,
            and pickup or delivery details.
          </li>
          <li>
            <strong>Dealership operating information:</strong> reports, uploaded
            files, performance information, and business records submitted
            through the platform. These records may contain employee or customer
            information.
          </li>
          <li>
            <strong>Communications:</strong> messages and attachments exchanged
            through enabled features, delivery information, and records of
            communication preferences, consent, and opt-outs.
          </li>
          <li>
            <strong>Technical information:</strong> IP addresses, browser and
            device information, access times, and service or security logs
            generated when you use the services.
          </li>
          <li>
            <strong>Payments:</strong> iSolve does not currently accept payments
            through its website or platform.
          </li>
        </ul>
        <p>
          We receive information directly from you, from the dealership or fleet
          organization you work with, from authorized integrations, and through
          operation of our services. Please do not submit Social Security
          numbers, full payment-card details, medical information, or other
          unnecessary sensitive information in service messages or uploads.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "How we use information",
    content: (
      <>
        <p>
          We use information to provide and administer the services;
          authenticate users and manage access; organize vehicle and repair
          records; generate requested reports; deliver estimates and service
          communications; coordinate service-related work; respond to inquiries;
          troubleshoot problems; prevent misuse; and meet applicable legal
          obligations.
        </p>
        <p>
          We use contact information for communications related to the services
          you request or use. Vehicle-service SMS consent does not authorize
          unrelated promotional messages.
        </p>
        <p className="review-note">
          [CONFIRM ANY ADDITIONAL USE FOR ANALYTICS, PRODUCT IMPROVEMENT, OR
          MARKETING AND DESCRIBE IT ACCURATELY BEFORE PUBLICATION.]
        </p>
      </>
    ),
  },
  {
    id: "how-information-is-disclosed",
    title: "How information is disclosed",
    content: (
      <>
        <p>
          We disclose information to authorized people within the relevant
          dealership or fleet organization and to intended recipients of
          messages, estimates, or other shared records.
        </p>
        <p>
          We also use service providers for functions such as hosting, database
          storage, authentication, email delivery, and messaging. These
          providers receive information needed to perform their services for us,
          subject to applicable agreements and restrictions. They are not
          granted permission through this policy to use messaging consent for
          their own marketing.
        </p>
        <p>
          We may disclose information when required by law or when reasonably
          necessary to protect rights, investigate misuse, or protect the
          security of our services. If a merger, acquisition, or transfer of
          business assets involves personal information, the recipient must
          handle it consistently with applicable law and the notices and
          restrictions that apply to that information. Such a transaction does
          not expand SMS consent to new senders or purposes.
        </p>
        <p>
          We do not sell customer information or share it with third parties for
          advertising.
        </p>
      </>
    ),
  },
  {
    id: "sms-and-mobile-information",
    title: "SMS and mobile information",
    content: (
      <>
        <p>
          Mobile telephone numbers and SMS opt-in information will not be sold
          or disclosed to third parties or affiliates for their marketing or
          promotional purposes. Messaging consent is not transferred to another
          business or used to authorize unrelated messaging programs.
        </p>
        <p>
          We may provide the information necessary to operate the messaging
          program to service providers that process messages, maintain consent
          records, or enforce opt-outs on behalf of the identified sender. This
          operational processing does not authorize those providers to market to
          recipients.
        </p>
        <p>
          Service texts may concern repair orders, estimates, service decisions,
          vehicle status, and pickup or delivery. Message frequency varies with
          service activity. Message and data rates may apply. Reply{" "}
          <strong>STOP</strong> to unsubscribe from the sender’s SMS program or{" "}
          <strong>HELP</strong> for assistance. You may also contact{" "}
          <a href="mailto:jason@isolveauto.com">jason@isolveauto.com</a>.
          Further details appear in our{" "}
          <Link href="/terms">Terms and SMS Terms</Link>.
        </p>
      </>
    ),
  },
  {
    id: "cookies-and-third-party-content",
    title: "Cookies and third-party content",
    content: (
      <>
        <p>
          Our services may use cookies or similar technologies to support
          authentication, remember preferences, and maintain security. Browser
          settings can limit cookies, although disabling necessary cookies can
          affect functionality.
        </p>
        <p>
          The public website embeds a YouTube video using youtube-nocookie.com.
          The player loads automatically and begins muted playback, which
          connects your browser to YouTube even before you click Play. YouTube
          may receive technical information, including your IP address, browser
          information, and video interactions, under its own privacy policy.
        </p>
        <p className="review-note">
          [ANALYTICS REVIEW: No standalone analytics or advertising tracker was
          found in the reviewed marketing website source and nine first-party
          homepage bundles. The website embeds YouTube. Separately, the platform
          root layout includes Vercel Web Analytics when NODE_ENV is production.
          Confirm that this source matches the live deployment, then finalize
          the analytics disclosure and review platform cookies and any
          hosting-injected tracking.]
        </p>
        <p className="review-note">
          <strong>Browser privacy signals:</strong> [No custom Do Not Track or
          Global Privacy Control handling was identified in the reviewed public
          website code. Confirm deployed behavior, third-party video behavior,
          and the platform’s response before inserting a final disclosure. Do
          not treat the two signals as interchangeable.]
        </p>
      </>
    ),
  },
  {
    id: "ai-and-translation-features",
    title: "AI and translation features",
    content: (
      <>
        <p>
          AI and translation features are currently disabled for customer use
          and remain in testing. Testing uses real vehicle information,
          including VINs, mileage, and repair-order data, as well as made-up
          sample data. Customer names are not used in this testing.
        </p>
        <p className="review-note">
          [BEFORE PUBLICATION, CONFIRM WHICH OF THESE DATA FIELDS ARE SENT TO
          EXTERNAL PROVIDERS, THE PURPOSES, AND THE
          APPLICABLE PROVIDER RETENTION AND MODEL-TRAINING PRACTICES. THIS REVIEW
          APPLIES TO CURRENT TESTING AS WELL AS ANY FUTURE CUSTOMER RELEASE.]
        </p>
      </>
    ),
  },
  {
    id: "retention-and-security",
    title: "Retention and security",
    content: (
      <>
        <p>
          We retain personal information for the period needed to provide the
          services, administer the business relationship, address disputes,
          maintain security, and meet applicable recordkeeping obligations.
          Relevant factors include the type of record, the customer agreement,
          the length of the service relationship, and legal requirements.
          Deletion from active systems may precede expiration of backup copies.
          Deactivating an account or removing store access does not by itself
          delete historical reporting or audit attribution.
        </p>
        <p>
          Consent and suppression records may be retained as needed to
          demonstrate communication preferences and prevent messages from being
          sent after an opt-out.
        </p>
        <p>
          We use administrative, technical, and organizational measures designed
          to protect information. No transmission or storage system is
          completely secure.
        </p>
        <p className="review-note">
          [VERIFY THESE RETENTION, DELETION, BACKUP, ACCESS-CONTROL, AND
          SECURITY STATEMENTS AGAINST ACTUAL PRACTICES.]
        </p>
      </>
    ),
  },
  {
    id: "your-choices-and-requests",
    title: "Your choices and requests",
    content: (
      <>
        <p>
          You can request access to, correction of, or deletion of information
          about you by contacting{" "}
          <a href="mailto:jason@isolveauto.com">jason@isolveauto.com</a>. We may
          need to verify your identity or authority to act for another person.
        </p>
        <p>
          Where information is controlled by a dealership or fleet organization,
          we may refer your request to that organization or assist it in
          responding. Some information may need to be retained for legal
          obligations or legitimate recordkeeping purposes.
        </p>
        <p>
          Depending on applicable law, you may have additional rights concerning
          your information. We will handle qualifying requests as required by
          that law. We do not restrict rights that cannot lawfully be waived.
        </p>
      </>
    ),
  },
  {
    id: "children-and-processing-locations",
    title: "Children and processing locations",
    content: (
      <>
        <p>
          Our services are designed for business users and vehicle-service
          contacts, not children under 13. We do not knowingly collect personal
          information from children under 13. Contact us if you believe a child
          has submitted information.
        </p>
        <p className="review-note">
          [CONFIRM THE COUNTRIES IN WHICH ISOLVE AND ITS PROVIDERS STORE OR
          ACCESS PERSONAL INFORMATION, THEN ADD AN ACCURATE PROCESSING-LOCATIONS
          STATEMENT. ASSESS ADDITIONAL NOTICES IF SERVING USERS OUTSIDE THE
          UNITED STATES.]
        </p>
      </>
    ),
  },
  {
    id: "changes-and-contact",
    title: "Changes and contact",
    content: (
      <>
        <p>
          We will post updates to this policy and revise the effective date. If
          a change requires additional notice or consent, we will provide it as
          required before applying the change.
        </p>
        <p>
          <strong>iSolve Automotive LLC</strong>
          <br />
          Privacy inquiries:{" "}
          <a href="mailto:jason@isolveauto.com">jason@isolveauto.com</a>
          <br />
          Business mailing address: 15 Half Moon Bend, Coronado, CA 92118
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalDocument title="Privacy Policy" sections={sections}>
      <p>
        iSolve Automotive LLC (“iSolve,” “we,” “us,” or “our”) provides software
        for dealership operations, reporting, and communications. This Privacy
        Policy explains how we collect, use, disclose, and retain personal
        information through www.isolveauto.com, platform.isolveauto.com, and the
        iSolve features and communications that link to this policy.
      </p>
    </LegalDocument>
  );
}
