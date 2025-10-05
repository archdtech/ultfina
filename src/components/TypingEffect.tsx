import { useEffect, useState } from 'react';

const sentences = [
  "We back problem-solvers who turn obstacles into opportunities.",
  "We partner with visionaries who build what's next.",
  "We invest in founders who move fast and execute with precision.",
  "We scale ideas with entrepreneurs who see solutions, not limits.",
  "We work with builders who turn bold ambitions into momentum.",
  "We fuel those who thrive in uncertainty and turn chaos into advantage.",
  "We seek founders who embrace risk and never settle.",
  "We align with innovators who make markets, not follow them.",
  "We partner with doers—because execution matters.",
  "We scale game-changers who turn vision into impact."
];

interface TypingEffectProps {
  textColor?: string;
}

const TypingEffect = ({ textColor = "text-gray-400" }: TypingEffectProps) => {
  const [text, setText] = useState('');
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(50);

  useEffect(() => {
    const currentSentence = sentences[sentenceIndex];
    
    if (!isDeleting && text === currentSentence) {
      // Pause at the end of typing
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }
    
    if (isDeleting && text === '') {
      setIsDeleting(false);
      setSentenceIndex((prev) => (prev + 1) % sentences.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(text.slice(0, -1));
        setTypingSpeed(30);
      } else {
        setText(currentSentence.slice(0, text.length + 1));
        setTypingSpeed(50);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, sentenceIndex, isDeleting, typingSpeed]);

  return (
    <div className={`text-xl md:text-2xl ${textColor} font-light h-[60px] flex items-center`}>
      {text}
      <span className="animate-pulse ml-1">|</span>
    </div>
  );
};

export default TypingEffect;
