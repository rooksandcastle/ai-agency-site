import React, { useState, useEffect, useRef } from 'react';
import Vapi from '@vapi-ai/web';

const VAPI_PUBLIC_KEY = 'a2677509-c16e-4853-b502-6c98fab2628f';
const ASSISTANT_ID = '4c0c97c6-f011-410f-945d-e5b9b6b91f1b';

const vapi = new Vapi(VAPI_PUBLIC_KEY);

const VapiDemo = () => {
  const [status, setStatus] = useState('idle'); // idle | connecting | active | ended
  const [isMuted, setIsMuted] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [transcript, setTranscript] = useState([]);
  const transcriptRef = useRef(null);

  useEffect(() => {
    vapi.on('call-start', () => setStatus('active'));
    vapi.on('call-end', () => {
      setStatus('ended');
      setVolumeLevel(0);
    });
    vapi.on('speech-start', () => setVolumeLevel(1));
    vapi.on('speech-end', () => setVolumeLevel(0));
    vapi.on('volume-level', (vol) => setVolumeLevel(vol));
    vapi.on('message', (msg) => {
      if (msg.type === 'transcript' && msg.transcriptType === 'final') {
        setTranscript((prev) => [
          ...prev,
          { role: msg.role, text: msg.transcript },
        ]);
      }
    });
    vapi.on('error', (e) => {
      console.error('Vapi error', e);
      setStatus('idle');
    });

    return () => vapi.removeAllListeners();
  }, []);

  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [transcript]);

  const handleStart = async () => {
    setStatus('connecting');
    setTranscript([]);
    try {
      await vapi.start(ASSISTANT_ID);
    } catch (e) {
      console.error(e);
      setStatus('idle');
    }
  };

  const handleStop = () => {
    vapi.stop();
    setStatus('ended');
  };

  const handleMute = () => {
    vapi.setMuted(!isMuted);
    setIsMuted(!isMuted);
  };

  const handleReset = () => {
    setStatus('idle');
    setTranscript([]);
    setVolumeLevel(0);
  };

  const pulseSize = status === 'active' ? 1 + volumeLevel * 0.4 : 1;

  return (
    <div className="bg-brand-surface/80 border border-brand-border rounded-3xl p-6 md:p-8 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <p className="text-xs tracking-[0.4em] text-premium-green uppercase">Live Demo</p>
        <h2 className="text-2xl font-semibold">Talk to Our AI Letting Agent</h2>
        <p className="text-sm text-text-secondary max-w-md mx-auto">
          Experience exactly what your tenants and landlords would hear. Click to start a real call — no setup needed.
        </p>
      </div>

      {/* Status pill */}
      <div className="flex justify-center">
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border ${
          status === 'active'
            ? 'bg-premium-green/10 border-premium-green text-premium-green'
            : status === 'connecting'
            ? 'bg-yellow-400/10 border-yellow-400 text-yellow-400'
            : status === 'ended'
            ? 'bg-white/5 border-white/20 text-text-tertiary'
            : 'bg-white/5 border-white/10 text-text-tertiary'
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${
            status === 'active' ? 'bg-premium-green animate-pulse' :
            status === 'connecting' ? 'bg-yellow-400 animate-ping' :
            'bg-white/20'
          }`} />
          {status === 'idle' && 'Ready to call'}
          {status === 'connecting' && 'Connecting…'}
          {status === 'active' && 'Call in progress'}
          {status === 'ended' && 'Call ended'}
        </div>
      </div>

      {/* Orb */}
      <div className="flex justify-center items-center py-4">
        <div
          className="relative flex items-center justify-center w-28 h-28 rounded-full transition-transform duration-150"
          style={{ transform: `scale(${pulseSize})` }}
        >
          {/* Glow rings */}
          {status === 'active' && (
            <>
              <div className="absolute inset-0 rounded-full bg-premium-green/20 animate-ping" />
              <div className="absolute inset-2 rounded-full bg-premium-green/10 animate-ping delay-150" />
            </>
          )}
          <div className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl shadow-2xl transition-all duration-300 ${
            status === 'active'
              ? 'bg-gradient-to-br from-premium-green/40 to-premium-green/10 border border-premium-green/50 shadow-premium-green/30'
              : 'bg-brand-surface border border-brand-border'
          }`}>
            {status === 'idle' && '🎙️'}
            {status === 'connecting' && '⏳'}
            {status === 'active' && '🔊'}
            {status === 'ended' && '✅'}
          </div>
        </div>
      </div>

      {/* Transcript */}
      {transcript.length > 0 && (
        <div
          ref={transcriptRef}
          className="max-h-48 overflow-y-auto space-y-2 border border-brand-border rounded-2xl p-4 bg-black/20"
        >
          {transcript.map((line, idx) => (
            <div key={idx} className={`flex gap-2 text-sm ${line.role === 'assistant' ? 'justify-start' : 'justify-end'}`}>
              <div className={`max-w-[80%] px-3 py-2 rounded-xl ${
                line.role === 'assistant'
                  ? 'bg-premium-green/10 text-text-primary border border-premium-green/20'
                  : 'bg-white/5 text-text-secondary border border-white/10'
              }`}>
                <p className="text-xs font-medium mb-0.5 opacity-50">
                  {line.role === 'assistant' ? 'AI Agent' : 'You'}
                </p>
                {line.text}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        {status === 'idle' && (
          <button
            onClick={handleStart}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-premium-green text-brand-bg font-semibold hover:opacity-90 transition-opacity text-sm"
          >
            <span>📞</span> Start Demo Call
          </button>
        )}
        {status === 'connecting' && (
          <button disabled className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-premium-green/50 text-brand-bg font-semibold text-sm cursor-not-allowed">
            Connecting…
          </button>
        )}
        {status === 'active' && (
          <>
            <button
              onClick={handleMute}
              className={`flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border font-medium text-sm transition-all ${
                isMuted
                  ? 'border-red-500 text-red-400 bg-red-500/10'
                  : 'border-brand-border text-text-secondary hover:border-white/30'
              }`}
            >
              {isMuted ? '🔇 Unmute' : '🎤 Mute'}
            </button>
            <button
              onClick={handleStop}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-red-500/20 border border-red-500/50 text-red-400 font-semibold text-sm hover:bg-red-500/30 transition-all"
            >
              📵 End Call
            </button>
          </>
        )}
        {status === 'ended' && (
          <>
            <button
              onClick={handleReset}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-brand-border text-text-secondary hover:border-white/30 font-medium text-sm transition-all"
            >
              🔄 Try Again
            </button>
            <a
              href="/contact"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-premium-green text-brand-bg font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              💬 Get This For My Business
            </a>
          </>
        )}
      </div>

      <p className="text-center text-xs text-text-tertiary">
        Powered by Vapi · Rooks &amp; Castle AI · This is a live voice agent, not a recording
      </p>
    </div>
  );
};

export default VapiDemo;
