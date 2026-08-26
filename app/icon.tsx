import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0c0f",
          borderRadius: 6,
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 800,
            color: "#f5a523",
          }}
        >
          A
        </div>
      </div>
    ),
    { ...size }
  );
}