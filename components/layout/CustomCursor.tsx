'use client';
import { useCursor } from '@/hooks/useCursor';

export default function CustomCursor() {
  useCursor();
  return (
    <>
      <div className="cursor" id="cursor" />
      <div className="cursor-follower" id="cursor-follower" />
    </>
  );
}
