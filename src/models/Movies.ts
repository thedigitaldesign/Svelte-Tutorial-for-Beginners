/**
{
  adult: false,
  backdrop_path: '/gG9fTyDL03fiKnOpf2tr01sncnt.jpg',
  genre_ids: [ 28, 878, 14 ],
  id: 526896,
  original_language: 'en',
  original_title: 'Morbius',
  overview: 'Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.',
  popularity: 12854.042,
  poster_path: '/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg',
  release_date: '2022-03-30',
  title: 'Morbius',
  video: false,
  vote_average: 6.4,
  vote_count: 1091
}
*/
export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
