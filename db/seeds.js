[
    {
        "_id": {
            "$oid": "60d7b5d57a6c761df43f1702"
        },
        "long_desc": [{
            "text": "En este demo vamos a intentar crear un contador simple usando React y Hooks. La idea es mantenerlo lo mas simple posible de forma tal que el código pueda correr en prácticamente cualquier entorno y version de React... que soporte Hooks obviamente.",
            "type": "normal"
        }, {
            "text": "Para conseguirlo vamos a necesitar minimanete tener una aplicación de React creada y corriendo con mínimamente un componente. A este componente lo vamos a llamar App",
            "type": "normal"
        }, {
            "text": "import React from 'react';\nimport ReactDOM from 'react-dom'\n\nconst App = () => {\n    return (\n        <p>Contador</p>\n    )\n}\n\nReactDOM.render(\n    <App/> , document.getElementById(\"root\")\n)",
            "type": "code",
            "syntax": "javascript"
        }, {
            "text": "Luego vamos a ir escribiendo la plantilla mínima para que un contador funcione; supongo que el contador podría funcionar con un solo boton pero elegí hacer tres distintos para que se entienda como hacer el resto de las funcionalidades del contador",
            "type": "normal"
        }, {
            "text": "return (\n        <>\n            <p>Contador</p>\n            <button>+</button>\n            <button>reset</button>\n            <button>-</button>\n        </>\n    )",
            "type": "code",
            "syntax": "javascript"
        }, {
            "text": "Una vez que tengamos el contador dibujado en pantalla podemos pasar a hacer las funcionalidades. Vamos a necesitar controlar el numero del contaor en una variable y que encima React \"reaccione\" a los cambios de esta variable, con lo cual necesitamos un estado. ",
            "type": "normal"
        }, {
            "text": "Hacer estados en un componente lo podemos conseguir a traves de muchas maneras, pero dado que estamos usando un componente funcional y no de tipo Class vamos a usar Hooks. Los Hooks son funciones que le permiten a un componente adaptar algun comportamiento que no tendria de otra manera. El Hook que vamos a usar es el Hook de estado ",
            "type": "normal"
        }, {
            "text": "...\nimport {useState} from \"react\"\n\n\n\nconst App = () => {\n\n    const [contador,setContador] = useState(0)\n    console.log(contador,setContador)//0 fn()\n...",
            "type": "code",
            "syntax": "javascript"
        }, {
            "text": "Este Hook de estado nos deberia dar un resultado de tipo Array con dos elementos adentro, el estado en si (osea el 0) y una funcion para poder cambiar dicho estado.",
            "type": "normal"
        }, {
            "text": "Ahora vamos a hacer cada una de los métodos para generar el cambio del contador. Para eso voy a hacer tres métodos locales dentro del mismo componente y voy a llamar a esas funciones desde el evento ¨click¨de cada boton",
            "type": "normal"
        }, {
            "text": "\nconst App = () => {\n\n    const [contador,setContador] = useState(0)\n\n    const sumar = () => setContador(contador + 1)\n\n    const restar = () => setContador(contador - 1)\n\n    const resetear = () => setContador(0)\n\n    return (\n        <>\n            <p>Contador</p>\n            <button onClick={sumar}>+</button>\n            <button onClick={resetear}>reset</button>\n            <button onClick={restar}>-</button>\n        </>\n    )\n}\n\n",
            "type": "code",
            "syntax": "javascript"
        }, {
            "text": "Debería funcionar sin problemas, pero si algo no llega a funcar ya saben, no me pregunten a mi que no soy profe de programación... ah re que si",
            "type": "normal"
        }],
        "tags": ["react", "hooks", "state"],
        "title": "Contador Simple",
        "subtitle": "Estado usando Hooks",
        "short_desc": "Primer test de demos. Como este es el primero que subo, va a ser un contador mega básico solo para probar que los demos funcionan bien.",
        "difficulty": 1,
        "vote_data": {
            "current_votes": {
                "up": 0,
                "down": 0
            },
            "done": []
        },
        "createdAt": {
            "$date": "2021-06-26T23:18:45.136Z"
        },
        "updatedAt": {
            "$date": "2021-07-16T22:33:54.428Z"
        },
        "__v": 0,
        "active": true,
        "id": "gBdA452JVS",
        "slug": "contador-simple",
        "image_url": "contador-simple-big.png",
        "thumbnail_url": "contador-simple-small.jpg",
        "repository_url": "https://github.com/HoracioGutierrez/contador_simple"
    },
    {
        "long_desc": [],
        "tags": ["react", "hooks", "state","form"],
        "title": "Lista Simple",
        "subtitle": "Lista de tareas",
        "short_desc": "Segundo test de demo. Este lo estoy creando porque necesito probar la funcionalidad de filtros.",
        "difficulty": 1.5,
        "vote_data": {
            "current_votes": {
                "up": 0,
                "down": 0
            },
            "done": []
        },
        "active": true,
        "id": "rGrSIY6XEp",
        "slug": "lista-simple",
        "image_url": "standard.jpg",
        "thumbnail_url": "standard.jpg",
        "repository_url": "https://github.com/HoracioGutierrez/lista_simple"
    },
    {
        "long_desc": [],
        "tags": ["react", "hooks", "state","form","routes","context"],
        "title": "Shopping Cart",
        "subtitle": "Carrito de compras",
        "short_desc": "Tercer demo asi que a este ya le pongo onda y hago un carrito basico donde se agreguen y borren articulos.",
        "difficulty": 3,
        "vote_data": {
            "current_votes": {
                "up": 0,
                "down": 0
            },
            "done": []
        },
        "active": true,
        "id": "HTnsN1Xpkb",
        "slug": "shopping-cart",
        "image_url": "standard.jpg",
        "thumbnail_url": "standard.jpg",
        "repository_url": "https://github.com/HoracioGutierrez/shopping_cart"
    }
]