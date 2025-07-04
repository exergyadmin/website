export interface MediaHighlight {
  id: string
  name: string
  logo: string
  link: string
  description: string
}

export const mediaHighlights: MediaHighlight[] = [
  {
    id: 'forbes',
    name: 'Forbes',
    logo: '/Forbes_logo.png',
    link: 'https://www.forbes.com/sites/beccabratcher/2025/03/25/bitcoin-miners-hit-breaking-point-one-year-after-halving/',
    description: 'Featured in Forbes for bitcoin mining innovation'
  },
  {
    id: 'ny-post',
    name: 'New York Post',
    logo: '/NYP_logo.png',
    link: 'https://nypost.com/business/what-is-crypto-mining/',
    description: 'Quoted in New York Post about crypto mining'
  },
  {
    id: 'bitcoin-conference',
    name: 'Bitcoin 2025',
    logo: '/bitcoin2025_logo.png',
    link: 'https://www.youtube.com/watch?v=jtdJQ7uXcBk',
    description: 'Speaker at Bitcoin 2025 Conference'
  }
]