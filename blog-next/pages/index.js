import Link from 'next/link'

export default function Home(props) {
console.log(props)
  return (
    <div>
      {
        props.posts && props.posts.map( function(post){
          return (
<Link href={`/${post.Slug}`} key={post.id}>
  <a>
  <h2>{post.Title}</h2>
  <p>{post.user.username}</p>
  </a>
  </Link>
          )
        } ) }
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      
    }
    </div>
  )
          }
// Home
  
export async function getStaticProps() {
  // get posts from strapi backend
   const response = await fetch("http://localhost:1337/posts")
  const data = await response.json()
   return {
    props:{ posts: data}
  }
}