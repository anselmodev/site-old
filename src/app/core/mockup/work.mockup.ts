import { CoreConfig } from '../config.core';

const workList = [
  {
    id: 'wk_00001',
    label: 'Inthus Website ( SPA )',
    title: 'Site Institucional Desenvolvido com Angular 5+',
    file: `${CoreConfig.assetsPath}/inthus-pixel-1.png`,
    otherClass: ''
  },
  {
    id: 'wk_00002',
    label: 'Aplicativo BR Cirúrgica',
    title: 'Aplicação Desktop Desenvolvido com React e Electron.Js',
    file: `${CoreConfig.assetsPath}/br_cirurgica-pixel-1.png`,
    otherClass: ''
  },
  {
    id: 'wk_00003',
    label: 'E-commerce SimplyShopp',
    title: 'Sistema de E-commerce com React e React-Native',
    file: `${CoreConfig.assetsPath}/simplyshopp-pixel-1.png`,
    otherClass: ''
  },
  {
    id: 'wk_00004',
    label: 'Logotipo Inthus',
    title: 'Logotipo Desenvolvido para Expansão da Marca',
    file: `${CoreConfig.assetsPath}/inthus-logo-pixel.png`,
    otherClass: ''
  },
  {
    id: 'wk_00005',
    label: 'Logotipo Peneirando',
    title: 'Logotipo Revitalizado ( Rebrand )',
    file: `${CoreConfig.assetsPath}/peneirando-logo-pixel.png`,
    otherClass: ''
  },
  {
    id: 'wk_00006',
    label: 'Logotipo Amantes da Web',
    title: 'Logotipo Desenvolvido para Expansão da Marca',
    file: `${CoreConfig.assetsPath}/amantes-logo-pixel.png`,
    otherClass: ''
  }
];

