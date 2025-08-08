import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Star, ArrowRight, CheckCircle, Settings, Shield, Clock, Award, ExternalLink, Eye, Sun, Palette, CloudRain, Users, CreditCard, Zap, Heart, Quote, MessageCircle, Instagram, Play, Scissors, Home, Building2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // CONTROLE DE SCROLL PARA EFEITOS VISUAIS
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // FUNÇÃO PARA LIDAR COM O ENVIO DO FORMULÁRIO DE CONTATO
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const nome = formData.get('nome');
    const telefone = formData.get('telefone');

    // Criar mensagem para WhatsApp
    const whatsappMessage = `Olá! Vim através do site da Control Persianas e gostaria de receber conteúdo exclusivo e novidades!
    
*Nome:* ${nome}
*Telefone:* ${telefone}`;

    // Número do WhatsApp (Brasília como padrão)
    const whatsappNumber = '5561981276447';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  // FUNÇÃO PARA WHATSAPP DIRETO (BOTÃO FLUTUANTE)
  const handleWhatsAppDirect = () => {
    const message = "📱 Olá! Vim através do site da Control Persianas e gostaria de mais informações sobre os serviços.";
    const whatsappNumber = '5561981276447';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // FUNÇÃO PARA INSTAGRAM (DEIXAR ESPAÇO PARA ADICIONAR @ DEPOIS)
  const handleInstagram = () => {
    const instagramHandle = "controlpersianas";
    const instagramUrl = `https://instagram.com/${instagramHandle}`;
    window.open(instagramUrl, '_blank');
  };

  // DADOS DOS PROBLEMAS QUE A EMPRESA RESOLVE COM SOLUÇÕES VISUAIS
  const problems = [
    {
      title: "Sua Casa Sem Privacidade?",
      description: "Nossas soluções garantem total privacidade sem sacrificar a entrada de luz natural.",
      icon: Eye,
      color: "from-purple-600 to-purple-700",
      // Imagem de exemplo para privacidade
      solutionImage: "/assets/images/WhatsApp Image 2025-06-24 at 15.44.23.jpeg",
      solutionText: "Cortinas e persianas para total privacidade"
    },
    {
      title: "Calor Excessivo Incomodando?",
      description: "Diga adeus ao desconforto térmico! Proteja móveis e crie ambientes frescos com nossa tecnologia de controle solar avançada.",
      icon: Sun,
      color: "from-orange-600 to-orange-700",
      // Imagem de exemplo para controle térmico
      solutionImage: "/assets/images/WhatsApp Image 2025-06-24 at 15.41.04.jpeg",
      solutionText: "Toldos e telas solares para controle térmico"
    },
    {
      title: "Ambiente Sem Charme?",
      description: "Desperte o potencial do seu espaço! Nossa coleção exclusiva de tecidos e designs transforma qualquer ambiente em um lugar único.",
      icon: Palette,
      color: "from-pink-600 to-pink-700",
      // Imagem de exemplo para design de ambientes
      solutionImage: "/assets/images/WhatsApp Image 2025-06-24 at 15.41.22.jpeg",
      solutionText: "Designs exclusivos para ambientes únicos"
    },
    {
      title: "Área Externa Inutilizada?",
      description: "Aproveite cada metro do seu espaço! Nossos toldos resistentes permitem que você desfrute da área externa em qualquer condição climática.",
      icon: CloudRain,
      color: "from-blue-600 to-blue-700",
      // Imagem de exemplo para área externa
      solutionImage: "/assets/images/externa.jpg",
      solutionText: "Toldos robustos para qualquer clima"
    }
  ];

  // DADOS DOS SERVIÇOS ORGANIZADOS POR CATEGORIA
  const services = [
    {
      category: "Cortinas",
      title: "Cortinas Motorizadas",
      description: "Controle inteligente com integração à casa inteligente (smart home)",
      icon: Settings,
      image: "/assets/images/2.jpg",
      
      video: null,
      hasVideo: false
    },
    {
      category: "Persianas",
      title: "Persianas Motorizadas",
      description: "Sistemas modernos de automação para máximo conforto e praticidade",
      icon: Shield,
      image: "/assets/images/1.jpg",
      // PARA ADICIONAR VÍDEO: substitua por /assets/videos/persiana-motorizada-funcionando.mp4
      video: null,
      hasVideo: true
    },
    {
      category: "Toldos",
      title: "Toldos Resistentes",
      description: "Proteção completa para áreas externas com design moderno",
      icon: CloudRain,
      image: "/assets/images/WhatsApp Image 2025-06-24 at 15.44.23.jpeg",
      // PARA ADICIONAR VÍDEO: substitua por /assets/videos/toldo-funcionando.mp4
      video: null,
      hasVideo: true
    },
    {
      category: "Instalação",
      title: "Equipe Especializada",
      description: "Profissionais qualificados com garantia total de qualidade",
      icon: CheckCircle,
      image: "/assets/images/3.jpg",
      video: null,
      hasVideo: false
    }
  ];

  // DADOS DOS MATERIAIS PARA TOLDOS
  const materials = [
    {
      title: "Lona Vinil PVC Tradicional",
      description: "Indicada para proteção contra sol e chuva. Possui o aspecto tradicional de lona e tende a esquentar. É uma escolha robusta para quem prioriza durabilidade e proteção direta.",
      icon: Shield,
      color: "from-gray-600 to-gray-700"
    },
    {
      title: "Tela Solar SCREEN",
      description: "Tecido importado, especialmente desenvolvido para proteção solar sem escurecer o ambiente. Possui microfuros que permitem visibilidade para o exterior.",
      icon: Sun,
      color: "from-yellow-600 to-orange-600"
    },
    {
      title: "Tecido Acrílico",
      description: "Bastante utilizado em capotas marítimas, é impermeável e proporciona proteção contra sol e chuva. Destaca-se pela estética diferenciada e visual elegante.",
      icon: Award,
      color: "from-blue-600 to-cyan-600"
    }
  ];


  // DADOS DOS PROJETOS (APENAS UMA IMAGEM)
const projects = [
  {
    title: "Transformação Residencial Completa",
    location: "Brasília, DF",
    category: "Residencial",
    image: "/assets/images/cortina.jpg"
  },
  {
    title: "Revitalização de Loja",
    location: "Brasília, DF",
    category: "Comercial",
    image: "/assets/images/loja.jpg"
  },
  {
    title: "Área Externa Revitalizada",
    location: "Goiânia, GO",
    category: "Residencial",
    image: "/assets/images/toldo.jpg"
  }
];



  // DADOS DOS DIFERENCIAIS DA EMPRESA
  const whyChoose = [
    {
      icon: Award,
      title: "Qualidade Superior",
      description: "Materiais de primeira linha e tecnologia de ponta garantem beleza, longevidade e resistência."
    },
    {
      icon: Palette,
      title: "Design Exclusivo",
      description: "Produtos cuidadosamente selecionados para complementar e elevar a estética de qualquer ambiente."
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Consultoria especializada desde o primeiro contato até a instalação, garantindo a escolha perfeita."
    },
    {
      icon: MapPin,
      title: "Conhecimento Local",
      description: "Atuação focada em Brasília, conhecendo as particularidades dos melhores endereços da capital."
    },
    {
      icon: Zap,
      title: "Tecnologia e Inovação",
      description: "Sempre atualizados com as últimas tendências, incluindo motorização e automação residencial."
    }
  ];

  // DADOS DOS DEPOIMENTOS DE CLIENTES
  const testimonials = [
    {
      name: "Maria Silva",
      location: "Brasília, DF",
      rating: 4,
      comment: "Excelente trabalho! As persianas motorizadas transformaram completamente nossa casa. Atendimento impecável e instalação perfeita.",
      project: "Residencial"
    },
    {
      name: "João Santos",
      location: "Goiânia, GO",
      rating: 5,
      comment: "Profissionais muito competentes. O toldo ficou perfeito e agora posso aproveitar minha área externa em qualquer clima. Recomendo!",
      project: "Residencial"
    },
    {
      name: "Ana Costa",
      location: "Brasília, DF",
      rating: 4,
      comment: "Cortinas motorizadas de altíssima qualidade. O sistema smart home integrado superou nossas expectativas. Empresa séria e confiável.",
      project: "Residencial"
    },
    {
      name: "Carlos Oliveira",
      location: "Goiânia, GO",
      rating: 5,
      comment: "Fizeram a automação completa do nosso escritório. Resultado incrível! Funcionários bem treinados e prazo cumprido à risca.",
      project: "Comercial"
    },
    {
      name: "Patricia Lima",
      location: "Brasília, DF",
      rating: 4,
      comment: "Superou todas as expectativas! O projeto ficou lindo e funcional. Equipe muito profissional e pontual. Já indiquei para vários amigos.",
      project: "Residencial"
    },
    {
      name: "Roberto Mendes",
      location: "Goiânia, GO",
      rating: 4,
      comment: "Excelente custo-benefício! As cortinas ficaram perfeitas e o atendimento foi excepcional do início ao fim. Muito satisfeito!",
      project: "Comercial"
    }
  ];

  // DADOS DAS UNIDADES DA EMPRESA
  const units = [
    {
      city: "Brasília",
      address: "SMPW QD. 26 CJ. 07 LT. 11",
      cep: "71741-600",
      phone: "+55 (61) 98127-6447",
      email: "contato@controlpersianas.com.br",
      mapUrl: "https://maps.google.com/maps?q=SMPW+QD.+26+CJ.+07+LT.+11,+Brasília,+DF,+71741-600",
      responsible: "Daniel Finotti Borges"
    },
    {
      city: "Goiânia",
      address: "Rua 89B número 102 - Setor Sul",
      cep: "74093-180",
      phone: "+55 (62) 8556-5975",
      email: "contato@controlpersianas.com.br",
      mapUrl: "https://maps.google.com/maps?q=Rua+89B+número+102,+Setor+Sul,+Goiânia,+GO,+74093-180",
      responsible: null
    }
  ];

  // DADOS DOS NÚMEROS/ESTATÍSTICAS DA EMPRESA
  const stats = [
    {
      number: "10",
      label: "Anos de Experiência",
      icon: Award
    },
    {
      number: "500+",
      label: "Projetos Realizados",
      icon: CheckCircle
    },
    {
      number: "2",
      label: "Unidades",
      icon: MapPin
    },
    {
      number: "90%",
      label: "Satisfação dos Clientes",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* BOTÕES FLUTUANTES - WHATSAPP E INSTAGRAM */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-4">
        {/* BOTÃO WHATSAPP FLUTUANTE */}

      </div>

      {/* NAVEGAÇÃO PRINCIPAL */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* LOGO DA EMPRESA */}
            <div className="flex items-center space-x-3">
              <img 
                src="/WhatsApp Image 2025-06-24 at 12.19.10.jpeg" 
                alt="Control Persianas Logo" 
                className="h-12 w-auto"
                style={{ 
                  filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))',
                  background: 'transparent'
                }}
                onError={() => {
                  // Fallback em caso de erro ao carregar a imagem
                  console.error('Erro ao carregar a imagem do logo');
                }}
              />
            </div>

            {/* MENU DESKTOP */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                scrollY > 50 ? 'text-gray-900' : 'text-white'
              }`}>
                Início
              </a>
              <a href="#problems" className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                scrollY > 50 ? 'text-gray-900' : 'text-white'
              }`}>
                Soluções
              </a>
              <a href="#services" className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                scrollY > 50 ? 'text-gray-900' : 'text-white'
              }`}>
                Serviços
              </a>
              <a href="#trabalho" className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                scrollY > 50 ? 'text-gray-900' : 'text-white'
              }`}>
                Nosso Trabalho
              </a>
              <a href="#materials" className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                scrollY > 50 ? 'text-gray-900' : 'text-white'
              }`}>
                Materiais
              </a>
              <a href="#projects" className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                scrollY > 50 ? 'text-gray-900' : 'text-white'
              }`}>
                Projetos
              </a>
              <a href="#units" className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                scrollY > 50 ? 'text-gray-900' : 'text-white'
              }`}>
                Unidades
              </a>
              <a href="https://wa.me/c/556181276447" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full font-medium hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300">
                Contato
              </a>
              <a 
                href="https://instagram.com/controlpersianas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300"
                title="Siga-nos no Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* BOTÃO MENU MOBILE */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                scrollY > 50 ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* MENU MOBILE */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200">
              <div className="px-4 py-6 space-y-4">
                <a href="#home" className="block text-gray-900 font-medium hover:text-blue-600 transition-colors">
                  Início
                </a>
                <a href="#problems" className="block text-gray-900 font-medium hover:text-blue-600 transition-colors">
                  Soluções
                </a>
                <a href="#services" className="block text-gray-900 font-medium hover:text-blue-600 transition-colors">
                  Serviços
                </a>
                <a href="#trabalho" className="block text-gray-900 font-medium hover:text-blue-600 transition-colors">
                  Nosso Trabalho
                </a>
                <a href="#materials" className="block text-gray-900 font-medium hover:text-blue-600 transition-colors">
                  Materiais
                </a>
                <a href="#projects" className="block text-gray-900 font-medium hover:text-blue-600 transition-colors">
                  Projetos
                </a>
                <a href="#units" className="block text-gray-900 font-medium hover:text-blue-600 transition-colors">
                  Unidades
                </a>
                <a href="#contact" className="block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-medium text-center">
                  Contato
                </a>
                <a 
                  href="https://instagram.com/controlpersianas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium text-center"
                >
                  Siga no Instagram
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* SEÇÃO HERO - PRIMEIRA IMPRESSÃO */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* IMAGEM DE FUNDO DO HERO */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            // PARA TROCAR A IMAGEM DO HERO: substitua por /assets/images/hero-background.jpg
            backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        {/* OVERLAY ESCURO SOBRE A IMAGEM */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/60" />
        
        {/* CONTEÚDO PRINCIPAL DO HERO */}
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Cortinas, Persianas e Toldos
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"> Automatizados</span>
            <br />
            <span className="text-4xl md:text-5xl">em Brasília</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Conforto, elegância e tecnologia para transformar seu lar.
            Há mais de 10 anos levando sofisticação e praticidade para ambientes residenciais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://wa.me/c/556181276447" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <span>📲 Fale agora com um especialista no WhatsApp!</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#problems" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
              🔽 Veja nossos trabalhos abaixo
            </a>
          </div>
        </div>

        {/* INDICADOR DE SCROLL */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* SEÇÃO DE PROBLEMAS COM SOLUÇÕES VISUAIS */}
      <section id="problems" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Veja Como Podemos <span className="text-red-600">Ajudar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra como podemos resolver os principais problemas do seu ambiente e elevar sua qualidade de vida
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {problems.map((problem, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* CONTEÚDO DO PROBLEMA */}
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${problem.color} rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300`}>
                        <problem.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{problem.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{problem.description}</p>
                    <a 
                      href="https://wa.me/5561981276447?text=Olá! Vim através do site da Control Persianas e gostaria de mais informações sobre os serviços."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>📱 Falar no WhatsApp</span>
                    </a>
                  </div>
                  
                  {/* IMAGEM DA SOLUÇÃO */}
                  <div className="h-64 md:h-full">
                    <img 
                      src={problem.solutionImage} 
                      alt={`Solução para ${problem.title}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DE SERVIÇOS ORGANIZADOS */}
      <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossos <span className="text-blue-600">Serviços</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções completas em automação residencial e comercial com a mais alta qualidade e tecnologia de ponta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* INDICADOR DE VÍDEO DISPONÍVEL */}
                  
                  {/* CATEGORIA DO SERVIÇO */}
                  <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DE VÍDEO INSTITUCIONAL */}
      <section id="trabalho" className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Conheça Nosso <span className="text-blue-400">Trabalho</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Veja como transformamos ambientes e realizamos sonhos
            </p>
          </div>

          {/* CONTAINER DO VÍDEO */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl aspect-video">
              {/* PLACEHOLDER PARA VÍDEO - SUBSTITUA PELA URL DO SEU VÍDEO */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600/20 to-purple-600/20">
                <div className="text-center">
                  
                  
                </div>
              </div>
              
              
              <video
  className="w-full h-full object-cover"
  controls
  playsInline
  webkit-playsinline="true"
  muted
  poster="/assets/images/video-thumbnail.jpg"
>
  <source src="/assets/videos/video-institucional.mp4" type="video/mp4" />
  Seu navegador não suporta vídeo.
</video>

              
            </div>
          </div>
        </div>
        
      </section>
{/* CARROSSEL DE MODELOS */}
<section id="modelos" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Modelos de <span className="text-blue-600">Cortinas, Persianas e Toldos</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Confira alguns modelos disponíveis para transformar o seu ambiente
      </p>
    </div>

    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {[
        { title: "Rolô tela solar SCREEN", image: "/assets/images/carrosel/rolotelsol.jpg" },
        { title: "Rolô blackout", image: "/assets/images/carrosel/roloblack.jpg" },
        { title: "Romana translúcido", image: "/assets/images/carrosel/romanatrans.jpg" },
        { title: "Modelo celular", image: "/assets/images/carrosel/modelocelu.jpg" },
        { title: "Persianas horizontal alumínio 25mm", image: "/assets/images/carrosel/perhoralu25mm.jpg" },
        { title: "Romana", image: "/assets/images/carrosel/romana.jpg" },
        { title: "Duo vision", image: "/assets/images/carrosel/duovision.jpg" },
        { title: "Rolô blackout com bandô e guias laterais", image: "/assets/images/carrosel/roloblackbandogl.jpg" },
        { title: "Horizontal alumínio 50mm com fita", image: "/assets/images/carrosel/horizalu50mm.jpg" },
        { title: "Modelo Painel", image: "/assets/images/carrosel/modelospainel.jpg" },
        { title: "Modelos cortina tecido", image: "/assets/images/carrosel/corttec.jpg" },
        { title: "Parte de toldo", image: "/assets/images/carrosel/toldo.jpg" },
        { title: "Modelos vertical (toldo cortina)", image: "/assets/images/carrosel/modvert.jpg" },
        { title: "Toldos vertical com braço pivotante tensor", image: "/assets/images/carrosel/toldoverti.jpg" },
        { title: "Toldos cobertura fixo", image: "/assets/images/carrosel/toldocoberfix.jpg" },
        { title: "Toldo vertical com visor", image: "/assets/images/carrosel/vertical com visor.jpg" },
        { title: "Toldo vertical com guia cabo de aço", image: "/assets/images/carrosel/toldovertcaboaca.jpg" },
        { title: "Toldo mediterrâneo (capota", image: "/assets/images/carrosel/toldomedit.jpg" },
        { title: "Toldo Articulado", image: "/assets/images/carrosel/toldoarticu.jpg" },
      ].map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

      {/* SEÇÃO DE MATERIAIS PARA TOLDOS */}
      <section id="materials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conheça as Opções de <span className="text-blue-600">Tecidos para Seu Toldo</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra as funcionalidades de cada material e escolha o ideal para seu projeto
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {materials.map((material, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${material.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <material.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{material.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">{material.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* SEÇÃO DE FORNECEDORES CREDENCIADOS */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">🔷 Vários Fornecedores para Melhor Atendê-lo!</h3>
            <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Você merece o melhor custo-benefício! Trabalhamos com os melhores fornecedores do mercado para garantir qualidade, durabilidade e o preço justo em cada projeto.
            </p>
            <button 
              onClick={handleWhatsAppDirect}
              className="mt-6 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <MessageCircle className="w-5 h-5" />
              <span>✅ Receba agora mesmo uma proposta personalizada!</span>
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE PROJETOS ANTES E DEPOIS */}
      {/* SEÇÃO DE PROJETOS (APENAS UMA IMAGEM POR CARD) */}
<section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Transformações <span className="text-blue-600">Incríveis</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Veja o antes e depois dos nossos projetos e inspire-se para sua próxima transformação
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
        >
          {/* IMAGEM ÚNICA */}
          <div className="relative overflow-hidden h-150">
            <img
              src={project.image}
              alt={project.title}
              // fallback simples caso a imagem 404
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/assets/images/placeholder.jpg'; }}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {/* CATEGORIA (badge) */}
            <div className="absolute bottom-4 left-4">
              <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                {project.category}
              </span>
            </div>
          </div>

          {/* CONTEÚDO DO CARD */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-600 flex items-center mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              {project.location}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* SEÇÃO POR QUE ESCOLHER A CONTROL */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-gray-900 text-white relative overflow-hidden">
        {/* EFEITOS VISUAIS DE FUNDO */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por que Escolher a <span className="text-blue-400">Control Persianas?</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Há mais de 10 anos levando conforto e praticidade com persianas, cortinas e toldos motorizados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {whyChoose.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CONDIÇÕES DE PAGAMENTO */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <CreditCard className="w-12 h-12 text-blue-400 mr-4" />
              <h3 className="text-3xl font-bold">Condições Facilitadas</h3>
            </div>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Parcelamos em até <span className="text-blue-400 font-bold text-2xl">12x</span> 
              para você realizar seu projeto dos sonhos sem comprometer o orçamento!
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE DEPOIMENTOS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              O que Nossos <span className="text-blue-600">Clientes Dizem</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A satisfação dos nossos clientes é nossa maior conquista
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-blue-600 mr-3" />
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">
                    {testimonial.project}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DE ESTATÍSTICAS - PRÓXIMO DOS DEPOIMENTOS */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Números que <span className="text-blue-200">Comprovam</span> Nossa Excelência
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DE UNIDADES */}
      <section id="units" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nossas <span className="text-blue-600">Unidades</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça as unidades da Control Persianas em Brasília e Goiânia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {units.map((unit, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{unit.city}</h3>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-900 font-medium">{unit.address}</p>
                        <p className="text-gray-600">CEP: {unit.cep}</p>
                        {unit.responsible && (
                          <p className="text-gray-600">Responsável: {unit.responsible}</p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <a href={`tel:${unit.phone}`} className="text-gray-900 hover:text-blue-600 transition-colors">
                        📱 {unit.phone}
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <a href={`mailto:${unit.email}`} className="text-gray-900 hover:text-blue-600 transition-colors">
                        {unit.email}
                      </a>
                    </div>
                  </div>

                  <a 
                    href={unit.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>Ver no Mapa</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DE CONTATO */}
      {/* SEÇÃO DE CONTATO */}
<section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* SEÇÃO ESPECIAL PARA QUEM CHEGOU ATÉ O FINAL */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        💡 Ficou até o Final? <span className="text-blue-600">Temos Algo Especial pra Você!</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        Deixe seu nome e telefone e receba conteúdo exclusivo, dicas e novidades em primeira mão.
        <br />
        <span className="text-blue-600 font-semibold">Quem preenche, sai na frente. 😉</span>
      </p>

      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Nome</label>
            <input 
              type="text" 
              name="nome"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Seu nome completo"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
            <input 
              type="tel" 
              name="telefone"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="(61) 99999-9999"
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>📱 Quero Receber Conteúdo Exclusivo!</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>

    {/* GRID COM INFORMAÇÕES DE CONTATO E WHATSAPP */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* -- exemplo: aqui poderia ir outro conteúdo na coluna esquerda (se tiver) */}
      <div className="hidden lg:block" />

      {/* Card centralizado: ocupa a faixa toda (col-span) e centra o conteúdo */}
      <div className="col-span-1 lg:col-span-2 flex justify-center">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Entre em Contato</h3>
          <p className="text-gray-600 mb-6">
            Fale conosco pelo WhatsApp e receba atendimento personalizado
          </p>
          <a 
            href="https://wa.me/5561981276447?text=Olá! Vim através do site da Control Persianas e gostaria de mais informações sobre os serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transform hover:scale-105 transition-all duration-300 mx-auto"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </div>

  </div>
</section>

       
      {/* RODAPÉ */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/WhatsApp Image 2025-06-24 at 12.19.10.jpeg"
  alt="Control Persianas Logo"
  className="h-10 w-auto"
  style={{ background: 'transparent'
                  }}
                  onError={() => {
                    console.error('Erro ao carregar a imagem do logo no rodapé');
                  }}
                />
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
               Há mais de 10 anos levando conforto e praticidade com persianas, cortinas e toldos motorizados.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                <p>CNPJ: 11.247.936/0001-38</p>
                <p>Site: www.controlpersianas.com.br</p>
                <p>Instagram: @controlpersianas</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Cortinas Motorizadas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Persianas Motorizadas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Toldos Resistentes</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instalação</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Unidades</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Brasília - DF</li>
                <li>📱 (61) 98127-6447</li>
                <li>Goiânia - GO</li>
                <li>📱 (62) 8556-5975</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2025 Control Persianas - CNPJ: 11.247.936/0001-38. Todos os direitos reservados.</p>
          </div>
        </div>
        {/* BOTÃO FLUTUANTE DO FALE CONOSCO */}
<a
  href="https://wa.me/c/556181276447"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg font-semibold text-sm md:text-base transition-all duration-300 flex items-center space-x-2"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M16 0C7.164 0 0 7.164 0 16c0 2.82.734 5.445 2.02 7.75L0 32l8.52-2.225A15.899 15.899 0 0016 32c8.837 0 16-7.164 16-16S24.837 0 16 0zm0 29.6a13.56 13.56 0 01-6.937-1.873l-.495-.296-5.057 1.32 1.349-4.927-.324-.508A13.55 13.55 0 1129.6 16c0 7.48-6.12 13.6-13.6 13.6zm7.84-10.4c-.407-.204-2.41-1.188-2.785-1.32-.375-.139-.649-.204-.923.204-.28.407-1.06 1.32-1.3 1.592-.239.28-.482.313-.889.11-.407-.204-1.715-.63-3.267-2.008-1.207-1.08-2.02-2.408-2.252-2.815-.239-.407-.026-.63.179-.834.184-.182.407-.472.61-.708.204-.237.27-.407.407-.679.139-.28.07-.518-.035-.723-.105-.204-.923-2.241-1.26-3.075-.332-.8-.669-.691-.923-.702l-.784-.014c-.28 0-.723.103-1.1.518-.375.407-1.469 1.436-1.469 3.5 0 2.065 1.505 4.06 1.714 4.34.21.28 2.967 4.535 7.2 6.357 1.008.435 1.792.695 2.403.889 1.008.318 1.926.273 2.652.165.81-.12 2.41-.984 2.75-1.937.342-.954.342-1.77.239-1.937-.105-.165-.375-.26-.784-.464z" />
  </svg>
  <span>Fale Conosco</span>
</a>


      </footer>
    </div>
  );
}

export default App;