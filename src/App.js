import Card from "./components/Card.jsx";
import posts from "./data/post";
import Navbar from './Navigation/Navbar.js'
import Resources from './cards/Resources.js'


function App() {
  return (
    <main className="bg-gray-100 h-full md:h-screen w-full">
    <Navbar/>

      <section>{/* className="container mx-auto px-0 md:px-4 py-4">*/}
        {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-4">
          {posts.map((element, index) => (
            <Card
              key={index}
              title={element.title}
              likes={element.likes}
              order={index + 1}
              image={element.image}
            />
          ))}

        </div>*/}

        <Resources/>
      </section>       
    </main>
  );
}

export default App;
