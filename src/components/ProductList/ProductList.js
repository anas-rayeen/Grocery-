import React from 'react'
import Butter from '../../assets/butter.png'
import Strawberry from '../../assets/Strawberry.png'
import Eggs from '../../assets/eggs.png'
import Cabbage from '../../assets/cabbage.png'
import EggPlant from '../../assets/eggplant.png'
import Shrimp from '../../assets/shrimp.png'
import Kiwi from '../../assets/kiwi.png'
import Capsicum from '../../assets/capsicum.png'
import Broccoli from '../../assets/broccoli.png'
import Yogurt from '../../assets/yogurt.png'
import Beef from '../../assets/beef.png'
import ChickenBreast from '../../assets/chicken-breast.png'
import Kale from '../../assets/kale.png'
import Cheese from '../../assets/cheese.png'
import CondensedMilk from '../../assets/condensed-milk.png'
import Salmon from '../../assets/salmon.png'
import Milk from '../../assets/milk.png'
import Pineapple from '../../assets/pineapple.png'
import Tofu from '../../assets/tofu.png'
import Tilapia from '../../assets/tilapia.png'
import SliceCheese from '../../assets/slice-cheese.png'
import RicottaCheese from '../../assets/ricotta-cheese.png'
import Grapes from '../../assets/grapes.png'
import Lettuce from '../../assets/lettuce.png'
import Banana from '../../assets/banana.png'
import Pomegranete from '../../assets/pomegranete.png'
import Papaya from '../../assets/papaya.png'
import Potato from '../../assets/potato.png'
import Onion from '../../assets/onion.png'




