import React from 'react';
import Article from "./Article.js"

function ArticleList({posts}) {
    const postMap = posts.map((post) => {
        return <Article key={post.id} {...post} />
    })
   return <main>
    {postMap}
   </main>
}

export default ArticleList;