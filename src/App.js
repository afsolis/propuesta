import React, { useState } from 'react';
import 'animate.css';
import './App.css';
import Confetti from 'react-confetti';
import ReactAudioPlayer from 'react-audio-player';
const audioURL = "edSheeran.mp3";

function App() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: '0', left: '0' });
  const [initialPosition, setInitialPosition] = useState(true);
  const [playAudio, setPlayAudio] = useState(false); 
  const [showConfetti, setShowConfetti] = useState(false);
  const [showStartButton, setShowStartButton] = useState(true);

  const handleStartClick = () => {
    setPlayAudio(true); 
    setShowStartButton(false); 
  };

  const handleYesClick = () => {
    setShowAnimation(true);
    setShowConfetti(true);
  };

  const handleNoClick = () => {
    alert('Oh, qué pena. Espero que sigamos siendo amigos.');
  };

  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 80) + '%';
    const randomLeft = Math.floor(Math.random() * 80) + '%';
    setButtonPosition({ top: randomTop, left: randomLeft });
    setInitialPosition(false);
  };

  return (
    <div className="app">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={500}
          gravity={0.01}
          colors={['#ff69b4', '#ff1493', '#ff85c0']}
        />
      )}
      {showStartButton ? (
        <div className="start-screen">
          <button className="heart-button" onClick={handleStartClick}>
            <span>Tócame 😁🥰
            </span>
          </button>
        </div>
      ) : (
        <div className={`proposal-container ${showAnimation ? 'animate__animated animate__zoomIn' : 'animate__animated animate__fadeIn'}`}>
          <div className="heart">
            <div className="heart-content">
              <h1 className="title">Hola Karol 👸🏻</h1>
              <p className="message">
                Desde el primer momento en que te vi, supe que eras especial. A pesar de la distancia que nos separa, cada día que pasa me doy cuenta de cuánto significas para mí. Tus palabras, tu risa, y tu presencia, aunque sea a través de una pantalla, llenan mis días de alegría y amor.<br /> <br />Karol, ¿quieres ser mi novia y construir juntos una historia de amor que supere cualquier distancia?
              </p>
            </div>
          </div>
          <div className="button-container">
            <button className="yes-button" onClick={handleYesClick}>Shí 🥰</button>
            <button
              className="no-button"
              onClick={handleNoClick}
              onMouseEnter={moveNoButton}
              style={initialPosition ? {} : { position: 'absolute', ...buttonPosition }}
            >
              No 🥺
            </button>
          </div>
          {playAudio && (
            <ReactAudioPlayer
              id="background-audio"
              src={audioURL}
              autoPlay
              controls={false}
              style={{ display: 'none' }}
            />
          )}
          {showAnimation && <p className="special-message animate__animated animate__heartBeat">¡Gracias por decir que sí, Karol! 💖</p>}
        </div>
      )}
    </div>
  );
}

export default App;
