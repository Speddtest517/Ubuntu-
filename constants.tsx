
import React from 'react';
import { NavLinkItem, Destination, TravelPackage, BlogPost, Testimonial, TeamMember, VisaInfoCountry, VisaType } from './types';

export const APP_NAME = "Ubuntu Travel";

export const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`text-3xl font-bold ${className}`}>
    <span className="text-orange-500">Ubuntu</span>
    <span className="text-sky-600">Travel</span>
  </div>
);

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Início', path: '/' },
  { label: 'Destinos', path: '/destinations' },
  { label: 'Pacotes', path: '/packages' },
  { label: 'Infos de Visto', path: '/visa-info' },
  { label: 'Agendamentos', path: '/appointments' },
  { label: 'Blog', path: '/blog' },
  { label: 'Sobre Nós', path: '/about' },
  { label: 'Contato', path: '/contact' },
  { label: 'Admin', path: '/admin' },
];

export const POPULAR_DESTINATIONS_IDS = ['portugal', 'france', 'england', 'canada'];

// DESTINATIONS_DATA, PACKAGES_DATA, BLOG_POSTS_DATA are now initialized in App.tsx from initialData.ts

export const TESTIMONIALS_DATA: Testimonial[] = [
  { id: 'test1', customerName: 'Maria S.', text: 'A Ubuntu Travel tornou nossa viagem dos sonhos a Portugal inesquecível! Tudo foi perfeitamente organizado.', location: 'Toronto, Canadá', avatarUrl: 'https://picsum.photos/seed/avatar1/100/100' },
  { id: 'test2', customerName: 'John B.', text: 'O tour pelas Rochosas Canadenses foi de tirar o fôlego. Excelente serviço e guias experientes.', location: 'Londres, Reino Unido', avatarUrl: 'https://picsum.photos/seed/avatar2/100/100' },
  { id: 'test3', customerName: 'Aisha K.', text: 'A assistência com o visto para a França foi tranquila e sem estresse. Recomendo muito a Ubuntu Travel!', location: 'Nova York, EUA', avatarUrl: 'https://picsum.photos/seed/avatar3/100/100' },
];

export const TEAM_MEMBERS_DATA: TeamMember[] = [
  { id: 'team1', name: 'Nia Adebayo', role: 'Fundadora & CEO', imageUrl: 'https://picsum.photos/seed/team1/400/400', bio: 'Apaixonada por conectar culturas através de viagens.' },
  { id: 'team2', name: 'Liam Chen', role: 'Chefe de Operações', imageUrl: 'https://picsum.photos/seed/team2/400/400', bio: 'Garantindo que cada viagem seja perfeita e memorável.' },
  { id: 'team3', name: 'Sofia Garcia', role: 'Especialista em Vistos & Consultoria', imageUrl: 'https://picsum.photos/seed/team3/400/400', bio: 'Guiando você por processos complexos de visto com facilidade.' },
];

