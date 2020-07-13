import React from "react";
/* import 'https://github.com/tohshine/blog/blob/master/style/style.css'
import 'https://github.com/tohshine/blog/blob/master/style/app.css' */

import '../public/style.css'
import '../public/app.css'
const _app = ({ Component }) => (

    
    <div className='flex  flex-col text-gray-600  w-full justify-center  '>
      <Component />
    </div>

);

export default _app;
