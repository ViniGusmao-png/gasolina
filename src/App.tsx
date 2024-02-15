import { useState, FormEvent } from "react";
import "./App.css";

//importando uma imagem
import logoImg from './assets/logo.png'

interface InfoProps{
    titulo:string
    alcool:number | string
    gasolina:number | string
}

function Gasolina() {
     const[inputAlcool, setInputAlcool] = useState()
     const[inputGasolina, setInputGasolina] = useState()
     const[info,setInfo] = useState<InfoProps>()
     //necessario utilizar o event para evitar que a pagina não fique atualizando toda vez
     function Calcular(event: FormEvent){
        event.preventDefault();
        let calculo = (inputAlcool / inputGasolina)
        if(calculo <=0.7 ){
            setInfo({
                titulo: "Compensa usar Álcool!",
                alcool: inputAlcool,
                gasolina: inputGasolina
            })
        }else{
            setInfo({
                titulo: "Compensa usar Gasolina!",
                alcool: inputAlcool,
                gasolina: inputGasolina
            })
        }

     }

    return (
        <div>
            <main className="container">
                <img className="logo" src={logoImg} alt="Posto" />
                <h1 className="title">Qual a melhor opção?</h1>
                <form className="form" onSubmit={Calcular}>
                    <div className="label">
                        <label >Alcool(preço por litro)</label>
                        <input type="number"
                            placeholder="4,90"
                            min="1"
                            step="0.01"
                            required
                            value={inputAlcool}
                            onChange={(e) => setInputAlcool(Number(e.target.value))}
                        />
                    </div>
                    <div className="label">
                        <label>Gasolina(preço por litro)</label>
                        <input type="number"
                            placeholder="4,90"
                            min="1"
                            step="0.01"
                            required
                            value={inputGasolina}
                            onChange={(e) => setInputGasolina(Number(e.target.value))}
                        />
                    </div>
                    <input className="button" type="submit" value="Calcular" />
                </form>
                {info && Object.keys(info).length > 0 && (
                    <section className="section">
                    <h2>{info.titulo}</h2>
                    <span>Álcool {info.alcool}</span>
                    <span>Gasolina {info.gasolina}</span>
                </section>
                )}
            </main>
        </div>
    )



}
export default Gasolina