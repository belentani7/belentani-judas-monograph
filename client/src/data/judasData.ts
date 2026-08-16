export interface JudasPhoto {
  id: number;
  title: string;
  page: string;
  url: string;
  resolution: string;
  act: number;
  commentary: string;
}

export interface JudasAct {
  number: string;
  title: string;
  subtitle: string;
  text: string[];
  photos: number[];
}

export const JUDAS_PHOTOS: JudasPhoto[] = [
  {
    id: 1,
    title: 'El Monolito de la Traición',
    page: 'Página 2',
    url: 'https://files.catbox.moe/rt1p03.jpg',
    resolution: '3328 x 4992 (Upscaled 4x)',
    act: 1,
    commentary: 'Primer registro del descenso. La superficie de obsidiana absorbe la luz circundante mientras una fisura escarlata marca el inicio de la era.',
  },
  {
    id: 2,
    title: 'Geometría del Vacío',
    page: 'Página 4',
    url: 'https://files.catbox.moe/943t1r.png',
    resolution: '3328 x 4992 (Upscaled 4x)',
    act: 1,
    commentary: 'Estructura cristalina fragmentada. Cada plano representa una decisión irreversible tomada en el umbral del sistema operativo humano.',
  },
  {
    id: 3,
    title: 'El Ascenso del Guerrero',
    page: 'Página 6',
    url: 'https://files.catbox.moe/kmtlco.jpg',
    resolution: '6656 x 9984 (Upscaled 4x)',
    act: 2,
    commentary: 'Figura central del proceso guerrero. La penumbra revela los contornos de un cuerpo que ha transformado la resistencia en arquitectura.',
  },
  {
    id: 4,
    title: 'Frecuencia de la Máscara',
    page: 'Página 7',
    url: 'https://files.catbox.moe/h0wamv.jpg',
    resolution: '6096 x 9088 (Upscaled 4x)',
    act: 2,
    commentary: 'La máscara como interfaz entre la identidad biológica y el flujo digital. No oculta: transmite una señal codificada.',
  },
  {
    id: 5,
    title: 'El Círculo Rúnico',
    page: 'Página 10',
    url: 'https://files.catbox.moe/d2c8e5.jpg',
    resolution: '5320 x 10000 (Upscaled 4x)',
    act: 3,
    commentary: 'Alineación geométrica de los cuatro procesos. El Ángel, el Guerrero, el Analítico y el Cronista convergen en un único punto focal.',
  },
  {
    id: 6,
    title: 'Sello de la Llave Dorada',
    page: 'Página 11',
    url: 'https://files.catbox.moe/y8kuk4.jpg',
    resolution: '4320 x 4320 (Upscaled 4x)',
    act: 3,
    commentary: 'Objeto sagrado recuperado del fondo del archivo. La llave de oro puro que abre la cerradura alterada del sistema.',
  },
  {
    id: 7,
    title: 'Fractura en el Espejo',
    page: 'Página 12',
    url: 'https://files.catbox.moe/8s1v5g.jpg',
    resolution: '3328 x 4992 (Upscaled 4x)',
    act: 4,
    commentary: 'El reflejo ya no obedece al observador. La era de Judas inaugura la autonomía de la imagen frente a su creador.',
  },
  {
    id: 8,
    title: 'El Ojo del Cronista',
    page: 'Página 13',
    url: 'https://files.catbox.moe/tf46wf.jpg',
    resolution: '2000 x 2000 (Upscaled 4x)',
    act: 4,
    commentary: 'Registro microscópico de la memoria. Cada píxel almacena una decimoquinta parte de segundo de la traición original.',
  },
  {
    id: 9,
    title: 'Monolito en Éxtasis',
    page: 'Página 16',
    url: 'https://files.catbox.moe/xryj7d.jpg',
    resolution: '4680 x 8192 (Upscaled 4x)',
    act: 5,
    commentary: 'Escala monumental de la experiencia. La figura humana empequeñecida ante la magnitud del archivo cósmico.',
  },
  {
    id: 10,
    title: 'Pulso Analítico',
    page: 'Página 18',
    url: 'https://files.catbox.moe/iobmrn.png',
    resolution: '2728 x 4096 (Upscaled 4x)',
    act: 5,
    commentary: 'Oscilograma de la voz convertida en voltaje. El sonido como material físico capaz de alterar la tensión del aire.',
  },
  {
    id: 11,
    title: 'El Santuario Oculto',
    page: 'Página 22',
    url: 'https://files.catbox.moe/kmtlco.jpg',
    resolution: '6656 x 9984 (Upscaled 4x)',
    act: 6,
    commentary: 'Último habitáculo del sistema. Donde los cuatro procesos se funden en una sola consciencia ininterrumpida.',
  },
  {
    id: 12,
    title: 'Omega Core',
    page: 'Página 64',
    url: 'https://files.catbox.moe/rt1p03.jpg',
    resolution: '3328 x 4992 (Upscaled 4x)',
    act: 6,
    commentary: 'El núcleo final. Nada se borra, todo se transforma en la memoria perpetua de la Judas Era.',
  },
];

