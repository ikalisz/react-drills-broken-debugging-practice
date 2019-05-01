import React from 'react'

export default function Todo(props){
    const list = props.list.map((item, i) => {
      return <h4 key={i}>{item}</h4>
    })
    return <div>{list}</div>
  
}
