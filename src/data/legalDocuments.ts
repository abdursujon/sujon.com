import type { LegalDocument } from '../types/legal'

export const legalDocuments: LegalDocument[] = [
  {
    slug: 'privacy',
    title: 'Privacy Policy',
    lastUpdated: 'September 2026',
    clauses: [
      {
        heading: 'Who is responsible',
        paragraphs: [
          'This site is a personal portfolio operated by Abdur Sujon, based in Manchester, United Kingdom. For any question about this notice or about personal data, contact abdursujon@hotmail.com.',
        ],
      },
      {
        heading: 'What this site collects',
        paragraphs: [
          'There is no contact form, no sign-up, no account and no analytics on this site. No cookies are set. Nothing is collected from visitors directly.',
          'Some data is still handled by the services described below, because a browser has to request files from them in order to display the page.',
        ],
      },
      {
        heading: 'Hosting and server logs',
        paragraphs: [
          'The site is hosted by Netlify. Netlify records standard server log data for each request, including IP address, browser and device type, the page requested and the time of the request. This is used to deliver the site and to protect it against abuse. The lawful basis is legitimate interests under Article 6(1)(f) of the UK GDPR.',
          'These logs are held by Netlify under their own retention practices, set out at https://www.netlify.com/privacy/. I do not have access to individual log entries.',
        ],
      },
      {
        heading: 'Fonts and institution logos',
        paragraphs: [
          'Typefaces are loaded from Google Fonts at fonts.googleapis.com and fonts.gstatic.com. Small institution icons shown next to education and work history entries are loaded from Google at www.google.com/s2/favicons. Requesting these files sends your IP address, browser details and the address of the page you are viewing to Google. See https://policies.google.com/privacy.',
          'One logo, for Feni Government College, is loaded directly from fgc.gov.bd. Requesting it sends the same details to that server.',
          'The lawful basis for both is legitimate interests under Article 6(1)(f), namely presenting the site as designed.',
        ],
      },
      {
        heading: 'GitHub contribution graph',
        paragraphs: [
          'The contribution graph is assembled on the server and served from this site. Your browser does not contact GitHub to display it, so no visitor data reaches GitHub. The data shown is my own public GitHub activity.',
        ],
      },
      {
        heading: 'Theme preference',
        paragraphs: [
          'Your choice of light or dark theme is stored in your browser’s local storage under the key "theme". It stays on your device, is never transmitted anywhere, and can be removed by clearing site data in your browser.',
        ],
      },
      {
        heading: 'Contacting me',
        paragraphs: [
          'If you email me, your address and the contents of your message are stored in my mailbox, which is provided by Microsoft Outlook. If you message me on LinkedIn or Instagram, that conversation is held by those platforms under their own privacy notices.',
          'Messages are kept for as long as needed to reply and to handle any follow-up, and are then deleted. The lawful basis is legitimate interests under Article 6(1)(f), namely responding to someone who has chosen to get in touch.',
        ],
      },
      {
        heading: 'Links to other sites',
        paragraphs: [
          'Links to GitHub, LinkedIn, Instagram, Spotify, employers and universities are followed only when you click them. Those sites are operated by other organisations and have their own privacy notices.',
        ],
      },
      {
        heading: 'Your rights',
        paragraphs: [
          'Under the UK GDPR you have the right to ask what personal data I hold about you, to have it corrected or erased, to restrict or object to its use, and to receive a copy of it. To exercise any of these, email abdursujon@hotmail.com.',
          'If you are not satisfied with the response, you can complain to the Information Commissioner’s Office at ico.org.uk or on 0303 123 1113.',
        ],
      },
      {
        heading: 'Changes to this notice',
        paragraphs: [
          'This notice is updated when the site changes in a way that affects it. The date shown above is the date of the most recent version.',
        ],
      },
    ],
  },
  {
    slug: 'terms',
    title: 'Terms & Disclaimer',
    lastUpdated: 'September 2026',
    clauses: [
      {
        heading: 'About these terms',
        paragraphs: [
          'This site is a personal portfolio operated by Abdur Sujon, based in Manchester, United Kingdom. These terms set out the basis on which the site is made available. Using the site means accepting them.',
        ],
      },
      {
        heading: 'Source code',
        paragraphs: [
          'The source code for this site is published at github.com/abdursujon/sujon.com under the MIT licence. You are free to read, reuse and adapt the code on the terms of that licence, which is included in the repository.',
          'The MIT licence covers the code only. It grants no rights over the content described in the next clause.',
        ],
      },
      {
        heading: 'Written content and artwork',
        paragraphs: [
          'The written content of this site, together with all drawings, digital art and photographs shown on it, are original works and remain the copyright of Abdur Sujon. All rights are reserved.',
          'You may link to any page and quote short passages with attribution. Reproducing the artwork, copying substantial parts of the written content, or presenting either as your own work is not permitted without written permission.',
        ],
      },
      {
        heading: 'Third-party names and logos',
        paragraphs: [
          'Names and logos of universities, employers and other organisations appear on this site solely to identify institutions where the author has studied or worked. They remain the property of their respective owners.',
          'Their appearance does not imply endorsement, sponsorship, partnership or any ongoing affiliation, and no claim of ownership over them is made. If you represent one of these organisations and would prefer a logo were removed, email abdursujon@hotmail.com and it will be taken down.',
        ],
      },
      {
        heading: 'Career and education information',
        paragraphs: [
          'Work history, qualifications, grades and project descriptions are given in good faith and were accurate when published. They describe past work and may become out of date.',
          'Nothing here is a warranty as to their accuracy or completeness. Supporting documentation for any claim made on this site is available on request.',
        ],
      },
      {
        heading: 'No advice',
        paragraphs: [
          'Content on this site is published for general information. It does not constitute professional, technical, legal or career advice, and it should not be relied on as a basis for any decision.',
        ],
      },
      {
        heading: 'Links to other sites',
        paragraphs: [
          'This site links to pages operated by other organisations. Those links are provided for convenience and do not imply any endorsement of their content. I have no control over those sites and accept no responsibility for them.',
        ],
      },
      {
        heading: 'Availability',
        paragraphs: [
          'The site is provided as-is and as-available. No guarantee is given that it will be uninterrupted, error free or free of harmful components, and it may be changed or withdrawn at any time without notice.',
        ],
      },
      {
        heading: 'Liability',
        paragraphs: [
          'To the fullest extent permitted by law, no liability is accepted for any loss or damage arising from use of this site or reliance on its content.',
          'Nothing in these terms limits or excludes liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for any other liability that cannot be limited or excluded under the law of England and Wales.',
        ],
      },
      {
        heading: 'Changes to these terms',
        paragraphs: [
          'These terms are updated when the site changes in a way that affects them. The date shown above is the date of the most recent version.',
        ],
      },
      {
        heading: 'Governing law',
        paragraphs: [
          'These terms and any dispute arising from them are governed by the law of England and Wales, and are subject to the exclusive jurisdiction of the courts of England and Wales.',
        ],
      },
    ],
  },
]
