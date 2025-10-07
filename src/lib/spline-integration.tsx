"use client";

import { useEffect, useRef } from 'react';
import { Application } from "@splinetool/runtime";
declare global {
  interface Window {
    Spline: any;
  }
}

interface SplineProps {
  scene: string;
  onLoad?: () => void;
}

export function Spline({ scene, onLoad }: SplineProps) {


   const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const spline = new Application(canvasRef.current);
    spline.load("https://prod.spline.design/eZpmEBXk0yTYyMmZ/scene.splinecode"); // ganti URL scene kamu
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        opacity: 2,
        filter: 'blur(1px)',
        zIndex:'1000'
      }}
    />
  );
}