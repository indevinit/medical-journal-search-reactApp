import React from 'react'

const resultStyle ={
  
  width: '100%',
  height: '50px',
  textAlign:'center',
  margin:'auto',
  backgroundColor:'greenlime'
  
}

const liStyle ={
  listStyle:'none'
}

const h2Style ={
  color: 'red'
}


export default function Result({result, errorVal}) {
  return (
      <div style={resultStyle}>   
        <br/>
        <br/>
        <br/>
        <br/>
        <h2 style={h2Style}>{errorVal}</h2>

      <ul>
      {result.map((result) => 
      <li style={liStyle} key={result.id}> 
      <h3>Journal Title = {result.title}</h3> 
    
      <p>Author = {result.authorString}</p> 
    
      <p>Source ={result.source}</p> </li>
      )}   
      </ul>
  </div> 
  )
}


