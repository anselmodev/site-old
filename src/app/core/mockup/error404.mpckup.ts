import { CoreConfig } from '../config.core';

const menuSections = [
  {
    label: 'Um Pouco Mais Sobre Mim',
    title: 'Veja mais detalhes sobre minha pessoa!',
    file: `${CoreConfig.assetsPath}/sell1.png`,
    otherClass: ' cip--opac-5',
    link: 'sobre-mim'
  },
  {
    label: 'Últimos Trabalhos',
    title: 'Que tal dar uma olhada nos meus trabalhos?',
    file: `${CoreConfig.assetsPath}/works.jpg`,
    otherClass: ' cip--opac-5',
    link: 'trabalhos-projetos'
  },
  {
    label: 'Serviços e Tecnologias',
    title: 'Desenvolvendo com as melhores ferramentas!',
    file: `${CoreConfig.assetsPath}/bg-services.jpg`,
    otherClass: ' cip--opac-5',
    link: 'servicos-tecnologias'
  },
  {
    label: 'Dúvidas? Fale Comigo',
    title: 'Exponha suas dúvidas e retornarei em breve!',
    file: `${CoreConfig.assetsPath}/bg-contact.jpg`,
    otherClass: ' cip--opac-5',
    link: 'fale-comigo'
  }
];

export { menuSections };
