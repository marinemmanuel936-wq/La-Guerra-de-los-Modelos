import React, { useState } from 'react';
import { OntologyNode } from '../types';
import { BookOpen, ExternalLink, Network, Quote, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

interface Props {
  nodes: OntologyNode[];
  modelName: string;
  thinkers: string[];
  summary: string;
  studentName: string;
}

export const OntologyMapView: React.FC<Props> = ({
  nodes,
  modelName,
  thinkers,
  summary,
  studentName
}) => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>(nodes[0]?.id || '');
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const selectedNode = nodes.find(n => n.id === selectedNodeId) || nodes[0];
  const categories = ['Todos', ...Array.from(new Set(nodes.map(n => n.category)))];

  const filteredNodes = activeCategory === 'Todos' 
    ? nodes 
    : nodes.filter(n => n.category === activeCategory);

  return (
    <div className="space-y-8">
      {/* Header of Role */}
      <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-stone-100 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 mb-2">
              <span className="font-bold">Teórico Principal</span>
              <span className="text-amber-500">•</span>
              <span>{studentName}</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-stone-900 tracking-tight">
              Fundamentos Ontológicos y Éticos
            </h2>
            <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
              Mapa conceptual interactivo que enlaza las categorías ontológicas (concepción del ser humano y la realidad) 
              y ético-teleológicas del modelo, fundamentadas rigurosamente con citas textuales originales verificables.
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs uppercase tracking-wider text-stone-400 font-semibold block">Pensadores Eje</span>
            <span className="text-sm font-medium text-stone-800">{thinkers.join(' • ')}</span>
          </div>
        </div>

        {/* Global ontology synopsis */}
        <div className="mt-4 p-4 rounded-lg bg-stone-50 border border-stone-200/80 text-sm text-stone-700 leading-relaxed italic">
          <Quote className="w-4 h-4 text-stone-400 inline-block mr-2 -mt-1" />
          {summary}
        </div>
      </div>

      {/* Category filter pills */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider mr-2 flex items-center gap-1">
          <Network className="w-3.5 h-3.5" /> Dimensiones:
        </span>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
              activeCategory === cat
                ? 'bg-stone-900 text-stone-50 shadow-xs'
                : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Interactive Grid & Network View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Nodes interactive list / canvas representation */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2 flex items-center justify-between">
            <span>Nodos Conceptuales del Modelo ({filteredNodes.length})</span>
            <span className="text-stone-400">Click para explorar nodo</span>
          </div>

          <div className="space-y-2.5">
            {filteredNodes.map((node) => {
              const isSelected = node.id === selectedNode.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all relative overflow-hidden ${
                    isSelected
                      ? 'bg-amber-50/70 border-amber-400/80 ring-1 ring-amber-400/50 shadow-xs'
                      : 'bg-white border-stone-200 hover:border-stone-300 hover:bg-stone-50/60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="inline-block text-[11px] font-semibold text-amber-800 uppercase tracking-wider mb-1">
                        {node.category}
                      </span>
                      <h4 className="font-serif font-bold text-stone-900 text-base leading-snug">
                        {node.label}
                      </h4>
                    </div>
                    {isSelected ? (
                      <CheckCircle2 className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-stone-400 shrink-0 mt-1" />
                    )}
                  </div>
                  <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                    {node.shortDefinition}
                  </p>
                  
                  {/* Visual connectors indicator */}
                  <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center gap-1.5 text-[11px] text-stone-500">
                    <Network className="w-3 h-3 text-stone-400" />
                    <span>Conectado con: {node.connectedTo.length} conceptos clave</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Node Detailed Focus & Original Hyperlinked Quotation */}
        <div className="lg:col-span-7 bg-white border border-stone-200 rounded-xl p-6 shadow-xs sticky top-24">
          <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-5">
            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-stone-100 text-stone-800 uppercase tracking-wider">
              {selectedNode.category}
            </span>
            <span className="text-xs text-stone-500 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Categoría Ontológica Central
            </span>
          </div>

          <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">
            {selectedNode.label}
          </h3>

          <div className="bg-stone-50/80 p-4 rounded-lg border border-stone-200/70 mb-5">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-1">
              Tesis Conceptual Central:
            </h5>
            <p className="text-stone-800 text-sm font-medium leading-relaxed">
              {selectedNode.shortDefinition}
            </p>
          </div>

          <div className="space-y-4 text-stone-700 text-sm leading-relaxed mb-6">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Desarrollo Hermenéutico y Filosófico:
            </h5>
            <p>{selectedNode.extendedText}</p>
          </div>

          {/* Original Source Quote with Hyperlink */}
          <div className="bg-amber-50/60 border-l-4 border-amber-600 p-5 rounded-r-xl relative">
            <Quote className="w-8 h-8 text-amber-300 absolute top-3 right-4 opacity-50 pointer-events-none" />
            <h5 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-amber-700" />
              Cita Textual Hipervinculada de la Obra Original
            </h5>
            <blockquote className="font-serif italic text-stone-900 text-base leading-relaxed mb-3">
              «{selectedNode.quote.text}»
            </blockquote>
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-2 border-t border-amber-200/60 text-amber-900/80">
              <div>
                <span className="font-bold text-stone-900">{selectedNode.quote.author}</span> —{' '}
                <span className="italic">{selectedNode.quote.work}</span> ({selectedNode.quote.year})
              </div>
              {selectedNode.quote.sourceUrl && (
                <a
                  href={selectedNode.quote.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber-800 hover:text-amber-950 underline underline-offset-2"
                >
                  Ver fuente académica <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          {/* Connected Nodes Matrix */}
          <div className="mt-6 pt-5 border-t border-stone-100">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-1">
              <Network className="w-3.5 h-3.5" /> Enlaces Dialécticos en el Sistema:
            </h5>
            <div className="flex flex-wrap gap-2">
              {selectedNode.connectedTo.map((targetId) => {
                const target = nodes.find(n => n.id === targetId);
                if (!target) return null;
                return (
                  <button
                    key={targetId}
                    onClick={() => setSelectedNodeId(targetId)}
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 hover:bg-amber-50 hover:border-amber-300 text-stone-700 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                    <span className="font-medium">{target.label}</span>
                    <ChevronRight className="w-3 h-3 text-stone-400" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
