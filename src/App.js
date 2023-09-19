import './App.css';
import React, { useEffect, useRef, useState } from 'react';

function App() {
  const audioRefs = useRef({});
  const [currentAudio, setCurrentAudio] = useState(''); // Estado para o tipo de áudio atual

  const playAudio = (id, type) => {
    const audio = audioRefs.current[id];
    if (audio) {
      audio.currentTime = 0;
      audio.play();
      setCurrentAudio(type); // Atualize o estado com o tipo de áudio atual
    }
  };

  useEffect(() => {
    const buttons = document.querySelectorAll('.drum-pad');

    buttons.forEach((button) => {
      const id = button.id;
      const type = button.querySelector('.clip').getAttribute('data-type');

      const audio = button.querySelector('audio');

      if (audio) {
        audioRefs.current[id] = audio;
        button.addEventListener('click', () => playAudio(id, type));
      }
    });

    document.addEventListener('keydown', (event) => {
      const keyToButtonId = {
        q: 'Q',
        w: 'W',
        e: 'E',
        a: 'A',
        s: 'S',
        d: 'D',
        z: 'Z',
        x: 'X',
        c: 'C',
      };

      const key = event.key.toLowerCase();
      const buttonId = keyToButtonId[key];

      if (buttonId) {
        const type = document.getElementById(buttonId).getAttribute('data-type');
        playAudio(buttonId, type);
      }
    });
  }, []);

  return (
    <div className="drum" id="drum-machine">
      <div id="display">
      <div id="audio-type">{currentAudio}</div>
      <button id="bq" className="drum-pad">Q
      <audio data-type="Heater-1" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" id="Q" className="clip"></audio>
      </button>
      <button id="bw" className="drum-pad">W
      <audio data-type="Heater-2" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" id="W" className="clip"></audio>
      </button>
      <button id="be" className="drum-pad">E
      <audio data-type="Heater-3" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" id="E" className="clip"></audio>
      </button><br></br>
      <button id="ba" className="drum-pad">A
      <audio data-type="Heater-4" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" id="A" className="clip"></audio>
      </button>
      <button id="bs" className="drum-pad">S
      <audio data-type="Clap" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" id="S" className="clip"></audio>
      </button>
      <button id="bd" className="drum-pad">D
      <audio data-type="Open-HH" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" id="D" className="clip"></audio>
      </button><br></br>
      <button id="bz" className="drum-pad">Z
      <audio data-type="Kick-n'-Hat" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" id="Z" className="clip"></audio>
      </button>
      <button id="bx" className="drum-pad">X
      <audio data-type="Kick" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" id="X" className="clip"></audio>
      </button>
      <button id="bc" className="drum-pad">C
      <audio data-type="Closed-HH" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" id="C" className="clip"></audio>
      </button>
      </div>
    </div>
  );
}

export default App;
