import React, { useEffect, useState } from "react";
import './api.css';
import Search from './Search';
import List from "./List";
import Navbar from "./Navbar";

const Api = () => {
    const [posts, setPosts] = useState([]);  // Posts state
    const [query, setQuery] = useState('');   // Search query state
    const [error, setError] = useState(null); // Error state
    const [after, setAfter] = useState(null);  // Pagination cursor for fetching next posts
    const [limit, setLimit] = useState(5);    // Number of posts per fetch
    const [loading, setLoading] = useState(false); // Loading state to prevent multiple fetches
    const myHeaders = {};
    
    // Build the Reddit endpoint for popular posts or search
    const buildEndpoint = (query) => {
        if (query) {
            return `https://www.reddit.com/search.json?q=${query}&limit=${limit}&after=${after}`;  // Search query
        } else {
            return `https://www.reddit.com/r/popular.json?limit=${limit}&after=${after}`;  // Popular posts
        }
    };

    // Fetch data from the API
    const fetchData = async (endpoint) => {
        setLoading(true);  // Set loading to true before fetching
        try {
            const response = await fetch(endpoint, { headers: myHeaders });
            if (!response.ok) {
                throw new Error(`HTTP error status: ${response.status}`);
            }
            const json = await response.json();
            
            // Append new posts only if after is different (to avoid duplicates)
            setPosts((prevPosts) => {
                const newPosts = json.data.children;
                const newAfter = json.data.after;

                // Avoid adding posts if they are the same as previous
                if (newPosts.length && newAfter !== after) {
                    setAfter(newAfter);  // Update the after cursor for pagination
                    return [...prevPosts, ...newPosts];  // Append the new posts
                }
                return prevPosts;
            });
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);  // Set loading to false after fetching
    };

    // Effect for initial load and whenever search query changes
    useEffect(() => {
        // Reset posts and after when a new search is performed
        setPosts([]);
        setAfter(null);
        fetchData(buildEndpoint(query)); // Fetch based on query or default popular
    }, [query]);  // Dependency array contains query (so it triggers on query change)

    // Scroll event listener to handle infinite scroll
    const handleScroll = () => {
        if (loading) return; // Prevent fetching more while loading
        const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
        const bottomPosition = document.documentElement.offsetHeight;

        // If the user has scrolled near the bottom, fetch next page
        if (scrollPosition >= bottomPosition - 100) {
            // Check if there's an `after` cursor to paginate
            if (after) {
                fetchData(`https://www.reddit.com/r/popular.json?after=${after}&limit=${limit}`);
            }
        }
    };

    // Attach scroll event listener on component mount and remove it on unmount
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [loading, after]); // Rerun when loading or after changes

    // Search input change handler
    function handleSearch(query) {
        console.log("handleSearch Called: "+query);
        setQuery(query);
    }

    // Error state
    if (error) {
        return <div>Error: {error}</div>;
    }

    // Loading state
    if (loading && !posts.length) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Search handleSearch = {handleSearch} />
            <List posts_data={posts} />
            
            {/* Show loading indicator when fetching more posts */}
            {loading && posts.length > 0 && <div>Loading more...</div>}
        </div>
    );
};

export default Api;
