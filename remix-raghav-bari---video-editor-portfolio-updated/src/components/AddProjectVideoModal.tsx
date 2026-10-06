import React, { useState, useEffect } from 'react';
import { ProjectItem } from '../types';
import { X, Check, Video, Youtube, Upload, Sparkles, RefreshCw, HardDrive, FileVideo } from 'lucide-react';
import { sounds } from '../utils/soundEffects';
import { isYouTubeUrl } from '../utils/videoUtils';
import { saveMediaBlob, deleteMediaBlob } from '../utils/mediaStorage';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectItem | null;
  onSaveVideo: (projectId: string, videoUrl: string, videoType: 'youtube' | 'mp4', fileName?: string) => void;
  onResetVideo: (projectId: string) => void;
}

export const AddProjectVideoModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  project,
  onSaveVideo,
  onResetVideo,
}) => {
  const [url, setUrl] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileInfo, setFileInfo] = useState<{ name: string; size: string } | null>(null);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  useEffect(() => {
    if (project) {
      setUrl(project.customVideoUrl || '');
      setSelectedFile(null);
      setFileInfo(null);
    }
  }, [project, isOpen]);

  if (!isOpen || !project) return null;

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
      setFileInfo({ name: file.name, size: `${sizeMb} MB` });
      sounds.playPop();
    }
  };

  const handleSave = async () => {
    if (!project) return;
    setIsSaving(true);
    sounds.playSuccess();

    try {
      if (selectedFile) {
        // Persistently save binary file to IndexedDB
        await saveMediaBlob(`project_video_${project.id}`, selectedFile);
        const liveUrl = URL.createObjectURL(selectedFile);
        onSaveVideo(project.id, liveUrl, 'mp4', selectedFile.name);
      } else {
        const cleanUrl = url.trim();
        if (!cleanUrl) {
          await deleteMediaBlob(`project_video_${project.id}`);
          onResetVideo(project.id);
        } else {
          // If URL was provided, clear any local blob
          await deleteMediaBlob(`project_video_${project.id}`);
          const type = isYouTubeUrl(cleanUrl) ? 'youtube' : 'mp4';
          onSaveVideo(project.id, cleanUrl, type);
        }
      }
      onClose();
    } catch (err) {
      console.error('Error saving project video:', err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleReset = async () => {
    if (!project) return;
    sounds.playPop();
    await deleteMediaBlob(`project_video_${project.id}`);
    onResetVideo(project.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-[#12101F] border border-white/[0.12] rounded-3xl max-w-lg w-full p-6 shadow-2xl relative space-y-4">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#1C182A] hover:bg-[#28223C] text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-rose-500/20 text-rose-400">
              <Video className="w-4 h-4" />
            </span>
            <h3 className="text-xl font-bold font-outfit text-white">Add Your Video</h3>
          </div>
          <p className="text-xs text-zinc-400 font-sans">
            Attach your edited video to <span className="text-rose-300 font-semibold font-outfit">"{project.title}"</span>. Saved permanently to browser storage!
          </p>
        </div>

        {/* Option A: Upload File (.mp4 / .webm) */}
        <div className="space-y-2">
          <label className="text-xs font-space font-semibold text-zinc-300 uppercase tracking-wider block">
            Option 1: Upload Video File (.mp4 / .webm / .mov)
          </label>
          <label className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border border-dashed transition-all cursor-pointer ${
            fileInfo 
              ? 'border-emerald-500/50 bg-emerald-500/10 text-emerald-200' 
              : 'border-white/[0.15] bg-[#181527]/50 hover:bg-[#181527] text-zinc-300 hover:text-white'
          }`}>
            <Upload className={`w-5 h-5 ${fileInfo ? 'text-emerald-400' : 'text-purple-400'}`} />
            <div className="text-center">
              {fileInfo ? (
                <>
                  <div className="font-bold text-xs font-outfit text-white flex items-center justify-center gap-1.5">
                    <FileVideo className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{fileInfo.name}</span>
                  </div>
                  <div className="text-[10px] text-emerald-300 font-mono mt-0.5">
                    {fileInfo.size} • Ready to persist permanently
                  </div>
                </>
              ) : (
                <>
                  <span className="text-xs font-semibold block">Click to select video from your device</span>
                  <span className="text-[10px] text-zinc-500 font-mono mt-0.5 block">Stored in local IndexedDB (persists on reload)</span>
                </>
              )}
            </div>
            <input
              type="file"
              accept="video/mp4,video/webm,video/ogg,video/quicktime"
              onChange={handleFile}
              className="hidden"
            />
          </label>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-2 text-zinc-600 text-[10px] uppercase font-mono my-1">
          <div className="flex-1 h-px bg-white/[0.08]" />
          <span>Or Paste Online URL</span>
          <div className="flex-1 h-px bg-white/[0.08]" />
        </div>

        {/* Option B: Online Video URL (YouTube, Vimeo, Web MP4) */}
        <div className="space-y-1.5">
          <label className="text-xs font-space font-semibold text-zinc-300 uppercase tracking-wider block">
            Option 2: Video URL (YouTube, Vimeo, or MP4 stream)
          </label>
          <div className="relative">
            <input
              type="text"
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                if (e.target.value) {
                  setSelectedFile(null);
                  setFileInfo(null);
                }
              }}
              placeholder="e.g. https://www.youtube.com/watch?v=... or https://youtu.be/..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#181527] border border-white/[0.1] text-white text-xs font-mono focus:outline-none focus:border-rose-500 pr-10"
            />
            {isYouTubeUrl(url) && (
              <span className="absolute right-3 top-2.5 text-rose-400">
                <Youtube className="w-4 h-4" />
              </span>
            )}
          </div>
          <span className="text-[10px] text-zinc-500 font-mono block">
            Supports YouTube URLs, Vimeo, or direct video MP4 links.
          </span>
        </div>

        {/* Persistent Storage Notice */}
        <div className="p-2.5 rounded-xl bg-[#171424] border border-white/[0.06] flex items-center gap-2 text-[10px] text-zinc-400 font-sans">
          <HardDrive className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            Videos are saved to browser's high-capacity storage so they continue playing whenever you refresh or revisit.
          </span>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 flex items-center justify-between border-t border-white/[0.08]">
          {project.customVideoUrl ? (
            <button
              type="button"
              onClick={handleReset}
              className="px-3 py-2 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-medium hover:bg-red-900/40 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Video</span>
            </button>
          ) : (
            <div />
          )}

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
              disabled={isSaving}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white text-xs font-bold font-outfit flex items-center gap-1.5 shadow-lg shadow-rose-500/25 transition-all hover:scale-102 cursor-pointer disabled:opacity-50"
            >
              <Check className="w-3.5 h-3.5" />
              <span>{isSaving ? 'Saving File...' : 'Save & Keep on Reload'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
