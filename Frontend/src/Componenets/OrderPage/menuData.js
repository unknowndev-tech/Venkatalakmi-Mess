// menuData.js - Contains all menu-related data for the restaurant app

// Menu categories with their icons
export const menuCategories = [
  { id: 'menu-starters', title: 'Sweets', icon: 'bi-egg-fried' },
  { id: 'menu-breakfast', title: 'Breakfast', icon: 'bi-cup-hot' },
  { id: 'menu-lunch', title: 'Lunch', icon: 'bi-cup-straw' },
  { id: 'menu-dinner', title: 'Snacks', icon: 'bi-palette' }
];

// Base menu items organized by category
export const baseMenuItems = {
  'menu-starters': [
     {
          "id": 1,
          "name": "Godambi Barfi(ಗೋದಂಬಿ ಬರ್ಫಿ)",
          "description": "Cashew nut-based, diamond-shaped fudge with a smooth texture.",
          "price": 17,
           "unit": "per dozen",
          "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%20-2%2Fkaju-katli.webp?alt=media&token=b1639539-d433-400a-b9e7-682764d5153f",
          "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        },
   
    {
          "id": 2,
          "name": "Jilebi  (ಜಿಲೆಬಿ)",
          "description": "Deep-fried, crispy, and chewy syrup-soaked spirals of sweetness.",
          "price":15 ,
          "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%20-2%2Fjelebi.webp?alt=media&token=10784a1c-19a0-431f-b0a4-4492c0806212",
          "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        },
        {
          "id": 3,
          "name": "Gulab Jamun(ಗುಲಾಬ್ ಜಾಮೂನು)",
          "description": "Soft, deep-fried dough balls soaked in rose-flavored sugar syrup.",
          "price": 17,
          "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%20-2%2FGulabJamun.jpg?alt=media&token=94bdd095-7f55-483e-b69b-cee3fc482c45",
          "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        },
            {
          "id": 4,
          "name": "Dry Jamun(ಡ್ರೈ ಜಾಮೂನ್)",
          "description": "Soft, deep-fried dough balls soaked in rose-flavored sugar syrup.",
          "price": 15,
          "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2FDryJamun5.webp?alt=media&token=1a000de4-847e-406b-8daa-946b4d65fa15",
          "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        },
        {
          "id": 5,
          "name": "BesanLadoo(ಬೇಸನ್ ಲಾಡು)",
          "description": "Sweet, round balls made from flour, sugar, and ghee.",
          "price": 15,
          "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%20-2%2Fbeasan%20ladu.webp?alt=media&token=a0242dbe-88ac-42b0-acc2-93319756ac37",
          "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        },
         {
      "id": 6,
      "name": "Mysore Pak(ಮೈಸೂರು ಪಾಕ್)",
      "description": "A rich, ghee-filled, gram flour-based sweet from Mysore.",
      "price": 17,
      "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%20-2%2Fmysorepark.webp?alt=media&token=547d5d0d-4f65-46a9-a62b-f9178df7c2d5",
      "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    },
       
        {
          "id": 7,
          "name": "Hallu Bayi(ಹಾಲು ಬಾಯಿ)",
          "description": "Light, flaky, and sweet cubes made from gram flour and sugar.",
          "price":15,
          "img": "",
          "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        },
          {
    "id": 8,
    "name": "Chikki(ಚಿಕ್ಕಿ)",
    "description": "Delicious fig-based sweet rich in natural flavors.",
    "price": 10,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2Fchikki.jpg?alt=media&token=be58aac8-76f3-4520-9ebc-0d1cb8c40c74",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },

  {
    "id": 10,
    "name": "Athrasa( ಅತ್ರಾಸ)",
    "description": "Traditional sweet with cashew essence.",
    "price": 17,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2Fathrasa.jpg?alt=media&token=49f51912-bc84-4666-9b76-537fd67b97c1",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  {
    "id": 11,
    "name": "Badam Barfi(ಬಾದಾಮ್ ಬರ್ಫಿ)",
    "description": "Soft almond burfi rich in flavor and texture.",
    "price": 17,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%2FBadam%20Barfi.webp?alt=media&token=d33ecf69-26d2-449a-954b-c288c55e3c0b",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  {
    "id": 12,
    "name": "Haya Griva(ಹಯಗ್ರೀವ) Per Cup",
    "description": "Hayagriva is a traditional sweet made with chana dal, jaggery, and coconut, often served as a prasadam in South Indian temples.",
    "price": 30,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2FHayagriva.jpg?alt=media&token=9497eeb5-f437-40ba-9a89-df1bbbb1209d",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  {
    "id": 13,
    "name": "Kobri Mitai (ಕೊಬ್ಬರಿ ಮಿಟಾಯಿ)",
    "description": "Coconut-based sweet with traditional taste.",
    "price": 15,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2FKobri%20Mitai.jpg?alt=media&token=c0cd4a9d-f09c-4760-91b7-022408dfab2a",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  
    {
    "id": 14,
    "name": "Beladh Kobri Mitai (ಬೆಳದ್ ಕೊಬ್ಬರಿ ಮಿಟಾಯಿ)",
    "description": "Coconut-based sweet with traditional taste.",
    "price": 15,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2FBeladhu%20Kobri%20mitai.jpg?alt=media&token=69ca8b35-2c44-493e-bee7-2d1fc408a3ee",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  {
    "id": 15,
    "name": "Gari Ladoo (ಗರಿ ಲಾಡು)",
    "description": "Gari Ladoo: Sweet semolina balls with ghee.",
    "price": 17,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2FGari%20Ladoo.jpg?alt=media&token=8ef916f3-dc28-4625-836a-855a0d3cec1d",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  {
    "id": 16,
    "name": "Mohan Ladoo (ಮೋಹನ್ ಲಾಡು:)",
    "description": " A sweet made with gram flour, ghee, and sugar",
    "price":17 ,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2FMohan%20Ladoo.jpg?alt=media&token=afa12518-ef7f-420a-ab78-97d04ac808c8",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  {
    "id": 17,
    "name": "Boondi Ladoo(ಬೂಂದಿ ಲಾಡು)",
    "description": "Sweet round balls made from fried chickpea flour droplets, sugar, and flavored with cardamom.",
    "price": 15,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2FBondi%20Ladoo.jpg?alt=media&token=d362a48f-a1b3-48a5-83cf-d707c85de95f",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  {
    "id": 18,
    "name": "Rave Ladoo(ರವೆ ಲಾಡು)",
    "description": " Sweet balls made with semolina, ghee, and sugar",
    "price": 15,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2FRave%20Ladoo.jpg?alt=media&token=1344ca2c-60ff-42b2-aa5f-33eb98d5a033",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  {
    "id": 19,
    "name": "Saat(ಸಾಟ್)",
    "description": "Citrus dessert with tangy-sweet flavor.",
    "price": 17,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2FSaat.jpg?alt=media&token=62ea2f6c-06fa-433d-81b9-d55dd7b505b9",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  {
    "id": 20,
    "name": "Badusha(ಬಾದುಶಾ)",
    "description": "A traditional Indian sweet ",
    "price": 15,
    "img": "",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  {
    "id": 21,
    "name": "Badam Puri(ಬಾದಾಮ್ ಪೂರಿ)",
    "description": "A rich Indian sweet made with almonds, sugar, ghee, and flavored with cardamom and saffron, shaped into crispy layers.",
    "price": 15,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2FBadam%20Puri.jpg?alt=media&token=af871faa-6662-4c5d-a754-88e69f368266",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
   {
    "id": 22,
    "name": "Athi Madhura(ಅತಿ ಮಾಧುರ ) Per Cup",
    "description": "A traditional sweet made with jaggery, sugar, and ghee, known for its rich sweetness",
    "price": 35,
    "img": "upload-url-here.jpg",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
     {
    "id": 23,
    "name": "Dharwad Peda:(ಧಾರವಾಡ ಪೇಡ )",
    "description": "A famous sweet from Dharwad, made with milk, sugar, and ghee, cooked to a rich, dense texture and flavored with cardamom.",
    "price": 17,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2FDharwadPeda.webp?alt=media&token=57e284d7-7ca6-48e4-8454-74bc4c767606",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
      {
    "id": 24,
    "name": "Dudh Peda:(ದುಧ್ಪೇಡ )",
    "description": "Dudh Peda is a sweet, milk-based treat, flavored with cardamom and garnished with nuts.",
    "price": 15,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2FDhudh%20Peda.webp?alt=media&token=d0d64bc2-fae3-4459-9bba-74592eacdc77",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
     {
    "id": 25,
    "name": "Yallu Unde (ಯಲ್ಲು ಉಂಡೆ)",
    "description": "Yallu Unde is a sweet made from sesame seeds, jaggery, and coconut, shaped into balls. It's popular during Makar Sankranti.",
    "price": 10,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2FYallu%20Unde.jpg?alt=media&token=79f7ed2f-faa6-490f-b81a-0713c9e8210e",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
    {
    "id": 26,
    "name": "Mini Chiroti (ಮಿನಿ ಚಿರೋಟಿ) ",
    "description": "is a crispy, flaky sweet made from thin dough, deep-fried, and dusted with sugar or cardamom powder, popular during festivals.",
    "price": 25,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2FMini%20Chiroti.jpg?alt=media&token=5f18f5cb-af74-4388-9aa0-ffb9943529e4",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
   {
    "id": 27,
    "name": "Chikku Kesari Bath (ಚಿಕ್ಕು ಹೇಸರಿಬಾತ್)",
    "description": " is a sweet dish made with chikoo, semolina, sugar, and ghee. It's flavorful and enjoyed on special occasions.",
    "price": 25,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2FChikku%20kesari%20bath.jpg?alt=media&token=200f840d-47c4-448c-92e2-852a798f1f9c",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  {
    "id": 28,
    "name": "Kayi Holige(ಕಾಯಿ ಹೊಳಿಗೆ)",
    "description": "Flatbread stuffed with coconut and jaggery mix.",
    "price": 17,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%2FMavina%20holige.jpg?alt=media&token=24944e59-a97b-4eb7-8b8c-61e35c86ebb3",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  {
    "id": 29,
    "name": "Nelagadle Holige(ನೆಲಗದ್ದೆ ಹೊಳಿಗೆ)",
    "description": "Flatbread filled with groundnut-jaggery paste.",
    "price": 17,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%2FShenga%20Holige.jpg?alt=media&token=7e612d4e-f3a3-4757-9a8e-83895f3a3d6f",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  {
    "id": 30,
    "name": "Karjura Holige(ಕಾರ್ಜೂರ ಹೊಳಿಗೆ)",
    "description": "A traditional holige stuffed with the natural sweetness of dates, bringing a delightful twist to the classic recipe",
    "price": 17,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%2FHannu%20holige.jpg?alt=media&token=fb4c3f08-6c39-4bcd-beaa-96e219842855",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  {
    "id": 31,
    "name": "Kadle Bele Holige(ಕಡಲೆ ಬೆಳೆ ಹೊಳಿಗೆ)",
    "description": "Classic holige with a dal and jaggery filling.",
    "price": 17,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%2FBeleHolige1-1200x804.jpg?alt=media&token=4426c2a3-5c91-436c-a1ea-53af9a3d493f",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  {
    "id": 32,
    "name": "Rave Holige( ರವೆ ಹೊಳಿಗೆ)",
    "description": "Combo of twelve types of holige flavors.",
    "price": 17,
     "unit": "per kg",
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2FRave%20Holige.jpg?alt=media&token=bc0df5e5-2ad6-4442-b130-81711c7fe188",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  {
    "id": 33,
    "name": "Carrot Holige(ಕ್ಯಾರೆಟ್ ಹೊಳಿಗೆ)",
    "description": "Mango flavored holige with a sweet filling.",
    "price":17 ,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2FCarrot%20Holige.jpg?alt=media&token=4b26a5c8-c3b8-498d-a558-796cfd470cb8",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },  {
    "id": 34,
    "name": "Kova Holige(ಕೊವಾ ಹೊಳಿಗೆ)",
    "description": "Sweet coconut-stuffed holige made with love.",
    "price": 17,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2FKOva%20holige.jpg?alt=media&token=448d7f31-7047-4121-9ca7-4198fa887c43",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  {
    "id": 35,
    "name": "Badam Holige(ಬಾದಾಮ್ ಹೊಳಿಗೆ)",
    "description": "Unique holige variant with a fragrant filling.",
    "price": 20,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2FBadam%20Holige.jpg?alt=media&token=cc686bfd-29ca-4f9d-870e-979f55adfeaf",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  {
    "id": 36,
    "name": "Thatu Holige(ತಟು ಹೊಳಿಗೆ)",
    "description": "Spiced brinjal-based holige for the adventurous.",
    "price": 17,
    "img": "upload-url-here.jpg",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  {
    "id": 37,
    "name": "Sakre Holige(ಸಕ್ಕರೆ ಹೊಳಿಗೆ)",
    "description": "Aromatic herbal holige recipe from tradition.",
    "price": 17,
    "img": "upload-url-here.jpg",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
   {
    "id": 38,
    "name": "Mavene Hanu Holige(ಮಾವಿನ ಹಣ್ಣು ಹೊಳಿಗೆ)",
    "description": "Aromatic herbal holige recipe from tradition.",
    "price": 20,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2FMavena%20hannu%20holige.jpg?alt=media&token=4a0db160-ec14-4aa7-a0b2-326592b17d43",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },

 
  {
    "id": 39,
    "name": "Jahangir(ಜಹಾಂಗೀರ್)",
    "description": "Syrupy deep-fried sweet with royal taste.",
    "price": 15,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%20-2%2Fjahangir.webp?alt=media&token=69bafa66-ca7f-42bb-a545-b53bb622ed9d",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  {
    "id": 40,
    "name": "Kaju Pistarole(ಕಾಜು  ಪಿಸ್ಟರೋಲ್)",
    "description": "Exotic pistachio-based sweet with chewy texture.",
    "price":17 ,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%20-2%2FKaju-Pista-Barfi.webp?alt=media&token=dbb91931-d830-42b0-9e34-b1c943914e12",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  {
    "id": 41,
    "name": "Carrot Halwa(ಕ್ಯಾರೆಟ್ ಹಲ್ವಾ) Per Cup",
    "description": "Traditional halwa made from yam with sweet spices.",
    "price": 30,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2FCarrot%20Halwa.jpg?alt=media&token=590f828b-4e82-4ac8-a13f-9160c07d6ded",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  {
    "id": 42,
    "name": "Gumbala Halwa(ಗುಂಬಳ ಹಲ್ವಾ) Per Cup",
    "description": "Nutty and dense halwa with unique flavor.",
    "price": 30,
    "img": "upload-url-here.jpg",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  {
    "id": 43,
    "name": "BaleHaninna Halwa( ಬಾಳೆಹಣ್ಣಿನ ಹಲ್ವಾ)Per CUp",
    "description": "Banana halwa is a sweet, soft dessert made from ripe bananas, ghee, and sugar.",
    "price": 17,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2FBannana%20Halwa.jpg?alt=media&token=212a6796-640a-43e8-a8b0-7b9c304ec169",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  

  {
    "id": 44,
    "name": "7cup! VM's Special(7cup! VM's ಸ್ಪೆಷಲ್) ",
    "description": "Signature sweet blend of 7 ingredients.",
    "price":17 ,
    "img": "upload-url-here.jpg",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  {
    "id": 45,
    "name": "Dryfruits Barfi( ಡ್ರೈಫ್ರೂಟ್ಸ್ ಬರ್ಫಿ)",
    "description": "Classic barfi packed with assorted dry fruits.",
    "price": 17,
    "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%2FDry%20fruit%20barfi.jpg?alt=media&token=1685729b-3931-4abd-92b9-76d75863affb",
    "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  {
  "id": 46,
  "name": "VM's Signature Laddu",
  "description": "Mouth-melting laddus made with ghee and dry fruits.",
  "price": 90,
  "img": "upload-url-here.jpg",
  "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
},
// {
//   "id": 42,
//   "name": "Elaneer Payasa",
//   "description": "Chilled tender coconut dessert from coastal cuisine.",
//   "price": 100,
//   "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%2FElangeer%20paysa.jpg?alt=media&token=619ab2e0-2588-4726-a0f0-2d69f81b4e75",
//   "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// },
// {
//   "id": 43,
//   "name": "Karjura Mithai",
//   "description": "Date-based sweet rich in flavor and energy.",
//   "price": 100,
//   "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%2FKarjura%20Mithai.jpg?alt=media&token=b216a925-2811-4c2b-94d7-95469c3d1925",
//   "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// },
// {
//   "id": 44,
//   "name": "Anjeer Halwa",
//   "description": "Figs transformed into a decadent dessert.",
//   "price": 110,
//   "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%2FAnjeer%20halwa.jpg?alt=media&token=f3756fc5-38e1-445f-87ed-4338d313567c",
//   "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// },
// {
//   "id": 45,
//   "name": "VM's Mysore Pak",
//   "description": "Rich ghee-laden Mysore Pak, soft and grainy.",
//   "price": 100,
//   "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%2FBanaan%20Delight.jpg?alt=media&token=fade5faf-29d3-49f5-afaf-230ed460f19a",
//   "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// },
// {
//   "id": 46,
//   "name": "VM's Rasayana",
//   "description": "Banana-based sweet dish with jaggery and coconut.",
//   "price": 70,
//   "img": "upload-url-here.jpg",
//   "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// },
{
  "id": 47,
  "name": "Shunti Barfi (ಶುಂಠಿ ಬರ್ಫಿ)",
  "description": "Spicy and sweet ginger-based traditional burfi.",
  "price": 15,
  "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%2FGinger%20Barfi.jpg?alt=media&token=2e0bc46d-f00c-4231-b97a-c7652028f060",
  "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
},
{
  "id": 48,
  "name": "Horlicks Barfi(ಹಾರ್ಲಿಕ್ಸ್ ಬರ್ಫಿ)",
  "description": "Spicy and sweet ginger-based traditional burfi.",
  "price": 17,
  "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2FHorlicksBurfi.webp?alt=media&token=0dfd14fa-6482-495f-b6bb-b322ffe0bba7",
  "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
},
{
  "id": 49,
  "name": "Borvita Barfi(ಬೋರ್ವಿಟಾ ಬರ್ಫಿ)",
  "description": "Spicy and sweet ginger-based traditional burfi.",
  "price": 17,
  "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2FBorvita%20Barfi.jpg?alt=media&token=3a2b1539-51fd-4da3-980a-428efe9b5221",
  "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
},
{
  "id": 50,
  "name": " Chocolate Barfi(ಚಾಕೊಲೇಟ್ ಬರ್ಫಿ)",
  "description": "Spicy and sweet ginger-based traditional burfi.",
  "price": 17,
  "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%2FGinger%20Barfi.jpg?alt=media&token=2e0bc46d-f00c-4231-b97a-c7652028f060",
  "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
},
{
  "id": 51,
  "name": " Balehanina Barfi(ಬಾಲೇಹನಿನ ಬರ್ಫಿ)",
  "description": "Balehanina Barfi is a sweet made from bale fruit pulp, sugar, ghee, and milk. It has a rich, sweet flavor and a smooth texture",
  "price": 17,
  "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Sweets%203%2FBanana%20Barfi.jpg?alt=media&token=92b0f4cc-4865-485e-8de0-8ba230476ea4",
  "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
},
// {
//   "id": 48,
//   "name": "Tulsi Honey Balls",
//   "description": "Immunity-boosting bites with tulsi and pure honey.",
//   "price": 60,
//   "img": "upload-url-here.jpg",
//   "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// },
// {
//   "id": 49,
//   "name": "Kadlekai Unde",
//   "description": "Peanut jaggery balls with nostalgic village flavor.",
//   "price": 40,
//   "img": "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/sweets%2FKadle%20unde.jpg?alt=media&token=272e86a8-d920-46c5-bec4-8e2099e3b082",
//   "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
// },
  
//     {
//       "id": 50,
//       "name": "VM's Chiroti",
//       "description": "Crispy layered sweet sprinkled with powdered sugar.",
//       "price": 90,
//       "img": "upload-url-here.jpg",
//       "days": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
//     }
  ],
  'menu-breakfast': [
      { id: 1, name: "Idli Vada", description: "Toasted bread with fresh tomatoes, garlic, basil, and olive oil", price: 40, img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Breakfast%2Fidlivada.png?alt=media&token=8f7f0758-4187-4f4c-8178-7fc66b520625", days: ['Monday','Tuesday','Wednesday','Thursday' ,'Friday','Saturday','Sunday'] },
    { id: 2, name: "Idli(ಇಡ್ಲಿ)", description: "One plate of idli contains 3 idlis, served with chutney and sambar", price: 40, img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Breakfast%2Fidli.webp?alt=media&token=75ca7045-7e93-4fd8-920d-c1e705ead301", days: ['Monday','Tuesday','Wednesday','Thursday' ,'Friday','Saturday','Sunday'] },
    { id: 3, name: "Vada(ವಡಾ)", description: "A crispy, fried lentil doughnut-like snack, often served with chutneyand Sambar.", price: 35, img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Breakfast%2FVada.jpeg?alt=media&token=e97ef510-e991-4c6b-9575-724943cbb67e", days: ['Monday','Tuesday','Wednesday','Thursday' ,'Friday','Saturday','Sunday'] },
    { id: 4, name: "Buns(ಬನ್ಸ್)", description: "Soft, round bread rolls, commonly enjoyed as a snack or with meals.", price: 30, img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Breakfast%2FBuns.jpg?alt=media&token=9ee14da0-c4e8-4947-bf5d-bb43f37e5101", days: ['Monday','Tuesday','Wednesday','Thursday' ,'Friday','Saturday','Sunday'] },
     { id: 6, name: "Avalaki(ಅವಲಕ್ಕಿ)", description: " A savory dish made from flattened rice cooked with spices and vegetables.", price: 25, img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Breakfast%2FAvalaki.jpg?alt=media&token=84fc56f5-4fd5-48d1-a9c4-5fc8c0c22dbf", days: ['Monday','Tuesday','Wednesday','Thursday' ,'Friday','Saturday','Sunday'] },
    { id: 5, name: "Upitu(ಉಪಿಟ್ಟು)", description: "Chilled jumbo shrimp with zesty cocktail sauce", price: 25, img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Breakfast%2Fupitu.jpg?alt=media&token=3beff09d-0546-43f6-9eeb-02d323152be1", days: ['Monday','Tuesday','Wednesday','Thursday' ,'Friday','Saturday','Sunday'] },
    { id: 6, name: "Kesari Bath(ಕೇಸರಿಬಾತ್)", description: " A sweet, rich semolina dessert flavored with ghee, saffron, and cardamom.", price: 25, img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Breakfast%2FKesari%20Bath.jpg?alt=media&token=3c3ac7c0-e019-4dbc-8b6c-3c5fedc5f368", days: ['Monday','Tuesday','Wednesday','Thursday' ,'Friday','Saturday','Sunday'] },
   
  ],
  'menu-lunch': [
    { id: 14, name: "Simple Meal( ಸಿಂಪಲ್ ಮೀಲ್)", description: "Simple meal: Served with salt, pickle chutney, vegetable curry, rice, sambar, curry, fried snack, payasa , and buttermilk.", price: 80, img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Meal%2Fsimple%20Meal%201.webp?alt=media&token=a743c15b-57d1-41ec-80a2-d1658dc0276c", days: ['Monday','Tuesday','Wednesday','Thursday' ,'Friday','Saturday','Sunday'] },
    { id: 15, name: "Sweat Meal(ಸ್ವೀಟ್ ಮೀಲ್)", description: "Served with salt, pickle chutney, vegetable curry, rice, sambar, curry, fried snack, payasa, buttermilk, and sweet.", price: 99, img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Meal%2FSweet%20Meal.jpg?alt=media&token=4e5dd84d-0c23-4a85-bd73-2d09af9ea9b6", days: ['Monday','Tuesday','Wednesday','Thursday' ,'Friday','Saturday','Sunday'] },
    { id: 16, name: "Special Meal(ಸ್ಪೆಷಲ್ ಮೀಲ್) ", description: "Special meal: Served with salt, pickle chutney, vegetable curry, rice, sambar, curry, fried snack, payasa (sweet dish), buttermilk, sweet, and one special item.", price: 150, img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Meal%2FSpecial%20meal.avif?alt=media&token=1ff54b27-8fec-44f9-811d-c47d49fcb646", days: ['Monday','Tuesday','Wednesday','Thursday' ,'Friday','Saturday','Sunday'] },
  ],
  'menu-dinner': [
   { id: 1, name: "Chakuli(ಚಕ್ಕುಲಿ)", description: "Toasted bread with fresh tomatoes, garlic, basil, and olive oil", price: 50,  "unit": "per pack", img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Snacks%2FChakkuli.jpg?alt=media&token=a9dc90cf-5ebc-4e2f-bfe1-d283d1427841",
     days: ['Monday','Tuesday', 'Wednesday','Thursday','Friday','Saturday','Sunday'] },
    { id: 2, name: "Jolladh mixture(ಜೋಳದ ಮಿಕ್ಸ್ಚರ್)", description: "Jolladh mixture is a spicy and crunchy snack made from puffed jowar (sorghum) mixed , peanuts, and spices.", price: 340,"unit": "per kg", img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Snacks%2FJolladh%20Mixture.jpg?alt=media&token=c57c7b9e-1e9c-4e03-8f5b-dc4d146dfa4a", days: ['Monday','Tuesday', 'Wednesday','Thursday','Friday','Saturday','Sunday'] },
    { id: 3, name: "Rich Mixture(ರಿಚ್ ಮಿಕ್ಸ್ಚರ್)", description: "Rich Mixture is a premium, flavorful Indian snack made with a variety of fried ingredients like sev, boondi, nuts, curry leaves, and spices.", price: 410,"unit": "per kg", img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Snacks%2FRich%20Mixture.webp?alt=media&token=03307189-c990-4a41-b53b-c42d13e8ccdf", days: ['Monday','Tuesday', 'Wednesday','Thursday','Friday','Saturday','Sunday'] },
    { id: 4, name: "Thengoli(ತೆಂಗೋಳಿ)", description: "Mushroom caps filled with seasoned breadcrumbs and cheese", price: 50,"unit": "per pack", img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Snacks%2FThenglu.png?alt=media&token=4c87d032-50fb-41c4-b207-0b1ead5240d8", days: ['Thursday', 'Tuesday'] },
    { id: 5, name: "Bene Murka(ಬೆನೆ ಮುರ್ಕಾ)", description: "Chilled jumbo shrimp with zesty cocktail sauce", price: 60,"unit": "per pack", img: "upitu.jpg", days: ['Friday', 'Monday'] },
    { id: 6, name: "Kodubele(ಕೊಡುಬೇಲೆ )", description: "is a traditional South Indian snack made from rice flour and black gram flour, deep-fried into crispy, ring-shaped delights, often flavored with spices.", price: 50,"unit": "per pack", img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Snacks%2FKodu%20Bele.jpg?alt=media&token=ef166b76-e8ce-4ca8-b171-cd7f63964897", days: ['Monday','Tuesday', 'Wednesday','Thursday','Friday','Saturday','Sunday'] },
     { id: 7, name: "Shankar Pali ( ಶಂಕರ ಪಲಿ)", description: "Shankar Pali is a crispy, sweet and savory snack made from wheat flour, sugar, and ghee, often flavored with cardamom and deep-fried.", price: 60,"unit": "per pack", img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Snacks%2FSHankar%20Palli.jpg?alt=media&token=f8e5c7b1-3b04-4f86-bdc6-da778ad4c4fd", days: ['Monday','Tuesday', 'Wednesday','Thursday','Friday','Saturday','Sunday'] },
      { id: 8, name: "Kara Godambi(ಕಾರಾ ಗೋಡಂಬಿ )", description: "is a savory snack made from roasted wheat or rice flour, seasoned with spices, and deep-fried until crispy.", price: 95,"unit": "per pack", img: "https://firebasestorage.googleapis.com/v0/b/authentication-5c66e.appspot.com/o/Snacks%2FKara%20Godambi.jpg?alt=media&token=9cd59263-c913-46d9-8471-e14b7aa025a9", days: ['Monday','Tuesday', 'Wednesday','Thursday','Friday','Saturday','Sunday'] },

  ],
};

// Category availability times
export const categoryAvailabilityTimes = {
  'menu-starters': { available: true, message: 'Available 24/7' },
  'menu-breakfast': { 
    start: 5, // 5:00 AM
    end: 13,  // 11:00 AM
    message: 'Available 5:00 AM - 11:00 AM'
  },
  'menu-lunch': { 
    start: 11, // 11:00 AM
    end: 17,   // 5:00 PM
    message: 'Available 11:00 AM - 5:00 PM'
  },
  'menu-dinner': { 
    start: 17, // 5:00 PM
    end: 5,    // 5:00 AM next day
    message: 'Available 5:00 PM - 5:00 AM'
  }
};

// Helper functions for menu management

/**
 * Determines which categories are available based on current time
 * @returns {Array} Array of available category IDs
 */
export const getAvailableCategories = () => {
  const currentHour = new Date().getHours();
  // Always include starters in available categories
  let available = ['menu-starters']; 
  
  // Morning (5am-11am): Breakfast is available
  if (currentHour >= 5 && currentHour < 13) {
    available.push('menu-breakfast');
  } 
  // Afternoon (11am-5pm): Lunch is available
  else if (currentHour >= 11 && currentHour < 17) {
    available.push('menu-lunch');
  } 
  // Evening/Night (5pm-5am): Dinner is available
  else {
    available.push('menu-dinner');
  }
  
  return available;
};

/**
 * Gets the current day of the week
 * @returns {String} Current day name (Monday, Tuesday, etc.)
 */
export const getCurrentDayOfWeek = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[new Date().getDay()];
};

/**
 * Gets information about current time period
 * @returns {Object} Contains time and message about current meal period
 */
export const getCurrentTimeInfo = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  
  let timeMessage = '';
  if (hours >= 5 && hours < 11) {
    timeMessage = 'Breakfast time';
  } else if (hours >= 11 && hours < 17) {
    timeMessage = 'Lunch time';
  } else {
    timeMessage = 'Dinner ';
  }
  
  return { time: formattedTime, message: timeMessage };
};

/**
 * Merges database items with hardcoded base menu items
 * @param {Array} dbItems - Menu items fetched from database
 * @param {String} currentDay - Current day of week
 * @returns {Object} Combined menu items filtered by day
 */
export const getDaySpecificMenuItems = (dbItems = [], currentDay = getCurrentDayOfWeek()) => {
  // Start with base menu items
  const allMenuItems = JSON.parse(JSON.stringify(baseMenuItems));

  // Merge DB items with hardcoded items
  dbItems.forEach(dbItem => {
    // Determine which category to add this to
    const category = dbItem.category;  // This should match schema: menu-breakfast, menu-lunch, etc.
    
    if (allMenuItems[category]) {
      // Check if this item already exists in our hardcoded items (by id)
      const existingItemIndex = allMenuItems[category].findIndex(item => item.id === dbItem.id);
      
      if (existingItemIndex !== -1) {
        // Update existing item
        allMenuItems[category][existingItemIndex] = {
          ...dbItem,
          // Make sure days is an array
          days: Array.isArray(dbItem.days) ? dbItem.days : JSON.parse(dbItem.days || '[]')
        };
      } else {
        // Add new item
        allMenuItems[category].push({
          ...dbItem,
          // Make sure days is an array
          days: Array.isArray(dbItem.days) ? dbItem.days : JSON.parse(dbItem.days || '[]')
        });
      }
    }
  });

  // Filter the menu items based on the current day
  const filteredMenuItems = {};
  Object.keys(allMenuItems).forEach(category => {
    filteredMenuItems[category] = allMenuItems[category].filter(item => 
      item.days && item.days.includes(currentDay)
    );
  });

  return filteredMenuItems;
};