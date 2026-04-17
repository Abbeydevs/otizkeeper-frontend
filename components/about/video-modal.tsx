"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-[95%] p-0 border-none bg-black overflow-hidden aspect-video">
        <DialogHeader className="p-4 bg-white/5 absolute top-0 left-0 w-full z-10 backdrop-blur-sm">
          <DialogTitle className="text-sm font-bold text-white uppercase tracking-wider">
            Otiz Keeper | Introduction
          </DialogTitle>
        </DialogHeader>
        <iframe
          src={`${videoUrl}?autoplay=1`}
          allow="autoplay; fullscreen; picture-in-picture"
          className="w-full h-full"
          title="Otiz Keeper Overview Video"
        />
      </DialogContent>
    </Dialog>
  );
}
