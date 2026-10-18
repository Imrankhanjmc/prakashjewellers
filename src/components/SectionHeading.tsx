import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  alignment?: 'center' | 'left';
  className?: string;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subtitle,
  alignment = 'center',
  className = '',
  light = false,
}) => {
  const alignClass = alignment === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';
  const titleColor = light ? 'text-white' : 'text-[#18372F]';
  const kickerColor = light ? 'text-[#C6A66B]' : 'text-[#A98A50]';
  const subtitleColor = light ? 'text-[#F8F5EF]/80' : 'text-[#282823]/75';

  return (
    <div className={`flex flex-col max-w-2xl ${alignClass} ${className} mb-10`}>
      {kicker && (
        <span className={`text-xs uppercase tracking-[0.2em] font-semibold mb-2.5 ${kickerColor}`}>
          {kicker}
        </span>
      )}
      <h2
        className={`text-2xl md:text-3xl lg:text-4xl font-serif font-medium tracking-tight ${titleColor} leading-tight`}
        style={{ textWrap: 'balance' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-sm md:text-base leading-relaxed ${subtitleColor}`}
          style={{ textWrap: 'balance' }}
        >
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-0.5 w-12 ${light ? 'bg-[#C6A66B]/60' : 'bg-[#C6A66B]'}`} />
    </div>
  );
};
