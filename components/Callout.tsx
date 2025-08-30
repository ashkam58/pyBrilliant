'use client'
import { ReactNode } from 'react'

interface CalloutProps {
  type?: 'tip' | 'warn' | 'note';
  children: ReactNode;
}

export function Callout({ type = 'tip', children }: CalloutProps) {
  const styles = {
    tip: {
      border: 'border-blue-200',
      bg: 'bg-blue-50/80',
      icon: '💡',
      accent: 'border-l-4 border-l-blue-400'
    },
    warn: {
      border: 'border-yellow-200', 
      bg: 'bg-yellow-50/80',
      icon: '⚠️',
      accent: 'border-l-4 border-l-yellow-400'
    },
    note: {
      border: 'border-purple-200',
      bg: 'bg-purple-50/80', 
      icon: '📝',
      accent: 'border-l-4 border-l-purple-400'
    }
  }

  const style = styles[type]

  return (
    <div className={`rounded-lg border ${style.border} ${style.bg} ${style.accent} p-4 my-4 backdrop-blur-sm shadow-sm`}>
      <div className="flex items-start space-x-3">
        <div className="text-xl flex-shrink-0 mt-0.5">{style.icon}</div>
        <div className="flex-1 text-gray-700 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Callout;
