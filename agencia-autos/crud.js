var imagen = new Image();

const autos = [
  {
    id:0,
    marca:" Tesla",
    modelo:"s-plaid",
    color:"gris",
    año:2019,
    precio:"23.000",
    img:imagen.src = "img-autos/tesla.jpg"
  },
  {
    id:1,
    marca:" Audi",
    modelo:"r8",
    color:"gris",
    año:2021,
    precio:"230.000",
    img:imagen.src = "img-autos/audi.jpg"
  }
]

const CREATE = "create" 
const EDIT = "edit" 
let AUTOID = 0;



//-----------------------------------------INGRESO DE DATOS---------------------------------------//
function printAutos(data) {
  const container = document.getElementById("container-autos");
  container.innerHTML = "",
  data.forEach((element) => {
    const htmlAutos = `<div class="card" style="width: 18rem;">
                          <img class="card-img-top" src="${element.img}" alt="Card image cap">
                          <div class="card-body">
                            <h5 class="card-title text-primary">Marca:${element.marca}</h5>
                            <div class = "p-container">
                            <p class="card-text"><span class = text-primary>Modelo:</span>${element.modelo}</p>
                            <p class="card-text"><span class = text-primary>Color:</span>${element.color}</p>
                            <p class="card-text"><span class = text-primary>Año:</span> ${element.año}</p>
                            <p class="card-text text-success"><span class = text-primary>Precio:</span> ${element.precio}$</p>
                            </div>
                            <div class = "icons">
                            <i class="fas fa-edit text-primary" onclick = "editElement(${element.id})"></i>
                            <i class="fas fa-trash-alt text-danger" onclick = "deleteElement(${element.id})"></i>
                            </div>
                         </div>
                        </div>`

    container.innerHTML += htmlAutos;
  })
}


//--------------------------------------funciones------------------------------------------//

//-------------------------------------Despliega el el formulario
function showForm(){
  const show = document.getElementById("form");
  form.classList.remove("d-none"), btnCreate();
}


//--------------------------------------limpia el formulario---------------------------
function resetForm(){
  const reset = document.getElementById("form").reset();
}


//--------------------------------------Ocualta el formulario--------------------------
function hiddenForm(){
  const hidden = document.getElementById("form").classList.add("d-none");
}

//--------------------------------obtiene id de boton submit---------------------------

const getIdSubmitButton = () => document.getElementById("btn-submit");

//--------------------------------Crea nuevos autos-------------------------------------

function addAuto(){
  const marca = document.getElementById("input-marca").value;
  const modelo = document.getElementById("input-modelo").value;
  const color = document.getElementById("input-color").value;
  const año = document.getElementById("input-año").value;
  const precio = document.getElementById("input-precio").value;
  

  const newAuto = {
    id:generateId(),
    marca:marca,
    modelo:modelo,
    color:color,
    año:año,
    precio:precio,
    img:imagen
  }

  //-------------------------------Agrega imagen segun la marca dek auto-------------------

  switch (newAuto.marca) {
    case "Renault":
    newAuto.img = "img-autos/renault.jpg"
    break;
    
    case "Audi":
    newAuto.img = "img-autos/audi.jpg"
    break
    
    case "Mercedes":
    newAuto.img = "img-autos/mercedes.jpg"
    break

    case "Tesla":
    newAuto.img = "img-autos/tesla.jpg"
    break

    case "Nissan":
    newAuto.img = "img-autos/nissan.jpg"
    break
    
    default:
    newAuto.img = "https://www.laguiadelvaron.com/wp-content/uploads/2020/08/envuelve-carro-en-plastico-www.laguiadelvaron-1.jpg"
    break
  }
  
  autos.push(newAuto);
  printAutos(autos);
  resetForm();
  hiddenForm();
}

//------------------------------------------Generador de id´s----------------------------------

const generateId = (()=>{
  let biggerID = 0;
  autos.forEach((element)=>{
      if(element.id > biggerID){
          biggerID = element.id;
      }
  });
  return biggerID += 1;
});

//--------------------------------------Elimina un elemento------------------------------

const deleteElement = ((elementId)=>{
  let i = autos.findIndex((element) => element.id === elementId);
  autos.splice(i, 1);
  printAutos(autos);
});


//----------------------------------------abre el formulario para editar------------------------
const editElement = ((elementId) =>{
  const i = autos.findIndex((element)=> element.id === elementId);
  const element = autos[i];
  document.getElementById("input-marca").value = element.marca;
  document.getElementById("input-modelo").value = element.modelo;
  document.getElementById("input-color").value = element.color;
  document.getElementById("input-año").value = element.año;
  document.getElementById("input-precio").value = element.precio;
  AUTOID = i;
  showForm();
  btnEditar()
});

const editAuto = () =>{
  autos[AUTOID].marca = document.getElementById("input-marca").value;
  autos[AUTOID].modelo = document.getElementById("input-modelo").value;
  autos[AUTOID].color = document.getElementById("input-color").value;
  autos[AUTOID].año = document.getElementById("input-año").value;
  autos[AUTOID].precio = document.getElementById("input-precio").value;

  switch (autos[AUTOID].marca) {
    case "Renault":
    autos[AUTOID].img = "img-autos/renault.jpg"
    break;
    
     case "Audi":
     autos[AUTOID].img = "img-autos/audi.jpg"
     break
      
     case "Mercedes":
     autos[AUTOID].img = "img-autos/mercedes.jpg"
     break
    
     case "Tesla":
     autos[AUTOID].img = "img-autos/tesla.jpg"
     break
    
     case "Nissan":
     autos[AUTOID].img = "img-autos/nissan.jpg"
     break
      
     default:
      autos[AUTOID].img = "https://www.laguiadelvaron.com/wp-content/uploads/2020/08/envuelve-carro-en-plastico-www.laguiadelvaron-1.jpg"
     break
  }
  resetForm();
  hiddenForm();
  printAutos(autos);
}



//------------------------------------------cambia botones --------------------------------------------

const btnEditar = (()=>{
  const button = getIdSubmitButton();
  button.innerHTML = 'Editar';
  button.classList.remove('btn-primary');
  button.classList.add('btn-warning');
  button.value = EDIT;
});

const btnCreate = (()=>{
  const button = getIdSubmitButton();
  button.innerHTML = 'Guardar producto';
  button.classList.add('btn-primary');
  button.classList.remove('btn-warning');
  button.value = CREATE;
});

const messageAction = (()=>{
  const touchBtn = getIdSubmitButton().value;
  if (touchBtn === EDIT){
      editAuto();
  }else{
      addAuto();
  }
});

printAutos(autos);