# 🤖 IA & Responsabilidad — Landing Page

> **«Si una IA te niega una oportunidad injustamente, ¿a quién le exiges explicaciones?»**

Landing page interactiva sobre ética algorítmica que examina cómo se distribuye la responsabilidad entre desarrolladores, instituciones y usuarios cuando un sistema de inteligencia artificial discrimina o perjudica a alguien.

---

## 📋 Descripción

Este proyecto es una página web educativa e interactiva que aborda la intersección entre **Ética Aplicada**, **Psicología** y **Tecnología**. A través de contenido estructurado y un cuestionario con dilemas reales, el usuario reflexiona sobre quién debe rendir cuentas cuando un algoritmo toma una decisión injusta.

---

## 🎯 Contenido

### 1. Hero
Presentación del tema con el título gancho, categorías y llamada a la acción para descubrir el perfil ético del usuario.

### 2. Los actores del sistema algorítmico
Cuatro tarjetas que explican el rol y nivel de implicación de cada actor:

| Actor | Implicación |
|---|---|
| 👩‍💻 Desarrolladores & Científicos de Datos | 90% |
| 🏛️ Instituciones & Empresas | 82% |
| 🧑‍💼 Usuarios & Operadores | 65% |
| ⚖️ Reguladores & Estado | 55% |

### 3. Casos reales documentados
Timeline con cuatro casos históricos verificados:

- **Amazon (2018)** — Sistema de selección que penalizaba currículums de mujeres
- **COMPAS (2016)** — Algoritmo de predicción de reincidencia con sesgo racial en tribunales de EE.UU.
- **Apple Card (2019)** — Otorgaba límites de crédito menores a mujeres que a sus maridos
- **Algoritmo sanitario (2019)** — Asignaba menor prioridad a pacientes afroamericanos en hospitales de EE.UU.

### 4. Estadísticas clave

- **67%** de empresas no auditan sus IA por sesgos antes de implementarlas
- **2.5×** más probabilidades de rechazo crediticio para minorías étnicas
- **14** países con legislación específica sobre IA desde 2020
- **89%** de afectados nunca reciben una explicación

### 5. Cuestionario interactivo
Cinco preguntas con escenarios reales, feedback inmediato y perfil final personalizado.

---

## 🧩 Cuestionario — Perfil ético

| Puntuación | Perfil |
|---|---|
| 0–1 aciertos | 🔵 **Observador en formación** |
| 2–3 aciertos | 🟠 **Analista crítico** |
| 4–5 aciertos | 🟢 **Guardián algorítmico** |

Cada pregunta incluye:
- ✅ Escenario contextualizado
- ✅ 4 opciones de respuesta
- ✅ Feedback educativo inmediato (correcto en verde, incorrecto en rosa con explicación)
- ✅ Navegación Anterior / Siguiente con validación
- ✅ Barra de progreso animada

---

## 🎨 Diseño

- **Estética**: Minimalista con colores pasteles
- **Paleta**:

  | Color | Variable CSS | Uso |
  |---|---|---|
  | 🌸 Rose | `#f4c6c6` | Desarrolladores, estadísticas |
  | 🌿 Sage | `#c4d9c8` | Instituciones, casos correctos |
  | 🩵 Sky | `#bdd4e7` | Usuarios, estadísticas |
  | 💜 Lavender | `#d6cce8` | Reguladores, quiz |
  | 🍑 Peach | `#f5d9c2` | Perfil analista |

- **Tipografía**: `Playfair Display` (titulares serif) + `Inter` (cuerpo sans-serif) via Google Fonts
- **Fondo base**: `#f9f7f4` (crema cálido)

---

## ✨ Características técnicas

- ⚡ **Sin dependencias externas** — HTML + CSS + JavaScript vanilla
- 📱 **Responsive** — Adaptado para móvil y escritorio
- 🎞️ **Animaciones**:
  - Blobs flotantes en el hero (CSS keyframes)
  - Fade-up al hacer scroll (IntersectionObserver)
  - Barras de responsabilidad animadas al aparecer
  - Hover con elevación en tarjetas y botones
- 🔍 **SEO básico** — Title, meta description y estructura semántica HTML5
- 🔗 **Web Share API** — Comparte tu resultado en redes sociales (con fallback a portapapeles)
- 🧭 **Nav sticky** con glassmorphism (`backdrop-filter: blur`)

---

## 🚀 Uso

No requiere instalación ni servidor. Simplemente abre el archivo en tu navegador:

```bash
# Opción 1: doble clic en el archivo
index.html

# Opción 2: desde terminal
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

---

## 📁 Estructura

```
Landing_Page/
└── index.html      # Página completa (HTML + CSS + JS en un solo archivo)
└── README.md       # Este archivo
```

---

## 🧠 Temática académica

Este proyecto aborda los siguientes conceptos:

**Ética Aplicada**
- Distribución de responsabilidad moral en sistemas sociotécnicos
- Principios de bioética aplicados a la IA (autonomía, justicia, no maleficencia, beneficencia)
- Accountability y transparencia algorítmica

**Psicología**
- Sesgos cognitivos en el diseño de sistemas
- Delegación de juicio moral en máquinas
- Percepción de neutralidad tecnológica

**Tecnología**
- Sesgo algorítmico y sus fuentes (datos, objetivo de optimización, diseño)
- Sistemas de IA en decisiones de alto impacto (crédito, justicia, salud, empleo)
- Regulación de IA (AI Act europeo, legislación comparada)

---

## 📝 Licencia

Proyecto educativo de libre uso con fines académicos y divulgativos.

---

*Ética Aplicada · Psicología · Tecnología · 2025*
# Parcial-2.
