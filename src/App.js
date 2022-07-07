import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import QRCodeStyling from "qr-code-styling";

import { GalaxusLogo, galaxusQRLogo } from "./GalaxusLogo";
import { CopyIcon } from "./CopyIcon";
import {
  svgToDataUrl,
  sleep,
  getRandomShortURL,
  isCanvasReady
} from "./helper";

const apiURL = "https://reqres.in/api/posts";
const redirectUrlPrefix = "https://galax.us";

const colors = [
  "#c5a278",
  "#ffc32d",
  "#f67857",
  "#83d160",
  "#b384d3",
  "#71c7f9"
];

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  image: svgToDataUrl(galaxusQRLogo),
  dotsOptions: {
    color: colors[0],
    type: "rounded"
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 10
  }
});

export default function App() {
  const [url, setUrl] = useState("");
  const [src, setSrc] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentColor, setCurrentColor] = useState(0);
  const [shortUrl, setShortUrl] = useState(getRandomShortURL(5));
  const [apiStatus, setApiStatus] = useState(null);

  const ref = useRef(null);

  const inputRef = React.useRef(null);

  React.useEffect(() => {
    // inputRef.current.focus();
  }, []);

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url,
      dotsOptions: {
        color: colors[currentColor],
        type: "rounded"
      }
    });
  }, [url, currentColor]);

  useEffect(() => {
    async function fn() {
      if (!qrCode || url === "") {
        setSrc("");
        return;
      }

      const canvas = qrCode._canvas._canvas;

      if (!canvas) {
        throw new Error("There is no canvas! Why?");
      }

      while (!isCanvasReady(canvas.toDataURL('image/png'))) {
        await sleep(20);
      }

      setSrc(canvas.toDataURL());
    }

    fn();
  }, [url, currentColor]);

  const onUrlChange = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
  };

  const onShortUrlChange = (event) => {
    event.preventDefault();
    setShortUrl(event.target.value);
  };

  const handleCreateShortUrl = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url, shortUrl })
    };

    fetch(apiURL, requestOptions).then((response) => {
      setIsLoading(true);

      setTimeout(function () {
        if (response.status === 201) {
          setApiStatus("ok");
          setIsLoading(false);
        } else {
          setApiStatus("error");
          setIsLoading(false);
        }
      }, 1000);


    });
  };

  const changeColor = () => {
    setCurrentColor(currentColor === 4 ? 0 : currentColor + 1)
  }

  return (
    <>
      <div className="App">
        <div className="logoWrapper">
          <GalaxusLogo />
          <span className="shorty">Shorty</span>
        </div>
        <div>
          <input
            ref={inputRef}
            value={url}
            placeholder="Paste URL"
            onChange={onUrlChange}
            className="inputBox"
          />

          <div
            className={`shortUrlWrapper ${url === "" || apiStatus === "ok" ? " hidden" : ""
              }`}
          >
            <span className="prefix">
              https://galax.us <span className="slash">/</span>
            </span>
            <input
              className={`shortUrlBox ${apiStatus === "error" ? " apiError" : ""
                }`}
              type="text"
              value={shortUrl}
              onChange={onShortUrlChange}
            />
            <div className="createShortUrlButtonWrapper">
              <button
                disabled={isLoading}
                onClick={handleCreateShortUrl}
                className={`createShortUrlButton ${isLoading && "isLoading"}`}
              >
                {isLoading ? "Saving..." : "Create Short URL"}

              </button>

            </div>
          </div>
          {apiStatus === "ok" && (
            <div className="generatedUrlWrapper">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="generatedUrl"
                href={`${redirectUrlPrefix}/${shortUrl}`}
              >
                https://galax.us/{shortUrl}
              </a>
              <CopyIcon shortUrl={shortUrl} />
            </div>
          )}
        </div>
        {src && <img onClick={changeColor} className="qrImage" alt="QR code" src={src} />}
      </div>
    </>
  );
}
