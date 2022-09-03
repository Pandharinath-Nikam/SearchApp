var express = require("express");
const bodyParser = require("body-parser");

var app = express();
var cors = require("cors");
var PORT = 5000;
let ads = [
  {
    companyId: "1",
    name: "Puma",
    primaryText: "We Like Where you're going",
    headline: "Relaxed Fit Men's Jeans",
    description: "Men's Favourite Jeans Brand",
    CTA: "Shop Now",
    imageUrl:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/847897/03/mod01/fnd/IND/fmt/png/PUMA-Graphic-Men's-Pants",
  },
  {
    companyId: "2",
    name: "Levi's",
    primaryText: "Teva x Cotopaxi is Back !",
    headline: "Levi's Women's Graphic T-Shirt",
    description:
      "Give off a breezy weekend vibe by wearing the Levi's brilliant white logo printed t-shirt. This regular fit premium material t-shirt has a crew neck and short sleeves.",
    CTA: "Shop Now",
    imageUrl:
      "https://www.levi.in/dw/image/v2/BBRC_PRD/on/demandware.static/-/Sites-LeviMaster-Catalog/en_IN/dw9fef662d/images/hi-res/237710270/237710270_01_Front.jpg?sw=451&sh=600",
  },
  {
    companyId: "3",
    name: "Salesforce",
    primaryText: "The World's leading CRM",
    headline: "salesforce for small business",
    description: "Small business leading CRM",
    CTA: "Sign Up",
    imageUrl:
      "https://www.salesforce.com/content/dam/web/en_us/www/images/industries/media/media-family-media-crm-software.png",
  },
  {
    companyId: "4",
    name: "Adidas",
    primaryText: "Big Logo Frech Terry Hoodie",
    headline: "Adidas Hoodie",
    description:
      "A hoodie isn't just about physical comfort though that's a big part of it. there's something about the mental state it switches you into when you pull it on.",
    CTA: "Shop Now",
    imageUrl:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/510981c5dbad4bc0bd52ae21008cd445_9366/BIG_LOGO_FRENCH_TERRY_HOODIE_Blue_HA5642_21_model.jpg",
  },
  {
    companyId: "5",
    name: "Nike",
    primaryText: "Men's Short-Sleeve Running Top",
    headline: "Nike Dri-FIT Miler D.Y.E.",
    description: " It still has a soft, light and breathable feel,.",
    CTA: "Shop Now",
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/017a3069-c49c-4fdd-b450-7fe252b7d5ae/dri-fit-miler-dye-mens-short-sleeve-running-top-rvt5D2.png",
  },
  {
    companyId: "6",
    name: "Cotopaxi",
    primaryText: "Choose Your Pack",
    headline: "Bogota 20L BACKPACK - DEL DÍA.",
    description:
      "Intelligent organizer pockets and an internal laptop sleeve keep your essentials in order whether you're traversing city streets or rugged trails.",
    CTA: "Shop Now",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0281/7544/t/59/assets/bogota-20-choice-bg-featured_872x.progressive.jpg?v=84019248248215027691631754181",
  },
  {
    companyId: "7",
    name: "Netflix",
    primaryText: "Watch anywhere. Cancel anytime",
    headline: "Enjoy on your TV.",
    description:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    CTA: "Subscribe Now",
    imageUrl:
      "https://cdn.urbantecno.com/urbantecno/2022/05/Hay-una-distancia-optima-en-la-que-deberias-ubicarte-con-respecto-a-tu-TV-para-disfrutar-el-contenido-en-4K.jpg?width=1200",
  },
  {
    companyId: "8",
    name: "Colgate",
    primaryText: "Colgate Visible White O2",
    headline: "Sparking optimism in everyone, everyday.",
    description:
      "Learn more about Colgate's journey to fill the world with optimism, sustainability and healthy smile",
    CTA: "Shop Now",
    imageUrl:
      "https://www.colgate.com/content/dam/cp-sites/oral-care/oral-care-center/en-in/general/heros/colgate-visible-white-02.png.rendition.519.685.png",
  },
  {
    companyId: "9",
    name: "Valentino",
    primaryText: "COMPLIMENTARY EXPRESS SHIPPING",
    headline: "VLOGO CHAIN SLINGBACK PUMP IN NAPPA 50MM",
    description: "Valentino Garavani VLogo Chain slingback pump in napp",
    CTA: "Shop Now",
    imageUrl:
      "https://www.valentino.com/variants/images/1647597278066628/F/w750.jpg",
  },
  {
    companyId: "10",
    name: "Curology",
    primaryText: "Personalized by experts for clinically-proven results",
    headline: "Full-service skincare starts here",
    description:
      "Full-service skincare starts here Personalized by experts for clinically-proven results",
    CTA: "Order Now",
    imageUrl:
      "https://curology.com/static/cdd446871f1e1f213a91a3065ebb960d/faa3f/headerDesktop%402x.jpg",
  },
  {
    companyId: "11",
    name: "Purple",
    primaryText: "20% off",
    headline: "Purple Sheets",
    description:
      "Your mattress moves to adapt to your body, but normal sheets don’t do the same. That's why we created innovative sheets that stretch, allowing you to experience the full comfort and support of your bed.",
    CTA: "Shop Now",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT071LlGP1VlbxWEiSaB-pBHf4bS1nWA2gJPw&usqp=CAU",
  },
];
app.use(bodyParser.json());

app.use(cors());
app.get("/", (req, res) => {
  const { q } = req.query;
  console.log(q);

  const keys = [
    "name",
    "companyId",
    "headline",
    "description",
    "CTA",
    "primaryText",
  ];

  const search = (data) => {
    return data.filter((ele) =>
      keys.some((key) => ele[key].toLowerCase().includes(q))
    );
  };
  res.status(200).send(search(ads));
});
app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");

  console.log("Server listening on Port", PORT);
});
