/** Terms and Privacy text, carried over from the current cdmware.com pages. */

export type LegalSection = { title: string; paragraphs?: string[]; list?: string[]; after?: string[] };

export const terms = {
  updated: "22 January 2026",
  intro: [
    "Welcome to CDMware. By accessing or using our website, services, or engaging with us for digital solutions, you agree to be bound by these Terms and Conditions. Please read them carefully.",
  ],
  sections: [
    {
      title: "1. Definitions",
      list: [
        "“Company,” “we,” “our,” or “us” refers to CDMware.",
        "“Client,” “you,” or “your” refers to any individual, business, or organisation using our website or services.",
        "“Services” include software development, web and mobile app development, UI/UX design, creative services, digital marketing, IT consulting, and related offerings.",
      ],
    },
    {
      title: "2. Acceptance of Terms",
      paragraphs: [
        "By accessing our website, submitting a consultation form, or engaging our services, you confirm that you have read, understood, and agreed to these Terms and Conditions.",
        "If you do not agree, please do not use our website or services.",
      ],
    },
    {
      title: "3. Use of Website",
      paragraphs: ["You agree to use this website only for lawful purposes and in a manner that does not:"],
      list: [
        "Infringe on the rights of others",
        "Disrupt or damage the website or its functionality",
        "Attempt unauthorised access to systems or data",
      ],
      after: ["We reserve the right to restrict or terminate access for violations."],
    },
    {
      title: "4. Services Engagement",
      list: [
        "All services provided by CDMware are subject to specific project agreements, proposals, or contracts.",
        "Project scope, timelines, deliverables, and pricing will be clearly defined before commencement.",
        "Any additional work outside the agreed scope may require a separate agreement or additional fees.",
      ],
    },
    {
      title: "5. Payments & Fees",
      list: [
        "Payment terms will be specified in individual contracts or invoices.",
        "Late or failed payments may result in project delays, suspension, or termination.",
        "All fees are non-refundable unless otherwise stated in writing.",
      ],
    },
    {
      title: "6. Intellectual Property",
      list: [
        "All original designs, software, content, code, and materials created by CDMware remain our intellectual property until full payment is received, unless otherwise agreed.",
        "Upon full payment, ownership or usage rights will be transferred as defined in the project agreement.",
        "You may not reproduce, resell, or distribute our materials without written consent.",
      ],
    },
    {
      title: "7. Client Responsibilities",
      paragraphs: ["Clients agree to:"],
      list: [
        "Provide accurate information and timely feedback",
        "Supply required content, approvals, and assets on schedule",
        "Ensure they have rights to any materials provided to us",
      ],
      after: ["Delays caused by the client may affect project timelines."],
    },
    {
      title: "8. Confidentiality",
      paragraphs: [
        "Both parties agree to keep confidential any non-public, proprietary, or sensitive information shared during the course of a project, unless disclosure is required by law.",
      ],
    },
    {
      title: "9. Limitation of Liability",
      paragraphs: ["To the maximum extent permitted by law:"],
      list: [
        "CDMware shall not be liable for indirect, incidental, or consequential damages.",
        "We do not guarantee uninterrupted or error-free operation of websites or software due to third-party services, hosting providers, or external factors.",
      ],
    },
    {
      title: "10. Third-Party Services",
      paragraphs: [
        "Our services may rely on third-party tools, platforms, or APIs (e.g., hosting providers, analytics tools, ad platforms).",
        "We are not responsible for outages, changes, or failures caused by third parties.",
      ],
    },
    {
      title: "11. Termination",
      paragraphs: ["We reserve the right to terminate or suspend services if:"],
      list: ["These Terms are violated", "Payments are not fulfilled", "There is misuse of our services or website"],
      after: ["Upon termination, outstanding obligations remain payable."],
    },
    {
      title: "12. Privacy",
      paragraphs: [
        "Your use of this website and our services is also governed by our Privacy Policy, which explains how we collect, use, and protect your data.",
      ],
    },
    {
      title: "13. Governing Law",
      paragraphs: [
        "These Terms shall be governed and interpreted in accordance with the laws of the applicable jurisdiction where CDMware operates, without regard to conflict of law principles.",
      ],
    },
    {
      title: "14. Changes to Terms",
      paragraphs: [
        "We may update these Terms and Conditions from time to time. Any changes will be posted on this page, and continued use of our website constitutes acceptance of the updated terms.",
      ],
    },
  ] as LegalSection[],
};

