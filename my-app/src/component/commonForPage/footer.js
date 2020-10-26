import React from "react";

export class Footer extends React.Component {
  render() {
    return (
      <>
        <div class="footer">
          <button id="contact">
            <span>
              Detalii de contact:
              <span>
                {/* eslint-disable-next-line */}
                💌
              </span>
            </span>
          </button>
        </div>
      </>
    );
  }
}
