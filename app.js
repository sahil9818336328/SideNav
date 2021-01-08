// getting the toggleButton
const btn = document.querySelector('.sidebar-toggle');

//getting the close button
const closeBtn = document.querySelector('.close-btn');
//console.log(btn);


//getting the sidebar
const sidebar = document.querySelector('.sidebar');
//console.log(sidebar);

btn.addEventListener('click',function(){
    if(sidebar.classList.contains('show-sidebar')){
        sidebar.classList.remove('show-sidebar');
    }else{
        sidebar.classList.add('show-sidebar');
    }
}
);

closeBtn.addEventListener('click',function(){
    if(sidebar.classList.contains('show-sidebar')){
        sidebar.classList.remove('show-sidebar');
    }else{
        sidebar.classList.add('show-sidebar');
    }
}
);