import Link from "next/link";

export default function Layout({ children }) {
	return (
		<div className='layout'>
			<header>
				<Link href='/'>
					<a>
						<h1>
							<span>This is my</span>
							<span>Blog</span>
						</h1>
					</a>
				</Link>
			</header>

			<div className='page-content'>{children}</div>

			<footer>
				<p>Copyright 2021 Just Add Marmite :)</p>
			</footer>
		</div>
	);
}
