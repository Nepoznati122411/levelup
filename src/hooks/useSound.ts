import { useCallback, useRef } from 'react';

export const useSound = () => {
  const audioContextRef = useRef<AudioContext | null>(null);

  const playLevelUpSound = useCallback(() => {
    try {
      // Create audio context on first interaction
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }

      const ctx = audioContextRef.current;
      const now = ctx.currentTime;

      // Create oscillators for a digital "level up" ping
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gainNode = ctx.createGain();

      // Connect nodes
      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(ctx.destination);

      // Configure oscillators for a bright, digital sound
      osc1.type = 'sine';
      osc2.type = 'triangle';

      // Ascending pitch sequence
      osc1.frequency.setValueAtTime(523.25, now); // C5
      osc1.frequency.setValueAtTime(659.25, now + 0.1); // E5
      osc1.frequency.setValueAtTime(783.99, now + 0.2); // G5
      osc1.frequency.setValueAtTime(1046.5, now + 0.3); // C6

      osc2.frequency.setValueAtTime(523.25 * 2, now);
      osc2.frequency.setValueAtTime(659.25 * 2, now + 0.1);
      osc2.frequency.setValueAtTime(783.99 * 2, now + 0.2);
      osc2.frequency.setValueAtTime(1046.5 * 2, now + 0.3);

      // Volume envelope
      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.15, now + 0.05);
      gainNode.gain.setValueAtTime(0.15, now + 0.35);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.8);

      // Start and stop
      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.8);
      osc2.stop(now + 0.8);
    } catch (error) {
      console.log('Audio not supported');
    }
  }, []);

  const playClickSound = useCallback(() => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }

      const ctx = audioContextRef.current;
      const now = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.05);

      gainNode.gain.setValueAtTime(0.1, now);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);

      osc.start(now);
      osc.stop(now + 0.1);
    } catch (error) {
      console.log('Audio not supported');
    }
  }, []);

  return { playLevelUpSound, playClickSound };
};
