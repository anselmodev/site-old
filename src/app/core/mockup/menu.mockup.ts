const iconMenuHeader = 'fa fa-stop cip--rotate-45 cip--fsz-10 cip--opac-6 ';
const iconMenuResp = 'fa fa-stop cip--rotate-45 cip--fsz-13 cip--opac-6 cip--pos-relative';

const menuItensHeader = [
  {
    color: '_header_btn_menu_blue',
    title: 'Fale Comigo e Solicite um Orçamento',
    pageName: 'Fale Comigo',
    label: 'Contato',
    link: 'fale-comigo',
    otherClass: '',
    icon: iconMenuHeader
  },
  {
    color: '_header_btn_menu_blue',
    title: 'Veja meus trabalhos realizados e conceitos de projetos.',
    pageName: 'Trabalhos e Projetos',
    label: 'Trabalhos',
    link: 'trabalhos-projetos',
    otherClass: '',
    icon: iconMenuHeader
  },
  {
    color: '_header_btn_menu_blue',
    title: 'As Tecnologias com qual eu trabalho e tipos de serviços.',
    pageName: 'Serviços e Tecnologias',
    label: 'Serviços',
    link: 'servicos-tecnologias',
    otherClass: '',
    icon: iconMenuHeader
  },
  {
    color: '_header_btn_menu_blue',
    title: 'Sobre Mim / Meu Perfil',
    pageName: 'Sobre Mim',
    label: 'Sobre',
    link: 'sobre-mim',
    otherClass: '',
    icon: iconMenuHeader
  },
  {
    color: '_header_btn_menu_orange',
    title: 'Área Restrita ao Cliente',
    link: 'login-cliente',
    label: 'Área do Cliente',
    otherClass: 'cip--float-left cip--tx-upercase',
    icon: 'fa fa-user-circle cip--fsz-20',
    responsiveClass: '_header_label_customer d-sm-none d-lg-inline'
  },
];

const menuItensResponsive = [
  {
    title: 'Quem sou eu? Veja minha trajetória...',
    pageName: 'Sobre Mim',
    label: 'Sobre',
    link: 'sobre-mim',
    otherClass: '',
    icon: iconMenuResp
  },
  {
    title: 'As Tecnologias com qual eu trabalho e tipos de serviços.',
    pageName: 'Serviços e Tecnologias',
    label: 'Serviços',
    link: 'servicos-tecnologias',
    otherClass: '',
    icon: iconMenuResp
  },
  {
    title: 'Veja meus trabalhos realizados e conceitos de projetos.',
    pageName: 'Trabalhos e Projetos',
    label: 'Trabalhos',
    link: 'trabalhos-projetos',
    otherClass: '',
    icon: iconMenuResp
  },
  {
    title: 'Que tal um orçamento, tirar dúvidas ou uma consultoria?',
    pageName: 'Fale Comigo',
    label: 'Contato',
    link: 'fale-comigo',
    otherClass: '',
    icon: iconMenuResp
  },
  {
    title: 'Área Restrita ao Cliente',
    link: 'login-cliente',
    pageName: 'Área Restria do Cliente',
    label: 'Área do Cliente',
    otherClass: 'cip_responsive_links_item_customer',
    icon: 'fa fa-user-circle cip--fsz-18 cip--opac-6 cip--pos-relative'
  }
];

export { menuItensHeader, menuItensResponsive };
