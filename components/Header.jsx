import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-10 backdrop-blur-md py-2 bg-green-400">
      <div>
        <Link href="/">
              WebAidPro
        </Link>
      </div>
      <div className="flex gap-2">
        <Link href="/service">Service</Link>
        <Link href="products">Products</Link>
        <Link href="blog">Blog</Link>
      </div>

    </div>
  )
}

export default Header;