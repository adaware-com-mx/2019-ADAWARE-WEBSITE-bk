import Process1 from '../../assets/image/saasTwo/process-1.svg';
import Process2 from '../../assets/image/saasTwo/process-2.svg';
import Process3 from '../../assets/image/saasTwo/process-3.svg';

import Service1 from '../../assets/image/saasTwo/service-1.svg';
import Service2 from '../../assets/image/saasTwo/service-2.svg';
import Service3 from '../../assets/image/saasTwo/service-3.svg';
import Service4 from '../../assets/image/saasTwo/service-4.svg';
import Service5 from '../../assets/image/saasTwo/service-5.svg';

import FeatureIcon1 from '../../assets/image/saasTwo/icon-1.png';
import FeatureIcon2 from '../../assets/image/saasTwo/icon-2.png';
import FeatureIcon3 from '../../assets/image/saasTwo/icon-3.png';
import FeatureIcon4 from '../../assets/image/saasTwo/icon-4.png';
import FeatureIcon5 from '../../assets/image/saasTwo/icon-5.png';
import FeatureIcon6 from '../../assets/image/saasTwo/icon-6.png';

import Screenshot1 from '../../assets/image/saasTwo/screenshot1.png';
import Screenshot2 from '../../assets/image/saasTwo/screenshot2.png';
import Screenshot3 from '../../assets/image/saasTwo/screenshot3.png';
import Screenshot4 from '../../assets/image/saasTwo/screenshot4.png';
import Screenshot5 from '../../assets/image/saasTwo/screenshot5.png';

import AuthorOne from '../../assets/image/saasTwo/author-1.jpg';
import AuthorTwo from '../../assets/image/saasTwo/author-2.jpg';
import AuthorThree from '../../assets/image/saasTwo/author-3.jpg';

import solucionImage from '../../assets/image/saasTwo/solucion-image.png';

import infoContpaqImage1 from '../../assets/image/saasTwo/infocontpaq1-image.png';
import infoContpaqImage2 from '../../assets/image/saasTwo/infocontpaq2-image.png';

import { ic_monetization_on } from 'react-icons-kit/md/ic_monetization_on';
import { ic_settings } from 'react-icons-kit/md/ic_settings';
import { pieChart } from 'react-icons-kit/icomoon/pieChart';
import { briefcase } from 'react-icons-kit/fa/briefcase';

import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';
import { socialLinkedin } from 'react-icons-kit/ionicons/socialLinkedin';
import { socialInstagram } from 'react-icons-kit/ionicons/socialInstagram';
import { socialYoutube } from 'react-icons-kit/ionicons/socialYoutube';

import PortfolioImage1 from '../../assets/image/ContpaqProcesosContables/portfolio-1.jpg';
import PortfolioImage2 from '../../assets/image/ContpaqProcesosContables/portfolio-2.jpg';
import PortfolioImage3 from '../../assets/image/ContpaqProcesosContables/portfolio-3.jpg';
import PortfolioImage4 from '../../assets/image/ContpaqProcesosContables/portfolio-4.jpg';
import PortfolioImage5 from '../../assets/image/ContpaqProcesosContables/portfolio-5.jpg';
import PortfolioImage6 from '../../assets/image/ContpaqProcesosContables/portfolio-6.jpg';
import PortfolioImage7 from '../../assets/image/ContpaqProcesosContables/portfolio-7.jpg';
import PortfolioImage8 from '../../assets/image/ContpaqProcesosContables/portfolio-8.jpg';
import PortfolioImage9 from '../../assets/image/ContpaqProcesosContables/portfolio-9.jpg';
import PortfolioImage10 from '../../assets/image/ContpaqProcesosContables/portfolio-10.jpg';

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

