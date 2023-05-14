import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const init = JSON.parse(localStorage.getItem('carrito')) || [];

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(init);

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    const agregarAlCarrito = (item) => {
        //Spread del array + item
        setCarrito([...carrito, item]);
    }

    const obtenerCantidadTotal = () => {
        return carrito.reduce((acumulador, producto) => {
        return acumulador + producto.cantidad;
        }, 0);
    }

    const obtenerPrecioTotal = () => {
        return carrito.reduce((acumulador, producto) => {
        return acumulador + (producto.cantidad * producto.precioUnitarioSinIVA * (1 +  producto.porcentajeIVA / 100)) ;
        }, 0);
    }

    const quitarDelCarrito = (id) => {
        const nuevoCarrito = carrito.filter(function(producto) {
        return producto.id !== id;
        });

        setCarrito(nuevoCarrito);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    return(
        <CartContext.Provider value={{
            agregarAlCarrito,
            obtenerCantidadTotal,
            obtenerPrecioTotal,
            quitarDelCarrito,
            vaciarCarrito,
            carrito
        }}>
            { children }
        </CartContext.Provider>
    )
};