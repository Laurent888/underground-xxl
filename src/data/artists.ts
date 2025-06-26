import alexAlma from '../public/artists/alexAlma.jpg'
import marcoEleonora from '../public/artists/marcoEleonora.jpg'
import jorgeAroa1 from '../public/artists/jorgeAroa1.jpg'
import kevin from '../public/artists/kevin.jpg'
import LaurentDJ from '../public/laurentTram.jpg'
import LaurentDJ2 from '../public/laurentTram2.jpg'
import BabakDJ from '../public/artists/djbabak.jpg'
import hasanValerija from '../public/artists/hasanValerija.jpeg'
import SorushElise from '../public/artists/SorushElise.jpg'
import MiguelSunsire from '../public/artists/MiguelSunsire.jpg'
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
  ms: {
    code: 'ms',
    name: 'Miguel and Sunsire',
    description:
      'Talented bachata dancers and instructors. They are known for their dynamic performances and excellent teaching skills.',
    classes: 'TBD',
    image: MiguelSunsire,
    imageAlternative: MiguelSunsire,
    instagram: 'https://www.instagram.com/miguelysunsire/',
  },
  ja: {
    code: 'ja',
    name: 'Jorge and Aroa',
    description: 'Talented bachata dancers from Spain. They are the rising stars of the bachata scene in Europe!',
    classes: 'TBD',
    image: jorgeAroa1,
    imageAlternative: jorgeAroa1,
    instagram: 'https://www.instagram.com/jorgeyaroabachata/',
  },
  aa: {
    code: 'aa',
    name: 'Alex and Alma',
    description:
      'We had to invite them again for this 2nd edition! Two beautiful dancers from Spain, Alex and Alma will impress you with their smoothness and precision. Checkout their Instagram so you will understand why we wanted absolutely to bring them!',
    classes: 'TBD',
    image: alexAlma,
    imageAlternative: alexAlma,
    instagram: 'https://www.instagram.com/almayalexoficial/',
  },
  me: {
    code: 'me',
    name: 'Marco and Eleonora',
    description:
      'Amazing bachata dancers from Italy. Their style is characterized by their smoothness and sensuality. They have been teaching all around the world and we are very happy to have them in Helsinki!',
    classes: 'TBD',
    image: marcoEleonora,
    imageAlternative: marcoEleonora,
    instagram: 'https://www.instagram.com/marcoyeleonora/',
  },
  hv: {
    code: 'hv',
    name: 'Hasan and Valerija',
    description:
      "Hasan is a dancer and teacher from Turkey. He's currently based in Lithuania. You will see him in many international festivals. He taught already once at the Underground, and we wanted to bring him back!",
    image: hasanValerija,
    imageAlternative: hasanValerija,
    classes: 'TBD',
    instagram: 'https://www.instagram.com/hasan.dance/',
  },
  ke: {
    code: 'ke',
    name: 'Kevin',
    description:
      'Our local teacher in Helsinki! Kevin is an experienced dancer and teacher who has been teaching for several years and is often invited at our monthly Underground parties.',
    classes: '2 hours class',
    image: kevin,
    imageAlternative: kevin,
    instagram: 'https://www.instagram.com/kevcds/',
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
    imageAlternative: BabakDJ,
  },
  se: {
    code: 'se',
    name: 'Sorush and Elise',
    description:
      'International bachata dancers and teachers. They bring their unique style and energy to every event they attend.',
    classes: 'TBD',
    image: SorushElise,
    imageAlternative: SorushElise,
    instagram: 'https://www.instagram.com/sorush_elise_bachata/',
  },
}
