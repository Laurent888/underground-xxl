import IgorRocio from '../public/igorRocio.jpg'
import CristianGabriella from '../public/cristianGabriella.jpeg'
import JordiNoora from '../public/jordiNoora.jpg'
import LaurentDJ from '../public/laurentTram.jpg'
import BabakDJ from '../public/djbabak.jpg'
import { ArtistCode } from '@/components/ArtistScrollview'
import { StaticImageData } from 'next/image'

type ArtistData = {
  code: ArtistCode
  name: string
  description: string
  classes?: string
  image: StaticImageData
  instagram?: string
}

export const artistsData: Record<ArtistCode, ArtistData> = {
  ig: {
    code: 'ig',
    name: 'Igor and Rocio',
    description:
      'Amazing bachata dancers with lots of energy. Igor and Rocio have been dancing together since 2016 and currently invited in all major bachata festivals around the world. They currently teach in Santander, Spain.',
    classes: '2 hours class + 1 hour masterclass',
    image: IgorRocio,
    instagram: 'https://www.instagram.com/igoryrocio/',
  },
  cg: {
    code: 'cg',
    name: 'Cristian and Gabriella',
    description:
      'Two beautiful dancers from Sevilla and Cadiz, Cristian and Gabriella will impress you with their smoothness and precision. Checkout their Instagram so you will understand why we wanted absolutely to bring them!',
    classes: '3 hours class',
    image: CristianGabriella,
    instagram: 'https://www.instagram.com/cristianygabriella/',
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
