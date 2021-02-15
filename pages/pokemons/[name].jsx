function Home(props) {
  return (
    <>
    <h1>{props.pokemon.name}</h1>
    <img src={props.pokemon.sprites.other['official-artwork'].front_default} />
    </>
  )
}

  
export async function getStaticPaths() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
    const pokemons = await res.json()
  
    const paths = pokemons.results.map((pokemon) => ({
      params: { name: pokemon.name },
    }))
  
    return { paths, fallback: false }
  }
  
  export async function getStaticProps({ params }) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
    const pokemon = await res.json()
  
    return { props: { pokemon } }
  }
  
  export default Home;  