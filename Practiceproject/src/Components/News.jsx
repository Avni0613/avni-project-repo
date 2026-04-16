/*import { useState, useEffect } from 'react '
export default News()
{
    const [news,setNews]= useState([]);
    useEffect(()=>
    { 
        fetch('')
        .then(res=>res.json())
        .then(data=>setNews(data.articles))
    },[]);
} */
// instead we can write 
/*import { useState, useEffect } from "react";
import NewsCard from './NewsCard'
export default function News() {
    const [news, setNews] = useState([]);
    const [search, setsearch] = useState("tesla");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    //state in pagination
    const [currentPage, setCurrentPage] = useState();
    const [itemPerPage, setitemPerPage] = useState();

    function fetchdata() {
        fetch("https://newsapi.org/v2/everything?q=tesla&from=2026-02-23&sortBy=publishedAt&apiKey=eb27e5306f6a41a086f2863094e94d7c")
            .then(res => res.json())
            .then(data => {
                setNews(data.articles);
                setLoading(false);
            }
            )
            .catch(error => {
                setError("Data Not available");
                setLoading(false);
            });
    }
    useEffect(() => {
        fetchdata();
    }, []);

    const lastIndex = itemPerPage * currentPage;
    const FirstIndex = lastIndex - itemPerPage;
    const currentNews = news.slice(FirstIndex, lastIndex);
    const totalPages = math.ceilnews.length / itemPerPage;



    console.log(news);
    if (!loading) return <h1> Loading....</h1>
    if (error) return <h1>{error} </h1>
    if (news.length === 0) return <h2> No News Found </h2>;

    return
    <div>
        type = text
        placeholder="Search news..."
        value={search}
        onChange

        <button onClick={fetchdata}>Search</button>
        {CurrentNews.map((item, index))}
        {currentNews.map(item end print of the lastImage)}
        <button onClick={fetchdata} 
        <h1>Event Handling</h1>
        //<button onClick={handleClick}>Click Me</button>
        <button onClick={() => handleClick("")}>Click Me</button>
        <form onCick={handlesubmit}>
            <input type="text" name="task" placholder="Add your task here" />
            <button type="submit">Add task </button>
        </form>
        <uI id="tasklist" onClick={handleCickList} >
            <li></li>
            <li> Get Id when click when we have </li>

        </uI>


    </div >
}*/


import { useState, useEffect } from "react";


export default function News() {
    const [news, setNews] = useState([]);
    const [search, setSearch] = useState("tesla");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 6;

    function fetchdata() {
        setLoading(true);
        setError("");
        setCurrentPage(1);

        fetch(
            "https://newsapi.org/v2/everything?q=tesla&from=2026-02-23&sortBy=publishedAt&apiKey=eb27e5306f6a41a086f2863094e94d7c"
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.status !== "ok") {
                    throw new Error("API Error");
                }

                setNews(data.articles || []);
                setLoading(false);
            })
            .catch(() => {
                setError("Data Not available");
                setLoading(false);
            });
    }

    useEffect(() => {
        fetchdata();
    }, []);

    const lastIndex = itemPerPage * currentPage;
    const firstIndex = lastIndex - itemPerPage;
    const currentNews = news.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(news.length / itemPerPage);

    if (loading) return <h1>Loading....</h1>;
    if (error) return <h1>{error}</h1>;
    if (news.length === 0) return <h2>No News Found</h2>;

    return (
        <div>
            <h3>Latest News</h3>

            <input
                type="text"
                placeholder="Search news..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <button onClick={fetchdata}>Search</button>

            {currentNews.map((item, index) => (
                <NewsCard key={index} news={item} />
            ))}

            <div style={{ marginTop: "20px" }}>
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>

                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        style={{
                            margin: "5px",
                            fontWeight: currentPage === i + 1 ? "bold" : "normal",
                        }}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
}