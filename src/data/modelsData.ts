import { PoliticalModel, TeamMember } from '../types';

export const DEFAULT_TEAM_MEMBERS: TeamMember[] = [
  {
    roleId: 'teorico',
    roleTitle: 'Teórico Principal',
    studentName: 'Celeste Píriz',
    deliverableTitle: 'Mapa Conceptual Interactivo & Bases Ontológicas',
    status: 'Publicado',
    email: 'celeste.piriz@thinktank.edu'
  },
  {
    roleId: 'socioeconomico',
    roleTitle: 'Analista Socioeconómico',
    studentName: 'Alexander Montoya',
    deliverableTitle: 'Cuadro Comparativo & Matriz de Distribución de Riqueza',
    status: 'Publicado',
    email: 'alexander.montoya@thinktank.edu'
  },
  {
    roleId: 'juridico',
    roleTitle: 'Crítico Jurídico-Político',
    studentName: 'Valeria Montoya',
    deliverableTitle: 'Decálogo Constitutivo & Podcast "Voz de la Libertad"',
    status: 'Publicado',
    email: 'valeria.montoya@thinktank.edu'
  },
  {
    roleId: 'tocqueville',
    roleTitle: 'Defensor de Tocqueville',
    studentName: 'Salome Urrego',
    deliverableTitle: 'Alerta Crítica: Individualismo vs. Despotismo Tutelar',
    status: 'Publicado',
    email: 'salome.urrego@thinktank.edu'
  },
  {
    roleId: 'contrapunto',
    roleTitle: 'Debatiente de Contrapunto',
    studentName: 'Yann Carlos Castaño',
    deliverableTitle: 'Ágora de Refutación en Vivo & Réplicas Plenarias',
    status: 'Publicado',
    email: 'yann.castano@thinktank.edu'
  },
  {
    roleId: 'sintetizador',
    roleTitle: 'Sintetizador Relator',
    studentName: 'Emmanuel Marín',
    deliverableTitle: 'Manifiesto Político Siglo XXI ante la Crisis de la IA',
    status: 'Publicado',
    email: 'emmanuel.marin@thinktank.edu'
  }
];

export const CRISIS_OPTIONS = [
  {
    id: 'ia_trabajo',
    title: 'La Automatización por IA, Concentración Algorítmica y Desarticulación del Trabajo',
    year: '2026',
    description: 'La sustitución masiva del empleo cognitivo por grandes modelos de IA y monopolios de cómputo que amenazan la autonomía individual y la distribución de la renta social.'
  },
  {
    id: 'clima_geopolitica',
    title: 'Emergencia Climática Global y la Tragedia de los Bienes Comunes',
    year: '2026',
    description: 'El colapso ecológico acelerado que desafía la soberanía de los Estados-nación y la distribución intergeneracional de sacrificios económicos.'
  },
  {
    id: 'hipervigilancia',
    title: 'El Capitalismo de Vigilancia y la Erosión del Espacio Público Deliberativo',
    year: '2026',
    description: 'La captura de la atención y la opinión pública por plataformas digitales opacas que fragmentan el tejido civil en burbujas polarizadas.'
  }
];

