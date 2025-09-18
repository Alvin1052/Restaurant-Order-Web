interface ContactService {
  id: string;
  label: string;
  link: string;
}

const ContactServices: ContactService[] = [
  {
    id: '1',
    label: 'How to Order',
    link: '#',
  },
  { id: '2', label: 'Payment Methods', link: '#' },
  { id: '3', label: 'Track My Order', link: '#' },
  { id: '4', label: 'FAQ', link: '#' },
  { id: '5', label: 'Contact Us', link: '#' },
];

export default ContactServices;
