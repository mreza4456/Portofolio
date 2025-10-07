import React, { CSSProperties, PropsWithChildren, useId, useRef } from 'react';

type ElectricBorderProps = PropsWithChildren<{
  color?: string;
  thickness?: number;
  className?: string;
  style?: CSSProperties;
}>;

function hexToRgba(hex: string, alpha = 1): string {
  if (!hex) return `rgba(0,0,0,${alpha})`;
  let h = hex.replace('#', '');
  if (h.length === 3) {
    h = h
      .split('')
      .map(c => c + c)
      .join('');
  }
  const int = parseInt(h, 16);
  const r = (int >> 16) & 255;
  const g = (int >> 8) & 255;
  const b = int & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const ElectricBorder: React.FC<ElectricBorderProps> = ({
  children,
  color = '#5227FF',
  thickness = 2,
  className,
  style
}) => {
  const rawId = useId().replace(/[:]/g, '');
  const filterId = `turbulent-static-${rawId}`;
  const strokeRef = useRef<HTMLDivElement | null>(null);

  const inheritRadius: CSSProperties = {
    borderRadius: style?.borderRadius ?? 'inherit'
  };

  const strokeStyle: CSSProperties = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: 'solid',
    borderColor: color
  };

  const glow1Style: CSSProperties = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: 'solid',
    borderColor: hexToRgba(color, 0.6),
    filter: `blur(${0.5 + thickness * 0.25}px)`,
    opacity: 0.5
  };

  const glow2Style: CSSProperties = {
    ...inheritRadius,
    borderWidth: thickness,
    borderStyle: 'solid',
    borderColor: color,
    filter: `blur(${2 + thickness * 0.5}px)`,
    opacity: 0.5
  };

  const bgGlowStyle: CSSProperties = {
    ...inheritRadius,
    transform: 'scale(1.08)',
    filter: 'blur(32px)',
    opacity: 0.3,
    zIndex: -1,
    background: `linear-gradient(-30deg, ${hexToRgba(color, 0.8)}, transparent, ${color})`
  };

  return (
    <div className={'relative isolate ' + (className ?? '')} style={style}>
      {/* Static filter, no animate */}
      <svg
        className="fixed -left-[10000px] -top-[10000px] w-[10px] h-[10px] opacity-[0.001] pointer-events-none"
        aria-hidden
        focusable="false"
      >
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="0"  
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
        </defs>
      </svg>

      {/* Static electric border */}
      <div className="absolute inset-0 pointer-events-none" style={inheritRadius}>
        <div ref={strokeRef} className="absolute inset-0 box-border" style={strokeStyle} />
        <div className="absolute inset-0 box-border" style={glow1Style} />
        <div className="absolute inset-0 box-border" style={glow2Style} />
        <div className="absolute inset-0" style={bgGlowStyle} />
      </div>

      <div className="relative" style={inheritRadius}>
        {children}
      </div>
    </div>
  );
};

export default ElectricBorder;
