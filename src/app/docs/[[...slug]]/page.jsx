import React from 'react'

export default function Docs({ params }) {
  if(params.slug?.length === 2){
    return <h3>Viewing Docs for feature {params.slug[0]} and concepts {params.slug[1]}</h3>;
  }else if(params.slug?.length === 1){
    return <h3>Viewing Docs for feature {params.slug[0]}</h3>;
  }
  return <h2>Docs Home Page</h2>;
}
