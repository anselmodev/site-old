import { CoreConfig } from '../config.core';

const works = {
  title: 'Projeto Inthus Coaching',
  description: `Mais um projeto desenvolvido com carinho! <br> Desenvolvido com <b>ANGULAR 5 (SPA)</b> e
  <b>NODE REST API</b> para captura de <b>Leads</b>, <b>Envio de E-mails Automáticos Inteligentes</b>
  e um gerador de <b>Lista Automática de Contatos</b>, além de ser responsivo. <br>
  Também foi desenvolvido a <b>Logomarca</b> exclusiva para a empresa e todo o processo artístico de papelaria
  <b>(Cartões de Visitas, etc)</b>. Tudo isso
trabalhando em conjunto com um processo de marketing digital direcionado.`,
  images: [
    {title: 'Inthus Coaching', alt: 'Inthus', file: `${CoreConfig.assetsPath}/inthus-logo-pixel.png`},
    {title: 'Inthus Coaching Logotipo', alt: 'Inthus Logo', file: `${CoreConfig.assetsPath}/inthus-pixel-1.png`}
  ],
  link: [
    {label: '+ Veja esse e outros projetos', title: 'Veja mais Informações de Projetos!', url: 'trabalhos-projetos'}
  ],
  trigger: ''
};

const news = {
  title: '',
  description: '',
  images: [
    {title: '', alt: '', file: ''}
  ],
  externalUrl: '',
  routerLink: '',
  trigger: ''
};

export { works };