export const privacy = {
  updated: "22 January 2026",
  intro: [
    "CDMware (“we”, “our”, “us”) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website, use our services, or interact with us in any way.",
    "By accessing our website or using our services, you agree to the terms of this Privacy Policy.",
  ],
  sections: [
    {
      title: "1. Information We Collect",
      paragraphs: ["Personal information that identifies you, including but not limited to:"],
      list: [
        "Full name, email address and phone number",
        "Company name and job title",
        "Any information you provide through contact forms, consultations, or proposals",
      ],
      after: [
        "Technical and usage information collected automatically when you use our website: IP address, browser type and version, device information, pages visited and time spent, and referring URLs.",
        "Project and business information when you engage our services: project requirements, business or technical documentation, and feedback and communications related to service delivery.",
      ],
    },
    {
      title: "2. How We Use Your Information",
      paragraphs: ["We use the information we collect to:"],
      list: [
        "Provide, operate, and improve our services",
        "Respond to inquiries and consultation requests",
        "Communicate project updates and business information",
        "Prepare proposals, contracts, and invoices",
        "Improve website performance and user experience",
        "Comply with legal and regulatory obligations",
      ],
      after: ["We do not sell or rent your personal data to third parties."],
    },
    {
      title: "3. Legal Basis for Processing",
      paragraphs: ["Where applicable, we process personal data based on:"],
      list: ["Your consent", "Performance of a contract", "Legitimate business interests", "Compliance with legal obligations"],
    },
    {
      title: "4. Cookies & Tracking Technologies",
      paragraphs: ["We may use cookies and similar technologies to:"],
      list: ["Enhance website functionality", "Analyse traffic and usage patterns", "Improve marketing effectiveness"],
      after: [
        "You may control or disable cookies through your browser settings. Some features may not function properly if cookies are disabled.",
      ],
    },
    {
      title: "5. Data Sharing & Disclosure",
      paragraphs: ["We may share your information only in the following situations:"],
      list: [
        "With trusted service providers (e.g., hosting, analytics, email tools) under confidentiality agreements",
        "When required by law or legal process",
        "To protect our rights, security, or property",
      ],
      after: ["All third parties are required to handle your data responsibly and securely."],
    },
    {
      title: "6. Data Security",
      paragraphs: [
        "We implement appropriate technical and organisational security measures to protect your information against unauthorised access, loss, misuse, or alteration.",
        "However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
      ],
    },
    {
      title: "7. Data Retention",
      paragraphs: ["We retain personal information only for as long as necessary to:"],
      list: ["Fulfil the purposes outlined in this policy", "Meet legal, accounting, or reporting requirements"],
      after: ["When data is no longer required, it is securely deleted or anonymised."],
    },
    {
      title: "8. Your Rights",
      paragraphs: ["Depending on your location, you may have the right to:"],
      list: [
        "Access your personal data",
        "Request correction or updates",
        "Request deletion of your data",
        "Object to or restrict processing",
        "Withdraw consent at any time",
      ],
      after: ["To exercise your rights, please contact us using the details below."],
    },
    {
      title: "9. Third-Party Links",
      paragraphs: [
        "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies separately.",
      ],
    },
    {
      title: "10. Children’s Privacy",
      paragraphs: [
        "Our services are not intended for individuals under the age of 13. We do not knowingly collect personal data from children.",
      ],
    },
    {
      title: "11. Changes to This Privacy Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Continued use of our website or services constitutes acceptance of the updated policy.",
      ],
    },
  ] as LegalSection[],
};
