import type { ProyectType } from "@/types/proyects";

export const projects: ProyectType[] = [

  {
    description: 'A set of calculators for responsible financial management',
    github: 'https://github.com/ACBC-DEV/SmartMoney',
    link: 'https://smart-money-five.vercel.app/',
    img: '/img/smartmoney.avif',
    tags: ['Astro', 'SolidJS', 'Tailwindcss'],
    name: 'SmartMoney'
  },
  {
    description: 'A short link generator',
    github: 'https://github.com/ACBC-DEV/LinkMinify',
    link: 'https://link-minify.vercel.app/',
    img: '/img/link-minify.avif',
    tags: ['Nextjs', 'Tailwindcss', 'mongodb', 'React'],
    name: 'LinkMinify'
  },
  {
    description: 'A search of gifs engine',
    github: 'https://github.com/ACBC-DEV/Gifty',
    link: 'https://github.com/ACBC-DEV/Gifty',
    img: '/img/gifty.avif',
    tags: ['Nextjs', 'Tailwindcss', 'React'],
    name: 'Gifty'
  },
]