import handmaiden from './img/handmaiden.jpg'
import eeaao from './img/eeaao.jpeg'
import moonlight from './img/moonlight.jpg'
import barbie from './img/barbie.jpg'
import carol from './img/carol.jpg'
import carolp from './img/carolp.jpg'
import hs from './img/hs.jpeg'
import hsp from './img/hsp.jpg'
import barbiep from './img/barbiep.jpg'
import thmp from './img/thmp.jpg'
import eeaaop from './img/eeaaop.jpg'
import moonlightp from './img/moonlightp.jpg'

    function photoChange (x,y) {
        if(window.innerWidth > 600) {
            return x
        } else {
            return y
        }
    }

const movieBannerData = [
    {
        id: 1,
        title: 'The Handmaiden',
        img: `${photoChange(handmaiden, thmp)}`,
        overview: 'A woman is hired as a handmaiden to a Japanese heiress, but secretly she is involved in a plot to defraud her.',
        videoUrl: 'https://www.youtube.com/watch?v=whldChqCsYk',
    },
    {
        id: 2,
        title: 'Everything Everywhere All At Once',
        img: `${photoChange(eeaao, eeaaop)}`,
        overview: 'An aging Chinese immigrant is swept up in an insane adventure, in which she alone can save the world by exploring other universes connecting with the lives she could have led.',
        videoUrl: 'https://www.youtube.com/watch?v=wxN1T1uxQ2g',
    },
    {
        id: 3,
        title: 'Moonlight',
        img: `${photoChange(moonlight, moonlightp)}`,
        overview: 'A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.',
        videoUrl: 'https://www.youtube.com/watch?v=9NJj12tJzqc',
    },
    {
        id: 4,
        title: 'Barbie',
        img: `${photoChange(barbie, barbiep)}`,
        overview: 'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
        videoUrl: 'https://www.youtube.com/watch?v=pBk4NYhWNMM',
    },
    {
        id: 5,
        title: 'Carol',
        img: `${photoChange(carol, carolp)}`,
        overview: "An aspiring photographer develops an intimate relationship with an older woman in 1950s New York.",
        videoUrl: 'https://www.youtube.com/watch?v=EH3zcuRQXNo',
    },
    {
        id: 6,
        title: 'Happiest Season',
        img: `${photoChange(hs, hsp)}`,
        overview: "A holiday romantic comedy that captures the range of emotions tied to wanting your family's acceptance, being true to yourself, and trying not to ruin Christmas by revealing a nasty secret.",
        videoUrl: 'https://www.youtube.com/watch?v=h58HkQV1gHY',
    }
]

export default movieBannerData