import React from 'react'
import Banner from './components/Banner'
import Support from './components/Support'
import AboutSection from './components/AboutSection'
import Fruits from './components/Fruits';

export const fruits = [
  { name: "oranges", price: 1.99, description: ["Oranges are juicy and packed with vitamin C, making them great for juicing.", "They add a burst of citrus flavor to your morning routine.", "Oranges are not only refreshing but also a nutritious choice."], type: "Citrus Fruits" },
  { name: "apricots", price: 2.49, description: ["Apricots are sweet and slightly tangy, making them perfect for jams and preserves.", "They can also be enjoyed fresh or dried as a healthy snack.", "Apricots bring a touch of sunshine to your palate."], type: "Pits" },
  { name: "blueberries", price: 3.49, description: ["Blueberries are not only sweet but incredibly versatile.", "They are perfect for snacking and also ideal for baking, whether in muffins, pancakes, or pies.", "These little blue fruits are packed with antioxidants and bring a burst of flavor to your snacks and desserts."], type: "Berries" },
  // { name: "limes", price: 1.49, description: ["Limes are tangy and essential for cocktails and cooking.", "They add a zesty and refreshing flavor to both beverages and dishes.", "Limes are a must-have for anyone looking to elevate their culinary creations."], type: "Citrus Fruits" },
  { name: "strawberries", price: 2.79, description: ["Strawberries are juicy and versatile, making them ideal for a wide range of desserts.", "They pair wonderfully with chocolate, cream, and other fruits.", "Whether you're making a strawberry shortcake or adding them to your morning breakfast, they are a crowd-pleaser."], type: "Berries" },
  { name: "cherries", price: 3.99, description: ["Cherries are sweet and ideal for making pies and toppings.", "They're a classic choice for baking and can be turned into delicious jams and preserves.", "Whether you're indulging in a cherry pie or topping your ice cream, cherries are a delightful treat."], type: "Pits" },
  { name: "nectarines", price: 2.99, description: ["Nectarines are juicy and great for fresh consumption.", "They are perfect for slicing into salads or enjoying as a refreshing snack.", "Nectarines offer a burst of summer flavor with every bite."], type: "Pits" },
  { name: "cranberries", price: 1.99, description: ["Cranberries have a tangy flavor and are known for their versatility in the kitchen.", "They're often used for making sauces, especially around the holidays.", "These small red gems are also excellent for baking and can add a burst of flavor to your dishes."], type: "Berries" },
  { name: "pawpaw", price: 3.49, description: ["Papayas are sweet and tropical, great for breakfast and salads.", "They have a luscious orange flesh and are a great source of vitamins.", "Papayas offer a refreshing and tropical twist to your morning routine."], type: "Tropical Fruits" },
  { name: "peaches", price: 2.79, description: ["Peaches are sweet and great for desserts or grilling.", "They are a wonderful addition to pies, cobblers, and ice cream.", "Whether you're biting into a fresh peach or savoring a peach cobbler, the flavor is simply irresistible."], type: "Pits" },
  { name: "raspberries", price: 4.29, description: ["Red raspberries are known for their delicate and sweet taste.", "They are perfect for fresh consumption and can be enjoyed on their own or added to various desserts.", "These vibrant berries add a touch of elegance to your culinary creations."], type: "Berries" },
  { name: "coconut", price: 3.49, description: ["Coconut is rich and tropical, used in both sweet and savory dishes.", "It's a staple in many tropical cuisines and adds a unique flavor to your recipes.", "Coconut is a versatile ingredient for those looking to explore exotic tastes."], type: "Tropical Fruits" },
  // { name: "grapes", price: 1.49, description: ["Grapes are small and sweet, making them a delightful snack option.", "They can be enjoyed on their own or added to cheese platters.", "Grapes are a convenient and healthy choice for those looking for a quick and tasty treat."], type: "Berries" },
  { name: "cantaloupe", price: 3.99, description: ["Cantaloupe is sweet and aromatic, perfect for fruit salads.", "This melon offers a burst of tropical flavor and pairs wonderfully with other fruits.", "Cantaloupe is a refreshing addition to your summertime gatherings."], type: "Melons" },
  // { name: "blackberries", price: 2.99, description: ["Blackberries are small and sweet-tart, making them perfect for a wide range of culinary applications.", "These berries are great for making pies, smoothies, and jams.", "They are a delightful addition to your breakfast yogurt or cereal."], type: "Berries" },
  { name: "dates", price: 2.79, description: ["Dates are sweet and chewy, ideal for snacking or baking.", "They are a natural source of sweetness and can be stuffed with various ingredients.", "Dates are a nutritious and delicious addition to your diet."], type: "Tropical Fruits" },
  { name: "guavas", price: 3.99, description: ["Guavas are sweet and tropical, enjoyed fresh or in smoothies.", "They are a great source of vitamin C and bring a burst of exotic flavor to your palate.", "Guavas are a delightful tropical treat for those seeking a taste of the tropics."], type: "Tropical Fruits" },
  { name: "pears", price: 2.29, description: ["Pears are sweet and juicy, making them a great choice for fresh snacks.", "They pair wonderfully with cheese and salads.", "Pears offer a delightful combination of sweetness and a touch of grittiness in every bite."], type: "Core" },
  { name: "grapefruits", price: 2.99, description: ["Grapefruits are tangy and refreshing, making them ideal for breakfast.", "They can be enjoyed as a juicy and healthy start to your day.", "Grapefruits bring a zesty kick to your morning routine."], type: "Citrus Fruits" },
  { name: "kumquats", price: 4.79, description: ["Kumquats are tiny and sweet, often eaten whole or used in salads.", "They provide a burst of citrus flavor in a small package.", "Kumquats add a unique and delightful twist to your culinary adventures."], type: "Citrus Fruits" },
  { name: "lemons", price: 1.29, description: ["Lemons are tart and versatile for cooking and drinks.", "They bring a tangy zing to both sweet and savory dishes.", "Whether you're making lemonade or adding a squeeze of citrus to your recipes, lemons are a kitchen essential."], type: "Citrus Fruits" },
  { name: "apples", price: 1.49, description: ["Apples are crisp and slightly tart, making them perfect for pies and other desserts.", "They come in a variety of flavors and are versatile in the kitchen.", "Apples add a delightful crunch and natural sweetness to your culinary creations."], type: "Core" },
  // { name: "plums", price: 1.99, description: ["Plums are sweet and versatile, perfect for various dishes.", "They can be enjoyed fresh or turned into jams and sauces.", "Plums bring a touch of sweetness to both your savory and sweet recipes."], type: "Pits" },
  // { name: "casaba", price: 2.79, description: ["Casaba melon is mildly sweet and great for snacking.", "It's a delightful choice when you're looking for a light and refreshing fruit.", "Casaba melon adds a touch of sweetness to your day."], type: "Melons" },
  { name: "avocados", price: 2.99, description: ["Avocados are creamy and versatile, great for salads and guacamole.", "They are a source of healthy fats and can be enjoyed in savory and sweet dishes.", "Avocados add a smooth and rich texture to your culinary creations."], type: "Tropical Fruits" },
  { name: "pineapples", price: 2.99, description: ["Pineapples are sweet and tangy, ideal for snacking and desserts.", "They are a tropical favorite and can be enjoyed fresh or grilled.", "Pineapples add a burst of sunshine to your culinary creations."], type: "Tropical Fruits" },
  // { name: "tangerines", price: 2.49, description: ["Tangerines are easy to peel and sweet, making them perfect for quick snacks.", "They are a convenient choice for on-the-go enjoyment.", "Tangerines provide a burst of citrus sunshine in every bite."], type: "Citrus Fruits" },
  { name: "honeydew", price: 3.49, description: ["Honeydew is sweet and refreshing, ideal for desserts.", "It pairs wonderfully with prosciutto and is a favorite in fruit salads.", "Honeydew adds a touch of luxury to your culinary experiences."], type: "Melons" },
  // { name: "watermelon", price: 1.99, description: ["Watermelon is juicy and hydrating, perfect for picnics.", "It's a classic choice for summer gatherings and can be enjoyed in various forms.", "Watermelon adds a burst of refreshment to your outdoor activities."], type: "Melons" },
  { name: "bananas", price: 0.99, description: ["Bananas are sweet and portable, perfect for snacking.", "They are a convenient source of energy and can be enjoyed on the go.", "Bananas are a classic and beloved fruit for people of all ages."], type: "Tropical Fruits" },
  // { name: "figs", price: 3.29, description: ["Figs are sweet and seedy, great for desserts and preserves.", "They have a unique texture and flavor that pairs wonderfully with cheese and honey.", "Figs are a gourmet choice for those looking to elevate their culinary experiences."], type: "Tropical Fruits" },
  { name: "mangoes", price: 2.99, description: ["Mangoes are sweet and juicy, perfect for salsas and desserts.", "They are a tropical delight with a distinctive flavor and fragrance.", "Mangoes add a touch of the exotic to your culinary adventures."], type: "Tropical Fruits" },
]

type fruitProps={
  products:{
  name:string,
  price:number,
  description:string,
  type:string
}[]
}

export default function Home() {
 
  return (
    <>
    <main className='min-h-screen pb-[200px]'>
      <Banner />
      <Support />
      <Fruits  products = {fruits}/>
      <AboutSection />
    </main>
    </>
  )
}
