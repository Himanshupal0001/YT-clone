import React from 'react'
import { createPortal } from 'react-dom';
import { GoSearch } from 'react-icons/go'


function SuggestionBox({ suggestions, suggestionClick }) {

    const handleClick = (item) => {
        suggestionClick(item);
        //console.log(item)
        //alert('clicked')
    }

    //top-[31.5%] left-[51.5%] transform -translate-x-1/2 -translate-y-1/2
    return createPortal(
        <div className='w-[36vw] absolute h-[48%] top-[31.5%] left-[51.5%] transform -translate-x-1/2 -translate-y-1/2 bg-white pt-2 rounded-lg shadow-md overflow-auto'>
            {
                suggestions?.map((item, index) => (
                    <div className='flex justify-start items-center gap-x-4 hover:bg-gray-100 px-2 py-1 cursor-default' key={index} onClick={() => handleClick(item)} >
                        <GoSearch size='1.2rem' />
                        <p className='font-medium'>
                            {item}
                        </p>
                    </div>
                ))
            }

        </div >,
        document.getElementById('portal')
    )
}

export default SuggestionBox