export const SERVICE_ITEMS = [
  {
    icon: Service1,
    title: 'Financiera',
  },
  {
    icon: Service2,
    title: 'Contable',
  },
  {
    icon: Service3,
    title: 'Comercial',
  },
  {
    icon: Service4,
    title: 'Seguridad TI',
  },
  {
    icon: Service5,
    title: 'Operativa',
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
      'La carga administrativa se acumula al final de mes ¿Y la nómina es una carga tediosa que aveces conduce a errores?',
  },
];

export const SOLUCION_PIC = { image: solucionImage };


export const SOLUTION_ITEMS = [
  {
    id: 1,
    icon: 'flaticon-security',
    title: 'Confianza',
    description:
    'Nuestras soluciones contables y administrativas cuentan con casi un millón de usuarios.',
  },
  {
    id: 2,
    icon: 'flaticon-strategy',
    title: 'Profesionalidad',
    description:
    'Tenemos cobertura nacional y nuestras soluciones son líderes en facturación electrónica.',
  },
  {
    id: 3,
    icon: 'flaticon-money-bag',
    title: 'Economía',
    description:
    'Proveemos software empresarial que respalda los procesos de las empresas con conocimiento y tecnología.',
  },
  {
    id: 4,
    icon: 'flaticon-startup',
    title: 'Innovación',
    description:
    'Invertimos todo nuestro esfuerzo seleccionando las mejores soluciones empresariales para nuestros clientes.',
  },
];

export const INFOCONTPAQ_PIC1 = { image: infoContpaqImage1 };
export const INFOCONTPAQ_PIC2 = { image: infoContpaqImage2 };


export const MONTHLY_PRICING_TABLE = [
  {
    freePlan: true,
    name: 'CONTPAQi Contabilidad',
    description: 'Facilita la captura, registro y contabilización de tu información fiscal y financiera, a través del sistema favorito de los Contadores',
    price: '$3,890.00*',
    priceLabel: 'Pesos Mexicanos + IVA',
    buttonLabel: 'PROBAR 1 MES GRATIS',
    url: '#',
    listItems: [
      {
        content: 'Analiza situación contable/fiscal',
      },
      {
        content: 'Tablero Fiscal información CFDI',
      },
      {
        content: 'Recibo Electrónico de Pagos REP',
      },
      {
        content: 'Administra Documentos Digitales',
      },
      {
        content: 'Exporta la información a Excel®',
      },
    ],
  },
  {
    name: 'CONTPAQi Nóminas',
    description: 'Cumple en tiempo y forma con todas las obligaciones de ley en materia de sueldos y salarios como CFDI 3.3, IMSS, Infonavit e impuestos',
    price: '$3,290.00*',
    priceLabel: 'Pesos Mexicanos + IVA',
    buttonLabel: 'PROBAR 1 MES GRATIS',
    url: '#',
    listItems: [
      {
        content: 'Cumple obligaciones ISR e IMSS',
      },
      {
        content: 'Contabiliza CFDI sueldos/salarios',
      },
      {
        content: 'Asegura pago correcto de impuesto',
      },
      {
        content: 'Evita errores en tu Cálculo Anual',
      },
      {
        content: 'Analiza cuotas del IMSS a pagar',
      },
    ],
  },
  {
    name: 'CONTPAQi Bancos',
    description: 'Cuida y haz crecer tu flujo de efectivo, a través de este sistema que te ayuda a tener visión del dinero que ingresa y egresa de tu empresa',
    price: '$3,390.00*',
    priceLabel: 'Pesos Mexicanos + IVA',
    buttonLabel: 'PROBAR 1 MES GRATIS',
    url: '#',
    listItems: [
      {
        content: 'Administra el flujo de efectivo',
      },
      {
        content: 'Programa/Identifica pagos',
      },
      {
        content: 'Controla ingresos y gastos',
      },
      {
        content: 'Organiza por proyecto, área u obra',
      },
      {
        content: 'Cobranza y conciliación bancaria',
      },
    ],
  },
  {
    freePlan: true,
    name: 'CONTPAQi XML En Línea +',
    description: 'Ayuda a tus clientes a cumplir con sus obligaciones fiscales, recuperando todos los XML de las facturas emitidas y recibidas ',
    price: '$1,490.00*',
    priceLabel: 'Pesos Mexicanos + IVA',
    buttonLabel: 'PROBAR 1 MES GRATIS',
    url: '#',
    listItems: [
      {
        content: 'Recupera XML facturas en el SAT',
      },
      {
        content: 'Descarga hasta 500 XML/búsqueda ',
      },
      {
        content: 'Identifica comprobantes cancelados',
      },
      {
        content: 'Gestiona/procesa XMLs (en ADD)',
      },
      {
        content: 'Valida XML y detecta duplicados',
      },
    ],
  },
];

