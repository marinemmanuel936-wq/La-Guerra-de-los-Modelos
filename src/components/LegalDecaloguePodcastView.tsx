import React, { useState, useEffect, useRef } from 'react';
import { DecalogueArticle, PodcastData } from '../types';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Radio, 
  Scale, 
  ShieldAlert, 
  FileText, 
  CheckCircle,
  Search,
  Sliders
} from 'lucide-react';

interface Props {
  decalogue: DecalogueArticle[];
  podcast: PodcastData;
  libertyConcept: string;
  libertyDescription: string;
  studentName: string;
}

export const LegalDecaloguePodcastView: React.FC<Props> = ({
  decalogue,
  podcast,
  libertyConcept,
  libertyDescription,
  studentName
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'decalogo' | 'podcast'>('decalogo');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Podcast Audio Player State
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isMuted, setIsMuted] = useState(false);
  const [activeSegmentIndex, setActiveSegmentIndex] = useState(0);

  const synthRef = useRef<SpeechSynthesis | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      synthRef.current = window.speechSynthesis;
    }
    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  // Timer loop for simulated playback & audio waveform
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= podcast.durationSeconds) {
            setIsPlaying(false);
            if (synthRef.current) synthRef.current.cancel();
            return 0;
          }
          const next = prev + 1 * playbackSpeed;
          // Determine active segment
          const segmentDuration = podcast.durationSeconds / podcast.transcriptSegments.length;
          const segIdx = Math.min(
            Math.floor(next / segmentDuration),
            podcast.transcriptSegments.length - 1
          );
          setActiveSegmentIndex(segIdx);
          return next;
        });
      }, 1000 / playbackSpeed);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed, podcast.durationSeconds, podcast.transcriptSegments.length]);

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    } else {
      setIsPlaying(true);
      // Use Web Speech API if supported and not muted
      if (synthRef.current && !isMuted) {
        synthRef.current.cancel();
        const currentSegment = podcast.transcriptSegments[activeSegmentIndex] || podcast.transcriptSegments[0];
        const utterance = new SpeechSynthesisUtterance(currentSegment.text);
        utterance.lang = 'es-ES';
        utterance.rate = playbackSpeed;
        utterance.onend = () => {
          // If still within duration, continue
        };
        synthRef.current.speak(utterance);
        utteranceRef.current = utterance;
      }
    }
  };

  const restartAudio = () => {
    if (synthRef.current) synthRef.current.cancel();
    setCurrentTime(0);
    setActiveSegmentIndex(0);
    setIsPlaying(false);
  };

  const jumpToSegment = (index: number) => {
    const segmentDuration = podcast.durationSeconds / podcast.transcriptSegments.length;
    const newTime = index * segmentDuration;
    setCurrentTime(newTime);
    setActiveSegmentIndex(index);
    if (isPlaying && synthRef.current) {
      synthRef.current.cancel();
      if (!isMuted) {
        const seg = podcast.transcriptSegments[index];
        const utterance = new SpeechSynthesisUtterance(seg.text);
        utterance.lang = 'es-ES';
        utterance.rate = playbackSpeed;
        synthRef.current.speak(utterance);
      }
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const filteredDecalogue = decalogue.filter(art => 
    art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    art.principle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    art.legalJustification.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header of Role */}
      <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-xs">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-stone-100 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-900 mb-2">
              <span className="font-bold">Crítico Jurídico-Político</span>
              <span className="text-blue-500">•</span>
              <span>{studentName}</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-stone-900 tracking-tight">
              Estado, Libertad y Decálogo Constitutivo
            </h2>
            <p className="text-stone-600 text-sm mt-1 max-w-3xl leading-relaxed">
              Defensa estricta del concepto de libertad, individuo y Estado a través del Decálogo Constitutivo 
              del modelo y el podcast sonoro explicativo de 2 a 3 minutos.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-stone-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveSubTab('decalogo')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeSubTab === 'decalogo'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Scale className="w-3.5 h-3.5" /> Decálogo Constitutivo (10 Art.)
            </button>
            <button
              onClick={() => setActiveSubTab('podcast')}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeSubTab === 'podcast'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Radio className="w-3.5 h-3.5 text-blue-600" /> Podcast Incrustado (2-3 min)
            </button>
          </div>
        </div>

        {/* Central Definition of Liberty */}
        <div className="mt-4 p-4 rounded-lg bg-blue-50/60 border border-blue-200/60 text-sm text-stone-800 leading-relaxed">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
              Noción de Libertad Defendida:
            </span>
            <span className="px-2 py-0.5 rounded bg-blue-200/80 text-blue-950 font-semibold text-xs">
              {libertyConcept}
            </span>
          </div>
          <p className="text-stone-700 text-xs sm:text-sm">
            {libertyDescription}
          </p>
        </div>
      </div>

      {activeSubTab === 'decalogo' ? (
        <div className="space-y-6">
          {/* Search bar & count */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar en el articulado del decálogo..."
                className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-stone-200 bg-white focus:outline-hidden focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500"
              />
            </div>
            <span className="text-xs font-medium text-stone-500">
              Mostrando {filteredDecalogue.length} de {decalogue.length} Artículos Constitutivos
            </span>
          </div>

          {/* Decalogue Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredDecalogue.map((art) => (
              <div 
                key={art.number}
                className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-full bg-blue-900 text-white font-serif font-bold text-xs flex items-center justify-center">
                      {art.number}
                    </span>
                    <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider">
                      Artículo {art.number} / 10
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-stone-900 text-base mb-2">
                    {art.title}
                  </h4>
                  <p className="text-xs font-semibold text-blue-950 bg-blue-50/70 p-2.5 rounded-lg border border-blue-100 mb-3 leading-relaxed">
                    «{art.principle}»
                  </p>
                  
                  <div className="space-y-2 text-xs text-stone-600">
                    <div>
                      <strong className="text-stone-800 block mb-0.5">Fundamentación Jurídica:</strong>
                      <p className="leading-relaxed">{art.legalJustification}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-start gap-2 text-[11px] text-amber-900 bg-amber-50/60 p-2.5 rounded-lg">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block">Límite al Poder Soberano:</strong>
                    <span>{art.stateLimit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Podcast Player & Audio Experience */
        <div className="space-y-6">
          <div className="bg-stone-900 text-stone-100 rounded-xl p-6 lg:p-8 shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-800 pb-5 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md">
                  <Radio className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                    Podcast Oficial del Think Tank • 2 a 3 minutos
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white">
                    {podcast.title}
                  </h3>
                  <p className="text-xs text-stone-400">
                    {podcast.subtitle}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-stone-400 block">Locución & Guion:</span>
                <span className="text-xs font-semibold text-stone-200">{podcast.speaker}</span>
              </div>
            </div>

            {/* Audio Waveform Simulation */}
            <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 mb-6">
              <div className="h-14 flex items-center justify-center gap-1 overflow-hidden">
                {Array.from({ length: 48 }).map((_, i) => {
                  const barHeight = isPlaying 
                    ? Math.max(15, Math.sin(i * 0.4 + currentTime * 3) * 45 + 50) 
                    : 15;
                  return (
                    <div
                      key={i}
                      className="w-1.5 bg-linear-to-t from-blue-600 to-indigo-400 rounded-full transition-all duration-150"
                      style={{ height: `${barHeight}%` }}
                    />
                  );
                })}
              </div>

              {/* Progress Slider */}
              <div className="mt-4 space-y-1.5">
                <input
                  type="range"
                  min="0"
                  max={podcast.durationSeconds}
                  value={currentTime}
                  onChange={(e) => {
                    const newT = Number(e.target.value);
                    setCurrentTime(newT);
                    const segIdx = Math.min(
                      Math.floor(newT / (podcast.durationSeconds / podcast.transcriptSegments.length)),
                      podcast.transcriptSegments.length - 1
                    );
                    setActiveSegmentIndex(segIdx);
                  }}
                  className="w-full accent-blue-500 cursor-pointer h-1.5 bg-stone-800 rounded-lg"
                />
                <div className="flex justify-between text-xs font-mono text-stone-400">
                  <span>{formatTime(currentTime)}</span>
                  <span>{podcast.durationLabel}</span>
                </div>
              </div>
            </div>

            {/* Controls Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center transition-all shadow-md active:scale-95"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </button>
                <button
                  onClick={restartAudio}
                  title="Reiniciar reproducción"
                  className="p-2.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  title={isMuted ? 'Activar voz' : 'Silenciar voz'}
                  className="p-2.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-stone-400">Velocidad:</span>
                {[1, 1.25, 1.5].map((speed) => (
                  <button
                    key={speed}
                    onClick={() => setPlaybackSpeed(speed)}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      playbackSpeed === speed
                        ? 'bg-blue-600 text-white font-bold'
                        : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                    }`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Key Points & Synchronized Transcript */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-4 bg-white border border-stone-200 rounded-xl p-5 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600" /> Puntos Clave del Episodio
              </h4>
              <ul className="space-y-2.5">
                {podcast.audioKeyPoints.map((point, idx) => (
                  <li key={idx} className="text-xs text-stone-700 flex items-start gap-2 leading-relaxed">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-900 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-8 bg-white border border-stone-200 rounded-xl p-5 shadow-xs">
              <div className="flex items-center justify-between border-b border-stone-100 pb-3 mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-stone-600" /> Transcripción Sincronizada
                </h4>
                <span className="text-[11px] text-stone-400">
                  Haz click en un párrafo para saltar a ese fragmento
                </span>
              </div>

              <div className="space-y-3">
                {podcast.transcriptSegments.map((segment, index) => {
                  const isCurrent = index === activeSegmentIndex;
                  return (
                    <div
                      key={index}
                      onClick={() => jumpToSegment(index)}
                      className={`p-3.5 rounded-lg border transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-blue-50/80 border-blue-400 ring-1 ring-blue-400/50'
                          : 'bg-stone-50/60 border-stone-200/80 hover:bg-stone-100/70'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] mb-1 font-mono">
                        <span className="font-bold text-blue-900">{segment.speaker}</span>
                        <span className="text-stone-500 bg-white px-2 py-0.5 rounded border border-stone-200">
                          {segment.time}
                        </span>
                      </div>
                      <p className="text-xs text-stone-800 leading-relaxed font-serif">
                        {segment.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
