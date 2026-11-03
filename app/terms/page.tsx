import type { Metadata } from "next";
import Link from "next/link";
import LegalDocument from "../../components/LegalDocument";

export const metadata: Metadata = {
  title: "Terms and SMS Terms — Review Draft | iSolve Automotive",
  description:
    "Review draft of iSolve Automotive LLC’s terms and sms terms. Not yet effective.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    id: "platform-purpose-and-access",
    title: "Platform purpose and access",
    content: (
      <>
        <p>
          iSolve provides software to help dealerships and fleet organizations
          manage operational information, reporting, and communications.
          Available features depend on the applicable service arrangement.
        </p>
        <p>
          You must have permission to access your organization’s account and
          information. Keep credentials confidential, use accurate account
          information, and notify{" "}
          <a href="mailto:jason@isolveauto.com">jason@isolveauto.com</a> if you
          suspect unauthorized access.
        </p>
        <p>
          Do not access records you are not authorized to view, interfere with
          the service, introduce harmful code, impersonate another person, or
          use the platform for unlawful activity or unsolicited messaging.
        </p>
      </>
    ),
  },
  {
    id: "dealership-services-and-fleet-authority",
    title: "Dealership services and fleet authority",
    content: (
      <>
        <p>
          The dealership identified in a service communication is responsible
          for diagnosis, pricing, estimates, repairs, warranties, service
          completion, and pickup or delivery commitments. iSolve supplies
          software and does not perform those vehicle services or make service
          decisions for the dealership.
        </p>
        <p>
          Fleet representatives must have the authority needed to provide
          instructions or authorize work for their organization. The dealership
          is responsible for verifying repair authorization and maintaining
          required service documentation. A message delivery indicator is not
          proof that a recipient read a message or authorized a repair.
        </p>
        <p>
          Estimated completion times and status updates can change. Contact the
          dealership directly for urgent questions or confirmation of vehicle
          availability.
        </p>
      </>
    ),
  },
  {
    id: "customer-records-and-intellectual-property",
    title: "Customer records and intellectual property",
    content: (
      <>
        <p>
          You retain your rights in the information you submit. You grant iSolve
          permission to process, transmit, display, and store it as needed to
          provide the services, support your account, and meet applicable
          obligations under our agreements.
        </p>
        <p>
          You are responsible for the accuracy of submitted information and for
          having the permissions needed to provide it. iSolve retains its rights
          in its software, branding, and original website content. Access to the
          service does not transfer ownership of those materials.
        </p>
      </>
    ),
  },
  {
    id: "fees-and-subscriptions",
    title: "Fees and subscriptions",
    content: (
      <>
        <p>
          iSolve does not currently accept payments through its website or
          platform. If paid services are introduced, applicable pricing,
          billing, cancellation, and other payment terms will be provided before
          you agree to purchase.
        </p>
      </>
    ),
  },
  {
    id: "reports-and-assisted-outputs",
    title: "Reports and assisted outputs",
    content: (
      <>
        <p>
          Reports depend on the information entered or imported. Review outputs
          for accuracy before making operational, financial, warranty, or
          customer-service decisions.
        </p>
        <p>
          If an AI or translation feature is enabled under your service
          arrangement, its output requires appropriate human review. It does not
          independently authorize a repair, submit a warranty claim, or replace
          professional judgment.
        </p>
      </>
    ),
  },
  {
    id: "sms-program",
    title: "SMS program",
    content: (
      <>
        <p>
          The vehicle-service SMS program supports communications between the
          identified dealership and customers, fleet representatives, or other
          authorized service contacts. iSolve provides the messaging technology.
        </p>
        <p>
          Messages may include repair order updates, estimates, requests for
          repair decisions, service-related follow-ups, vehicle status, and
          pickup or delivery coordination. This program does not include
          promotional campaigns.
        </p>
        <p>
          Each dealership’s SMS enrollment notice must identify its registered
          business or brand, its support contact, and the applicable policy
          links. Consent to one dealership’s program does not enroll you in
          another dealership’s program.
        </p>
      </>
    ),
  },
  {
    id: "consent-and-message-frequency",
    title: "Consent and message frequency",
    content: (
      <>
        <p>
          SMS participation is voluntary and is separate from acceptance of
          these Terms. The dealership must obtain and retain the recipient’s
          affirmative written or electronic SMS consent before recurring service
          messages begin. Consent must identify the sender and the
          service-message purpose.
        </p>
        <p>
          <strong>Message frequency varies</strong> according to vehicle-service
          activity. <strong>Message and data rates may apply.</strong> Contact
          your mobile carrier for details about your plan.
        </p>
        <p>
          Choosing not to receive texts does not prevent you from obtaining
          vehicle service. Arrange another communication method with the
          dealership.
        </p>
      </>
    ),
  },
  {
    id: "stopping-messages-and-getting-help",
    title: "Stopping messages and getting help",
    content: (
      <>
        <p>
          Reply <strong>STOP</strong> to the sending number to unsubscribe from
          that sender’s SMS program. You may receive one confirmation of your
          opt-out. Further program messages will stop unless you provide new
          consent.
        </p>
        <p>
          Reply <strong>HELP</strong> for assistance, contact the dealership
          through the support details in its enrollment notice, or email{" "}
          <a href="mailto:jason@isolveauto.com">jason@isolveauto.com</a> for
          platform support.
        </p>
        <p>
          Tell the sender if your telephone number changes or you no longer
          control it. Do not enroll a number you are not authorized to use.
        </p>
      </>
    ),
  },
  {
    id: "delivery-and-privacy",
    title: "Delivery and privacy",
    content: (
      <>
        <p>
          SMS delivery depends on mobile carriers, network availability, device
          settings, and other factors. Messages can be delayed or fail to
          arrive. Carriers are not liable for delayed or undelivered messages.
          SMS is not an emergency communication service.
        </p>
        <p>
          Do not include full payment-card details, Social Security numbers, or
          other unnecessary sensitive information in texts. Information about
          how iSolve handles data appears in the{" "}
          <Link href="/privacy">Privacy Policy</Link>. The dealership’s
          applicable privacy notice also governs its handling of customer
          records.
        </p>
      </>
    ),
  },
  {
    id: "dealership-messaging-responsibilities",
    title: "Dealership messaging responsibilities",
    content: (
      <>
        <p>
          Organizations using iSolve messaging must maintain accurate sender
          information, record consent, honor opt-outs, limit texts to the agreed
          purpose, and comply with applicable laws and messaging-provider
          requirements. They must not upload purchased contact lists or use this
          service program for unsolicited promotions.
        </p>
        <p>
          An organization must ensure employees have appropriate access and
          training. Publicly posting these Terms does not establish that a
          recipient has opted in.
        </p>
      </>
    ),
  },
  {
    id: "availability-and-suspension",
    title: "Availability and suspension",
    content: (
      <>
        <p>
          We may maintain, update, or change the service. We may restrict access
          when reasonably necessary to address security threats, misuse, legal
          requirements, or a material breach of the applicable agreement. Where
          practical and appropriate, we will give notice and an opportunity to
          resolve the issue.
        </p>
        <p>
          Any contractual service levels, data-export rights, and termination
          procedures remain governed by the applicable customer agreement.
        </p>
      </>
    ),
  },
  {
    id: "warranties-and-legal-rights",
    title: "Warranties and legal rights",
    content: (
      <>
        <p>
          Except for commitments in a separate agreement and to the extent
          allowed by law, the website and services are provided as available
          without a promise that every feature will be uninterrupted or
          error-free. Nothing in these Terms excludes a responsibility or right
          that cannot lawfully be excluded.
        </p>
        <p className="review-note">
          [BEFORE PUBLICATION, DECIDE WHETHER A SEPARATE COMMERCIAL AGREEMENT
          WILL ADDRESS LIABILITY LIMITS, INDEMNITY, GOVERNING LAW, AND DISPUTE
          RESOLUTION. THIS DRAFT DOES NOT CREATE AN ARBITRATION REQUIREMENT,
          CLASS-ACTION WAIVER, OR FIXED LIABILITY CAP.]
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
          We will post updated Terms with a revised effective date and provide
          further notice or obtain agreement where required. Changes to the SMS
          program do not expand a recipient’s consent without the additional
          consent required for the new purpose.
        </p>
        <p>
          <strong>iSolve Automotive LLC</strong>
          <br />
          Support and terms inquiries:{" "}
          <a href="mailto:jason@isolveauto.com">jason@isolveauto.com</a>
          <br />
          Business mailing address: 15 Half Moon Bend, Coronado, CA 92118
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalDocument title="Terms and SMS Terms" sections={sections}>
      <p>
        These Terms govern use of iSolve Automotive LLC’s public website and the
        iSolve services that refer to these Terms. “You” means the person using
        the services and, when applicable, the organization that person is
        authorized to represent.
      </p>
      <p>
        A separate signed agreement or accepted order form governs paid services
        when one exists. If it conflicts with these Terms, that agreement
        controls for the services it covers. These Terms do not authorize SMS
        messages by themselves.
      </p>
    </LegalDocument>
  );
}
