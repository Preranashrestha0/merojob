import { DropdownItem } from '../../components/dropdownMenu';

export const dropdown: DropdownItem[] = [
  { label: ' Multipages', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Pricing', href: '#' },
  {
    label: 'Dropstart',
    children: [
      { label: 'Services', href: '#' },
      { label: 'Pricing', href: '#' },
      {
        label: 'Dropstart',
        children: [
        { label: 'Services', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Something else here', href: '#' },
        {
            label: 'Dropend',
            children: [
            { label: 'Services', href: '#' },
            { label: 'Pricing', href: '#' },
            { label: 'Something else here', href: '#' },

            ],
        },
        ],
    },
    ],
  },
];

export const pagesDropdown: DropdownItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
