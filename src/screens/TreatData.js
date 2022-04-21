import niceColors from 'nice-color-palettes'

const colors = [
    ...niceColors[1].slice(1, niceColors[1].length),
    ...niceColors[55].slice(0, 3),
];

const TreatmentsType = [
    //Books
    {
        id: 1,
        image: require('../images/2.png'),
        title: 'Livres'
    },
    //Music
    {
        id: 2,
        image: require('../images/4.png'),
        title: 'Musiques'
    },
    //Positive activities
    {
        id: 3,
        image: require('../images/1.png'),
        title: 'Activités'
    },
    //Vidéos
    {
        id: 4,
        image: require('../images/6.png'),
        title: 'Vidéos'
    }
]