declare namespace JSX {
  interface IntrinsicElements {
    "zapier-interfaces-chatbot-embed": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      "chatbot-id": string;
      "is-popup"?: string;
    };
  }
}
