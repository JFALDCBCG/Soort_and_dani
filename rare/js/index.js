/*
const {
	
}=require('pg');
*/
document.addEventListener('DOMContentLoaded', ()=>{
    /*
     * BASIC
     */
    const modalA=document.getElementById('modal-container-a'),
        btnModl=document.getElementById('btnModl'),
        btnCanModlA=document.getElementById('btnCanModlA'),
        btnAccModlA=document.getElementById('btnAccModlA'),
        
        modalB=document.getElementById('modal-container-b'),
        btnLog=document.getElementById('btnLog'),
        btnCanModlB=document.getElementById('btnCanModlB'),
        btnAccModlB=document.getElementById('btnAccModlB'),

        name=document.getElementById('name'),
        id=document.getElementById('ID'),
        course=document.getElementById('course'),

        lName=document.getElementById('lName'),
        lId=document.getElementById('lId'),

        dModAlert=document.getElementById('d-m-alert')
        dLogAlert=document.getElementById('d-l-alert')
        dAlert=document.getElementById('d-alert'),
        table=document.getElementById('table');

    function addElmt(){
        dAlert.style.display='none';
        dModAlert.style.display='block';
        if(name.value==='' || id.value==='' || course.value===''){
            dAlert.style.display='none'
            dModAlert.style.backgroundColor='rgb(201, 30, 30)';
            dModAlert.innerHTML='Inserta datos de forma completa';
        }
        else{
            dAlert.style.display='block'
            dModAlert.style.display='none';
            dAlert.style.backgroundColor='rgb(240, 222, 151)';
            dAlert.innerHTML='Datos insertados de forma correcta';
            
            modalA.classList.remove('show');
            const row=table.insertRow();
            row.innerHTML=`
                <tr>
                    <td>${id.value}</td>
                    <td>${name.value}</td>
                    <td>${course.value}</td>
                </tr>
            `;
        }
    }
    function chkElmt(){
        dAlert.style.display='none';
        dLogAlert.style.display='block';
        if(lName.value==='' || lId.value===''){
            dAlert.style.display='none'
            dLogAlert.style.backgroundColor='rgb(201, 30, 30)';
            dLogAlert.innerHTML='Completa todas las casillas para poder ingresar';
        }
        else{
            dAlert.style.display='none'
            dLogAlert.style.backgroundColor='rgb(131, 237, 121)';
            dLogAlert.innerHTML='Datos insertados correctamente';
        }
    }
    /*
     * OPERATING 
     */
    btnModl.onclick=()=>{
        modalA.classList.add('show');
    }
    btnCanModlA.onclick=()=>{
        modalA.classList.remove('show');
        dModAlert.style.display='none';
    }

    btnLog.onclick=()=>{
        modalB.classList.add('show');
        dAlert.style.display='none'
    }
    btnCanModlB.onclick=()=>{
        modalB.classList.remove('show');
    }

    btnAccModlA.onclick=addElmt
    btnAccModlB.onclick=chkElmt
});
