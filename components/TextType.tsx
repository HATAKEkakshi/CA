import { useEffect, useState } from 'react';

interface TextTypeProps {
  text: string[];
  className?: string;
  typingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
}

const TextType = ({
  text,
  className = '',
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
}: TextTypeProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = text[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentIndex((currentIndex + 1) % text.length);
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, currentIndex, isDeleting, text, typingSpeed, pauseDuration]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default TextType;