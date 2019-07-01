import Process1 from '../../assets/image/saasTwo/process-1.svg';
import Process2 from '../../assets/image/saasTwo/process-2.svg';
import Process3 from '../../assets/image/saasTwo/process-3.svg';

import FeatureIcon1 from '../../assets/image/saasTwo/icon-1.png';
import FeatureIcon2 from '../../assets/image/saasTwo/icon-2.png';
import FeatureIcon3 from '../../assets/image/saasTwo/icon-3.png';
import FeatureIcon4 from '../../assets/image/saasTwo/icon-4.png';
import FeatureIcon5 from '../../assets/image/saasTwo/icon-5.png';
import FeatureIcon6 from '../../assets/image/saasTwo/icon-6.png';

import Screenshot1 from '../../assets/image/saasTwo/dash-3.png';
import Screenshot2 from '../../assets/image/saasTwo/dash-4.png';

import AuthorOne from '../../assets/image/saasTwo/author-1.jpg';
import AuthorTwo from '../../assets/image/saasTwo/author-2.jpg';
import AuthorThree from '../../assets/image/saasTwo/author-3.jpg';

import solucionImage from '../../assets/image/saasTwo/solucion-image.png';

import { ic_monetization_on } from 'react-icons-kit/md/ic_monetization_on';
import { ic_settings } from 'react-icons-kit/md/ic_settings';
import { pieChart } from 'react-icons-kit/icomoon/pieChart';
import { briefcase } from 'react-icons-kit/fa/briefcase';

export const MENU_ITEMS = [
  {
    label: 'Inicio',
    path: '#banner_section',
    offset: '0',
  },
  {
    label: 'Distribuidor CONTPAQi',
    path: '#feature_section',
    offset: '0',
  },
  {
    label: 'Nosotros',
    path: '#pricing_section',
    offset: '0',
  },
  {
    label: 'Productos',
    path: '#testimonial_section',
    offset: '0',
  },
  {
    label: 'Servicios',
    path: '#faq_section',
    offset: '0',
  },
];

export const PROCESS_ITEMS = [
  {
    image: Process1,
    title: 'Finanzas y Contabilidad',
    description:
      '¿La empresa no cuenta con un sistema integral y muchos procesos contables y actualizaciones se realizan de forma manual?',
  },
  {
    image: Process2,
    title: 'Informes y estadísticas',
    description:
      '¿En el momento de redactar un informe, son interminables las hojas de cálculo con información inconsistente?',
  },
  {
    image: Process3,
    title: 'Administración de la Nómina',
    description:
      'Se acerca el fin de mes, aún hay tiempo de llegar a tus metas ¿Y la nómina es una carga tediosa que aveces conduce a errores?',
  },
];

export const SOLUCION_PIC = { image: solucionImage };

export const SOLUTION_ITEMS = [
  {
    id: 1,
    icon: 'flaticon-security',
    title: 'Confianza',
    description:
      'By using Search Engine Optimization, You will get more Clients.',
  },
  {
    id: 2,
    icon: 'flaticon-pencil-case',
    title: 'Profesionalidad',
    description:
      'We respect our customer opinions and deals with them with perfect wireframing.',
  },
  {
    id: 3,
    icon: 'flaticon-ruler',
    title: 'Economía',
    description:
      'We provide the best UI/UX Design by following the latest trends of the market .',
  },
  {
    id: 4,
    icon: 'flaticon-briefing',
    title: 'Innovación',
    description:
      'Proper Content Management is important to find out the real clients for your agencies .',
  },
];


export const MONTHLY_PRICING_TABLE = [
  {
    freePlan: true,
    name: 'Basic Account',
    description: 'For Small teams or group who need to build website ',
    price: '$0',
    priceLabel: 'Only for first month',
    buttonLabel: 'CREATE FREE ACCOUNT',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '1,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: 'eCommerce Store ',
      },
      {
        content: '30+ Webmaster Tools',
      },
    ],
  },
  {
    name: 'Business Account',
    description: 'For Mediums teams or group who need to build website ',
    price: '$9.87',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'START FREE TRIAL',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '1,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: 'eCommerce Store ',
      },
      {
        content: '30+ Webmaster Tools',
      },
    ],
  },
  {
    name: 'Premium Account',
    description: 'For Large teams or group who need to build website ',
    price: '$12.98',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'START FREE TRIAL',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '1,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: 'eCommerce Store ',
      },
      {
        content: '30+ Webmaster Tools',
      },
    ],
  },
];

