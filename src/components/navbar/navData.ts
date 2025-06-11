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
        href: undefined,
        textKey: 'blog.posts.freeZoneVsMainland.title',
        icon: Building2
      },
      {
        href: undefined,
        textKey: 'blog.posts.startingBusiness.title',
        icon: Globe
      },
      {
        href: undefined,
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
        href: undefined,
        textKey: 'blog.posts.freeZoneSetup.title',
        icon: Building2
      }
    ]
  },
  {
    titleKey: 'blog.categories.visaImmigration',
    links: [
      {
        href: undefined,
        textKey: 'blog.posts.visaTypes.title',
        icon: Plane
      },
      {
        href: undefined,
        textKey: 'blog.posts.residenceVisa.title',
        icon: FileText
      },
      {
        href: undefined,
        textKey: 'blog.posts.goldenVisa.title',
        icon: Star
      },
      {
        href: undefined,
        textKey: 'blog.posts.familyVisa.title',
        icon: Heart
      }
    ]
  },
  {
    titleKey: 'blog.categories.operations',
    links: [
      {
        href: undefined,
        textKey: 'blog.posts.govApprovals.title',
        icon: Settings
      },
      {
        href: undefined,
        textKey: 'blog.posts.renewals.title',
        icon: RefreshCw
      }
    ]
  }
];