const workDetails = [
  {
    id: 'wk_00001',
    title: 'Site Institucional',
    projectName: 'Inthus Website - Single Page Application ( SPA )',
    customer: 'Inthus Desenvolvimento Humano e Coaching',
    year: '2018',
    link: 'http://inthus.com.br',
    images: [
      {title: 'Site Institucional Inthus', alt: 'Inthus', file: `${CoreConfig.assetsPath}/inthus-gallery-1.png`},
      {title: 'Site Institucional Inthus', alt: 'Inthus', file: `${CoreConfig.assetsPath}/inthus-gallery-2.png`},
      {title: 'Site Institucional Inthus', alt: 'Inthus', file: `${CoreConfig.assetsPath}/inthus-gallery-3.png`}
    ],
    tecnology: [
      {name: 'Angula 5+'},
      {name: 'Back-end com Node.js ( Rest Api )'},
      {name: 'Banco de dados Firebase'},
      {name: 'Cross Browser'},
      {name: 'Responsivo'},
      {name: 'SEO'},
    ]
  },
  {
    id: 'wk_00002',
    title: 'Aplicação Desktop (Windows/Mac)',
    projectName: 'Aplicativo de Emissão de Orçamentos em PDF',
    customer: 'BR Cirúrgica Equipamentos Hospitalares',
    year: '2018',
    link: 'http://brcirurgica.com.br',
    images: [
      {title: 'Aplicativo Desktop BR Cirúrgica', alt: 'BR Cirúrgica', file: `${CoreConfig.assetsPath}/br_cirurgica-gallery-1.png`},
      {title: 'Aplicativo Desktop BR Cirúrgica', alt: 'BR Cirúrgica', file: `${CoreConfig.assetsPath}/br_cirurgica-gallery-2.png`},
      {title: 'Aplicativo Desktop BR Cirúrgica', alt: 'BR Cirúrgica', file: `${CoreConfig.assetsPath}/br_cirurgica-gallery-3.png`},
      {title: 'Aplicativo Desktop BR Cirúrgica', alt: 'BR Cirúrgica', file: `${CoreConfig.assetsPath}/br_cirurgica-gallery-4.png`},
    ],
    tecnology: [
      {name: 'Back-end com Node.js ( Rest Api )'},
      {name: 'Banco de dados Mysql'},
      {name: 'Electron Js'},
      {name: 'React Js'},
      {name: 'Responsivo'},
    ]
  },
  {
    id: 'wk_00003',
    title: 'E-commerce SimplyShopp',
    projectName: 'Sistema de E-commerce com Aplicação Mobile e Desktop',
    customer: 'Projeto Proprietário CodeInPixel',
    year: '2017',
    link: 'http://simplyshopp.club',
    images: [
      {title: 'E-commerce SimplyShopp', alt: 'SimplyShopp', file: `${CoreConfig.assetsPath}/simplyshopp-gallery-1.png`},
      {title: 'E-commerce SimplyShopp', alt: 'SimplyShopp', file: `${CoreConfig.assetsPath}/simplyshopp-gallery-2.png`},
      {title: 'E-commerce SimplyShopp', alt: 'SimplyShopp', file: `${CoreConfig.assetsPath}/simplyshopp-gallery-3.png`},
      {title: 'E-commerce SimplyShopp', alt: 'SimplyShopp', file: `${CoreConfig.assetsPath}/simplyshopp_gallery-4.png`},
      {title: 'E-commerce SimplyShopp', alt: 'SimplyShopp', file: `${CoreConfig.assetsPath}/simplyshopp_gallery-5.png`},
    ],
    tecnology: [
      {name: 'Back-end com Node.js ( Rest Api )'},
      {name: 'Banco de dados Mysql e MongoDb'},
      {name: 'Electron Js'},
      {name: 'React Js'},
      {name: 'React Native'},
      {name: 'Responsivo'},
    ]
  },
  {
    id: 'wk_00004',
    title: 'Logotipo / Logo Marca',
    projectName: 'Logotipo Desenvolvido para Expansão e Divulgação da Marca',
    customer: 'Inthus Desenvolvimento Humano e Coaching',
    year: '2018',
    link: 'http://inthus.com.br',
    images: [
      {title: 'Logotipo Inthus', alt: 'Inthus', file: `${CoreConfig.assetsPath}/inthus-logo-gallery.png`},
      {title: 'Logotipo Inthus', alt: 'Inthus', file: `${CoreConfig.assetsPath}/inthus-logo-gallery-2.png`},
      {title: 'Logotipo Inthus', alt: 'Inthus', file: `${CoreConfig.assetsPath}/inthus-logo-gallery-3.png`},
    ],
    tecnology: [
      {name: 'Illustrator'},
      {name: 'Photoshop'},
    ]
  },
  {
    id: 'wk_00005',
    title: 'Logotipo / Logo Marca ( Rebrand )',
    projectName: 'Revitalização do Logotipo Peneirando com Propriedades 3D',
    customer: 'Peneirando Serviços de Tecnologia',
    year: '2017',
    link: 'http://peneirando.com.br',
    images: [
      {title: 'Logotipo Peneirando ( Rebrand )', alt: 'Peneirando', file: `${CoreConfig.assetsPath}/peneirando-logo-gallery.png`},
      {title: 'Logotipo Peneirando ( Rebrand )', alt: 'Peneirando', file: `${CoreConfig.assetsPath}/peneirando-logo-gallery-2.png`},
      {title: 'Logotipo Peneirando ( Rebrand )', alt: 'Peneirando', file: `${CoreConfig.assetsPath}/peneirando-logo-gallery-3.png`},
    ],
    tecnology: [
      {name: '3D Studio Max'},
      {name: 'Illustrator'},
      {name: 'Photoshop'},
    ]
  },
  {
    id: 'wk_00006',
    title: 'Logotipo / Logo Marca',
    projectName: 'Logotipo Desenvolvido para Expansão e Divulgação da Marca',
    customer: 'Amantes da Web',
    year: '2017',
    link: 'http://amantesdaweb.com',
    images: [
      {title: 'Logotipo Amantes da Web', alt: 'Amantes da Web', file: `${CoreConfig.assetsPath}/amantes-logo-gallery.png`},
      {title: 'Logotipo Amantes da Web', alt: 'Amantes da Web', file: `${CoreConfig.assetsPath}/amantes-logo-gallery-2.png`},
    ],
    tecnology: [
      {name: 'Illustrator'},
      {name: 'Photoshop'},
    ]
  }
];

export { workList, workDetails };
