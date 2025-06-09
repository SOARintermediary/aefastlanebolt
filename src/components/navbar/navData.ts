interface BlogSection {
  title: string;
  titleKey: string;
  links: {
    href: string;
    text: string;
    textKey: string;
    icon: string;
  }[];
}

export const blogSections: BlogSection[] = [
  {
    title: 'Getting Started',
    titleKey: 'blog.categories.gettingStarted',
    links: [
      {
        href: '/blog/free-zone-vs-mainland',
        text: 'Free Zone vs Mainland: Which is Right?',
        textKey: 'blog.posts.freeZoneVsMainland.title',
        icon: '🏢'
      },
      {
        href: '/blog/starting-business-uae-foreigner',
        text: 'Starting a Business as a Foreigner',
        textKey: 'blog.posts.startingBusiness.title',
        icon: '🌍'
      },
      {
        href: '/blog/business-activities-licensing',
        text: 'Business Activities & Licensing Categories',
        textKey: 'blog.posts.businessActivities.title',
        icon: '📊'
      }
    ]
  },
  {
    title: 'Setup Guides',
    titleKey: 'blog.categories.setupGuides',
    links: [
      {
        href: '/blog/mainland-business-license-dubai',
        text: 'How to Open a Mainland Business License',
        textKey: 'blog.posts.mainlandLicense.title',
        icon: '📋'
      },
      {
        href: '/blog/free-zone-company-setup',
        text: 'Step-by-Step Free Zone Company Setup',
        textKey: 'blog.posts.freeZoneSetup.title',
        icon: '🏢'
      }
    ]
  },
  {
    title: 'Visa & Immigration',
    titleKey: 'blog.categories.visaImmigration',
    links: [
      {
        href: '/blog/visa-types-business-owners',
        text: 'Visa Types for Business Owners',
        textKey: 'blog.posts.visaTypes.title',
        icon: '🛃'
      },
      {
        href: '/blog/uae-residence-visa-application',
        text: 'UAE Residence Visa Application',
        textKey: 'blog.posts.residenceVisa.title',
        icon: '🛂'
      },
      {
        href: '/blog/golden-visa-eligibility',
        text: 'Golden Visa Eligibility & Process',
        textKey: 'blog.posts.goldenVisa.title',
        icon: '🏅'
      },
      {
        href: '/blog/family-dependents-visa',
        text: 'Family & Dependents Visa Sponsorship',
        textKey: 'blog.posts.familyVisa.title',
        icon: '👨‍👩‍👧'
      }
    ]
  },
  {
    title: 'Operations & Compliance',
    titleKey: 'blog.categories.operations',
    links: [
      {
        href: '/blog/government-approvals-streamlined',
        text: 'How AEFastLane Streamlines Approvals',
        textKey: 'blog.posts.govApprovals.title',
        icon: '⚙️'
      },
      {
        href: '/blog/company-renewals-closures',
        text: 'Company Renewals & Closures',
        textKey: 'blog.posts.renewals.title',
        icon: '🔁'
      }
    ]
  }
]; 