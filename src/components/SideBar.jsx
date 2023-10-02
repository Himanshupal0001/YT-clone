import React, { useEffect, useState } from 'react'
import { home, shorts } from '../assets/icons/icons';
import { MdOutlineSubscriptions, MdOutlineVideoLibrary, MdOutlineFeedback, MdOutlineSettings } from 'react-icons/md';
import { VscHistory } from 'react-icons/vsc';
import { GoVideo, GoClock, GoChevronDown } from 'react-icons/go'
import { AiOutlineLike, AiOutlineFire, AiOutlineQuestionCircle } from 'react-icons/ai'
import { PiMusicNoteLight, PiTrophyThin, PiFlag } from 'react-icons/pi'
import { SiYoutubegaming } from 'react-icons/si'
import { MdOutlineWifiTethering } from 'react-icons/md'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function SideBar() {
    const getCurrentScreenWidth = () => {
        const width = window.innerWidth
        return width
    }
    const [innerWidth, setInnerWidth] = useState(getCurrentScreenWidth());
    //console.log(innerWidth)


    useEffect(() => {
        const updateDim = () => {
            setInnerWidth(getCurrentScreenWidth());
        }
        window.addEventListener('resize', updateDim);

        return (() => {
            window.removeEventListener('resize', updateDim);
        })
    }, [innerWidth])

    const { isMenuOpen } = useSelector(store => store.menu);
    //console.log(isMenuOpen)

    return !isMenuOpen || innerWidth < 1360 ? (
        <div className='h-screen fixed w-[calc(100vw-95vw)] grid justify-center '>
            <ul className='cursor-pointer'>
                {
                    shortSideBar?.map((item, index) => (
                        <Link to={item?.path} key={index}>
                            <li className='hover:bg-gray-100 py-4 rounded-xl flex flex-col items-center '>
                                {item.icon}
                                <p className='text-xs mt-2'>{item.name}</p>
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    )

        : (
            <div className='pl-6 pr-2 h-screen overflow-auto fixed w-[calc(100vw-85vw)] '>
                <ul className='cursor-pointer border-b-2 mb-2 pb-2'>
                    {
                        sidebarTop.map((item, index) => (
                            <Link to={item?.path} key={index}>
                                <li className='flex gap-x-6 items-center justify-start p-2 hover:bg-gray-200 rounded-md' >
                                    {item.icon}
                                    <p className=''>{item.name}</p>
                                </li>
                            </Link>
                        ))
                    }
                </ul>
                <ul className='cursor-pointer border-b-2 mb-2 pb-2'>
                    {
                        sidebarPerosnal?.map((item, index) => (
                            <li className='flex gap-x-6 items-center justify-start p-2 hover:bg-gray-200 rounded-md' key={index}>
                                {item.icon}
                                <p>{item.name}</p>
                            </li>
                        ))
                    }

                </ul>
                <ul className='cursor-pointer border-b-2 mb-2 pb-2'>
                    <h3 className='font-semibold mb-2'>Subscriptions</h3>
                    <li className='flex gap-x-2 items-center justify-between p-2 hover:bg-gray-200 rounded-md'>
                        <span className='h-6 w-6'>
                            <img src='https://yt3.googleusercontent.com/ytc/APkrFKZCB8Du5V9Tx6DvgFSwCnUWv8wXya2n97oRc7aF_w=s900-c-k-c0x00ffffff-no-rj' alt='veritasium' className='rounded-full' />
                        </span>
                        <p>Veritasium</p>
                        <span className='h-1 w-1 bg-blue-500 rounded-full'></span>
                    </li>
                    <li className='flex gap-x-2 items-center justify-between p-2 hover:bg-gray-200 rounded-md'>
                        <span className='h-6 w-6'>
                            <img src='https://yt3.googleusercontent.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s900-c-k-c0x00ffffff-no-rj' alt='web dev simplified' className='rounded-full' />
                        </span>
                        <p>Web Dev Simpl...</p>
                        <span className='h-1 w-1 bg-blue-500 rounded-full'></span>
                    </li>
                    <li className='flex gap-x-2 items-center justify-between p-2 hover:bg-gray-200 rounded-md'>
                        <span className='h-6 w-6'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1WJpcRTHCzdKh0QnbfAKLHmxforszaegkuQ&usqp=CAU' alt='discovery' className='rounded-full' />
                        </span>
                        <p>Discovery</p>
                        <span className='h-1 w-1 bg-blue-500 rounded-full'></span>
                    </li>
                    <li className='flex gap-x-2 items-center justify-between p-2 hover:bg-gray-200 rounded-md'>
                        <span className='h-6 w-6'>
                            <img src='https://yt3.googleusercontent.com/ytc/APkrFKZyzHImKcf3lE2jR28jtLPudm5IT5L5qwq_nUqO=s900-c-k-c0x00ffffff-no-rj' className='rounded-full' alt='mycodeschool' />
                        </span>
                        <p>My code school</p>
                        <span className='h-1 w-1 bg-blue-500 rounded-full'></span>
                    </li>
                    <li className='flex gap-x-8 items-center justify-start p-2 hover:bg-gray-200 rounded-md'>
                        <GoChevronDown size='1.2em' />
                        <p>Show more</p>
                    </li>
                </ul>

                <ul className='cursor-pointer border-b-2 mb-2 pb-2'>
                    <h3 className=' mb-2'>Explore</h3>
                    {
                        explore?.map((item, index) => (
                            <li className='flex gap-x-6 items-center justify-start p-2 hover:bg-gray-200 rounded-md' key={index}>
                                {item.icon}
                                <p>{item.name}</p>
                            </li>
                        ))
                    }
                </ul>

                <ul className='cursor-pointer border-b-2 mb-2 pb-2'>
                    {
                        setting?.map((item, index) => (
                            <li className='flex gap-x-6 items-center justify-start p-2 hover:bg-gray-200 rounded-md' key={index}>
                                {item.icon}
                                <p>{item.name}</p>
                            </li>
                        ))
                    }
                </ul>
                <p className='flex flex-wrap overflow-hidden text-sm break-words text-gray-500 font-semibold'>
                    About Press Copyright
                    Contact us Creators
                    Advertise Developers
                    Terms Privacy Policy & Safety
                    How YouTube works
                    Test new features
                </p>
                <br />
                <p className=" text-gray-400 text-sm mb-6">© 2023 Google LLC</p>
            </div >
        )
}

export default SideBar;


const shortSideBar = [
    {
        icon: home,
        name: 'Home',
        path: '/'
    },
    {
        icon: <MdOutlineWifiTethering size='1.4em' />,
        name: 'Live',
        path: '/liveVideos'
    },
    {
        icon: shorts,
        name: 'Shorts'
    },
    {
        icon: <MdOutlineSubscriptions size='1.4em' />,
        name: 'Subscriptions'
    },
    {
        icon: <MdOutlineVideoLibrary size='1.6em' />,
        name: 'Library'
    }
]
const sidebarTop = [
    {
        icon: home,
        name: 'Home',
        path: '/'
    },
    {
        icon: <MdOutlineWifiTethering size='1.4em' />,
        name: 'Live',
        path: '/liveVideos'
    },
    {
        icon: shorts,
        name: 'Shorts'
    },
    {
        icon: <MdOutlineSubscriptions size='1.2em' />,
        name: 'Subscriptions'
    }
]

const sidebarPerosnal = [
    {
        icon: <MdOutlineVideoLibrary size='1.2em' />,
        name: 'Library'
    },
    {
        icon: <VscHistory size='1.2em' />,
        name: 'History'
    },
    {
        icon: <GoVideo size='1.2em' />,
        name: 'Your videos'
    },
    {
        icon: <GoClock size='1.2em' />,
        name: 'Watch later'
    },
    {
        icon: <AiOutlineLike size='1.2em' className='font-thin' />,
        name: 'Liked videos'
    },
    {
        icon: <GoChevronDown size='1.2em' />,
        name: 'Show more'
    },
]


const explore = [
    {
        icon: <AiOutlineFire size='1.2em' />,
        name: 'Trending',
    },
    {
        icon: <PiMusicNoteLight size='1.2em' />,
        name: 'Music'
    },
    {
        icon: <SiYoutubegaming size='1.2em' />,
        name: 'Gaming'
    },
    {
        icon: <PiTrophyThin size='1.2em' />,
        name: 'Sports'
    }
]

const setting = [
    {
        icon: <MdOutlineSettings size='1.2em' />,
        name: 'Settings',
    },
    {
        icon: <PiFlag size='1.2em' />,
        name: 'Report history'
    },
    {
        icon: <AiOutlineQuestionCircle size='1.2em' />,
        name: 'Help'
    },
    {
        icon: <MdOutlineFeedback size='1.2em' />,
        name: 'Send feedback'
    }
]

