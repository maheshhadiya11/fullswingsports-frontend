"use client";

import React, { useEffect } from "react";

const ZapierChatbot = () => {
  useEffect(() => {
    // Ensure script is injected once
    if (!document.querySelector("#zapier-chatbot-script")) {
      const script = document.createElement("script");
      script.id = "zapier-chatbot-script";
      script.type = "module";
      script.async = true;
      script.src = "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <zapier-interfaces-chatbot-embed
      is-popup="true"
      chatbot-id="cmioxxl6p008x1si9eqvrabxs"
    />
  );
};

export default ZapierChatbot;
