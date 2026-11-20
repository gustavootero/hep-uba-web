# Sitio del Grupo de Física Experimental de Altas Energías (UBA)

Sitio estático, bilingüe (español / inglés), del grupo de Física Experimental
de Altas Energías del Departamento de Física (FCEyN, UBA) e IFIBA (UBA–CONICET).

## Para publicar

No hay paso de compilación ni dependencias. Se sirve el contenido del
repositorio tal cual, con `index.html` como página de entrada.

- Todas las rutas son relativas: funciona en la raíz de un dominio o en
  cualquier subcarpeta.
- No carga nada de terceros (ni CDN, ni fuentes externas, ni analítica).
- Para mantener el sitio actualizado alcanza con un `git pull` periódico de
  la rama `main` en la carpeta que sirve el servidor web.
- El archivo `.nojekyll` solo sirve para GitHub Pages y se puede ignorar en
  otros servidores.

## Para actualizar el contenido

| Qué cambia | Dónde |
|---|---|
| Integrantes, tesis, posdocs, subsidios, enlace a INSPIRE, fecha de actualización | `assets/js/data.js` |
| Textos (el grupo, líneas de investigación, CERN y ATLAS, contacto) | `index.html` |
| Fotos de integrantes | `assets/img/people/` |
| Colores y tipografía | `assets/css/style.css` |

### Agregar o quitar una persona

En `assets/js/data.js`, dentro de `people`, cada integrante es una línea:

```js
{ name: "Nombre Apellido", photo: "apellido.jpg" },
```

La foto va en `assets/img/people/`, en JPG vertical de proporción 4:5
(400 × 500 px es suficiente). Si `photo` queda vacío (`""`), la tarjeta
muestra las iniciales.

Cuando alguien defiende su tesis, se quita de `people` y se agrega una línea
a `phd` o `licenciatura` con el año. Los totales que muestra la página se
calculan solos.

### Textos en dos idiomas

En `index.html` cada texto aparece dos veces seguidas, una por idioma:

```html
<span lang="es">Investigación</span><span lang="en">Research</span>
```

En `data.js`, los textos bilingües tienen la forma `{ es: "...", en: "..." }`.

El idioma por defecto es español. Para enlazar directamente la versión en
inglés: `index.html?lang=en`.

## Estructura

```
index.html
assets/
  css/style.css
  js/data.js        datos del grupo
  js/site.js        arma las listas y cambia el idioma
  img/              imágenes; img/people/ para las fotos
  fonts/            tipografías y sus licencias
```

## Créditos

- Imagen del LHC: CERN. Esquema del detector: ATLAS Experiment © CERN. Su uso
  se rige por las condiciones de uso de imágenes del CERN.
- Tipografías STIX Two Text e IBM Plex Sans, bajo licencia SIL Open Font
  License 1.1 (ver `assets/fonts/`).
- La figura de la portada es un esquema ilustrativo, no un evento real.
