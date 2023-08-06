import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { BlogFilter } from "../components/BlogFilter";


export function BlogPage() {
    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuary = searchParams.get('post') || '';

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))
    }, []);


    return (
        <div>
            <BlogFilter setSearchParams={setSearchParams} />
            {
                posts
                    .filter(el => el.title.includes(searchQuary))
                    .map(el => <Link to={'/post/' + el.id} key={el.id}> <li className="title">{el.title}</li> </Link>)
            }
        </div>
    )
}
