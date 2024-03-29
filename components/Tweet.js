import Image from 'next/image'
import Link from 'next/link'

import timeago from 'lib/timeago'

export default function Tweet({ tweet, nolink }) {
    return (
        <div className='mb-4'>
            <div className='flex flex-shrink-0 p-4 pb-0'>
            <div className='flex-shrink-0 block group'>
                <div className='flex items-center'>
                <div>
                    {tweet.author.image && (
                    <Image
                        className='w-18 h-18 rounded-full'
                        src={tweet.author.image}
                        alt=''
                        width='40'
                        height='40'
                    />
                    )}
                </div>
                <div className='ml-3 -mt-6'>
                    <p className=''>
                    <Link href={`/${tweet.author.name}`} legacyBehavior>
                        <a>
                            <span className='text-base font-medium leading-6 color-primary hover:underline'>
                                {tweet.author.name}
                            </span>
                        </a>
                    </Link>
                    <span className='pl-1 text-sm font-light leading-5 color-dimmed'>
                    {nolink ? (
                        <span>{timeago.format(new Date(tweet.createdAt))}</span>
                        ) : (
                        <Link href={`/${tweet.author.name}/status/${tweet.id}`} legacyBehavior>
                            <a className='hover:underline'>
                            {timeago.format(new Date(tweet.createdAt))}
                            </a>
                        </Link>
                    )}
                    </span>
                    </p>
                </div>
                </div>
            </div>
            </div>
            <div className='pl-16 -mt-6'>
            <p className='flex-shrink pl-1 pr-2 text-base font-normal color-primary width-auto'>
                {tweet.content}
            </p>
            </div>
        </div>
    )
}