export const YEARLY_PRICING_TABLE = [
  {
    freePlan: true,
    name: 'CONTPAQi Comercial Start, Pro, Premium',
    description: 'Integra los procesos de compras, ventas, facturación e inventarios con 3 versiones que mejor se adaptan a las necesidades de tu empresa',
    price: '$1,890.00*',
    priceLabel: '*desde / Pesos Mexicanos + IVA',
    buttonLabel: 'PROBAR 1 MES GRATIS',
    url: '#',
    listItems: [
      {
        content: 'Integra procesos de ventas, facturación, compras, inventarios, cobranza y cuentas por pagar',
      },
      {
        content: 'Folios ilimitados sin costo',
      },
      {
        content: 'Cumple con el Recibo Electrónico de Pagos (REP) y el nuevo esquema de Cancelación CFDI',
      },
      {
        content: 'Reportes de inventarios y costos ',
      },
    ],
  },
  {
    name: 'CONTPAQi Factura electrónica',
    description: 'Agiliza tu proceso de facturación y el control de tus cuentas por cobrar para hacer más productivo tu negocio o empresa',
    price: '$1,890.00*',
    priceLabel: '*desde / Pesos Mexicanos + IVA',
    buttonLabel: 'PROBAR 1 MES GRATIS',
    url: '#',
    listItems: [
      {
        content: 'Emite facturas, notas de crédito, recibos de honorarios, arrendamiento entre otros',
      },
      {
        content: 'Folios ilimitados sin costo',
      },
      {
        content: 'Cumple con REP y esquema Cancelación CFDI',
      },
      {
        content: 'Controla las cuentas por cobrar mediante catálogos y reportes de edo. cuenta',
      },
      {
        content: 'Addendas y complementos fiscales',
      },
    ],
  },
  {
    name: 'CONTPAQi Punto de Venta',
    description: 'Cuida tu caja y agiliza las operaciones de tu punto de venta. Se adapta fácilmente a empresas de comercio con venta al detalle',
    price: '$2,990.00*',
    priceLabel: '*desde / Pesos Mexicanos + IVA',
    buttonLabel: 'PROBAR 1 MES GRATIS',
    url: '#',
    listItems: [
      {
        content: 'Folios ilimitados sin costo adicional para emisión/cancelación CFDI',
      },
      {
        content: 'Reporta a detalle cortes de caja',
      },
      {
        content: 'Autorización de pagos con tarjeta de crédito o débito',
      },
      {
        content: 'Inventarios a detalle por productos, unidades de medida, peso, series, lotes, pedimentos, entre otros',
      },
    ],
  },
];

