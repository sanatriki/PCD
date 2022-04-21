import faker from '@faker-js/faker';
import niceColors from 'nice-color-palettes'
faker.seed(1);

const colors = [
    ...niceColors[1].slice(1,niceColors[1].length),
    ...niceColors[55].slice(0,3),
];

const data = [
    {
        //STRESS
        id: 1,
        image : require('../images/stresse1.png'),
    },
    {
        //ANXIETY
        id: 2,
        image: require('../images/anxiete1.png')
    },
    {
        //DEPRESSION
        id: 3,
        image: require('../images/dépression1.png'),
    }
];

export const Emojies = [
    { 
        id:4,
        image: require('../images/normal.png') 
    },
    { 
        id:5,
        image: require('../images/légère.png') 
    },
    { 
        id:6,
        image: require('../images/modéré.png') 
    },
    { 
        id:7,
        image: require('../images/sévére.png') 
    },
    { 
        id:8,
        image: require('../images/extrêmeSévére.png') 
    },
];

export default data.map((item,index) => ({
    ...item,
    key:  faker.datatype.uuid(),
    color: colors[index % colors.length],
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    categories: [...Array(3).keys()].map(() => {
        return {
            key:  faker.datatype.uuid(),
            title: faker.name.jobTitle(),
            subcats: [...Array(3).keys()].map(faker.name.jobTitle),
        };
    })
}))