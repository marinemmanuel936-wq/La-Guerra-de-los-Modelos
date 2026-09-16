import React, { useState } from 'react';
import { RoleId, PoliticalModel, TeamMember } from '../types';
import { 
  BookOpen, 
  TrendingUp, 
  Scale, 
  AlertTriangle, 
  Swords, 
  FileText, 
  Users, 
  Tv, 
  ChevronDown, 
  Menu, 
  X,
  Compass
} from 'lucide-react';

interface Props {
  currentTab: RoleId;
  onSelectTab: (tab: RoleId) => void;
  currentModel: PoliticalModel;
  models: PoliticalModel[];
  onSelectModel: (model: PoliticalModel) => void;
  onOpenTeamModal: () => void;
  onOpenPresentationModal: () => void;
  teamMembers?: TeamMember[];
}

export const Navbar: React.FC<Props> = ({
  currentTab,
  onSelectTab,
  currentModel,
  models,
  onSelectModel,
  onOpenTeamModal,
  onOpenPresentationModal,
  teamMembers = []
}) => {
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getMemberName = (roleId: RoleId, defaultName: string) => {
    const member = teamMembers.find(m => m.roleId === roleId);
    return member?.studentName || defaultName;
  };

  const tabs: { 
    id: RoleId; 
    roleTitle: string; 
    shortTitle: string;
    deliverable: string; 
    defaultStudent: string;
    icon: React.FC<{ className?: string }> 
  }[] = [
    { 
      id: 'teorico', 
      roleTitle: 'Teórico Principal', 
      shortTitle: 'Teórico',
      deliverable: 'Fundamentos Ontológicos', 
      defaultStudent: 'Celeste Píriz', 
      icon: BookOpen 
    },
    { 
      id: 'socioeconomico', 
      roleTitle: 'Analista Socioeconómico', 
      shortTitle: 'Socioeconómico',
      deliverable: 'Desarrollo y Riqueza', 
      defaultStudent: 'Alexander Montoya', 
      icon: TrendingUp 
    },
    { 
      id: 'juridico', 
      roleTitle: 'Crítico Jurídico-Político', 
      shortTitle: 'Jurídico',
      deliverable: 'Estado, Libertad y Ley', 
      defaultStudent: 'Valeria Montoya', 
      icon: Scale 
    },
    { 
      id: 'tocqueville', 
      roleTitle: 'Defensor de Tocqueville', 
      shortTitle: 'Tocqueville',
      deliverable: 'Alerta Tocqueville', 
      defaultStudent: 'Salome Urrego', 
      icon: AlertTriangle 
    },
    { 
      id: 'contrapunto', 
      roleTitle: 'Debatiente de Contrapunto', 
      shortTitle: 'Contrapunto',
      deliverable: 'Foro de Refutación en Vivo', 
      defaultStudent: 'Yann Carlos Castaño', 
      icon: Swords 
    },
    { 
      id: 'sintetizador', 
      roleTitle: 'Sintetizador Relator', 
      shortTitle: 'Sintetizador',
      deliverable: 'Manifiesto Político Siglo XXI', 
      defaultStudent: 'Emmanuel Marín', 
      icon: FileText 
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-stone-900 text-stone-100 border-b border-stone-800 shadow-md">
      {/* Top Banner with Model Switcher & Utility Actions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 border-b border-stone-800/80">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-600 flex items-center justify-center text-stone-950 font-bold shadow-xs">
              <Compass className="w-5 h-5 text-stone-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-base sm:text-lg text-white tracking-tight">
                  Hub Digital de Filosofía Política
                </span>
                <span className="hidden md:inline-block px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  La Guerra de los Modelos
                </span>
              </div>
              <span className="text-[11px] text-stone-400 block -mt-0.5">
                Think Tank Académico & Plenaria de Debate
              </span>
            </div>
          </div>

          {/* Model Switcher Dropdown */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-stone-200 border border-stone-700 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span className="max-w-[140px] sm:max-w-[200px] truncate">{currentModel.name}</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
              </button>

              {modelDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 rounded-xl bg-stone-900 border border-stone-700 shadow-xl py-2 z-50 animate-in fade-in zoom-in-95">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-mono tracking-wider text-stone-400 border-b border-stone-800">
                    Cambiar Modelo Filosófico:
                  </div>
                  {models.map((mod) => (
                    <button
                      key={mod.id}
                      onClick={() => {
                        onSelectModel(mod);
                        setModelDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2.5 text-xs transition-colors flex flex-col ${
                        currentModel.id === mod.id
                          ? 'bg-amber-500/20 text-amber-300 font-semibold'
                          : 'text-stone-300 hover:bg-stone-800 hover:text-white'
                      }`}
                    >
                      <span className="font-bold">{mod.name}</span>
                      <span className="text-[10px] text-stone-400 font-serif italic">
                        {mod.thinkers.join(', ')}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={onOpenTeamModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-stone-200 border border-stone-700 transition-colors"
                title="Ver y editar integrantes del equipo de investigación"
              >
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <span>Equipo</span>
              </button>

              <button
                onClick={onOpenPresentationModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-xs font-bold text-stone-950 transition-colors shadow-xs"
                title="Modo diapositivas para la plenaria en clase"
              >
                <Tv className="w-3.5 h-3.5" />
                <span>Modo Plenaria</span>
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation Tabs: Explicit Role Titles & Member Names */}
        <nav className="hidden lg:flex items-center space-x-2 py-2.5 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id;
            const studentName = getMemberName(tab.id, tab.defaultStudent);

            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`inline-flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition-all whitespace-nowrap text-left ${
                  isActive
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-xs ring-1 ring-amber-500/20'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800/80 border border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-amber-400' : 'text-stone-400'}`} />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-xs">{tab.roleTitle}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                      isActive 
                        ? 'bg-amber-400 text-stone-950 font-bold' 
                        : 'bg-stone-800 text-stone-300 border border-stone-700'
                    }`}>
                      {studentName}
                    </span>
                  </div>
                  <span className="text-[10px] text-stone-400">
                    {tab.deliverable}
                  </span>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Tablet & Mobile Tabs Bar */}
        <div className="lg:hidden flex overflow-x-auto py-2 gap-1.5 scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id;
            const studentName = getMemberName(tab.id, tab.defaultStudent);

            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs whitespace-nowrap ${
                  isActive
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'text-stone-300 hover:bg-stone-800 border border-transparent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-amber-400' : 'text-stone-400'}`} />
                <div className="flex flex-col text-left">
                  <span className="font-bold text-[11px] leading-tight">{tab.shortTitle}</span>
                  <span className="text-[10px] text-amber-300/90 font-medium">{studentName.split(' ')[0]}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile drawer for team and presentation */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-stone-800 bg-stone-900 p-4 space-y-2">
          <button
            onClick={() => {
              onOpenTeamModal();
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-stone-800 text-xs font-semibold text-stone-200"
          >
            <Users className="w-4 h-4 text-amber-400" />
            <span>Equipo de Investigación</span>
          </button>
          <button
            onClick={() => {
              onOpenPresentationModal();
              setMobileMenuOpen(false);
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-amber-600 text-xs font-bold text-stone-950"
          >
            <Tv className="w-4 h-4" />
            <span>Modo Plenaria en Clase</span>
          </button>
        </div>
      )}
    </header>
  );
};
