import React from 'react'
import Bgimg from './public/bg.png'

function Portfolio() {
  return (

   /* 827x640 */
<div class="grid grid-cols-2 md:grid-cols-3 gap-4 w-2/3 pt-40 port mx-auto">
    <div>
        <img class="h-auto max-w-full rounded-lg" src={Bgimg} alt="" />
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={Bgimg} alt="" />
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={Bgimg} alt="" />
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={Bgimg} alt="" />
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={Bgimg} alt="" />
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={Bgimg} alt="" />
    </div>
</div>

  )
}

export default Portfolio
