import React, { useState } from 'react';
import { ManifestoData, RoleId, TeamMember } from '../types';
import { CRISIS_OPTIONS } from '../data/modelsData';
import { 
  FileCheck2, 
  Printer, 
  Copy, 
  Check, 
  ArrowRight, 
  Sparkles, 
  AlertCircle, 
  Feather,
  BookMarked,
  Shield,
  Layers,
  GraduationCap
} from 'lucide-react';

interface Props {
  manifesto: ManifestoData;
  modelName: string;
  thinkers: string[];
  motto: string;
  teamMembers: TeamMember[];
  onNavigateTab: (tab: RoleId) => void;
  selectedCrisisId: string;
  onSelectCrisis: (crisisId: string) => void;
}

export const ManifestoView: React.FC<Props> = ({
  manifesto,
  modelName,
  thinkers,
  motto,
  teamMembers,
  onNavigateTab,
  selectedCrisisId,
  onSelectCrisis
}) => {
  const [copied, setCopied] = useState(false);
  const sintetizadorMember = teamMembers.find(m => m.roleId === 'sintetizador');

  const handleCopyMarkdown = () => {
    const text = `# MANIFIESTO POLÍTICO DEL SIGLO XXI\n## ${manifesto.crisisTitle}\n**Modelo Filosófico:** ${modelName}\n\n### PREÁMBULO\n${manifesto.preamble}\n\n### DIAGNÓSTICO DE ÉPOCA\n${manifesto.diagnostic}\n\n### PILARES DE ACCIÓN POLÍTICA\n${manifesto.pillars.map((p, i) => `${p.title}\n- ${p.actionPrinciple}\n- Propuesta Institucional: ${p.institutionalProposal}`).join('\n\n')}\n\n### CLÁUSULA RESOLUTIVA\n${manifesto.resolutiveClause}\n\n### FIRMAN:\n${teamMembers.map(m => `- ${m.studentName} (${m.roleTitle})`).join('\n')}`;
    
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Portada Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-stone-900 text-stone-100 border border-stone-800 p-8 md:p-10 shadow-lg">
        {/* Subtle decorative background glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-stone-700/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-amber-950/80 text-amber-300 border border-amber-800/60 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Think Tank Académico • Portada Oficial & Manifiesto Político (Sintetizador Relator: {sintetizadorMember?.studentName})
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Hub Digital de Filosofía Política: <span className="text-amber-200">La Guerra de los Modelos</span>
          </h1>

          <p className="font-serif italic text-stone-300 text-base sm:text-lg mt-4 max-w-3xl leading-relaxed">
            {motto}
          </p>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-400 mt-6 pt-6 border-t border-stone-800">
            <div>
              <span className="text-stone-500 uppercase tracking-wider block">Modelo Asignado:</span>
              <strong className="text-stone-200 font-medium">{modelName}</strong>
            </div>
            <div>
              <span className="text-stone-500 uppercase tracking-wider block">Cuerpo Teórico:</span>
              <strong className="text-stone-200 font-medium">{thinkers.join(', ')}</strong>
            </div>
            <div>
              <span className="text-stone-500 uppercase tracking-wider block">Sintetizador Relator:</span>
              <strong className="text-amber-300 font-medium">{sintetizadorMember?.studentName}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* 21st Century Crisis Selector Card */}
      <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-100 pb-4 mb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-600" /> Crisis del Siglo XXI Planteada por la Cátedra:
            </span>
            <h3 className="text-xl font-serif font-bold text-stone-900 mt-1">
              Seleccionar Escenario de Crisis Global
            </h3>
          </div>
          <span className="text-xs font-mono text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
            Simulación Contemporánea
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {CRISIS_OPTIONS.map((crisis) => {
            const isSelected = crisis.id === selectedCrisisId;
            return (
              <button
                key={crisis.id}
                onClick={() => onSelectCrisis(crisis.id)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-amber-50/70 border-amber-500 ring-1 ring-amber-500 shadow-xs'
                    : 'bg-stone-50/60 border-stone-200 hover:bg-stone-100/80 hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono mb-1.5 text-stone-500">
                  <span className="font-bold text-amber-800">Año {crisis.year}</span>
                  {isSelected && <span className="text-amber-700 font-bold">Activa</span>}
                </div>
                <h4 className="font-serif font-bold text-stone-900 text-sm leading-snug mb-1">
                  {crisis.title}
                </h4>
                <p className="text-xs text-stone-600 line-clamp-2">
                  {crisis.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* The Formal Manifesto Paper */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-sm space-y-8 print:border-none print:shadow-none print:p-0">
        {/* Header Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-6 print:hidden">
          <div className="inline-flex items-center gap-2 text-xs text-stone-500 uppercase tracking-widest font-bold">
            <BookMarked className="w-4 h-4 text-stone-700" />
            <span>Documento de Postura Oficial del Think Tank</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-stone-200 hover:bg-stone-100 text-xs font-semibold text-stone-700 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '¡Copiado!' : 'Copiar Texto'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir / Exportar PDF</span>
            </button>
          </div>
        </div>

        {/* Paper Document Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Sintetizador Relator: {sintetizadorMember?.studentName} • Manifiesto Político Siglo XXI
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight leading-snug">
            {manifesto.crisisTitle}
          </h2>
          <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
            Emitido por el Laboratorio de Filosofía Política: {modelName}
          </p>
        </div>

        {/* Preamble */}
        <div className="bg-stone-50/80 p-6 rounded-xl border border-stone-200/80 relative">
          <Feather className="w-6 h-6 text-stone-400 absolute top-4 right-4" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
            I. Preámbulo Solemne
          </h4>
          <p className="font-serif italic text-stone-800 text-base leading-relaxed">
            «{manifesto.preamble}»
          </p>
        </div>

        {/* Diagnostic */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600 flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-stone-700" /> II. Diagnóstico Epocal de la Crisis
          </h4>
          <p className="text-sm text-stone-700 leading-relaxed">
            {manifesto.diagnostic}
          </p>
        </div>

        {/* 5 Pillars of Action (Synthesized from Roles 1 to 5) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 pb-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-600 flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-stone-700" /> III. Los Cinco Pilares de Acción Dialéctica (Síntesis del Equipo)
            </h4>
            <span className="text-[11px] text-stone-400">
              Articulación de los roles de investigación
            </span>
          </div>

          <div className="space-y-3">
            {manifesto.pillars.map((pillar, idx) => {
              // Map index to respective role tab
              const roleTargetTab: RoleId = idx === 0 
                ? 'teorico' 
                : idx === 1 
                ? 'socioeconomico' 
                : idx === 2 
                ? 'juridico' 
                : idx === 3 
                ? 'tocqueville' 
                : 'contrapunto';

              return (
                <div
                  key={idx}
                  className="bg-stone-50/60 border border-stone-200 rounded-xl p-5 hover:border-amber-400 transition-all space-y-2.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="font-serif font-bold text-stone-900 text-base">
                      {pillar.title}
                    </h5>
                    <button
                      onClick={() => onNavigateTab(roleTargetTab)}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 hover:text-amber-950 underline underline-offset-2"
                    >
                      Ver entregable del rol <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                  <span className="inline-block text-[11px] font-mono text-stone-500 bg-white px-2 py-0.5 rounded border border-stone-200">
                    {pillar.roleContribution}
                  </span>

                  <p className="text-xs font-medium text-stone-800 leading-relaxed">
                    <strong>Principio de Acción:</strong> {pillar.actionPrinciple}
                  </p>

                  <div className="text-xs text-amber-950 bg-amber-50/60 p-3 rounded-lg border border-amber-100 leading-relaxed">
                    <strong>Propuesta Institucional Concreta:</strong> {pillar.institutionalProposal}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Resolutive Clause */}
        <div className="border-t-2 border-b-2 border-stone-900 py-6 text-center">
          <h4 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
            IV. Cláusula Resolutiva Final
          </h4>
          <p className="font-serif font-bold text-stone-900 text-lg leading-relaxed max-w-3xl mx-auto">
            {manifesto.resolutiveClause}
          </p>
        </div>

        {/* Signatures of the 6 Members */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 text-center mb-6">
            Firmas y Rúbricas del Equipo de Investigación (Integrantes y Roles)
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {teamMembers.map((member) => (
              <div 
                key={member.roleId} 
                className="p-4 rounded-xl border border-stone-200 bg-stone-50/40 text-center space-y-1"
              >
                <div className="h-8 flex items-center justify-center">
                  <span className="font-serif italic text-stone-400 text-lg">
                    {member.studentName.split(' ')[0]}
                  </span>
                </div>
                <div className="pt-2 border-t border-stone-200">
                  <strong className="block text-xs font-bold text-stone-900">
                    {member.studentName}
                  </strong>
                  <span className="text-[10px] text-stone-500 block uppercase tracking-wider">
                    {member.roleTitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
