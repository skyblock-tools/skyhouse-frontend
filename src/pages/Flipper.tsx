import tw from 'twin.macro';
import * as engine from '@/api/engine';
import ItemCard from '@/components/ItemCard.tsx';
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast('Here is your toast.');

/* const Flipper = () => {
	array.map((number) => {
		return <ItemCard data={{ name: 'e', price: '1' }} />;
	});
}; */

const Flipper = () => {
	return (
		<div tw="max-w-7xl mx-auto px-7 pt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 gap-y-8">
			<ItemCard data={{ name: 'e', price: '1' }} />
		</div>
	);
};

export default Flipper;

/* 
name="flip.item_name"
rarity="flip.tier"
auction_id="flip.uuid"
price="flip.price.toLocaleString()"
resell_price="flip.resell_price.toLocaleString()"
profit="flip.profit.toLocaleString()"
house_quantity="flip.quantity.toLocaleString()"
pet_candies="flip.petCandyUsed"
ends="13475935"
image="flip.head_url"
lore="flip.display_name + '\n' + flip.lore"
*/