export const FAQ_DATA = [
  {
    expend: true,
    title: '¿Cómo contactar con Atención al Cliente?',
    description:
      'Nuestro equipo de atención al cliente está disponible 5 días de la semana, de 9am a 5pm y ofrecemos 3 formas de contacto. Correo electrónico, chat y Whatsapp. Intentamos responder rápidamente, por lo que la espera no será demasiada para recibir una respuesta nuestra.',
  },
  {
    title: 'Instalación de las aplicaciones, ¿cómo actualizar o instalar los sistema CONTPAQi?',
    description:
      'Con nuestras Pólizas de Servicio, obtienes la manera más fácil y cómoda de asegurar el funcionamiento óptimo de tu software así como de obtener el respaldo de expertos profesionales, con asesoría y soporte para tu sistema con un amplio horario.',
  },
  {
    title: '¿Cuanto tiempo tardará un ejecutivo en resolver dudas de mi sistema CONTPAQi?',
    description:
      'La Polizas Remota, está diseñada, para trabajar de manera cómoda, segura y efectiva a través de un escritorio remoto, donde un ejecutivo le atenderá y brindará el soporte que requiera en el momento.',
  },
  {
    title: '¿Cómo podemos sacar el máximo provecho a sus productos y servicios?',
    description:
      'Contamos con cursos para todos los sistemas CONTPAQi. Dichos cursos pueden ser impartidos en nuestras instalaciones o bien en la oficina del cliente. El tiempo de duración, fechas de impartición, sede y costo se definen de acuerdo a las necesidades cada cliente.',
  },
];

