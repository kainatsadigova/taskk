let getButon=document.querySelector('.getbuton');
function getAll() {
    axios.get('https://northwind.vercel.app/api/suppliers')
    .then(res=>console.log(res.data));

}
// getButon.addEventListener('click',getAll)



let form = document.querySelector('#myF');


let companyName = document.querySelector('#company');
let contactName = document.querySelector('#contact');
let title = document.querySelector('#title');

form.addEventListener('submit',(e)=>{

e.preventDefault();

    let obj = {companyName :company.value, contactName: contactName.value, title: title.value}
    axios.get('https://northwind.vercel.app/api/suppliers', obj)

    .then(res=>console.log(res.data));
})




