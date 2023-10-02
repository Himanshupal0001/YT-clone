import React from 'react'

function SuggestionVideoShimmer() {
    return (
        <>
            {
                Array(12).fill([]).map((e, index) => (
                    <div className='flex h-28 w-80 gap-x-1 mb-2' key={index}>
                        <div className='bg-gray-100 w-40 rounded-lg'>
                        </div>
                        <div>
                            <div className='bg-gray-100 w-40 h-6 mb-2 rounded-lg'></div>
                            <div className='bg-gray-100 w-32 h-4 rounded-sm'></div>
                            <div className='mt-2 flex gap-x-2'>
                                <div className='bg-gray-100 w-8 h-2 rounded-sm'></div>
                                <div className='bg-gray-100 w-8 h-2 rounded-sm'></div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>

    )
}

export default SuggestionVideoShimmer
