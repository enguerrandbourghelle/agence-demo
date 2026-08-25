import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #030712 0%, #0f172a 50%, #1e1b4b 100%)",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "white",
            marginBottom: 20,
          }}
        >
          Agence Web
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#60a5fa",
            fontWeight: 600,
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          Des sites web qui attirent vos clients
        </div>
      </div>
    ),
    { ...size }
  );
}