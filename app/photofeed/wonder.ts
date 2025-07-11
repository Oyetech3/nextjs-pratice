export type wonderImage = {
    id: number;
    title: string;
    description: string;
    imageUrl: string
    location: string;
    dateVisited: Date;
}

const wondersImages : wonderImage[] = [
    {
        id: 1,
        title: "Eiffel Tower",
        description: "The Eiffel Tower is an iron lattice tower on the Champ de Mars in Paris, France.",
        imageUrl: "/photos/albarka1.JPG",
        location: "Paris, France",
        dateVisited: new Date("2022-06-15"),
    },
    {
        id: 2,
        title: "Great Wall of China",
        description: "The Great Wall of China is a series of fortifications that stretch across northern China.",
        imageUrl: "/photos/albarka2.JPG",
        location: "China",
        dateVisited: new Date("2021-09-10"),
    },
    {
        id: 3,
        title: "Machu Picchu",
        description: "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru.",
        imageUrl: "/photos/albarka3.JPG",
        location: "Peru",
        dateVisited: new Date("2020-12-05"),
    },
    {
        id: 4,
        title: "Taj Mahal",
        description: "The Taj Mahal is an Islamic ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra.",
        imageUrl: "/photos/albarka4.JPG",
        location: "Agra, India",
        dateVisited: new Date("2019-03-20"),
    },
    {
        id: 5,
        title: "Colosseum",
        description: "The Colosseum is an ancient amphitheater located in the center of Rome, Italy.",
        imageUrl: "/photos/albarka5.JPG",
        location: "Rome, Italy",
        dateVisited: new Date("2018-08-12"),
    },
    {
        id: 6,
        title: "Christ the Redeemer",
        description: "Christ the Redeemer is an iconic statue of Jesus Christ in Rio de Janeiro, Brazil.",
        imageUrl: "/photos/albarka6.JPG",
        location: "Rio de Janeiro, Brazil",
        dateVisited: new Date("2017-11-25"),
    },  
    {
        id: 7,
        title: "Petra",
        description: "Petra is a historical and archaeological city in southern Jordan, famous for its rock-cut architecture.",
        imageUrl: "/photos/albarka7.JPG",
        location: "Jordan",
        dateVisited: new Date("2016-07-30"),
    },
    {
        id: 8,
        title: "Chichen Itza",
        description: "Chichen Itza is a large pre-Columbian archaeological site built by the Maya civilization in Mexico.",
        imageUrl: "/photos/albarka8.JPG",
        location: "Mexico",
        dateVisited: new Date("2015-04-18"),
    },

]

export default wondersImages