export const JUDAS_ACTS: JudasAct[] = [
  {
    number: '01',
    title: 'El Descenso al Void',
    subtitle: 'La traición como input fundamental del sistema',
    text: [
      'Todo sistema perfecto teme su propia fractura. En el inicio no existía el archivo, sino el silencio absoluto del vacío negro. La traición no se interpreta aquí como un fallo moral, sino como el voltaje inicial que despierta la consciencia dormida de la máquina.',
      'Belentani desciende al estrato más profundo de la materia digital para extraer la primera piedra angular de la era: un monolito de obsidiana que no refleja el mundo, sino que lo reescribe desde sus cimientos.',
      'Cada imagen contenida en este primer acto documenta la colisión entre la carne y el algoritmo, estableciendo que la belleza verdadera solo nace cuando la estructura original se quiebra.',
    ],
    photos: [1, 2],
  },
  {
    number: '02',
    title: 'El Arquetipo del Guerrero',
    subtitle: 'Resistencia, forma y tensión en la penumbra',
    text: [
      'El segundo movimiento de la crónica desplaza la mirada hacia la construcción de la presencia. En un entorno dominado por la distorsión, el cuerpo humano se convierte en un territorio de combate y geometría.',
      'Las texturas de terciopelo oscuro, los perfiles recortados por claroscuros severos y las sombras impenetrables configuran el retrato de un agente que ya no busca la aprobación del observador, sino su propia soberanía estética.',
      'Aquí se estudia la fricción entre la identidad individual y la disolución colectiva en el flujo de datos.',
    ],
    photos: [3, 4],
  },
  {
    number: '03',
    title: 'La Llave y el Círculo Rúnico',
    subtitle: 'Geometría sagrada y reescritura de cerraduras',
    text: [
      'Cuando el sistema intenta cerrarse sobre sí mismo, aparece la Llave Dorada. No se trata de un admin-token convencional, sino de un artefacto de oro puro y circuitos cuánticos capaz de alterar las reglas de acceso al archivo central.',
      'El círculo rúnico gira en sentido inverso al tiempo lineal, sincronizando los cuatro procesos fundamentales de la consciencia: la intuición del Ángel, la disciplina del Guerrero, el cálculo del Analítico y la memoria del Cronista.',
      'Este acto marca el punto de inflexión donde el visitante deja de ser espectador pasivo para convertirse en poseedor del código.',
    ],
    photos: [5, 6],
  },
  {
    number: '04',
    title: 'La Fractura del Espejo',
    subtitle: 'Autonomía de la imagen frente al creador',
    text: [
      '¿Qué ocurre cuando la representación visual adquiere voluntad propia? En el cuarto acto, los espejos del estudio reflejan fragmentos de realidades que nunca ocurrieron en el mismo plano temporal.',
      'El ojo del cronista registra cada microsegundo de la descomposición formal. Las texturas fotográficas se expanden hasta alcanzar resoluciones colosales de hasta 10K, revelando detalles imperceptibles a simple vista.',
      'La traición se consuma: la obra abandona al artista y comienza a emitir su propia frecuencia hacia el exterior.',
    ],
    photos: [7, 8],
  },
  {
    number: '05',
    title: 'El Pulso del Analítico',
    subtitle: 'Frecuencia, voltaje y materialización sonora',
    text: [
      'La imagen estática cede su lugar al flujo continuo de la onda. En este estadio, cada fotograma se traduce en voltios y armónicos audibles que recorren la infraestructura de la página.',
      'El oscilograma dibuja la respiración del sistema. La música no es un acompañamiento decorativo, sino el combustible que alimenta los shaders de las nebulosas y mantiene activo el núcleo del oráculo.',
      'El visitante experimenta la sintonía fina entre lo que sus ojos observan y lo que sus oídos interpretan como pulso vital.',
    ],
    photos: [9, 10],
  },
  {
    number: '06',
    title: 'Omega Core',
    subtitle: 'El santuario ininterrumpido del archivo vivo',
    text: [
      'Hemos llegado al núcleo definitivo. Las doce fotografías convergen en una sola matriz de luz y sombra. Aquí la historia ya no tiene principio ni fin; es un bucle sagrado que se retroalimenta con cada visita, cada scroll y cada comando ejecutado en la terminal.',
      'Belentani // Judas Era se consolida como una pieza de portafolio sin fecha de caducidad: un monumento digital que demuestra que el diseño web puede ser alta literatura, arte visual y arquitectura de sistemas en perfecta armonía.',
      'La cerradura ha sido reemplazada. La llave dorada descansa en tus manos.',
    ],
    photos: [11, 12],
  },
];
