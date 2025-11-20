Perfecto, Alan — te armo **tu README FINAL**, completo, profesional, limpio, con tus **dos workflows**, tus **badges**, tu **pipeline explicadito**, y listo para copiar/pegar en tu repositorio.

Aquí va 🔥👇
(Si quieres luego lo hacemos más corto o más visual.)

---

# 🚀 Personal Web Pipeline — Astro + GitHub Pages + Cloudflare Pages

<div align="center">
  <img src="https://img.shields.io/badge/Built%20with-Astro-blueviolet?style=for-the-badge&logo=astro" />
  <img src="https://img.shields.io/badge/Powered%20By-Cloudflare-black?logo=cloudflare&style=for-the-badge" />
  <img src="https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-black?style=for-the-badge&logo=githubactions" />
</div>

---

## 📛 Badges

![Astro](https://img.shields.io/badge/Astro-%F0%9F%9A%80-blueviolet?style=for-the-badge)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare%20Pages-Deployed-orange?style=for-the-badge\&logo=cloudflare)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Preview%20/dev-blue?style=for-the-badge\&logo=github)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)
![Node](https://img.shields.io/badge/Node-20.x-green?style=for-the-badge\&logo=node.js)

### 🔁 Badges dinámicos (de tus workflows)

> Reemplaza los nombres si tus archivos tienen otros nombres.

```md
![Cloudflare Deploy](https://github.com/AlanGuillenZ/example1/actions/workflows/deploy-cf.yml/badge.svg)
![GH Pages Preview](https://github.com/AlanGuillenZ/example1/actions/workflows/deploy-gh.yml/badge.svg)
```

---

# 🌎 Overview

Este proyecto implementa un **pipeline CI/CD profesional** utilizando:

* **Astro**
* **GitHub Actions**
* **GitHub Pages (Preview)**
* **Cloudflare Pages (Producción)**
* **API Token Personalizado** (permisos Edit + Read)

El repositorio posee **dos flujos de trabajo separados**:

| Workflow         | Archivo         | Tipo                        | Entorno        |
| ---------------- | --------------- | --------------------------- | -------------- |
| GitHub Pages     | `deploy-gh.yml` | Automático (push)           | Preview `/dev` |
| Cloudflare Pages | `deploy-cf.yml` | Manual (botón Run Workflow) | Producción     |

---

# 🔥 Arquitectura CI/CD

```plaintext
                   Pull Request
                         │
                         ▼
            GitHub Pages (Preview /dev)
────────────────────────────────────────────

                         │
                    Push a main
                         ▼
                GitHub Actions (CI)
          - npm ci
          - npm run build
                         ▼
           Deploy manual a Cloudflare Pages
          (usando API Token Personalizado)
                         ▼
        🌐 Producción en dominio personalizado
```

---

# 🟣 GitHub Pages — Preview Automático

El workflow `deploy-gh.yml`:

* Se ejecuta **automáticamente** en cada push a `main`.
* Construye el proyecto Astro.
* Publica el sitio en GitHub Pages en modo **/dev**.
* Sirve como entorno de pruebas antes de publicar.

---

# 🟡 Cloudflare Pages — Producción Manual

El workflow `deploy-cf.yml`:

* Se ejecuta **solo manualmente** desde
  **Actions → Run Workflow**.
* Utiliza un **API Token** con permisos:

  * Cloudflare Pages: **Edit**
  * Cloudflare Pages: **Read**
* Publica automáticamente el build final del sitio en Cloudflare Pages.
* Actualiza la versión en tu dominio principal.

---

# 🔐 Seguridad: API Token

Este proyecto usa un token con permisos mínimos necesarios:

| Permiso                | Uso                    |
| ---------------------- | ---------------------- |
| Cloudflare Pages: Edit | Realizar deploy        |
| Cloudflare Pages: Read | Leer info del proyecto |

Los secretos usados en GitHub Actions son:

* `CF_API_TOKEN`
* `CF_ACCOUNT_ID`
* `CF_PROJECT_NAME`

---

# 🧪 Correr el proyecto localmente

```bash
npm install
npm run dev
```

Servidor local:
👉 [http://localhost:4321/](http://localhost:4321/)

---

# 🚀 Build manual

```bash
npm run build
```

El build se genera en `/dist`.

---

# 💥 Deploy a producción (Cloudflare)

1. Ir a **Actions**
2. Seleccionar **Cloudflare Deploy**
3. Presionar **Run Workflow**

Cloudflare publicará la nueva versión en segundos.

---

# 🧠 Tech Stack

* 🚀 Astro
* 🌩️ Cloudflare Pages
* 🐙 GitHub Actions
* 🔐 API Token Security
* 🔥 Brotli compression
* 🌎 CDN Global
* 🟣 GitHub Pages (preview)

---

# 📂 Estructura del repositorio

```
.
├── src/
├── public/
├── dist/
├── astro.config.mjs
└── .github/
     └── workflows/
         ├── deploy-gh.yml      # Preview automático
         └── deploy-cf.yml      # Producción manual
```

---

# ✨ Créditos

Pipeline CI/CD desarrollado por **Alan Zuniga-Guillen**
Infraestructura servida por **Cloudflare Pages + GitHub Actions**
Sitio generado con **Astro** 🚀

---

Si quieres, puedo añadir:

* Capturas
* Un diagrama gráfico (tipo PNG)
* Una mini sección sobre tu dominio
* Un índice automático
* Una sección “Roadmap” para tu blog

¿Quieres algo más visual o lo quieres así?
