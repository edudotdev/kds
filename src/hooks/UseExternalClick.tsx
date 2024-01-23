import { useCallback, useEffect } from 'react';

interface Props {
  targetRef: React.RefObject<HTMLElement>
  setShow: (value: boolean) => void 
}

export const useExternalClick = ({ targetRef, setShow }: Props) => {
  const handleClick = (e: MouseEvent) => {
    if (targetRef.current && !targetRef.current.contains(e.target as Node)) {
      setShow(false);
    }
  };

  const escFunction = useCallback((event: any) => {
    if (event.keyCode === 27) setShow(false)
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction])

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [targetRef, setShow]);
};
