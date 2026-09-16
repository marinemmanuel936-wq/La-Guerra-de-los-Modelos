import React, { useState, useEffect } from 'react';
import { PoliticalModel, TeamMember } from '../types';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  BookOpen, 
  TrendingUp, 
  Scale, 
  AlertTriangle, 
  Swords, 
  FileText,
  Quote
} from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  model: PoliticalModel;
  teamMembers: TeamMember[];
}

export const PresentationModeModal: React.FC<Props> = ({
  isOpen,
  onClose,
  model,
  teamMembers
}) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        setSlideIndex(prev => Math.min(prev + 1, 6));
      } else if (e.key === 'ArrowLeft') {
        setSlideIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const slides = [
    {
      role: 'Think Tank Plenario',
      student: 'Todo el Equipo',
      title: 'Hub Digital de Filosofía Política: La Guerra de los Modelos',
      badge: model.name,
      content: (
        <div className="space-y-6 text-center max-w-3xl mx-auto py-12">
          <span className="text-sm font-mono uppercase tracking-widest text-amber-400 bg-stone-800 px-4 py-1.5 rounded-full border border-stone-700">
            Laboratorio de Pensamiento Contemporáneo
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white leading-tight">
            {model.name}
          </h1>
          <p className="font-serif italic text-stone-300 text-xl leading-relaxed">
            {model.coreMotto}
          </p>
          <div className="pt-6 border-t border-stone-800 flex flex-wrap justify-center gap-6 text-sm text-stone-400">
            <span><strong>Pensadores:</strong> {model.thinkers.join(', ')}</span>
            <span><strong>Época:</strong> {model.era}</span>
          </div>
        </div>
      )
    },
    {
      role: 'Teórico Principal',
      student: teamMembers.find(m => m.roleId === 'teorico')?.studentName || '',
      title: 'Fundamentos Ontológicos y Éticos',
      badge: 'Bases Filosóficas',
      content: (
        <div className="space-y-6 max-w-4xl mx-auto py-6">
          <div className="p-4 rounded-xl bg-stone-800 border border-stone-700 text-stone-300 text-sm">
            <Quote className="w-5 h-5 text-amber-400 inline-block mr-2 -mt-1" />
            {model.teorico.coreOntologySummary}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {model.teorico.nodes.slice(0, 4).map((node) => (
              <div key={node.id} className="p-4 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                  {node.category}
                </span>
                <h4 className="font-serif font-bold text-white text-lg mb-2">
                  {node.label}
                </h4>
                <p className="text-xs text-stone-300 mb-3 leading-relaxed">
                  {node.shortDefinition}
                </p>
                <div className="text-[11px] font-serif italic text-stone-400 border-t border-stone-800 pt-2">
                  «{node.quote.text.slice(0, 110)}...» — <span className="text-stone-300">{node.quote.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      role: 'Analista Socioeconómico',
      student: teamMembers.find(m => m.roleId === 'socioeconomico')?.studentName || '',
      title: 'Modelo de Desarrollo y Distribución de Riqueza',
      badge: 'Economía Política',
      content: (
        <div className="space-y-6 max-w-4xl mx-auto py-6">
          <p className="text-stone-300 text-sm bg-stone-800 p-4 rounded-xl border border-stone-700">
            {model.socioeconomico.summaryAnalysis}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {model.socioeconomico.indicators.map((ind) => (
              <div key={ind.dimension} className="p-4 rounded-xl bg-stone-900 border border-stone-800 space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-emerald-400 uppercase">
                  <span>{ind.dimension}</span>
                  <span>{ind.score}%</span>
                </div>
                <h5 className="text-sm font-semibold text-white">
                  {ind.posture}
                </h5>
                <p className="text-xs text-stone-400">
                  <strong>Mecanismo:</strong> {ind.mechanism}
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      role: 'Crítico Jurídico-Político',
      student: teamMembers.find(m => m.roleId === 'juridico')?.studentName || '',
      title: 'Estado, Libertad y Decálogo Constitutivo',
      badge: model.juridico.libertyConcept,
      content: (
        <div className="space-y-6 max-w-4xl mx-auto py-6">
          <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-800 text-blue-200 text-sm">
            <strong>Noción de Libertad Defendida:</strong> {model.juridico.libertyDescription}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {model.juridico.decalogue.slice(0, 6).map((art) => (
              <div key={art.number} className="p-3 bg-stone-900 rounded-lg border border-stone-800 text-xs">
                <span className="font-mono font-bold text-blue-400 block mb-1">Art. {art.number}</span>
                <strong className="text-white block mb-1">{art.title}</strong>
                <p className="text-stone-400 line-clamp-2">«{art.principle}»</p>
              </div>
            ))}
          </div>
          <div className="text-center text-xs text-stone-400">
            Podcast del Rol: <span className="text-white font-medium">{model.juridico.podcast.title}</span> ({model.juridico.podcast.durationLabel})
          </div>
        </div>
      )
    },
    {
      role: 'Defensor de Tocqueville',
      student: teamMembers.find(m => m.roleId === 'tocqueville')?.studentName || '',
      title: 'Alerta Tocqueville: Individualismo vs. Despotismo',
      badge: 'Matriz Crítica',
      content: (
        <div className="space-y-6 max-w-4xl mx-auto py-6">
          <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-800 text-rose-200 text-sm">
            <strong>Veredicto Dialéctico del Grupo:</strong> {model.tocqueville.syntheticVerdict}
          </div>
          <div className="space-y-3">
            {model.tocqueville.alerts.map((al, idx) => (
              <div key={idx} className="p-4 bg-stone-900 rounded-xl border border-stone-800 space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <strong className="text-rose-400 uppercase tracking-wider">{al.riskFactor}</strong>
                  <span className="text-stone-500 font-mono">{al.workReference}</span>
                </div>
                <p className="text-xs text-stone-300 font-serif italic">
                  {al.tocquevilleQuote}
                </p>
                <div className="text-xs text-emerald-400 pt-1">
                  <strong>Antídoto Institucional:</strong> {al.mitigationMechanism}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      role: 'Debatiente de Contrapunto',
      student: teamMembers.find(m => m.roleId === 'contrapunto')?.studentName || '',
      title: 'Foro de Refutación en Vivo: Ágora Dialéctica',
      badge: 'Refutación de Modelos',
      content: (
        <div className="space-y-6 max-w-4xl mx-auto py-6">
          <div className="p-4 rounded-xl bg-violet-950/60 border border-violet-800 text-violet-200 text-sm">
            <strong>Ágora Abierta:</strong> Moderada por <strong>{teamMembers.find(m => m.roleId === 'contrapunto')?.studentName || 'Debatiente'}</strong>. El foro se encuentra habilitado para recibir objeciones en vivo de los grupos contrarios y participantes durante la plenaria.
          </div>
          {model.contrapunto.initialRefutations.length > 0 ? (
            <div className="space-y-3">
              {model.contrapunto.initialRefutations.map((ref) => (
                <div key={ref.id} className="p-4 bg-stone-900 rounded-xl border border-stone-800 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-rose-400 font-bold">Contra: {ref.targetModel}</span>
                    <span className="text-violet-400 font-mono">Solidez Lógica: {ref.solidarityScore}</span>
                  </div>
                  <div className="text-xs font-serif italic text-stone-300">
                    Tesis atacada: «{ref.thesisRefuted}»
                  </div>
                  <p className="text-xs text-stone-400">
                    <strong>Contra-Argumento:</strong> {ref.counterArgument}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center border border-dashed border-stone-700 rounded-xl space-y-2">
              <span className="text-stone-300 text-sm font-semibold block">Listo para registrar objeciones en tiempo real</span>
              <p className="text-xs text-stone-500">Usa la sección del Foro de Refutación para escribir objeciones dialécticas directas.</p>
            </div>
          )}
        </div>
      )
    },
    {
      role: 'Sintetizador Relator',
      student: teamMembers.find(m => m.roleId === 'sintetizador')?.studentName || '',
      title: 'Manifiesto Político del Siglo XXI',
      badge: 'Documento Final',
      content: (
        <div className="space-y-5 max-w-4xl mx-auto py-4">
          <div className="text-center space-y-1">
            <span className="text-xs font-mono text-amber-400 uppercase">Postura Oficial ante la Crisis Global</span>
            <h3 className="text-2xl font-serif font-bold text-white">{model.sintetizador.crisisTitle}</h3>
          </div>
          <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 text-xs text-stone-300 font-serif italic">
            «{model.sintetizador.preamble}»
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {model.sintetizador.pillars.map((pil, idx) => (
              <div key={idx} className="p-3 bg-stone-900 rounded-lg border border-stone-800 text-xs">
                <strong className="text-amber-300 block mb-1">{pil.title.split('(')[0]}</strong>
                <p className="text-stone-400 text-[11px]">{pil.actionPrinciple}</p>
              </div>
            ))}
          </div>
          <div className="p-3 rounded-lg bg-stone-800 text-center font-serif text-xs text-white">
            {model.sintetizador.resolutiveClause}
          </div>
        </div>
      )
    }
  ];

  const currentSlide = slides[slideIndex];

  return (
    <div className="fixed inset-0 z-50 bg-stone-950 text-stone-100 flex flex-col justify-between overflow-hidden">
      {/* Top bar */}
      <div className="px-6 py-4 border-b border-stone-800 flex items-center justify-between bg-stone-900/80 backdrop-blur-xs">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-semibold">
            Modo Plenaria / Proyector
          </span>
          <span className="text-stone-400 text-xs hidden sm:inline">
            Diapositiva {slideIndex + 1} de {slides.length}
          </span>
        </div>

        <div className="text-center">
          <span className="text-xs text-stone-400 uppercase tracking-wider block font-mono">
            {currentSlide.role}
          </span>
          <span className="text-xs font-bold text-white">
            Expositor: {currentSlide.student}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white transition-colors"
          title="Salir del modo presentación (Esc)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main slide display */}
      <div className="flex-1 overflow-y-auto px-6 flex items-center justify-center">
        {currentSlide.content}
      </div>

      {/* Bottom control bar */}
      <div className="px-6 py-4 border-t border-stone-800 flex items-center justify-between bg-stone-900/80 backdrop-blur-xs">
        <button
          onClick={() => setSlideIndex(prev => Math.max(prev - 1, 0))}
          disabled={slideIndex === 0}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 disabled:opacity-30 text-xs font-semibold text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Anterior
        </button>

        <div className="flex items-center gap-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlideIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                slideIndex === idx ? 'bg-amber-400 w-6' : 'bg-stone-700 hover:bg-stone-500'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setSlideIndex(prev => Math.min(prev + 1, slides.length - 1))}
          disabled={slideIndex === slides.length - 1}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 disabled:opacity-30 text-xs font-bold text-stone-950 transition-colors"
        >
          Siguiente <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
