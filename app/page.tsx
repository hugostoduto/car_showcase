
import {Hero, SearchBar, CustomFilter} from '@/components/index';

import {fetchCars} from '@/utils'
export default async function Home() {
  const allCars = await fetchCars()
  const isDataEmpty
  
  return (
    <main className="overflow-hidden">
     <Hero/>
     <div className="mt-12 padding-x passing-y max-width" id='discover'>
      <div className="home__text-container">
        <h1 className='text-4-xl font-extrabold'>Car Catalog</h1>
        <p>Explore</p>
      </div>
      <div className="home__filters">
        <SearchBar/>
        <div className="home__filter-container">
          <CustomFilter title="fuel"/>
          <CustomFilter title="year"/>
        </div>
      </div>
      
     </div>
    </main>
  )
}
