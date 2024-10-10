import { useEffect, useRef } from 'react';
import { useGlobalDispatch, useGlobalState } from '../context/globalHooks';
import { setNavbarScrolled } from '../context/globalActions';

const useScrollHandler = (ref: React.RefObject<HTMLElement>, scrollOffset: number = 50) => {
  const dispatch = useGlobalDispatch();
  const lastScrollValue = useRef<boolean>(false); // Store the last scroll value to avoid re-renders

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        // Find the element with the class "main-content" within the ref
        const mainContentElement = ref.current.querySelector('.main-content') as HTMLElement;

        if (mainContentElement) {
          const offset = mainContentElement.scrollTop;
          const scrolled = offset > scrollOffset;

          // Only dispatch if the value has changed
          if (lastScrollValue.current !== scrolled) {
            lastScrollValue.current = scrolled;
            dispatch(setNavbarScrolled(scrolled));
          }
        }
      }
    };

    const mainContentElement = ref.current?.querySelector('.main-content');
    if (mainContentElement) {
      mainContentElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (mainContentElement) {
        mainContentElement.removeEventListener('scroll', handleScroll);
      }
    };
    // Empty dependency array ensures this runs only on mount and unmount
  }, []); 

  return useGlobalState().isNavbarScrolled; // Return the scroll state if needed
};

export default useScrollHandler;
