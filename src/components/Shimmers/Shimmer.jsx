import React from 'react'
import VideoCardShimmer from './VideoCardShimmer'
import SearchCardShimmer from './SearchCardShimmer'
import Loader from '../../Utils/Loader'
import SuggestionVideoShimmer from './SuggestionVideoShimmer'

function Shimmer() {
    return (
        <>
            <Loader />
            <VideoCardShimmer />
            <SearchCardShimmer />
            <SuggestionVideoShimmer />
        </>
    )
}

export default Shimmer
