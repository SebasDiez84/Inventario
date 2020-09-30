export default{
    beforeMount(){
        this.limpiarLista();
        this.CargarLista();

    },
    data(){
        return {
            Pedido:{
                CodigoPedidoDB: "",
                CodigoPedido: "",
                CodigoProducto: "",
                Cantidad: "",
                Valor: "",
                Fecha:"",
                acciones: true
            },
            formularioPedido:{
                CodigoPedido: "",
                CodigoProducto: "",
                Cantidad: "",
                Valor: "",
                Fecha:"",
                acciones: true
            },
        };
    },
    methods: {
        datosForm(){
            this.formularioPedido = {
                //Tomar los datos del Form
                CodigoPedido: document.getElementById('inputCodigoPedido').value,
                CodigoProducto: document.getElementById('inputCodigoProducto').value,
                Cantidad: document.getElementById('inputCantidad').value,
                Valor: document.getElementById('inputValor').value,
                Fecha: document.getElementById('inputFecha').value,
                acciones: true
            }
            return this.formularioPedido
        }
    }

};