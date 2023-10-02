import React, { useEffect, useState } from 'react'
import { LOGO_URL, BURGER_MENU, USER_ICON, YOUTUBE_SEARCH_API, YOUTUBE_SEARCH_CONTENT_API } from '../Utils/constants';
import SEARCH_ICON from '../assets/search.png'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../redux/menuSlice';
import { Link } from 'react-router-dom';
import SuggestionBox from './SuggestionBox';
import { GrClose } from 'react-icons/gr'
import { cacheResults } from '../redux/suggestionSlice';
import { useNavigate } from 'react-router-dom';
function Head() {
    const [searchQuery, setSearchQuery] = useState('');
    const [SuggestionData, setSuggestionData] = useState(null);
    const [searchActive, setSearchActive] = useState(false);
    //const [searchResults, setSearchResults] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { suggesionList } = useSelector(store => store.suggestions);
    //console.log(suggesionList)

    const handleOnFocus = () => {
        setSearchActive(true)
    }
    const handleOnBlur = () => {
        const timer = setTimeout(() => {
            setSearchActive(false)
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    }
    const clearSearch = () => {
        setSearchQuery('')
    }

    //debouncing
    useEffect(() => {
        const timer = setTimeout(() => {

            if (suggesionList[searchQuery]) {
                setSuggestionData(suggesionList[searchQuery])
            }
            else {
                getSearchSuggestions()
            }
        }, 200);


        return () => {
            clearTimeout(timer);
        }

    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        //console.log(json[1]);
        setSuggestionData(json[1])

        //update cache state
        dispatch(cacheResults({
            [searchQuery]: json[1],
        }))
    }
    const handleMenuToggle = () => {
        dispatch(toggleMenu())
    }

    const handleSearch = () => {
        if (searchQuery !== '') {
            navigate('/results?search_query=' + searchQuery);
        }
    }

    const searchResult = (e) => {
        let code = e.keyCode || e.which;
        if (code === 13) {
            handleSearch()
        }
    }

    const handleSuggestionClick = (query) => {
        console.log(query);
        setSearchQuery(query);
        if (searchQuery !== '') {
            navigate('/results?search_query=' + searchQuery);
        }

    }

    return (
        <div className='grid grid-flow-col px-6 py-2  justify-between sticky z-10 top-0 bg-white'>
            <div className='flex gap-x-6 col-span-1 items-center'>

                <img className='h-6'
                    src={BURGER_MENU}
                    alt='menu'
                    onClick={handleMenuToggle}
                />

                <Link to='/'>
                    <img className='h-5'
                        src={LOGO_URL}
                        alt='logo'
                    />
                </Link>
            </div>
            <div className='col-span-10 justify-center items-center flex'>
                <div className='flex relative justify-center items-center  border-gray-300 border-solid border-t-2 border-b-2 border-l-2 rounded-l-3xl py-2 px-4 focus:outline-none w-1/2'>
                    {
                        searchActive && (
                            <img className='h-5 px-2'
                                src={SEARCH_ICON}
                                alt='search-button' />
                        )
                    }
                    <input type='text' className='focus:outline-none w-full' placeholder='Search' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} onFocus={handleOnFocus} onBlur={handleOnBlur} onKeyUp={e => searchResult(e)} />
                    {
                        searchActive && searchQuery.length > 0 && (
                            <SuggestionBox suggestions={SuggestionData} suggestionClick={handleSuggestionClick} />
                        )
                    }
                    {
                        searchQuery.length > 0 && (
                            <div className='ml-2 hover:bg-gray-200 p-1 rounded-full' onClick={() => clearSearch()}>
                                <GrClose className='' />
                            </div>
                        )
                    }

                </div>
                <button className=' border-gray-300 border-solid border-t-2 border-b-2 border-l-2 rounded-r-3xl p-2 bg-gray-100 focus:outline-none hover:bg-gray-200' onClick={handleSearch}>
                    <img className='h-6 px-4'
                        src={SEARCH_ICON}
                        alt='search-button' />
                </button>
            </div>
            <div className='col-span-1 flex items-center'>
                <img className='h-8'
                    src={USER_ICON}
                    alt='user-profile' />
            </div>
        </div>
    )
}

export default Head
