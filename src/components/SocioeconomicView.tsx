import React, { useState } from 'react';
import { EconomicIndicator } from '../types';
import { 
  TrendingUp, 
  BarChart3, 
  Sliders, 
  Layers, 
  ShieldCheck, 
  Check, 
  ArrowRightLeft,
  Building2,
  DollarSign
} from 'lucide-react';

interface Props {
  indicators: EconomicIndicator[];
  summary: string;
  comparativeTable: {
    factor: string;
    modelView: string;
    rivalCapitalistView: string;
    rivalCollectivistView: string;
  }[];
  studentName: string;
  modelName: string;
}

export const SocioeconomicView: React.FC<Props> = ({
  indicators,
  summary,
  comparativeTable,
  studentName,
  modelName
}) => {
  const [activeTab, setActiveTab] = useState<'infografia' | 'cuadro'>('infografia');
  const [selectedDimension, setSelectedDimension] = useState<string>(indicators[0]?.dimension || '');
  
  // Interactive mini simulation state
  const [giniTarget, setGiniTarget] = useState<number>(0.28);
  const [taxRate, setTaxRate] = useState<number>(42);

  const currentIndicator = indicators.find(i => i.dimension === selectedDimension) || indicators[0];

  return (
    <div className="space-y-8">
      {/* Header of Role */}
      <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-stone-100 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-900 mb-2">
              <span className="font-bold">Analista Socioeconómico</span>
              <span className="text-emerald-500">•</span>
              <span>{studentName}</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-stone-900 tracking-tight">
              Modelo de Desarrollo y Distribución de Riqueza
            </h2>
            <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
              Infografía dinámica y cuadro comparativo riguroso que sustenta cómo este modelo resuelve la 
              distribución de la riqueza, la propiedad de los medios de producción y los límites de la intervención del mercado.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-stone-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('infografia')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'infografia'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" /> Infografía & Indicadores
            </button>
            <button
              onClick={() => setActiveTab('cuadro')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'cuadro'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <ArrowRightLeft className="w-3.5 h-3.5" /> Cuadro Comparativo
            </button>
          </div>
        </div>

        {/* Global Economic Thesis */}
        <div className="mt-4 p-4 rounded-lg bg-emerald-50/50 border border-emerald-200/60 text-sm text-stone-800 leading-relaxed">
          <span className="font-bold text-emerald-900 block text-xs uppercase tracking-wider mb-1">
            Tesis de Economía Política:
          </span>
          {summary}
        </div>
      </div>

      {activeTab === 'infografia' ? (
        <div className="space-y-8">
          {/* 4 Pillars Selector Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {indicators.map((indicator) => {
              const isSelected = indicator.dimension === currentIndicator.dimension;
              return (
                <button
                  key={indicator.dimension}
                  onClick={() => setSelectedDimension(indicator.dimension)}
                  className={`text-left p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-emerald-50/70 border-emerald-500 ring-1 ring-emerald-500 shadow-xs'
                      : 'bg-white border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
                      Eje Estructural
                    </span>
                    {isSelected && <Check className="w-4 h-4 text-emerald-600" />}
                  </div>
                  <h4 className="font-serif font-bold text-stone-900 text-base mb-1">
                    {indicator.dimension}
                  </h4>
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {indicator.posture}
                  </p>
                  <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                    <span>Grado de Socialización:</span>
                    <span className="font-bold text-stone-800">{indicator.score}%</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Indicator Deep-Dive Card */}
          <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-100 pb-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                  Eje Analizado en Detalle
                </span>
                <h3 className="text-2xl font-serif font-bold text-stone-900 mt-2">
                  {currentIndicator.dimension}
                </h3>
              </div>
              <div className="text-sm font-semibold text-stone-700 bg-stone-50 border border-stone-200 px-4 py-2 rounded-lg">
                Posicionamiento: <span className="text-emerald-700">{currentIndicator.posture}</span>
              </div>
            </div>

            {/* Visual Spectrum Bar */}
            <div className="bg-stone-50 p-5 rounded-xl border border-stone-200 mb-6">
              <div className="flex justify-between items-center text-xs font-semibold text-stone-600 mb-2">
                <span>← {currentIndicator.leftLabel}</span>
                <span className="px-2.5 py-0.5 rounded bg-emerald-600 text-white font-mono text-xs">
                  Índice de Intervención / Colectividad: {currentIndicator.score}/100
                </span>
                <span>{currentIndicator.rightLabel} →</span>
              </div>
              <div className="w-full h-3.5 bg-stone-200 rounded-full overflow-hidden relative">
                <div 
                  className="h-full bg-linear-to-r from-stone-400 via-emerald-600 to-amber-600 transition-all duration-500 rounded-full"
                  style={{ width: `${currentIndicator.score}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 rounded-lg bg-stone-50 border border-stone-200/80">
                <h5 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-stone-600" />
                  Fundamentación Teórica
                </h5>
                <p className="text-sm text-stone-700 leading-relaxed mt-2">
                  {currentIndicator.description}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-stone-50 border border-stone-200/80">
                <h5 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-emerald-600" />
                  Mecanismo Institucional de Ejecución
                </h5>
                <p className="text-sm text-stone-700 leading-relaxed mt-2">
                  {currentIndicator.mechanism}
                </p>
              </div>

              <div className="p-4 rounded-lg bg-stone-50 border border-stone-200/80">
                <h5 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1 flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-amber-600" />
                  Referencia Histórica / Doctrinal
                </h5>
                <p className="text-sm text-stone-700 leading-relaxed mt-2">
                  {currentIndicator.historicalExample}
                </p>
              </div>
            </div>
          </div>

          {/* Dynamic Policy Simulator */}
          <div className="bg-stone-900 text-stone-100 rounded-xl p-6 shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-800 pb-4 mb-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                  Simulador de Política Económica del Modelo
                </span>
                <h3 className="text-xl font-serif font-bold text-white mt-1">
                  Calibración de Coeficiente de Gini e Incentivo Productivo
                </h3>
              </div>
              <span className="text-xs text-stone-400 bg-stone-800 px-3 py-1 rounded">
                Modelo: {modelName}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between text-xs font-mono text-stone-300 mb-1.5">
                    <span>Tasa de Impuesto Progresivo a la Renta Superior / Herencias:</span>
                    <span className="text-emerald-400 font-bold">{taxRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="75"
                    value={taxRate}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setTaxRate(val);
                      // Adjust simulated Gini: higher tax reduces inequality
                      const calcGini = (0.45 - (val - 15) * 0.0035).toFixed(3);
                      setGiniTarget(Number(calcGini));
                    }}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-stone-500 mt-1 font-mono">
                    <span>15% (Laissez-faire extremo)</span>
                    <span>75% (Solidaridad distributiva alta)</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-stone-800/80 border border-stone-700 text-xs text-stone-300 leading-relaxed space-y-2">
                  <p>
                    <strong className="text-white">Diagnóstico del Analista:</strong> Con una tasa del {taxRate}%, 
                    el Coeficiente de Gini proyectado es de <span className="text-emerald-400 font-mono font-bold">{giniTarget}</span>.
                  </p>
                  <p>
                    Esta configuración permite financiar la educación cívica universal y el dividendo social 
                    sin anular el incentivo al mérito individual, resguardando la premisa de John Stuart Mill 
                    sobre la libertad de iniciativa.
                  </p>
                </div>
              </div>

              {/* Visual Simulated Output Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-stone-800 border border-stone-700 text-center">
                  <span className="text-xs text-stone-400 block mb-1">Gini Proyectado</span>
                  <span className="text-3xl font-mono font-bold text-emerald-400">{giniTarget}</span>
                  <span className="text-[11px] text-stone-500 block mt-1">
                    {giniTarget < 0.30 ? 'Baja desigualdad (Estilo nórdico)' : 'Desigualdad moderada'}
                  </span>
                </div>

                <div className="p-4 rounded-lg bg-stone-800 border border-stone-700 text-center">
                  <span className="text-xs text-stone-400 block mb-1">Incentivo a la Innovación</span>
                  <span className="text-3xl font-mono font-bold text-amber-400">
                    {taxRate > 60 ? '72/100' : '88/100'}
                  </span>
                  <span className="text-[11px] text-stone-500 block mt-1">
                    Preservación del talento
                  </span>
                </div>

                <div className="col-span-2 p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/50 flex items-center justify-between text-xs text-emerald-200">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> Cohesión Democrática Estimada:
                  </span>
                  <span className="font-mono font-bold text-emerald-300">
                    {taxRate >= 40 ? 'Óptima (94%)' : 'Riesgo de Fractura Cívica'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Comparative Table Card */
        <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs overflow-x-auto">
          <div className="border-b border-stone-100 pb-4 mb-5">
            <h3 className="text-xl font-serif font-bold text-stone-900">
              Cuadro Comparativo Dinámico de Filosofía Económica
            </h3>
            <p className="text-xs text-stone-600 mt-1">
              Confrontación punto por punto de este modelo frente al Capitalismo Laissez-faire y el Colectivismo de Estado.
            </p>
          </div>

          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-stone-200 text-xs uppercase tracking-wider">
                <th className="py-3 px-4 text-stone-500 font-bold bg-stone-50 w-1/4">Factor Económico</th>
                <th className="py-3 px-4 text-emerald-950 font-bold bg-emerald-50/80 w-1/3 border-x border-emerald-200">
                  {modelName} (Defendido)
                </th>
                <th className="py-3 px-4 text-stone-700 font-bold bg-stone-50/60 w-1/5">Capitalismo Puro</th>
                <th className="py-3 px-4 text-stone-700 font-bold bg-stone-50/60 w-1/5">Colectivismo Rígido</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {comparativeTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-stone-50/50 transition-colors">
                  <td className="py-4 px-4 font-semibold text-stone-800 bg-stone-50/30">
                    {row.factor}
                  </td>
                  <td className="py-4 px-4 text-stone-900 bg-emerald-50/20 border-x border-emerald-100 font-medium">
                    {row.modelView}
                  </td>
                  <td className="py-4 px-4 text-stone-600 text-xs">
                    {row.rivalCapitalistView}
                  </td>
                  <td className="py-4 px-4 text-stone-600 text-xs">
                    {row.rivalCollectivistView}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
