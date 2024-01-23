import CristianGabriella from '../public/cristianGabriella.jpg'
import CristianGabriella2 from '../public/cristianGabriella2.jpg'
import SergioAna from '../public/sergioAna.jpeg'
import JorgeAroa from '../public/jorgeAroa.jpeg'
import JorgeAroa2 from '../public/jorgeAroa2.jpeg'
import JordiNoora from '../public/jordiNoora.jpg'
import LaurentDJ from '../public/laurentTram.jpg'
import BabakDJ from '../public/djbabak.jpg'
import Hasan from '../public/Hasan.jpg'
import { ArtistCode } from '@/components/ArtistScrollview'
import { StaticImageData } from 'next/image'

type ArtistData = {
  code: ArtistCode
  name: string
  description: string
  classes?: string
  image: StaticImageData
  imageAlternative?: StaticImageData
  instagram?: string
}

export const artistsData: Record<ArtistCode, ArtistData> = {
  sa: {
    code: 'sa',
    name: 'Sergio and Ana',
    description:
      'Amazing bachata dancers from Spain. Their style is characterized by their smoothness and sensuality. They have been teaching all around the world and we are very happy to have them in Helsinki!',
    classes: 'TBD',
    image: SergioAna,
    instagram: 'https://www.instagram.com/sergioyanaoficial/',
  },
  cg: {
    code: 'cg',
    name: 'Cristian and Gabriella',
    description:
      'Two beautiful dancers from Sevilla and Cadiz, Cristian and Gabriella will impress you with their smoothness and precision. Checkout their Instagram so you will understand why we wanted absolutely to bring them!',
    classes: 'TBD',
    image: CristianGabriella,
    imageAlternative: CristianGabriella2,
    instagram: 'https://www.instagram.com/cristianygabriella/',
  },
  ja: {
    code: 'ja',
    name: 'Jorge and Aroa',
    description:
      'Talented bachata dancers with sensual style from Cadiz. They are the rising stars of the bachata scene in Spain!',
    classes: 'TBD',
    image: JorgeAroa,
    imageAlternative: JorgeAroa2,
    instagram: 'https://www.instagram.com/jorgeyaroabachata/',
  },
  ha: {
    code: 'ha',
    name: 'Hasan',
    description:
      "Hasan is a dancer and teacher from Turkey. He's currently based in Vilnius, Lithuania. You will see him in many international festivals. He taught already once at the Underground, and we wanted to bring him back!",
    image: Hasan,
    classes: '1 hour class',
    instagram: 'https://www.instagram.com/hasan.dance/',
  },
  jn: {
    code: 'jn',
    name: 'Jordi and Noora',
    description:
      'Our local teachers in Helsinki! Jordi is from Catalonia and Noora from Finland. They have been teaching together for couple of years and are often invited at our month Underground parties.',
    classes: '2 hours class',
    image: JordiNoora,
  },
  lt: {
    code: 'lt',
    name: 'DJ Laurent',
    description:
      'One of the Underground resident DJ in Helsinki. He has been dancing bachata for 6 years and is also teaching at Bongos, Helsinki.',
    image: LaurentDJ,
  },
  bm: {
    code: 'bm',
    name: 'DJ Babak',
    description:
      'One of the Underground resident DJ in Helsinki. You will also see him on the dancefloor since he has been dancing for several years.',
    image: BabakDJ,
  },
}
