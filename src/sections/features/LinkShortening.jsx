import { useState, memo } from "react";
import Heading from "../../components/ui/Heading";
import UrlShortenerInput from "../../components/UrlShortenerInput";
import Button from "../../components/ui/Button";

const LinkShortening = () => {
  const [links, setLinks] = useState([]);
  const [copiedIdx, setCopiedIdx] = useState(null);

  const handleShorten = (link) => {
    setLinks((prev) => [{ ...link, timestamp: Date.now() }, ...prev]);
  };

  const handleCopy = async (shortUrl, idx) => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 1500);
    } catch {
      // Optionally handle copy error
    }
  };
  return (
    <section id="features" className="mt-38 md:mt-32 px-5 lg:px-0">
      <Heading className="sr-only">Link Shortening</Heading>
      <UrlShortenerInput
        onShorten={handleShorten}
        className="feature max-w-7xl mx-auto px-5 md:px-16 py-5 md:py-10 relative top-1/2 -translate-y-1/2 rounded-lg"
        apiUrl={
          import.meta.env.VITE_SHORTENER_API_URL ||
          "https://corsproxy.io/?https://cleanuri.com/api/v1/shorten"
        }
      />
      <div className="max-w-7xl mx-auto relative -top-12 space-y-4">
        {links.map((link, idx) => (
          <div
            key={`${link.timestamp}-${idx}`}
            className="flex flex-col md:flex-row md:items-center justify-between max-sm:gap-y-4 max-sm:divide-y divide-Gray bg-white rounded-lg px-5 py-3"
          >
            <span className="truncate w-full md:w-auto max-sm:py-4">
              {link.original}
            </span>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-1 md:mt-0">
              <a
                href={link.short}
                target="_blank"
                rel="noopener noreferrer"
                className="text-Cyan font-bold max-sm:pb-2"
              >
                {link.short}
              </a>
              <Button
                type="button"
                className={`w-full md:w-fit rounded-lg px-4 py-2 text-white ${
                  copiedIdx === idx ? "bg-DarkViolet" : "bg-Cyan"
                }`}
                onClick={() => handleCopy(link.short, idx)}
              >
                {copiedIdx === idx ? "Copied!" : "Copy"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(LinkShortening);
