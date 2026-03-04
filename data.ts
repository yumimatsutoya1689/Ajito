import { Flame, IceCream, Leaf, UtensilsCrossed, Wine, Beer, Coffee, GlassWater } from 'lucide-react';

export type Category = {
  id: string;
  name: string;
  icon: any;
  description?: string;
  type: 'food' | 'drink';
};

export type MenuItem = {
  id: string;
  categoryId: string;
  name: string;
  japaneseName: string;
  romaji: string;
  description: string;
  price: number;
  imageUrl: string;
  tags: string[];
};

export const categories: Category[] = [
  { id: 'alacarte', name: 'A la carte dish', icon: UtensilsCrossed, description: '一品料理', type: 'food' },
  { id: 'salad', name: 'Salad', icon: Leaf, description: 'サラダ', type: 'food' },
  { id: 'charcoal', name: 'Charcoal-broiled', icon: Flame, description: '炭火焼き', type: 'food' },
  { id: 'fried', name: 'Fried', icon: UtensilsCrossed, description: '揚げ物', type: 'food' },
  { id: 'rice', name: 'Rice & Soba', icon: UtensilsCrossed, description: 'お食事', type: 'food' },
  { id: 'dessert', name: 'Dessert', icon: IceCream, description: '甘味', type: 'food' },
  { id: 'meatsashimi', name: 'Meat sashimi', icon: UtensilsCrossed, description: '肉刺し', type: 'food' },
  { id: 'beer', name: 'Beer', icon: Beer, description: 'ビール', type: 'drink' },
  { id: 'whisky', name: 'Whisky', icon: GlassWater, description: 'ウイスキー (On the Rocks / With Water / Soda)', type: 'drink' },
  { id: 'highballs', name: 'Highballs', icon: GlassWater, description: 'ハイボール (Whisky & Soda)', type: 'drink' },
  { id: 'barley_shochu', name: 'Barley Shochu', icon: Wine, description: '麦焼酎 (On the Rocks / With Water / Soda)', type: 'drink' },
  { id: 'sweet_potato_shochu', name: 'Sweet Potato Shochu', icon: Wine, description: '芋焼酎 (On the Rocks / With Water / Soda)', type: 'drink' },
  { id: 'korui_shochu', name: 'Korui Shochu', icon: Wine, description: '甲類焼酎 (Shochu-based)', type: 'drink' },
  { id: 'sours', name: 'Sours', icon: Wine, description: 'サワー', type: 'drink' },
  { id: 'cocktails', name: 'Cocktails', icon: Wine, description: 'カクテル', type: 'drink' },
  { id: 'wine', name: 'Wine', icon: Wine, description: 'ワイン', type: 'drink' },
  { id: 'soft_drinks', name: 'Soft Drinks', icon: Coffee, description: 'ソフトドリンク', type: 'drink' },
];

