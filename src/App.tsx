import React, { useState, useEffect } from 'react';
import { RoleId, PoliticalModel, TeamMember } from './types';
import { POLITICAL_MODELS, DEFAULT_TEAM_MEMBERS, CRISIS_OPTIONS } from './data/modelsData';
import { Navbar } from './components/Navbar';
import { ManifestoView } from './components/ManifestoView';
import { OntologyMapView } from './components/OntologyMapView';
import { SocioeconomicView } from './components/SocioeconomicView';
import { LegalDecaloguePodcastView } from './components/LegalDecaloguePodcastView';
import { TocquevilleAlertView } from './components/TocquevilleAlertView';
import { RefutationForumView } from './components/RefutationForumView';
import { TeamModal } from './components/TeamModal';
import { PresentationModeModal } from './components/PresentationModeModal';
import { Compass, BookOpen, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<RoleId>('sintetizador');
  const [currentModel, setCurrentModel] = useState<PoliticalModel>(POLITICAL_MODELS[0]);
  const [selectedCrisisId, setSelectedCrisisId] = useState<string>('ia_trabajo');
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [isPresentationModalOpen, setIsPresentationModalOpen] = useState(false);

  // Persistence of team members
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(() => {
    const saved = localStorage.getItem('hub_filosofia_team_members');
    if (saved) {
      try {
        const parsed: TeamMember[] = JSON.parse(saved);
        // Ensure user-specified team members are present
        const hasCeleste = parsed.some(m => m.studentName.toLowerCase().includes('celeste'));
        if (hasCeleste) {
          return parsed;
        }
      } catch (e) {
        console.error(e);
      }
    }
    return DEFAULT_TEAM_MEMBERS;
  });

  const handleUpdateTeam = (updated: TeamMember[]) => {
    setTeamMembers(updated);
    localStorage.setItem('hub_filosofia_team_members', JSON.stringify(updated));
  };

  const currentMember = teamMembers.find(m => m.roleId === currentTab) || teamMembers[0];

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 flex flex-col font-sans">
      {/* Top Main Navigation */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={(tab) => setCurrentTab(tab)}
        currentModel={currentModel}
        models={POLITICAL_MODELS}
        onSelectModel={(mod) => setCurrentModel(mod)}
        onOpenTeamModal={() => setIsTeamModalOpen(true)}
        onOpenPresentationModal={() => setIsPresentationModalOpen(true)}
        teamMembers={teamMembers}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Active tab content render */}
        {currentTab === 'sintetizador' && (
          <ManifestoView
            manifesto={currentModel.sintetizador}
            modelName={currentModel.name}
            thinkers={currentModel.thinkers}
            motto={currentModel.coreMotto}
            teamMembers={teamMembers}
            onNavigateTab={(tab) => setCurrentTab(tab)}
            selectedCrisisId={selectedCrisisId}
            onSelectCrisis={(cid) => setSelectedCrisisId(cid)}
          />
        )}

        {currentTab === 'teorico' && (
          <OntologyMapView
            nodes={currentModel.teorico.nodes}
            modelName={currentModel.name}
            thinkers={currentModel.thinkers}
            summary={currentModel.teorico.coreOntologySummary}
            studentName={teamMembers.find(m => m.roleId === 'teorico')?.studentName || 'Teórico Principal'}
          />
        )}

        {currentTab === 'socioeconomico' && (
          <SocioeconomicView
            indicators={currentModel.socioeconomico.indicators}
            summary={currentModel.socioeconomico.summaryAnalysis}
            comparativeTable={currentModel.socioeconomico.comparativeTable}
            studentName={teamMembers.find(m => m.roleId === 'socioeconomico')?.studentName || 'Analista Socioeconómico'}
            modelName={currentModel.name}
          />
        )}

        {currentTab === 'juridico' && (
          <LegalDecaloguePodcastView
            decalogue={currentModel.juridico.decalogue}
            podcast={currentModel.juridico.podcast}
            libertyConcept={currentModel.juridico.libertyConcept}
            libertyDescription={currentModel.juridico.libertyDescription}
            studentName={teamMembers.find(m => m.roleId === 'juridico')?.studentName || 'Crítico Jurídico'}
          />
        )}

        {currentTab === 'tocqueville' && (
          <TocquevilleAlertView
            alerts={currentModel.tocqueville.alerts}
            thesisConfrontation={currentModel.tocqueville.thesisConfrontation}
            syntheticVerdict={currentModel.tocqueville.syntheticVerdict}
            studentName={teamMembers.find(m => m.roleId === 'tocqueville')?.studentName || 'Defensor de Tocqueville'}
            modelName={currentModel.name}
          />
        )}

        {currentTab === 'contrapunto' && (
          <RefutationForumView
            initialRefutations={currentModel.contrapunto.initialRefutations}
            studentName={teamMembers.find(m => m.roleId === 'contrapunto')?.studentName || 'Debatiente de Contrapunto'}
            currentModelName={currentModel.name}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 border-t border-stone-800 py-10 mt-12 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-xs">
            <div className="space-y-2 md:col-span-2">
              <div className="flex items-center gap-2 text-white font-serif font-bold text-sm">
                <Compass className="w-4 h-4 text-amber-500" />
                <span>Hub Digital de Filosofía Política: La Guerra de los Modelos</span>
              </div>
              <p className="text-stone-400 max-w-md leading-relaxed">
                Plataforma académica diseñada para simular un Think Tank o laboratorio de pensamiento 
                contemporáneo. Estructura rigurosa según la distribución interna de 6 roles: Teórico Principal, 
                Analista Socioeconómico, Crítico Jurídico-Político, Defensor de Tocqueville, Debatiente de Contrapunto y Sintetizador Relator.
              </p>
            </div>

            <div className="space-y-2">
              <span className="font-bold text-stone-200 uppercase tracking-wider block">
                Los 6 Roles del Equipo
              </span>
              <ul className="space-y-1 text-stone-400">
                <li>1. Teórico Principal (Ontología)</li>
                <li>2. Analista Socioeconómico (Riqueza)</li>
                <li>3. Crítico Jurídico (Decálogo & Podcast)</li>
                <li>4. Defensor de Tocqueville (Alerta)</li>
                <li>5. Debatiente de Contrapunto (Ágora)</li>
                <li>6. Sintetizador Relator (Manifiesto)</li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="font-bold text-stone-200 uppercase tracking-wider block">
                Herramientas del Sitio
              </span>
              <ul className="space-y-1.5">
                <li>
                  <button 
                    onClick={() => setIsTeamModalOpen(true)}
                    className="hover:text-white transition-colors"
                  >
                    • Editar Integrantes del Grupo
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setIsPresentationModalOpen(true)}
                    className="hover:text-white transition-colors"
                  >
                    • Activar Modo Plenaria
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => window.print()}
                    className="hover:text-white transition-colors"
                  >
                    • Imprimir / Exportar Manifiesto
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4 text-[11px] text-stone-500">
            <span>
              Cátedra de Filosofía Política Contemporánea • Simulación Académica en Tiempo Real
            </span>
            <span>
              Pensadores Eje: J.S. Mill, K. Marx, Montesquieu, A. de Tocqueville, A. Gramsci, P. Pettit
            </span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <TeamModal
        isOpen={isTeamModalOpen}
        onClose={() => setIsTeamModalOpen(false)}
        teamMembers={teamMembers}
        onUpdateTeam={handleUpdateTeam}
        modelName={currentModel.name}
      />

      <PresentationModeModal
        isOpen={isPresentationModalOpen}
        onClose={() => setIsPresentationModalOpen(false)}
        model={currentModel}
        teamMembers={teamMembers}
      />
    </div>
  );
}
