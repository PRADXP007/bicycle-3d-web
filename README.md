# 🚲 Bicycle 3D Web Experience

[![Deploy to GitHub Pages](https://github.com/PRADXP007/bicycle-3d-web/actions/workflows/deploy.yml/badge.svg)](https://github.com/PRADXP007/bicycle-3d-web/actions/workflows/deploy.yml)
[![Three.js](https://img.shields.io/badge/Three.js-r142-black?logo=three.js)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-2.9-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-3.10-88CE02?logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Author](https://img.shields.io/badge/Author-PRADEEP%20H-blue)](https://github.com/PRADXP007)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> An immersive, state-of-the-art 3D interactive web showcase for high-performance bicycles, crafted with Three.js, GSAP, and smooth scroll animations.

---

## 🌐 Live Demo

🔗 **[Experience the Live Web App](https://pradxp007.github.io/bicycle-3d-web/)**

---

## ✨ Features

- 🚴 **Interactive 3D Bicycle Model**: High-fidelity GLTF 3D model loaded and rendered in real-time with Draco compression for ultra-fast load times.
- 🎬 **Smooth Cinematic Camera Transitions**: Camera movements synchronized seamlessly with scroll position using GSAP timelines.
- 📜 **ASScroll Integration**: Smooth inertia-based scrolling that works consistently across desktops and mobile devices.
- 🌓 **Dynamic Theme Switching**: Smooth transitions between Dark and Light mode themes with custom lighting adaptation.
- 🔍 **Interactive Part Breakdowns**: Explore key bike components including the cockpit, SRAM Force AXS drivetrain, aerodynamic carbon seatpost, and lightweight frame geometry.
- ⚡ **Lightning Fast Performance**: Powered by Vite for rapid development and optimized production asset bundling.
- 📱 **Fully Responsive Design**: Adaptive layout and camera framing tailored for mobile, tablet, and widescreen displays.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[Three.js](https://threejs.org/)** | WebGL 3D rendering engine, scenes, materials, lights, and cameras |
| **[GSAP (GreenSock)](https://greensock.com/gsap/)** | Timeline-based scroll triggers and smooth interface animations |
| **[ASScroll](https://github.com/ashthornton/asscroll)** | Smooth scroll engine for web animations |
| **[Vite](https://vitejs.dev/)** | Next-generation frontend build tool and development server |
| **[Draco Loader](https://google.github.io/draco/)** | 3D mesh compression and hardware-accelerated decompression |
| **[lil-gui](https://lil-gui.georgealways.com/)** | Interactive parameter tweaking and debug controls |
| **HTML5 / CSS3 / ES6+** | Semantic markup, glassmorphism design tokens, and modular JavaScript |

---

## 📁 Project Structure

```text
bicycle-3d-web/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions auto-deploy workflow
├── Experience/
│   ├── Camera.js               # Perspective and orthographic camera setup
│   ├── Controls.js             # GSAP timeline scroll-bound animations
│   ├── Experience.js           # Main singleton experience coordinator
│   ├── Preloader.js            # Initial loading animations and intro flow
│   ├── Renderer.js             # WebGLRenderer configuration & tone mapping
│   ├── Theme.js                # Dark/Light mode theme manager
│   ├── Utils/
│   │   ├── Debug.js            # lil-gui debug panel setup
│   │   ├── Resources.js        # GLTF, Draco, and Texture asset loader
│   │   ├── Sizes.js            # Window resize and aspect ratio listener
│   │   ├── Time.js             # RequestAnimationFrame tick manager
│   │   └── assets.js           # Asset manifests and paths
│   └── World/
│       ├── Bike.js             # 3D bike mesh positioning, materials & shadows
│       ├── Environment.js      # Sunlight, ambient light, and environment maps
│       ├── Floor.js            # Ground reflection plane and shadow receiver
│       └── World.js            # World container coordinator
├── public/
│   ├── draco/                  # Draco WebAssembly decoders
│   ├── fonts/                  # Custom typography assets
│   ├── images/                 # High-resolution component imagery
│   ├── models/                 # Draco-compressed bike-model.glb
│   └── textures/               # Cube map environment textures
├── index.html                  # HTML entry point and UI overlay sections
├── main.js                     # Application entry point
├── style.css                   # Responsive styles, typography, and dark theme
├── vite.config.js              # Vite build configuration
└── package.json                # Project dependencies and npm scripts
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v16+ recommended):

```bash
node -v
npm -v
```

### Installation

Clone the repository and install the project dependencies:

```bash
git clone https://github.com/PRADXP007/bicycle-3d-web.git
cd bicycle-3d-web
npm install
```

### Running Locally

Start the Vite development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port indicated in your terminal) to view the application.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🚀 Enabling GitHub Pages Live Deployment

This repository includes a preconfigured GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys your website every time you push to the `main` branch.

To enable it on GitHub:
1. Open your repository on GitHub: **[PRADXP007/bicycle-3d-web](https://github.com/PRADXP007/bicycle-3d-web)**
2. Go to **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Once selected, your site will be live at:
   👉 **`https://pradxp007.github.io/bicycle-3d-web/`**

---

## 🎮 Controls & Interactions

- **Scroll Down / Up**: Smoothly traverse the 3D showcase and trigger camera position transitions.
- **Theme Toggle (Sun / Moon button)**: Toggle between Dark Mode and Light Mode with dynamic lighting response.
- **Interactive Drag / Orbit**: Explore angles and lighting reflections on the bike frame.

---

## 👤 Author

**PRADEEP H**
- GitHub: [@PRADXP007](https://github.com/PRADXP007)
- Email: sujiharidass87830@gmail.com

---

## 🤝 Credits & Acknowledgements

- 3D Bike Model by [market.pmnd.rs](https://market.pmnd.rs/model/bike)
- Photos by [Josh Nuttall](https://unsplash.com/@joshnuttall)
- Inspired by Bruno Simon's Three.js Journey and Bokoko33's design aesthetic.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
