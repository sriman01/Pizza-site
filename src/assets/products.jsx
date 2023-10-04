const products = [
    {
      id: 1,
      img: "/pic1.jpg",
      name: "Onion Pizza",
      price: 150,
      desc: "A delicious pizza topped with fresh onions for a delightful flavor combination. This pizza is perfect for onion lovers and offers a unique twist on the classic pizza experience. Enjoy the perfect blend of cheesy goodness and the sharp taste of onions in every bite. Whether you're sharing with friends or enjoying it all to yourself, this Onion Pizza is sure to satisfy your pizza cravings.",
      category: "Classic",
    },
    {
      id: 2,
      img: "/pic2.jpg",
      name: "Margherita Pizza",
      price: 130,
      desc: "A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil. Simple yet bursting with flavors, this Margherita Pizza is a timeless favorite that captures the essence of Italian cuisine.",
      category: "Mixed",
    },
    {
      id: 3,
      img: "https://w7.pngwing.com/pngs/21/55/png-transparent-pepperoni-pizza-margarita-pizza-margherita-italian-cuisine-tomato-pizza-food-cheese-recipe-thumbnail.png",
      name: "Pepperoni Pizza",
      price: 160,
      desc: "Indulge in the savory delight of this Pepperoni Pizza, loaded with slices of spicy pepperoni, melted cheese, and a tangy tomato sauce. A popular choice that's perfect for satisfying your pizza cravings.",
      category: "Mixed",
    },
    {
      id: 4,
      img: "pic3.jpg",
      name: "Mushroom Pizza",
      price: 140,
      desc: "Experience the earthy flavors of mushrooms combined with the freshness of spinach on this delightful pizza. Topped with a blend of cheeses, this Mushroom and Spinach Pizza offers a balanced and satisfying taste.",
      category: "Mixed",
    },
    {
      id: 5,
      img: "pic3.jpg",
      name: "Chicken Pizza",
      price: 170,
      desc: "Savor the smoky goodness of this BBQ Chicken Pizza, featuring tender pieces of chicken marinated in barbecue sauce, red onions, and a medley of cheeses. A fusion of flavors that's sure to delight your taste buds.",
      category: "Classic",
    },
    {
      id: 6,
      img: "pic4.jpg",
      name: "Classic Pancakes",
      price: 80,
      desc: "Start your day with a stack of fluffy pancakes served with maple syrup and a dollop of butter. A timeless breakfast favorite that's sure to satisfy your morning cravings.",
      category: "Light",
    },
    {
      id: 7,
      img: "pic5.jpg",
      name: "Bacon Croissant",
      price: 110,
      desc: "Indulge in a buttery croissant filled with scrambled eggs, crispy bacon, and melted cheese. A savory and satisfying breakfast option that's perfect for on-the-go mornings.",
      category: "Light",
    },
    {
      id: 8,
      img: "pic2.jpg",
      name: "Greek Yogurt",
      price: 95,
      desc: "Enjoy a healthy and refreshing breakfast with layers of creamy Greek yogurt, fresh berries, honey, and granola. A balanced option that provides a burst of flavors and energy.",
      category: "Crunchy",
    },
    {
      id: 9,
      img: "pic3.jpg",
      name: "Avocado Toast",
      price: 120,
      desc: "Savor the creaminess of mashed avocado on toasted whole grain bread, topped with a sprinkle of sea salt and red pepper flakes. A trendy and nutritious breakfast choice.",
      category: "Crunchy",
    },
    // {
    //   id: 10,
    //   img: "https://w7.pngwing.com/pngs/20/725/png-transparent-grain-bowl-breakfast-cereal-muesli-corn-flakes-bowl-granola-food-breakfast-recipe-thumbnail.png",
    //   name: "Fruit and Nut Oatmeal",
    //   price: 85,
    //   desc: "Warm up with a bowl of hearty oatmeal packed with mixed fruits, nuts, and a drizzle of honey. A wholesome breakfast that provides a satisfying start to your day.",
    //   category: "Breakfast",
    // },
    // {
    //   id: 11,
    //   img: "https://w7.pngwing.com/pngs/875/111/png-transparent-north-fish-seafood-dish-smoked-salmon-restaurant-grilled-fish-hd-soup-food-seafood-thumbnail.png",
    //   name: "Grilled Salmon",
    //   price: 190,
    //   desc: "Delight in a perfectly grilled salmon fillet seasoned with herbs and served with a side of roasted vegetables. A healthy and flavorful dinner option that's rich in omega-3 fatty acids.",
    //   category: "Dinner",
    // },
    // {
    //   id: 12,
    //   img: "https://w7.pngwing.com/pngs/756/828/png-transparent-taglierini-carbonara-fettuccine-alfredo-chicken-pasta-chicken-fillet-thumbnail.png",
    //   name: "Chicken Alfredo Pasta",
    //   price: 160,
    //   desc: "Indulge in creamy fettuccine Alfredo pasta with tender pieces of grilled chicken. This comforting dinner dish is a blend of pasta, rich Alfredo sauce, and savory chicken.",
    //   category: "Dinner",
    // },
    // {
    //   id: 13,
    //   img: "https://w7.pngwing.com/pngs/651/721/png-transparent-veggie-burger-vegetable-food-recipe-stir-frying-vegetables-frying-pan-frozen-vegetables-fruit-thumbnail.png",
    //   name: "Vegetable Stir-Fry",
    //   price: 130,
    //   desc: "Enjoy a medley of colorful vegetables stir-fried in a flavorful sauce, served over steamed rice. A light and nutritious dinner that's both satisfying and wholesome.",
    //   category: "Dinner",
    // },
    // {
    //   id: 14,
    //   img: "https://w7.pngwing.com/pngs/575/331/png-transparent-burrito-taco-bell-mexican-cuisine-chipotle-mexican-grill-menu-thumbnail.png",
    //   name: "Grilled Chicken Burrito Bowl",
    //   price: 160,
    //   desc: "Savor the flavors of a delicious burrito bowl with tender grilled chicken, black beans, rice, sautéed peppers and onions, shredded cheese, and a drizzle of zesty cilantro-lime dressing. A hearty and satisfying chicken dinner option.",
    //   category: "Dinner",
    // },
    // {
    //   id: 15,
    //   img: "https://w7.pngwing.com/pngs/47/171/png-transparent-chinese-noodles-hot-and-sour-soup-risotto-lomi-lamian-slippery-mushrooms-risotto-dusi-soup-food-recipe-thumbnail.png",
    //   name: "Mushroom Risotto",
    //   price: 175,
    //   desc: "Indulge in creamy and flavorful mushroom risotto, made with Arborio rice, sautéed mushrooms, and a touch of Parmesan cheese. A comforting and sophisticated dinner choice.",
    //   category: "Dinner",
    // },
  ];
  export default products;
  