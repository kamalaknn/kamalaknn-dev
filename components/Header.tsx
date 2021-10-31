import Link from 'next/link';

function Header () {
    return (
        <div className='flex direction-row justify-between border-b'>
            <div className='flex direction-row justify-start'>
                <div className='p-4 hover:text-blue-700'><Link href='/' > Home </Link></div>
            </div>
            <div className='flex direction-row justify-start'>
                <div className='p-4 hover:text-blue-700 float-right'><Link href='/about' > About </Link></div>
                <div className='p-4 hover:text-blue-700 float-right'><Link href='/blog' > Blog </Link></div>
            </div>
        </div>
    );
}

export default function HeaderTemplate (props) {
    return (
        <div className='container mx-lg'>
            <Header />
            {props.children}
        </div>
    );
}