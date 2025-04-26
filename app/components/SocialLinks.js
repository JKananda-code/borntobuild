import Link from 'next/link'

function SocialLinks(){
    return(
        <div className="flex gap-4">
            <Link href="https://facebook.com/yourhandle" target="_blank" rel="nonopener noreferrer">Facebook</Link>
            <Link href="https://twitter.com/yourhandle" target="_blank" rel="nonopener noreferrer">Twitter</Link>
            <Link href="https://instagram.com/yourhandle"target="_blank" rel="nonopener noreferrer">Instagram</Link>
        </div>
    )
}
export default SocialLinks