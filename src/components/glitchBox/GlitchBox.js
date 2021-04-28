import React from "react";
import "./GlitchBox.css";

function GlitchBox() {
  return (
    <a href="https://github.com/johnrggo?tab=repositories">
      <button className="glitchBox">
        View
        <span aria-hidden> </span>
        Projects
        <span aria-hidden className="glitchBox__glitch">
          View_Projects
        </span>
        <span aria-hidden className="glitchBox__tag">
          {/* R25 */}
        </span>
      </button>
    </a>
  );
}

export default GlitchBox;
