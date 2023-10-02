import React from 'react'
import { useSelector } from 'react-redux';
import SearchResultsCard from './SearchResultsCard';

function SearchResultsContainer() {
    const { isMenuOpen } = useSelector(store => store.menu)
    return !isMenuOpen ? (
        <div className='w-[calc(100vw-5vw)] px-8 pb-6 mt-16'>
            <SearchResultsCard />
        </div>
    )
        : (
            <div className='w-[calc(100vw-15vw)] pb-6 px-8 ml-8  mt-16'>
                <SearchResultsCard />
            </div>
        )
}

export default SearchResultsContainer
