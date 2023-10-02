import React from 'react'

function VideoCardShimmer() {
    return (
        <div className='flex flex-wrap gap-8'>
            {
                Array(12).fill([]).map((e, index) => (
                    <div className=' h-fit w-fit' key={index}>
                        <div className='h-52 w-80 bg-gray-100 rounded-lg mb-1'></div>
                        <div className="grid grid-flow-col gap-2">
                            <div className="h-14 w-14 rounded-full bg-gray-100 col-span-1 overflow-hidden flex items-center"></div>
                            <div className="col-span-12">
                                <div>
                                    <div className="font-semibold w-full h-6 bg-gray-100 rounded-md"></div>
                                    <div className="mt-2 grid">
                                        <span className="text-slate-700 h-6 w-40 bg-gray-100 rounded-md"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default VideoCardShimmer
