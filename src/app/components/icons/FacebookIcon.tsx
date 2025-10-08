import React from 'react';

interface FacebookIconProps {
  className?: string;
}

const FacebookIcon:React.FC<FacebookIconProps> = ({ className }) => {   
return(
<svg fill="#0a65cc" viewBox="-1.5 0 19 19" xmlns="http://www.w3.org/2000/svg" className={className} stroke="#0a65cc">
<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
<g id="SVGRepo_iconCarrier"><path d="M15.917 17.5H.083V1.665h15.834zm-2.885-7.887a5.032 5.032 0 1 0-5.818 4.971v-3.516H5.936V9.613h1.278V8.505a1.776 1.776 0 0 1 1.9-1.958 7.738 7.738 0 0 1 1.127.098v1.239h-.635a.727.727 0 0 0-.82.785v.944h1.396l-.223 1.455H8.786v3.516a5.033 5.033 0 0 0 4.246-4.97z"></path></g>
</svg>

  );
};
export default FacebookIcon;