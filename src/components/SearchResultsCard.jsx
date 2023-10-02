import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_CONTENT_API } from "../Utils/constants";
import moment from "moment";
import SearchCardShimmer from './Shimmers/SearchCardShimmer'

function SearchResultsCard() {
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    console.log(searchResults);
    const [searchParams] = useSearchParams(location.search);
    const query = searchParams.get('search_query');
    const navigate = useNavigate();
    //console.log(query);
    useEffect(() => {
        fetchData();
    }, [query]);

    const fetchData = async () => {
        setIsLoading(true)
        try {
            if (query === 'All') {
                navigate('/');
            }
            const data = await fetch(YOUTUBE_SEARCH_CONTENT_API + '&q=' + query);
            const json = await data.json();
            setSearchResults(json.items);
            setIsLoading(false)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            {
                isLoading ? <SearchCardShimmer /> :
                    searchResults?.map((vid, index) => (
                        <Link to={'/watch?v=' + vid?.id?.videoId || vid?.id?.channelId} key={vid?.id?.videoId || index}>
                            <div className="flex w-full  h-48 gap-x-4 my-4 cursor-pointer" >
                                <div className="w-[30%] flex items-center justify-center overflow-hidden">
                                    <img src={vid?.snippet?.thumbnails?.medium?.url} alt='' className=" object-fit h-full w-full rounded-lg" />
                                </div>
                                <div className="w-[70%]">
                                    <div className="text-lg break-words font-">{vid.snippet?.title}</div>
                                    <div className="text-xs mb-4">
                                        <span>• {moment(vid?.snippet?.publishedAt).fromNow()}</span>
                                    </div>
                                    <div className="flex items-center gap-x-2 mb-6">
                                        <div className="w-6 h-6 overflow-hidden rounded-full">
                                            <img src={vid?.snippet?.thumbnails?.default?.url} alt='chaneel img' className="h-full w-full" />
                                        </div>
                                        <span className="text-xs">{vid.snippet?.channelTitle}</span>
                                    </div>
                                    <div className="text-xs text-slate-700">
                                        {vid.snippet?.description.length > 100 ? vid.snippet?.description?.substring(0, 100) + '...' : vid.snippet?.description}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
            }


        </>
    )
}

export default SearchResultsCard;