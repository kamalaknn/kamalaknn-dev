import Link from 'next/link';

export default function Header () {
    return (
        <div className='flex direction-row justify-between border-b'>
            <div className='flex direction-row justify-start'>
                <div className='p-4 hover:text-blue-700'>
                    <Link href='/' >
                        <a>Home</a>
                    </Link>
                </div>
            </div>
            <div className='flex direction-row justify-start'>
                <div className='p-4 hover:text-blue-700 float-right'>
                    <Link href='/about' >
                        <a>About</a>
                    </Link>
                </div>
                <div className='p-4 hover:text-blue-700 float-right'>
                    <Link href='/blog' > 
                        <a>Blog</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
