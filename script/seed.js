'use strict';

const {
  db,
  models: { User, Product, Category },
} = require('../server/db');

const users = [
  {
    first_name: 'James',
    last_name: 'Bond',
    password: 123,
    address: '201 Huntington Way, Boise, ID, 60597',
    isAdmin: true,
    email: 'james@gmail.com',
    username: 'JBond',
  },
  {
    first_name: 'Mike',
    last_name: 'Ishikawa',
    password: 123,
    address: '205 Bear Way, Boise, ID, 60597',
    isAdmin: false,
    email: 'mikeIshi@gmail.com',
    username: 'MIshikawa',
  },
  {
    first_name: 'Jessica',
    last_name: 'Lynn',
    password: 123,
    address: '345 Oracle Lane, Atlanta, GA, 60597',
    isAdmin: false,
    email: 'Jess@gmail.com',
    username: 'JLynn',
  },
  {
    first_name: 'Andrew',
    last_name: 'Luck',
    password: 123,
    address: '576 Freedom Drive, Boise, ID, 60597',
    isAdmin: false,
    email: 'aLuck@gmail.com',
    username: 'ALuck',
  },
  {
    first_name: 'Michael',
    last_name: 'Jordan',
    password: 123,
    address: '569 Stone Drive, Coopertown, NY, 56732',
    isAdmin: true,
    email: 'MJ@gmail.com',
    username: 'MJordan',
  },
  {
    first_name: 'Josie',
    last_name: 'Wang',
    password: 123,
    address: '713 Fuji Lane, Pensacola, FL, 98065',
    isAdmin: false,
    email: 'josie@gmail.com',
    username: 'JWang',
  },
  {
    first_name: 'Alex',
    last_name: 'Trebek',
    password: 123,
    address: '900 Fuji Lane, Treasure Island, FL, 98065',
    isAdmin: false,
    email: 'Alex@gmail.com',
    username: 'ATrebek',
  },
  {
    first_name: 'Tina',
    last_name: 'Young',
    password: 123,
    address: '569 Stone Drive, Coopertown, NY, 56732',
    isAdmin: true,
    email: 'M@gmail.com',
    username: 'TYoung',
  },
  {
    first_name: 'Sally',
    last_name: 'Jones',
    password: 123,
    address: '900 Fuji Lane, Treasure Island, FL, 98065',
    isAdmin: false,
    email: 'Sally@gmail.com',
    username: 'SJones',
  },
];

const indianFood = [
  {
    name: 'Briyani',
    description: 'Mixed rice dish made with spices, rice and assorted meats',
    price: 8,
    quantity: 32,
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Biryani_Home.jpg/440px-Biryani_Home.jpg',
  },

  {
    name: 'Samsosa',
    description: 'Baked pastry filled with spiced potatoes and vegetables',
    price: 5,
    quantity: 25,
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Samosachutney.jpg/560px-Samosachutney.jpg',
  },
  {
    name: 'Butter Chicken',
    description: 'Curry of chicken in a spiced tomato, butter and cream sauce',
    price: 18,
    quantity: 6,
    imgUrl:
      'https://www.theendlessmeal.com/wp-content/uploads/2020/05/Easy-Butter-Chicken-3.jpg',
  },
];

const barbequeFood = [
  {
    name: 'BBQ Ribs',
    description: 'Tender, fall off the bone ribs, smoked to perfection',
    price: 19,
    quantity: 26,
    imgUrl:
      'https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/terrys-bbq-ribs-fdaa5a.jpg',
  },
  {
    name: 'Smoked Brisket',
    description: 'Smoked for hours, covered in sea salt and spices',
    price: 14,
    quantity: 12,
    imgUrl:
      'https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/crockpot-beef-brisket-97c3cd.jpg',
  },
  {
    name: 'Pulled Pork Sandwich',
    description: 'Sauced pulled pork between a brioche bun',
    price: 8,
    quantity: 20,
    imgUrl: 'http://hapanom.com/slow-cooker-korean-pulled-pork-sandwich/',
  },
];
const japaneseFood = [
  {
    name: 'Sushi',
    description: 'Variety of fish/vegetables wrapped in seaweed and rice',
    price: 22,
    quantity: 8,
    imgUrl:
      'https://i8b2m3d9.stackpathcdn.com/wp-content/uploads/2019/07/Take-away-sushi-rolls_3781NM.jpg',
  },

  {
    name: 'Unagi',
    description: 'Grilled Eel',
    price: 14,
    quantity: 26,
    imgUrl: 'https://www.japan-guide.com/g17/2344_11.jpg',
  },

  {
    name: 'Natto',
    description: 'Fermented Soy beans',
    price: 3,
    quantity: 56,
    imgUrl: 'http://justhungry.com/files/images/natto-stickysticky.jpg',
  },
];
const thaiFood = [
  {
    name: 'Orange Chicken',
    description:
      'Boneless fried chicken, cut into bite sized pieces and fried with a special sauce',
    price: 10,
    quantity: 13,
    imgUrl:
      'https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/orange-chicken-for-diabetics-3.jpg',
  },
  {
    name: 'Beef Fried Rice',
    description: 'Savory flank steak, fried rice with vegetables',
    price: 16,
    quantity: 5,
    imgUrl:
      'https://thebakersalmanac.com/wp-content/uploads/2021/04/Beef-fried-rice-close-up.jpg',
  },
  {
    name: 'Lotus Leaf Wraps',
    description: 'Sticky Rice with vegetables wrapped in a lotus leaf',
    price: 6,
    quantity: 11,
    imgUrl:
      'http://www.thedailymeal.com/cantonese-sticky-rice-wrapped-lotus-leaves',
  },
];

