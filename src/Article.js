import React from 'react'
const Article = ({ title, des,link }) => {
  return (
    <article className='post'>
      <h2>{title}</h2>
      <div className='post-info'>
    <span>{des}</span><br /><br />
    <a className="ancor" href={link}>ReadMore</a>
      </div>
    </article>
  )
}

export default Article