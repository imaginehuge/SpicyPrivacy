// components/contact/ContactForm.tsx
"use client";

import { useEffect, useRef } from 'react';

export function ContactForm() {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const formContainer = formContainerRef.current;
    if (!formContainer) {
      return;
    }

    const f = document.createElement("iframe");
    const ifrmSrc = 'https://forms.zohopublic.in/sarthakgoyal487gm1/form/ContactUs/formperma/GOzTPi3pMe2hg6CnLg_4EoQy-IUZ6xpJl0-Nasqq6qA?zf_rszfm=1';

    f.src = ifrmSrc;
    f.style.border="none";
    f.style.height="906px";
    f.style.width="100%";
    f.style.transition="all 0.5s ease";
    f.setAttribute("aria-label", 'Contact Us');

    formContainer.appendChild(f);

    const handleMessage = (event: MessageEvent) => {
      const evntData = event.data;
      if( evntData && evntData.constructor == String ){
        const zf_ifrm_data = evntData.split("|");
        if ( zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3 ) {
          const zf_perma = zf_ifrm_data[0]; 
          const zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
          const iframe = formContainer?.getElementsByTagName("iframe")[0];
          if (iframe && (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0 ) {
            const prevIframeHeight = iframe.style.height;
            if ( prevIframeHeight != zf_ifrm_ht_nw ) {
              iframe.style.height = zf_ifrm_ht_nw;
            }
          }
        }
      }
    };

    window.addEventListener('message', handleMessage, false);

    return () => {
      window.removeEventListener('message', handleMessage);
      if (formContainer) {
        formContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div ref={formContainerRef} id="zf_div_GOzTPi3pMe2hg6CnLg_4EoQy-IUZ6xpJl0-Nasqq6qA" className="rounded-lg overflow-hidden"></div>
  );
}
