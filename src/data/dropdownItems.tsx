import { DropdownItem } from '../components/dropdownMenu';

export const servicesDropdown: DropdownItem[] = [
  { label: 'Multipages', href: '/services/web' },
  { label: 'Services', href: '/services/app' },
  { label: 'Pricing', href: '/services/app' }, 
  {
    label: 'DropStart',
    children: [
      { label: 'Services', href: '/services/seo' },
      { label: 'Pricing', href: '/services/analytics' },
      { label: 'DropStart',
        children: [
          { label: 'Services', href: '/services/seo' },
          { label: 'Pricing', href: '/services/analytics' },
          { label: 'Something else here', href: '/services/analytics' },
          { label: 'DropStart',
        children: [
          { label: 'Services', href: '/services/seo' },
          { label: 'Pricing', href: '/services/analytics' },
          { label: 'Something else here', href: '/services/analytics' },
        ]

       },
        ]

       },
    ],
  },
];

export const pagesDropdown: DropdownItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
