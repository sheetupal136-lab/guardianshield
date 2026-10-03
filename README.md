# 🛡️ Guardian Shield - Autonomous Women Safety & Emergency System

A 100% free Vercel-ready architecture combining client-side AI Voice Detection, Vercel KV (Redis) real-time state synchronization, Serverless Alert APIs, and an ESP32 IoT hardware bridge.

---

## ⚡ Tech Stack & Architecture

- **Frontend**: Next.js 16 (App Router), React 19, Tailwind CSS, Lucide Icons
- **Voice AI Detection**: In-browser Web Speech API (`SpeechRecognition` / `webkitSpeechRecognition`) supporting Hindi (`hi-IN`) and English (`en-IN`) keywords: *"help"*, *"bachao"*, *"sos"*, *"emergency"*, *"madad"*.
- **Database / Bridge**: Vercel KV (powered by Upstash Redis REST API) with automatic local in-memory fallback.
- **Serverless API Routes**:
  - `GET /api/status`: Live system status and event audit logs.
  - `POST /api/status`: Updates state to `SAFE` or `ACTIVE`.
  - `POST /api/alert`: Triggers emergency mode, records incident, and dispatches SMS alerts.
  - `GET & POST /api/esp32`: Ultra-compact endpoints for ESP32 microcontrollers.
- **Hardware**: ESP32 microcontroller with WiFi, physical panic button, and alarm buzzer/strobe LED.

---

## 🚀 Quick Start (Local Development)

### 1. Install & Run
```bash
# Development server runs on http://localhost:3000
npm run dev
```

The application runs out of the box in **Local Simulation Mode** even before configuring Vercel KV or SMS keys.

---

## ☁️ 100% Free Vercel Deployment & KV Setup

### Step 1: Deploy to Vercel
1. Push your repository to GitHub.
2. In [Vercel Dashboard](https://vercel.com/), click **"Add New Project"** and import this repository.
3. Deploy!

### Step 2: Create Free Vercel KV Database
1. In your Vercel project dashboard, go to the **Storage** tab.
2. Click **Create Database** and select **KV (Redis)**.
3. Give it a name (e.g. `guardian-kv`) and click **Create**.
4. Go to the **Quickstart / .env.local** tab and copy:
   - `KV_REST_API_URL`
   - `KV_REST_API_TOKEN`
5. Add these environment variables in your Vercel Project Settings and your local `.env.local` file.

### Step 3: SMS Alerts (Fast2SMS / Twilio)
Add either Fast2SMS or Twilio credentials to `.env.local`:
```env
# Fast2SMS (Free sign-up credits for India)
FAST2SMS_API_KEY="your_api_key"

# Or Twilio (International)
TWILIO_ACCOUNT_SID="your_account_sid"
TWILIO_AUTH_TOKEN="your_auth_token"
TWILIO_PHONE_NUMBER="+1xxxxxxxxxx"
```

---

## 🔌 ESP32 Hardware Integration

The ready-to-flash Arduino sketch is located at:
👉 `hardware/esp32_guardian.ino`

1. Open `hardware/esp32_guardian.ino` in Arduino IDE.
2. Update your WiFi credentials:
   ```cpp
   const char* WIFI_SSID     = "YOUR_WIFI";
   const char* WIFI_PASSWORD = "YOUR_PASSWORD";
   const char* SERVER_BASE_URL = "https://your-project.vercel.app";
   ```
3. Connect components:
   - **Panic Button**: Connect between **GPIO 4** and **GND** (Internal pull-up enabled).
   - **Buzzer / Siren**: Connect to **GPIO 2**.
   - **Strobe LED**: Connect to **GPIO 5**.
4. Upload to your ESP32 board!

---

## 🔒 Security & Privacy
- Voice recognition operates locally inside the user's browser via the native Web Speech API (zero recording upload).
- GPS location permissions are strictly browser-consent bound and coordinates are only dispatched during active SOS events.
