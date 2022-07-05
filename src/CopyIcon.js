import React, { useState } from "react";

export const CopyIcon = ({ shortUrl }) => {
  const [copied, setCopied] = useState(null);

  const handleCopy = () => {
    navigator.clipboard.writeText("https://galax.us/" + shortUrl).then(
      () => {
        setCopied(true);
        setTimeout(() => {
          setCopied(null);
        }, 1500);
      },
      () => {
        setCopied(false);
        setTimeout(() => {
          setCopied(null);
        }, 1500);
      }
    );
  };

  return (
    <div className="copyIconWrapper">
      <img
        onClick={handleCopy}
        width="30"
        alt="Copy"
        className="copy"
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTE1Ljc3IDEyMi44OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTE1Ljc3IDEyMi44OCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO308L3N0eWxlPjxnPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04OS42MiwxMy45NnY3LjczaDEyLjE5aDAuMDF2MC4wMmMzLjg1LDAuMDEsNy4zNCwxLjU3LDkuODYsNC4xYzIuNSwyLjUxLDQuMDYsNS45OCw0LjA3LDkuODJoMC4wMnYwLjAyIHY3My4yN3YwLjAxaC0wLjAyYy0wLjAxLDMuODQtMS41Nyw3LjMzLTQuMSw5Ljg2Yy0yLjUxLDIuNS01Ljk4LDQuMDYtOS44Miw0LjA3djAuMDJoLTAuMDJoLTYxLjdINDAuMXYtMC4wMiBjLTMuODQtMC4wMS03LjM0LTEuNTctOS44Ni00LjFjLTIuNS0yLjUxLTQuMDYtNS45OC00LjA3LTkuODJoLTAuMDJ2LTAuMDJWOTIuNTFIMTMuOTZoLTAuMDF2LTAuMDJjLTMuODQtMC4wMS03LjM0LTEuNTctOS44Ni00LjEgYy0yLjUtMi41MS00LjA2LTUuOTgtNC4wNy05LjgySDB2LTAuMDJWMTMuOTZ2LTAuMDFoMC4wMmMwLjAxLTMuODUsMS41OC03LjM0LDQuMS05Ljg2YzIuNTEtMi41LDUuOTgtNC4wNiw5LjgyLTQuMDdWMGgwLjAyaDYxLjcgaDAuMDF2MC4wMmMzLjg1LDAuMDEsNy4zNCwxLjU3LDkuODYsNC4xYzIuNSwyLjUxLDQuMDYsNS45OCw0LjA3LDkuODJoMC4wMlYxMy45Nkw4OS42MiwxMy45NnogTTc5LjA0LDIxLjY5di03Ljczdi0wLjAyaDAuMDIgYzAtMC45MS0wLjM5LTEuNzUtMS4wMS0yLjM3Yy0wLjYxLTAuNjEtMS40Ni0xLTIuMzctMXYwLjAyaC0wLjAxaC02MS43aC0wLjAydi0wLjAyYy0wLjkxLDAtMS43NSwwLjM5LTIuMzcsMS4wMSBjLTAuNjEsMC42MS0xLDEuNDYtMSwyLjM3aDAuMDJ2MC4wMXY2NC41OXYwLjAyaC0wLjAyYzAsMC45MSwwLjM5LDEuNzUsMS4wMSwyLjM3YzAuNjEsMC42MSwxLjQ2LDEsMi4zNywxdi0wLjAyaDAuMDFoMTIuMTlWMzUuNjUgdi0wLjAxaDAuMDJjMC4wMS0zLjg1LDEuNTgtNy4zNCw0LjEtOS44NmMyLjUxLTIuNSw1Ljk4LTQuMDYsOS44Mi00LjA3di0wLjAyaDAuMDJINzkuMDRMNzkuMDQsMjEuNjl6IE0xMDUuMTgsMTA4LjkyVjM1LjY1di0wLjAyIGgwLjAyYzAtMC45MS0wLjM5LTEuNzUtMS4wMS0yLjM3Yy0wLjYxLTAuNjEtMS40Ni0xLTIuMzctMXYwLjAyaC0wLjAxaC02MS43aC0wLjAydi0wLjAyYy0wLjkxLDAtMS43NSwwLjM5LTIuMzcsMS4wMSBjLTAuNjEsMC42MS0xLDEuNDYtMSwyLjM3aDAuMDJ2MC4wMXY3My4yN3YwLjAyaC0wLjAyYzAsMC45MSwwLjM5LDEuNzUsMS4wMSwyLjM3YzAuNjEsMC42MSwxLjQ2LDEsMi4zNywxdi0wLjAyaDAuMDFoNjEuN2gwLjAyIHYwLjAyYzAuOTEsMCwxLjc1LTAuMzksMi4zNy0xLjAxYzAuNjEtMC42MSwxLTEuNDYsMS0yLjM3aC0wLjAyVjEwOC45MkwxMDUuMTgsMTA4LjkyeiIvPjwvZz48L3N2Zz4="
      />
      <div className="copyStatus">
        {copied && (
          <span className="copied" role="img" aria-label="copied">
            Copied 👍
          </span>
        )}
        {copied === false && (
          <span className="copy-error" role="img" aria-label="permission error">
            💩 No Persmissions
          </span>
        )}
      </div>
    </div>
  );
};
