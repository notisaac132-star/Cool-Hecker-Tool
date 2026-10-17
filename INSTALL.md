# 📥 How to Install CipherQuest

A quick, step-by-step guide for **Windows** and **macOS**. Takes about a minute.

> **Heads-up:** CipherQuest isn't code-signed yet (signing certificates cost
> money). That means your computer will show a one-time "unknown developer"
> warning the first time you open it. That's expected — the steps below show you
> how to get past it. CipherQuest is a safe, offline game that never connects to
> the internet.

---

## Step 1 — Download

Go to the downloads page:

### 👉 https://github.com/notisaac132-star/Cool-Hecker-Tool/releases/latest

Under **Assets**, download the file for your computer:

| Your computer | File to download |
|---------------|------------------|
| 🪟 **Windows** (most people) | `CipherQuest-Setup-1.0.0.exe` |
| 🪟 **Windows**, no install (run from a USB stick etc.) | `CipherQuest-Portable-1.0.0.exe` |
| 🍎 **Mac** with Apple chip (M1/M2/M3/M4) | `CipherQuest-1.0.0-arm64.dmg` |
| 🍎 **Mac** with Intel chip | `CipherQuest-1.0.0-x64.dmg` |

> Not sure which Mac you have? Click the  Apple menu → **About This Mac**. If it
> says "Apple M1/M2/M3…" pick **arm64**. If it says "Intel" pick **x64**.

---

## Step 2 — Install

### 🪟 Windows

1. Double-click **`CipherQuest-Setup-1.0.0.exe`**.
2. You'll likely see a blue **"Windows protected your PC"** box.
   → Click **More info** → **Run anyway**.
3. Follow the installer (choose where to install, or just click through).
4. Launch **CipherQuest** from the Start menu or desktop shortcut. 🎉

*(Using the portable version instead? Skip all of the above — just double-click
`CipherQuest-Portable-1.0.0.exe` and it runs. Click **More info → Run anyway**
if the warning appears.)*

### 🍎 macOS

1. Double-click the downloaded **`.dmg`** file.
2. A window opens — **drag the CipherQuest icon onto the Applications folder.**
3. Open **Applications**, then **right-click** (or Control-click) **CipherQuest**
   → choose **Open**.
4. A box says the app is from an unidentified developer → click **Open** again. 🎉

   > You only have to do the right-click → Open trick **once**. After that, you
   > can open it normally from Launchpad or the Dock.

   **If macOS says the app is "damaged" or won't open at all** (newer macOS is
   strict about unsigned apps), open the **Terminal** app and run:
   ```bash
   xattr -cr /Applications/CipherQuest.app
   ```
   Then open the app again. This just removes the "downloaded from the internet"
   quarantine flag.

---

## Step 3 — Play

1. Open CipherQuest.
2. Type `help` and press Enter.
3. Type `accept handshake` to start the first mission — or click a mission in
   the sidebar.

Have fun, and remember: everything in the game is a **simulation**. 🛡️

---

## 🧩 Troubleshooting

**"I don't see any files to download on the Releases page."**
The installers are built automatically after each update and take a few minutes.
Check the **Actions** tab for build progress, then refresh the Releases page.

**Windows SmartScreen won't let me run it.**
Click **More info**, then **Run anyway**. This appears because the app isn't
signed with a paid certificate, not because anything is wrong with it.

**Mac: "CipherQuest can't be opened because Apple cannot check it for malicious
software."**
Right-click the app → **Open** (not double-click). If that still fails, run the
`xattr -cr` command shown above.

**My antivirus flagged it.**
Unsigned Electron apps sometimes trigger false positives. The full source code
is in this repo if you or your IT team want to review or build it yourself.

---

## 🛠️ Prefer to build it yourself?

You don't need a download at all — see the
[README](README.md#releasing--building-installers) for `npm start` and local
build instructions.

---

## 🗑️ Uninstall

- **Windows:** Settings → Apps → **CipherQuest** → Uninstall. (Portable version:
  just delete the `.exe`.)
- **macOS:** drag **CipherQuest** from Applications to the Trash.
