import React, {useState, useEffect} from 'react';

import '../styles/scrollUpButton.scss';

 const ScrollUpButton = () => {
    const [display, displayButton] = useState('none');

    useEffect(() => {
        window.addEventListener('scroll', trackScroll);
    }, []);
    
    const trackScroll = () => {
        if (window.pageYOffset > 200) {
            displayButton('block');
        }
        else displayButton('none');
    }
    
    const backToTop = () => {
        if (window.pageYOffset > 0) {
          window.scrollBy(0, -30);
          setTimeout(backToTop, 0);
        }
      }
    
    return(
        <div className="scroll-up" style={{display: display}} onClick={backToTop} title="To Top">
           <span className ="scroll-up-arrow"><i></i></span>
        </div>
    );
}

export default ScrollUpButton;