export const menuItems: MenuItem[] = [
  // 一品料理 (A la carte dish)
  { id: 'a1', categoryId: 'alacarte', japaneseName: '燻製塩辛', romaji: 'Kunsei Shiokara', name: 'Smoked Squid Shiokara', price: 550, description: '', imageUrl: '', tags: [] },
  { id: 'a2', categoryId: 'alacarte', japaneseName: '中札内枝豆', romaji: 'Nakasatsunai Edamame', name: 'Nakasatsunai Edamame', price: 550, description: '', imageUrl: '', tags: [] },
  { id: 'a3', categoryId: 'alacarte', japaneseName: 'たくあんラー油ねぎまみれ', romaji: 'Takuan Rayu Negimire', name: 'Takuwan with Chili Oil & Green Onion', price: 680, description: '', imageUrl: '', tags: [] },
  { id: 'a4', categoryId: 'alacarte', japaneseName: 'たこわさび', romaji: 'Tako Wasabi', name: 'Octopus with Wasabi', price: 550, description: '', imageUrl: '', tags: [] },
  { id: 'a5', categoryId: 'alacarte', japaneseName: '日替わり漬物盛り合わせ', romaji: 'Higawari Tsukemono Moriawase', name: 'Assorted Pickles (Daily Selection)', price: 880, description: '', imageUrl: '', tags: [] },
  { id: 'a6', categoryId: 'alacarte', japaneseName: '梅水晶', romaji: 'Ume Suisho', name: 'Shark Cartilage with Plum Sauce (Ume Suisho)', price: 550, description: '', imageUrl: '', tags: [] },
  { id: 'a7', categoryId: 'alacarte', japaneseName: 'おつまみメンマ', romaji: 'Otsumami Menma', name: 'Seasoned Bamboo Shoots', price: 550, description: '', imageUrl: '', tags: [] },
  { id: 'a8', categoryId: 'alacarte', japaneseName: '新生姜', romaji: 'Shin Shoga', name: 'Fresh Pickled Ginger', price: 550, description: '', imageUrl: '', tags: [] },
  { id: 'a9', categoryId: 'alacarte', japaneseName: '冷やしトマト', romaji: 'Hiyashi Tomato', name: 'Chilled Tomato', price: 600, description: '', imageUrl: '', tags: [] },
  { id: 'a10', categoryId: 'alacarte', japaneseName: 'いぶりがっこクリームチーズ', romaji: 'Iburigakko Cream Cheese', name: 'Smoked Daikon Pickle with Cream Cheese', price: 680, description: '', imageUrl: '', tags: [] },
  { id: 'a11', categoryId: 'alacarte', japaneseName: '餃子', romaji: 'Gyoza', name: 'Gyoza (Japanese Dumplings)', price: 720, description: '', imageUrl: '', tags: [] },
  { id: 'a12', categoryId: 'alacarte', japaneseName: 'エビマヨ', romaji: 'Ebi Mayo', name: 'Shrimp with Mayonnaise Sauce', price: 1580, description: '', imageUrl: '', tags: [] },
  { id: 'a13', categoryId: 'alacarte', japaneseName: 'エビマヨハーフサイズ', romaji: 'Ebi Mayo Half', name: 'Shrimp with Mayonnaise Sauce (Half)', price: 1080, description: '', imageUrl: '', tags: [] },
  { id: 'a14', categoryId: 'alacarte', japaneseName: 'エビチリ', romaji: 'Ebi Chili', name: 'Shrimp in Chili Sauce', price: 1680, description: '', imageUrl: '', tags: [] },
  { id: 'a15', categoryId: 'alacarte', japaneseName: 'エビチリハーフ', romaji: 'Ebi Chili Half', name: 'Shrimp in Chili Sauce (Half)', price: 1080, description: '', imageUrl: '', tags: [] },
  { id: 'a16', categoryId: 'alacarte', japaneseName: 'アヒージョ', romaji: 'Ahijo', name: 'Ajillo (Garlic Oil Seafood/Vegetables)', price: 1080, description: '', imageUrl: '', tags: [] },
  { id: 'a17', categoryId: 'alacarte', japaneseName: '豚の角煮', romaji: 'Buta no Kakuni', name: 'Braised Pork Belly', price: 980, description: '', imageUrl: '', tags: [] },
  { id: 'a18', categoryId: 'alacarte', japaneseName: 'ホルモン鉄板焼き', romaji: 'Horumon Teppanyaki', name: 'Grilled Pork Offal on Hot Plate', price: 880, description: '', imageUrl: '', tags: [] },

  // サラダ (Salad)
  { id: 's1', categoryId: 'salad', japaneseName: '味扉ラーメンサラダ', romaji: 'Ajito Ramen Salad', name: 'Ajito Ramen Noodle Salad', price: 1180, description: '', imageUrl: '', tags: [] },
  { id: 's2', categoryId: 'salad', japaneseName: 'トマトのカプレーゼ', romaji: 'Tomato Caprese', name: 'Tomato Caprese', price: 980, description: '', imageUrl: '', tags: [] },
  { id: 's3', categoryId: 'salad', japaneseName: '温玉シーザーサラダ', romaji: 'Ontama Caesar Salad', name: 'Caesar Salad with Soft-Boiled Egg', price: 980, description: '', imageUrl: '', tags: [] },
  { id: 's4', categoryId: 'salad', japaneseName: '自家製タルタルの揚げポテトサラダ', romaji: 'Jikasei Tartar no Age Potato Salad', name: 'Fried Potato Salad with Homemade Tartar Sauce', price: 680, description: '', imageUrl: '', tags: [] },
  { id: 's5', categoryId: 'salad', japaneseName: '塩だれキャベツ', romaji: 'Shio Dare Cabbage', name: 'Cabbage with Salt Sauce', price: 550, description: '', imageUrl: '', tags: [] },

  // 炭火焼き (Charcoal-broiled)
  { id: 'c1', categoryId: 'charcoal', japaneseName: 'おまかせ串の盛り合わせ(10本)', romaji: 'Omakase Kushi Moriawase', name: 'Chef’s Selection Skewers (10 pcs)', price: 1980, description: '', imageUrl: '', tags: [] },
  { id: 'c2', categoryId: 'charcoal', japaneseName: '国産厳選白レバー', romaji: 'Kokusan Gensen Shiro Liver', name: 'Premium Domestic White Chicken Liver', price: 200, description: '', imageUrl: '', tags: [] },
  { id: 'c3', categoryId: 'charcoal', japaneseName: '国産鳥精肉', romaji: 'Kokusan Tori Seiniku', name: 'Domestic Chicken Thigh Skewer', price: 200, description: '', imageUrl: '', tags: [] },
  { id: 'c4', categoryId: 'charcoal', japaneseName: 'ハツ', romaji: 'Hatsu', name: 'Chicken Heart', price: 200, description: '', imageUrl: '', tags: [] },
  { id: 'c5', categoryId: 'charcoal', japaneseName: 'ささみ', romaji: 'Sasami', name: 'Chicken Tenderloin', price: 200, description: 'Toppings (+50yen each): Plum & Shiso, Grated Daikon with Ponzu, Wasabi, Cheese, Raw Egg, Spicy Cod Roe', imageUrl: '', tags: [] },
  { id: 'c6', categoryId: 'charcoal', japaneseName: 'つくね', romaji: 'Tsukune', name: 'Chicken Meatball Skewer', price: 250, description: 'Toppings (+50yen each): Plum & Shiso, Grated Daikon with Ponzu, Natto, Cheese, Raw Egg', imageUrl: '', tags: [] },
  { id: 'c7', categoryId: 'charcoal', japaneseName: '鶏皮', romaji: 'Torikawa', name: 'Chicken Skin', price: 250, description: '', imageUrl: '', tags: [] },
  { id: 'c8', categoryId: 'charcoal', japaneseName: 'ポンポチ', romaji: 'Ponpochi', name: 'Chicken Tail (Fat)', price: 200, description: '', imageUrl: '', tags: [] },
  { id: 'c9', categoryId: 'charcoal', japaneseName: '国産豚精肉', romaji: 'Kokusan Buta Seiniku', name: 'Domestic Pork Skewer', price: 250, description: '', imageUrl: '', tags: [] },
  { id: 'c10', categoryId: 'charcoal', japaneseName: '新生姜豚巻き', romaji: 'Shin Shoga Butamaki', name: 'Pork-Wrapped Fresh Ginger', price: 200, description: '', imageUrl: '', tags: [] },
  { id: 'c11', categoryId: 'charcoal', japaneseName: 'ラム', romaji: 'Lamb', name: 'Lamb Skewer', price: 350, description: '', imageUrl: '', tags: [] },
  { id: 'c12', categoryId: 'charcoal', japaneseName: 'ピーマンの肉詰め', romaji: 'Piman no Nikuzume', name: 'Stuffed Green Pepper with Meat', price: 300, description: '', imageUrl: '', tags: [] },
  { id: 'c13', categoryId: 'charcoal', japaneseName: 'しいたけの肉詰め', romaji: 'Shiitake no Nikuzume', name: 'Stuffed Shiitake Mushroom with Meat', price: 300, description: '', imageUrl: '', tags: [] },
  { id: 'c14', categoryId: 'charcoal', japaneseName: 'ねぎ', romaji: 'Negi', name: 'Grilled Green Onion', price: 200, description: '', imageUrl: '', tags: [] },
  { id: 'c15', categoryId: 'charcoal', japaneseName: 'しいたけ', romaji: 'Shiitake', name: 'Grilled Shiitake Mushroom', price: 200, description: '', imageUrl: '', tags: [] },
  { id: 'c16', categoryId: 'charcoal', japaneseName: 'ピーマン', romaji: 'Piman', name: 'Grilled Green Pepper', price: 200, description: '', imageUrl: '', tags: [] },

  // 揚げ物 (Fried)
  { id: 'f1', categoryId: 'fried', japaneseName: '特製ザンギ', romaji: 'Tokusei Zangi', name: 'Special Zangi (Hokkaido Fried Chicken)', price: 780, description: '', imageUrl: '', tags: [] },
  { id: 'f2', categoryId: 'fried', japaneseName: '大根のから揚げ', romaji: 'Daikon no Karaage', name: 'Deep-Fried Daikon Radish', price: 600, description: '', imageUrl: '', tags: [] },
  { id: 'f3', categoryId: 'fried', japaneseName: 'レバーザンギ', romaji: 'Liver Zangi', name: 'Fried Chicken Liver (Zangi Style)', price: 680, description: '', imageUrl: '', tags: [] },
  { id: 'f4', categoryId: 'fried', japaneseName: 'タコのから揚げ', romaji: 'Tako no Karaage', name: 'Fried Octopus', price: 780, description: '', imageUrl: '', tags: [] },
  { id: 'f5', categoryId: 'fried', japaneseName: 'チーズ春巻き', romaji: 'Cheese Harumaki', name: 'Cheese Spring Rolls', price: 500, description: '', imageUrl: '', tags: [] },
  { id: 'f6', categoryId: 'fried', japaneseName: 'フライドポテト', romaji: 'Fried Potato', name: 'French Fries', price: 500, description: '', imageUrl: '', tags: [] },
  { id: 'f7', categoryId: 'fried', japaneseName: 'ガーリックシュリンプ', romaji: 'Garlic Shrimp', name: 'Garlic Shrimp', price: 800, description: '', imageUrl: '', tags: [] },
  { id: 'f8', categoryId: 'fried', japaneseName: '氷下魚唐揚げ', romaji: 'Komai Karaage', name: 'Fried Hokkai Fish (Icefish)', price: 720, description: '', imageUrl: '', tags: [] },
  { id: 'f9', categoryId: 'fried', japaneseName: '軟骨唐揚げ', romaji: 'Nankotsu Karaage', name: 'Fried Chicken Cartilage', price: 720, description: '', imageUrl: '', tags: [] },
  { id: 'f10', categoryId: 'fried', japaneseName: '鶏皮餃子', romaji: 'Torikawa Gyoza', name: 'Chicken Skin Gyoza', price: 780, description: '', imageUrl: '', tags: [] },
  { id: 'f11', categoryId: 'fried', japaneseName: 'オニオンリング', romaji: 'Onion Ring', name: 'Onion Rings', price: 600, description: '', imageUrl: '', tags: [] },

  // お食事 (Rice & Soba)
  { id: 'r1', categoryId: 'rice', japaneseName: 'おにぎり', romaji: 'Onigiri', name: 'Rice Ball (Onigiri)', price: 350, description: 'Choose one: Bonito Flakes / Spicy Cod Roe / Kelp', imageUrl: '', tags: [] },
  { id: 'r2', categoryId: 'rice', japaneseName: '焼きおにぎり', romaji: 'Yaki Onigiri', name: 'Grilled Rice Ball', price: 350, description: '', imageUrl: '', tags: [] },
  { id: 'r3', categoryId: 'rice', japaneseName: 'ゆめぴりか（お米）', romaji: 'Yumepirika', name: 'Yumepirika Rice (Hokkaido Premium Rice)', price: 300, description: '', imageUrl: '', tags: [] },

  // 甘味 (Dessert)
  { id: 'd1', categoryId: 'dessert', japaneseName: 'バニラアイス', romaji: 'Vanilla Ice', name: 'Vanilla Ice Cream', price: 420, description: '', imageUrl: '', tags: [] },
  { id: 'd2', categoryId: 'dessert', japaneseName: 'ゆずシャーベット', romaji: 'Yuzu Sherbet', name: 'Yuzu Sherbet', price: 420, description: '', imageUrl: '', tags: [] },

  // 肉刺し (Meat sashimi)
  { id: 'm1', categoryId: 'meatsashimi', japaneseName: 'マトンユッケ', romaji: 'Mutton Yukhoe', name: 'Mutton Yukhoe (Seasoned Raw Mutton)', price: 1080, description: '', imageUrl: '', tags: [] },
  { id: 'm2', categoryId: 'meatsashimi', japaneseName: 'ラム刺し', romaji: 'Lamb Sashimi', name: 'Lamb Sashimi', price: 1580, description: '', imageUrl: '', tags: [] },
  { id: 'm3', categoryId: 'meatsashimi', japaneseName: 'とりわさ', romaji: 'Toriwasa', name: 'Chicken with Wasabi', price: 680, description: '', imageUrl: '', tags: [] },
  { id: 'm4', categoryId: 'meatsashimi', japaneseName: '塩だれささみ', romaji: 'Shio Dare Sasami', name: 'Chicken Tenderloin with Salt Sauce', price: 680, description: '', imageUrl: '', tags: [] },
  { id: 'm5', categoryId: 'meatsashimi', japaneseName: 'とりしそわさび', romaji: 'Tori Shiso Wasabi', name: 'Chicken with Shiso & Wasabi', price: 680, description: '', imageUrl: '', tags: [] },
  { id: 'm6', categoryId: 'meatsashimi', japaneseName: 'とりぽん', romaji: 'Toripon', name: 'Chicken with Ponzu Sauce', price: 680, description: '', imageUrl: '', tags: [] },
  { id: 'm7', categoryId: 'meatsashimi', japaneseName: '小樽地鶏たたき', romaji: 'Otaru Jidori Tataki', name: 'Otaru Local Chicken Tataki', price: 680, description: '', imageUrl: '', tags: [] },
  { id: 'm8', categoryId: 'meatsashimi', japaneseName: '馬肉ユッケ', romaji: 'Baniku Yukhoe', name: 'Horse Meat Yukhoe', price: 680, description: '', imageUrl: '', tags: [] },

  // BEER
  { id: 'b1', categoryId: 'beer', japaneseName: 'サッポロクラシック', romaji: 'Sapporo Classic', name: 'Sapporo Classic', price: 590, description: '', imageUrl: '', tags: [] },
  { id: 'b2', categoryId: 'beer', japaneseName: 'ノンアルコールビール', romaji: 'Non-Alcohol Beer', name: 'Non-Alcohol Beer', price: 550, description: '', imageUrl: '', tags: [] },

  // WHISKY
  { id: 'w1', categoryId: 'whisky', japaneseName: '角ウイスキー', romaji: 'Kaku Whisky', name: 'Kaku Whisky', price: 500, description: '', imageUrl: '', tags: [] },
  { id: 'w2', categoryId: 'whisky', japaneseName: '白州シングルモルト', romaji: 'Hakushu Single Malt', name: 'Hakushu Single Malt', price: 1500, description: '', imageUrl: '', tags: [] },
  { id: 'w3', categoryId: 'whisky', japaneseName: '山崎シングルモルト', romaji: 'Yamazaki Single Malt', name: 'Yamazaki Single Malt', price: 1500, description: '', imageUrl: '', tags: [] },

  // HIGHBALLS
  { id: 'h1', categoryId: 'highballs', japaneseName: 'オリジナルハイボール', romaji: 'Original Highball', name: 'Original Highball', price: 500, description: '', imageUrl: '', tags: [] },
  { id: 'h2', categoryId: 'highballs', japaneseName: 'ジンジャーハイボール', romaji: 'Ginger Highball', name: 'Ginger Highball', price: 530, description: '', imageUrl: '', tags: [] },
  { id: 'h3', categoryId: 'highballs', japaneseName: 'コークハイボール', romaji: 'Coke Highball', name: 'Coke Highball', price: 530, description: '', imageUrl: '', tags: [] },

  // BARLEY SHOCHU
  { id: 'bs1', categoryId: 'barley_shochu', japaneseName: '二階堂', romaji: 'Nikaido', name: 'Nikaido (Barley Shochu)', price: 600, description: '', imageUrl: '', tags: [] },
  { id: 'bs2', categoryId: 'barley_shochu', japaneseName: 'いいちこ', romaji: 'iichiko', name: 'iichiko (Barley Shochu)', price: 600, description: '', imageUrl: '', tags: [] },

  // SWEET POTATO SHOCHU
  { id: 'sps1', categoryId: 'sweet_potato_shochu', japaneseName: '黒霧島', romaji: 'Kuro Kirishima', name: 'Kuro Kirishima', price: 600, description: '', imageUrl: '', tags: [] },
  { id: 'sps2', categoryId: 'sweet_potato_shochu', japaneseName: '伊佐美', romaji: 'Isami', name: 'Isami', price: 600, description: '', imageUrl: '', tags: [] },
  { id: 'sps3', categoryId: 'sweet_potato_shochu', japaneseName: 'だいやめ', romaji: 'Daiyame', name: 'Daiyame', price: 600, description: '', imageUrl: '', tags: [] },
  { id: 'sps4', categoryId: 'sweet_potato_shochu', japaneseName: '三岳', romaji: 'Mitake', name: 'Mitake', price: 700, description: '', imageUrl: '', tags: [] },
  { id: 'sps5', categoryId: 'sweet_potato_shochu', japaneseName: '魔王', romaji: 'Maoh', name: 'Maoh', price: 1200, description: '', imageUrl: '', tags: [] },
  { id: 'sps6', categoryId: 'sweet_potato_shochu', japaneseName: '村尾', romaji: 'Murao', name: 'Murao (Kame-Tsubo Shochu / Pot-aged)', price: 1500, description: '', imageUrl: '', tags: [] },

  // KORUI SHOCHU
  { id: 'ks1', categoryId: 'korui_shochu', japaneseName: '焼酎水割り', romaji: 'Shochu Mizuwari', name: 'Shochu + Water', price: 450, description: '', imageUrl: '', tags: [] },
  { id: 'ks2', categoryId: 'korui_shochu', japaneseName: '焼酎ソーダ割り', romaji: 'Shochu Soda', name: 'Shochu + Soda', price: 450, description: '', imageUrl: '', tags: [] },
  { id: 'ks3', categoryId: 'korui_shochu', japaneseName: 'ウーロンハイ', romaji: 'Oolong High', name: 'Oolong Tea High (Shochu + Oolong Tea)', price: 480, description: '', imageUrl: '', tags: [] },
  { id: 'ks4', categoryId: 'korui_shochu', japaneseName: '緑茶ハイ', romaji: 'Ryokucha High', name: 'Green Tea High (Shochu + Green Tea)', price: 480, description: '', imageUrl: '', tags: [] },
  { id: 'ks5', categoryId: 'korui_shochu', japaneseName: 'ジャスミンハイ', romaji: 'Jasmine High', name: 'Jasmine Tea High (Shochu + Jasmine Tea)', price: 480, description: '', imageUrl: '', tags: [] },

  // SOURS
  { id: 'so1', categoryId: 'sours', japaneseName: 'レモンサワー', romaji: 'Lemon Sour', name: 'Lemon Sour', price: 500, description: '', imageUrl: '', tags: [] },
  { id: 'so2', categoryId: 'sours', japaneseName: 'ぶどうサワー', romaji: 'Grape Sour', name: 'Grape Sour', price: 500, description: '', imageUrl: '', tags: [] },
  { id: 'so3', categoryId: 'sours', japaneseName: 'ライムサワー', romaji: 'Lime Sour', name: 'Lime Sour', price: 500, description: '', imageUrl: '', tags: [] },
  { id: 'so4', categoryId: 'sours', japaneseName: '梅サワー', romaji: 'Salt Plum Sour', name: 'Salt Plum Sour', price: 500, description: '', imageUrl: '', tags: [] },
  { id: 'so5', categoryId: 'sours', japaneseName: 'パインサワー', romaji: 'Pineapple Sour', name: 'Pineapple Sour', price: 500, description: '', imageUrl: '', tags: [] },
  { id: 'so6', categoryId: 'sours', japaneseName: 'みかんサワー', romaji: 'Mikan Sour', name: 'Mikan (Mandarin Orange) Sour', price: 500, description: '', imageUrl: '', tags: [] },
  { id: 'so7', categoryId: 'sours', japaneseName: 'キウイサワー', romaji: 'Kiwi Sour', name: 'Kiwi Sour', price: 500, description: '', imageUrl: '', tags: [] },
  { id: 'so8', categoryId: 'sours', japaneseName: 'ピーチサワー', romaji: 'Peach Sour', name: 'Peach Sour', price: 500, description: '', imageUrl: '', tags: [] },
  { id: 'so9', categoryId: 'sours', japaneseName: 'アロエサワー', romaji: 'Aloe Sour', name: 'Aloe Sour', price: 500, description: '', imageUrl: '', tags: [] },
  { id: 'so10', categoryId: 'sours', japaneseName: 'アセロラサワー', romaji: 'Acerola Sour', name: 'Acerola Sour', price: 500, description: '', imageUrl: '', tags: [] },
  { id: 'so11', categoryId: 'sours', japaneseName: 'マンゴーサワー', romaji: 'Mango Sour', name: 'Mango Sour', price: 500, description: '', imageUrl: '', tags: [] },
  { id: 'so12', categoryId: 'sours', japaneseName: 'グレープフルーツサワー', romaji: 'Grapefruit Sour', name: 'Grapefruit Sour', price: 500, description: '', imageUrl: '', tags: [] },
  { id: 'so13', categoryId: 'sours', japaneseName: 'シークワーサーサワー', romaji: 'Shikuwasa Sour', name: 'Shikuwasa Sour', price: 500, description: '', imageUrl: '', tags: [] },
  { id: 'so14', categoryId: 'sours', japaneseName: 'カルピスサワー', romaji: 'Calpis Sour', name: 'Calpis Sour', price: 500, description: '', imageUrl: '', tags: [] },

  // COCKTAILS
  { id: 'co1', categoryId: 'cocktails', japaneseName: 'カシスオレンジ', romaji: 'Cassis Orange', name: 'Cassis Orange', price: 530, description: '', imageUrl: '', tags: [] },
  { id: 'co2', categoryId: 'cocktails', japaneseName: 'クーニャン', romaji: 'Koo Nyang', name: 'Koo Nyang', price: 530, description: '', imageUrl: '', tags: [] },
  { id: 'co3', categoryId: 'cocktails', japaneseName: 'マリブコーク', romaji: 'Malibu Coke', name: 'Malibu Coke', price: 530, description: '', imageUrl: '', tags: [] },
  { id: 'co4', categoryId: 'cocktails', japaneseName: 'カルーアミルク', romaji: 'Kahlua Milk', name: 'Kahlua Milk', price: 530, description: '', imageUrl: '', tags: [] },
  { id: 'co5', categoryId: 'cocktails', japaneseName: 'ファジーネーブル', romaji: 'Fuzzy Navel', name: 'Fuzzy Navel', price: 530, description: '', imageUrl: '', tags: [] },
  { id: 'co6', categoryId: 'cocktails', japaneseName: 'キティ', romaji: 'Kitty', name: 'Kitty (Red Wine + Ginger Ale)', price: 530, description: '', imageUrl: '', tags: [] },
  { id: 'co7', categoryId: 'cocktails', japaneseName: 'オペレーター', romaji: 'Operator', name: 'Operator (White Wine + Ginger Ale)', price: 530, description: '', imageUrl: '', tags: [] },
  { id: 'co8', categoryId: 'cocktails', japaneseName: 'カシスアップル', romaji: 'Cassis Apple', name: 'Cassis Apple', price: 530, description: '', imageUrl: '', tags: [] },
  { id: 'co9', categoryId: 'cocktails', japaneseName: 'カシスグレープフルーツ', romaji: 'Cassis Grapefruit', name: 'Cassis Grapefruit', price: 530, description: '', imageUrl: '', tags: [] },
  { id: 'co10', categoryId: 'cocktails', japaneseName: 'ピーチアップル', romaji: 'Peach Apple', name: 'Peach Apple', price: 530, description: '', imageUrl: '', tags: [] },
  { id: 'co11', categoryId: 'cocktails', japaneseName: 'ピーチグレープフルーツ', romaji: 'Peach Grapefruit', name: 'Peach Grapefruit', price: 530, description: '', imageUrl: '', tags: [] },
  { id: 'co12', categoryId: 'cocktails', japaneseName: 'カンパリアップル', romaji: 'Campari Apple', name: 'Campari Apple', price: 530, description: '', imageUrl: '', tags: [] },
  { id: 'co13', categoryId: 'cocktails', japaneseName: 'カンパリオレンジ', romaji: 'Campari Orange', name: 'Campari Orange', price: 530, description: '', imageUrl: '', tags: [] },
  { id: 'co14', categoryId: 'cocktails', japaneseName: 'カンパリグレープフルーツ', romaji: 'Campari Grapefruit', name: 'Campari Grapefruit', price: 530, description: '', imageUrl: '', tags: [] },

  // WINE
  { id: 'wi1', categoryId: 'wine', japaneseName: 'ハウスワイン (赤/白)', romaji: 'House Wine (Red/White)', name: 'House Wine (Red / White)', price: 550, description: '', imageUrl: '', tags: [] },
  { id: 'wi2', categoryId: 'wine', japaneseName: 'プラムワイン', romaji: 'Plum Wine', name: 'Palm Wine', price: 550, description: '', imageUrl: '', tags: [] },

  // SOFT DRINKS
  { id: 'sd1', categoryId: 'soft_drinks', japaneseName: 'ウーロン茶', romaji: 'Oolong Tea', name: 'Oolong Tea', price: 350, description: '', imageUrl: '', tags: [] },
  { id: 'sd2', categoryId: 'soft_drinks', japaneseName: 'アップルジュース', romaji: 'Apple Juice', name: 'Apple Juice', price: 350, description: '', imageUrl: '', tags: [] },
  { id: 'sd3', categoryId: 'soft_drinks', japaneseName: '緑茶', romaji: 'Green Tea', name: 'Green Tea', price: 350, description: '', imageUrl: '', tags: [] },
  { id: 'sd4', categoryId: 'soft_drinks', japaneseName: 'オレンジジュース', romaji: 'Orange Juice', name: 'Orange Juice', price: 350, description: '', imageUrl: '', tags: [] },
  { id: 'sd5', categoryId: 'soft_drinks', japaneseName: 'ジャスミン茶', romaji: 'Jasmine Tea', name: 'Jasmine Tea', price: 350, description: '', imageUrl: '', tags: [] },
  { id: 'sd6', categoryId: 'soft_drinks', japaneseName: 'カルピスソーダ', romaji: 'Calpis Soda', name: 'Calpis Soda', price: 350, description: '', imageUrl: '', tags: [] },
  { id: 'sd7', categoryId: 'soft_drinks', japaneseName: 'コーラ', romaji: 'Coke', name: 'Coke', price: 350, description: '', imageUrl: '', tags: [] },
  { id: 'sd8', categoryId: 'soft_drinks', japaneseName: 'ジンジャーエール', romaji: 'Ginger Ale', name: 'Ginger Ale', price: 350, description: '', imageUrl: '', tags: [] },
  { id: 'sd9', categoryId: 'soft_drinks', japaneseName: 'カルピス', romaji: 'Calpis', name: 'Calpis (Japanese Yogurt Drink)', price: 350, description: '', imageUrl: '', tags: [] },
  { id: 'sd10', categoryId: 'soft_drinks', japaneseName: 'グレープフルーツジュース', romaji: 'Grapefruit Juice', name: 'Grapefruit Juice', price: 350, description: '', imageUrl: '', tags: [] },
];
