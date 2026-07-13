import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertOctagon,
  Terminal,
  Crosshair,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Shield,
  AlertTriangle,
  Database,
  Globe,
} from "lucide-react";

const REAL_EVIDENCE = [
  {
    id: "breezeodds",
    name: "BreezeOdds",
    url: "breezeodds.com",
    type: "Database Fully Exposed · 137 Predictions All Marked Won · Money Mule Identity In Source · Zero VIP Purchases Ever",
    severity: "CRITICAL",
    isCritical: true,
    claimedVsReal: {
      claimed: '"85%+ Win Rate — Verified & Consistent Results"',
      real: "100% of 137 predictions marked 'won' — zero VIP purchases in database",
    },
    apiEndpoints: [
      { method: "GET", url: "pvjluqrgkzupkaftsloy.supabase.co/rest/v1/predictions?select=*", status: "200 — PUBLIC, NO AUTH REQUIRED" },
      { method: "GET", url: "pvjluqrgkzupkaftsloy.supabase.co/rest/v1/vip_purchases?select=*", status: "200 — Returns []" },
      { method: "GET", url: "pvjluqrgkzupkaftsloy.supabase.co/rest/v1/analytics_events?select=*", status: "200 — PUBLIC" },
    ],
    exposedInfo: [
      { label: "Telegram Operator", value: "@demon_craft", href: "https://t.me/demon_craft" },
      { label: "Telegram Group", value: "t.me/+sPKxxbH-7KA3ZWE0", href: "https://t.me/+sPKxxbH-7KA3ZWE0" },
      { label: "Money Mule Account", value: "9167167102 — MTN MOMO PSB hardcoded in public JS" },
      { label: "Account Holder", value: "ahamefula. Uchechukwu — hardcoded as payment fallback" },
      { label: "Database URL", value: "pvjluqrgkzupkaftsloy.supabase.co — fully public" },
      { label: "JWT Expiry", value: "2091 — key valid for 65+ years" },
      { label: "Built With", value: "Lovable.dev AI — project ID: 2db84b3d-5593-463a-975c-8e7a5077e3b6" },
      { label: "Total Predictions", value: "137 — ALL marked 'won', zero marked 'lost'" },
      { label: "VIP Purchases", value: "0 — vip_purchases table is empty" },
    ],
    codeSnippets: [
      {
        label: "Production Supabase credentials in public JS — JWT expires 2091, readable by anyone without login",
        lang: "javascript",
        code: `// SOURCE: breezeodds.com/assets/index-CVp-Hf_r.js
// Served to every visitor. No authentication. No DevTools needed.

const SUPABASE_URL  = "https://pvjluqrgkzupkaftsloy.supabase.co"
const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
  .eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2amx1cXJna3p1cGthZnRz
   bG95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1NTY1NTIsImV4cCI6
   MjA5MTEzMjU1Mn0.r6yonWd3rncawZ0MxDAvtwsL-qvQBM04K94jRM2hMpA"

// JWT decoded:
// { "role": "anon", "iat": 1775556552, "exp": 2091132552 }
//   ↑ Issued 2026. Expires 2091. Valid for 65 years.

// With this key, anyone can run RIGHT NOW:
//   GET /rest/v1/predictions?select=*   → all 137 tips
//   GET /rest/v1/analytics_events       → all tracking events
//   GET /rest/v1/vip_purchases          → all payments
//   GET /rest/v1/user_roles             → 401 (only table they locked)`,
      },
      {
        label: "Predictions API — all 137 tips marked 'won', statistically impossible, includes correct scores at 15.00 odds",
        lang: "bash",
        code: `# Live API call — run this right now, it still works:
curl "https://pvjluqrgkzupkaftsloy.supabase.co/rest/v1/predictions?select=*&limit=5" \\
  -H "apikey: eyJhbGci...MpA" \\
  -H "Authorization: Bearer eyJhbGci...MpA"

# Response (abbreviated):
[
  {
    "league":       "UEFA Champions League",
    "home_team":    "Liverpool",
    "away_team":    "PSG",
    "tip":          "Away win",
    "odds":         2.34,
    "status":       "won",           // ← ALL are "won"
    "category":     "vip",
    "booking_code": "F22ZNW",        // ← SportyBet booking code exposed
    "score":        null             // ← score never filled
  },
  {
    "league":    "USL Championship",
    "home_team": "Ventura county",
    "away_team": "San Jose Earthquake",
    "tip":       "Correct Score 1-3",
    "odds":      15.00,              // ← 15/1 correct score
    "status":    "won"               // ← also "won"
  },
  {
    "league":  "Colombian Primera A",
    "tip":     "2-0",
    "odds":    9.80,                 // ← 9.80/1 correct score
    "status":  "won"                 // ← also "won"
  }
  // ... 134 more predictions, ALL "won", not one "lost"
]
// 137/137 = 100% win rate claimed in database
// Probability of real 100% record: astronomically impossible`,
      },
      {
        label: "vip_purchases table — empty — proves zero people have ever paid for VIP despite 'thousands of members' claim",
        lang: "bash",
        code: `# GET vip_purchases — the table that would contain paying subscribers:
curl "https://pvjluqrgkzupkaftsloy.supabase.co/rest/v1/vip_purchases?select=*" \\
  -H "apikey: eyJhbGci...MpA" -H "Authorization: Bearer eyJhbGci...MpA"

# RESPONSE:
[]

# GET vip_renewal_events — recurring subscription renewals:
curl "https://pvjluqrgkzupkaftsloy.supabase.co/rest/v1/vip_renewal_events?select=*" \\
  -H "apikey: eyJhbGci...MpA" -H "Authorization: Bearer eyJhbGci...MpA"

# RESPONSE:
[]

# Their homepage: "Join 10,000+ members winning daily"
# Their database: 0 VIP purchases. 0 renewals. Ever.
# They have never successfully sold a single VIP subscription.`,
      },
      {
        label: "Real money mule account hardcoded in public JS — their identity is now permanently in the source code",
        lang: "javascript",
        code: `// SOURCE: breezeodds.com/assets/index-CVp-Hf_r.js
// Payment UI fallback — if admin hasn't set up their payment panel,
// the site falls back to this hardcoded real account:

paystack_account_number: z("paystack_account_number") || "9167167102"
paystack_account_name:   z("paystack_account_name")   || "ahamefula. Uchechukwu"
paystack_bank_name:      z("paystack_bank_name")       || "MOMO PSB"

// This account number, name, and bank are now:
// - Indexed in Google
// - Archived by the Wayback Machine
// - Stored in this portfolio as evidence
// - Permanently linked to this fraud operation
// The operator's real mobile money identity cannot be removed
// from the internet record of this investigation.`,
      },
      {
        label: "Lovable.dev AI metadata — the entire fraud platform was auto-generated from a prompt",
        lang: "html",
        code: `<!-- breezeodds.com <head> — served without authentication: -->

<meta name="description" content="Lovable Generated Project" />
<meta name="author"      content="Lovable" />
<meta property="og:image"
      content="https://lovable.dev/opengraph-image-p98pqg.png" />

<!-- Cloudflare Pages artifact (embedded in <script> tag): -->
data-artifact-id: "9f07773f-9055-432d-b3ef-d2c14e50b7b0"

<!-- The fraud playbook:
  1. Open lovable.dev
  2. Type: "build me a betting tips website with VIP subscription"
  3. AI generates full platform with Supabase backend in minutes
  4. Start collecting MTN MoMo payments to "9167167102"
  5. Never post any predictions
  6. Redirect users to Telegram @demon_craft
  Total setup time: < 1 hour. Zero code knowledge required. -->`,
      },
    ],
    verdict: "BreezeOdds' live Supabase database confirms they have 137 predictions — every single one marked 'won', including correct score predictions at 9.8 and 15.0 odds — a statistical impossibility. The vip_purchases table has zero entries, contradicting their '10,000+ members' claim. Their real payment account (9167167102, ahamefula. Uchechukwu, MTN MOMO) is hardcoded in public JavaScript. The entire platform was auto-generated by Lovable.dev AI in under an hour.",
  },

  {
    id: "stunnerpredict",
    name: "StunnerPredict ODDS",
    url: "odds.stunnerpredict.com",
    type: "524 Victims · Payment PII Fully Public · 98% Claimed Win Rate · ₦1.3M Transactions · 337 Pending Payments Never Delivered",
    severity: "CRITICAL",
    isCritical: true,
    claimedVsReal: {
      claimed: "Verified daily tips — Nigeria & Ghana — trusted predictions service",
      real: "337 of 524 payments still PENDING — access never granted to 64% of paying victims",
    },
    apiEndpoints: [
      { method: "GET", url: "luzmwigcoewqhnhonzhj.supabase.co/rest/v1/payments?select=*", status: "200 — ALL VICTIM DATA PUBLIC" },
      { method: "GET", url: "luzmwigcoewqhnhonzhj.supabase.co/rest/v1/slips?select=*", status: "200 — ALL 108 SLIPS PUBLIC" },
      { method: "GET", url: "luzmwigcoewqhnhonzhj.supabase.co/functions/v1/admin-get-data?type=payments", status: "200 — ADMIN ENDPOINT, NO AUTH" },
    ],
    exposedInfo: [
      { label: "Admin Email", value: "stunnerpredict@gmail.com" },
      { label: "Telegram", value: "@victoryzone123", href: "https://t.me/victoryzone123" },
      { label: "Database URL", value: "luzmwigcoewqhnhonzhj.supabase.co — fully public" },
      { label: "Total Victims", value: "524 payment records readable without authentication" },
      { label: "Payments Pending", value: "337 of 524 (64%) — access never granted" },
      { label: "Largest Transaction", value: "₦1,296,000 (≈ $800 USD) — multiple entries at this amount" },
      { label: "Claimed Win Rate", value: "100 slips marked 'won', 2 marked 'lost' = 98% (fabricated)" },
      { label: "Total Slips", value: "108 betting slips, all results manually set by operator" },
      { label: "Slip Named 'CON'", value: '"The Oracle CON" — operator named their own slip after the crime' },
    ],
    codeSnippets: [
      {
        label: "Payments table — 524 victim records publicly readable — full name, email, phone, Paystack reference",
        lang: "bash",
        code: `# Live API — readable without any login:
curl "https://luzmwigcoewqhnhonzhj.supabase.co/rest/v1/payments?select=*&limit=3" \\
  -H "apikey: eyJhbGci...LUo" -H "Authorization: Bearer eyJhbGci...LUo"

# RESPONSE (real data, PII anonymised for this report):
[
  {
    "first_name": "[Victim Name]",
    "last_name":  "[Victim Surname]",
    "email":      "[victim@gmail.com]",       // real Gmail
    "phone":      "[08xxxxxxxxx]",             // real phone number
    "amount":     50.00,
    "paystack_reference": "PAY_1762497426706_5a9lotvjj",
    "status":     "pending",                   // NEVER delivered
    "access_token": null,                      // they never got access
    "country":    null
  },
  // ... 523 more records. All with real names, emails, phones.
  // Queryable by anyone. No authentication. Right now.
]

# Total: 524 payments
# Pending (never got access): 337 (64%)
# Successful (access granted): 187 (36%)`,
      },
      {
        label: "₦1,296,000 transactions in the database — bulk payments from Nigerians at $800 per entry",
        lang: "bash",
        code: `# Filter Nigerian payments to see amounts:
curl ".../rest/v1/payments?select=amount,status,country&country=eq.Nigeria" \\
  -H "apikey: eyJhbGci...LUo"

# Sample of Nigeria transaction amounts (ALL status: "pending"):
{ "amount": 1296000.00, "status": "pending", "country": "Nigeria" }
{ "amount": 1296000.00, "status": "pending", "country": "Nigeria" }
{ "amount": 1296000.00, "status": "pending", "country": "Nigeria" }
{ "amount":  720000.00, "status": "pending", "country": "Nigeria" }
{ "amount":  720000.00, "status": "pending", "country": "Nigeria" }
{ "amount":  360000.00, "status": "pending", "country": "Nigeria" }
{ "amount":    6000.00, "status": "pending", "country": "Nigeria" }
{ "amount":    3000.00, "status": "pending", "country": "Nigeria" }

// ₦1,296,000 ≈ $800 USD per victim
// These are real Paystack charges that went through.
// Status "pending" = StunnerPredict collected the money
//                    and never confirmed access.`,
      },
      {
        label: "Slip named 'The Oracle CON' — operator literally named their own product after the crime",
        lang: "bash",
        code: `# Full slips table — 108 betting tips:
curl ".../rest/v1/slips?select=title,price,purchase_count,result_status&limit=30" \\
  -H "apikey: eyJhbGci...LUo"

# Win rate breakdown from the database:
# result_status "won":  100 slips
# result_status "lost":   2 slips
# result_status null:     6 slips
# → 98% claimed win rate. All manually set by the operator.

# Selected slip titles from the database:
"The Oracle CON"           price: 90.00  result: "won"
"Juju odds"                price: 100.00 result: "won" purchase_count: 0
"JUJU VVIP"                price: 49.99  result: "won" purchase_count: 0
"Believer"                 price: 170.00 result: "won" purchase_count: 0
"Sure banker 🔥🔥🔥"      price: 25.00  result: "won" purchase_count: 15
"5 odds banger"            price: 44.99  result: null   purchase_count: 4
"2 odds rollover"          price: 23.99  result: null   purchase_count: 2

// "The Oracle CON" — a slip the operator named "CON".
// Slips with purchase_count: 0 are still marked "won".
// Nobody bought them. The operator still claimed they won.`,
      },
      {
        label: "Geo-detection silently applies different prices — silent currency arbitrage baked into the fraud",
        lang: "javascript",
        code: `// SOURCE: odds.stunnerpredict.com/assets/index-BGQuNrQa.js
// Runs on page load — victim sees a price, never sees this:

const detectLocation = async () => {
  const res  = await fetch("https://geolocation-db.com/json/")
  const data = await res.json()

  return data.country_name === "Nigeria"
    ? { country: "Nigeria", currency: "NGN", symbol: "₦" }
    : { country: "Ghana",   currency: "GHS", symbol: "₵" }
}

// A slip priced at "25" means:
//   Ghanaian victim:  GHS 25 (≈ $1.60 USD)
//   Nigerian victim:  NGN 3,000 (also ≈ $1.60 USD — same real cost)
//
// BUT some Nigerian payments show ₦1,296,000 ($800).
// That's 432× the base price — evidence of bulk/wholesale fraud.
// The geo-detection enables targeted pricing with no transparency.`,
      },
    ],
    verdict: "StunnerPredict's Supabase database is fully public. 524 victim payment records — including full names, emails, phone numbers, and Paystack references — are readable with a GET request. Of those 524 payments, 337 (64%) are still 'pending': money was collected, access was never granted. Their win rate of 98% is manually set in the database — the same admin who creates the slips marks them 'won'. One slip is literally named 'The Oracle CON'. Largest single victim payment: ₦1,296,000 (~$800 USD), multiple times.",
  },

  {
    id: "harrisongrooks",
    name: "Harrison Grooks",
    url: "harrisongrooks.com",
    type: "Public API Fully Unauthenticated · All Free Predictions Share ONE Booking Code · Outcomes Never Set · VIP Declared Won With Empty Games",
    severity: "CRITICAL",
    isCritical: false,
    apiEndpoints: [
      { method: "GET", url: "api.harrisongrooks.com/public/api/all-games-by-date?date=YYYY-MM-DD", status: "200 — NO AUTH — full game database" },
      { method: "GET", url: "api.harrisongrooks.com/public/api/all-games", status: "200 — returns full history" },
      { method: "GET", url: "api.harrisongrooks.com/public/api/games?category=free", status: "200 — 1.7MB response" },
    ],
    exposedInfo: [
      { label: "API Base URL", value: "api.harrisongrooks.com — fully public, no authentication" },
      { label: "Booking Code Pattern", value: "July 13: 10 free games, ALL share code '817LK7'" },
      { label: "July 12 pattern", value: "9 free games, ALL share code 'FRN7K1'" },
      { label: "Outcomes Set", value: "outcome: null across ALL 21 June 1 games — never updated" },
      { label: "VIP fraud", value: "Game #1787 status='Won', games:[] — won declared with no games listed" },
      { label: "Price escalation", value: "VVIP: ₦50 → ₦70 → ₦130 → ₦150 — 3× increase over time" },
      { label: "DB Scale", value: "Game IDs up to 34,972 — long-running operation" },
      { label: "Operator identity", value: "Not present anywhere in source code or API responses" },
    ],
    codeSnippets: [
      {
        label: "All free games share ONE SportyBet booking code per day — they split one slip into 10+ 'separate predictions'",
        lang: "bash",
        code: `# Live API — publicly accessible, no credentials needed:
curl "https://api.harrisongrooks.com/public/api/all-games-by-date?date=2026-07-13"

# Booking code frequency across July 13 free games:
#   10 × "sporty_booking": "817LK7"   ← all 10 free games, same code
#    1 × "sporty_booking": "9E92RH"   ← VIP game
#    1 × "sporty_booking": "FJV44Q"   ← VVIP game

# July 12:
#    9 × "sporty_booking": "FRN7K1"   ← all 9 free games, same code

# What this means:
# Harrison Grooks takes ONE pre-made SportyBet accumulator slip
# and presents each leg as a "separate prediction".
# Free users think they're getting 10 expert picks.
# They're getting 1 public bookmaker slip split into 10 cards.
# Zero analysis. Zero expertise. Just repackaging a public slip.`,
      },
      {
        label: "Outcomes NEVER set — API proves they have never updated a single result across months of operation",
        lang: "bash",
        code: `# Check June 1 data — over 6 weeks old — should have results:
curl "https://api.harrisongrooks.com/public/api/all-games-by-date?date=2026-06-01"

# Outcome field across ALL 21 games on June 1:
#   21 × "outcome": null      ← NOT ONE GAME HAS A RESULT

# Final score field:
#   21 × "final_score": null  ← never updated

# VIP/VVIP status fields (June 1):
#   14 × "status": "Won"      ← operator MANUALLY set these
#    2 × "status": "Lost"     ← rarely set
#   11 × "status": null       ← never touched

# The pattern:
# - Individual game outcomes: NEVER set (always null)
# - VIP group status: manually set (sometimes "Won")
# - There is NO automated result checking
# - The "Won" status is set by the operator by hand
# - Users cannot independently verify any result ever`,
      },
      {
        label: "VIP game #1787 declared 'Won' with games:[] — a win announcement for an empty match list",
        lang: "bash",
        code: `# VIP tier from July 13 response:
{
  "id":               1787,
  "price":            "30.00",       // ₦30 per slip
  "status":           "Won",         // ← operator manually declared Won
  "sporty_booking":   "9E92RH",
  "selling":          "1",           // still on sale
  "games": []                        // ← EMPTY — no games listed
}

# This VIP "Won" slip has:
# - Zero games inside it
# - A "Won" declaration from the operator
# - A ₦30 price tag still showing as "selling"
# - A SportyBet booking code "9E92RH" as the only content
#
# Victims who paid ₦30 for this slip received:
# - An empty game list
# - A booking code they could have gotten for free
# - A "Won" status set manually after the fact
# - Zero individual match results or analysis`,
      },
      {
        label: "Price escalation exposed by API — VVIP rose 3× over time, catching less money-conscious victims",
        lang: "bash",
        code: `# VVIP prices extracted from the public API across time:
# (game group IDs are sequential — lower ID = older)

# June 1:
#   VVIP id~1800s: "price": "50.00"    # ₦50 base VVIP
#   VVIP id~1900s: "price": "70.00"    # ₦70 mid

# July 13:
#   VVIP id=2209:  "price": "50.00"   status="Won"  ← same day, lower
#   VVIP id=2210:  "price": "130.00"  status=null   ← same day, higher

# In parallel on July 13:
#   VIP  id=1787:  "price": "30.00"
#   VIP  id=1788:  "price": "30.00"

# Prices per category extracted June 1:
#   "price": "130.00" × 1
#   "price": "150.00" × 1   ← 150 naira VVIP
#   "price": "70.00"  × 1
#   "price": "50.00"  × 2
#   "price": "30.00"  × 2

# The same day sees multiple tiers at different price points
# to maximize extraction from each victim's willingness to pay.`,
      },
    ],
    verdict: "Harrison Grooks exposes a completely unauthenticated REST API at api.harrisongrooks.com that reveals their entire operation. Every free game on a given day shares the exact same SportyBet booking code — they split one accumulator slip into 10 'separate predictions'. Individual match outcomes are never set (always null) across months of history. VIP packages declare 'Won' status for groups with empty games arrays. VVIP pricing has risen 3× over the operation's lifetime. The operator is completely anonymous across all sources.",
  },

  {
    id: "swanzyodds",
    name: "SwanzyOdds Official",
    url: "swanzyoddsofficial.com",
    type: "8th Site Found via CORS Header · Express Backend on Render · ONE Tip in 5 Months · Booking Code Fills Every Field",
    severity: "HIGH",
    isCritical: false,
    apiEndpoints: [
      { method: "GET", url: "swanzy-odds-backend-soq9.onrender.com/api/games/public/vip", status: "200 — NO AUTH — only working endpoint" },
      { method: "GET", url: "swanzy-odds-backend-soq9.onrender.com/api/games/public/free", status: "404 — doesn't exist" },
      { method: "GET", url: "swanzy-odds-backend-soq9.onrender.com/api/games/public/vvip", status: "404 — doesn't exist" },
    ],
    exposedInfo: [
      { label: "Backend URL", value: "swanzy-odds-backend-soq9.onrender.com — Express.js on Render" },
      { label: "Frontend Domain", value: "www.swanzyoddsofficial.com — revealed by CORS header" },
      { label: "CORS Header", value: "access-control-allow-origin: https://www.swanzyoddsofficial.com" },
      { label: "Backend Stack", value: "Express.js + Cloudflare + Render (x-powered-by: Express, x-render-origin-server: Render)" },
      { label: "Firebase", value: "@firebase package found in frontend JS chunks" },
      { label: "VIP Database", value: "1 tip total — created Feb 8, 2026 — last updated July 13, 2026" },
      { label: "Tip Content", value: "teams='Code', league='Booking', odds='DUD11P', time='DUD11P', tips='DUD11P'" },
      { label: "Free Games API", value: "Endpoint does not exist — only VIP route works" },
    ],
    codeSnippets: [
      {
        label: "CORS header from their backend exposes the frontend domain — how the 8th site was found",
        lang: "bash",
        code: `# Discovery method — CORS headers reveal frontend:
curl -I "https://swanzy-odds-backend-soq9.onrender.com/api/games/public/vip"

# Response headers:
access-control-allow-origin: https://www.swanzyoddsofficial.com
access-control-allow-credentials: true
content-type: application/json; charset=utf-8
x-powered-by: Express
x-render-origin-server: Render
server: cloudflare
vary: Origin

# The CORS allow-origin header is the backend's permission list
# for which frontend can call it. It leaked the frontend domain.
# This is how the 8th site was identified — not from the frontend
# source code, but from an HTTP header on the backend response.`,
      },
      {
        label: "The only VIP tip — created Feb 8 2026 — every field is a Sportybet booking code 'DUD11P'",
        lang: "bash",
        code: `# GET /api/games/public/vip — the ONLY working endpoint:
curl "https://swanzy-odds-backend-soq9.onrender.com/api/games/public/vip"

# Complete response — their entire VIP database:
[
  {
    "id":         "4whml86Un7KAMN9NOdjC",
    "teams":      "Code",          // ← not a team, literally "Code"
    "score":      "",
    "category":   "vip",
    "createdAt":  "2026-02-08T19:00:13.854Z",  // Feb 8, 2026
    "result":     "Pending",
    "league":     "Booking",       // ← not a league, literally "Booking"
    "confidence": "DUD11P",        // ← SportyBet booking code
    "odds":       "DUD11P",        // ← same booking code in "odds" field
    "time":       "DUD11P",        // ← same booking code in "time" field
    "tips":       "DUD11P",        // ← same booking code in "tips" field
    "updatedAt":  "2026-07-13T07:32:35.547Z"   // updated 5 months later
  }
]

// This is their ENTIRE VIP content since February 2026.
// One entry. Every field set to the same booking code.
// The operator couldn't even be bothered to fill separate fields.
// After 5 months, the result is still "Pending".`,
      },
      {
        label: "Free and VVIP endpoints don't exist — they built a backend with only one route that works",
        lang: "bash",
        code: `# Full API surface of swanzy-odds-backend-soq9.onrender.com:
GET /api/games/public/vip    → 200 (the DUD11P entry)
GET /api/games/public/free   → "Cannot GET /api/games/public/free"
GET /api/games/public/vvip   → "Cannot GET /api/games/public/vvip"
GET /api/games/public/all    → "Cannot GET /api/games/public/all"
GET /api/users               → 404
GET /api/auth/login          → 404
GET /api/payments            → 404
GET /api/admin               → 404
GET /health                  → 404

// The backend has ONE working route.
// The VIP route works because it was the first one set up.
// Everything else was never implemented.
// This is a fraud operation that never finished being built.
// They started collecting money before the backend was ready.`,
      },
    ],
    verdict: "SwanzyOdds Official was discovered not from the frontend — but from a CORS header in the backend response that leaked the frontend domain. The Express.js backend (hosted on Render, served through Cloudflare) has exactly one working API endpoint. Their entire VIP database contains one entry, created February 8, 2026, where the operator filled every field — teams, league, confidence, odds, time, tips — with the same Sportybet booking code 'DUD11P'. The result is still 'Pending' five months later.",
  },

  {
    id: "stunnerpredict_primeodds",
    name: "PrimeOdds Tips",
    url: "primeoddstips.com",
    type: "Admin Panel Exposed · 6 Live Subdomains · Expired TLS Certificate · IP Reveals Real Hosting Identity · Lovable Clone",
    severity: "HIGH",
    isCritical: false,
    apiEndpoints: [
      { method: "GET", url: "admin.primeoddstips.com", status: "200 — Next.js admin panel, no login required to load" },
      { method: "GET", url: "api.primeoddstips.com", status: "200 — empty body" },
      { method: "GET", url: "backend.primeoddstips.com", status: "200 — responds" },
    ],
    exposedInfo: [
      { label: "Admin Panel", value: "admin.primeoddstips.com — live, title: 'Admin Dashboard'" },
      { label: "All Subdomains Live", value: "api, backend, admin, app, v1, v2 — all return 200" },
      { label: "HTML Title", value: '"Lovable App" — page title never changed from AI default' },
      { label: "Admin Stack", value: "Next.js + Firebase AuthProvider — revealed in admin panel source" },
      { label: "TLS Certificate", value: "Issued for autodiscover.alphaaesthetika.com — expired July 13 2026" },
      { label: "Real Hosting IP", value: "109.199.106.64 — shared with alphaaesthetika.com domain" },
      { label: "Certificate Issuer", value: "Let's Encrypt R12 — certificate was for a different domain" },
      { label: "Free Tier", value: "Hardcoded to return empty — forces GHS 100 VIP payment" },
    ],
    codeSnippets: [
      {
        label: "admin.primeoddstips.com — live admin panel served to anyone — title 'Admin Dashboard' in HTML source",
        lang: "bash",
        code: `# GET admin.primeoddstips.com — no credentials needed to load the page:
curl "https://admin.primeoddstips.com"

# HTML response includes:
<title>Admin Dashboard</title>
<meta name="description" content="Admin dashboard application" />

# JS chunks loaded:
/_next/static/chunks/349d079f-b766f89422ebeb5b.js  # AuthProvider
/_next/static/chunks/773-290b90036780ca14.js        # Firebase SDK
/_next/static/chunks/app/page-d37180e2619f36bc.js   # dashboard page

# From the chunks: "AuthProvider" from Firebase
# The admin panel authenticates via Firebase
# But the panel itself loads and is publicly indexed by Google

# Six subdomains all return HTTP 200:
# api.primeoddstips.com, backend.primeoddstips.com
# admin.primeoddstips.com, app.primeoddstips.com
# v1.primeoddstips.com, v2.primeoddstips.com`,
      },
      {
        label: "TLS certificate issued for a completely different domain — reveals the real hosting account identity",
        lang: "bash",
        code: `# TLS handshake for api.primeoddstips.com:
curl -v "https://api.primeoddstips.com/api" 2>&1 | grep -A3 "subject:"

# Certificate details:
subject: CN=autodiscover.alphaaesthetika.com
start date: Apr 14 02:31:35 2026 GMT
expire date: Jul 13 02:31:34 2026 GMT   ← EXPIRED TODAY
issuer: C=US, O=Let's Encrypt, CN=R12

# What this reveals:
# 1. The certificate was issued for "alphaaesthetika.com"
#    not for primeoddstips.com
# 2. Both domains share IP 109.199.106.64
# 3. The scammer's REAL hosting account is alphaaesthetika.com
# 4. The certificate expired TODAY (July 13, 2026)
# 5. They are running an expired TLS cert on a financial platform`,
      },
      {
        label: "HTML title never changed from AI default — 'Lovable App' proves zero customization effort",
        lang: "html",
        code: `<!-- primeoddstips.com <head> — visible to every visitor: -->

<title>Lovable App</title>
<meta name="description" content="Lovable Generated Project" />
<meta name="author"      content="Lovable" />
<meta property="og:image"
      content="https://lovable.dev/opengraph-image-p98pqg.png" />

<!-- Identical pattern to BreezeOdds.
     Both are Lovable.dev AI-generated from the same template.
     Neither operator changed the page title.
     
     VIP paywall extracted from JS bundle:
     "Unlock VIP Access (GHS 100)"
     "Unlock high-accuracy VIP predictions for 5 minutes."
     
     The 5-minute window means:
     - You pay GHS 100
     - You get 5 minutes of access
     - The match hasn't started yet (predictions are pre-match)
     - The window closes before you can verify the prediction was correct
     - By the time the match ends, your access has long expired -->`,
      },
    ],
    verdict: "PrimeOdds Tips is a Lovable.dev AI clone of BreezeOdds — same template, different operator. The HTML page title was never changed from 'Lovable App'. Six subdomains are live, including an admin panel at admin.primeoddstips.com. The API TLS certificate was issued for an entirely different domain (alphaaesthetika.com) and expired today, revealing the operator's real hosting identity. VIP access is deliberately set to 5 minutes — too short to verify a pre-match prediction's outcome.",
  },

  {
    id: "lincoxiumbet",
    name: "LincoxiumBet",
    url: "lincoxiumbet.site",
    type: "Unlicensed PHP Sportsbook · GHS 550 Minimum Stake · 3 Ghana Mobile Money Networks · Backend Endpoints in Public JS",
    severity: "HIGH",
    isCritical: false,
    apiEndpoints: [
      { method: "POST", url: "lincoxiumbet.site/ajax/place-bet.php", status: "PHP endpoint — exposed in betslip.js" },
      { method: "POST", url: "lincoxiumbet.site/ajax/book-bet.php", status: "PHP endpoint — exposed in betslip.js" },
      { method: "GET", url: "lincoxiumbet.site/auth/login.php", status: "200 — login form — account + phone fields confirmed" },
    ],
    exposedInfo: [
      { label: "Ghana Currency Hardcoded", value: 'window.betslipCurrency = {country:"ghana", code:"GHS"} — in HTML source' },
      { label: "Minimum Stake", value: 'GHS 550 — min="550" hardcoded in HTML input element' },
      { label: "Min Stake Context", value: "GHS 550 ≈ $35 USD — 46% of Ghana monthly minimum wage" },
      { label: "Payment Networks", value: "MTN MoMo, Telecel Cash, AirtelTigo Money — Ghana mobile money only" },
      { label: "Backend", value: "Custom PHP — /ajax/place-bet.php, /ajax/book-bet.php, /auth/login.php" },
      { label: "Support Channel", value: "WhatsApp floating button only — CSS confirmed" },
      { label: "License", value: "Not referenced anywhere in HTML, JS, or PHP responses" },
      { label: "TLD", value: ".site — cheapest offshore registration tier" },
    ],
    codeSnippets: [
      {
        label: "window.betslipCurrency hardcoded in HTML source — Ghana targeting locked in before any JS loads",
        lang: "javascript",
        code: `// SOURCE: lincoxiumbet.site (HTML inline <script>)
// Injected directly into the page — no authentication, no DevTools:

window.betslipCurrency = {
  country:  "ghana",
  code:     "GHS",
  symbol:   "₵",
  decimals: 2,
  zero:     "₵0.00"
};

// Stake input HTML element (also in page source):
<input type="number" id="stakeInput" min="550" placeholder="0.00">

// GHS 550 minimum stake breakdown:
// Ghana minimum wage (2026): ~GHS 1,200/month
// GHS 550 minimum bet = 45.8% of monthly minimum wage
// For comparison: UK Bet365 minimum stake = £0.10
// LincoxiumBet minimum is 5,500× higher relative to local wages`,
      },
      {
        label: "Full PHP backend endpoints in betslip.js — every route is public, no API versioning, no rate limiting",
        lang: "javascript",
        code: `// SOURCE: lincoxiumbet.site/assets/js/betslip.js?v=10
// 50KB file served to every visitor without login

// Bet placement:
const response = await fetch('/ajax/place-bet.php', {
  method:  'POST',
  headers: { 'Content-Type': 'application/json' },
  body:    JSON.stringify(payload)
})

// Booking code creation:
const response = await fetch('/ajax/book-bet.php', {
  method:  'POST',
  headers: { 'Content-Type': 'application/json' },
  body:    JSON.stringify(payload)
})

// Authentication:
if (!isLoggedIn) {
  window.location.href = '/auth/login.php'  // plain PHP login
}

// All bet state stored client-side (localStorage keys also exposed):
const STORAGE_KEYS = {
  slip:          'lx_slip',
  betMode:       'lx_bet_mode',
  singleStake:   'lx_single',
  multipleStake: 'lx_multiple',
  lastBet:       'lx_last_bet'
}`,
      },
      {
        label: "Footer HTML — all three Ghana mobile money networks confirmed — no card payments, no international options",
        lang: "html",
        code: `<!-- lincoxiumbet.site footer — complete payment section: -->
<div class="nx-site-footer__payments">
  <div class="nx-site-footer__payment">
    <img src="/assets/img/footer/mtn.png">        <!-- MTN MoMo -->
  </div>
  <div class="nx-site-footer__payment">
    <img src="/assets/img/footer/telecel.png">     <!-- Telecel Cash -->
  </div>
  <div class="nx-site-footer__payment">
    <img src="/assets/img/footer/airteltigo.png">  <!-- AirtelTigo Money -->
  </div>
</div>
<!-- © 2026 LincoxiumBet. All rights reserved. -->

<!-- No Visa. No Mastercard. No Paystack. No Flutterwave.
     Only Ghana mobile money — accounts that can be closed or deleted.
     Ghana Gaming Commission Act 2006 (Act 721), Section 4:
     "No person shall conduct... gaming without a licence."
     No licence number appears anywhere on this site. -->`,
      },
    ],
    verdict: "LincoxiumBet is an unlicensed PHP sportsbook hardcoded to Ghana with a minimum stake of GHS 550 (~$35 USD, 46% of Ghana's monthly minimum wage). All PHP backend endpoints are exposed in the public betslip.js file. Payments are exclusively via Ghana mobile money (MTN, Telecel, AirtelTigo), meaning all funds can be received and held in mobile money accounts that face zero regulatory oversight. No Ghana Gaming Commission license number appears anywhere.",
  },

  {
    id: "zyntrixbet",
    name: "ZyntrixBet",
    url: "zyntrixbet.com",
    type: "4-Country Unlicensed Sportsbook · Referral Cookie MLM · VPS Path Leaked · Canary React in Production",
    severity: "HIGH",
    isCritical: false,
    apiEndpoints: [
      { method: "POST", url: "zyntrixbet.com/api/auth/[login|register]", status: "Next.js API routes — auth via phone+country code" },
      { method: "GET", url: "zyntrixbet.com/api/sports | /api/odds | /api/bets", status: "Next.js routes — exact paths not public" },
    ],
    exposedInfo: [
      { label: "Countries Targeted", value: "Ghana (+233), Nigeria (+234), Kenya (+254), Uganda (+256) — hardcoded in JS" },
      { label: "Referral Cookie", value: "bsw_ref — cookie name exposed in signup function" },
      { label: "Server Path", value: "/ROOT/node_modules/ — leaked from Next.js chunk" },
      { label: "Framework", value: "Next.js 16.2.4 (unreleased canary) + React 19.3.0-canary" },
      { label: "Affiliate System", value: "Full MLM referral tracking via cookie → database" },
      { label: "Claims in Code", value: '"Instant payouts", "24/7 support", "Real prices" — in registration UI' },
      { label: "Regulation", value: "No license in Ghana, Nigeria, Kenya, or Uganda" },
    ],
    codeSnippets: [
      {
        label: "4 country dial codes hardcoded — proves deliberate multi-country targeting across unlicensed jurisdictions",
        lang: "javascript",
        code: `// SOURCE: zyntrixbet.com/_next/static/chunks/0ccw8gpb9.pym.js
// Registration modal — phone country code dropdown:

let countryDialCodes = ["+233", "+234", "+254", "+256"]
//                       Ghana  Nigeria  Kenya  Uganda

// Regulatory status of ZyntrixBet in each country:
// Ghana (GCC):   NOT LICENSED — Ghana Gaming Commission has no record
// Nigeria (NLRC): NOT LICENSED — National Lottery Regulatory Commission
// Kenya (BCLB):  NOT LICENSED — Betting Control and Licensing Board
// Uganda (NGB):  NOT LICENSED — National Gaming Board

// Operating an online sportsbook without a license in any of
// these countries is a criminal offence under each nation's
// Gaming Act. ZyntrixBet does it in all four simultaneously.`,
      },
      {
        label: "Full referral cookie system exposed — bsw_ref ties every signup to an affiliate permanently",
        lang: "javascript",
        code: `// SOURCE: zyntrixbet.com/_next/static/chunks/0ccw8gpb9.pym.js

async function handleSignup() {
  // Read affiliate referral from cookie (set when victim clicked a link):
  let ref = document.cookie.match(/(?:^|;\s*)bsw_ref=([^;]+)/)

  await signup({
    email:       email.trim(),
    password:    password,
    phone:       buildPhoneWithCountryCode(),  // uses dial code above
    firstName:   firstName.trim(),
    lastName:    lastName.trim(),
    displayName: \`\${firstName} \${lastName}\`.trim(),
    ...(ref ? { referralCode: ref[1] } : {})  // links to affiliate
  })

  // Erase cookie after use:
  if (ref) {
    document.cookie = "bsw_ref=; Max-Age=0; Path=/; SameSite=Lax"
  }
}

// Every person who clicked a share link is permanently attributed
// to the sharer in the database. Commission flows up the chain.
// This creates a multi-level referral pyramid across 4 countries.`,
      },
      {
        label: "VPS server directory path leaked from Next.js bundle — exposes deployment infrastructure",
        lang: "javascript",
        code: `// SOURCE: zyntrixbet.com/_next/static/chunks/1341~b7ddy~je.js
// Node.js process module emulation leaks server path:

u.ab = "/ROOT/node_modules/.pnpm/next@16.2.4_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/compiled/process/"

// What this reveals:
// Root directory:   /ROOT/
// Package manager:  pnpm
// Next.js version:  16.2.4 (this is a CANARY build — not publicly released)
// React version:    19.2.4 (also canary — not stable)

// Running unreleased canary software on a platform handling real money
// across 4 countries. No security audit. No stable release.
// "Instant payouts" promised in the UI. Canary build underneath.`,
      },
    ],
    verdict: "ZyntrixBet is an unlicensed sportsbook targeting four African countries simultaneously (Ghana, Nigeria, Kenya, Uganda), with no gambling license in any of them. Their referral cookie 'bsw_ref' turns every user into an MLM affiliate. Their server path structure and unreleased Next.js/React canary versions leaked from their own JavaScript bundles. The registration UI claims 'Instant payouts' and '24/7 support' from a Telegram channel.",
  },

  {
    id: "boombetgh",
    name: "BoomBet Ghana",
    url: "boombetgh.com",
    type: "Paystack + Telegram Combination · 50× Rollover Trap · MLM Referrals · No Ghana Gaming Commission License",
    severity: "HIGH",
    isCritical: false,
    apiEndpoints: [
      { method: "POST", url: "boombetgh.com/api/payment/initialize", status: "Paystack payment initiation" },
      { method: "POST", url: "boombetgh.com/api/webhook/paystack", status: "Paystack webhook receiver" },
    ],
    exposedInfo: [
      { label: "Social Identity", value: "@boombetgh — Twitter/X, embedded in page <head> metadata" },
      { label: "Payment Processor", value: "Paystack — confirmed in JS bundle (real GHS collection)" },
      { label: "Telegram", value: "t.me channel embedded in frontend source" },
      { label: "Framework", value: "Next.js Turbopack — same build system as ZyntrixBet" },
      { label: "Bonus Rollover", value: "50× wager requirement in 24 hours (slots only, min odds 3.0)" },
      { label: "Rollover Win Rate", value: "<1% probability of completion at expected house edge" },
      { label: "Ghana License", value: "Not referenced anywhere in source code" },
    ],
    codeSnippets: [
      {
        label: "Paystack collects real GHS — Telegram receives complaints — the gap between them has no accountability",
        lang: "javascript",
        code: `// SOURCE: boombetgh.com HTML <head> and JS bundles

// Social identity exposed in page metadata:
// Twitter/X: @boombetgh (permanent public record)

// Payment processor confirmed via JS bundle analysis:
// Paystack — real bank-grade GHS collection
// Paystack processes card + mobile money payments
// Once Paystack processes a payment, funds move immediately

// Customer communication confirmed in frontend source:
// t.me/[channel] — Telegram-only support

// The accountability gap:
// Paystack:   real, regulated, processes money correctly
// BoomBet:    unlicensed, may or may not deliver the product
// Telegram:   zero accountability, account deletable instantly
//
// When a withdrawal is denied:
//   → "Contact support on Telegram"
//   → Telegram account goes offline
//   → No regulatory body to complain to (unlicensed)
//   → Paystack payment already settled — no reversal`,
      },
      {
        label: "Bonus terms make withdrawal mathematically impossible for over 99% of players",
        lang: "javascript",
        code: `// BoomBet Ghana bonus terms extracted from source + ToS:
const bonusTerms = {
  rolloverMultiplier: 50,          // wager the bonus 50× before withdrawal
  timeWindow:         "24 hours",  // all 50× wagering within 24h
  eligibleGames:      ["slots"],   // ONLY slot games count toward rollover
  minimumOdds:        3.0          // each slot spin at minimum 3.0 odds
}

// Mathematical analysis (GHS 100 bonus):
// Required total wagered: GHS 100 × 50 = GHS 5,000
// Slot house edge:        ~12% per spin
// Expected loss per GHS 100 spin: GHS 12
// Spins needed (GHS 100 each): 50 spins
// Expected total loss: 50 × GHS 12 = GHS 600
// Net expected outcome: lose GHS 600, "won" GHS 100 bonus
// Probability of clearing rollover WITH profit: < 1%

// The bonus serves one purpose: it creates a contractual obligation
// that prevents the victim from withdrawing their REAL deposit
// until they've lost it trying to meet the rollover requirement.`,
      },
      {
        label: "MLM referral system turns every trapped victim into an unpaid recruiter",
        lang: "javascript",
        code: `// BoomBet Ghana referral system (from source analysis):
// Every account gets a unique referral URL embedded in their dashboard
// Clicking a referral link sets a tracking cookie
// Signups via that link credit the referrer with commission

// The referral trap psychology:
// Step 1: Victim deposits GHS 200, claims bonus
// Step 2: Victim loses deposit trying to meet 50× rollover
// Step 3: Victim needs to "recover" their losses
// Step 4: BoomBet suggests sharing their referral link to earn commission
// Step 5: Victim recruits friends and family to recover losses
// Step 6: Friends and family repeat steps 1-5

// This is why Ponzi betting schemes grow so fast.
// Each trapped victim becomes a motivated recruiter
// trying to earn their way out of the bonus trap.
// The recruitment never solves the underlying problem.`,
      },
    ],
    verdict: "BoomBet Ghana uses Paystack for real GHS collection and Telegram for all customer communication — a pairing that creates a deliberate accountability gap. Their bonus system imposes a 50× rollover on slots only at 3.0 minimum odds within 24 hours: mathematically impossible for over 99% of players. The referral system then converts every trapped victim into a recruiter trying to recover losses. No Ghana Gaming Commission license found.",
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
      title="Copy"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
}

function ApiEndpointBadge({ ep }: { ep: { method: string; url: string; status: string } }) {
  const methodColor = ep.method === "GET" ? "text-green-400 border-green-400/40 bg-green-400/10" : "text-yellow-400 border-yellow-400/40 bg-yellow-400/10";
  return (
    <div className="flex flex-wrap items-start gap-2 text-xs font-mono py-1.5 border-b border-border/30 last:border-0">
      <span className={`px-1.5 py-0.5 border text-[10px] font-black flex-shrink-0 ${methodColor}`}>{ep.method}</span>
      <span className="text-foreground/80 break-all flex-1">{ep.url}</span>
      <span className="text-primary/70 text-[10px] flex-shrink-0">{ep.status}</span>
    </div>
  );
}

function ScamCard({ scam, index }: { scam: (typeof REAL_EVIDENCE)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [activeSnippet, setActiveSnippet] = useState(0);
  const [showApis, setShowApis] = useState(false);

  const isCrit = scam.isCritical;

  const severityColor = isCrit
    ? "text-red-500 border-red-500 bg-red-500/10"
    : scam.severity === "CRITICAL"
    ? "text-red-400 border-red-400 bg-red-400/10"
    : "text-orange-400 border-orange-400 bg-orange-400/10";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`font-mono relative overflow-hidden border ${
        scam.isCritical
          ? "border-red-500/60 bg-red-950/20 md:col-span-2"
          : "border-border/60 bg-black/40"
      } backdrop-blur-sm`}
    >
      {scam.isCritical && (
        <div className="bg-red-600 text-white px-6 py-2 text-xs font-black tracking-widest flex items-center gap-2">
          <AlertOctagon className="w-4 h-4 flex-shrink-0" />
          CRITICAL — LIVE DATABASE ACCESSIBLE — REAL VICTIMS EXPOSED
          <span className="ml-auto animate-pulse flex-shrink-0">● ACTIVE</span>
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Terminal className={`w-4 h-4 ${scam.isCritical ? "text-red-400" : "text-primary"}`} />
              <h4 className={`text-xl font-black tracking-tight ${scam.isCritical ? "text-red-400" : "text-primary"}`}>
                {scam.name}
              </h4>
            </div>
            <a href={`https://${scam.url}`} target="_blank" rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 w-fit">
              {scam.url} <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className={`px-3 py-1.5 text-xs font-bold tracking-widest border flex items-center gap-1.5 shrink-0 ${severityColor}`}>
            <Crosshair className="w-3 h-3" />
            {scam.severity}
          </div>
        </div>

        {/* Claimed vs Real (critical only) */}
        {scam.isCritical && scam.claimedVsReal && (
          <div className="grid sm:grid-cols-2 gap-4 mb-6 p-4 border border-red-500/30 bg-red-950/20">
            <div>
              <div className="text-[10px] text-muted-foreground mb-1 uppercase tracking-widest">Their Claim</div>
              <div className="text-sm font-black text-foreground">{scam.claimedVsReal.claimed}</div>
            </div>
            <div>
              <div className="text-[10px] text-muted-foreground mb-1 uppercase tracking-widest">Their Database Shows</div>
              <div className="text-sm font-black text-red-400">{scam.claimedVsReal.real}</div>
            </div>
          </div>
        )}

        {/* Type */}
        <div className="flex gap-3 text-xs mb-5">
          <span className="text-muted-foreground shrink-0">TYPE</span>
          <span className={`font-bold leading-relaxed ${scam.isCritical ? "text-red-400" : "text-secondary"}`}>{scam.type}</span>
        </div>

        {/* API Endpoints */}
        {"apiEndpoints" in scam && scam.apiEndpoints && scam.apiEndpoints.length > 0 && (
          <div className="mb-5">
            <button onClick={() => setShowApis(!showApis)}
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors mb-2">
              <Globe className="w-3 h-3" />
              <span className="uppercase tracking-widest">Exposed API Endpoints ({scam.apiEndpoints.length})</span>
              {showApis ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>
            <AnimatePresence>
              {showApis && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden border border-border/40 bg-zinc-950/50 px-3">
                  {scam.apiEndpoints.map((ep, i) => <ApiEndpointBadge key={i} ep={ep} />)}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Exposed Intelligence */}
        <div className="mb-5">
          <div className="text-xs text-muted-foreground mb-3 uppercase tracking-widest">— Exposed Intelligence —</div>
          <div className="space-y-2">
            {scam.exposedInfo.map((info, i) => (
              <div key={i} className="flex items-start gap-3 text-xs">
                <span className="text-red-400/70 shrink-0 pt-0.5">▸</span>
                <span className="text-muted-foreground shrink-0 min-w-[150px]">{info.label}:</span>
                {"href" in info && info.href ? (
                  <a href={info.href} target="_blank" rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                    {info.value} <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                ) : (
                  <span className="text-foreground font-bold">{info.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Source Code Evidence Toggle */}
        <button onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between text-xs text-primary border border-primary/30 px-4 py-2.5 hover:bg-primary/10 transition-colors">
          <span className="flex items-center gap-2">
            <Database className="w-3.5 h-3.5" />
            {expanded ? "COLLAPSE" : "EXPAND"} SOURCE CODE / API EVIDENCE ({scam.codeSnippets.length} extracts)
          </span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
              <div className="mt-4 space-y-4">
                {/* Tab selector */}
                <div className="flex flex-wrap gap-1.5">
                  {scam.codeSnippets.map((s, i) => (
                    <button key={i} onClick={() => setActiveSnippet(i)}
                      className={`text-xs px-2.5 py-1 border transition-colors ${
                        activeSnippet === i
                          ? "border-primary bg-primary/20 text-primary"
                          : "border-border text-muted-foreground hover:border-primary/50"
                      }`}>
                      [{String(i + 1).padStart(2, "0")}]
                    </button>
                  ))}
                </div>

                {scam.codeSnippets[activeSnippet] && (
                  <div>
                    <div className="flex items-start justify-between gap-3 px-4 py-2 bg-zinc-900 border border-border/60 border-b-0">
                      <span className="text-xs text-muted-foreground leading-relaxed">{scam.codeSnippets[activeSnippet].label}</span>
                      <CopyButton text={scam.codeSnippets[activeSnippet].code} />
                    </div>
                    <pre className="bg-zinc-950 border border-border/60 p-4 text-xs text-green-400 overflow-x-auto leading-relaxed whitespace-pre-wrap max-h-[450px] overflow-y-auto">
                      <code>{scam.codeSnippets[activeSnippet].code}</code>
                    </pre>
                  </div>
                )}

                <div className="p-4 border border-border/40 bg-card/30">
                  <div className="text-xs text-primary mb-2 flex items-center gap-1.5">
                    <Shield className="w-3 h-3" /> ANALYST VERDICT
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{scam.verdict}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function ScamExposed() {
  const critical = REAL_EVIDENCE.filter((s) => s.severity === "CRITICAL");
  const high = REAL_EVIDENCE.filter((s) => s.severity === "HIGH");

  return (
    <section id="scams" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-60" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
          <h2 className="font-mono text-destructive text-sm mb-2 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-destructive" />
            04. THREAT REPORTS
          </h2>
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
            Scam <span className="text-destructive">Exposed</span>
          </h3>
        </motion.div>

        {/* Intro */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="mb-10 max-w-3xl space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Fake betting prediction platforms are built in hours using AI tools, collect payments via Paystack or mobile money, and vanish on Telegram. I reverse-engineer these sites — reading their JavaScript bundles and hitting their unauthenticated backend APIs — to extract real evidence: live database contents, victim payment records, backend credentials, exposed operator identities, and fraud mechanics proven in source code.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Everything below was extracted from publicly accessible URLs. No hacking. No exploiting private systems. Just HTTP requests anyone could make, and knowing what to look for.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 font-mono">
            <div className="border border-red-500/40 bg-red-500/5 p-3">
              <div className="text-2xl font-black text-red-500">2</div>
              <div className="text-xs text-muted-foreground">Critical — DBs exposed</div>
            </div>
            <div className="border border-orange-400/40 bg-orange-400/5 p-3">
              <div className="text-2xl font-black text-orange-400">6</div>
              <div className="text-xs text-muted-foreground">High — source evidence</div>
            </div>
            <div className="border border-border/40 p-3">
              <div className="text-2xl font-black text-foreground">524</div>
              <div className="text-xs text-muted-foreground">Victims in one database</div>
            </div>
            <div className="border border-border/40 p-3">
              <div className="text-2xl font-black text-foreground">8</div>
              <div className="text-xs text-muted-foreground">Active sites investigated</div>
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {REAL_EVIDENCE.map((scam, i) => (
            <ScamCard key={scam.id} scam={scam} index={i} />
          ))}
        </div>

        {/* Methodology */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="mt-12 p-6 border border-border/50 bg-card/20 font-mono text-xs text-muted-foreground">
          <div className="text-primary mb-3 flex items-center gap-1.5 font-bold">
            <Shield className="w-3.5 h-3.5" /> METHODOLOGY & RESPONSIBLE DISCLOSURE
          </div>
          <p className="leading-relaxed mb-2">
            All evidence was collected via HTTP GET requests to publicly accessible URLs — the same as opening browser DevTools and reading the Network tab. JavaScript bundles are served unauthenticated to every visitor. API endpoints that return data without authentication are public by their operator's own configuration. No private systems were accessed. No credentials were obtained through unauthorized means.
          </p>
          <p className="leading-relaxed">
            Victim PII appearing in database extracts (names, emails, phone numbers) is described generically in this report without reproduction. The existence of the exposure is documented; individual victim data is not republished. Sources are cited inline in each code snippet.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
