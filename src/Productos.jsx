import React,{Component} from "react"
import Pic from "./Pic.jsx"

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
                <div className="sku">SKU: {this.props.SKU}</div>
                <div className="stock">Stock: {this.props.stock}</div>
            </div>
        )
    }
}

export default Productos