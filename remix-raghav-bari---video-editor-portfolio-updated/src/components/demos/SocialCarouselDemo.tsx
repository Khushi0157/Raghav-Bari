import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, MessageCircle, Send, Bookmark, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { sounds } from '../../utils/soundEffects';

interface DemoProps {
  isPlaying: boolean;
}

export const SocialCarouselDemo: React.FC<DemoProps> = ({ isPlaying }) => {
  const [slide, setSlide] = useState<number>(0);
  const [likes, setLikes] = useState<number>(11420);
  const [isLiked, setIsLiked] = useState<boolean>(true);
  const [isFollowed, setIsFollowed] = useState<boolean>(false);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % 3);
    }, 2600);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const toggleLike = () => {
    sounds.playPop();
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const toggleFollow = () => {
    sounds.playSuccess();
    setIsFollowed(!isFollowed);
  };

  return (
    <div className="w-full h-full bg-[#FFFFFF] text-zinc-900 p-4 sm:p-5 flex flex-col justify-between select-none relative overflow-hidden font-sans border border-zinc-200 rounded-xl shadow-xl">
      {/* Instagram Header */}
      <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-[2px]">
            <div className="w-full h-full bg-zinc-900 rounded-full flex items-center justify-center text-white text-[10px] font-bold">
              RB
            </div>
          </div>
          <div>
            <div className="font-bold text-xs flex items-center gap-1">
              <span>saasanimatorguy</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            </div>
            <div className="text-[10px] text-zinc-400">Raghav Bari • Original Audio</div>
          </div>
        </div>

        <button
          onClick={toggleFollow}
          className={`text-[11px] font-bold px-3 py-1 rounded-lg transition-all ${
            isFollowed
              ? 'bg-zinc-100 text-zinc-700'
              : 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
          }`}
        >
          {isFollowed ? 'Following' : 'Follow'}
        </button>
      </div>

      {/* Interactive Carousel Slide Area */}
      <div className="relative flex-1 flex items-center justify-center my-3 bg-zinc-50 rounded-xl border border-zinc-100 p-4 overflow-hidden">
        {/* Left / Right Buttons */}
        <button
          onClick={() => {
            sounds.playClick();
            setSlide((s) => (s === 0 ? 2 : s - 1));
          }}
          className="absolute left-2 z-10 w-7 h-7 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-md text-zinc-700 hover:bg-white"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => {
            sounds.playClick();
            setSlide((s) => (s === 2 ? 0 : s + 1));
          }}
          className="absolute right-2 z-10 w-7 h-7 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-md text-zinc-700 hover:bg-white"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Slide Contents */}
        <div className="text-center w-full">
          {slide === 0 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-2">
              <div className="w-12 h-12 bg-zinc-900 text-white rounded-xl flex items-center justify-center text-2xl font-bold font-serif mx-auto shadow-md">
                N
              </div>
              <div className="font-extrabold text-lg text-zinc-900">Notion Kinetic Pack</div>
              <div className="text-xs text-zinc-500">Slide 1 of 3 • High Engagement Template</div>
            </motion.div>
          )}

          {slide === 1 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-2">
              <div className="text-2xl font-extrabold text-blue-600">SaaS Animations</div>
              <div className="text-xs text-zinc-600 max-w-xs mx-auto">
                "Clean subtitle motion text, smooth transitions, dynamic sound FX"
              </div>
              <div className="inline-block px-2.5 py-1 rounded-md bg-blue-50 text-blue-600 font-bold text-xs">
                After Effects .AEP
              </div>
            </motion.div>
          )}

          {slide === 2 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="space-y-2">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto font-bold">
                <Check className="w-6 h-6" />
              </div>
              <div className="font-extrabold text-lg text-zinc-900">Ready to Level Up?</div>
              <div className="text-xs text-zinc-500">DM "EDIT" on Instagram or WhatsApp</div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Instagram Engagement Action Bar */}
      <div className="space-y-1">
        <div className="flex items-center justify-between text-zinc-700">
          <div className="flex items-center gap-4">
            <button onClick={toggleLike} className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Heart className={`w-5 h-5 ${isLiked ? 'text-rose-500 fill-rose-500' : 'text-zinc-700'}`} />
              <span className="text-xs font-bold">{likes.toLocaleString()}</span>
            </button>
            <div className="flex items-center gap-1">
              <MessageCircle className="w-5 h-5" />
              <span className="text-xs font-semibold">5.6K</span>
            </div>
            <div className="flex items-center gap-1">
              <Send className="w-5 h-5" />
              <span className="text-xs font-semibold">10K</span>
            </div>
          </div>
          <Bookmark className="w-5 h-5 text-zinc-700" />
        </div>
        <div className="text-[11px] text-zinc-500">
          Liked by <span className="font-semibold text-zinc-800">founders_hub</span> and <span className="font-semibold text-zinc-800">11,420 others</span>
        </div>
      </div>
    </div>
  );
};