export const POLITICAL_MODELS: PoliticalModel[] = [
  {
    id: 'liberalismo_social',
    name: 'Liberalismo Social y Utilitarismo Cualitativo',
    thinkers: ['John Stuart Mill', 'John Locke', 'Harriet Taylor Mill'],
    era: 'Siglos XVII - XIX (Modernidad Ilustrada)',
    coreMotto: '«La sola parte de la conducta de cada uno por la que es responsable ante la sociedad es la que se refiere a los demás. En la parte que le concierne meramente a él, su independencia es, de derecho, absoluta.»',
    badge: 'Modelo Asignado Primario',
    colorScheme: {
      primary: 'amber-700',
      accent: 'amber-600',
      border: 'border-amber-200',
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-300'
    },
    shortSummary: 'Defiende la soberanía inalienable del individuo bajo el Principio del Daño, el desarrollo armónico de las facultades humanas superiores y una economía de libre mercado atemperada por cooperativismo y educación universal.',
    teorico: {
      coreOntologySummary: 'El ser humano es concebido como un ser progresivo dotado de libre albedrío, cuya dignidad reside en el cultivo autónomo de su individualidad y facultades superiores (intelectuales, morales y estéticas), rechazando tanto el paternalismo estatal como la homogeneización gregaria.',
      nodes: [
        {
          id: 'sujeto_progresivo',
          category: 'Ontología del Sujeto',
          label: 'El Individuo como «Ser Progresivo»',
          shortDefinition: 'La naturaleza humana no es una máquina acabada sino un árbol que requiere crecer en libertad según sus fuerzas internas.',
          extendedText: 'Frente al mecanicismo cartesiano o la reducción biológica, Mill postula que el ser humano posee una capacidad plástica de autoperfeccionamiento. La individualidad es el componente supremo del bienestar humano y la fuente primordial del progreso de la especie.',
          quote: {
            text: 'La naturaleza humana no es una máquina que se construye según un modelo y dispuesta a hacer exactamente el trabajo que le sea prescrito, sino un árbol que tiene que crecer y desarrollarse por todos lados según la tendencia de las fuerzas interiores que hacen de él una cosa viva.',
            author: 'John Stuart Mill',
            work: 'Sobre la libertad (On Liberty), Cap. III',
            year: 1859,
            sourceUrl: 'https://www.gutenberg.org/ebooks/34901'
          },
          connectedTo: ['principio_dano', 'utilitarismo_cualitativo']
        },
        {
          id: 'utilitarismo_cualitativo',
          category: 'Ética y Teleología',
          label: 'Utilitarismo Cualitativo & Placeres Superiores',
          shortDefinition: 'Diferenciación entre placeres cuantitativos corporales y placeres cualitativos del intelecto y la solidaridad.',
          extendedText: 'Mill refuta la acusación de que el utilitarismo es una doctrina «propia de cerdos». Introduce una distinción jerárquica de placeres: ningún ser humano inteligente consentiría en volverse un tonto por más satisfecho que estuviera.',
          quote: {
            text: 'Es mejor ser un ser humano insatisfecho que un cerdo satisfecho; es mejor ser Sócrates insatisfecho que un tonto satisfecho. Y si el tonto o el cerdo son de distinta opinión, es porque solo conocen su propio lado de la cuestión.',
            author: 'John Stuart Mill',
            work: 'El utilitarismo (Utilitarianism), Cap. II',
            year: 1861,
            sourceUrl: 'https://plato.stanford.edu/entries/mill/'
          },
          connectedTo: ['sujeto_progresivo', 'bien_comun']
        },
        {
          id: 'principio_dano',
          category: 'Epistemología Política',
          label: 'El Principio del Daño (Harm Principle)',
          shortDefinition: 'El único fin por el cual es justificable que la sociedad o el Estado coaccione a un individuo es impedir el daño a terceros.',
          extendedText: 'Constituye la frontera infranqueable de la soberanía estatal. El propio bien físico o moral del individuo nunca es una justificación suficiente para la coacción pública o comunitaria. El paternalismo es una afrenta a la condición de agente racional.',
          quote: {
            text: 'El único fin por el cual es justificable que la humanidad, individual o colectivamente, se entrometa en la libertad de acción de uno cualquiera de sus miembros, es la propia protección. Que la única finalidad por la cual el poder puede ser ejercido sobre un miembro de una comunidad civilizada contra su voluntad es evitar que perjudique a los demás.',
            author: 'John Stuart Mill',
            work: 'Sobre la libertad, Cap. I',
            year: 1859,
            sourceUrl: 'https://www.gutenberg.org/ebooks/34901'
          },
          connectedTo: ['sujeto_progresivo', 'bien_comun']
        },
        {
          id: 'bien_comun',
          category: 'Bien Común y Sociedad',
          label: 'Experimentos de Vida y Libre Discusión',
          shortDefinition: 'La sociedad avanza mediante la libre confrontación de ideas y la tolerancia a modos disidentes de existencia.',
          extendedText: 'Silenciar una opinión es robar a la raza humana tanto si la opinión es verdadera como si es falsa. En el error se templa la verdad viva, evitando que degenere en dogma muerto. La diversidad y la disidencia son los baluartes del bien común republicano.',
          quote: {
            text: 'Si toda la humanidad, menos una sola persona, fuera de una misma opinión, la humanidad no tendría más derecho a silenciar a esa única persona del que ella tendría a silenciar a la humanidad si tuviese el poder de hacerlo.',
            author: 'John Stuart Mill',
            work: 'Sobre la libertad, Cap. II',
            year: 1859,
            sourceUrl: 'https://plato.stanford.edu/entries/mill-moral-political/'
          },
          connectedTo: ['utilitarismo_cualitativo', 'principio_dano']
        }
      ]
    },
    socioeconomico: {
      summaryAnalysis: 'El liberalismo social milliano no es un laissez-faire despiadado. Reconoce la legitimidad inicial de la propiedad basada en el fruto del trabajo, pero aboga con vigor por la limitación de herencias desmedidas, la propiedad pública o cooperativa de recursos naturales monopolizados, y el tránsito voluntario hacia asociaciones cooperativas de trabajadores.',
      indicators: [
        {
          dimension: 'Propiedad Privada',
          posture: 'Garantizada pero con límites estrictos a la acumulación hereditaria no ganada',
          score: 65,
          leftLabel: 'Colectivización Total',
          rightLabel: 'Propiedad Absoluta Ilimitada',
          description: 'Se protege el derecho a los frutos del esfuerzo propio, pero se cuestiona el derecho ilimitado a transmitir herencias que perpetúan dinastías de ocio improductivo.',
          mechanism: 'Impuestos progresivos a sucesiones y rentas de la tierra sin mejoras personales.',
          historicalExample: 'Capítulos de Mill sobre el Socialismo y Principios de Economía Política (Libro IV).'
        },
        {
          dimension: 'Medios de Producción',
          posture: 'Evolución hacia el cooperativismo y empresas autogestionadas en competencia abierta',
          score: 55,
          leftLabel: 'Monopolio Estatal',
          rightLabel: 'Concentración Oligopólica Privada',
          description: 'La forma de asociación que prevalecerá no será la del amo sobre los dependientes, sino la asociación de los trabajadores mismos en términos de igualdad.',
          mechanism: 'Crédito preferencial y fomento de cooperativas de producción y consumo.',
          historicalExample: 'El movimiento cooperativista de Rochdale elogiado formalmente por Mill.'
        },
        {
          dimension: 'Regulación del Mercado',
          posture: 'Competencia salvaguardada con intervención estatal contra monopolios naturales y externalidades',
          score: 60,
          leftLabel: 'Planificación Quinquenal Rígida',
          rightLabel: 'Desregulación Salvaje',
          description: 'El mercado libre es un motor eficiente de innovación y distribución, pero falla ante monopolios (ferrocarriles, aguas, gas) y asimetrías de información vital.',
          mechanism: 'Estatuto regulatorio estricto, fijación de estándares de salubridad y jornadas laborales máximas para proteger a los vulnerables.',
          historicalExample: 'Regulación de servicios públicos y Factory Acts victorianas defendidas por Mill.'
        },
        {
          dimension: 'Distribución de la Riqueza y Trabajo',
          posture: 'Educación pública universal de élite y piso de subsistencia para la emancipación cívica',
          score: 70,
          leftLabel: 'Igualdad Mecánica de Renta',
          rightLabel: 'Darwinismo Social',
          description: 'Nadie puede florecer si está esclavizado por la miseria física. La distribución de la riqueza es una cuestión de instituciones humanas modificables, no de leyes naturales inmutables.',
          mechanism: 'Financiamiento público de la educación universal obligatoria y fondo de contingencia contra la indigencia.',
          historicalExample: 'Distinción epistemológica entre las leyes de producción (físicas) y las leyes de distribución (convencionales).'
        }
      ],
      comparativeTable: [
        {
          factor: 'Origen de la Riqueza Legítima',
          modelView: 'Trabajo, talento y aplicación individual libre de monopolios artificiales.',
          rivalCapitalistView: 'Cualquier transacción voluntaria de mercado, sin importar herencias ni rentas pasivas.',
          rivalCollectivistView: 'El plusvalor generado exclusivamente por la clase trabajadora proletaria.'
        },
        {
          factor: 'Tenencia de la Tierra',
          modelView: 'La tierra no fue creada por ningún hombre; la renta no ganada debe tributar para beneficio social.',
          rivalCapitalistView: 'Título de propiedad inmobiliaria pleno y negociable sin gravámenes correctivos.',
          rivalCollectivistView: 'Nacionalización integral del suelo agrario y urbano.'
        },
        {
          factor: 'Rol del Trabajo Asalariado',
          modelView: 'Fase de transición histórica hacia la asociación de iguales en cooperativas.',
          rivalCapitalistView: 'Mercancía contractual permanente regulada por la oferta y la demanda.',
          rivalCollectivistView: 'Explotación estructural inherente que debe ser abolida revolucionariamente.'
        }
      ]
    },
    juridico: {
      libertyConcept: 'Libertad Negativa y de Daño',
      libertyDescription: 'La libertad no es simple licencia caótica, sino la ausencia de interferencia coercitiva sobre el plan de vida del sujeto, complementada con el deber ético de respetar la autonomía idéntica de todo conciudadano.',
      decalogue: [
        {
          number: 1,
          title: 'Inviolabilidad de la Conciencia y Pensamiento',
          principle: 'La libertad de profesar, investigar y publicar cualquier doctrina es absoluta e incondicional.',
          legalJustification: 'El silenciamiento de cualquier doctrina despoja a la sociedad de contrastar la verdad.',
          stateLimit: 'El Estado jamás tipificará como delito la opinión filosófica, científica o moral.'
        },
        {
          number: 2,
          title: 'Frontera del Principio del Daño',
          principle: 'Ninguna ley penal ni administrativa puede sancionar actos que no lesionen derechos concretos de terceros.',
          legalJustification: 'El consentimiento voluntario entre adultos no engendra injusticia pública.',
          stateLimit: 'Quedan prohibidas las leyes suntuarias, morales o paternalistas.'
        },
        {
          number: 3,
          title: 'Derecho a los Experimentos de Vida',
          principle: 'Los ciudadanos gozan de la prerrogativa de trazar sus proyectos de vida aunque resulten extravagantes.',
          legalJustification: 'La originalidad y la disidencia son la salvaguarda contra el estancamiento social.',
          stateLimit: 'La ley prohíbe a las mayorías coaccionar la moda, el arte o el culto pacífico.'
        },
        {
          number: 4,
          title: 'Garantía del Hábeas Corpus y Juicio Justo',
          principle: 'Toda privación cautelar de libertad exige causa probable, orden judicial expedita y defensa técnica.',
          legalJustification: 'El poder punitivo es el arma más peligrosa del Leviatán frente al individuo.',
          stateLimit: 'Interdicción absoluta de tribunales de excepción y detenciones secretas.'
        },
        {
          number: 5,
          title: 'Separación Rígida de Poderes y Frenos Constitucionales',
          principle: 'El legislativo, ejecutivo y judicial deben fiscalizarse mutuamente en un sistema de pesos y contrapesos.',
          legalJustification: 'La concentración de potestades conduce matemáticamente al despotismo arbitrario.',
          stateLimit: 'Ningún decreto ejecutivo puede suspender garantías sin refrendo parlamentario calificado.'
        },
        {
          number: 6,
          title: 'Soberanía sobre el Propio Cuerpo y Mente',
          principle: 'Sobre su propio cuerpo y mente, el individuo es el único soberano legítimo.',
          legalJustification: 'La corporalidad es la sede ontológica primaria de la personalidad.',
          stateLimit: 'Prohibición de intervenciones biomédicas forzosas sin consentimiento informado.'
        },
        {
          number: 7,
          title: 'Derecho Irrestricto de Asociación y Sindicación',
          principle: 'Los ciudadanos pueden federarse pacíficamente para cualquier propósito civil, laboral o político.',
          legalJustification: 'Las asociaciones intermedias impiden el aislamiento del individuo frente al Estado.',
          stateLimit: 'El Estado no puede exigir autorización previa para crear sindicatos o asociaciones civiles.'
        },
        {
          number: 8,
          title: 'Educación Cívica Universal Garantizada por el Fisco',
          principle: 'El Estado debe asegurar que ningún infante crezca sin instrucción cívica y científica básica.',
          legalJustification: 'Un ciudadano analfabeto no es libre; es presa fácil de demagogos y explotadores.',
          stateLimit: 'El Estado financia pero no monopoliza el currículo, garantizando pluralismo escolar.'
        },
        {
          number: 9,
          title: 'Limitación Jurídica de Monopolios Artificiales',
          principle: 'La ley combatirá los cárteles y monopolios que fijen precios predatorios o asfixien la competencia.',
          legalJustification: 'La concentración monopólica destruye la misma libertad económica que finge defender.',
          stateLimit: 'Intervención judicial antimonopolio y reversión de concesiones abusivas.'
        },
        {
          number: 10,
          title: 'Interdicción de la Tiranía de la Mayoría',
          principle: 'Los derechos fundamentales son contramayoritarios y no pueden ser derogados por referéndum.',
          legalJustification: 'La justicia no es la voluntad ciega del 51%, sino el respeto a la condición humana de todos.',
          stateLimit: 'Control de constitucionalidad judicial independiente sobre toda ley del Congreso.'
        }
      ],
      podcast: {
        title: 'El Ágora de la Razón: Decálogo de la Libertad en la Era Digital',
        subtitle: 'Episodio 01: La defensa intransigente del individuo frente al conformismo y el algoritmo',
        speaker: 'Valentina Restrepo Gil (Crítico Jurídico-Político)',
        durationSeconds: 154,
        durationLabel: '2 min 34 seg',
        audioKeyPoints: [
          'Fundamento: Por qué la libertad no es regalo del Estado sino conquista del ser humano',
          'El Principio del Daño como muralla contra el paternalismo digital y moral',
          'El riesgo de tolerar que las mayorías decidan qué verdades son admisibles en el ágora pública',
          'Llamado a la rebelión reflexiva: pensar por uno mismo como deber republicano'
        ],
        transcriptSegments: [
          {
            time: '0:00 - 0:28',
            speaker: 'Valentina Restrepo',
            text: '«Bienvenidos al laboratorio sonoro de nuestro Think Tank. Hoy sustentamos el corazón normativo de nuestro modelo: ¿por qué la libertad individual no es un lujo negociable en tiempos de crisis, sino la premisa irreductible de cualquier sociedad justa? No defendemos el capricho egoísta, sino la soberanía inalienable de la persona humana.»'
          },
          {
            time: '0:29 - 1:04',
            speaker: 'Valentina Restrepo',
            text: '«John Stuart Mill nos legó en 1859 una advertencia que hoy retumba con fuerza apocalíptica: cuando el Estado o la turba moral pretenden coaccionar a un ciudadano por su propio bien, están cometiendo la más infame de las usurpaciones. El Principio del Daño no es una fórmula legalista abstracta; es el cortafuegos definitivo entre la autonomía ilustrada y la tutela totalitaria.»'
          },
          {
            time: '1:05 - 1:48',
            speaker: 'Valentina Restrepo',
            text: '«En nuestro Decálogo Constitutivo consagramos que ninguna mayoría, por aplastante que sea en las urnas o en las redes sociales, tiene derecho a amordazar la voz del disidente. La verdad sólo permanece viva cuando se enfrenta al desafío del error; cuando prohibimos la duda, no coronamos la sabiduría, entronizamos el dogma fósil.»'
          },
          {
            time: '1:49 - 2:34',
            speaker: 'Valentina Restrepo',
            text: '«Frente a los cantos de sirena de quienes prometen seguridad algorítmica a cambio de resignar la privacidad y el pensamiento crítico, proclamamos: sólo un pueblo de ciudadanos libres, ilustrados y celosos de sus límites jurídicos podrá gobernar la técnica sin ser devorado por ella. Muchas gracias.»'
          }
        ]
      }
    },
    tocqueville: {
      thesisConfrontation: 'Alexis de Tocqueville, en La Democracia en América (1835-1840), pronosticó el peligro mortal que anida en las sociedades libres e igualitarias: el individualismo egoísta que desemboca en el Despotismo Democrático o Tutelar.',
      syntheticVerdict: 'Vulnerable pero perfectible: El liberalismo social reconoce que su mayor punto ciego es la atomización del ciudadano. Para neutralizar a Tocqueville, no abandona la libertad, sino que la fortifica mediante cooperativas obligadas al diálogo, cuerpos intermedios descentralizados y participación municipal activa.',
      alerts: [
        {
          riskFactor: 'El Despotismo Tutelar («Un Poder Inmenso y Protector»)',
          tocquevilleQuote: '«Veo una multitud innumerable de hombres iguales y semejantes, que giran sin cesar sobre sí mismos para procurarse pequeños y vulgares placeres con que saciar su alma... Sobre ellos se eleva un poder inmenso y tutelar, que se encarga él solo de asegurar sus goces y de vigilar su suerte. Es absoluto, detallado, regular, previsor y dulce.»',
          workReference: 'La Democracia en América, Vol. II, Parte IV, Cap. VI',
          vulnerabilityAnalysis: 'Si el Estado de bienestar provee todo el confort y el mercado satisface los placeres menores, los ciudadanos abdican de la fatiga de gobernarse a sí mismos, prefiriendo la servidumbre regalada a la libertad vigilante.',
          mitigationMechanism: 'Descentralización administrativa radical, presupuestos participativos barriales e incompatibilidad de mandatos de por vida.',
          severityLevel: 'Crítico'
        },
        {
          riskFactor: 'El Aislamiento Individualista y la Muerte del Vínculo Cívico',
          tocquevilleQuote: '«El individualismo es un sentimiento reflexivo y apacible que induce a cada ciudadano a aislarse de la masa de sus semejantes y a retirarse aparte con su familia y amigos; de suerte que, tras haberse creado así una pequeña sociedad para su uso, abandona gustoso la gran sociedad a sí misma.»',
          workReference: 'La Democracia en América, Vol. II, Parte II, Cap. II',
          vulnerabilityAnalysis: 'El énfasis en la esfera privada del liberalismo puede degenerar en que cada quien viva como un extranjero a la suerte de los demás, dejando el Estado en manos de tecnócratas descontrolados.',
          mitigationMechanism: 'Obligatoriedad de servicio cívico comunitario voluntario bonificado y fomento fiscal masivo a clubes, sindicatos y asociaciones libres.',
          severityLevel: 'Alto'
        },
        {
          riskFactor: 'La Tiranía de la Mayoría y la Censura Inmaterial',
          tocquevilleQuote: '«En América, la mayoría traza un círculo formidable alrededor del pensamiento. Dentro de esos límites el escritor es libre; pero ¡ay de él si se atreve a salir de ellos!... Se le abren todas las puertas, pero nadie lo mira; sus amigos mismos lo esquivan.»',
          workReference: 'La Democracia en América, Vol. I, Parte II, Cap. VII',
          vulnerabilityAnalysis: 'El mayor peligro para la libertad no es el cadalso del rey, sino el linchamiento moral silencioso de la opinión pública unánime.',
          mitigationMechanism: 'Cláusulas constitucionales pétreas contramayoritarias y blindaje judicial estricto para voces y minorías impopulares.',
          severityLevel: 'Moderado'
        }
      ]
    },
    contrapunto: {
      initialRefutations: []
    },
    sintetizador: {
      crisisTitle: 'La Inteligencia Artificial Autónoma, Concentración Algorítmica y Desarticulación del Trabajo',
      crisisContext: 'Crisis del Siglo XXI: La irrupción de sistemas de IA soberanos concentrados en megacorporaciones tecnológicas desafía la autonomía de la voluntad humana, concentra el plusvalor cognitivo global y amenaza con sumir a la ciudadanía en una obsolescencia remunerativa sin precedentes.',
      preamble: 'Nosotros, los investigadores y filósofos políticos convocados en este Think Tank, declaramos que el desafío supremo del siglo XXI no reside en el poder de cómputo de las máquinas, sino en la claudicación de la soberanía del ser humano. Cuando el algoritmo predice, selecciona y censura nuestro pensamiento, no asistimos a un progreso técnico neutral, sino a la más refinada encarnación del Despotismo Tutelar que profetizó Tocqueville.',
      diagnostic: 'Diagnosticamos una triple fractura civilizatoria: 1) Fractura Ontológica: el sujeto racional es degradado a insumo de entrenamiento y consumidor pasivo de dopamina sintética. 2) Fractura Socioeconómica: los gigantes de silicio extraen el conocimiento acumulado por la humanidad sin remuneración comunitaria, instaurando un feudalismo de cómputo. 3) Fractura Jurídica: la opacidad de las «cajas negras» gubernamentales y corporativas viola el derecho sagrado al debido proceso y a la rendición pública de cuentas.',
      pillars: [
        {
          title: 'I. Soberanía Cognitiva y Principio del Daño Algorítmico (Aporte del Teórico)',
          roleContribution: 'Basado en las tesis ontológicas de John Stuart Mill sobre el individuo como ser progresivo.',
          actionPrinciple: 'Todo ciudadano posee el derecho inalienable a la no-manipulación neuronal y a la inteligibilidad de las decisiones que alteren su destino.',
          institutionalProposal: 'Prohibición absoluta de sistemas de recomendación opacos diseñados para la adicción conductual infantil y auditoría obligatoria de código abierto en algoritmos de asignación de servicios públicos.'
        },
        {
          title: 'II. Dividendo Tecnológico y Fondo de Riqueza Común de Cómputo (Aporte del Analista Socioeconómico)',
          roleContribution: 'Basado en la doctrina milliana sobre la renta de la tierra aplicada ahora al patrimonio de datos colectivos.',
          actionPrinciple: 'Puesto que los grandes modelos fueron entrenados con la biblioteca y el lenguaje común de la especie, sus rentas monopólicas pertenecen al procomún.',
          institutionalProposal: 'Creación de un Dividendo Ciudadano Universal de Innovación financiado con un canon del 15% sobre las ganancias extraordinarias del cómputo propietario, reinvertido en cooperativas tecnológicas de trabajadores.'
        },
        {
          title: 'III. Hábeas Data Constitucional y Prohibición del Juez Sintético (Aporte del Crítico Jurídico)',
          roleContribution: 'Consagrado en el Decálogo Constitutivo: Artículos 4 y 6 sobre debido proceso e inviolabilidad personal.',
          actionPrinciple: 'Ninguna privación de libertad, diagnóstico médico vinculante o sanción penal podrá emanar exclusivamente de una inferencia matemática automatizada.',
          institutionalProposal: 'Garantía del Derecho al Juicio por Humanos y consagración del Hábeas Data Neuronal en los tratados internacionales de derechos fundamentales.'
        },
        {
          title: 'IV. Antídoto al Despotismo Algorítmico y Reanimación del Vínculo Cívico (Aporte del Defensor de Tocqueville)',
          roleContribution: 'Frente a la advertencia del aislamiento en pantallas y el repliegue apático del ciudadano.',
          actionPrinciple: 'La democracia no subsiste en la soledad del feed personalizado; exige el encuentro físico y deliberativo en el espacio público común.',
          institutionalProposal: 'Presupuestos públicos destinados a casas de deliberación ciudadana presencial, asambleas de sorteo cívico y desconexión algorítmica laboral protegida por ley.'
        },
        {
          title: 'V. Rechazo al Neo-Ludismo y a la Estatización Totalitaria (Aporte del Debatiente de Contrapunto)',
          roleContribution: 'Refutación dialéctica contra las salidas fáciles: ni prohibición ciega de la tecnología ni entrega de la llave del código al Estado policial.',
          actionPrinciple: 'Ni monopolio privado rapaz ni leviatán estatal vigilante: democratización radical de la infraestructura de cómputo en federaciones descentralizadas.',
          institutionalProposal: 'Creación de Infraestructuras Digitales Públicas Interoperables bajo gobernanza multipartita de científicos, usuarios y comunidades locales.'
        }
      ],
      resolutiveClause: 'POR TANTO, este Think Tank proclama que la técnica debe estar al servicio de la dignidad del individuo y no el individuo al servicio de la tasa de retorno de los servidores. Reafirmamos nuestro compromiso con la libertad reflexiva, el pluralismo disidente y la justicia social en este nuevo siglo.',
      signatures: [
        { roleTitle: 'Teórico Principal', studentName: 'Celeste Píriz' },
        { roleTitle: 'Analista Socioeconómico', studentName: 'Alexander Montoya' },
        { roleTitle: 'Crítico Jurídico-Político', studentName: 'Valeria Montoya' },
        { roleTitle: 'Defensor de Tocqueville', studentName: 'Salome Urrego' },
        { roleTitle: 'Debatiente de Contrapunto', studentName: 'Yann Carlos Castaño' },
        { roleTitle: 'Sintetizador Relator', studentName: 'Emmanuel Marín' }
      ]
    }
  },
  {
    id: 'materialismo_historico',
    name: 'Materialismo Histórico y Socialismo Crítico',
    thinkers: ['Karl Marx', 'Friedrich Engels', 'Antonio Gramsci'],
    era: 'Siglos XIX - XX (Crítica de la Modernidad Capitalista)',
    coreMotto: '«Los filósofos no han hecho más que interpretar de diversos modos el mundo, pero de lo que se trata es de transformarlo.»',
    badge: 'Modelo Alternativo 2',
    colorScheme: {
      primary: 'red-800',
      accent: 'red-700',
      border: 'border-red-200',
      badgeBg: 'bg-red-100 text-red-950 border-red-300'
    },
    shortSummary: 'Analiza la historia como la lucha dialéctica de clases condicionada por las relaciones de producción. Plantea la superación de la alienación y del fetichismo de la mercancía mediante la propiedad social y la hegemonía cultural de los desposeídos.',
    teorico: {
      coreOntologySummary: 'El ser humano se define por su praxis material: produce su propia existencia transformando la naturaleza a través del trabajo social. La conciencia individual está condicionada por su posición objetiva en la estructura de clases.',
      nodes: [
        {
          id: 'praxis_trabajo',
          category: 'Ontología del Sujeto',
          label: 'El Hombre como Ser de la Praxis (Gattungswesen)',
          shortDefinition: 'El trabajo es el acto de auto-creación del hombre; en el capitalismo se aliena al ser despojado del fruto de su labor.',
          extendedText: 'Marx rechaza el individualismo abstracto robinsoniano. La esencia humana no es una abstracción inherente al individuo aislado, sino el conjunto de las relaciones sociales.',
          quote: {
            text: 'En la producción social de su vida los hombres establecen determinadas relaciones necesarias e independientes de su voluntad... El modo de producción de la vida material condiciona el proceso de la vida social, política y espiritual.',
            author: 'Karl Marx',
            work: 'Prólogo a la Contribución a la Crítica de la Economía Política',
            year: 1859,
            sourceUrl: 'https://www.marxists.org/'
          },
          connectedTo: ['alienacion_plusvalor', 'hegemonia_gramsci']
        },
        {
          id: 'alienacion_plusvalor',
          category: 'Ética y Teleología',
          label: 'La Alienación y la Ley del Plusvalor',
          shortDefinition: 'La explotación económica no es un fallo moral del patrón, sino la ley interna de acumulación del capital.',
          extendedText: 'El trabajador se vuelve tanto más pobre cuanta más riqueza produce. La desvalorización del mundo humano crece en razón directa de la valorización del mundo de las cosas.',
          quote: {
            text: 'El capital es trabajo muerto que no sabe alimentarse, como los vampiros, más que chupando trabajo vivo, y que vive tanto más cuanto más trabajo chupa.',
            author: 'Karl Marx',
            work: 'El Capital, Tomo I, Cap. VIII',
            year: 1867,
            sourceUrl: 'https://www.marxists.org/'
          },
          connectedTo: ['praxis_trabajo', 'hegemonia_gramsci']
        },
        {
          id: 'hegemonia_gramsci',
          category: 'Epistemología Política',
          label: 'Hegemonía Cultural y Bloque Histórico',
          shortDefinition: 'El dominio de la clase dominante no se sostiene solo por la policía, sino por el consenso cultural forjado en la sociedad civil.',
          extendedText: 'Gramsci demuestra que la burguesía gobierna porque sus valores (individualismo posesivo, meritocracia ficticia) son asumidos como «sentido común» por los mismos oprimidos.',
          quote: {
            text: 'La crisis consiste justamente en que lo viejo muere y lo nuevo no puede nacer: y en este interregno se verifican los fenómenos morbosos más variados.',
            author: 'Antonio Gramsci',
            work: 'Cuadernos de la cárcel, Cuaderno 3',
            year: 1930,
            sourceUrl: 'https://www.marxists.org/'
          },
          connectedTo: ['praxis_trabajo', 'alienacion_plusvalor']
        }
      ]
    },
    socioeconomico: {
      summaryAnalysis: 'Abolición de la propiedad privada sobre los grandes medios de producción (fábricas, tierras, servidores, banca). Planificación social y democrática de la producción para satisfacer necesidades humanas reales, erradicando la producción anárquica orientada al beneficio monetario privado.',
      indicators: [
        {
          dimension: 'Propiedad Privada',
          posture: 'Distinción estricta: Supresión de la propiedad privada de medios de producción; respeto a la propiedad personal de uso y goce',
          score: 15,
          leftLabel: 'Propiedad Socializada',
          rightLabel: 'Propiedad Privada Absoluta',
          description: 'El comunismo no quita a nadie la facultad de apropiarse de los productos sociales; solo quita el poder de sojuzgar el trabajo ajeno por medio de esa apropiación.',
          mechanism: 'Socialización jurídica de las palancas económicas estratégicas.',
          historicalExample: 'El Manifiesto Comunista (1848).'
        },
        {
          dimension: 'Medios de Producción',
          posture: 'Control colectivo y administración por consejos de trabajadores y asambleas productivas',
          score: 10,
          leftLabel: 'Autogestión Colectiva',
          rightLabel: 'Accionariado Oligárquico',
          description: 'Los centros productivos pasan a ser bienes comunes gestionados sin intermediación de rentistas.',
          mechanism: 'Expropiación de monopolios privados y conversión en federaciones autogestionadas.',
          historicalExample: 'Los Soviets obreros originales de 1905/1917 y consejos de fábrica de Turín.'
        },
        {
          dimension: 'Regulación del Mercado',
          posture: 'Reemplazo del mercado ciego por planificación democrática computarizada y deliberada',
          score: 20,
          leftLabel: 'Planificación Democrática',
          rightLabel: 'Mano Invisible de Smith',
          description: 'No es la rentabilidad financiera sino el cálculo de necesidades humanas y límites ecológicos lo que guía la producción.',
          mechanism: 'Balance de insumo-producto público, producción para el uso y no para la especulación.',
          historicalExample: 'Proyectos de cibernética económica como Cybersyn (Chile, 1971-1973).'
        },
        {
          dimension: 'Distribución de la Riqueza y Trabajo',
          posture: '«De cada cual según sus capacidades, a cada cual según sus necesidades»',
          score: 95,
          leftLabel: 'Distribución Igualitaria Real',
          rightLabel: 'Polarización Ricos/Pobres',
          description: 'Desmercantilización absoluta de la salud, vivienda, educación, cultura y transporte.',
          mechanism: 'Salario social garantizado, reducción drástica de la jornada laboral para el ocio creativo y eliminación del plusvalor pasivo.',
          historicalExample: 'Crítica del Programa de Gotha (1875).'
        }
      ],
      comparativeTable: [
        {
          factor: 'Propósito del Aparato Productivo',
          modelView: 'Satisfacer directamente las necesidades vitales y el desarrollo integral de la comunidad.',
          rivalCapitalistView: 'Maximizar el retorno sobre el capital invertido y valorizar las acciones privadas.',
          rivalCollectivistView: 'Desmercantilización integral y control obrero.'
        },
        {
          factor: 'Mecanismo de Asignación',
          modelView: 'Deliberación democrática en asambleas de productores y consumidores.',
          rivalCapitalistView: 'Sistema de precios libre y puja entre oferta y demanda.',
          rivalCollectivistView: 'Planes coordinados sin extracción de plusvalía privada.'
        }
      ]
    },
    juridico: {
      libertyConcept: 'Emancipación Material y Real',
      libertyDescription: 'La libertad abstracta o «negativa» es una burla cuando el trabajador carece de pan y techo. La verdadera libertad comienza donde termina el reino de la necesidad impuesta por la explotación del hombre por el hombre.',
      decalogue: [
        {
          number: 1,
          title: 'Primacía del Derecho a la Existencia Digna',
          principle: 'La alimentación, vivienda, salud y cultura son derechos inalienables anteriores a cualquier título de propiedad.',
          legalJustification: 'No hay pacto social legítimo que condene al hambre al productor de la riqueza.',
          stateLimit: 'Queda prohibido el desahucio y la especulación sobre bienes vitales.'
        },
        {
          number: 2,
          title: 'Supresión de la Explotación del Trabajo Ajeno',
          principle: 'Ningún ser humano puede lucrar pasivamente apropiándose del trabajo no remunerado de otro.',
          legalJustification: 'El plusvalor es la fuente matemática de la subordinación de clases.',
          stateLimit: 'La ley no reconoce la validez jurídica de contratos leoninos de servidumbre salarial.'
        },
        {
          number: 3,
          title: 'Democracia Económica en el Lugar de Trabajo',
          principle: 'Las decisiones sobre qué, cómo y cuánto producir corresponden a los colectivos de trabajadores.',
          legalJustification: 'La democracia política es hipócrita si en la fábrica o empresa reina la tiranía patronal.',
          stateLimit: 'Obligatoriedad de cogestión y veto vinculante de los comités laborales.'
        },
        {
          number: 4,
          title: 'Control Social de la Banca y el Crédito',
          principle: 'El ahorro social se canaliza exclusivamente para el bienestar colectivo y la transición ecológica.',
          legalJustification: 'El capital financiero especulativo es el motor de las crisis destructivas periódicas.',
          stateLimit: 'Prohibición de usura especulativa y de rescates bancarios con fondos del pueblo.'
        },
        {
          number: 5,
          title: 'Revocabilidad Permanente de los Representantes',
          principle: 'Todo cargo público puede ser revocado en cualquier momento por sus electores y no devenga más que el salario de un obrero medio.',
          legalJustification: 'Inspirado en la Comuna de París de 1871 para evitar la casta burocrática.',
          stateLimit: 'Eliminación de dietas de privilegio, fueros e inmunidades corporativas.'
        },
        {
          number: 6,
          title: 'Socialización del Conocimiento y la Ciencia',
          principle: 'Las patentes sobre medicamentos, semillas y código tecnológico son de dominio público universal.',
          legalJustification: 'El saber acumulado es una creación colectiva de generaciones, no una patente privada.',
          stateLimit: 'Ilegalidad de patentes farmacéuticas que bloqueen la cura de enfermedades pandémicas.'
        },
        {
          number: 7,
          title: 'Igualdad Sustantiva e Interseccional',
          principle: 'Combate frontal contra la opresión patriarcal, colonial y racial entretejida con la dominación de clase.',
          legalJustification: 'No puede haber emancipación del proletariado sin la liberación total de la mujer trabajadora.',
          stateLimit: 'El Estado sanciona toda brecha salarial y discriminación estructural.'
        },
        {
          number: 8,
          title: 'Justicia Ambiental y Metabolismo Ecológico',
          principle: 'La producción se subordina a la regeneración de los ciclos biológicos de la Madre Tierra.',
          legalJustification: 'El capitalismo desgarra la brecha metabólica entre el suelo y el ser humano.',
          stateLimit: 'Prohibición de actividades extractivistas que comprometan cuencas hídricas.'
        },
        {
          number: 9,
          title: 'Internacionalismo Solidario',
          principle: 'La lucha por la justicia no se detiene en las fronteras nacionales; rechazo al imperialismo económico.',
          legalJustification: 'Los trabajadores del mundo comparten el mismo interés ontológico emancipador.',
          stateLimit: 'Prohibición de tratados de libre comercio que sometan la soberanía laboral a cortes arbitrales privadas.'
        },
        {
          number: 10,
          title: 'Extinción Gradual de la Coacción Estatal',
          principle: 'El horizonte final es una sociedad comunista libre de clases y de represión policial armada.',
          legalJustification: 'El Estado solo existe como instrumento de dominación clasista; sin clases, el gobierno de los hombres cede ante la administración de las cosas.',
          stateLimit: 'Transición hacia la autoorganización comunitaria comunal.'
        }
      ],
      podcast: {
        title: 'El Clarín de la Emancipación: De la Libertad Formal a la Real',
        subtitle: 'Episodio 02: Por qué el voto cada cuatro años no es libertad si tu jefe manda en tu vida',
        speaker: 'Voz del Colectivo Jurídico Marxista',
        durationSeconds: 165,
        durationLabel: '2 min 45 seg',
        audioKeyPoints: [
          'La falacia de la libertad contractual entre el hambriento y el dueño del capital',
          'El trabajo no como castigo bíblico sino como expresión de la creatividad humana',
          'La Comuna de París como antecedente jurídico de revocabilidad de delegados',
          'La liberación del tiempo: reducción de la jornada para dedicarse al arte, ciencia y política'
        ],
        transcriptSegments: [
          {
            time: '0:00 - 0:35',
            speaker: 'Crítico Jurídico Marxista',
            text: '«Camaradas y compañeros del Think Tank. Mientras los liberales festejan la libertad en el papel, nosotros preguntamos: ¿es libre el obrero que debe aceptar jornadas demoledoras para no morir de frío? ¿Es libre el joven que compite como mercancía barata en el mercado algorítmico? La libertad que no come, que no sana y que no reposa, no es libertad; es cinismo de clase.»'
          },
          {
            time: '0:36 - 1:15',
            speaker: 'Crítico Jurídico Marxista',
            text: '«En nuestro Decálogo Constitutivo no venimos a pedir caridad al capital ni limosnas al Estado benefactor. Proponemos arrancar las palancas del destino humano de las manos del mercado ciego. Si el ser humano transforma la materia mediante su sudor, la soberanía debe radicar en el taller, en el hospital y en el aula, no en la bolsa de valores.»'
          },
          {
            time: '1:16 - 2:05',
            speaker: 'Crítico Jurídico Marxista',
            text: '«La libertad real se mide en el tiempo liberado. Cada hora que le arrebatamos a la plusvalía patronal es una hora que le devolvemos a la poesía, al amor, a la ciencia y a la deliberación política comunitaria. La ley no debe consagrar el derecho a explotar, sino la potestad irrenunciable de vivir plenamente como seres humanos desalineados.»'
          },
          {
            time: '2:06 - 2:45',
            speaker: 'Crítico Jurídico Marxista',
            text: '«Convocamos a la alianza dialéctica de todos los desposeídos para construir no un Estado carcelero, sino una federación universal de productores libres e iguales. ¡Proletarios y creadores del mundo, uníos!»'
          }
        ]
      }
    },
    tocqueville: {
      thesisConfrontation: 'Tocqueville advirtió con pavor que la búsqueda fanática de la igualdad a cualquier precio puede conducir a tolerar el más absoluto de los despotismos centralizados con tal de que nadie destaque sobre los demás.',
      syntheticVerdict: 'Alerta de máxima gravedad histórica: Las experiencias del «socialismo real» del siglo XX validaron trágicamente a Tocqueville cuando la vanguardia del partido devino en tiranía burocrática. El modelo marxista contemporáneo responde recuperando a Rosa Luxemburgo y Antonio Gramsci: la socialización económica es nula sin pluralismo soviético y libertad absoluta de crítica.',
      alerts: [
        {
          riskFactor: 'La Gigantesca Burocracia Centralizada como Nuevo Monarca',
          tocquevilleQuote: '«El despotismo es particularmente temible en las edades democráticas... Para combatir los males que la igualdad puede producir, no hay sino un remedio eficaz: la libertad política.»',
          workReference: 'La Democracia en América, Vol. II, Libro II, Cap. IV',
          vulnerabilityAnalysis: 'Si la planificación económica se centraliza en un ministerio supremo, la libertad individual queda extinguida y surge una casta de comisarios intocables (la nomenklatura).',
          mitigationMechanism: 'Consejos descentralizados con delegados revocables por asamblea, rotación obligatoria y veto obrero directo.',
          severityLevel: 'Crítico'
        },
        {
          riskFactor: 'La Supresión de la Disidencia en Nombre de la Unidad Popular',
          tocquevilleQuote: '«No conozco país alguno en que reine, en general, menos independencia de espíritu y verdadera libertad de discusión que en América... cuando la mayoría decide, no hay apelación posible.»',
          workReference: 'La Democracia en América, Vol. I, Cap. VII',
          vulnerabilityAnalysis: 'La pretensión de encarnar a la clase obrera como un bloque homogéneo conduce a tachar toda discrepancia interna de «traición contrarrevolucionaria».',
          mitigationMechanism: 'Consagración de la máxima de Rosa Luxemburgo: «La libertad es siempre y exclusivamente libertad para el que piensa de manera diferente».',
          severityLevel: 'Crítico'
        }
      ]
    },
    contrapunto: {
      initialRefutations: []
    },
    sintetizador: {
      crisisTitle: 'La Inteligencia Artificial Autónoma como Monopolio del Capital Cognitivo',
      crisisContext: 'Crisis del Siglo XXI: Los algoritmos de IA son la cúspide de la subsunción real del trabajo al capital: extraen la inteligencia viva de miles de millones para concentrar plusvalor sin precedentes.',
      preamble: 'Declaramos que la Inteligencia Artificial no es una fuerza de la naturaleza, sino capital constante acumulado a costa del cerebro colectivo de la humanidad.',
      diagnostic: 'El problema no es que las máquinas piensen, sino que tres corporaciones oligopólicas posean las máquinas y decidan quién tiene derecho a trabajar y comer.',
      pillars: [
        {
          title: 'I. Socialización Inmediata de los Grandes Centros de Cómputo',
          roleContribution: 'Aporte de la ontología del trabajo colectivo.',
          actionPrinciple: 'Los clusters de entrenamiento alimentados con la cultura humana deben ser patrimonio público comunal.',
          institutionalProposal: 'Expropiación de las granjas de servidores monopólicas y puesta al servicio de la investigación médica y climática universal.'
        },
        {
          title: 'II. Reducción Radical de la Jornada Laboral por Ganancia de Productividad',
          roleContribution: 'Aporte del análisis socioeconómico del plusvalor.',
          actionPrinciple: 'Si la máquina realiza el trabajo de 10 personas, la jornada debe reducirse a 20 horas semanales sin merma salarial.',
          institutionalProposal: 'Semana laboral máxima de 4 días y reparto de las horas de trabajo entre toda la población activa.'
        },
        {
          title: 'III. Democracia Algorítmica y Control Sindical del Código',
          roleContribution: 'Aporte del crítico jurídico-político.',
          actionPrinciple: 'Ningún algoritmo de evaluación laboral o despidos podrá operar sin aprobación de asamblea obrera.',
          institutionalProposal: 'Comités de vigilancia tecnológica paritarios con poder de desconexión inmediata.'
        }
      ],
      resolutiveClause: 'POR TANTO, convocamos a reapropiarnos de la técnica para el florecimiento universal de la vida y el fin de la explotación.',
      signatures: [
        { roleTitle: 'Teórico Principal', studentName: 'Celeste Píriz' },
        { roleTitle: 'Analista Socioeconómico', studentName: 'Alexander Montoya' },
        { roleTitle: 'Crítico Jurídico-Político', studentName: 'Valeria Montoya' },
        { roleTitle: 'Defensor de Tocqueville', studentName: 'Salome Urrego' },
        { roleTitle: 'Debatiente de Contrapunto', studentName: 'Yann Carlos Castaño' },
        { roleTitle: 'Sintetizador Relator', studentName: 'Emmanuel Marín' }
      ]
    }
  },
  {
    id: 'republicanismo_constitucional',
    name: 'Republicanismo Constitucional y División del Poder',
    thinkers: ['Montesquieu', 'Jean-Jacques Rousseau', 'Philip Pettit'],
    era: 'Siglos XVIII - XXI (La Tradición Cívica Clásica)',
    coreMotto: '«Para que no se pueda abusar del poder, es preciso que, por la disposición de las cosas, el poder frene al poder.»',
    badge: 'Modelo Alternativo 3',
    colorScheme: {
      primary: 'slate-800',
      accent: 'slate-700',
      border: 'border-slate-200',
      badgeBg: 'bg-slate-100 text-slate-900 border-slate-300'
    },
    shortSummary: 'Define la libertad como «No-Dominación» (ausencia de un amo o poder arbitrario). El pilar es la virtud cívica, la separación estricta de poderes y la ley como expresión de la voluntad general soberana.',
    teorico: {
      coreOntologySummary: 'El ciudadano es un ser político consustancial a la República. No es un mero consumidor privado; su dignidad reside en su participación cívica y en no vivir a merced de la voluntad caprichosa de nadie.',
      nodes: [
        {
          id: 'poder_frena_poder',
          category: 'Ontología del Sujeto',
          label: 'La División Tripartita de Poderes (Montesquieu)',
          shortDefinition: 'La concentración de la facultad legislativa, ejecutiva y judicial en un solo cuerpo es la definición exacta de la tiranía.',
          extendedText: 'Montesquieu demuestra empíricamente que todo hombre que tiene poder tiende a abusar de él hasta que encuentra límites.',
          quote: {
            text: 'En cada Estado hay tres clases de poderes: el legislativo, el ejecutivo de las cosas relativas al derecho de gentes, y el ejecutivo de las cosas que dependen del derecho civil... Cuando el poder legislativo y el ejecutivo se reúnen en la misma persona, no hay libertad.',
            author: 'Montesquieu',
            work: 'El espíritu de las leyes (De l\'esprit des lois), Libro XI, Cap. VI',
            year: 1748,
            sourceUrl: 'https://gallica.bnf.fr/'
          },
          connectedTo: ['no_dominacion_pettit', 'virtud_civica']
        },
        {
          id: 'no_dominacion_pettit',
          category: 'Ética y Teleología',
          label: 'La Libertad como No-Dominación (Pettit)',
          shortDefinition: 'Ser libre no es solo que nadie te impida actuar hoy, sino saber que nadie tiene la potestad de interferir arbitrariamente contigo mañana.',
          extendedText: 'El esclavo cuyo amo es bondadoso y no lo castiga no es libre: sigue siendo esclavo porque vive bajo la espada de Damocles del capricho del señor.',
          quote: {
            text: 'La libertad como no-dominación exige que ninguna persona o corporación posea un poder arbitrario sobre otra; requiere que los ciudadanos puedan mirar a los ojos a cualquiera sin temor ni servilismo.',
            author: 'Philip Pettit',
            work: 'Republicanismo: una teoría sobre la libertad y el gobierno',
            year: 1997,
            sourceUrl: 'https://plato.stanford.edu/entries/republicanism/'
          },
          connectedTo: ['poder_frena_poder', 'virtud_civica']
        },
        {
          id: 'virtud_civica',
          category: 'Bien Común y Sociedad',
          label: 'Virtud Cívica y Voluntad General (Rousseau)',
          shortDefinition: 'La ley es justa cuando todos participan en su creación y nadie está por encima de ella.',
          extendedText: 'La obediencia a la ley que uno mismo se ha prescrito es la auténtica libertad. Sin ciudadanos celosos de la cosa pública, la República se pudre en facciones.',
          quote: {
            text: 'El pueblo sometido a las leyes debe ser su autor; solo a los que se asocian corresponde regular las condiciones de la sociedad.',
            author: 'Jean-Jacques Rousseau',
            work: 'El contrato social, Libro II, Cap. VI',
            year: 1762,
            sourceUrl: 'https://www.gutenberg.org/'
          },
          connectedTo: ['poder_frena_poder', 'no_dominacion_pettit']
        }
      ]
    },
    socioeconomico: {
      summaryAnalysis: 'El republicanismo exige una base material independiente para cada ciudadano: quien depende de otro para comer, vota como su patrón le ordena. Apoya la difusión amplia de la propiedad productiva, la renta básica ciudadana incondicional y el desarme de oligopolios corruptores.',
      indicators: [
        {
          dimension: 'Propiedad Privada',
          posture: 'Propiedad generalizada y desconcentrada para garantizar la independencia ciudadana',
          score: 50,
          leftLabel: 'Estatismo Monolítico',
          rightLabel: 'Monopolios Privados Dinásticos',
          description: 'Evitar tanto la indigencia que engendra clientes serviles como la opulencia que engendra tiranos.',
          mechanism: 'Leyes agrarias modernas, límites a la concentración corporativa y desmembramiento de oligopolios.',
          historicalExample: 'El ideal jeffersoniano y romano de los ciudadanos-propietarios libres de amos.'
        },
        {
          dimension: 'Medios de Producción',
          posture: 'Ecosistema plural de pequeñas y medianas empresas, cooperativas cívicas y empresas públicas estratégicas',
          score: 50,
          leftLabel: 'Control de Estado Único',
          rightLabel: 'Gigantes Corporativos Inmunes',
          description: 'Ninguna empresa puede ser «demasiado grande para caer» porque eso le otorga poder de extorsión sobre el parlamento.',
          mechanism: 'Leyes antimonopolio estrictas (Sherman Act en clave republicana).',
          historicalExample: 'La república comercial holandesa y las ligas cívicas renacentistas.'
        },
        {
          dimension: 'Regulación del Mercado',
          posture: 'Mercado republicano regulado para evitar relaciones asimétricas de servidumbre',
          score: 65,
          leftLabel: 'Intervención Rígida',
          rightLabel: 'Desregulación Ciega',
          description: 'El mercado es una institución creada por la ley, y debe servir al bien público republicano.',
          mechanism: 'Férrea regulación laboral que impida que el empleador dicte la vida privada del empleado fuera de la jornada.',
          historicalExample: 'Doctrina de la no-dominación en el derecho del trabajo.'
        },
        {
          dimension: 'Distribución de la Riqueza y Trabajo',
          posture: 'Renta Básica Universal Incondicional como escudo de No-Dominación',
          score: 75,
          leftLabel: 'Nivelación Forzosa',
          rightLabel: 'Desigualdad Extrema',
          description: 'Dar a cada ciudadano un suelo económico incondicional para que pueda decir "no" a contratos leoninos o abusivos.',
          mechanism: 'Renta básica universal ciudadana financiada con impuestos a las rentas de monopolio y recursos comunes.',
          historicalExample: 'Proyectos de Renta Básica Republicana (Van Parijs, Raventós, Casassas).'
        }
      ],
      comparativeTable: [
        {
          factor: 'Concepción de la Corrupción',
          modelView: 'Subordinación del interés público al interés particular de una facción o corporación privada.',
          rivalCapitalistView: 'Simple ilegalidad o soborno penalmente tipificado.',
          rivalCollectivistView: 'Consecuencia inevitable de las relaciones burguesas de producción.'
        }
      ]
    },
    juridico: {
      libertyConcept: 'No-Dominación Republicana',
      libertyDescription: 'Vivir en una República significa no tener amo (sine domino), no estar sujeto a la discrecionalidad ni al arbitrio de ningún señor, gobernante o algoritmo.',
      decalogue: [
        {
          number: 1,
          title: 'Supremacía Inapelable de la Ley Soberana',
          principle: 'Gobierno de leyes y no gobierno de hombres; nadie está por encima del orden constitucional.',
          legalJustification: 'Donde termina la ley, comienza la tiranía del más fuerte.',
          stateLimit: 'Inmunidades presidenciales nulas ante delitos contra la Constitución.'
        },
        {
          number: 2,
          title: 'Interdicción de la Dominación Privada (Imperium vs. Dominium)',
          principle: 'El Estado debe proteger al ciudadano de la opresión de monopolios, monopolios patriarcales y patrones abusivos.',
          legalJustification: 'La tiranía privada en el hogar o la empresa es tan destructiva como la tiranía estatal.',
          stateLimit: 'Protección penal contra el acoso y la sujeción patronal extra-contractual.'
        },
        {
          number: 3,
          title: 'Transparencia Radical y Rendición de Cuentas',
          principle: 'Todos los actos del gobierno, contratos públicos y deliberaciones son abiertos y accesibles al escrutinio civil.',
          legalJustification: 'La corrupción florece en la sombra del secreto oficial.',
          stateLimit: 'Prohibición de partidas secretas y reuniones de lobby no registradas públicamente.'
        },
        {
          number: 4,
          title: 'Poder Judicial Autónomo e Incorruptible',
          principle: 'Jueces inamovibles designados por mérito cívico estricto y con jurados populares ciudadanos.',
          legalJustification: 'El juez es el guardián de la balanza contra los excesos del gobernante.',
          stateLimit: 'Cero injerencia del poder ejecutivo en los nombramientos judiciales de carrera.'
        },
        {
          number: 5,
          title: 'Control Ciudadano Mediante Plebiscitos y Auditorías',
          principle: 'Mecanismos de iniciativa legislativa popular, referéndum revocatorio y jurados ciudadanos de cuentas.',
          legalJustification: 'La soberanía no se enajena con el voto cada cuatro años.',
          stateLimit: 'Las leyes aprobadas en referéndum tienen jerarquía superior a decretos ministeriales.'
        },
        {
          number: 6,
          title: 'Defensa de los Bienes Comunes (Res Publica)',
          principle: 'El agua, el aire, el espectro electromagnético y los parques son patrimonio inalienable de la nación.',
          legalJustification: 'La enajenación de lo público reduce a los ciudadanos a mendigos en su propia tierra.',
          stateLimit: 'Prohibición de privatizar fuentes hídricas estratégicas.'
        },
        {
          number: 7,
          title: 'Separación Tajante entre Dinero y Política',
          principle: 'Prohibición absoluta del financiamiento corporativo en campañas electorales.',
          legalJustification: 'Si el dólar compra el voto, la República se convierte en oligarquía descarada.',
          stateLimit: 'Campañas financiadas exclusivamente por un fondo público equitativo con topes austeros.'
        },
        {
          number: 8,
          title: 'Deber y Derecho a la Milicia/Defensa Ciudadana Pacífica',
          principle: 'El pueblo instruido es la garantía de su propia defensa contra tiranías internas o externas.',
          legalJustification: 'Los ejércitos mercenarios o pretorianos siempre terminan derrocando a la República.',
          stateLimit: 'Prohibición de empresas militares privadas dentro del territorio nacional.'
        },
        {
          number: 9,
          title: 'Educación Cívica en la Crítica del Poder',
          principle: 'La escuela debe formar ciudadanos insumisos, capaces de auditar la retórica de los gobernantes.',
          legalJustification: 'Un pueblo ignorante o sumiso es el caldo de cultivo de los césares.',
          stateLimit: 'Garantía de libertad de cátedra y pensamiento crítico en todo el sistema pedagógico.'
        },
        {
          number: 10,
          title: 'Cláusula de Resistencia contra la Usurpación',
          principle: 'Todo ciudadano tiene el derecho y el deber sagrado de desconocer mandatos abiertamente inconstitucionales.',
          legalJustification: 'La lealtad es con la Constitución y el pueblo libre, jamás con el mandatario tirano.',
          stateLimit: 'El gobernante usurpe el poder queda fuera de la ley y pierde toda inmunidad.'
        }
      ],
      podcast: {
        title: 'La Balanza y la Espada: El Escudo Republicano contra los Tiranos',
        subtitle: 'Episodio 03: Por qué no tener amo es la única forma digna de vivir en sociedad',
        speaker: 'Voz del Colectivo Republicano (Montesquieu & Pettit)',
        durationSeconds: 148,
        durationLabel: '2 min 28 seg',
        audioKeyPoints: [
          'La diferencia vital entre el esclavo bien alimentado y el ciudadano libre',
          'Montesquieu: cómo la disposición de las cosas debe hacer que el poder frene al poder',
          'El peligro de los nuevos barones tecnológicos como amos arbitrarios del siglo XXI',
          'La Renta Básica Universal como escudo para mirar a los poderosos a los ojos sin arrodillarse'
        ],
        transcriptSegments: [
          {
            time: '0:00 - 0:38',
            speaker: 'Crítico Jurídico Republicano',
            text: '«Ciudadanas y ciudadanos: les habla la voz del republicanismo cívico. Durante siglos nos dijeron que la libertad consistía simplemente en que la policía no tocara a tu puerta hoy. Qué ceguera tan peligrosa. Montesquieu y Philip Pettit nos enseñaron que si vives con el terror de que mañana tu casero te desaloje, o que un algoritmo te deje sin empleo sin dar explicaciones, tú no eres libre: tú tienes un amo.»'
          },
          {
            time: '0:39 - 1:12',
            speaker: 'Crítico Jurídico Republicano',
            text: '«El concepto supremo que defendemos es la No-Dominación. Ser libre no significa vivir aislado en una burbuja privada ignorando la suerte de la patria; significa participar con coraje en la deliberación común y construir leyes tan robustas que ningún presidente, ningún magnate y ningún general pueda tratarnos como a súbditos.»'
          },
          {
            time: '1:13 - 1:52',
            speaker: 'Crítico Jurídico Republicano',
            text: '«En nuestro Decálogo hemos decretado la separación absoluta entre el dinero y las elecciones. El parlamento no es una casa de subastas donde los monopolios compran leyes. O hay República para todos con división inquebrantable de poderes, o hay oligarquía para unos pocos con desprecio al pueblo soberano.»'
          },
          {
            time: '1:53 - 2:28',
            speaker: 'Crítico Jurídico Republicano',
            text: '«¡Viva la Res Publica, el imperio de la ley justa y la dignidad de los ciudadanos que caminan con la frente en alto sin doblar jamás la rodilla ante ningún amo terrenal!»'
          }
        ]
      }
    },
    tocqueville: {
      thesisConfrontation: 'Tocqueville advirtió que la apatía cívica y la concentración metropolitana erosionan el tejido municipal y la práctica de las asambleas locales.',
      syntheticVerdict: 'Alineación estructural máxima: Tocqueville era él mismo un pensador de linaje republicano-constitucional; sus remedios (asociaciones libres, descentralización comunal, jurados populares) son el corazón mismo de este modelo.',
      alerts: [
        {
          riskFactor: 'Degeneración de la Virtud Cívica en Apatía Burócrata',
          tocquevilleQuote: '«Los sentimientos y las ideas no se renuevan, el corazón no se engrandece y el espíritu humano no se desarrolla sino por la acción recíproca de los hombres unos sobre otros... Esta acción es casi nula en un país democrático si no se aprende el arte de asociarse.»',
          workReference: 'La Democracia en América, Vol. II, Parte II, Cap. V',
          vulnerabilityAnalysis: 'Si la ciudadanía deja la política en manos de los partidos profesionales, la virtud cívica se extingue y triunfa la oligarquía de intermediarios.',
          mitigationMechanism: 'Obligatoriedad de asambleas deliberativas por sorteo ciudadano vinculante (democracia sortaria).',
          severityLevel: 'Alto'
        }
      ]
    },
    contrapunto: {
      initialRefutations: []
    },
    sintetizador: {
      crisisTitle: 'El Colapso de la Esfera Pública y la Dominación Algorítmica',
      crisisContext: 'Crisis del Siglo XXI: La soberanía popular ha sido capturada por plataformas que privatizan el debate y despojan a los Estados de su potestad regulatoria.',
      preamble: 'La República está en peligro mortal no por invasión extranjera, sino por la colonización de la soberanía a manos de algoritmos que operan sin frenos ni contrapesos.',
      diagnostic: 'El poder de las Big Tech es un poder arbitrario no fiscalizado, el antónimo directo de la libertad republicana.',
      pillars: [
        {
          title: 'I. Desmembramiento Antimonopolio de las Plataformas de Información',
          roleContribution: 'Aporte de Montesquieu: el poder debe frenar al poder.',
          actionPrinciple: 'Ninguna corporación puede controlar simultáneamente la infraestructura de red, la tienda de aplicaciones y el medio de noticias.',
          institutionalProposal: 'Aplicación de la doctrina Glass-Steagall digital para separar las capas de datos, hardware y distribución.'
        },
        {
          title: 'II. La Renta Básica Republicana como Inmunidad contra la Dominación',
          roleContribution: 'Aporte de la economía de la No-Dominación de Philip Pettit.',
          actionPrinciple: 'Solo ciudadanos económicamente inmunes al chantaje patronal pueden ejercer libremente la soberanía electoral.',
          institutionalProposal: 'Renta básica universal suficiente garantizada constitucionalmente.'
        },
        {
          title: 'III. Jurados Ciudadanos y Asambleas Cívicas para la Regulación Algorítmica',
          roleContribution: 'Aporte del crítico jurídico-político.',
          actionPrinciple: 'La gobernanza de la IA no puede ser decidida por Silicon Valley ni por burócratas secretos.',
          institutionalProposal: 'Creación de jurados ciudadanos elegidos por sorteo con potestad de veto sobre modelos de alto riesgo.'
        }
      ],
      resolutiveClause: 'POR TANTO, juramos defender la soberanía republicana contra todo amo que pretenda reinar en la oscuridad.',
      signatures: [
        { roleTitle: 'Teórico Principal', studentName: 'Celeste Píriz' },
        { roleTitle: 'Analista Socioeconómico', studentName: 'Alexander Montoya' },
        { roleTitle: 'Crítico Jurídico-Político', studentName: 'Valeria Montoya' },
        { roleTitle: 'Defensor de Tocqueville', studentName: 'Salome Urrego' },
        { roleTitle: 'Debatiente de Contrapunto', studentName: 'Yann Carlos Castaño' },
        { roleTitle: 'Sintetizador Relator', studentName: 'Emmanuel Marín' }
      ]
    }
  }
];
