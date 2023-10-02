import React from 'react'

function SearchCardShimmer() {
    return (
        <>
            {
                Array(12).fill([]).map((e, index) => (
                    <div className="flex w-[70vw]  h-48 gap-x-4 my-4 cursor-pointer" key={index}>
                        <div className="w-[30%] bg-gray-100 h-full flex items-center justify-center rounded-lg">
                        </div>
                        <div className="w-[70%] pt-2">
                            <div className="text-lg break-words bg-gray-100 w-full h-6 mb-2 rounded-md"></div>
                            <div className="text-xs mb-4">
                                <div className='bg-gray-100 h-4 w-96 rounded-md'></div>
                            </div>
                            <div className="flex items-center gap-x-2 mb-6">
                                <div className="w-10 h-10 bg-gray-100 overflow-hidden rounded-full">
                                </div>
                                <span className=" bg-gray-100 h-6 w-40 rounded-lg"></span>
                            </div>
                            <div className="bg-gray-100 h-10 w-full rounded-lg">
                            </div>
                        </div>

                    </div>
                ))
            }
        </>

    )
}

export default SearchCardShimmer
