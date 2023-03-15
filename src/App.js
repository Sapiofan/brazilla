import './App.css';
import { Nav } from './navigation';
import { Main } from './sections';
import NavProvider from './context/NavContext';
import Footer from './media/footer.png';


const App = () => {
  return (
    <>
      <NavProvider>
				<Nav />
				<Main />
        <div className='footer'>
          <img src={Footer}></img>
        </div>
			</NavProvider>
    </>
  );
}

export default App;
