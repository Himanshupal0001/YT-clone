import { useEffect } from "react";
import ButtonList from "./ButtonList";
import SearchResultsContainer from "./SearchResultsContainer";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";

function SearchResults() {
    // const { openMenu } = useSelector(store=>store.menu)
    // const dispatch()
    // useEffect(() => {

    // })
    return (
        <div className="flex">
            <div className="left">
                <SideBar />
            </div>
            <div className="right">
                <ButtonList />
                <SearchResultsContainer />
            </div>
        </div>
    )

}

export default SearchResults;