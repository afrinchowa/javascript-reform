// localStorage.setItem('userId',87934342);

const addToLocalStorage =() =>{
const idInput =document.getElementById('storage-id') ;
const id =idInput.value;
const valueInput =document.getElementById('storage-value') ;
const value =valueInput.value;

//
if(id && value){
   localStorage.setItem(id,value); 
}

idInput.value ='';
valueInput.value ='';

}
// if i want to add an array 
localStorage.setItem('friends',JSON.stringify([42,34,45]) )
const pen={

}
localStorage.setItem('pen',JSON.stringify(pen))