export const YEARLY_PRICING_TABLE = [
  {
    freePlan: true,
    name: 'Basic Account',
    description: 'For a single client or team who need to build website ',
    price: '$0',
    priceLabel: 'Only for first month',
    buttonLabel: 'CREATE FREE ACCOUNT',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '1,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: 'eCommerce Store ',
      },
      {
        content: '30+ Webmaster Tools',
      },
    ],
  },
  {
    name: 'Business Account',
    description: 'For Small teams or group who need to build website ',
    price: '$6.00',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'START FREE TRIAL',
    url: '#',
    listItems: [
      {
        content: 'Unlimited secure storage',
      },
      {
        content: '2,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: '24/7 phone support',
      },
      {
        content: '50+ Webmaster Tools',
      },
    ],
  },
  {
    name: 'Premium Account',
    description: 'For Large teams or group who need to build website ',
    price: '$9.99',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'START FREE TRIAL',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '3,000s of Templates Ready',
      },
      {
        content: 'Advanced branding',
      },
      {
        content: 'Knowledge base support',
      },
      {
        content: '80+ Webmaster Tools',
      },
    ],
  },
];

export const FAQ_DATA = [
  {
    expend: true,
    title: 'How to contact with Customer Service?',
    description:
      'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ',
  },
  {
    title: 'App installation failed, how to update system information?',
    description:
      'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ',
  },
  {
    title: 'Website reponse taking time, how to improve?',
    description:
      'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .',
  },
  {
    title: 'New update fixed all bug and issues?',
    description:
      'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .',
  },
];

export const FOOTER_WIDGET = [
  {
    title: 'About Us',
    menuItems: [
      {
        url: '#',
        text: 'Support Center',
      },
      {
        url: '#',
        text: 'Customer Support',
      },
      {
        url: '#',
        text: 'About Us',
      },
      {
        url: '#',
        text: 'Copyright',
      },
      {
        url: '#',
        text: 'Popular Campaign',
      },
    ],
  },
  {
    title: 'Our Information',
    menuItems: [
      {
        url: '#',
        text: 'Return Policy',
      },
      {
        url: '#',
        text: 'Privacy Policy',
      },
      {
        url: '#',
        text: 'Terms & Conditions',
      },
      {
        url: '#',
        text: 'Site Map',
      },
      {
        url: '#',
        text: 'Store Hours',
      },
    ],
  },
  {
    title: 'My Account',
    menuItems: [
      {
        url: '#',
        text: 'Press inquiries',
      },
      {
        url: '#',
        text: 'Social media directories',
      },
      {
        url: '#',
        text: 'Images & B-roll',
      },
      {
        url: '#',
        text: 'Permissions',
      },
      {
        url: '#',
        text: 'Speaker requests',
      },
    ],
  },
  {
    title: 'Policy',
    menuItems: [
      {
        url: '#',
        text: 'Application security',
      },
      {
        url: '#',
        text: 'Software principles',
      },
      {
        url: '#',
        text: 'Unwanted software policy',
      },
      {
        url: '#',
        text: 'Responsible supply chain',
      },
    ],
  },
];

export const FEATURES = [
  {
    icon: FeatureIcon1,
    title: 'App Development',
    description:
      'Get your proof tests delivered home collect a sample from the news get design.',
  },
  {
    icon: FeatureIcon2,
    title: '10 Times Award',
    description:
      'Get your proof tests delivered home collect a sample from the news get design.',
  },
  {
    icon: FeatureIcon3,
    title: 'Cloud Storage',
    description:
      'Get your proof tests delivered home collect a sample from the news get design.',
  },
  {
    icon: FeatureIcon4,
    title: 'Customization',
    description:
      'Get your proof tests delivered home collect a sample from the news get design.',
  },
  {
    icon: FeatureIcon5,
    title: 'UX Planning',
    description:
      'Get your proof tests delivered home collect a sample from the news get design.',
  },
  {
    icon: FeatureIcon6,
    title: 'Customer Support',
    description:
      'Get your proof tests delivered home collect a sample from the news get design.',
  },
];

export const SCREENSHOTS = [
  {
    icon: ic_monetization_on,
    title: 'Budget Overview',
    image: Screenshot2,
  },
  {
    icon: ic_settings,
    title: 'Create & Adjust',
    image: Screenshot1,
  },
  {
    icon: pieChart,
    title: 'View Reports',
    image: Screenshot2,
  },
  {
    icon: briefcase,
    title: 'Integrations',
    image: Screenshot1,
  },
];

export const TESTIMONIALS = [
  {
    title: 'Modern look & trending design',
    review:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    name: 'Denny Hilguston',
    designation: 'CEO of Dell Co.',
    avatar: `${AuthorOne}`,
  },
  {
    title: 'Modern look & trending design',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur.',
    name: 'Justin Albuz',
    designation: 'Co Founder of IBM',
    avatar: `${AuthorTwo}`,
  },
  {
    title: 'Modern look & trending design',
    review:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    name: 'Milly Cristiana',
    designation: 'Manager of Hp co.',
    avatar: `${AuthorThree}`,
  },
];
