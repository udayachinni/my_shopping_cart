import React from'react'
import list from'../Data'
import Cards from './card'
const Amazon = () => {
  return (
<section>
{
    list.map((item)=>(<Cards key={item.id} item={item}/>))
}
</section>
  )
}

export default Amazon;
