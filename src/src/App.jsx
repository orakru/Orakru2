import { useState } from "react";

const SB_URL = "https://euziehksumoyxoewwqcb.supabase.co";
const SB_KEY = "sb_publishable_MSqiiUitK3RToywX5vFW4w_2AJpsxmY";

const SVCS = ["Hair","Barbering","Makeup","Nails","Lashes","Skincare","Medspa","Massage","Brows","Waxing"];
const PRC = ["$50–100","$100–200","$200–300","$300+"];
const SET = ["Salon Suite","Home-Based Studio","Traditional Business Setting","Mobile"];
const VIB = ["Calm & Focused","Fun & Chatty","Professional & Efficient","Creative & Expressive","Laid-back & Flexible","Spiritual & Intentional","Bold & Edgy","Warm & Nurturing"];
const DAY = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const EXP = ["Less than 1 year","1–3 years","3–5 years","5–10 years","10+ years"];
const HAIR = ["Fine / Straight","Wavy","Curly","Coily / Natural","Color-treated","Damaged / Transitioning","Loc'd","Extensions"];

const G = "#6B6B6B";
const BD = "#D4D0CB";
const serif = "Georgia,'Times New Roman',serif";
const sans = "'Helvetica Neue',Arial,sans-serif";

const Logo = ({ sz = 56 }) => (
  <div style={{ fontFamily: serif, fontStyle: "italic", fontSize: sz, color: "#0A0A0A", lineHeight: 1 }}>Orakru</div>
);

const Hr = () => <div style={{ height: 1, background: BD, margin: "18px 0" }} />;

const Lbl = ({ t }) => (
  <div style={{ fontSize: 9, letterSpacing: "2.5px", textTransform: "uppercase", color: G, marginBottom: 8, fontFamily: sans }}>{t}</div>
);

const Btn = ({ label, onClick, ghost, disabled }) => (
  <button onClick={onClick} disabled={disabled} style={{ display: "block", width: "100%", padding: "15px", background: ghost ? "transparent" : "#0A0A0A", color: ghost ? "#0A0A0A" : "#fff", border: ghost ? `1.5px solid ${BD}` : "none", fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.45 : 1, fontFamily: sans, marginBottom: 10 }}>
    {label}
  </button>
);

const Field = ({ label, val, set, type = "text", ph, rows, max }) => (
  <div style={{ marginBottom: 18 }}>
    <Lbl t={label} />
    {rows ? (
      <textarea value={val} onChange={e => set(e.target.value)} placeholder={ph} maxLength={max} rows={rows}
        style={{ width: "100%", padding: "8px 0", background: "transparent", border: "none", borderBottom: `1.5px solid ${BD}`, fontSize: 14, outline: "none", resize: "none", fontFamily: sans, color: "#0A0A0A" }} />
    ) : (
      <input type={type} value={val} onChange={e => set(e.target.value)} placeholder={ph}
        style={{ width: "100%", padding: "8px 0", background: "transparent", border: "none", borderBottom: `1.5px solid ${BD}`, fontSize: 14, outline: "none", fontFamily: sans, color: "#0A0A0A" }} />
    )}
