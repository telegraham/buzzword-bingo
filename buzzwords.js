// IDs are permanent, URL-safe Base62 codes. Add new phrases with a new unused
// two-character ID; do not rename, reuse, or delete an existing key.
export const phrasesById = Object.freeze({
  "2f": { text: "10x (as a verb)" },
  "mF": { text: "30,000-foot view" },
  "Wl": { text: "Above / below the line" },
  "LQ": { text: "Accelerate", deactivated: true }, // metaphorically boring
  "Ut": { text: "Action item" },
  "bV": { text: "Activation", deactivated: true }, // overly rare
  "vo": { text: "Add color / color in" },
  "c6": { text: "Align / aligned / alignment" },
  "oM": { text: "Always-on" },
  "GB": { text: "AOP", deactivated: true }, // company specific
  "Gc": { text: "Artifact" },
  "C0": { text: "Ask (as a noun)" },
  "V7": { text: "At-bat" },
  "A6": { text: "Bake" },
  "es": { text: "Bandwidth" },
  "Gx": { text: "Baseline" },
  "tW": { text: "BAU" },
  "7G": { text: "Best candidate", deactivated: true }, // not sure what this even means
  "gR": { text: "Best practices" },
  "4d": { text: "Bias (as a verb)" },
  "ER": { text: "Big picture" },
  "qB": { text: "Big rock" },
  "Cf": { text: "Blocker", deactivated: true }, // just a term
  "v8": { text: "Blue sky" },
  "Pl": { text: "BoD / Board of Directors", deactivated: true }, // just a term
  "Q1": { text: "Boil the ocean" },
  "Ho": { text: "Bottom line" },
  "Fl": { text: "Bring people along" },
  "lY": { text: "Build the plane while flying it" },
  "AD": { text: "Business case" },
  "gC": { text: "Business drivers", deactivated: true }, // boring / compound
  "xb": { text: "Business impact", deactivated: true }, // boring / compound
  "rl": { text: "Business justification", deactivated: true }, // boring / compound
  "tx": { text: "Business review", deactivated: true }, // boring / compound
  "8Z": { text: "Cadence" },
  "ar": { text: "Capacity", deactivated: true }, // just a term
  "ZY": { text: "Capacity management", deactivated: true }, // boring / compound
  "YQ": { text: "Capacity planning", deactivated: true }, // boring / compound
  "Vq": { text: "Capacity reconciliation", deactivated: true }, // boring / compound
  "mW": { text: "Centralize", deactivated: true }, // boring
  "92": { text: "Change management", deactivated: true }, // just a term
  "Yw": { text: "Circle back" },
  "6A": { text: "Clean slate", deactivated: true }, // just an idiom
  "o4": { text: "Clear the runway" },
  "Nj": { text: "Client outcomes", deactivated: true }, // company specific
  "ID": { text: "Close the gap", deactivated: true }, // just an idiom
  "7e": { text: "Collaborative callout", deactivated: true }, // what even is this
  "b8": { text: "Consolidate", deactivated: true }, // just a term
  "jK": { text: "Control cell", deactivated: true }, // just a term
  "a7": { text: "Core competency" },
  "1j": { text: "Critical path"  },
  "xF": { text: "Cross-functional / XFN" },
  "v9": { text: "Cross-functional alignment", deactivated: true }, // two existing terms combined
  "dl": { text: "Cross-pollinate" },
  "Af": { text: "Current posture" },
  "yN": { text: "De-risk" },
  "nr": { text: "Deep dive" },
  "Eh": { text: "Deliverables", deactivated: true }, // just a term
  "PU": { text: "Dependencies", deactivated: true }, // just a term
  "dS": { text: "Descope" },
  "94": { text: "Discovery", deactivated: true }, // just a term
  "wQ": { text: "Discovery cadence", deactivated: true }, // two existing terms combined
  "NW": { text: "Do more with less" },
  "hN": { text: "Dogfooding" },
  "Az": { text: "Double-click" },
  "Jm": { text: "Downstream" },
  "2w": { text: "Downstream dependency", deactivated: true }, // two existing terms combined
  "K9": { text: "Drive conversion", deactivated: true }, // two existing terms combined
  "E7": { text: "Drive impact", deactivated: true }, // two existing terms combined
  "Oa": { text: "Drive outcomes", deactivated: true }, // two existing terms combined
  "Lz": { text: "Ducks in a row", deactivated: true }, // just an idiom
  "R4": { text: "Dumpster fire", deactivated: true }, // just an idiom
  "BZ": { text: "Easy win", deactivated: true }, // too similar to win
  "1o": { text: "ELT", deactivated: true }, // company specific
  "0s": { text: "Enablement" },
  "Km": { text: "End goal" },
  "kv": { text: "End-to-end" },
  "HW": { text: "Enterprise priority", deactivated: true }, // two existing terms combined
  "S0": { text: "Enterprise-wide impact", deactivated: true }, // two existing terms combined
  "nQ": { text: "EOD" },
  "3x": { text: "EOW" },
  "qa": { text: "Evangelize" },
  "iH": { text: "Execution" },
  "qh": { text: "Executive summary", deactivated: true }, // just a term
  "2x": { text: "Experiment", deactivated: true }, // just a term
  "rv": { text: "Experiment setup", deactivated: true }, // just a term
  "ya": { text: "Eyes on" },
  "9C": { text: "Feasibility", deactivated: true }, // not business specific
  "bq": { text: "Find a solve" },
  "St": { text: "Fire drill" },
  "P2": { text: "Flesh out", deactivated: true }, // just an idiom
  "dX": { text: "Full group", deactivated: true }, // not business specific
  "Bm": { text: "Full transparency" },
  "tg": { text: "Full unlock", deactivated: true }, // two existing terms combined
  "oi": { text: "Full visibility", deactivated: true }, // two existing terms combined
  "2Z": { text: "Future debt", deactivated: true }, // what even is this
  "Gt": { text: "Future-aligned", deactivated: true }, // what even is this
  "CN": { text: "Future-proof" },
  "Ud": { text: "FYI", deactivated: true }, // not business specific
  "qc": { text: "Get creative" },
  "H3": { text: "Get out in front of" },
  "k4": { text: "Give you time back" },
  "eS": { text: "Go to Market / GTM", deactivated: true }, // just a term
  "tD": { text: "Go-forward" },
  "ai": { text: "Go/no-go" },
  "uB": { text: "Green-light (as a verb)" },
  "7g": { text: "Greenfield" },
  "7W": { text: "Guardrail metric", deactivated: true }, // too similar to guardrails
  "qf": { text: "Guardrails" },
  "c3": { text: "Hard requirement"},
  "O5": { text: "Hardening" },
  "ko": { text: "Heads-up", deactivated: true }, // not business specific
  "Jn": { text: "Headwinds" },
  "r8": { text: "High-impact", deactivated: true }, // just a term
  "xD": { text: "High-level" },
  "EY": { text: "High-level LOE", deactivated: true }, // two existing terms combined
  "f7": { text: "Hot mess", deactivated: true }, // just an idiom
  "Mm": { text: "Human in the loop" },
  "DB": { text: "Ideate" },
  "4P": { text: "Impact" },
  "rd": { text: "Incremental" },
  "iS": { text: "Incremental lift", deactivated: true }, // too similar to Incremental
  "JL": { text: "Incremental revenue", deactivated: true }, // too similar to Incremental
  "Ag": { text: "Incremental revenue opportunity", deactivated: true }, // too similar to Incremental
  "vr": { text: "Incremental topline lift", deactivated: true }, // too similar to Incremental
  "vD": { text: "Initiative", deactivated: true }, // just a term
  "ml": { text: "Insight-led", deactivated: true }, // two existing terms combined
  "X8": { text: "Is the juice worth the squeeze?" },
  "5O": { text: "Keep me in the loop" },
  "JH": { text: "Key" },
  "sm": { text: "KR", deactivated: true }, // just a term
  "L7": { text: "Lagging metric" },
  "jv": { text: "Land the plane" },
  "IA": { text: "Laser focused" },
  "Qs": { text: "Launch", deactivated: true }, // just a term
  "bc": { text: "Launch calendar", deactivated: true }, // just a term
  "Jp": { text: "Launch plan", deactivated: true }, // just a term
  "uS": { text: "Leading indicator" },
  "4u": { text: "Learning phase", deactivated: true }, // two existing terms combined
  "tK": { text: "Learnings" },
  "SD": { text: "Level set" },
  "ox": { text: "Level-set expectations", deactivated: true }, // too similar to level set
  "Vj": { text: "Leverage (as a verb)" },
  "qw": { text: "Line of sight" },
  "ix": { text: "LOE" },
  "JU": { text: "Low lift" },
  "AE": { text: "Low-hanging fruit" },
  "P3": { text: "Low-lift / high-impact", deactivated: true }, // too similar to low lift
  "5U": { text: "Lower-lift", deactivated: true }, // too similar to low lift
  "2y": { text: "Macro", deactivated: true }, // not business specific
  "ng": { text: "Macro environment" },
  "iE": { text: "Make a dent in", deactivated: true }, // not business specific
  "km": { text: "Make the case", deactivated: true }, // not business specific
  "ns": { text: "Marching towards" },
  "tb": { text: "Marinate" },
  "AA": { text: "Market context", deactivated: true }, // just a term
  "LC": { text: "Material impact", deactivated: true }, // two existing terms combined
  "dZ": { text: "Materially decrease", deactivated: true }, // two existing terms combined
  "WL": { text: "Materially increase", deactivated: true }, // two existing terms combined
  "S1": { text: "MBR", deactivated: true }, // company specific
  "0q": { text: "Menu of options" },
  "pM": { text: "Metric", deactivated: true }, // just a term
  "oU": { text: "Milestones", deactivated: true }, // just a term
  "Qd": { text: "Mitigate", deactivated: true }, // just a term
  "Hd": { text: "Move forward", deactivated: true }, // just a term
  "Ze": { text: "Move forward with rollout", deactivated: true }, // two existing terms combined
  "Mc": { text: "Move the goalposts" },
  "ir": { text: "Move the needle" },
  "FV": { text: "Moving forward" },
  "4h": { text: "MVP", deactivated: true }, // just a term
  "cM": { text: "Net new" },
  "7H": { text: "Net-new ask", deactivated: true }, // two existing terms combined
  "4V": { text: "Net-new capability", deactivated: true }, // two existing terms combined
  "9W": { text: "Net-new headcount", deactivated: true }, // two existing terms combined
  "X3": { text: "Next steps" },
  "BW": { text: "North star" },
  "kM": { text: "North-star metric", deactivated: true }, // too similar to north star
  "J9": { text: "OKR", deactivated: true }, // just a term
  "GY": { text: "On the radar" },
  "UO": { text: "Open forum" },
  "tR": { text: "Operating model", deactivated: true }, // just a term
  "Vt": { text: "Operationalize" },
  "41": { text: "Operationalized", deactivated: true }, // too similar to operationalize
  "wG": { text: "Operationally", deactivated: true }, // too similar to operationalize
  "bG": { text: "Opportunity size" },
  "NB": { text: "Optimize", deactivated: true }, // just a term
  "S3": { text: "Outcomes" },
  "4c": { text: "Ownership", deactivated: true }, // just a term
  "mL": { text: "Parking lot" },
  "Il": { text: "Path forward" },
  "kF": { text: "Phase 1" },
  "Yq": { text: "Phased approach" },
  "1p": { text: "Piggyback" },
  "8y": { text: "Pillars" },
  "ZL": { text: "Pipeline" },
  "zu": { text: "Planning cycle", deactivated: true }, // just a term
  "oD": { text: "Playbook" },
  "AQ": { text: "Portfolio management", deactivated: true }, // just a term
  "SV": { text: "Pragmatic", deactivated: true }, // not business specific
  "UB": { text: "Pressure test" },
  "Ph": { text: "Priorities", deactivated: true }, // not business specific
  "Du": { text: "Prioritization", deactivated: true }, // not business specific
  "Sq": { text: "Prioritize", deactivated: true }, // not business specific
  "go": { text: "Prioritized and sequenced", deactivated: true }, // two existing terms combined
  "NG": { text: "Proactive", deactivated: true }, // not business specific
  "CE": { text: "Problem space" },
  "Vw": { text: "Product review", deactivated: true }, // just a term
  "Qn": { text: "Program review", deactivated: true }, // just a term
  "Wk": { text: "Proof of concept" }, // just a term
  "Kl": { text: "Pull forward" },
  "EF": { text: "Pull-forward effect", deactivated: true }, // two existing terms combined
  "qb": { text: "Pulse check" },
  "za": { text: "Pushback" },
  "vQ": { text: "Put a pin in it" },
  "E6": { text: "Put on your radar", deactivated: true }, // too similar to on the radar
  "LO": { text: "Put out fires" },
  "gI": { text: "Quick win" },
  "QY": { text: "Ramp" },
  "Cc": { text: "Ramp up", deactivated: true }, // too similar to ramp
  "Uq": { text: "Ranksort" },
  "Xr": { text: "Re-level set", deactivated: true }, // too similar to level set
  "WF": { text: "Readout" },
  "u5": { text: "Rearrange deck chairs on the Titanic", deactivated: true }, // not business specific
  "X6": { text: "Refinement", deactivated: true }, // just a term
  "x8": { text: "Repurpose", deactivated: true }, // not business specific
  "gt": { text: "Repurpose bandwidth", deactivated: true }, // two existing terms combined
  "FR": { text: "Requirements", deactivated: true }, // just a term
  "BM": { text: "Resonate" },
  "ip": { text: "Resource allocation", deactivated: true }, // redundant with resourcing
  "q9": { text: "Resourcing" },
  "M6": { text: "Revenue go-get", deactivated: true }, // weird
  "bx": { text: "Revisit", deactivated: true }, // not business specific
  "Hn": { text: "Revisit scope", deactivated: true }, // two existing terms combined
  "1V": { text: "Right-size", deactivated: true }, // boring
  "Rz": { text: "Ritual", deactivated: true }, // just a term
  "wV": { text: "Roadmap", deactivated: true }, // just a term
  "KY": { text: "Rockstar", deactivated: true }, // cringe
  "Jd": { text: "ROI", deactivated: true }, // just a term
  "xd": { text: "Rollout", deactivated: true }, // just a term
  "ib": { text: "Root cause", deactivated: true }, // just a term
  "sn": { text: "Rough estimate", deactivated: true }, // not business specific
  "Gb": { text: "Run of show", deactivated: true }, // not business specific
  "xJ": { text: "Runway" },
  "Nk": { text: "Sanity check", deactivated: true }, // offensive
  "hk": { text: "Scale", deactivated: true }, // just a term
  "WG": { text: "Scope", deactivated: true }, // just a term
  "SU": { text: "Scope expansion", deactivated: true }, // two existing terms combined
  "sE": { text: "Scrappy" },
  "um": { text: "Sequencing" },
  "xK": { text: "Share-out" },
  "yI": { text: "Shared understanding" },
  "p7": { text: "Short-term solution", deactivated: true }, // boring
  "w6": { text: "Shovel ready" },
  "fE": { text: "Sign-off" },
  "Zc": { text: "Signal" },
  "jL": { text: "Single source of truth", deactivated: true }, // two existing terms combined
  "p3": { text: "SLA", deactivated: true }, // just a term
  "W5": { text: "Slippery slope", deactivated: true }, // just an idiom
  "UM": { text: "SME" },
  "7E": { text: "Socialize" },
  "HZ": { text: "Source of truth" },
  "2H": { text: "Spaghetti at the wall / see what sticks" },
  "Jq": { text: "Stakeholder" },
  "l4": { text: "Stakeholder alignment", deactivated: true }, // two existing terms combined
  "NQ": { text: "Stakeholders", deactivated: true }, // just a term
  "6W": { text: "Stay the course", deactivated: true }, // not business specific
  "WH": { text: "SteerCo" },
  "wd": { text: "Strategic priority", deactivated: true }, // two existing terms combined
  "CT": { text: "Strategy", deactivated: true }, // just a term
  "53": { text: "Streamline" },
  "bu": { text: "Stress test" },
  "op": { text: "Success criteria" },
  "EL": { text: "Success metrics", deactivated: true }, // two existing terms combined
  "TY": { text: "Surface area" },
  "fM": { text: "SWAG" },
  "cl": { text: "Synergy" },
  "T7": { text: "Table it", deactivated: true }, // not business specific
  "rK": { text: "Tackle" },
  "93": { text: "Tactical" },
  "UG": { text: "Tailwinds" },
  "M2": { text: "Take this offline" },
  "DK": { text: "Target audience", deactivated: true }, // two existing terms combined
  "jR": { text: "Target metrics", deactivated: true }, // two existing terms combined
  "Wv": { text: "Thought leader", deactivated: true }, // retro
  "Fe": { text: "Thought partner" },
  "Wb": { text: "Three-year vision", deactivated: true }, // boring
  "vA": { text: "TL;DR", deactivated: true }, // boring
  "ZT": { text: "Top of mind" },
  "4E": { text: "Topline" },
  "P9": { text: "Topline business drivers", deactivated: true }, // two existing terms combined
  "KJ": { text: "Topline lift", deactivated: true }, // two existing terms combined
  "JJ": { text: "Tradeoff" },
  "Nf": { text: "Trailing indicator" },
  "kQ": { text: "Train wreck", deactivated: true }, // just an idiom
  "5A": { text: "Transformation", deactivated: true }, // company specific
  "Kk": { text: "Unlock" },
  "Xs": { text: "Unlock potential", deactivated: true }, // two existing terms combined
  "CS": { text: "Unpack", deactivated: true }, // not business specific
  "6e": { text: "Use case", deactivated: true }, // just a term
  "hp": { text: "Value add" },
  "ze": { text: "Value prop" },
  "eQ": { text: "Value proposition", deactivated: true }, // value prop only
  "Wy": { text: "Visibility" },
  "fJ": { text: "Vision", deactivated: true }, // boring
  "sD": { text: "What are we solving for?" },
  "5x": { text: "Whiteboarding", deactivated: true }, // just a term
  "tG": { text: "Wild west", deactivated: true }, // just an idiom
  "Zv": { text: "Win (as a noun)" },
  "FS": { text: "Working backwards", deactivated: true }, // boring
  "6Q": { text: "Working hypothesis", deactivated: true }, // just a term
  "Eg": { text: "Working teams", deactivated: true }, // boring
  "8p": { text: "Workstream" },
  "ez": { text: "Workstream planning", deactivated: true }, // two existing terms combined
  "Go": { text: "XFN alignment", deactivated: true }, // two existing terms combined
  "kL": { text: "Zoom in / zoom out" },
});


/*

Style Guide:

1. Phrases should not just be common idioms, but ones used primarily in a business context
2. Phrases should not be terminology, but euphemistic, metaphorical, or pretentious language for useful concepts qualifies
3. Jargon specific to a company -- processes, technologies, teams etc. is disqualified
4. Compound phrases -- consisting of multiple phrases combined or phrases modified by other specific words -- are disqualified
5. Abbreviations and the phrases they abbreviate should not be separate entries

*/

export const phrases = Object.freeze(
  Object.entries(phrasesById)
    .map(([id, phrase]) => Object.freeze({ id, ...phrase }))
    .sort((a, b) => a.text.localeCompare(b.text))
);
