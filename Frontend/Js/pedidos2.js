console.log("----------- Gestion de Pedidos ----------")
let PedidoTemporal = null

//Creación de un usuario (Quemado)
let pedidos = [
    {
        CodigoPedidoDB: "5f73e49ec0158e0c10250a11",
        CodigoPedido: "100",
        CodigoProducto: "1011111111",
        Cantidad: "3",
        Valor: "400000",
        Fecha:"10/12/2020",
        acciones: true

    }
]

//Metodo en donde se obtiene los valores para crear el usuario
function obtenerValores() {
    let CodigoPedido = document.getElementById("inputCodigoPedido").value
    let CodigoProducto = document.getElementById("inputCodigoProducto").value
    let Cantidad = document.getElementById("inputCantidad").value
    let Valor = document.getElementById("inputValor").value
    let Fecha = document.getElementById("inputFecha").value

    RegistrarPedido()
    
    //Almacenamiento de datos Usuario
    let miPedido2 = { CodigoPedido, CodigoProducto, Cantidad, Valor, Fecha }
    //console.log("Se creo el usuario "+id)
    return miPedido2
}
function  CargarPedido() {
    let url = 'https://api-pedidos-software3.herokuapp.com/pedidos';
    this.loading = true;
    //Trae todos los marcadores desde la base de datos.
    this.$axios
    .get(url)
    .then(response => {
        //Asigna los marcadores al array de marcadores global para ser enlistados.
        this.pedidos = response.data.info;
        this.ordenarAsc(this.pedidos, 'CodigoPedido');

    }).catch(error => {
        console.log(error);
    })
}

function GuardaRegistro(){
    let pedido=obtenerValores()
    let existePedido = pedidos.find(x => pedido.CodigoPedido === x.CodigoPedido)
    if (existePedido) {
        console.log('El pedido ya existe');
        alert("El pedido ya existe")
        return;
    }
    pedidos.push(pedidos)
    let url = 'https://api-pedidos-software3.herokuapp.com/pedidos'
    this.$axios.post(url, this.datosFormulario()).then(respuesta => {
        //Recarga los marcadores de la base de datos.
        this.$swal.fire({
            title: "Registro guardado",
            text: "El registro fue guardado con exito",
            type: "success",
            timer: 3000
        }).then(r => {
            window.open('https://api-pedidos-software3.herokuapp.com/pedidos', '_self');
        });
        this.CargarPedido();
        this.limpiarPedidos();
    });
}

//Limpia los campos del formulario.
function limpiarPedidos() {
    this.form.inputCodigoPedido = '';
    this.form.inputCodigoProducto = '';
    this.form.inputCantidad = '';
    this.form.inputValor = '';
    this.form.inputFecha = '';
    this.refrescarFormulario();

}

function refrescarFormulario() {
    this.show = false;
    this.$nextTick(() => {
      this.show = true;
    });

}

function listarPedidos() {
    //localStorage.getItem('usuarios')
    let lista = document.getElementById("listaPedidos")
    CargarPedido();

    let data = ""
    for (let i = 0; i < usuarios.length; i++
        ) {
        let miPedido2 = pedidos[i];
        data += "<tr>"
        data += `<td>${miPedido2._id}</td>`
        data += `<td>${miPedido2.CodigoPedido}</td>`
        data += `<td>${miPedido2.CodigoProducto}</td>`
        data += `<td>${miPedido2.Cantidad} </td>`
        data += `<td>${miPedido2.Valor} </td>`
        data += `<td>${miPedido2.Fecha} </td>`
        data += "</tr>"
    }
    lista.innerHTML = data
    
}