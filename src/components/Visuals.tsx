import React from 'react';

interface ComplexityBadgeProps {
  time: string;
  space: string;
}

export function ComplexityBadge({ time, space }: ComplexityBadgeProps) {
  return (
    <div className="flex gap-2 my-4">
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/10 border border-green-500/20">
        <span className="text-xs text-[#94a3b8]">Time:</span>
        <span className="text-sm font-mono font-semibold text-green-400">{time}</span>
      </div>
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
        <span className="text-xs text-[#94a3b8]">Space:</span>
        <span className="text-sm font-mono font-semibold text-blue-400">{space}</span>
      </div>
    </div>
  );
}

interface CalloutProps {
  type: 'info' | 'warning' | 'tip' | 'danger';
  title: string;
  children: React.ReactNode;
}

export function Callout({ type, title, children }: CalloutProps) {
  const styles = {
    info: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      icon: '💡',
      titleColor: 'text-blue-300',
    },
    warning: {
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/20',
      icon: '⚠️',
      titleColor: 'text-yellow-300',
    },
    tip: {
      bg: 'bg-green-500/10',
      border: 'border-green-500/20',
      icon: '✅',
      titleColor: 'text-green-300',
    },
    danger: {
      bg: 'bg-red-500/10',
      border: 'border-red-500/20',
      icon: '🚨',
      titleColor: 'text-red-300',
    },
  };

  const style = styles[type];

  return (
    <div className={`my-5 p-4 sm:p-5 rounded-xl ${style.bg} border ${style.border}`}>
      {title && (
        <p className={`text-sm ${style.titleColor} font-medium mb-1`}>
          {style.icon} {title}
        </p>
      )}
      <div className="text-sm text-[#94a3b8]">{children}</div>
    </div>
  );
}

interface StepWalkthroughProps {
  steps: {
    title: string;
    description: string;
    visual?: React.ReactNode;
  }[];
}

export function StepWalkthrough({ steps }: StepWalkthroughProps) {
  const [currentStep, setCurrentStep] = React.useState(0);

  return (
    <div className="my-6 rounded-xl bg-[#1e293b]/50 border border-[#334155] overflow-hidden">
      {/* Step indicator */}
      <div className="flex items-center gap-1 px-4 py-3 bg-[#0d1117] border-b border-[#334155] overflow-x-auto">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentStep(i)}
            className={`flex-shrink-0 w-8 h-8 rounded-lg text-xs font-bold transition-all
              ${i === currentStep ? 'bg-indigo-500 text-white' : 'bg-[#1e293b] text-[#64748b] hover:text-white'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Step content */}
      <div className="p-4 sm:p-5">
        <h4 className="text-sm font-semibold text-white mb-2">
          Step {currentStep + 1}: {steps[currentStep].title}
        </h4>
        <p className="text-sm text-[#94a3b8] mb-3">{steps[currentStep].description}</p>
        {steps[currentStep].visual && (
          <div className="mt-3">{steps[currentStep].visual}</div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0d1117] border-t border-[#334155]">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#94a3b8] hover:text-white hover:bg-[#1e293b] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          ← Previous
        </button>
        <span className="text-xs text-[#64748b]">{currentStep + 1} / {steps.length}</span>
        <button
          onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
          disabled={currentStep === steps.length - 1}
          className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#94a3b8] hover:text-white hover:bg-[#1e293b] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
