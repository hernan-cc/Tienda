import React,{Component} from "react"
import Productos from './Productos.jsx'
import mxM3 from './mxM3.jpg'
import mxA3 from './mxA3.jpeg'

// const prod1 = <Productos
//     nombre='Logitech MX Master 3'
//     descripcion='Mouse inalambrico multidispositivo de alta productividad'
//     precio='$ 10.000'
//     SKU='5209852ASAS309'
//     stock='10'
//     />

// const prod2 = <Productos
//     nombre='MX Anywhere 3'
//     descripcion='Mouse inalambrico multidispositivo de alta portabilidad'
//     precio='$ 9.000'
//     SKU='653574UIYLK978'
//     stock='15'
//     />

class Home extends Component{
    render(){
        return(
            <div>
            <div className="home"> 
                <h1>Tienda</h1>
            </div>
            <div>
                <Productos
                    nombre='MX Anywhere 3'
                    img = {mxA3}
                    descripcion='Mouse inalambrico multidispositivo de alta portabilidad'
                    precio='$ 9.000'
                    SKU='653574UIYLK978'
                    stock='15'
                    />
            </div>
            <div>
                 <Productos
                    nombre='Logitech MX Master 3'
                    img={mxM3}
                    descripcion='Mouse inalambrico multidispositivo de alta productividad'
                    precio='$ 10.000'
                    SKU='5209852ASAS309'
                    stock='10'
                    />
            </div>
            </div>
        )
    }
}

export default Home