import React from "react"

function NewsArticle({data}) {
    let date = data.publishedAt.split('T');
    let orderedDate = date[0].split('-');
    let title = data.title.split(" - ");
    return(
        <div className="newsStories">
            <a href={data.url}>{title[0]}</a>
            <div className="sources">
                <span className="date">
                    {orderedDate[2]+
                    '/'+orderedDate[1]+
                    '/'+orderedDate[0]}
                </span>
                <span className="source">{data.source.name}</span>
            </div>
        </div>
    )
}
export default NewsArticle