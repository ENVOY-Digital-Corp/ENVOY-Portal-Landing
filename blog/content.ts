export type BlogContentType = {
  pages: {
    [key: string]: {
      imageSrc: string
      imageAlt: string
      title: string
      description: string
      date: string
      path: string
      categories: string[]
    }
  }
  highlights: string[]
}

const content: BlogContentType = {
  pages: {
    "eternal-crypt": {
      title: `Eternal Crypt - Wizardry BC - signs partnership with Southeast Asia game guild 
" Garuda Guild Games "`,
      description:
        "Eternal Crypt - Wizardry BC -'' is a blockchain game being developed jointly with Thuringham Co., Ltd. (Headquarters: Minato-ku, Tokyo, Representative Director: Hiroki Tahara, hereinafter referred to as Thuringham'') using the Wizardry'' IP. has entered into a partnership with the Southeast Asian gaming guild \"Garuda Guild Games.\"",
      date: "2023-10-21T00:00:00.000Z",
      categories: ["Partnerships", "Games"],
      imageSrc: "/blog-eternal-crypt.png",
      imageAlt:
        "Eternal Crypt - Wizardry BC - signs partnership with Southeast Asia game guild",
      path: "/blog/eternal-crypt-wizardry-bc-signs-partnership-with-southeast-asia-game-guild-garuda-guild-games",
    },
    "indodax-x-envoy-portal": {
      title:
        "Indodax and EnvoyPortal.com Unite for a Revolutionary Crypto Collaboration",
      description:
        "We are thrilled to tell you about our collaboration with Indodax, one of Indonesia's leading exchange platforms. With the greatest rates, seamless transactions, unrivaled safety, and complete control over digital assets, this innovative partnership will completely transform the cryptocurrency experience.",
      date: "2023-11-22T00:00:00.000Z",
      categories: ["Partnerships", "Games"],
      imageSrc: "/partner-indo-dax.webp",
      imageAlt: "partner-indo-dax",
      path: "/blog/indodax-and-envoyportalcom-unite-for-a-revolutionary-crypto-collaboration",
    },
    "envoy-portals-revolution": {
      title:
        "Envoy Portal's Revolution: Unveiling the Game-Changing Features Redefining Crypto Transactions",
      description:
        "In the ever-evolving world of cryptocurrencies, Envoy Portal has emerged as a beacon of innovation, introducing groundbreaking features that revolutionize the way individuals interact with digital assets. With a focus on non-custodial, seamless, and fast transactions, Envoy Portal has unleashed a suite of features that redefine the crypto landscape.",
      date: "2023-11-22T01:00:00.000Z",
      categories: ["Partnerships", "Games"],
      imageSrc: "/partner-indo-dax.webp",
      imageAlt: "partner-indo-dax",
      path: "/blog/envoy-portals-revolution-unveiling-the-game-changing-features-redefining-crypto-transactions",
    },
    "revolutionizing-the-cryptocurrency-landscape-envoy-corp-seamless-solutions": {
      title:
        "Revolutionizing the Cryptocurrency Landscape: Envoy Corp Seamless Solutions",
      description:
        "Envoy stands out as a solution provider in the rapidly changing world of cryptocurrencies and blockchain technology, offering solutions to the various problems that guilds, developers, and consumers in the Web3 ecosystem confront. Envoy aims to transform the cryptocurrency field by thoroughly comprehending the obstacles that it faces.",
      date: "2023-11-22T02:00:00.000Z",
      categories: ["Partnerships", "Games"],
      imageSrc: "/partner-indo-dax.webp",
      imageAlt: "partner-indo-dax",
      path: "/blog/revolutionizing-the-cryptocurrency-landscape-envoy-corp-seamless-solutions",
    },
  },
  highlights: [
    "indodax-x-envoy-portal",
    "envoy-portals-revolution",
    "revolutionizing-the-cryptocurrency-landscape-envoy-corp-seamless-solutions"
  ],
}

export default content
