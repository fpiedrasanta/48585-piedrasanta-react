import React, {useState, useContext} from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import Swal from "sweetalert2";
import { getFirestore } from '../../firebase/config';

export const Checkout = () => {
    const { obtenerPrecioTotal, carrito, vaciarCarrito } = useContext(CartContext);

    const [email, setEmail] = useState("")
    const [nombre, setNombre ] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()

        const orden = {
            comprador: {
                email,
                nombre,
                apellido,
                telefono
            },
            item: carrito,
            precioTotal: obtenerPrecioTotal(),
            data: firebase.firestore.Timestamp.fromDate(new Date())
        };

        const db = getFirestore();
        const ordenes = db.collection('ordenes');

        ordenes.add(orden)
            .then((respuesta) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Felicidades',
                    text: `Su compra se realizó con exito!<br>Su número de compra es ${respuesta.id}`,
                    willClose: () => {
                        vaciarCarrito();
                    }
                });

                carrito.forEach((item) => {
                    const docRef = db.collection('merchandising').doc(item.id);

                    docRef.get()
                        .then((doc) => {
                            docRef.update({
                                stock: doc.data().stock - item.cantidad
                        })
                    })
                })
            });
    }

    return (
        <div>
            <h3>Terminar compra</h3>
            <hr />
            <form onSubmit={handleSubmit} className='container mt-3'>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>

                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" className="form-control" onChange={(e) => setApellido(e.target.value)} value={apellido}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor="telefono">Teléfono</label>
                    <input type="text" className="form-control" onChange={(e) => setTelefono(e.target.value)} value={telefono}/>
                </div>
                
                <button type='submit' className='btn btn-success'>Finalizar</button>
                <Link to='/cart' className='btn btn-info'>Volver al carrito</Link>
            </form>
        </div>
    )
}