export const VISA_INFO_DATA: VisaInfoCountry[] = [
  { 
    country: 'Portugal', 
    generalInfo: 'Portugal faz parte do Espaço Schengen. Os requisitos variam com base na nacionalidade e no propósito da visita.',
    imageUrl: 'https://picsum.photos/seed/portugalvisa/600/400',
    visaTypes: [
      { name: 'Visto de Turista Schengen', description: 'Para turismo ou estadias curtas de até 90 dias.', requirements: ['Passaporte válido', 'Itinerário de viagem', 'Comprovante de acomodação', 'Seguro médico de viagem', 'Comprovante de meios financeiros'] },
      { name: 'Visto de Estudante', description: 'Para indivíduos admitidos em uma instituição de ensino portuguesa.', requirements: ['Carta de aceitação', 'Comprovante de meios financeiros', 'Seguro saúde', 'Certificado de registro criminal'] }
    ]
  },
  { 
    country: 'França', 
    generalInfo: 'A França também é membro do Espaço Schengen. Regras semelhantes de curta estadia se aplicam.',
    imageUrl: 'https://picsum.photos/seed/francevisa/600/400',
    visaTypes: [
      { name: 'Visto de Turista Schengen', description: 'Para turismo, visitas familiares ou viagens de negócios curtas de até 90 dias.', requirements: ['Passaporte válido por pelo menos 3 meses além da estadia pretendida', 'Formulário de solicitação de visto', 'Fotos recentes tipo passaporte', 'Itinerário de viagem', 'Comprovante de acomodação', 'Fundos suficientes'] },
      { name: 'Visto de Longa Duração (Trabalho/Estudo)', description: 'Para estadias superiores a 90 dias, específicas para o propósito.', requirements: ['Depende da categoria: contrato de trabalho, admissão universitária, etc.'] }
    ]
  },
  { 
    country: 'Inglaterra (Reino Unido)', 
    generalInfo: 'O Reino Unido tem suas próprias políticas de visto, separadas do Espaço Schengen.',
    imageUrl: 'https://picsum.photos/seed/ukvisa/600/400',
    visaTypes: [
      { name: 'Visto de Visitante Padrão', description: 'Para turismo, visitas familiares, atividades de negócios curtas, até 6 meses.', requirements: ['Passaporte válido', 'Prova de que pode se sustentar financeiramente', 'Prova de que pretende deixar o Reino Unido no final da sua visita', 'Histórico de viagens'] },
      { name: 'Visto de Trabalhador Qualificado', description: 'Para indivíduos com uma oferta de emprego de um empregador do Reino Unido.', requirements: ['Certificado de Patrocínio', 'Prova de proficiência em inglês', 'Poupança pessoal suficiente'] }
    ]
  },
  { 
    country: 'Canadá', 
    generalInfo: 'O Canadá tem várias opções de visto e permissão, dependendo do propósito e da duração da estadia.',
    imageUrl: 'https://picsum.photos/seed/canadavisa/600/400',
    visaTypes: [
      { name: 'Visto de Residente Temporário (Visto de Visitante)', description: 'Para turismo, visita familiar ou negócios de curta duração.', requirements: ['Passaporte válido', 'Prova de laços com o país de origem', 'Fundos suficientes para a estadia', 'Pode exigir exame médico ou biometria'] },
      { name: 'Permissão de Estudo', description: 'Para estudantes aceitos em uma Instituição de Ensino Designada (DLI).', requirements: ['Carta de aceitação da DLI', 'Prova de suporte financeiro', 'Pode precisar provar a intenção de deixar o Canadá após os estudos'] }
    ]
  },
];

export const CONTACT_INFO = {
  phone: '+244 921 186 701',
  email: 'suporte@ubuntutravel.com.br',
  address: 'Localização Cassequel do Lourenço, Rua nº30 Maianga, junto ao aeroporto doméstico',
  social: {
    instagram: 'https://instagram.com/ubuntutravel',
    tiktok: 'https://tiktok.com/@ubuntutravel',
    facebook: 'https://facebook.com/ubuntutravel'
  }
};

// SVG Icons (sem alteração, pois são componentes visuais)
export const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-3.75h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
  </svg>
);

export const ChatBubbleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3.686-3.091c-.940-.794-2.197-.888-3.276-.238-1.08.65-2.506.955-3.946.694A6.903 6.903 0 015.25 9.177c0-1.136.847-2.1 1.98-2.193.34-.027.68-.052 1.02-.072V3.75A2.25 2.25 0 0112 1.5h3.75c1.243 0 2.25.989 2.25 2.205v.607c0 .74.452 1.406 1.147 1.717zM12 6.75v1.5M12 12.75v1.5m0 3v1.5m3-6v1.5m3-3v1.5m-6-1.5v1.5" />
  </svg>
);

export const GlobeAltIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0112 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686-5.836A8.959 8.959 0 0021 12c0 .778-.099 1.533-.284 2.253M18.75 7.5a8.963 8.963 0 00-6.75-3.319m0 0A11.953 11.953 0 0112 10.5c2.998 0 5.74-1.1 7.843-2.918m-15.686 0A8.959 8.959 0 013 12c0 .778.099 1.533.284 2.253m0 0A11.978 11.978 0 0012 16.5c2.998 0 5.74-1.1 7.843-2.918M3.25 7.5A8.963 8.963 0 019.999 4.18m0 0A11.953 11.953 0 0012 10.5c-2.998 0-5.74-1.1-7.843-2.918" />
  </svg>
);

export const UserCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const CogIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m0 0V4.5m0 15V12m0 0V4.5m0 7.5v7.5M12 12H4.5m7.5 0H19.5" />
  </svg>
);

export const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

