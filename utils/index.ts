export async function fetchCars() {
  const headers = {
    
      'X-RapidAPI-Key': '59919cdbe8msh0ba5d2bbed35891p10a691jsnc9e823a97f57',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    
  }
  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{headers: headers})
  const result = await response.json()
  return result
}