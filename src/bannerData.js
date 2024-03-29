import akame from './img/akamegakill.png'
import akamep from './img/akamep.jpg'
import csman from './img/csman.jpg'
import csmanp from './img/csmanp.jpg'
import bleach from './img/bleach.jpg'
import bleachp from './img/bleachp.jpg'
import inu from './img/inu.jpg'
import inup from './img/inup.jpg'
import jjk from './img/jjk.jpg'
import jjkp from './img/jjkp.jpeg'
import jjk2 from './img/jjk2.jpg'
import jjk2p from './img/jjk2p.jpg'
import shieldHero from './img/shieldHero.png'
import shieldHerop from './img/shieldHerop.jpg'
import spyx from './img/spy.jpg'
import spyxp from './img/spyp.jpg'
import tpn from './img/tpn.jpg'
import tpnp from './img/tpnp.jpg'
import sk8 from './img/sk8.jpg'
import sk8p from './img/sk8p.jpg'
import ds from './img/ds.jpg'
import dsp from './img/dsp.jpg'
import castlevania from './img/castlevania.jpg'
import casp from './img/casp.jpg'
import aot from './img/aot.jpg'
import aotp from './img/aotp.jpg'
import mdzs from './img/mdzs.jpg'
import mdzsp from './img/mdzsp.jpg'

function photoChange (x,y) {
    if(window.innerWidth > 600) {
        return x
    } else {
        return y
    }
}


const bannerData = [
    {
        id: 1,
        title: 'Akame Ga Kill',
        img: `${photoChange(akame, akamep)}`,
        overview: 'The story focuses on Tatsumi, a young villager who travels to the Capital to raise money for his home only to discover strong corruption in the area. The assassin group known as Night Raid recruits the young man to help them in their fight against the corrupt Empire.',
        videoUrl: 'https://www.youtube.com/watch?v=sCGWxQuSoDU',
    },
    {
        id: 2,
        title: 'Chainsaw Man',
        img: `${photoChange(csman, csmanp)}`,
        overview: 'Following a betrayal, a young man left for the dead is reborn as a powerful devil-human hybrid after merging with his pet devil and is soon enlisted into an organization dedicated to hunting devils.',
        videoUrl: 'https://www.youtube.com/watch?v=j9sSzNmB5po',
    },
    {
        id: 3,
        title: 'Bleach',
        img: `${photoChange(bleach, bleachp)}`,
        overview: 'High school student Ichigo Kurosaki, who has the ability to see ghosts, gains soul reaper powers from Rukia Kuchiki and sets out to save the world from "Hollows".',
        videoUrl: 'https://www.youtube.com/watch?v=fzR82oXbjnY',
    },
    {
        id: 4,
        title: 'Inuyasha',
        img: `${photoChange(inu, inup)}`,
        overview: 'A teenage girl periodically travels back in time to feudal Japan to help a young half-demon recover the shards of a jewel of great power.',
        videoUrl: 'https://www.youtube.com/watch?v=TsPWVmesFS8',
    },
    {
        id: 5,
        title: 'JUJUTSU KAISEN',
        img: `${photoChange(jjk, jjkp)}`,
        overview: "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.",
        videoUrl: 'https://www.youtube.com/watch?v=pkKu9hLT-t8',
    },
    {
        id: 6,
        title: 'The Rising of the Shield Hero',
        img: `${photoChange(shieldHero, shieldHerop)}`,
        overview: 'A gamer is magically summoned into a parallel universe, where he is chosen as one of four heroes destined to save the world from its prophesied doom.',
        videoUrl: 'https://www.youtube.com/watch?v=rKnyi3TRznA',
    },
    {
        id: 7,
        title: 'SPY x FAMILY',
        img: `${photoChange(spyx, spyxp)}`,
        overview: 'A spy on an undercover mission gets married and adopts a child as part of his cover. His wife and daughter have secrets of their own, and all three must strive to keep together.',
        videoUrl: 'https://www.youtube.com/watch?v=ofXigq9aIpo',
    },
    {
        id: 8,
        title: 'JUJUTSU KAISEN',
        img: `${photoChange(jjk2, jjk2p)}`,
        overview: "Dive in into th Hidden Inventory/Premature Death Arc of Jujutsu Kaisen, which looks back at Satoru Gojo's time as a student at Tokyo Jujutsu High.",
        videoUrl: 'https://www.youtube.com/watch?v=Ig89Ot0UfvE',
    },
    {
        id: 9,
        title: 'Demon Slayer',
        img: `${photoChange(ds, dsp)}`,
        overview: 'A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.',
        videoUrl: 'https://www.youtube.com/watch?v=VQGCKyvzIM4',
    },
    {
        id: 10,
        title: 'SK8 the Infinity',
        img: `${photoChange(sk8, sk8p)}`,
        overview: 'High school students Reki and Langa are hooked on a dangerous, top secret, no-holds-barred downhill skateboarding race called “S.”',
        videoUrl: 'https://www.youtube.com/watch?v=eUHMO2VMolU',
    },
    {
        id: 11,
        title: 'Castlevania',
        img: `${photoChange(castlevania, casp)}`,
        overview: 'A vampire hunter fights to save a besieged city from an army of otherworldly creatures controlled by Dracula.',
        videoUrl: 'https://www.youtube.com/watch?v=m3jNb7IdJHQ',
    },
    {
        id: 12,
        title: 'Attack on Titan',
        img: `${photoChange(aot, aotp)}`,
        overview: 'After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.',
        videoUrl: 'https://www.youtube.com/watch?v=bT9csxkth8g',
    },
    {
        id: 13,
        title: 'Mo Dao Zu Shi',
        img: `${photoChange(mdzs, mdzsp)}`,
        overview: 'Mo Dao Zu Shi follows two men, Wei Wuxian and Lan Wangji, on their mission to unravel the mysteries of the spiritual world. Fighting demons, ghosts, and even other cultivators, the two end up forming a bond that neither of them had ever expected.',
        videoUrl: 'https://www.youtube.com/watch?v=S-XRj8q2QcU',
    }
]

export default bannerData