// const products = [
//   {
//     name: 'BBQ Ribs',
//     description: 'Tender, fall off the bone ribs, smoked to perfection',
//     price: 19,
//     quantity: 26,
//     imgUrl:
//       'https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/terrys-bbq-ribs-fdaa5a.jpg',
//   },
//   {
//     name: 'Smoked Brisket',
//     description: 'Smoked for hours, covered in sea salt and spices',
//     price: 14,
//     quantity: 12,
//     imgUrl:
//       'https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/crockpot-beef-brisket-97c3cd.jpg',
//   },
//   {
//     name: 'Pulled Pork Sandwich',
//     description: 'Sauced pulled pork between a brioche bun',
//     price: 8,
//     quantity: 20,
//     imgUrl: 'http://hapanom.com/slow-cooker-korean-pulled-pork-sandwich/',
//   },
//   {
//     name: 'Orange Chicken',
//     description:
//       'Boneless fried chicken, cut into bite sized pieces and fried with a special sauce',
//     price: 10,
//     quantity: 13,
//     imgUrl:
//       'https://bigoven-res.cloudinary.com/image/upload/h_320,w_320,c_fill/orange-chicken-for-diabetics-3.jpg',
//   },
//   {
//     name: 'Beef Fried Rice',
//     description: 'Savory flank steak, fried rice with vegetables',
//     price: 16,
//     quantity: 5,
//     imgUrl:
//       'https://thebakersalmanac.com/wp-content/uploads/2021/04/Beef-fried-rice-close-up.jpg',
//   },
//   {
//     name: 'Lotus Leaf Wraps',
//     description: 'Sticky Rice with vegetables wrapped in a lotus leaf',
//     price: 6,
//     quantity: 11,
//     imgUrl:
//       'http://www.thedailymeal.com/cantonese-sticky-rice-wrapped-lotus-leaves',
//   },

//   {
//     name: 'Sushi',
//     description: 'Variety of fish/vegetables wrapped in seaweed and rice',
//     price: 22,
//     quantity: 8,
//     imgUrl:
//       'https://i8b2m3d9.stackpathcdn.com/wp-content/uploads/2019/07/Take-away-sushi-rolls_3781NM.jpg',
//   },

//   {
//     name: 'Unagi',
//     description: 'Grilled Eel',
//     price: 14,
//     quantity: 26,
//     imgUrl: 'https://www.japan-guide.com/g17/2344_11.jpg',
//   },

//   {
//     name: 'Natto',
//     description: 'Fermented Soy beans',
//     price: 3,
//     quantity: 56,
//     imgUrl: 'http://justhungry.com/files/images/natto-stickysticky.jpg',
//   },

//   {
//     name: 'Briyani',
//     description: 'Mixed rice dish made with spices, rice and assorted meats',
//     price: 8,
//     quantity: 32,
//     imgUrl:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Biryani_Home.jpg/440px-Biryani_Home.jpg',
//   },

//   {
//     name: 'Samsosa',
//     description: 'Baked pastry filled with spiced potatoes and vegetables',
//     price: 5,
//     quantity: 25,
//     imgUrl:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Samosachutney.jpg/560px-Samosachutney.jpg',
//   },
//   {
//     name: 'Butter Chicken',
//     description: 'Curry of chicken in a spiced tomato, butter and cream sauce',
//     price: 18,
//     quantity: 6,
//     imgUrl:
//       'https://www.theendlessmeal.com/wp-content/uploads/2020/05/Easy-Butter-Chicken-3.jpg',
//   },
// ];

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');
  try {
    await Promise.all(
      users.map((user) => {
        return User.create(user);
      })
    );
    const indian = await Category.create({ category_name: 'indian' });
    const barbeque = await Category.create({ category_name: 'barbeque' });
    const japanese = await Category.create({ category_name: 'japanese' });
    const thai = await Category.create({ category_name: 'thai' });

    await Promise.all(
      indianFood.map(async (product) => {
        let newProduct = await Product.create(product);
        // console.log(Object.keys(newProduct.__proto__));
        return newProduct.setCategory(indian);
      })
    );
    await Promise.all(
      barbequeFood.map(async (product) => {
        let newProduct = await Product.create(product);
        return newProduct.setCategory(barbeque);
      })
    );
    await Promise.all(
      japaneseFood.map(async (product) => {
        let newProduct = await Product.create(product);
        return newProduct.setCategory(japanese);
      })
    );
    await Promise.all(
      thaiFood.map(async (product) => {
        let newProduct = await Product.create(product);
        return newProduct.setCategory(thai);
      })
    );
  } catch (error) {
    console.log(error);
  }
  // Creating Users

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
