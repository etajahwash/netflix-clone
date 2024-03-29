import cleaning from './img/cleaning.jpg'
import clp from './img/clp.jpg'
import bridgerton from './img/bridgerton.jpg'
import bgtp from './img/bgtp.jpg'
import euphoria from './img/euphoria.jpg'
import epp from './img/epp.jpg'
import hotd from './img/hotd.jpg'
import hotdp from './img/hotdp.jpg'
import hbm from './img/hbm.jpeg'
import hbmp from './img/hbmp.jpg'
import gap from './img/gap.jpg'
import gapp from './img/gapp.png'

function photoChange (x,y) {
    if(window.innerWidth > 600) {
        return x
    } else {
        return y
    }
}

const tvBannerData = [
    {
        id: 1,
        title: 'The Cleaning Lady',
        img: `${photoChange(cleaning, clp)}`,
        overview: 'A whip-smart doctor comes to the U.S. for a medical treatment to save her ailing son. But when the system fails and pushes her into hiding, she refuses to be beaten down and marginalized. Instead, she becomes a cleaning lady for the mob and starts playing the game by her own rules.',
        videoUrl: 'https://www.youtube.com/watch?v=DZRRfMHxdAw',
    },
    {
        id: 2,
        title: 'Bridgerton',
        img: `${photoChange(bridgerton, bgtp)}`,
        overview: 'Wealth, lust, and betrayal set against the backdrop of Regency-era England, seen through the eyes of the powerful Bridgerton family.',
        videoUrl: 'https://www.youtube.com/watch?v=gpv7ayf_tyE',
    },
    {
        id: 3,
        title: 'Euphoria',
        img: `${photoChange(euphoria, epp)}`,
        overview: 'A look at life for a group of high school students as they grapple with issues of drugs, sex, and violence.',
        videoUrl: 'https://www.youtube.com/watch?v=UR4Pxgnm-GA',
    },
    {
        id: 4,
        title: 'House of the Dragon',
        img: `${photoChange(hotd, hotdp)}`,
        overview: 'An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.',
        videoUrl: 'https://www.youtube.com/watch?v=DotnJ7tTA34',
    },
    {
        id: 5,
        title: 'The Haunting of Bly Manor',
        img: `${photoChange(hbm, hbmp)}`,
        overview: "After an au pair's tragic death, Henry hires a young American nanny to care for his orphaned niece and nephew who reside at Bly Manor with the chef Owen, groundskeeper Jamie and housekeeper, Mrs. Grose.",
        videoUrl: 'https://www.youtube.com/watch?v=08ZYXHNbaOw',
    },
    {
        id: 6,
        title: 'Gap The Series',
        img: `${photoChange(gap, gapp)}`,
        overview: "Long after Sam first came to Mon's rescue when they were kids, Sam is unambiguously Mon's idol. In order to be near her, Mon gets a job working under her. When they finally meet again at the office, Mon is surprised by her icy exterior, so different from the image she'd had of her and what she herself wants to be.",
        videoUrl: 'https://www.youtube.com/watch?v=f7Kso0QOaiE',
    }
]

export default tvBannerData