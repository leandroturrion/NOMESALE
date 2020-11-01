window.onload= function(){
    console.log("esta enlazado")

    let form = document.querySelector('form')
    let inputNombre = document.querySelector('#nombre');
    let descripcion = document.querySelector('#descripcion')
    let imagen = document.querySelector('#imagen')
    let divErrores = document.querySelector('#errors')

    let regeximg = (/\.(jpe?g|png)$/i)

    let validateInputs = ()=>{
        errors = []

        if(inputNombre.value.trim() == ""){
            errors.push('El nombre es obligatorio')
        }
        if(descripcion.value.trim() == ""){
            errors.push('La descripcion es obligatoria')
        }
        if(imagen.value != ''){
            if(!regeximg.test(imagen.value)){
                errors.push('La extencion de la imagen no es valida')
            }
        }
        

        return errors
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // es necesario esta linea como primer comando
        divErrores.innerHTML = "";
          if (validateInputs().length > 0) {
            validateInputs().forEach((element) => {
          divErrores.innerHTML +=
          '<small class="text-danger">' + element + "</small><br>";
        });    
          } else {
            form.submit()
          }
        });
        }
    