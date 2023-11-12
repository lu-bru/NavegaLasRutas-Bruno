import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer title='Tienda de frutas' />
    </ChakraProvider>

  )
}

export default App
