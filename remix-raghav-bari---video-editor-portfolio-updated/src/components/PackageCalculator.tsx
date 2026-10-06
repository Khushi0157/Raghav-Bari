import React, { useState } from 'react';
import { SocialLinks } from '../types';
import { Calculator, Sparkles, MessageCircle, Send, Check, Clock, Layers } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface CalculatorProps {
  socials: SocialLinks;
}

export const PackageCalculator: React.FC<CalculatorProps> = ({ socials }) => {
  const [projectType, setProjectType] = useState<string>('saas-demo');
  const [duration, setDuration] = useState<string>('60s');
  const [soundDesign, setSoundDesign] = useState<string>('advanced');
  const [deliverySpeed, setDeliverySpeed] = useState<string>('standard');

  const pricing = {
    types: {
      'saas-demo': { name: 'SaaS Product Demo / UI Motion', base: 280, days: '3-4' },
      'kinetic-type': { name: 'Kinetic Typography & Text Motion', base: 180, days: '2-3' },
      'explainer-3d': { name: '3D & Brand Explainer Video', base: 420, days: '5-7' },
      'reels-pack': { name: 'High-Retention Reels Pack (3x)', base: 320, days: '3-4' },
    },
    durations: {
      '30s': { name: '30 Seconds (Hook & Overview)', mult: 1 },
      '60s': { name: '60 Seconds (Full Workflow)', mult: 1.4 },
      '90s': { name: '90-120 Seconds (Comprehensive Demo)', mult: 1.8 },
    },
    sounds: {
      'basic': { name: 'Standard Audio & Pacing Sync', fee: 0 },
      'advanced': { name: 'Custom Foley SFX, UI Clicks & Voice EQ', fee: 50 },
    },
    speeds: {
      'standard': { name: 'Standard Turnaround', mult: 1 },
      'rush': { name: 'Priority Express (48 Hours)', mult: 1.3 },
    }
  };

  const currentType = pricing.types[projectType as keyof typeof pricing.types];
  const currentDuration = pricing.durations[duration as keyof typeof pricing.durations];
  const currentSound = pricing.sounds[soundDesign as keyof typeof pricing.sounds];
  const currentSpeed = pricing.speeds[deliverySpeed as keyof typeof pricing.speeds];

  const estimatedTotal = Math.round(
    (currentType.base * currentDuration.mult + currentSound.fee) * currentSpeed.mult
  );

  const getWhatsAppEstimateUrl = () => {
    const text = `Hi Raghav, I customized an estimate on your portfolio:\n- Type: ${currentType.name}\n- Duration: ${currentDuration.name}\n- Sound: ${currentSound.name}\n- Speed: ${currentSpeed.name}\n- Estimated Range: ~$${estimatedTotal}\nCan we discuss starting this?`;
    return `https://wa.me/${socials.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-[#12101C]/85 border border-white/[0.08] rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 rounded-2xl bg-rose-500/15 text-rose-300 border border-rose-500/30">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold font-outfit text-white">Project Cost Estimator</h3>
            <p className="text-xs text-zinc-400 font-sans">Configure project scope and generate instant estimate</p>
          </div>
        </div>
        <span className="text-[10px] font-space text-rose-300 bg-rose-500/10 border border-rose-500/25 px-2.5 py-1 rounded-full font-semibold">
          Instant Scope Engine
        </span>
      </div>

      {/* Grid of Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        {/* Project Type */}
        <div className="space-y-1.5">
          <label className="text-zinc-400 font-space text-[11px] uppercase font-semibold">1. Project Category</label>
          <div className="space-y-1">
            {Object.entries(pricing.types).map(([key, val]) => (
              <button
                key={key}
                type="button"
                onClick={() => {
                  sounds.playClick();
                  setProjectType(key);
                }}
                className={`w-full text-left p-3 rounded-2xl border transition-all flex items-center justify-between font-outfit ${
                  projectType === key
                    ? 'bg-[#22172A] border-rose-500 text-white font-bold'
                    : 'bg-[#171424] border-white/[0.06] text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <span>{val.name}</span>
                <span className="font-space text-[10px] text-zinc-500">{val.days} days</span>
              </button>
            ))}
          </div>
        </div>

        {/* Duration & Scope */}
        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-zinc-400 font-space text-[11px] uppercase font-semibold">2. Target Duration</label>
            <div className="space-y-1">
              {Object.entries(pricing.durations).map(([key, val]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    sounds.playClick();
                    setDuration(key);
                  }}
                  className={`w-full text-left p-2.5 rounded-2xl border transition-all flex items-center justify-between font-outfit ${
                    duration === key
                      ? 'bg-[#22172A] border-rose-500 text-white font-bold'
                      : 'bg-[#171424] border-white/[0.06] text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <span>{val.name}</span>
                  {duration === key && <Check className="w-3.5 h-3.5 text-rose-400" />}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-zinc-400 font-space text-[11px] uppercase font-semibold">3. Audio & Sound Foley</label>
            <div className="grid grid-cols-2 gap-1.5">
              {Object.entries(pricing.sounds).map(([key, val]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    sounds.playClick();
                    setSoundDesign(key);
                  }}
                  className={`p-2.5 rounded-2xl border text-left text-[11px] transition-all font-outfit ${
                    soundDesign === key
                      ? 'bg-[#22172A] border-rose-500 text-rose-200 font-bold'
                      : 'bg-[#171424] border-white/[0.06] text-zinc-400'
                  }`}
                >
                  <div className="line-clamp-1">{key === 'advanced' ? 'Tactile SFX & EQ' : 'Standard Audio'}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Estimate Summary & Direct Action Banner */}
      <div className="p-4.5 rounded-2xl bg-[#0D0B14] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-[11px] text-zinc-500 font-space uppercase">Estimated Production Range</div>
          <div className="text-2xl sm:text-3xl font-black font-outfit text-white tracking-tight flex items-baseline gap-2">
            <span>${estimatedTotal}</span>
            <span className="text-xs text-zinc-500 font-normal font-space">(~₹{(estimatedTotal * 86).toLocaleString()})</span>
          </div>
          <div className="text-[10px] text-rose-300 mt-0.5 flex items-center gap-1 font-space">
            <Clock className="w-3 h-3 text-rose-400" /> Turnaround: ~{currentType.days} business days
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <a
            href={getWhatsAppEstimateUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playSuccess()}
            className="flex-1 sm:flex-none px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 via-pink-600 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white font-bold text-xs font-outfit tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-rose-500/25 hover:scale-105 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send WhatsApp Quote</span>
          </a>
        </div>
      </div>
    </div>
  );
};
