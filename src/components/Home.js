import MainBanner from "./MainBanner";
import Randomizer from "./Randomizer";


function Home() {
  return (
    <div className="Home">
      < MainBanner />
      <div class="info">
        <div>
              <h1 class="text-white">Random JW Generator</h1>
        </div>
          <div>
              <p class="text-white fs-5 desc">When you start you either have the choice to act out or draw your character/scene. <br/> If you only get a character's name, that means you can choose any event in their life. <br/>If you want to draw, please use the navigation bar and select the <p class="text-info d-inline">Drawing</p> button.</p>
          </div>
      </div>
        < Randomizer/>
    </div>
  );
}

export default Home;
