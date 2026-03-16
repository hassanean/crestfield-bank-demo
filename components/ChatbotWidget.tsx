"use client";
import Script from "next/script";

export default function ChatbotWidget() {
  return (
    <>
      <div
        id="dx_chatbot_fab_wrapper_id"
        style={{
          backgroundColor: "#7C52FF",
          borderRadius: "50%",
          boxSizing: "border-box",
          display: "flex",
          height: "56px",
          overflow: "hidden",
          padding: "12px",
          width: "56px",
          position: "fixed",
          bottom: "16px",
          right: "16px",
          zIndex: 123,
        }}
      >
        <img
          data-dxchannelid="819cc457ced040a0aac32b04f92a396d"
          data-dxprovemail="5052583267647488@5052583267647488.dialpad.com"
          id="dx_chatbot_fab_id"
          src="https://us-central.dx.dialpad.com/kpd-static/providers/0/webchat/default/images/fab-icon.png"
          style={{
            clipPath: "circle(50%)",
            objectFit: "contain",
            height: "auto",
            width: "100%",
          }}
          alt="Chat with us"
        />
      </div>

      <Script id="dx-config" strategy="beforeInteractive">
        {`window.dxe = { "server": "https://us-central.dx.dialpad.com" };`}
      </Script>

      <Script
        src="https://us-central.dx.dialpad.com/dxclient/dist/dialpad-chatbot.es.js"
        strategy="afterInteractive"
        type="module"
      />
    </>
  );
}
