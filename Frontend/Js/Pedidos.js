export default{
    beforeMount(){
        this.limpiarLista();
        this.CargarLista();

    },
    data(){
        return {
            pedidos: [],

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
        },
        //Carga la lista de las aplicaciones desde la base de datos
        async cargarPedidos() {
            let url = 'https://api-pedidos-software3.herokuapp.com/pedidos';
            this.loading = true;
            //Trae todos los marcadores desde la base de datos.
            this.$axios
            .get(url)
            .then(response => {
            //Asigna los marcadores al array de marcadores global para ser enlistados.
            this.pedidos = response.data.info;
            this.ordenarAsc(this.pedidos, 'CodigoPedido');
  
        })
            .catch(error => {
            console.log(error);
        });
  
        },
        //Guarda la aplicación que fue ingresada en la página.
        guardarRegistro() {
        let url = 'http://http://localhost:3000/Tasks'
        this.$axios.post(url, this.datosFormulario()).then(respuesta => {
          //Recarga los marcadores de la base de datos.
          this.$swal.fire({
            title: "Registro guardado",
            text: "El registro fue guardado con exito",
            type: "success",
            timer: 3000
          }).then(r => {
            window.open('http://http://localhost:3000/Tasks', '_self');
          });
          this.cargarLista();
          this.limpiarLista();
  
  
        });
        },
         //Limpia los campos del formulario.
        limpiarLista() {
        this.form.inputCodigoPedido = '';
        this.form.inputCodigoProducto = '';
        this.form.inputCantidad = '';
        this.form.inputValor = '';
        this.form.inputFecha = '';
        this.refrescarFormulario();
  
      },
      refrescarFormulario() {
        this.show = false;
        this.$nextTick(() => {
          this.show = true;
        });
  
      },
    }

};