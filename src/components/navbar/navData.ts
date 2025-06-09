interface BlogSection {
  title: string;
  links: {
    href: string;
    text: string;
    icon: string;
  }[];
}

export const blogSections: BlogSection[] = [
  {
    title: 'Getting Started',
    links: [
      {
        href: '/blog/free-zone-vs-mainland',
        text: 'Free Zone vs Mainland: Which is Right?',
        icon: '🏢'
      },
      {
        href: '/blog/starting-business-uae-foreigner',
        text: 'Starting a Business as a Foreigner',
        icon: '🌍'
      },
      {
        href: '/blog/business-activities-licensing',
        text: 'Business Activities & Licensing Categories',
        icon: '📊'
      }
    ]
  },
  {
    title: 'Setup Guides',
    links: [
      {
        href: '/blog/mainland-business-license-dubai',
        text: 'How to Open a Mainland Business License',
        icon: '📋'
      },
      {
        href: '/blog/free-zone-company-setup',
        text: 'Step-by-Step Free Zone Company Setup',
        icon: '🏢'
      }
    ]
  },
  {
    title: 'Visa & Immigration',
    links: [
      {
        href: '/blog/visa-types-business-owners',
        text: 'Visa Types for Business Owners',
        icon: '🛃'
      },
      {
        href: '/blog/uae-residence-visa-application',
        text: 'UAE Residence Visa Application',
        icon: '🛂'
      },
      {
        href: '/blog/golden-visa-eligibility',
        text: 'Golden Visa Eligibility & Process',
        icon: '🏅'
      },
      {
        href: '/blog/family-dependents-visa',
        text: 'Family & Dependents Visa Sponsorship',
        icon: '👨‍👩‍👧'
      }
    ]
  },
  {
    title: 'Operations & Compliance',
    links: [
      {
        href: '/blog/government-approvals-streamlined',
        text: 'How AEFastLane Streamlines Approvals',
        icon: '⚙️'
      },
      {
        href: '/blog/company-renewals-closures',
        text: 'Company Renewals & Closures',
        icon: '🔁'
      }
    ]
  }
]; 