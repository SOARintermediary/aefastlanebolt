import { 
  Building2, 
  Globe, 
  FileText, 
  BarChart3, 
  Plane, 
  Star, 
  Heart, 
  Settings, 
  RefreshCw 
} from 'lucide-react';

export const blogSections = [
  {
    titleKey: 'blog.categories.gettingStarted',
    links: [
      {
        href: '/blog/free-zone-vs-mainland',
        textKey: 'blog.posts.freeZoneVsMainland.title',
        icon: Building2
      },
      {
        href: '/blog/starting-business-uae-foreigner',
        textKey: 'blog.posts.startingBusiness.title',
        icon: Globe
      },
      {
        href: '/blog/business-activities-licensing',
        textKey: 'blog.posts.businessActivities.title',
        icon: BarChart3
      }
    ]
  },
  {
    titleKey: 'blog.categories.setupGuides',
    links: [
      {
        href: '/blog/mainland-business-license-dubai',
        textKey: 'blog.posts.mainlandLicense.title',
        icon: FileText
      },
      {
        href: '/blog/free-zone-company-setup',
        textKey: 'blog.posts.freeZoneSetup.title',
        icon: Building2
      }
    ]
  },
  {
    titleKey: 'blog.categories.visaImmigration',
    links: [
      {
        href: '/blog/visa-types-business-owners',
        textKey: 'blog.posts.visaTypes.title',
        icon: Plane
      },
      {
        href: '/blog/uae-residence-visa-application',
        textKey: 'blog.posts.residenceVisa.title',
        icon: FileText
      },
      {
        href: '/blog/golden-visa-eligibility',
        textKey: 'blog.posts.goldenVisa.title',
        icon: Star
      },
      {
        href: '/blog/family-dependents-visa',
        textKey: 'blog.posts.familyVisa.title',
        icon: Heart
      }
    ]
  },
  {
    titleKey: 'blog.categories.operations',
    links: [
      {
        href: '/blog/government-approvals-streamlined',
        textKey: 'blog.posts.govApprovals.title',
        icon: Settings
      },
      {
        href: '/blog/company-renewals-closures',
        textKey: 'blog.posts.renewals.title',
        icon: RefreshCw
      }
    ]
  }
];