export const BriefcaseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073a2.25 2.25 0 01-2.25 2.25h-12a2.25 2.25 0 01-2.25-2.25V14.15M15.75 18.225v-2.25a3.375 3.375 0 00-3.375-3.375h-1.5a3.375 3.375 0 00-3.375 3.375V18.225m10.5-11.25h.008v.008h-.008V7.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 7.5A2.25 2.25 0 016.75 5.25h10.5A2.25 2.25 0 0119.5 7.5v2.25c0 .621-.504 1.125-1.125 1.125H5.625A1.125 1.125 0 014.5 9.75V7.5z" />
  </svg>
);

export const AcademicCapIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53V21a.75.75 0 01-.75.75H4.5A.75.75 0 013.75 21V6.31a.75.75 0 011.28-.53l4.72 4.72M15.75 10.5h-7.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.061 2.057A8.957 8.957 0 0012 3.75c.889 0 1.738-.125 2.539-.354M12 3.75V2.25m0 1.5V6m0-2.25H6.75m5.25 0H17.25m-5.25 0V6m0 0h.01" />
  </svg>
);

export const MagnifyingGlassIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

export const PaperAirplaneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>
);

export const XMarkIcon = (props: React.SVGProps<SVGSVGElement>) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const Bars3Icon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const ExclamationCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
  </svg>
);

export const InformationCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
);

export const UserGroupIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-3.741-1.5a3 3 0 00-3.741 1.5M15 11.642a5.025 5.025 0 01-3 0M15 11.642V6.358a3 3 0 00-3-3V1.5m-9 15.378A9.095 9.095 0 018.25 18.72m-3.741-.479A3 3 0 011 16.741M3 11.642a5.025 5.025 0 003 0M3 11.642V6.358a3 3 0 013-3V1.5m3 10.5A5.025 5.025 0 019 11.642m3 0A5.025 5.025 0 009 11.642m3 0V6.358a3 3 0 00-3-3V1.5m9 3.378A9.095 9.095 0 0015.75 6.358m3.741-.479A3 3 0 0021 4.259M12 11.642a5.025 5.025 0 010-5.284m0 5.284a5.025 5.025 0 000-5.284M12 11.642v3.857M12 6.358V2.5A2.25 2.25 0 009.75 4.75v1.608M14.25 4.75v1.608A2.25 2.25 0 0012 2.5v3.858" />
  </svg>
);

export const PencilSquareIcon = (props: React.SVGProps<SVGSVGElement>) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
);

export const BookOpenIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);


export const UBUNTU_PHILOSOPHY = "Ubuntu é uma filosofia que enfatiza 'Eu sou porque nós somos', focando na comunidade, conexão e cuidado mútuo. Na Ubuntu Travel, incorporamos isso criando experiências de viagem enriquecedoras que conectam pessoas e culturas, promovendo entendimento e humanidade compartilhada.";
export const SPECIAL_OFFERS_DATA = [
  { id: 'offer1', title: 'Escapada Europeia Antecipada', description: 'Reserve sua aventura europeia com 3 meses de antecedência e economize 15%!', imageUrl: 'https://picsum.photos/seed/offer1/600/300' },
  { id: 'offer2', title: 'Diversão em Família no Canadá', description: 'Pacotes familiares especiais para o Canadá com atividades para todas as idades. Crianças menores de 12 anos têm 50% de desconto!', imageUrl: 'https://picsum.photos/seed/offer2/600/300' },
];

export const DUMMY_ITINERARY = [
  'Chegada e check-in no seu hotel selecionado.',
  'Tour guiado pela cidade explorando marcos icônicos e tesouros escondidos.',
  'Experiência de imersão cultural: aula de culinária local ou oficina de artesanato.',
  'Passeio de um dia para uma maravilha natural cênica ou local histórico.',
  'Dia livre para exploração pessoal ou atividades opcionais.',
  'Jantar de despedida com autêntica culinária local.',
  'Partida, repleto de memórias inesquecíveis.'
];
// PlusIcon for "Add New" buttons
export const PlusCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// TrashIcon for "Delete" buttons
export const TrashIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12.56 0c1.153 0 2.243.096 3.242.26m-3.242-.26L6.636 19.673a2.25 2.25 0 002.244 2.077H15.12a2.25 2.25 0 002.244-2.077L19.228 5.79m-14.456 0a48.108 48.108 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>
);