const ProductList = [
    {
        id: 1,
        name: 'Strawberry',
        price: 3.0,
        category: 'Fruits',
        image: Strawberry,
        rating: 4.8,
        description: "Fresh and juicy strawberries sourced from trusted farms. Packed with vitamins, antioxidants, and natural sweetness, they are perfect for healthy snacks, smoothies, desserts, and fruit salads. Carefully selected to ensure freshness and premium quality in every bite."
    },
    {
        id: 2,
        name: 'Butter',
        price: 3.5,
        category: 'Dairy',
        image: Butter,
        rating: 4.7,
        description: "Rich, creamy butter made from high-quality milk. Perfect for baking, cooking, and spreading on toast. Its smooth texture and delicious flavor enhance a variety of dishes, making it an essential ingredient for everyday meals and special recipes."
    },
    {
        id: 3,
        name: 'Eggs',
        price: 2.05,
        category: 'Dairy',
        image: Eggs,
        rating: 4.9,
        description: "Farm-fresh eggs packed with protein and essential nutrients. Ideal for breakfast, baking, and healthy recipes. Carefully selected for quality and freshness, they provide a nutritious and versatile food option for every household."
    },
    {
        id: 4,
        name: 'Cabbage',
        price: 3.0,
        category: 'Vegetables',
        image: Cabbage,
        rating: 4.6,
        description: "Fresh and crunchy cabbage harvested at peak quality. Rich in fiber, vitamins, and antioxidants, it is perfect for salads, soups, stir-fries, and healthy side dishes. A nutritious addition to balanced meals."
    },
    {
        id: 5,
        name: 'Eggplant',
        price: 4.0,
        category: 'Vegetables',
        image: EggPlant,
        rating: 4.5,
        description: "Premium-quality eggplants with a smooth texture and rich flavor. Ideal for grilling, roasting, curries, and baked dishes. Carefully sourced to provide freshness, nutrition, and excellent taste in every serving."

    },
    {
        id: 6,
        name: 'Shrimp',
        price: 3.5,
        category: 'Meat & SeaFood',
        image: Shrimp,
        rating: 4.8,
        description: "Fresh shrimp selected for superior taste and quality. Perfect for seafood dishes, salads, pasta, and stir-fries. Rich in protein and low in fat, making it a delicious and healthy meal choice."

    },
    {
        id: 7,
        name: 'Kiwi',
        price: 2.05,
        category: 'Fruits',
        image: Kiwi,
        rating: 4.7,
        description: "Sweet and tangy kiwi fruits packed with vitamin C, fiber, and antioxidants. Enjoy them fresh, in smoothies, fruit bowls, or desserts. Carefully chosen to ensure maximum freshness and flavor."
    },
    {
        id: 8,
        name: 'Green Capsicum',
        price: 4.0,
        category: 'Vegetables',
        image: Capsicum,
        rating: 4.5,
        description: "Fresh green capsicum with a crisp texture and vibrant color. Perfect for salads, pizzas, stir-fries, and curries. Rich in vitamins and antioxidants that support a healthy lifestyle."
    },
    {
        id: 9,
        name: 'Broccoli',
        price: 2.0,
        category: 'Vegetables',
        image: Broccoli,
        rating: 4.8,
        description: "Nutritious broccoli harvested fresh from quality farms. Loaded with vitamins, minerals, and fiber. Excellent for soups, salads, stir-fries, and healthy meal preparations."
    },
    {
        id: 10,
        name: 'Yogurt',
        price: 3.0,
        category: 'Dairy',
        image: Yogurt,
        rating: 4.7,
        description: "Creamy and delicious yogurt made from premium milk. Rich in probiotics and nutrients that support digestion and overall health. Enjoy it as a snack, breakfast option, or ingredient in recipes."
    },
    {
        id: 11,
        name: 'Beef',
        price: 8.0,
        category: 'Meat & SeaFood',
        image: Beef,
        rating: 4.6,
        description: "Premium beef cuts carefully selected for tenderness and flavor. Perfect for grilling, roasting, burgers, and traditional recipes. High in protein and ideal for satisfying family meals."
    },
    {
        id: 12,
        name: 'Chicken Breast',
        price: 7.0,
        category: 'Meat & SeaFood',
        image: ChickenBreast,
        rating: 4.8,
        description: "Lean and protein-rich chicken breast, ideal for healthy cooking. Perfect for grilling, baking, salads, and meal preparation. Freshly sourced to ensure quality, flavor, and nutrition."
    },
    {
        id: 13,
        name: 'Kale',
        price: 7.0,
        category: 'Vegetables',
        image: Kale,
        rating: 4.4,
        description: "Fresh kale packed with vitamins, minerals, and antioxidants. A nutritious leafy green that works well in salads, smoothies, soups, and healthy side dishes."
    },
    {
        id: 14,
        name: 'Mozzarella Cheese',
        price: 7.0,
        category: 'Dairy',
        image: Cheese,
        rating: 4.9,
        description: "Authentic mozzarella cheese with a soft texture and rich taste. Ideal for pizzas, pasta, sandwiches, and salads. Made from quality ingredients to deliver exceptional flavor."
    },
    {
        id: 15,
        name: 'Condensed Milk',
        price: 7.0,
        category: 'Dairy',
        image: CondensedMilk,
        rating: 4.6,
        description: "Sweet and creamy condensed milk perfect for desserts, beverages, and baking recipes. Made from high-quality milk to provide rich flavor and smooth consistency."
    },
    {
        id: 16,
        name: 'Salmon',
        price: 6.0,
        category: 'Meat & SeaFood',
        image: Salmon,
        rating: 4.9,
        description: "Fresh salmon rich in omega-3 fatty acids and premium protein. Perfect for grilling, baking, and healthy seafood recipes. Carefully sourced for freshness and exceptional taste."
    },
    {
        id: 17,
        name: 'Banana',
        price: 2.0,
        category: 'Fruits',
        image: Banana,
        rating: 4.7,
        description: "Naturally sweet bananas packed with energy, potassium, and essential nutrients. Great as a quick snack, smoothie ingredient, or healthy addition to breakfast meals."
    },
    {
        id: 18,
        name: 'Milk Bottle (3)',
        price: 8.0,
        category: 'Dairy',
        image: Milk,
        rating: 4.8,
        description: "Fresh milk bottles made from high-quality dairy sources. Rich in calcium, protein, and essential nutrients that support healthy bones and overall wellness."
    },
    {
        id: 19,
        name: 'PineApple',
        price: 3.0,
        category: 'Fruits',
        image: Pineapple,
        rating: 4.6,
        description: "Sweet and tropical pineapple with a refreshing taste and juicy texture. Rich in vitamins and antioxidants, making it perfect for snacks, juices, and desserts."
    },
    {
        id: 20,
        name: 'Tofu Cubes',
        price: 4.0,
        category: 'Dairy',
        image: Tofu,
        rating: 4.5,
        description: "Fresh tofu cubes packed with plant-based protein and nutrients. Perfect for stir-fries, curries, salads, and healthy vegetarian meals. Soft texture with excellent versatility."
    },
    {
        id: 21,
        name: 'Tilapia Fish',
        price: 5.0,
        category: 'Meat & SeaFood',
        image: Tilapia,
        rating: 4.7,
        description: "Fresh tilapia fish known for its mild flavor and tender texture. A healthy seafood option rich in protein and perfect for grilling, frying, or baking."
    },
    {
        id: 22,
        name: 'Slice Cheese',
        price: 5.0,
        category: 'Dairy',
        image: SliceCheese,
        rating: 3.0,
        description: "Smooth and flavorful slice cheese ideal for sandwiches, burgers, wraps, and snacks. Made from quality dairy ingredients to provide rich taste and creamy texture."
    },
    {
        id: 23,
        name: 'Ricotta Cheese',
        price: 7.0,
        category: 'Dairy',
        image: RicottaCheese,
        rating: 4.9,
        description: "Premium ricotta cheese with a creamy texture and mild flavor. Perfect for pasta dishes, desserts, spreads, and baked recipes. Crafted for exceptional quality and taste."
    },
    {
        id: 24,
        name: 'Grapes',
        price: 3.0,
        category: 'Fruits',
        image: Grapes,
        rating: 4.6,
        description: "Fresh grapes bursting with natural sweetness and refreshing flavor. Rich in antioxidants and vitamins, making them a perfect snack or addition to fruit salads."
    },
    {
        id: 25,
        name: 'Lettuce Leaf',
        price: 3.0,
        category: 'Vegetables',
        image: Lettuce,
        rating: 4.0,
        description: "Crisp lettuce leaves harvested fresh for maximum quality. Perfect for salads, wraps, sandwiches, and healthy meals. Light, refreshing, and packed with nutrients."
    },
    {
        id: 26,
        name: 'Pomegranete',
        price: 3.0,
        category: 'Fruits',
        image: Pomegranete,
        rating: 4.8,
        description: "Juicy pomegranates filled with sweet and tangy seeds. Rich in antioxidants, vitamins, and minerals. Ideal for healthy snacking, juices, and fruit-based recipes."

    },
    {
        id: 27,
        name: 'Papaya',
        price: 3.0,
        category: 'Fruits',
        image: Papaya,
        rating: 3.0,
        description: "Fresh papaya with a naturally sweet flavor and soft texture. Packed with vitamins, fiber, and digestive enzymes that support overall health and wellness."

    },
    {
        id: 28,
        name: 'Potato',
        price: 3.0,
        category: 'Vegetables',
        image: Potato,
        rating: 4.4,
        description: "Fresh potatoes with a smooth texture and versatile use in cooking. Perfect for fries, mashed potatoes, curries, soups, and a variety of delicious dishes."

    },
    {
        id: 29,
        name: 'Onion',
        price: 3.0,
        category: 'Vegetables',
        image: Onion,
        rating: 3,
        description: "Fresh onions carefully selected for quality and flavor. Essential for countless recipes, providing rich aroma, taste, and nutrition in everyday cooking."

    }

]

export default ProductList;
