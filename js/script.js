// button click functions
let contact_btn = document.getElementById("btn_contact");
let company_btn = document.getElementById("btn_company");
let socials_btn = document.getElementById("btn_socials");
let contact_info_box = document.getElementById("contact_info_box");
let company_info_box = document.getElementById("company_info_box");
let socials_info_box = document.getElementById("socials_info_box");


// contact button here
contact_btn.addEventListener("click", function(){
    contact_btn.classList.add('active');
    company_btn.classList.remove('active');
    socials_btn.classList.remove('active');

    // info box start
    contact_info_box.classList.add('active');
    company_info_box.classList.remove('active');
    socials_info_box.classList.remove('active');
})
// company_btn button here
company_btn.addEventListener("click", function(){
    contact_btn.classList.remove('active');
    company_btn.classList.add('active');
    socials_btn.classList.remove('active');

    // info box start
    contact_info_box.classList.remove('active');
    company_info_box.classList.add('active');
    socials_info_box.classList.remove('active');
})
// socials_btn button here
socials_btn.addEventListener("click", function(){  
    contact_btn.classList.remove('active');
    company_btn.classList.remove('active');
    socials_btn.classList.add('active');
    
    // info box start
    contact_info_box.classList.remove('active');
    company_info_box.classList.remove('active');
    socials_info_box.classList.add('active');
})

