import { Mobile, Web } from "../Model/@Types";
const JS = "JS";
const CS = "C#";
export const LengthDiv = 3;

export const projects: (Web | Mobile)[] = [
  {
    Name: "Espaço Terapêutico Cleide Mendes",
    Describe:
        "Sistema web desenvolvido para uma clínica real que permite o gerenciamento completo de consultas e pacientes. Pacientes podem agendar, remarcar ou cancelar consultas, enquanto funcionários gerenciam seus pacientes e atendimentos. O sistema também possui um painel administrativo com controle financeiro, cadastro de despesas, gerenciamento de funcionários e salários. O administrador pode visualizar dados da clínica por meio de gráficos dinâmicos com filtros aplicáveis. O projeto inclui autenticação com JWT e verificação em dois fatores (2FA) via código TOTP enviado por email. Redis é utilizado para gerenciar sessões temporárias de autenticação, validação de 2FA e controle de limite de requisições.",
    Cover: "ETCM.png",
    Language: JS,
    Features: [
      "Autenticação com JWT e 2FA",
      "Controle de Acesso por Nível (Paciente, Funcionário, Admin)",
      "Sistema de Agendamento de Consultas",
      "Remarcação e Cancelamento de Consultas",
      "Geração Automática de Agenda baseada em Horários de Trabalho",
      "Painel Administrativo com Gráficos e Filtros",
      "Gerenciamento de Funcionários, Salários e Despesas",
      "Sistema de Mensagens Internas"
    ],
    Type: "Web",
    Photo: "ETCM.jpeg",
    Repository: undefined,
    Year: "2025",
    Technology: [
      "html",
      "css",
      "js",
      "ts",
      "nodejs",
      "react",
      "nextjs",
      "tailwindcss",
      "postgres",
      "redis",
      "git",
      "docker",
      "jest",
      "gcp",
      "figma"
    ],
    API: true,
    Team: 5,
    URL: undefined
  },
  {
    Name: "Authenticator JWT",
    Describe:
        "API de autenticação desenvolvida para gerenciamento de usuários com autenticação baseada em JWT e verificação em dois fatores (2FA). O sistema permite cadastro e gerenciamento de usuários e utiliza códigos TOTP compatíveis com aplicativos autenticadores como Google Authenticator. A aplicação gera automaticamente QR Codes para configuração do 2FA e utiliza Redis para controle de sessões e validações temporárias.",
    Cover: "AUJWT.png",
    Language: CS,
    Features: [
      "Autenticação com JWT",
      "Autenticação em Dois Fatores (2FA)",
      "Compatível com Apps Authenticator",
      "Geração de QR Code para Configuração do 2FA",
      "CRUD de Usuários"
    ],
    Type: "Web",
    Photo: "AUJWT.png",
    Repository: "https://github.com/ALAN-MS-SU/Authenticator-JWT",
    Year: "2026",
    Technology: ["cs","dotnet","postgres","redis","git","rider"],
    API: true,
    Team: false,
    URL: undefined,
  },
  {
    Name: "Calendário Etec",
    Type: "Mobile",
    Photo: "EtecCalendar.png",
    Describe:
        "Projeto desenvolvido durante meus estudos na Etec Paulistano. O aplicativo é um calendário simples criado para auxiliar professores no gerenciamento de datas e eventos relacionados à escola. A aplicação foi construída utilizando .NET 8 e .NET MAUI, com XAML para a interface gráfica e C# para a lógica do código. O aplicativo também possui armazenamento local para salvar os dados diretamente no dispositivo.",
    Cover: "Etec-Calendar.png",
    Language: CS,
    Features: [
      "Criar Turmas",
      "Gerenciar Datas",
      "Operações CRUD",
      "Armazenamento Local"
    ],
    Repository: "https://github.com/ALAN-MS-SU/Etec-Calendar",
    Download:
        "https://github.com/ALAN-MS-SU/Etec-Calendar/releases/download/APK/Etec-Calendario.apk",
    Year: "2024",
    API: false,
    Team: false,
    Technology: ["cs","dotnet","git","android","apple","visualstudio"],
  },
  {
    Name: "Controle usuários",
    Describe:
        "Sistema de gerenciamento de usuários com autenticação e controle de acesso baseado em permissões. A aplicação utiliza um backend em Node.js com autenticação via JWT e banco de dados PostgreSQL para gerenciar usuários de forma segura. O sistema possui dois níveis de acesso (usuário e administrador), permitindo que usuários gerenciem suas próprias informações enquanto administradores possuem controle completo sobre o gerenciamento de usuários. Administradores podem visualizar, editar e remover usuários do sistema, com restrições que impedem a remoção de outros administradores.",
    Cover: "User-Control.png",
    Language: JS,
    Features: [
      "Autenticação e autorização com JWT",
      "Controle de acesso baseado em papéis (admin / usuário)",
      "Operações CRUD de usuários",
      "Hash seguro de senhas"
    ],
    Type: "Web",
    Photo: "UserControl.png",
    Repository: "https://github.com/ALAN-MS-SU/User-Control/tree/main",
    Year: "2024",
    Technology: [
      "html",
      "css",
      "js",
      "ts",
      "nodejs",
      "react",
      "nextjs",
      "tailwind",
      "postgres",
      "git",
      "docker",
      "jest"
    ],
    API: true,
    Team: false,
    URL: undefined
  },
  {
    Name: "Movie Vote",
    Type: "Web",
    Photo:"Urna.png",
    Describe:
        "Sistema de votação para ranquear filmes inspirado em jogos. A aplicação conta e muda a visualização sempre que um novo voto é registrado para qualquer filme e inclui um gráfico que exibe visualmente a quantidade de votos de cada opção.",
    Cover: "Urna.png",
    Language: JS,
    Features: [
      "Voto de Usuário",
      "Um Voto por Usuário",
      "Gráfico de Resultados",
      "Armazenamento em Memória"
    ],
    Repository: "https://github.com/ALAN-MS-SU/Urna",
    URL: "https://urna.vercel.app",
    Year: "2024",
    Technology: ["html","css","js","ts","nodejs","react","nextjs","tailwindcss","git","docker","jest"],
    Team: false,
    API: true,
  },
  {
    Name: "SN Hack Hub",
    Describe:
        "Projeto desenvolvido há algum tempo como uma plataforma para compartilhamento de hack ROMs de Super Nintendo, inspirado no site SMW Central. Na aplicação é possível fazer upload e download de hack ROMs de diversos jogos de Super Nintendo. O site foi desenvolvido utilizando React no front-end, Express.js no back-end e inicialmente MySQL como banco de dados, que posteriormente foi substituído por PostgreSQL para melhorar a performance.",
    Cover: "HackROM.png",
    Language: JS,
    Features: [
      "Upload e Download de Hack ROMs de Super Nintendo",
      "Criação de Usuários com Foto de Perfil",
      "Operações CRUD",
      "Sistema de Busca de Hacks",
      "Design Responsivo",
      "Validação de Tipo de Arquivo"
    ],
    Type: "Web",
    Photo: "HackRoms.jpeg",
    Repository: "https://github.com/ALAN-MS-SU/hack-roms",
    Year: "2024",
    Technology: ["html","css","js","nodejs","react","expressjs","mysql","git"],
    API: true,
    Team: false,
    URL: undefined,
  },
  {
    Name: "ToDo List",
    Describe:
        "Aplicativo mobile simples para gerenciamento de tarefas. O usuário pode adicionar e remover tarefas por meio de uma interface limpa e responsiva. O aplicativo foi desenvolvido utilizando React Native com Expo e utiliza armazenamento local para salvar as tarefas diretamente no dispositivo.",
    Cover: "ToDoList.png",
    Language: JS,
    Features: [
      "Adicionar Novas Tarefas",
      "Remover Tarefas",
      "Interface Simples e Responsiva",
      "Armazenamento Local"
    ],
    Type: "Mobile",
    Photo: "ToDoList.png",
    Repository: "https://github.com/ALAN-MS-SU/ToDoList",
    Year: "2025",
    Technology: ["css","js","ts","nodejs","reactnative","tailwindcss","git","expo","android","apple"],
    API: false,
    Team: false,
    Download: "https://github.com/ALAN-MS-SU/ToDoList/releases/download/Apk/application-6590ae34-278d-463c-af30-68af453b4679.apk",
    URL: undefined,
  },
  {
    Name: "SU-API",
    Describe:
        "API pública e open source desenvolvida para fornecer dados sobre personagens, gems, fusões, armas e outros elementos da série Steven Universe, do Cartoon Network. A API permite consultar diferentes categorias por meio de endpoints REST e também realizar buscas por nome. O projeto foi desenvolvido com NestJS, utilizando Prisma como ORM e PostgreSQL como banco de dados.",
    Cover: "SU-API.png",
    Language: JS,
    Features: [
      "Endpoints Públicos REST",
      "Busca por Nome",
      "Categorias de Personagens, Fusões, Armas e Tipos",
      "Migrações de Banco com Prisma"
    ],
    Type: "Web",
    Photo: "SU-API.png",
    Repository: "https://github.com/ALAN-MS-SU/su-api",
    Year: "2025",
    Technology: ["js","ts","nodejs","nestjs","postgres","prisma"],
    API: true,
    Team: false,
    URL: undefined,
  },
];

export const IconUrl = "https://go-skill-icons.vercel.app/api/icons?i="
export const Types = ["Mobile", "Web"];
export const Languages = [JS, CS];