export const FOOTER_WIDGET = [
  {
    title: 'Nosotros',
    menuItems: [
      {
        url: '#',
        text: 'Sobre nosotros',
      },
      {
        url: '#',
        text: 'Aviso de privacidad',
      },
    ],
  },
  {
    title: 'Servicios',
    menuItems: [
      {
        url: '#',
        text: 'Contrato anual de Soporte',
      },
      {
        url: '#',
        text: 'Pólizas Remotas ',
      },
      {
        url: '#',
        text: 'Pólizas Presenciales',
      },
    ],
  },
  {
    title: 'CONTPAQi®',
    menuItems: [
      {
        url: '#',
        text: 'Productos Contables',
      },
      {
        url: '#',
        text: 'Productos Comerciales',
      },
      {
        url: '#',
        text: 'Aplicaciones',
      },
    ],
  },
  {
    title: 'Seguridad TI',
    menuItems: [
      {
        url: '#',
        text: 'Acronis Cloud Backup',
      },
      {
        url: '#',
        text: 'Gigas Cloud Datacenter',
      },
      {
        url: '#',
        text: 'Adaware Conectores',
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
    title: 'Contabilidad',
    image: Screenshot1,
  },
  {
    icon: ic_settings,
    title: 'Comerciales',
    image: Screenshot2,
  },
  {
    icon: pieChart,
    title: 'Cloud Backup',
    image: Screenshot3,
  },
  {
    icon: briefcase,
    title: 'Cobranza',
    image: Screenshot4,
  },
];

export const TESTIMONIALS = [
  {
    title: 'Un servicio de consultoría profesional',
    review:
      'Estoy sorprendido con sus servicios de consultoría. Todo el proceso de identificación de necesidades a nuestra organización se realizo de forma muy profesional. Sus propuestas siempre cumplen nuestros requerimientos, sin mencionar que son muy atentos. ¿Recomiendo ADAWARE? Por supuesto.',
    name: 'Edgar Barrios',
    designation: 'Director Insight Media',
    avatar: `${AuthorOne}`,
  },
  {
    title: 'Relación duradera y servicios profesionales',
    review:
      'El atractivo en ADAWARE es que siempre han entendido nuestras necesidades de procesos y software, y con su ayuda hemos implementado desde hace más de 10 años los procesos necesarios para el crecimiento de nuestra empresa. El servicio es de primera.',
    name: 'Carlos Torreblanca',
    designation: 'Amadeus Servicios',
    avatar: `${AuthorTwo}`,
  },
  {
    title: 'Entienden nuestras necesidades',
    review:
      'ADAWARE es una consultoria con amplio profesionalismo sobre una amplia variedad de productos y servicios. Por la relación que hemos sostenido y la pronta respuesta a eventualidades, sigo renovando sus servicios de consultoría y los recomiendo a cualquier empresa.',
    name: 'Cristina Salvatorre',
    designation: 'Gerente Plaza Lomas',
    avatar: `${AuthorThree}`,
  },
];

export const SOCIAL_PROFILES = [
  {
    icon: socialTwitter,
    url: 'https://twitter.com/adaware_master',
  },
  {
    icon: socialFacebook,
    url: 'https://www.facebook.com/Adawaremaster/',
  },
  {
    icon: socialLinkedin,
    url: 'https://www.linkedin.com/in/ada-ware-master-9a519252/',
  },
  {
    icon: socialInstagram,
    url: 'https://www.instagram.com/adaware/',
  },
  {
    icon: socialYoutube,
    url: 'https://www.youtube.com/channel/UCV9oHeWqpdZYfExparRLmKQ',
  },
];



export const PORTFOLIO_SHOWCASE = [
  {
    title: 'Contabilidad',
    portfolioItem: [
      {
        title: 'CONTPAQi® Contabilidad',
        description:
          "Facilita la captura, registro y contabilización de tu información fiscal y financiera, a través del sistema favorito de los Contadores.",
        image: PortfolioImage1,
        link: '/contpaqi-contabilidad',
        featuredIn: '2019-Julio-03',
        featuredLink: 'http://adaware.com.mx/productos.php',
        view: '11.6.0',
        love: '',
        feedback: '',
        buildWith: [
          {
            content: 'Contable',
          },
          {
            content: 'Fiscal',
          },
          {
            content: 'Financiero',
          },
        ],
      },
    ],
  },
  {
    title: 'Nómina',
    portfolioItem: [
      {
        title: 'CONTPAQi® Nómina',
        description:
          "Cumple en tiempo y forma con todas las obligaciones de ley en materia de sueldos y salarios como CFDI 3.3, IMSS, Infonavit e impuestos.",
        image: PortfolioImage2,
        link: '/contpaqi-nomina',
        featuredIn: '2019-Junio-26',
        featuredLink: 'http://adaware.com.mx/productos.php',
        view: '11.4.1',
        love: '',
        feedback: '',
        buildWith: [
          {
            content: 'CFDI 3.3',
          },
          {
            content: 'ISR e IMSS',
          },
          {
            content: 'Impuestos',
          },
        ],
      },
    ],
  },
  {
    title: 'Bancos',
    portfolioItem: [
      {
        title: 'CONTPAQi® Bancos',
        description:
          "Cuida y haz crecer tu flujo de efectivo, a través de este sistema que te ayuda a tener visión del dinero que ingresa y egresa de tu empresa.",
        image: PortfolioImage3,
        link: '/contpaqi-bancos',
        featuredIn: '2019-Julio-03',
        featuredLink: 'http://adaware.com.mx/productos.php',
        view: '11.6.0',
        love: '',
        feedback: '',
        buildWith: [
          {
            content: 'Cobranza',
          },
          {
            content: 'Conciliación',
          },
          {
            content: 'Ingresos / Gastos',
          },
        ],
      },
    ],
  },
  {
    title: 'XML En Línea+',
    portfolioItem: [
      {
        title: 'CONTPAQi® XML En Línea+',
        description:
          "Ayuda a tus clientes a cumplir con sus obligaciones fiscales, recuperando XML de las facturas conectándote al SAT.",
        image: PortfolioImage4,
        link: '/contpaqi-xml-en-linea',
        featuredIn: '2018-Diciembre-07',
        featuredLink: 'http://adaware.com.mx/productos.php',
        view: '2.0.7',
        love: '',
        feedback: '',
        buildWith: [
          {
            content: 'Cumplimiento',
          },
          {
            content: 'Gestión',
          },
          {
            content: 'Facturación',
          },
        ],
      },
    ],
  },

];



export const PORTFOLIO_COMERCIAL = [
  {
    title: 'Factura Electrónica',
    portfolioItem: [
      {
        title: 'CONTPAQi® Factura Electrónica',
        description:
          "Automatiza y haz mas eficiente tu proceso de facturacion en el sistema que mejor se adapta a tu administración comercial.",
        image: PortfolioImage5,
        link: '/contpaqi-factura-electronica',
        featuredIn: '2019-Mayo-15',
        featuredLink: 'http://adaware.com.mx/productos.php',
        view: '6.3.0',
        love: '',
        feedback: '',
        buildWith: [
          {
            content: 'Folios',
          },
          {
            content: 'Productividad',
          },
          {
            content: 'CFDI',
          },
        ],
      },
    ],
  },
  {
    title: 'CFDI en línea+',
    portfolioItem: [
      {
        title: 'CONTPAQi® CFDI Facturación en línea+',
        description:
          "Facilita la emisión y timbrado de tus CFDI por internet y cumple a tiempo con las disposiciones fiscales.",
        image: PortfolioImage6,
        link: '/contpaqi-cfdi-facturacion-en-linea',
        featuredIn: '',
        featuredLink: 'http://adaware.com.mx/productos.php',
        view: '3.4.4',
        love: '',
        feedback: '',
        buildWith: [
          {
            content: 'CFDI 3.3',
          },
          {
            content: 'Facturas',
          },
          {
            content: 'Flexible',
          },
        ],
      },
    ],
  },
  {
    title: 'Comercial',
    portfolioItem: [
      {
        title: 'CONTPAQi® Comercial',
        description:
          "Integra procesos de compras, ventas, facturación e inventarios con la versión que mejor se adapta a las necesidades de tu empresa.",
        image: PortfolioImage7,
        link: '/contpaqi-comercial',
        featuredIn: '2019-Abril-26',
        featuredLink: 'http://adaware.com.mx/productos.php',
        view: '4.5.1',
        love: '',
        feedback: '',
        buildWith: [
          {
            content: 'Contable',
          },
          {
            content: 'Cobranza',
          },
          {
            content: 'Ventas',
          },
        ],
      },
    ],
  },
  {
    title: 'Producción',
    portfolioItem: [
      {
        title: 'CONTPAQi® Producción',
        description:
          "Controla y administra los recursos/procesos de producción y fabricación de tu empresa e impulsa la productividad de tu negocio.",
        image: PortfolioImage8,
        link: '/contpaqi-produccion',
        featuredIn: '2019-Mayo-23',
        featuredLink: 'http://adaware.com.mx/productos.php',
        view: '3.1.0',
        love: '',
        feedback: '',
        buildWith: [
          {
            content: 'Administra',
          },
          {
            content: 'Inventarios',
          },
          {
            content: 'Rentabilidad',
          },
        ],
      },
    ],
  },
  {
    title: 'Punto de Venta',
    portfolioItem: [
      {
        title: 'CONTPAQi® Punto de Venta',
        description:
          "Cuida tu caja y agiliza operaciones de tu punto de venta, inventarios y facturación. ¡Ideal para empresas de comercio al detalle!",
        image: PortfolioImage9,
        link: '/contpaqi-punto-de-venta',
        featuredIn: '2018-Febrero-28',
        featuredLink: 'http://adaware.com.mx/productos.php',
        view: '4.2.0',
        love: '',
        feedback: '',
        buildWith: [
          {
            content: 'CFDI',
          },
          {
            content: 'Facturación',
          },
          {
            content: 'Inventarios',
          },
        ],
      },
    ],
  },
  {
    title: 'CRM',
    portfolioItem: [
      {
        title: 'CONTPAQi® CRM',
        description:
          "Organiza, controla y gestiona la relación con tus clientes, facilitando la comunicación y seguimiento oportuno.",
        image: PortfolioImage10,
        link: '/contpaqi-crm',
        featuredIn: '',
        featuredLink: 'http://adaware.com.mx/productos.php',
        view: '2019',
        love: '',
        feedback: '',
        buildWith: [
          {
            content: 'Ventas',
          },
          {
            content: 'Reportes',
          },
          {
            content: 'Control',
          },
        ],
      },
    ],
  },

];