import React, { useState } from 'react';
import { TeamMember } from '../types';
import { X, Users, Check, Edit2, Shield, Award, CheckCircle2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  teamMembers: TeamMember[];
  onUpdateTeam: (updated: TeamMember[]) => void;
  modelName: string;
}

export const TeamModal: React.FC<Props> = ({
  isOpen,
  onClose,
  teamMembers,
  onUpdateTeam,
  modelName
}) => {
  const [members, setMembers] = useState<TeamMember[]>(teamMembers);
  const [editingId, setEditingId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleNameChange = (roleId: string, newName: string) => {
    setMembers(prev => prev.map(m => m.roleId === roleId ? { ...m, studentName: newName } : m));
  };

  const handleStatusChange = (roleId: string, newStatus: TeamMember['status']) => {
    setMembers(prev => prev.map(m => m.roleId === roleId ? { ...m, status: newStatus } : m));
  };

  const handleSave = () => {
    onUpdateTeam(members);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl border border-stone-200 shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="p-6 border-b border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
              <Users className="w-5 h-5 text-amber-800" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-stone-900 text-lg">
                Ficha Técnica: Equipo de Investigación (6 Integrantes)
              </h3>
              <p className="text-xs text-stone-500">
                Modelo Asignado: <span className="font-semibold text-stone-700">{modelName}</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-950 flex items-start gap-2">
            <Shield className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <span>
              Puedes editar los nombres de los 6 estudiantes integrantes de tu grupo para que aparezcan en el Manifiesto, Decálogo y entregables oficiales.
            </span>
          </div>

          <div className="divide-y divide-stone-100 border border-stone-200 rounded-xl overflow-hidden bg-white">
            {members.map((member, idx) => (
              <div key={member.roleId} className="p-4 hover:bg-stone-50/60 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-stone-100 text-stone-700 text-[10px] font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                      {member.roleTitle}
                    </span>
                  </div>

                  {editingId === member.roleId ? (
                    <input
                      type="text"
                      value={member.studentName}
                      onChange={(e) => handleNameChange(member.roleId, e.target.value)}
                      className="text-xs font-semibold p-1.5 rounded border border-amber-400 bg-white w-full max-w-sm mt-1"
                      autoFocus
                    />
                  ) : (
                    <div className="text-sm font-semibold text-stone-800 flex items-center gap-2">
                      <span>{member.studentName}</span>
                      <button
                        onClick={() => setEditingId(member.roleId)}
                        className="text-stone-400 hover:text-stone-700"
                        title="Editar nombre"
                      >
                        <Edit2 className="w-3 h-3" />
                      </button>
                    </div>
                  )}

                  <span className="text-[11px] text-stone-500 block">
                    {member.deliverableTitle}
                  </span>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center">
                  <select
                    value={member.status}
                    onChange={(e) => handleStatusChange(member.roleId, e.target.value as TeamMember['status'])}
                    className="text-xs p-1.5 rounded-lg border border-stone-200 bg-stone-50 text-stone-700 font-medium"
                  >
                    <option value="Publicado">Publicado</option>
                    <option value="En revisión">En revisión</option>
                    <option value="Completado">Completado</option>
                  </select>

                  {editingId === member.roleId && (
                    <button
                      onClick={() => setEditingId(null)}
                      className="p-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700 text-xs"
                    >
                      <Check className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-100 bg-stone-50 flex items-center justify-between">
          <span className="text-xs text-stone-500 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 6 de 6 Roles Asignados
          </span>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-stone-600 hover:bg-stone-200"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              className="px-5 py-2 rounded-lg text-xs font-bold text-white bg-stone-900 hover:bg-stone-800 shadow-xs"
            >
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
