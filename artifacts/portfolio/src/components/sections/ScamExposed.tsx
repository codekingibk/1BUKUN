import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertOctagon, Terminal, Crosshair, ExternalLink } from "lucide-react";

const scams = [
  {
    id: "breezeodds",
    name: "BreezeOdds",
    url: "breezeodds.com",
    type: "Direct Statistical Fraud",
    severity: "CRITICAL",
    evidence: "Homepage claims '85%+ Win Rate' and '10K+ Members'. However, their OWN internal live results dashboard actively displays: WINS: 0W - 0L | WIN RATE: 0% | ROI: +0u | SETTLED: 0 tips.",
    redFlags: ["Advertised 85% vs 0% actual", "Self-incriminating dashboard", "Fake member count"],
    isCritical: true,
    technicalDetail: "Review of network payloads revealed hardcoded DOM elements for '10K+ Members' while the results API returned empty arrays. The site's own JavaScript fails to populate the promised 85% win rate because no historical ledger exists on their servers."
  },
  {
    id: "stunnerpredict",
    name: "StunnerPredict ODDS",
    url: "odds.stunnerpredict.com",
    type: "Fake Guaranteed Betting Tips",
    severity: "HIGH",
    evidence: "Sells 'premium betting slips' for GHS 40–80 claiming 'guaranteed odds'. All predictions locked behind payment with zero verifiable results.",
    redFlags: ["Mathematically impossible guarantees", "Blurred locked content", "No transparent record"],
    isCritical: false,
    technicalDetail: "Analysis of the payment gateway shows funds are routed through an obfuscated third-party aggregator. The 'blurred' images of winning slips are static placeholders applied via CSS filter: blur(5px), not actual data."
  },
  {
    id: "harrisongrooks",
    name: "Harrison Grooks Predictions",
    url: "harrisongrooks.com/predictions",
    type: "Paid Prediction Scam",
    severity: "HIGH",
    evidence: "Charges for sports predictions with no verifiable track record. Classic upsell funnel targeting Nigerian bettors with a fake authority persona.",
    redFlags: ["No result history", "Payment-gated predictions", "Unverifiable credentials"],
    isCritical: false,
    technicalDetail: "Reverse image search on the 'Harrison Grooks' persona photos indicates they are stock imagery. The site is a cloned funnel template seen across multiple known scam domains."
  },
  {
    id: "primeodds",
    name: "PrimeOdds Tips",
    url: "primeoddstips.com",
    type: "Free-to-Paid Bait & Switch",
    severity: "HIGH",
    evidence: "Prominently claims '100% Free to Use', but immediately locks 'VIP Tips' behind GHS 100. The free tier shows zero available tips.",
    redFlags: ["False advertising", "Worthless VIP charge", "Inflated 180K Telegram members"],
    isCritical: false,
    technicalDetail: "The Telegram member count is statically injected HTML. Cross-referencing their official Telegram link shows fewer than 500 actual subscribers. Free tier API endpoints are intentionally hardcoded to return 404 Not Found."
  },
  {
    id: "lincoxiumbet",
    name: "LincoxiumBet",
    url: "lincoxiumbet.site",
    type: "Unlicensed Offshore Betting",
    severity: "HIGH",
    evidence: "Unlicensed offshore site targeting West African users. Uses .site TLD with no regulatory info or operator license displayed anywhere.",
    redFlags: ["No license info", "Offshore .site domain", "Opaque payment systems"],
    isCritical: false,
    technicalDetail: "WHOIS lookup reveals domain privacy protection masking an offshore registrar. The platform lacks SSL certs on critical deposit routes and bypasses standard KYC/AML regulations required in West Africa."
  },
  {
    id: "zyntrixbet",
    name: "ZyntrixBet",
    url: "zyntrixbet.com",
    type: "Affiliate Recruitment Scheme",
    severity: "MEDIUM",
    evidence: "Betting platform driven entirely by aggressive referral codes (ZTX-4VPZF9J). Relies on emotional manipulation 'Bet Sharper. Win Faster.'",
    redFlags: ["Referral recruitment system", "Predatory UX", "No responsible gambling warnings"],
    isCritical: false,
    technicalDetail: "Site architecture relies heavily on multi-level marketing (MLM) structures rather than actual bookmaking odds. 80% of frontend code is dedicated to affiliate link generation and tracking."
  },
  {
    id: "boombetgh",
    name: "BoomBet Ghana",
    url: "boombetgh.com",
    type: "Referral-Based Gambling",
    severity: "MEDIUM",
    evidence: "Targets Ghanaian bettors with extreme bonus lures. Requires referral codes (BSW-LJW5JWY) and has practically impossible withdrawal conditions.",
    redFlags: ["Referral-driven growth", "Locked bonus conditions", "Predatory targeting"],
    isCritical: false,
    technicalDetail: "Terms of Service analysis reveals a 50x rollover requirement on bonus funds within 24 hours, making mathematical withdrawal probability effectively zero."
  }
];

