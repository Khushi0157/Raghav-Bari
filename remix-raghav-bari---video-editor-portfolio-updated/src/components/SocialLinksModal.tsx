import React, { useState } from 'react';
import { SocialLinks } from '../types';
import { X, Check, Save, MessageCircle, Instagram, Linkedin, Mail, Phone, Globe, Sparkles } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  socials: SocialLinks;
  onSave: (updated: SocialLinks) => void;
}

export const SocialLinksModal: React.FC<ModalProps> = ({ isOpen, onClose, socials, onSave }) => {
  const [formData, setFormData] = useState<SocialLinks>(socials);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    sounds.playSuccess();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0F0D18] border border-white/[0.1] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-5 animate-fadeIn text-xs">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-rose-500/15 text-rose-300 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold font-outfit text-white">Client Links & Socials Manager</h3>
              <p className="text-[11px] text-zinc-400 font-sans">Configure WhatsApp, Instagram, LinkedIn & Contact handles</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#181526] border border-white/[0.08] text-zinc-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Inputs */}
        <form onSubmit={handleSave} className="space-y-3.5">
          {/* WhatsApp */}
          <div className="space-y-1">
            <label className="text-zinc-300 font-space text-[11px] flex items-center gap-1.5 font-semibold">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp Direct Chat URL / Number</span>
            </label>
            <input
              type="text"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              className="w-full bg-[#171424] border border-white/[0.08] rounded-xl px-3 py-2 text-white text-xs font-space focus:outline-none focus:border-emerald-500"
              placeholder="https://wa.me/918396881056"
            />
          </div>

          {/* Instagram */}
          <div className="space-y-1">
            <label className="text-zinc-300 font-space text-[11px] flex items-center gap-1.5 font-semibold">
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>Instagram Page Link & Handle</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                value={formData.instagram}
                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                className="w-full bg-[#171424] border border-white/[0.08] rounded-xl px-3 py-2 text-white text-xs font-space focus:outline-none focus:border-pink-500"
                placeholder="https://instagram.com/saasanimatorguy"
              />
              <input
                type="text"
                value={formData.instagramHandle}
                onChange={(e) => setFormData({ ...formData, instagramHandle: e.target.value })}
                className="w-full bg-[#171424] border border-white/[0.08] rounded-xl px-3 py-2 text-white text-xs font-space focus:outline-none focus:border-pink-500"
                placeholder="@saasanimatorguy"
              />
            </div>
          </div>

          {/* LinkedIn */}
          <div className="space-y-1">
            <label className="text-zinc-300 font-space text-[11px] flex items-center gap-1.5 font-semibold">
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn Profile Link</span>
            </label>
            <input
              type="text"
              value={formData.linkedin}
              onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
              className="w-full bg-[#171424] border border-white/[0.08] rounded-xl px-3 py-2 text-white text-xs font-space focus:outline-none focus:border-blue-500"
              placeholder="https://linkedin.com/in/raghav-bari"
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="text-zinc-300 font-space text-[11px] flex items-center gap-1.5 font-semibold">
              <Mail className="w-3.5 h-3.5 text-rose-400" />
              <span>Contact Email</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#171424] border border-white/[0.08] rounded-xl px-3 py-2 text-white text-xs font-space focus:outline-none focus:border-rose-500"
              placeholder="bariraghav119@gmail.com"
            />
          </div>

          {/* Save Action Buttons */}
          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full bg-[#181526] text-zinc-400 hover:text-white font-outfit"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white font-bold font-outfit tracking-wide flex items-center gap-1.5 shadow-lg"
            >
              {savedSuccess ? <Check className="w-4 h-4 text-white" /> : <Save className="w-4 h-4" />}
              <span>{savedSuccess ? 'Saved Live!' : 'Apply Links'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
