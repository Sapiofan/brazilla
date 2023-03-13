import './App.css';
import { Nav } from './navigation';
import { Main } from './sections';
import NavProvider from './context/NavContext';


const App = () => {
  return (
    <>
      <NavProvider>
				<Nav />
				<Main />
			</NavProvider>
    </>
  );
}

export default App;
