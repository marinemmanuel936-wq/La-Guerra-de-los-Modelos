import React, { useState, useEffect } from 'react';
import { ForumArgument } from '../types';
import { 
  MessageSquare, 
  ThumbsUp, 
  Send, 
  Filter, 
  Tag, 
  PlusCircle, 
  Swords,
  Trash2,
  AlertCircle
} from 'lucide-react';

interface Props {
  initialRefutations: ForumArgument[];
  studentName: string;
  currentModelName: string;
}

export const RefutationForumView: React.FC<Props> = ({
  initialRefutations,
  studentName,
  currentModelName
}) => {
  const storageKey = `hub_filosofia_refutations_${currentModelName.replace(/\s+/g, '_').toLowerCase()}`;

  const [refutations, setRefutations] = useState<ForumArgument[]>(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error(e);
    }
    return initialRefutations;
  });

  const [selectedTargetFilter, setSelectedTargetFilter] = useState<string>('Todos');
  const [isAddingNew, setIsAddingNew] = useState(false);

  // New intervention form state
  const [authorName, setAuthorName] = useState('');
  const [authorRole, setAuthorRole] = useState('Interlocutor Plenario');
  const [targetModel, setTargetModel] = useState(currentModelName);
  const [thesisRefuted, setThesisRefuted] = useState('');
  const [philosophicalFlaw, setPhilosophicalFlaw] = useState('');
  const [counterArgument, setCounterArgument] = useState('');
  const [tagsInput, setTagsInput] = useState('Dialéctica, Inconsistencia');

  // Reply form state
  const [replyingToId, setReplyingToId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');
  const [replyAuthor, setReplyAuthor] = useState('');

  const targetModelsList = [
    'Todos',
    'Liberalismo Social y Utilitarista (Mill)',
    'Materialismo Histórico / Colectivismo Planificado',
    'Republicanismo Constitucional y División del Poder',
    'Neoliberalismo Laissez-Faire / Anarcocapitalismo',
    'Tecnocracia Algorítmica Desregulada'
  ];

  const persistRefutations = (updated: ForumArgument[]) => {
    setRefutations(updated);
    try {
      localStorage.setItem(storageKey, JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleVote = (id: string) => {
    const updated = refutations.map(arg => {
      if (arg.id === id) {
        return { ...arg, solidarityScore: arg.solidarityScore + 1 };
      }
      return arg;
    });
    persistRefutations(updated);
  };

  const handleAddRefutation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!thesisRefuted.trim() || !counterArgument.trim()) return;

    const newArg: ForumArgument = {
      id: `ref-user-${Date.now()}`,
      authorName: authorName.trim() || 'Estudiante / Expositor',
      authorRole: authorRole.trim() || 'Interlocutor Plenario',
      targetModel,
      thesisRefuted: thesisRefuted.trim(),
      philosophicalFlaw: philosophicalFlaw.trim() || 'Inconsistencia lógica o empírica',
      counterArgument: counterArgument.trim(),
      solidarityScore: 1,
      tags: tagsInput.split(',').map(t => t.trim()).filter(Boolean),
      timestamp: 'Recién publicado',
      replies: []
    };

    persistRefutations([newArg, ...refutations]);
    setAuthorName('');
    setThesisRefuted('');
    setPhilosophicalFlaw('');
    setCounterArgument('');
    setIsAddingNew(false);
  };

  const handleAddReply = (argId: string) => {
    if (!replyText.trim()) return;

    const updated = refutations.map(arg => {
      if (arg.id === argId) {
        const existingReplies = arg.replies || [];
        return {
          ...arg,
          replies: [
            ...existingReplies,
            {
              id: `rep-${Date.now()}`,
              authorName: replyAuthor.trim() || 'Interlocutor de Cátedra',
              authorModel: 'Réplica Dialéctica',
              text: replyText.trim(),
              timestamp: 'Recién respondido'
            }
          ]
        };
      }
      return arg;
    });

    persistRefutations(updated);
    setReplyText('');
    setReplyingToId(null);
  };

  const handleClearForum = () => {
    if (window.confirm('¿Deseas vaciar el foro de objeciones para iniciar una nueva ronda plenaria limpia?')) {
      persistRefutations([]);
    }
  };

  const filteredRefutations = selectedTargetFilter === 'Todos'
    ? refutations
    : refutations.filter(r => r.targetModel.toLowerCase().includes(selectedTargetFilter.toLowerCase().slice(0, 15)));

  return (
    <div className="space-y-8">
      {/* Header of Role */}
      <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-stone-100 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-violet-100 text-violet-900 mb-2">
              <span className="font-bold">Debatiente de Contrapunto</span>
              <span className="text-violet-500">•</span>
              <span>{studentName}</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-stone-900 tracking-tight">
              Foro de Refutación en Vivo: Ágora Dialéctica
            </h2>
            <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
              Espacio deliberativo y de réplicas en tiempo real. Abierto para que personas reales,
              estudiantes de la cátedra, docentes y grupos rivales formulen objeciones teóricas,
              falacias detectadas y contra-argumentaciones directas.
            </p>
          </div>
          <div className="flex items-center gap-2">
            {refutations.length > 0 && (
              <button
                onClick={handleClearForum}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-stone-200 hover:bg-stone-100 text-stone-600 text-xs font-medium transition-colors"
                title="Vaciar intervenciones para iniciar nueva plenaria"
              >
                <Trash2 className="w-3.5 h-3.5 text-stone-400" />
                <span>Vaciar Foro</span>
              </button>
            )}
            <button
              onClick={() => setIsAddingNew(!isAddingNew)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-700 hover:bg-violet-800 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              {isAddingNew ? 'Cancelar' : <><PlusCircle className="w-4 h-4" /> Formular Objeción</>}
            </button>
          </div>
        </div>

        {/* Info banner */}
        <div className="mt-4 p-3.5 rounded-lg bg-violet-50 border border-violet-200/70 text-xs text-violet-950 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Swords className="w-4 h-4 text-violet-700 shrink-0" />
            <span>
              <strong>Ágora Abierta:</strong> Moderada por <strong>{studentName}</strong> (Debatiente de Contrapunto). Defendiendo: <span className="font-semibold">{currentModelName}</span>.
            </span>
          </div>
          <span className="font-mono text-[11px] text-violet-800 font-semibold bg-violet-100/80 px-2 py-0.5 rounded">
            {refutations.length} {refutations.length === 1 ? 'Objeción Registrada' : 'Objeciones Registradas'}
          </span>
        </div>
      </div>

      {/* New Refutation Form Modal / Drawer */}
      {isAddingNew && (
        <form 
          onSubmit={handleAddRefutation}
          className="bg-white border-2 border-violet-300 rounded-xl p-6 shadow-md space-y-4 animate-in fade-in duration-200"
        >
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <h4 className="font-serif font-bold text-stone-900 text-lg flex items-center gap-2">
              <Swords className="w-5 h-5 text-violet-600" /> Formular Nueva Objeción Dialéctica
            </h4>
            <span className="text-xs text-stone-500">Registro Plenario para Personas Reales</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                Tu Nombre o Integrante que Objeta:
              </label>
              <input
                type="text"
                required
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Ej: Celeste Píriz, Andrés Gómez, etc."
                className="w-full text-xs p-2.5 rounded-lg border border-stone-300 bg-white focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                Tu Rol o Grupo de Procedencia:
              </label>
              <input
                type="text"
                value={authorRole}
                onChange={(e) => setAuthorRole(e.target.value)}
                placeholder="Ej: Grupo Rival 2, Docente, Estudiante de Cátedra"
                className="w-full text-xs p-2.5 rounded-lg border border-stone-300 bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                Modelo o Corriente a la que Diriges la Objeción:
              </label>
              <select
                value={targetModel}
                onChange={(e) => setTargetModel(e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-stone-300 bg-stone-50 font-medium text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-violet-500"
              >
                {targetModelsList.filter(m => m !== 'Todos').map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                Conceptos Clave o Etiquetas (separados por coma):
              </label>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="Paternalismo, Coerción, Ineficiencia, Riqueza"
                className="w-full text-xs p-2.5 rounded-lg border border-stone-300 bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
              Tesis o Postulado Concreto que se Objeta:
            </label>
            <input
              type="text"
              required
              value={thesisRefuted}
              onChange={(e) => setThesisRefuted(e.target.value)}
              placeholder="Ej: «El libre mercado autorregulado garantiza el bienestar de todos sin intervención estatal»"
              className="w-full text-xs p-2.5 rounded-lg border border-stone-300 bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
              Falacia Lógica, Contradicción o Falla Teórica Detectada:
            </label>
            <input
              type="text"
              value={philosophicalFlaw}
              onChange={(e) => setPhilosophicalFlaw(e.target.value)}
              placeholder="Ej: Falacia de petición de principio, incoherencia ética o ceguera ante el poder monopólico"
              className="w-full text-xs p-2.5 rounded-lg border border-stone-300 bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
              Contra-Argumentación Filosófica Sustentada:
            </label>
            <textarea
              required
              rows={4}
              value={counterArgument}
              onChange={(e) => setCounterArgument(e.target.value)}
              placeholder="Desarrolla con rigor el contra-argumento: bases ontológicas, económicas, institucionales o morales..."
              className="w-full text-xs p-2.5 rounded-lg border border-stone-300 bg-white leading-relaxed"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setIsAddingNew(false)}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-stone-600 hover:bg-stone-100"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-violet-700 hover:bg-violet-800 text-white text-xs font-bold shadow-xs transition-colors"
            >
              Publicar Objeción en el Foro
            </button>
          </div>
        </form>
      )}

      {/* Target Model Filter Pills */}
      {refutations.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filtrar por Modelo:
          </span>
          {targetModelsList.map((tm) => (
            <button
              key={tm}
              onClick={() => setSelectedTargetFilter(tm)}
              className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all ${
                selectedTargetFilter === tm
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
              }`}
            >
              {tm.length > 32 ? tm.slice(0, 32) + '...' : tm}
            </button>
          ))}
        </div>
      )}

      {/* Empty State when no refutations exist */}
      {filteredRefutations.length === 0 ? (
        <div className="bg-white border-2 border-dashed border-stone-200 rounded-2xl p-10 sm:p-14 text-center space-y-4 max-w-2xl mx-auto shadow-xs">
          <div className="w-14 h-14 bg-violet-50 text-violet-700 rounded-2xl flex items-center justify-center mx-auto shadow-xs border border-violet-100">
            <Swords className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-serif font-bold text-stone-900">
              El Ágora Dialéctica está abierta para intervenciones
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
              El foro se encuentra actualmente vacío y preparado para que personas reales (estudiantes de la cátedra, 
              profesores, grupos rivales o asistentes) registren sus objeciones directas, detecten falacias 
              y pongan a prueba las tesis del modelo.
            </p>
          </div>
          <div className="pt-2">
            <button
              onClick={() => setIsAddingNew(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-700 hover:bg-violet-800 text-white text-xs font-bold shadow-xs transition-colors"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Registrar Primera Objeción</span>
            </button>
          </div>
        </div>
      ) : (
        /* Thread list */
        <div className="space-y-4">
          {filteredRefutations.map((arg) => (
            <div
              key={arg.id}
              className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6 shadow-xs hover:border-violet-300 transition-all space-y-4"
            >
              {/* Header of post */}
              <div className="flex flex-wrap items-start justify-between gap-2 border-b border-stone-100 pb-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-stone-900 text-xs sm:text-sm">
                      {arg.authorName}
                    </span>
                    <span className="text-[11px] text-violet-700 bg-violet-50 border border-violet-100 px-2 py-0.5 rounded font-medium">
                      {arg.authorRole}
                    </span>
                    <span className="text-[11px] text-stone-400 font-mono">
                      {arg.timestamp}
                    </span>
                  </div>
                  <div className="text-xs text-rose-800 font-semibold mt-1">
                    Objeción contra: <span className="underline decoration-rose-300">{arg.targetModel}</span>
                  </div>
                </div>

                {/* Solidez Lógica Upvote Button */}
                <button
                  onClick={() => handleVote(arg.id)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-50 hover:bg-violet-50 border border-stone-200 text-xs font-semibold text-stone-700 hover:text-violet-700 transition-colors"
                  title="Votar por solidez lógica del argumento"
                >
                  <ThumbsUp className="w-3.5 h-3.5 text-violet-600" />
                  <span>Solidez:</span>
                  <span className="font-mono text-stone-900 font-bold">{arg.solidarityScore}</span>
                </button>
              </div>

              {/* Thesis being attacked */}
              <div className="p-3.5 rounded-lg bg-rose-50/60 border-l-4 border-rose-500">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-900 block mb-0.5">
                  Tesis Refutada:
                </span>
                <p className="text-xs font-serif italic text-rose-950 font-medium">
                  «{arg.thesisRefuted}»
                </p>
              </div>

              {/* Flaw detected */}
              <div className="text-xs text-stone-700">
                <strong className="text-stone-900">Vicio Argumentativo / Falla Teórica:</strong>{' '}
                <span className="text-amber-800 font-medium">{arg.philosophicalFlaw}</span>
              </div>

              {/* Main Counter-Argument */}
              <div className="text-xs sm:text-sm text-stone-800 leading-relaxed bg-stone-50/70 p-4 rounded-lg border border-stone-200/80">
                <strong className="block text-stone-900 text-xs uppercase tracking-wider mb-1">
                  Contra-Argumentación Sustentada:
                </strong>
                {arg.counterArgument}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {arg.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded bg-stone-100 text-stone-600"
                    >
                      <Tag className="w-2.5 h-2.5" /> {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setReplyingToId(replyingToId === arg.id ? null : arg.id)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-violet-700 hover:text-violet-900"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{arg.replies && arg.replies.length > 0 ? `${arg.replies.length} Réplicas` : 'Responder / Replicar'}</span>
                </button>
              </div>

              {/* Replies section */}
              {arg.replies && arg.replies.length > 0 && (
                <div className="mt-3 pt-3 border-t border-stone-100 space-y-2 pl-4 border-l-2 border-stone-200">
                  {arg.replies.map(rep => (
                    <div key={rep.id} className="text-xs bg-stone-50 p-3 rounded-lg border border-stone-200/70">
                      <div className="flex items-center justify-between text-[11px] mb-1 font-mono">
                        <span className="font-bold text-stone-800">{rep.authorName} ({rep.authorModel})</span>
                        <span className="text-stone-400">{rep.timestamp}</span>
                      </div>
                      <p className="text-stone-700">{rep.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Reply Input Box */}
              {replyingToId === arg.id && (
                <div className="mt-3 pt-3 border-t border-stone-100 p-3 bg-violet-50/50 rounded-lg space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={replyAuthor}
                      onChange={(e) => setReplyAuthor(e.target.value)}
                      placeholder="Tu nombre / Rol (ej: Crítico, Docente)"
                      className="text-xs p-2 rounded border border-stone-300 bg-white"
                    />
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Escribe tu contra-réplica dialéctica..."
                      className="flex-1 text-xs p-2 rounded border border-stone-300 bg-white"
                    />
                    <button
                      onClick={() => handleAddReply(arg.id)}
                      className="px-3 py-2 bg-violet-700 hover:bg-violet-800 text-white rounded text-xs font-semibold"
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
