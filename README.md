# CipherQuest 🛡️

A terminal-style **cybersecurity training game** for Mac and Windows. Take
quests, learn how real attacks work, and — most importantly — how to defend
against them. Think *Hacknet* meets *picoCTF*.

> **It's a simulation.** Every network, inbox, server, and account in the game
> is fictional data running entirely on your own machine. CipherQuest never
> connects to the internet and never touches a real system. The goal is to
> teach defensive and conceptual security the legal, ethical way.

## ⬇️ Download (Mac & Windows)

### 👉 [**Download the latest installer**](https://github.com/notisaac132-star/Cool-Hecker-Tool/releases/latest)

That link always points to the newest release. Pick the file for your system:

| Platform | File | How to install |
|----------|------|----------------|
| **macOS** | `CipherQuest-<version>-arm64.dmg` (Apple Silicon) or `-x64.dmg` (Intel) | Open the `.dmg`, drag **CipherQuest** to Applications |
| **Windows** | `CipherQuest-Setup-<version>.exe` | Run the installer and follow the prompts |
| **Windows (no install)** | `CipherQuest-<version>.exe` (portable) | Just double-click it |

The installers are **built and published automatically** by GitHub Actions
every time `main` updates — no manual steps. (First build takes a few minutes
after a push; check the **Actions** tab for progress.)

> **First-launch note:** the apps aren't code-signed yet, so the OS may warn
> you're opening an app from an "unidentified developer." On macOS: right-click →
> Open. On Windows: "More info" → "Run anyway." (Signing requires paid
> Apple/Microsoft developer certificates — see the build notes.)

### Play instantly (no download)

Open `cipherquest-standalone.html` from this repo in any browser — the whole
game is in that one file.

## Missions

| # | Mission | What it teaches |
|---|---------|-----------------|
| 1 | First Handshake | Recon, scope, and authorization |
| 2 | Maya's Café WiFi | WPA2, dictionary attacks, passphrase strength |
| 3 | Spot the Phish | Phishing red flags & how to avoid them |
| 4 | Weak Sauce | Default credentials, rate limiting, 2FA |
| 5 | Little Bobby Tables | SQL injection & parameterized queries |
| 6 | Caesar's Secret | Classical crypto & why modern crypto matters |

Every mission ends with a **DEBRIEF** explaining how to defend against the
technique you just learned.

## Run it (development)

Requires [Node.js](https://nodejs.org) 18+.

```bash
cd cipherquest
npm install
npm start
```

## Releasing / building installers

This repo ships a **GitHub Actions** workflow (`.github/workflows/build.yml`)
that builds the real installers on native runners — macOS for the `.dmg`,
Windows for the `.exe` — so you never have to own both machines.

**It runs automatically on every push to `main`** and publishes the `.dmg` +
Windows installers to the [latest release](https://github.com/notisaac132-star/Cool-Hecker-Tool/releases/latest).
You don't have to do anything to get installers — just push your changes.

**To ship a new version:** bump `"version"` in `package.json`, commit, and push
to `main`. The new build replaces the release assets.

**To build locally** (produces only your current OS's format):
```bash
npm run dist:win   # on Windows -> .exe installer + portable
npm run dist:mac   # on macOS   -> .dmg
```
Output lands in `dist/`.

> **Why CI instead of building here:** a macOS `.dmg` can only be produced on
> macOS (Apple's packaging tools are macOS-only) and Windows installers want a
> Windows toolchain. The Actions matrix runs each build on the right OS.
> For distribution to other people you'll also want code signing — an Apple
> Developer ID for macOS and an Authenticode certificate for Windows — which you
> add as repo secrets later.

## Gameplay

Type `help` for commands. Start with `accept handshake`, or click a mission in
the sidebar. Use ↑/↓ for command history.

## Legal & ethical note

CipherQuest teaches security concepts in a sandbox. In the real world, only
ever test systems **you own or have explicit written permission to test**.
Unauthorized access to networks, devices, or accounts is illegal. Use what you
learn here to protect people.

## License

MIT