export function ScamExposed() {
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  return (
    <section id="scams" className="py-24 bg-background border-t border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 scanlines pointer-events-none opacity-20" />
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-destructive/10 border border-destructive/30 text-destructive font-mono text-xs font-bold tracking-widest mb-6">
            <span className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
            SYSTEM ALERT // EXPOSURE PROTOCOL
          </div>
          <h3 className="text-4xl md:text-6xl font-black text-foreground uppercase tracking-tighter flex items-center gap-4">
            Threat <span className="text-destructive glitch-effect" data-text="Reports">Reports</span>
          </h3>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl font-light">
            A documented ledger of predatory gambling schemes, fake tipsters, and statistical fraud targeting West African users.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {scams.map((scam, i) => (
            <motion.div
              key={scam.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setExpandedId(expandedId === scam.id ? null : scam.id)}
              className={`p-6 border font-mono relative group overflow-hidden cursor-pointer ${
                scam.isCritical 
                  ? "border-destructive bg-destructive/5 md:col-span-2 shadow-[0_0_30px_rgba(255,0,0,0.1)]" 
                  : "border-border bg-card/40 hover:bg-card hover:border-primary/50 transition-all duration-300"
              }`}
            >
              {scam.isCritical && (
                <div className="absolute top-0 right-0 bg-destructive text-destructive-foreground px-6 py-2 text-xs font-black uppercase tracking-widest flex items-center gap-2 shadow-lg">
                  <AlertOctagon className="w-4 h-4" />
                  STATISTICAL FRAUD CAUGHT
                </div>
              )}
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div className={scam.isCritical ? "mt-4 md:mt-0" : ""}>
                  <h4 className={`text-2xl font-bold tracking-tight flex items-center gap-3 ${scam.isCritical ? "text-destructive" : "text-primary"}`}>
                    <Terminal className="w-5 h-5 opacity-70" />
                    {scam.name}
                  </h4>
                  <a 
                    href={`http://${scam.url}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-muted-foreground mt-2 flex items-center gap-1 hover:text-foreground transition-colors w-fit"
                    onClick={(e) => e.stopPropagation()}
                  >
                    TARGET: {scam.url}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className={`px-3 py-1.5 text-xs font-bold tracking-widest border flex items-center gap-2 shrink-0 ${
                  scam.severity === "CRITICAL" ? "border-destructive bg-destructive/10 text-destructive" :
                  scam.severity === "HIGH" ? "border-orange-500 bg-orange-500/10 text-orange-500" :
                  "border-yellow-500 bg-yellow-500/10 text-yellow-500"
                }`}>
                  <Crosshair className="w-3 h-3" />
                  SEV: {scam.severity}
                </div>
              </div>

              {scam.isCritical && (
                <div className="mb-6 p-4 border border-destructive/30 bg-destructive/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground uppercase">Advertised Win Rate</div>
                    <div className="text-2xl font-black text-foreground">85%+</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground uppercase">Actual Win Rate</div>
                    <div className="text-2xl font-black text-destructive">0%</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground uppercase">Advertised Members</div>
                    <div className="text-2xl font-black text-foreground">10K+</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground uppercase">Actual Results</div>
                    <div className="text-2xl font-black text-destructive">0W - 0L</div>
                  </div>
                </div>
              )}

              <div className="space-y-4 text-sm text-foreground/80 relative z-10">
                <div className="grid grid-cols-[90px_1fr] gap-4">
                  <span className="text-muted-foreground opacity-70">TYPE</span>
                  <span className={scam.isCritical ? "text-destructive font-bold" : "text-secondary font-bold"}>{scam.type}</span>
                </div>
                
                <div className="grid grid-cols-[90px_1fr] gap-4">
                  <span className="text-muted-foreground opacity-70">EVIDENCE</span>
                  <span className="leading-relaxed">{scam.evidence}</span>
                </div>

                <div className="grid grid-cols-[90px_1fr] gap-4">
                  <span className="text-muted-foreground opacity-70">FLAGS</span>
                  <div className="flex flex-wrap gap-2">
                    {scam.redFlags.map(flag => (
                      <span key={flag} className="px-2 py-1 bg-red-500/10 text-red-500 border border-red-500/20 text-xs">
                        {flag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <AnimatePresence>
                {expandedId === scam.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-border/50">
                      <div className="grid grid-cols-[90px_1fr] gap-4 text-sm">
                        <span className="text-primary opacity-70">TECH_LOG</span>
                        <span className="leading-relaxed text-muted-foreground font-mono">
                          {scam.technicalDetail}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <div className="absolute bottom-4 right-4 text-[10px] text-muted-foreground opacity-50 font-mono">
                {expandedId === scam.id ? "[- COLLAPSE]" : "[+ EXPAND LOGS]"}
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-20 transition-opacity" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-6 border border-border bg-card/30 text-xs font-mono text-muted-foreground flex items-start md:items-center gap-4"
        >
          <AlertOctagon className="w-5 h-5 shrink-0 text-primary" />
          <p>
            DISCLAIMER: This research is based on publicly visible website content and open-source intelligence (OSINT). All findings are documented strictly for public awareness, education, and consumer protection.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
