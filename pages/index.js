import { createClient } from "contentful";

export const getStaticProps = async () => {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	});

	const res = await client.getEntries({
		content_type: "blog",
	});

	return {
		props: {
			response: res.items,
		},
	};
};

export default function Recipes({ response }) {
	console.log(response);
	return <div className='recipe-list'>Recipe List</div>;
}
