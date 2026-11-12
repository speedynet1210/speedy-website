import { useEffect } from "react";

const EMBED_SRC = "https://chatforge-v2-api.synthdevs.ai/api/v1/widget/embed.js";
const API_KEY = import.meta.env.VITE_CHATFORGE_API_KEY;

/**
 * Loads the ChatForge chat widget (v1.3.3 integration guide, Step 1).
 *
 * The key comes from VITE_CHATFORGE_API_KEY at build time. When it is not set
 * the component renders nothing, so local builds and previews work without it.
 * The widget is public (no visitor identity), so ChatForge.identify() is not used.
 */
export default function ChatForgeWidget() {
  useEffect(() => {
    if (!API_KEY) {
      if (import.meta.env.DEV) {
        console.warn("ChatForgeWidget: VITE_CHATFORGE_API_KEY is not set; widget disabled.");
      }
      return undefined;
    }

    // Guard against double injection (React StrictMode mounts twice in dev).
    if (document.querySelector(`script[src="${EMBED_SRC}"]`)) return undefined;

    const script = document.createElement("script");
    script.src = EMBED_SRC;
    script.async = true;
    script.dataset.apiKey = API_KEY;
    script.dataset.theme = "light"; // matches the site's white background and navy header
    document.body.appendChild(script);

    // Leave the script in place on unmount: the widget keeps its own DOM and
    // re-adding it would open a second bubble.
    return undefined;
  }, []);

  return null;
}
