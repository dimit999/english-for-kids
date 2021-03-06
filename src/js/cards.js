const groupCards = ['Action (set A)', 'Action (set B)', 'Animal (set A)', 'Animal (set B)', 'Clothes', 'Emotions', 'Fairytales', 'Food'];

const cardsData = [
	[
		{
			word: 'cry',
			translation: 'плакать',
			image: './assets/images/cards/cry.jpg',
			audioSrc: './assets/audio/cry.mp3',
		},
		{
			word: 'dance',
			translation: 'танцевать',
			image: './assets/images/cards/dance.jpg',
			audioSrc: './assets/audio/dance.mp3',
		},
		{
			word: 'dive',
			translation: 'нырять',
			image: './assets/images/cards/dive.jpg',
			audioSrc: './assets/audio/dive.mp3',
		},
		{
			word: 'draw',
			translation: 'рисовать',
			image: './assets/images/cards/draw.jpg',
			audioSrc: './assets/audio/draw.mp3',
		},
		{
			word: 'fish',
			translation: 'ловить рыбу',
			image: './assets/images/cards/fish.jpg',
			audioSrc: './assets/audio/fish.mp3',
		},
		{
			word: 'fly',
			translation: 'летать',
			image: './assets/images/cards/fly.jpg',
			audioSrc: './assets/audio/fly.mp3',
		},
		{
			word: 'hug',
			translation: 'обнимать',
			image: './assets/images/cards/hug.jpg',
			audioSrc: './assets/audio/hug.mp3',
		},
		{
			word: 'jump',
			translation: 'прыгать',
			image: './assets/images/cards/jump.jpg',
			audioSrc: './assets/audio/jump.mp3',
		},
	],
	[
		{
			word: 'open',
			translation: 'открывать',
			image: './assets/images/cards/open.jpg',
			audioSrc: './assets/audio/open.mp3',
		},
		{
			word: 'play',
			translation: 'играть',
			image: './assets/images/cards/play.jpg',
			audioSrc: './assets/audio/play.mp3',
		},
		{
			word: 'point',
			translation: 'указывать',
			image: './assets/images/cards/point.jpg',
			audioSrc: './assets/audio/point.mp3',
		},
		{
			word: 'ride',
			translation: 'ездить',
			image: './assets/images/cards/ride.jpg',
			audioSrc: './assets/audio/ride.mp3',
		},
		{
			word: 'run',
			translation: 'бегать',
			image: './assets/images/cards/run.jpg',
			audioSrc: './assets/audio/run.mp3',
		},
		{
			word: 'sing',
			translation: 'петь',
			image: './assets/images/cards/sing.jpg',
			audioSrc: './assets/audio/sing.mp3',
		},
		{
			word: 'skip',
			translation: 'пропускать, прыгать',
			image: './assets/images/cards/skip.jpg',
			audioSrc: './assets/audio/skip.mp3',
		},
		{
			word: 'swim',
			translation: 'плавать',
			image: './assets/images/cards/swim.jpg',
			audioSrc: './assets/audio/swim.mp3',
		},
	],
	[
		{
			word: 'cat',
			translation: 'кот',
			image: './assets/images/cards/cat.jpg',
			audioSrc: './assets/audio/cat.mp3',
		},
		{
			word: 'chick',
			translation: 'цыплёнок',
			image: './assets/images/cards/chick.jpg',
			audioSrc: './assets/audio/chick.mp3',
		},
		{
			word: 'chicken',
			translation: 'курица',
			image: './assets/images/cards/chicken.jpg',
			audioSrc: './assets/audio/chicken.mp3',
		},
		{
			word: 'dog',
			translation: 'собака',
			image: './assets/images/cards/dog.jpg',
			audioSrc: './assets/audio/dog.mp3',
		},
		{
			word: 'horse',
			translation: 'лошадь',
			image: './assets/images/cards/horse.jpg',
			audioSrc: './assets/audio/horse.mp3',
		},
		{
			word: 'pig',
			translation: 'свинья',
			image: './assets/images/cards/pig.jpg',
			audioSrc: './assets/audio/pig.mp3',
		},
		{
			word: 'rabbit',
			translation: 'кролик',
			image: './assets/images/cards/rabbit.jpg',
			audioSrc: './assets/audio/rabbit.mp3',
		},
		{
			word: 'sheep',
			translation: 'овца',
			image: './assets/images/cards/sheep.jpg',
			audioSrc: './assets/audio/sheep.mp3',
		},
	],
	[
		{
			word: 'bird',
			translation: 'птица',
			image: './assets/images/cards/bird.jpg',
			audioSrc: './assets/audio/bird.mp3',
		},
		{
			word: 'fish',
			translation: 'рыба',
			image: './assets/images/cards/fish1.jpg',
			audioSrc: './assets/audio/fish.mp3',
		},
		{
			word: 'frog',
			translation: 'жаба',
			image: './assets/images/cards/frog.jpg',
			audioSrc: './assets/audio/frog.mp3',
		},
		{
			word: 'giraffe',
			translation: 'жирафа',
			image: './assets/images/cards/giraffe.jpg',
			audioSrc: './assets/audio/giraffe.mp3',
		},
		{
			word: 'lion',
			translation: 'лев',
			image: './assets/images/cards/lion.jpg',
			audioSrc: './assets/audio/lion.mp3',
		},
		{
			word: 'mouse',
			translation: 'мышь',
			image: './assets/images/cards/mouse.jpg',
			audioSrc: './assets/audio/mouse.mp3',
		},
		{
			word: 'turtle',
			translation: 'черепаха',
			image: './assets/images/cards/turtle.jpg',
			audioSrc: './assets/audio/turtle.mp3',
		},
		{
			word: 'dolphin',
			translation: 'дельфин',
			image: './assets/images/cards/dolphin.jpg',
			audioSrc: './assets/audio/dolphin.mp3',
		},
	],
	[
		{
			word: 'skirt',
			translation: 'юбка',
			image: './assets/images/cards/skirt.jpg',
			audioSrc: './assets/audio/skirt.mp3',
		},
		{
			word: 'pants',
			translation: 'брюки',
			image: './assets/images/cards/pants.jpg',
			audioSrc: './assets/audio/pants.mp3',
		},
		{
			word: 'blouse',
			translation: 'блузка',
			image: './assets/images/cards/blouse.jpg',
			audioSrc: './assets/audio/blouse.mp3',
		},
		{
			word: 'dress',
			translation: 'платье',
			image: './assets/images/cards/dress.jpg',
			audioSrc: './assets/audio/dress.mp3',
		},
		{
			word: 'boot',
			translation: 'ботинок',
			image: './assets/images/cards/boot.jpg',
			audioSrc: './assets/audio/boot.mp3',
		},
		{
			word: 'shirt',
			translation: 'рубашка',
			image: './assets/images/cards/shirt.jpg',
			audioSrc: './assets/audio/shirt.mp3',
		},
		{
			word: 'coat',
			translation: 'пальто',
			image: './assets/images/cards/coat.jpg',
			audioSrc: './assets/audio/coat.mp3',
		},
		{
			word: 'shoe',
			translation: 'туфли',
			image: './assets/images/cards/shoe.jpg',
			audioSrc: './assets/audio/shoe.mp3',
		},
	],
	[
		{
			word: 'sad',
			translation: 'грустный',
			image: './assets/images/cards/sad.jpg',
			audioSrc: './assets/audio/sad.mp3',
		},
		{
			word: 'angry',
			translation: 'сердитый',
			image: './assets/images/cards/angry.jpg',
			audioSrc: './assets/audio/angry.mp3',
		},
		{
			word: 'happy',
			translation: 'счастливый',
			image: './assets/images/cards/happy.jpg',
			audioSrc: './assets/audio/happy.mp3',
		},
		{
			word: 'tired',
			translation: 'уставший',
			image: './assets/images/cards/tired.jpg',
			audioSrc: './assets/audio/tired.mp3',
		},
		{
			word: 'surprised',
			translation: 'удивлённый',
			image: './assets/images/cards/surprised.jpg',
			audioSrc: './assets/audio/surprised.mp3',
		},
		{
			word: 'scared',
			translation: 'испуганный',
			image: './assets/images/cards/scared.jpg',
			audioSrc: './assets/audio/scared.mp3',
		},
		{
			word: 'smile',
			translation: 'улыбка',
			image: './assets/images/cards/smile.jpg',
			audioSrc: './assets/audio/smile.mp3',
		},
		{
			word: 'laugh',
			translation: 'смех',
			image: './assets/images/cards/laugh.jpg',
			audioSrc: './assets/audio/laugh.mp3',
		},
	],
	[
		{
			word: 'dragon',
			translation: 'дракон',
			image: './assets/images/cards/sad.jpg',
			audioSrc: './assets/audio/sad.mp3',
		},
		{
			word: 'knight',
			translation: 'рыцарь',
			image: './assets/images/cards/angry.jpg',
			audioSrc: './assets/audio/angry.mp3',
		},
		{
			word: 'witch',
			translation: 'ведьма',
			image: './assets/images/cards/happy.jpg',
			audioSrc: './assets/audio/happy.mp3',
		},
		{
			word: 'king',
			translation: 'король',
			image: './assets/images/cards/tired.jpg',
			audioSrc: './assets/audio/tired.mp3',
		},
		{
			word: 'mermaid',
			translation: 'русалка',
			image: './assets/images/cards/surprised.jpg',
			audioSrc: './assets/audio/surprised.mp3',
		},
		{
			word: 'princess',
			translation: 'принцесса',
			image: './assets/images/cards/scared.jpg',
			audioSrc: './assets/audio/scared.mp3',
		},
		{
			word: 'wizard',
			translation: 'волшебник',
			image: './assets/images/cards/smile.jpg',
			audioSrc: './assets/audio/smile.mp3',
		},
		{
			word: 'fairy',
			translation: 'фея',
			image: './assets/images/cards/laugh.jpg',
			audioSrc: './assets/audio/laugh.mp3',
		},
	],
	[
		{
			word: 'salad',
			translation: 'салат',
			image: './assets/images/cards/sad.jpg',
			audioSrc: './assets/audio/sad.mp3',
		},
		{
			word: 'cake',
			translation: 'пирог',
			image: './assets/images/cards/angry.jpg',
			audioSrc: './assets/audio/angry.mp3',
		},
		{
			word: 'tako',
			translation: 'тако',
			image: './assets/images/cards/happy.jpg',
			audioSrc: './assets/audio/happy.mp3',
		},
		{
			word: 'bread',
			translation: 'хлеб',
			image: './assets/images/cards/tired.jpg',
			audioSrc: './assets/audio/tired.mp3',
		},
		{
			word: 'hot-dog',
			translation: 'хот-дог',
			image: './assets/images/cards/surprised.jpg',
			audioSrc: './assets/audio/surprised.mp3',
		},
		{
			word: 'ham',
			translation: 'ветчина',
			image: './assets/images/cards/scared.jpg',
			audioSrc: './assets/audio/scared.mp3',
		},
		{
			word: 'sushi',
			translation: 'суши',
			image: './assets/images/cards/smile.jpg',
			audioSrc: './assets/audio/smile.mp3',
		},
		{
			word: 'sausage',
			translation: 'колбаса',
			image: './assets/images/cards/laugh.jpg',
			audioSrc: './assets/audio/laugh.mp3',
		},
	],
];

const defaultCards = [
	{
		title: 'Action (set A)',
		image: './assets/images/cards/actions_1.jpg',
	},
	{
		title: 'Action (set B)',
		image: './assets/images/cards/actions_2.jpg',
	},
	{
		title: 'Animal (set A)',
		image: './assets/images/cards/animals_1.jpg',
	},
	{
		title: 'Animal (set B)',
		image: './assets/images/cards/animals_2.jpg',
	},
	{
		title: 'Clothes',
		image: './assets/images/cards/clothes_1.jpg',
	},
	{
		title: 'Emotions',
		image: './assets/images/cards/emotions_1.jpg',
	},
	{
		title: 'Fairytales',
		image: './assets/images/cards/fairytales_1.jpg',
	},
	{
		title: 'Food',
		image: './assets/images/cards/food_1.jpg',
	},
];

export { defaultCards, groupCards, cardsData };
