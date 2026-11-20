/*
 * Datos del sitio. Para actualizar integrantes, tesis o subsidios
 * alcanza con editar este archivo; no hace falta tocar index.html.
 *
 * - Los textos con dos idiomas van como { es: "...", en: "..." }.
 * - "photo" es el nombre de un archivo dentro de assets/img/people/
 *   (JPG vertical 4:5, idealmente 400x500 px). Si se deja vacío,
 *   la tarjeta muestra las iniciales.
 * - Los contadores de la página (doctores, licenciados, posdocs)
 *   se calculan solos a partir de las listas de abajo.
 */
window.GROUP = {

  updated: { es: "noviembre de 2026", en: "November 2026" },

  inspire: "https://inspirehep.net/literature?sort=mostrecent&q=a%20Otero%20y%20Garzon%2C%20G",

  /* ---------- Integrantes actuales ---------- */

  people: [
    {
      heading: { es: "Investigadores", en: "Faculty" },
      members: [
        {
          name: "Gustavo Otero y Garzón",
          photo: "otero.jpg",
          role: { es: "Director del grupo", en: "Group leader" },
          detail: {
            es: "Profesor Asociado de la UBA e Investigador Principal del CONICET. Representante de la UBA en ATLAS y, desde 2023, de América Latina en el ICFA.",
            en: "Associate Professor at UBA and Principal Researcher at CONICET. UBA's Institute Representative in ATLAS and, since 2023, Latin America's representative on ICFA."
          }
        },
        {
          name: "Ricardo N. Piegaia",
          photo: "piegaia.jpg",
          role: { es: "Fundador del grupo", en: "Group founder" },
          detail: {
            es: "Investigador Principal. Condujo la participación de la UBA en los experimentos SMC, DØ y ATLAS.",
            en: "Principal Researcher. Led UBA's participation in the SMC, DØ and ATLAS experiments."
          }
        }
      ]
    },
    {
      heading: { es: "Estudiantes de doctorado", en: "PhD students" },
      members: [
        { name: "Federico Winkel",       photo: "winkel.jpg" },
        { name: "Mariano Apicella",      photo: "apicella.jpg" },
        { name: "Manuel Mollerach",      photo: "mollerach.jpg" },
        { name: "Francisco Szlafsztein", photo: "szlafsztein.jpg" },
        { name: "Martina Ruano",         photo: "ruano.jpg" },
        { name: "Mariana Toscani",       photo: "" }
      ]
    },
    {
      heading: { es: "Tesistas de licenciatura", en: "Undergraduate thesis students" },
      members: [
        { name: "Abril Sarlo",   photo: "sarlo.jpg" },
        { name: "Lara Sakamoto", photo: "" },
        { name: "Uriel Wu",      photo: "" },
        { name: "Guido Iacoppo", photo: "" }
      ]
    }
  ],

  /* ---------- Formación: tesis dirigidas en el grupo ---------- */

  phd: [
    ["Miguel Rodríguez", 1994],
    ["Víctor D. Elvira", 1995],
    ["Cecilia Gerber", 1995],
    ["Sebastián Grinstein", 2003],
    ["Verónica Sorín", 2003],
    ["Ariel Schwartzman", 2004],
    ["Andrés Tanasijczuk", 2010],
    ["Javier Tiffenberg", 2011],
    ["Gastón Romeo", 2012],
    ["Laura González Silva", 2013],
    ["Yann Guardincerri", 2013],
    ["Hernán Reisin", 2014],
    ["Pablo Pieroni", 2016],
    ["Sabrina Sacerdoti", 2017],
    ["Jonathan Bossio Solá", 2018],
    ["Gino Marceca", 2019],
    ["María Roberta Devesa", 2019],
    ["María Florencia Daneri", 2020],
    ["Tomás Bazzano", 2026]
  ],

  licenciatura: [
    ["Miguel Rodríguez", 1990],
    ["Daniel de Florian", 1992],
    ["Sebastián Grinstein", 1997],
    ["Alejandro Szynkman", 2000],
    ["Hernán Wahlberg", 2001],
    ["Javier Tiffenberg", 2006],
    ["María Laura González Silva", 2007],
    ["Gastón Romeo", 2007],
    ["Yann Guardincerri", 2008],
    ["Pablo Pieroni", 2011],
    ["Sabrina Sacerdoti", 2011],
    ["Gino Marceca", 2014],
    ["María Roberta Devesa", 2014],
    ["María Florencia Daneri", 2015],
    ["Nicolás Ponieman", 2015],
    ["Elizabeth Fons", 2015],
    ["Martín Rodríguez", 2015],
    ["Mariana Toscani", 2018],
    ["Tomás Bazzano", 2021],
    ["Martín Mendivil", 2021],
    ["Mariano Apicella", 2022],
    ["Agustín Rombolá", 2022],
    ["Manuel Mollerach", 2024],
    ["Zoe Zaidan", 2025],
    ["Martina Ruano", 2026]
  ],

  postdocs: [
    ["Matías Tueros", "2010–2011"],
    ["Hernán Reisin", "2014–2015"],
    ["María Florencia Daneri", "2020–2022"]
  ],

  /* ---------- Financiamiento ---------- */

  funding: [
    {
      period: { es: "Desde 2006", en: "Since 2006" },
      source: "Universidad de Buenos Aires, UBACyT",
      text: {
        es: "Proyectos de grupos consolidados, de manera ininterrumpida. Proyecto vigente: UBACyT 2023–2027.",
        en: "Uninterrupted funding through consolidated-group projects. Current project: UBACyT 2023–2027."
      }
    },
    {
      period: { es: "Desde 2008", en: "Since 2008" },
      source: "Agencia I+D+i, PICT",
      text: {
        es: "Proyectos nacionales sobre física experimental de las interacciones fundamentales en el LHC, entre ellos el PICT 2021–2025.",
        en: "National projects on the experimental physics of fundamental interactions at the LHC, including PICT 2021–2025."
      }
    },
    {
      period: { es: "Desde 2006", en: "Since 2006" },
      source: "CONICET, PIP",
      text: {
        es: "Proyectos de Investigación Plurianuales sucesivos.",
        en: "Successive multi-year research projects."
      }
    },
    {
      period: { es: "En curso", en: "Ongoing" },
      source: { es: "CNRS, Programa de Cooperación con Sudamérica", en: "CNRS, South America Cooperation Programme" },
      text: {
        es: "Dispersión de bosones vectoriales con bosones de Higgs de alto momento en el detector ATLAS.",
        en: "Vector boson scattering with boosted Higgs bosons in the ATLAS detector."
      }
    },
    {
      period: "2025",
      source: "ATLAS Non-Member States Grant",
      text: {
        es: "Participación en la toma de datos de ATLAS y en actividades de la colaboración en el CERN.",
        en: "Participation in ATLAS data taking and collaboration activities at CERN."
      }
    },
    {
      period: "2019–2020",
      source: "CERN, ATLAS Software Grant",
      text: {
        es: "Desarrollo del software central de ATLAS para el Run 3.",
        en: "Development of ATLAS core software for Run 3."
      }
    }
  ]
};
