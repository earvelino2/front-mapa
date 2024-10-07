import React from "react";
import "./Tela1.css"; // Estilos importados para manter o CSS separado

function App() {
  return (
    <div className="Tela1">
      {/* Container do mapa */}
      <div className="map-container">
        {/* Indicador de localização (ponto azul) */}
        <div className="blue-dot"></div>

        {/* Barra superior com hora e ícones */}
        <div className="top-bar">
          <div className="time">9:41</div>
          <div className="status-icons">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Battery_full_icon.png"
              alt="Battery"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Wi-Fi_Logo.svg"
              alt="Wi-Fi"
            />
          </div>
        </div>
      </div>

      {/* Barra de pesquisa */}
      <div className="search-bar">
        <input type="text" placeholder="Qual seu destino?" />
      </div>

      {/* Barra de URL na parte inferior */}
      <div className="url-bar">
        <p>indoorroutes.com.br</p>
      </div>
    </div>
  );
}

export default Tela1;
