import tw from 'twin.macro';

const ItemCard = (props: { data: any /*ItemData*/ }) => {
	return (
		<div
			css={tw`bg-white border border-zinc-300 shadow dark:(bg-zinc-800 border-zinc-900) py-5 rounded-md flex flex-col justify-between gap-4 dark:shadow-md`}>
			<div css={tw`w-full flex h-24 bg-cover bg-center -mt-5 rounded-t-md p-0`}></div>
			<div css={tw`-mt-14 top-0 w-20 h-20 flex ml-6`}>
				<img
					src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='rgb(161 161 170)'%3E%3Cpath fillRule='evenodd' d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z' clipRule='evenodd' /%3E%3C/svg%3E`}
					css={tw`w-20 h-20 rounded-xl shadow-inner object-cover shadow bg-zinc-100 dark:bg-zinc-600`}
					alt={`Image for ${props.data.name}`}
				/>
			</div>
			<div css={tw`flex gap-4  px-6`}>
				<div>
					<h1 css={tw`text-lg mb-0.5`}>{props.data.name}</h1>
					DEE
					<p css={tw`mt-3 text-sm font-light text-zinc-600 dark:text-zinc-300`}>{props.data.pet_candies}</p>
				</div>
			</div>
			<div css={tw`flex items-center justify-between  px-6`}>
				<div>
					<p css={tw`text-green-600 dark:text-green-400 font-semibold text-xl`}>{props.data.price !== 0 ? `$${props.data.price}` : 'Free'}</p>
				</div>
				<div>
					<div css={tw`flex items-center gap-2.5`}>
						EEE
						<button
							css={tw`text-sm bg-zinc-200 text-zinc-600 hover:bg-zinc-300
									dark:(bg-zinc-800 text-zinc-100 hover:bg-zinc-600) p-2 rounded-lg`}
							title="Buy"></button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
