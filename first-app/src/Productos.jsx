import React,{Component} from "react"
import Pic from "./Pic.jsx"

// class Productos extends Component {
//     render(){
//         return(
//             <div>
//                 <header>Productos</header>
//                 <p>Logitech MX Master 3</p>
//                 <div><Img /></div>
//                 <p>Mouse inalambrico multidispositivo de alta productividad</p>
//                 <p>$ 10.000</p>
//                 <p>SKU: 5209852ASAS309</p>
//                 <p>Disponible: 10</p>
//             </div>
//         )
//     }
// }

let infoProd = ['nombre', 'img', 'descripcion', 'precio', 'sku', 'stock']

class Productos extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div>
                <h2 className="nombre">{this.props.nombre}</h2>
                {/* <img className="img" src={this.props.img} alt=""></img> */}
                <Pic fuente = {this.props.img}/>
                <div className="descripcion">{this.props.descripcion}</div>
                <div className="precio">{this.props.precio}</div>
                <div className="sku">{this.props.SKU}</div>
                <div className="stock">{this.props.stock}</div>
            </div>
        )
    }
}

export default Productos