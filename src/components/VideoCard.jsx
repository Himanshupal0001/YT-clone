import moment from "moment/moment";

const VideoCard = ({ data }) => {
    if (!data) return;
    const { snippet, statistics } = data;
    const { channelTitle, title, thumbnails, publishedAt } = snippet;
    const { viewCount } = statistics;
    //console.log(data)
    return (
        <div className=' h-fit'>
            <img src={thumbnails.high.url} alt='video' className="w-full rounded-xl object-cover hover:rounded-none mb-2" />
            <div className="grid grid-flow-col gap-2">
                <div className="h-10 w-10 rounded-full col-span-1 overflow-hidden flex items-center">
                    <img src={thumbnails.high.url} alt='channel img' className="object-cover h-full w-full" />
                </div>
                <div className="col-span-12">
                    <div>
                        <span className="font-semibold">{title?.length > 65 ? title.substring(0, 65) + '...' : title} </span>
                        <div className="mt-1 grid">
                            <span className="text-slate-700">{channelTitle}</span>
                            <div className="flex items-center">
                                <span className="text-slate-500 text-sm">{Intl.NumberFormat('en', { notation: 'compact' }).format(viewCount) + ' '}views</span>
                                <span className="mx-1 text-slate-700">•</span>
                                <span className="text-slate-500 text-sm">{moment(publishedAt).fromNow()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard;