import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Witcraft — Good ideas deserve thoughtful engineering.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#171A19",
        color: "#F3F1E9",
        padding: "66px 76px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", fontSize: 42, fontWeight: 700, letterSpacing: -3 }}>
          witcraft<span style={{ color: "#B8E66A" }}>.</span>
        </div>
        <div style={{ color: "#A7AA9F", fontSize: 15, letterSpacing: 3 }}>INDEPENDENT DIGITAL ENGINEERING</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 930 }}>
        <div style={{ fontSize: 76, lineHeight: 1.02, letterSpacing: -5, fontWeight: 600 }}>
          Good ideas deserve
          <br />
          <span style={{ color: "#B8E66A" }}>thoughtful engineering.</span>
        </div>
        <div style={{ marginTop: 30, color: "#A7AA9F", fontSize: 22 }}>
          Thoughtful design. Solid engineering.
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", color: "#777B73", fontSize: 15, letterSpacing: 2 }}>
        <span>WITCRAFT.ME</span>
        <span>DESIGN-MINDED · ENGINEERING-DRIVEN</span>
      </div>
      <div style={{ position: "absolute", right: 100, top: 180, width: 260, height: 260, border: "1px solid rgba(184,230,106,.35)", borderRadius: 9999 }} />
      <div style={{ position: "absolute", right: 145, top: 225, width: 170, height: 170, border: "1px solid rgba(243,241,233,.22)", borderRadius: 9999 }} />
    </div>,
    { ...size }
  );
}
