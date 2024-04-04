import { ReHeader, Rediv, Resection, Resection2, Refooter } from "./styles"


function HomePage() {


  return (
    <div>
      <ReHeader>
        <img src="src/imgs/Coffe's%201.png" alt="logo" /> <Rediv><input type="search" placeholder="Pesquisar..." id="" /> <img id="img-lupa" src="src/imgs/icons8-lupa-50 1.png" alt="lupa" /> </Rediv><img src="src/imgs/icons8-about-50 1.png"></img>
      </ReHeader>
      <Resection>
        <img src="src/imgs/cafeteria foto 1.png" alt="" />
      </Resection>
      <Resection2>
        <div>
          <img src="src/imgs/cafe sendo feito 1.png" alt="café" />
          <img src="src/imgs/cheesecake de café 1.png" alt="bolo" />
          <img src="src/imgs/sanduiches 1.png" alt="sanduíches" />
        </div>

      </Resection2>
      <Refooter>
        
      </Refooter>
    </div>
  )
}

export default HomePage
