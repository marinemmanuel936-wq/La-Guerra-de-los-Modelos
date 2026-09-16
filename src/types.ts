export type RoleId = 
  | 'teorico' 
  | 'socioeconomico' 
  | 'juridico' 
  | 'tocqueville' 
  | 'contrapunto' 
  | 'sintetizador';

export interface TeamMember {
  roleId: RoleId;
  roleTitle: string;
  studentName: string;
  email?: string;
  avatarSeed?: string;
  deliverableTitle: string;
  status: 'Completado' | 'En revisión' | 'Publicado';
}

export interface OntologyNode {
  id: string;
  category: 'Ontología del Sujeto' | 'Ética y Teleología' | 'Epistemología Política' | 'Bien Común y Sociedad';
  label: string;
  shortDefinition: string;
  extendedText: string;
  quote: {
    text: string;
    author: string;
    work: string;
    year: number | string;
    sourceUrl?: string;
  };
  connectedTo: string[];
}

export interface EconomicIndicator {
  dimension: 'Propiedad Privada' | 'Medios de Producción' | 'Regulación del Mercado' | 'Distribución de la Riqueza y Trabajo';
  posture: string;
  score: number; // 0 to 100 on a spectrum
  leftLabel: string;
  rightLabel: string;
  description: string;
  mechanism: string;
  historicalExample: string;
}

export interface DecalogueArticle {
  number: number;
  title: string;
  principle: string;
  legalJustification: string;
  stateLimit: string;
}

export interface PodcastData {
  title: string;
  subtitle: string;
  speaker: string;
  durationSeconds: number;
  durationLabel: string;
  audioKeyPoints: string[];
  transcriptSegments: {
    time: string;
    speaker: string;
    text: string;
  }[];
}

export interface TocquevilleAlert {
  riskFactor: string;
  tocquevilleQuote: string;
  workReference: string;
  vulnerabilityAnalysis: string;
  mitigationMechanism: string;
  severityLevel: 'Alto' | 'Moderado' | 'Crítico';
}

export interface ForumArgument {
  id: string;
  authorName: string;
  authorRole: string;
  targetModel: string;
  thesisRefuted: string;
  philosophicalFlaw: string;
  counterArgument: string;
  solidarityScore: number;
  tags: string[];
  timestamp: string;
  replies?: {
    id: string;
    authorName: string;
    authorModel: string;
    text: string;
    timestamp: string;
  }[];
}

export interface ManifestoPillar {
  title: string;
  roleContribution: string;
  actionPrinciple: string;
  institutionalProposal: string;
}

export interface ManifestoData {
  crisisTitle: string;
  crisisContext: string;
  preamble: string;
  diagnostic: string;
  pillars: ManifestoPillar[];
  resolutiveClause: string;
  signatures: {
    roleTitle: string;
    studentName: string;
  }[];
}

export interface PoliticalModel {
  id: string;
  name: string;
  thinkers: string[];
  era: string;
  coreMotto: string;
  badge: string;
  colorScheme: {
    primary: string;
    accent: string;
    border: string;
    badgeBg: string;
  };
  shortSummary: string;
  teorico: {
    nodes: OntologyNode[];
    coreOntologySummary: string;
  };
  socioeconomico: {
    indicators: EconomicIndicator[];
    summaryAnalysis: string;
    comparativeTable: {
      factor: string;
      modelView: string;
      rivalCapitalistView: string;
      rivalCollectivistView: string;
    }[];
  };
  juridico: {
    libertyConcept: 'Libertad Negativa y de Daño' | 'Emancipación Material y Real' | 'No-Dominación Republicana' | 'Equidad Estructural y Bienes Primarios';
    libertyDescription: string;
    decalogue: DecalogueArticle[];
    podcast: PodcastData;
  };
  tocqueville: {
    thesisConfrontation: string;
    alerts: TocquevilleAlert[];
    syntheticVerdict: string;
  };
  contrapunto: {
    initialRefutations: ForumArgument[];
  };
  sintetizador: ManifestoData;
}
