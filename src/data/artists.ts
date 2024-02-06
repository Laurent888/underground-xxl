import CristianGabriella from '../public/cristianGabriella.jpg'
import CristianGabriella2 from '../public/cristianGabriella2.jpg'
import SergioAna from '../public/sergioAna.jpeg'
import SergioAna2 from '../public/sergioAna2.jpg'
import JorgeAroa from '../public/jorgeAroa.jpg'
import JorgeAroa2 from '../public/jorgeAroa2.jpg'
import JordiNoora from '../public/jordiNoora.jpg'
import LaurentDJ from '../public/laurentTram.jpg'
import LaurentDJ2 from '../public/laurentTram2.jpg'
import BabakDJ from '../public/djbabak.jpg'
import Hasan from '../public/HasanJustina.jpg'
import Hasan2 from '../public/HasanJustina2.jpg'
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
    imageAlternative: SergioAna2,
    instagram: 'https://www.instagram.com/sergioyanaoficial/',
  },
  cg: {
    code: 'cg',
    name: 'Cristian and Gabriella',
    description:
      'We had to invite them again for this 2nd edition! Two beautiful dancers from Sevilla and Cadiz, Cristian and Gabriella will impress you with their smoothness and precision. Checkout their Instagram so you will understand why we wanted absolutely to bring them!',
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
    name: 'Hasan and Justina',
    description:
      "Hasan is a dancer and teacher from Turkey. He's currently based in Vilnius, Lithuania. You will see him in many international festivals. He taught already once at the Underground, and we wanted to bring him back!",
    image: Hasan,
    imageAlternative: Hasan2,
    classes: 'TBD',
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
      'One of the Underground resident DJ in Helsinki. He has been dancing bachata for 8 years and is also teaching at Bongos, Helsinki.',
    image: LaurentDJ2,
    imageAlternative: LaurentDJ,
  },
  bm: {
    code: 'bm',
    name: 'DJ Babak',
    description:
      'One of the Underground resident DJ in Helsinki. Babak is an experienced bachata DJ and is invited in many events in Finland!',
    image: BabakDJ,
  },
}
