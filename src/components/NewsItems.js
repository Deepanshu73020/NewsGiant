import React from 'react'

const NewsItems=(props)=> {
    let { title, description, imageUrl, newsUrl, date,source} = props;
    return (
      <div className=''>
        <div className="card my-3" >
          <img src={imageUrl} className="card-img-top" alt="..." />

          <div className="card-body">
            
            
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p></p>
            <p class="card-text"><small>{source}</small><br></br><small>{new Date(date).toGMTString()}</small></p>

            <a href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>

    )
}
export default NewsItems