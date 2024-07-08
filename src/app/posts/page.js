import Link from "next/link";

export default async function PostsPage({ searchParams }) {
  console.log("search params", searchParams);

  const response = await fetch("https://jsonplaceholder.typicode.com/posts"); //calling the API
  const posts = await response.json(); //parse the response as JSON

  //reverse the posts array if the sort parameter is set to descending
  if (searchParams.sort === "desc") {
    posts.reverse();
  }

  return (
    <div>
      <h1>Post list</h1>
      <Link href="/posts?sort=asc">Sort Ascending</Link>
      <Link href="/posts?sort=desc">Sort Descending</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
