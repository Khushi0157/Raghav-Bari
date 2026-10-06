import React, { useState, useRef } from 'react';
import { X, Upload, Check, Camera, Image as ImageIcon, Sparkles, RefreshCw } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentAvatar: string;
  onSaveAvatar: (newAvatarDataUrl: string) => void;
  onResetAvatar: () => void;
}

export const AvatarUploadModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  currentAvatar,
  onSaveAvatar,
  onResetAvatar,
}) => {
  const [preview, setPreview] = useState<string>(currentAvatar);
  const [fileName, setFileName] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPreview(event.target.result as string);
          sounds.playPop();
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    sounds.playSuccess();
    onSaveAvatar(preview);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-[#120F18] border border-white/[0.12] rounded-3xl max-w-md w-full p-6 shadow-2xl relative space-y-5 text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#1C182A] hover:bg-[#28223C] text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-1">
          <div className="inline-flex p-2 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-400 mb-1">
            <Camera className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-black font-outfit text-white">Upload Your Photo</h3>
          <p className="text-xs text-zinc-400 font-sans max-w-xs mx-auto">
            Replace the front picture with your photo (e.g. <span className="text-rose-300 font-mono">IMG_5147 2.JPG</span>).
          </p>
        </div>

        {/* Circular Avatar Preview with Glowing Frame */}
        <div className="flex justify-center my-4">
          <div className="relative group cursor-pointer" onClick={() => fileInputRef.current?.click()}>
            <div className="absolute -inset-2 bg-gradient-to-tr from-rose-600 via-purple-600 to-amber-500 rounded-full blur-xl opacity-60 group-hover:opacity-90 transition-opacity" />
            <div className="relative w-40 h-40 rounded-full p-1 bg-[#181424] border-2 border-rose-500/50 overflow-hidden shadow-2xl flex items-center justify-center">
              <img
                src={preview}
                alt="Raghav Avatar Preview"
                className="w-full h-full rounded-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white text-xs font-semibold">
                <Camera className="w-6 h-6 mb-1" />
                <span>Change Photo</span>
              </div>
            </div>
          </div>
        </div>

        {/* File selector input */}
        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/jpg,image/webp"
            onChange={handleFileChange}
            className="hidden"
          />

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full py-3 px-4 rounded-xl border border-dashed border-rose-500/40 bg-rose-500/10 hover:bg-rose-500/20 text-rose-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Upload className="w-4 h-4 text-rose-400" />
            <span>{fileName ? `Selected: ${fileName}` : 'Choose IMG_5147 2.JPG from device'}</span>
          </button>
        </div>

        {/* Action Controls */}
        <div className="pt-2 flex items-center justify-between border-t border-white/[0.08]">
          <button
            type="button"
            onClick={() => {
              sounds.playClick();
              onResetAvatar();
              onClose();
            }}
            className="text-xs text-zinc-500 hover:text-zinc-300 font-mono flex items-center gap-1 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset Default</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-[#1C182A] text-zinc-300 text-xs font-semibold hover:bg-[#28223C] transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white text-xs font-bold font-outfit flex items-center gap-1.5 shadow-lg shadow-rose-500/25 transition-all hover:scale-102 cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Use This Photo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
