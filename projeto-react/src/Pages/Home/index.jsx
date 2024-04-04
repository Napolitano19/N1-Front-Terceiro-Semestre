import { ReHeader, Rediv, Resection, Resection2, Refooter, Refooter__div } from "./styles"


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
        <h2>Destaques da semana!</h2>
        <div>
          <img src="src/imgs/cafe_quad.png" alt="café" />
          <img src="src/imgs/cheesecake_quad.png" alt="bolo" />
          <img src="src/imgs/sandu_quad.png" alt="sanduíches" />
        </div>

      </Resection2>
      <Refooter>
        <Refooter__div>
          <div id="esquerdo">
            <h2>Atendimento</h2>
            <p>Horário de Funcionamento: Segunda a Sexta<br/> das 08:00 às 18:00.</p>
            <p>Localização: Rua Alguma Coisa com Sei la o que - 404</p>
            <img src="src/imgs/forma_pagamento.png"/>
          </div>
          <div>
            <h2>Entre em contato</h2>
            <p>Email: coffes@gmail.com<br/><br/>
            Telefone: (00) 0000 - 0000</p>
            <img src="src/imgs/redes.png"/>
          </div>
        </Refooter__div>
      </Refooter>
    </div>
  )
}

export default HomePage
