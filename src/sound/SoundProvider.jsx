import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';

const SoundContext = createContext({ play: () => { } });

const envelope = (context, gainNode, startTime, peak = 0.035, attack = 0.015, release = 0.16) => {
  gainNode.gain.setValueAtTime(0.0001, startTime);
  gainNode.gain.exponentialRampToValueAtTime(peak, startTime + attack);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + attack + release);
};

const tone = (context, destination, { time, frequency, type = 'sine', peak, attack, release, detune = 0 }) => {
  const osc = context.createOscillator();
  const gain = context.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(frequency, time);
  osc.detune.setValueAtTime(detune, time);
  osc.connect(gain);
  gain.connect(destination);
  envelope(context, gain, time, peak, attack, release);
  osc.start(time);
  osc.stop(time + attack + release + 0.02);
};

const sweep = (context, destination, { time, from, to, peak = 0.025, duration = 0.24, type = 'triangle' }) => {
  const osc = context.createOscillator();
  const gain = context.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(from, time);
  osc.frequency.exponentialRampToValueAtTime(to, time + duration);
  osc.connect(gain);
  gain.connect(destination);
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(peak, time + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
  osc.start(time);
  osc.stop(time + duration + 0.04);
};

const noiseBurst = (context, destination, { time, peak = 0.012, duration = 0.14, lowpass = 2400 }) => {
  const buffer = context.createBuffer(1, Math.ceil(context.sampleRate * duration), context.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) {
    data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
  }

  const source = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();

  source.buffer = buffer;
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(lowpass, time);

  source.connect(filter);
  filter.connect(gain);
  gain.connect(destination);

  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(peak, time + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

  source.start(time);
  source.stop(time + duration);
};

const patternMap = {
  heroTyping: (context, destination, time) => {
    tone(context, destination, { time, frequency: 1220, type: 'square', peak: 0.4, attack: 0.005, release: 0.04 });
    tone(context, destination, { time: time + 0.018, frequency: 910, type: 'triangle', peak: 0.25, attack: 0.004, release: 0.05 });
  },
  systemBoot: (context, destination, time) => {
    sweep(context, destination, { time, from: 180, to: 360, duration: 0.2, peak: 0.5 });
    tone(context, destination, { time: time + 0.08, frequency: 540, type: 'sine', peak: 0.4, attack: 0.02, release: 0.18 });
  },
  accessGranted: (context, destination, time) => {
    tone(context, destination, { time, frequency: 620, type: 'sine', peak: 0.6, attack: 0.02, release: 0.12 });
    tone(context, destination, { time: time + 0.1, frequency: 930, type: 'sine', peak: 0.5, attack: 0.02, release: 0.18 });
  },
  buttonHover: (context, destination, time) => {
    tone(context, destination, { time, frequency: 820, type: 'triangle', peak: 0.35, attack: 0.01, release: 0.06 });
  },
  buttonClick: (context, destination, time) => {
    tone(context, destination, { time, frequency: 320, type: 'sine', peak: 0.6, attack: 0.01, release: 0.08 });
    tone(context, destination, { time: time + 0.06, frequency: 540, type: 'triangle', peak: 0.5, attack: 0.01, release: 0.1 });
  },
  authorize: (context, destination, time) => {
    sweep(context, destination, { time, from: 420, to: 980, duration: 0.28, peak: 0.5, type: 'sawtooth' });
  },
  glitch: (context, destination, time) => {
    noiseBurst(context, destination, { time, peak: 0.45, duration: 0.08, lowpass: 1900 });
    tone(context, destination, { time: time + 0.02, frequency: 160, type: 'square', peak: 0.35, attack: 0.003, release: 0.04 });
  },
  scan: (context, destination, time) => {
    sweep(context, destination, { time, from: 240, to: 1240, duration: 0.32, peak: 0.45 });
  },
  unlock: (context, destination, time) => {
    tone(context, destination, { time, frequency: 480, type: 'triangle', peak: 0.5, attack: 0.01, release: 0.08 });
    tone(context, destination, { time: time + 0.08, frequency: 760, type: 'triangle', peak: 0.4, attack: 0.01, release: 0.1 });
  },
  cardHover: (context, destination, time) => {
    tone(context, destination, { time, frequency: 1040, type: 'sine', peak: 0.3, attack: 0.005, release: 0.05 });
  },
  cardOpen: (context, destination, time) => {
    sweep(context, destination, { time, from: 280, to: 620, duration: 0.14, peak: 0.55 });
    tone(context, destination, { time: time + 0.11, frequency: 720, type: 'sine', peak: 0.45, attack: 0.01, release: 0.12 });
  },
  panelOpen: (context, destination, time) => {
    tone(context, destination, { time, frequency: 300, type: 'triangle', peak: 0.5, attack: 0.015, release: 0.12 });
    tone(context, destination, { time: time + 0.08, frequency: 580, type: 'triangle', peak: 0.4, attack: 0.015, release: 0.14 });
  },
  panelClose: (context, destination, time) => {
    tone(context, destination, { time, frequency: 520, type: 'triangle', peak: 0.45, attack: 0.01, release: 0.08 });
    tone(context, destination, { time: time + 0.05, frequency: 320, type: 'sine', peak: 0.35, attack: 0.01, release: 0.09 });
  },
  mystery: (context, destination, time) => {
    tone(context, destination, { time, frequency: 220, type: 'sine', peak: 0.25, attack: 0.06, release: 0.32 });
    tone(context, destination, { time: time + 0.12, frequency: 330, type: 'triangle', peak: 0.2, attack: 0.06, release: 0.34 });
  },
};

export const SoundProvider = ({ children }) => {
  const contextRef = useRef(null);
  const masterGainRef = useRef(null);
  const lastPlayedRef = useRef({});
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const unlock = async () => {
      if (!contextRef.current) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return;
        const context = new AudioContextClass();
        const gain = context.createGain();
        gain.gain.value = 1.0;
        gain.connect(context.destination);
        contextRef.current = context;
        masterGainRef.current = gain;
      }

      if (contextRef.current?.state === 'suspended') {
        await contextRef.current.resume();
      }
      setEnabled(true);
    };

    window.addEventListener('pointerdown', unlock, { passive: true });
    window.addEventListener('keydown', unlock);

    return () => {
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
    };
  }, []);

  const value = useMemo(() => ({
    play: (name, cooldown = 70) => {
      const context = contextRef.current;
      const destination = masterGainRef.current;
      if (!enabled || !context || !destination || !patternMap[name]) return;

      const now = performance.now();
      if (lastPlayedRef.current[name] && now - lastPlayedRef.current[name] < cooldown) return;
      lastPlayedRef.current[name] = now;

      const start = context.currentTime + 0.005;
      patternMap[name](context, destination, start);
    },
  }), [enabled]);

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
};

export const useSound = () => useContext(SoundContext);
