const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach( tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach( tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})
const searchFun = () =>{
    let filter = document.getElementById('input').value.toUpperCase();
    let table = document.getElementById('table');
    let tr = table.getElementsByTagName('tr');
    for(var i = 0; i < tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[0];

        if(td){
            let textValue = td.textContent;
            if(textValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
}
