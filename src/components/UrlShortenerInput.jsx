import PropTypes from "prop-types";
import { useState, useCallback, useRef, memo } from "react";
import Button from "./ui/Button";
import { debounce } from "../utils/debounce";

const UrlShortenerInput = ({
  onShorten,
  apiUrl = "https://cleanuri.com/api/v1/shorten",
  placeholder = "Shorten a link here...",
  buttonLabel = "Shorten it!",
  className = "",
  inputClassName = "",
  buttonClassName = "",
}) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Debounced input handler
  const debouncedSetUrl = useRef(
    debounce((value) => setUrl(value), 300)
  ).current;

  const handleChange = (e) => {
    setError("");
    debouncedSetUrl(e.target.value);
  };

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!url.trim()) {
        setError("Please add a link");
        return;
      }

      setLoading(true);
      setError("");

      try {
        const res = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `url=${encodeURIComponent(url)}`,
        });

        const data = await res.json();

        if (data.error) {
          setError("Invalid URL or something went wrong try again!");
        } else {
          onShorten({ original: url, short: data.result_url });
          setUrl("");
        }
      } catch {
        setError("Something went wrong. Try again.");
      } finally {
        setLoading(false);
      }
    },
    [url, apiUrl, onShorten]
  );

  return (
    <form className={className} onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col md:flex-row w-full gap-4 md:gap-6">
        <div className="w-full">
            <label htmlFor="url_shortener" className="sr-only">
              Shorten a link here
            </label>
            <input
              type="text"
              id="url_shortener"
              defaultValue={url}
              onChange={handleChange}
              placeholder={placeholder}
              className={`bg-white px-5 py-3 w-full rounded-lg focus:outline-0 border-0 focus:border-0 ${inputClassName} ${
                error ? "outline-2 outline-Red placeholder:text-Red" : ""
              }`}
              aria-invalid={!!error}
              aria-describedby={error ? "url_shortener_error" : undefined}
              disabled={loading}
            />
            {error && (
              <span
                id="url_shortener_error"
                className="text-Red text-sm pt-2 block italic"
                role="alert"
              >
                {error}
              </span>
            )}
        </div>
        <Button
          type="submit"
          className={`w-full h-fit md:w-fit shrink-0 rounded-lg ${buttonClassName}`}
          disabled={loading}
        >
          {loading ? "Shortening..." : buttonLabel}
        </Button>
      </div>
    </form>
  );
};

UrlShortenerInput.propTypes = {
  onShorten: PropTypes.func.isRequired,
  apiUrl: PropTypes.string,
  placeholder: PropTypes.string,
  buttonLabel: PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  buttonClassName: PropTypes.string,
};

export default memo(UrlShortenerInput);
