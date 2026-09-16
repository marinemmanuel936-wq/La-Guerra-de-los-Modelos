import React, { useState } from 'react';
import { TocquevilleAlert } from '../types';
import { 
  AlertTriangle, 
  BookOpen, 
  ShieldCheck, 
  Users, 
  Compass, 
  Eye, 
  CheckCircle,
  Quote,
  Flame,
  Info
} from 'lucide-react';

interface Props {
  alerts: TocquevilleAlert[];
  thesisConfrontation: string;
  syntheticVerdict: string;
  studentName: string;
  modelName: string;
}

export const TocquevilleAlertView: React.FC<Props> = ({
  alerts,
  thesisConfrontation,
  syntheticVerdict,
  studentName,
  modelName
}) => {
  const [selectedAlertIndex, setSelectedAlertIndex] = useState(0);
  const activeAlert = alerts[selectedAlertIndex] || alerts[0];

  return (
    <div className="space-y-8">
      {/* Header of Role */}
      <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-stone-100 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-900 mb-2">
              <span className="font-bold">Defensor de Tocqueville</span>
              <span className="text-rose-500">•</span>
              <span>{studentName}</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-stone-900 tracking-tight">
              Alerta Tocqueville: Individualismo vs. Despotismo Tutelar
            </h2>
            <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
              Análisis crítico multimedia que confronta sin contemplaciones las premisas del modelo contra 
              la advertencia de Alexis de Tocqueville sobre el despotismo democrático tutelar y la muerte del vínculo cívico.
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block">Obra de Referencia</span>
            <span className="text-sm font-serif italic text-stone-800">La Democracia en América (1835-1840)</span>
          </div>
        </div>

        {/* Global Confrontation Thesis */}
        <div className="mt-4 p-4 rounded-lg bg-rose-50/50 border border-rose-200/60 text-sm text-stone-800 leading-relaxed">
          <span className="font-bold text-rose-900 block text-xs uppercase tracking-wider mb-1">
            Planteamiento de la Confrontación:
          </span>
          {thesisConfrontation}
        </div>
      </div>

      {/* Dialectical Matrix: 3 Core Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Alerts list */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2 flex items-center gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" /> Factores de Riesgo Tocquevillianos
          </div>

          <div className="space-y-2.5">
            {alerts.map((alert, idx) => {
              const isSelected = idx === selectedAlertIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedAlertIndex(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-rose-50/80 border-rose-400 ring-1 ring-rose-400/50 shadow-xs'
                      : 'bg-white border-stone-200 hover:border-stone-300 hover:bg-stone-50/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                      alert.severityLevel === 'Crítico' 
                        ? 'bg-rose-600 text-white' 
                        : 'bg-amber-100 text-amber-900'
                    }`}>
                      Riesgo {alert.severityLevel}
                    </span>
                    <span className="text-[11px] font-mono text-stone-400">0{idx + 1}</span>
                  </div>
                  <h4 className="font-serif font-bold text-stone-900 text-sm leading-snug">
                    {alert.riskFactor}
                  </h4>
                  <p className="text-xs text-stone-500 mt-2 line-clamp-2">
                    {alert.workReference}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Synthetic Final Verdict Card */}
          <div className="bg-stone-900 text-stone-100 p-5 rounded-xl mt-4">
            <h5 className="text-xs font-mono uppercase tracking-wider text-rose-400 mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" /> Veredicto Autocrítico del Grupo
            </h5>
            <p className="text-xs text-stone-300 leading-relaxed">
              {syntheticVerdict}
            </p>
          </div>
        </div>

        {/* Deep Dive on selected Tocqueville risk */}
        <div className="lg:col-span-8 bg-white border border-stone-200 rounded-xl p-6 shadow-xs space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-800 bg-rose-50 px-2.5 py-1 rounded">
                Alerta Focalizada
              </span>
              <h3 className="text-2xl font-serif font-bold text-stone-900 mt-2">
                {activeAlert.riskFactor}
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
              Fuente: {activeAlert.workReference}
            </span>
          </div>

          {/* Tocqueville Original Diagnostic Quote */}
          <div className="bg-rose-50/70 border-l-4 border-rose-600 p-5 rounded-r-xl relative">
            <Quote className="w-8 h-8 text-rose-300 absolute top-3 right-4 opacity-50 pointer-events-none" />
            <h5 className="text-xs font-bold uppercase tracking-wider text-rose-900 mb-2 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-rose-700" />
              La Advertencia Textual de Tocqueville:
            </h5>
            <p className="font-serif italic text-stone-900 text-sm sm:text-base leading-relaxed mb-3">
              {activeAlert.tocquevilleQuote}
            </p>
            <span className="text-xs text-rose-950/80 font-semibold block">
              — Alexis de Tocqueville, {activeAlert.workReference}
            </span>
          </div>

          {/* Vulnerability Analysis vs Mitigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
              <h5 className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                Vulnerabilidad Específica de {modelName}
              </h5>
              <p className="text-xs text-stone-700 leading-relaxed">
                {activeAlert.vulnerabilityAnalysis}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
              <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                Mecanismo Institucional de Contención Propuesto
              </h5>
              <p className="text-xs text-stone-800 leading-relaxed">
                {activeAlert.mitigationMechanism}
              </p>
            </div>
          </div>

          {/* Conceptual Dialectic Infographic / Diagram */}
          <div className="p-5 rounded-xl bg-stone-100/70 border border-stone-200">
            <h5 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-3 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-stone-900" />
              Esquema Dialéctico: De la Trampa del Confort a la Libertad Vigilante
            </h5>
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="p-3 bg-white rounded-lg border border-stone-200">
                <span className="font-bold text-rose-900 block mb-1">1. Tesis: La Trampa</span>
                <p className="text-stone-600 text-[11px] leading-snug">
                  Placeres privados vulgares e indiferencia hacia la esfera pública.
                </p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-stone-200">
                <span className="font-bold text-stone-900 block mb-1">2. Riesgo: El Monstruo</span>
                <p className="text-stone-600 text-[11px] leading-snug">
                  El Estado paternalista o la Big Tech asume la tutela total del destino humano.
                </p>
              </div>
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-300">
                <span className="font-bold text-emerald-900 block mb-1">3. Síntesis Republicana</span>
                <p className="text-stone-700 text-[11px] leading-snug">
                  Cuerpos intermedios, asociaciones civiles y deliberación vecinal permanente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
