import ProfileCard from "./profileCard";

import CamaroImg from "./img/camaro.jpg"
import CorvetteImg from "./img/corvette.png"
import MustangImg from "./img/mustang.png"

function App(){



    return (
      
         <div>
             <h1>Autos</h1>
             <ProfileCard titulo="Camaro" handle="@Camaro" img={CamaroImg} />
             <ProfileCard titulo="Corvette" handle="@Corvette" img={CorvetteImg} />
             <ProfileCard titulo="Mustang" handle="@Mustang" img={MustangImg} />
     </div>
       
    )

}

export default App;