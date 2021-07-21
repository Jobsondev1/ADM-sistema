import "./main.css";
import logo from "../../assets/logo.png"

import Charts from "../../components/charts/Charts";

const Main = () => {
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={logo} alt="hello" />
                    <div className="main__greeting">
                        <h1> Ola Usuario</h1>
                        <p> Bem vindo ao sistema</p>
                    </div>
                    </div>

                 <div className="main__cards">

                    <div className="card">
                        <i className="fa fa-file-text fa-2x text-lightblue"></i>
                        <div className="card-inner">
                            <p className="text-primary-p">Numero de pedidos</p>
                            <span className="font-bold text-title">365</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-money fa-2x text-red"></i>
                        <div className="card-inner">
                            <p className="text-primary-p">Pagamentos</p>
                            <span className="font-bold text-title">24,67</span>
                        </div>
                    </div>
                    
                    <div className="card">
                        <i className="fa fa-archive fa-2x text-yellow"></i>
                        <div className="card-inner">
                            <p className="text-primary-p">numero produt</p>
                            <span className="font-bold text-title">397</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-green"></i>
                        <div className="card-inner">
                            <p className="text-primary-p">Categorias</p>
                            <span className="font-bold text-title">1000</span>
                        </div>
                    </div>
                </div>

             <div className="charts">
                <div className="charts__left">
                    <div className="charts__left__title">
                        <div>
                            <h1>Relatorio diario</h1>
                            <p>Produção do dia</p>
                        </div>
                        <i className="fa fa-usd"></i>
                    </div>
                   <Charts /> 
                </div>

                <div className="charts__right">
                    <div className="charts__right__title">
                        <div>
                            <h1>Status do Relatorio</h1>
                            <p>Produção do dia</p>
                        </div>
                        <i className="fa fa-area-chart"></i>
                    </div>

                    <div className="charts__right__cards">
                        <div className="card1">
                            <h1>Bem vindo</h1>
                            <p>R$:150,00</p>
                        </div>
                        <div className="card2">
                            <h1>vendas</h1>
                            <p>R$:250,00</p>
                        </div>
                        <div className="card3">
                            <h1>Usuarios</h1>
                            <p>400</p>
                        </div>
                        <div className="card4">
                            <h1>Serviços</h1>
                            <p>1212</p>
                        </div>

                    </div>
                </div>
             </div>

         </div>
            
        </main>
    )
}

export default Main
