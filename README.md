# Philactery 🎲✨

> A frontend web app dedicated to making your online TTRPG sessions legendary.

[🔮 Live Demo](https://melloirl.github.io/ttrpg-frontend/) • [🐛 Report Issues](https://github.com/melloirl/ttrpg-frontend/issues)

---

## 🚀 Features

- ⚡ **Real-time Character Sheets**  
  Update stats, HP/MP, inventory and more—everyone sees changes instantly.

- 📅 **Session Management**  
  Schedule games, track attendance, jot down NPC notes, and keep your campaign on track.

- 🗺️ **Map & Asset Sharing**  
  Drag-and-drop maps, handouts, tokens and images; sync across all players in one click.

- 🛡️ **Robust Permissions**  
  DMs and players get tailored access to sheets, maps, and chat.

- 🔌 **WebSocket-Powered**  
  Ultra-low-latency updates keep you immersed—no manual refresh required.

- 💬 **Built-in Chat**  
  Text chat alongside your game logs—voice integration coming soon!

---

## 🛠️ Tech Stack

- **Framework:** Vue 3 (Composition API)  
- **Language:** TypeScript  
- **Bundler:** Vite  
- **Styling:** CSS and utility-first patterns  
- **Hosting:** GitHub Pages (via `gh-pages`)  
- **Realtime:** WebSocket (Socket.IO or native WS)

---

## 📥 Getting Started

1. **Clone this repo**  
   ```bash
   git clone https://github.com/melloirl/ttrpg-frontend.git
   cd ttrpg-frontend
   ```

2. **Install dependencies**  
   ```bash
   pnpm install
   # or npm install
   ```

3. **Configure your environment**  
   - Copy `.env.example` → `.env`  
   - Fill in your `VITE_API_URL`, `VITE_WS_URL`, etc.

4. **Run development server**  
   ```bash
   pnpm run dev
   ```

5. **Build for production**  
   ```bash
   pnpm run build
   pnpm run preview
   ```

---

## 📜 License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

---
