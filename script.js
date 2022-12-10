//Toggle buttons
const toggle=document.querySelectorAll('.toggle');
const nav=document.querySelector('.navbar');

toggle.forEach(btn=>{
    btn.addEventListener('click',()=>{
        if(btn.classList.contains('open')){
                nav.classList.add('active');
                document.querySelector('.header img').style.display='block';
     
        }
        else{
                nav.classList.remove('active'); 
                document.querySelector('.header img').style.display='none';       
        }
})
});

//service list background change

const list=document.querySelectorAll('.service li');
const backgroundImg=document.querySelector('.service img');

list.forEach(item=>{
        item.addEventListener('mouseover',()=>{
                if(item.classList.contains('logo')){
                        backgroundImg.src="https://rno1.com/media/pages/capabilities/branding-identity/349589516d-1646240653/capabilities-branding-r-1920x994.jpg";
                }
                if(item.classList.contains('web')){
                        backgroundImg.src="https://rno1.com/media/pages/capabilities/websites-digital-platforms/161a12a9b0-1646240653/capabilities-web-r-1920x994.jpg";
                }
                if(item.classList.contains('host')){
                        backgroundImg.src='https://rno1.com/media/pages/capabilities/web3-experience-design/d375fbf443-1649850640/capabilities-web3-r-1920x994.jpg';
                }
                if(item.classList.contains('app')){
                        backgroundImg.src='https://rno1.com/media/pages/capabilities/ecommerce-experiences/7bec86d4d2-1646240653/capabilities-e-comm-r-1920x994.jpg';
                }
                if(item.classList.contains('network')){
                        backgroundImg.src='https://rno1.com/media/pages/capabilities/vr-ar-environments/8a744b05a5-1646240653/capabilities-vr-r-1920x994.jpg';
                }
        })
})
//Animation scroll 
const observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
                if(entry.isIntersecting){
                        entry.target.classList.add('scroll-anim')
                }else{
                        entry.target.classList.remove('scroll-anim')
                }
        })
});

const hiddenElements=document.querySelectorAll('#hidden')
hiddenElements.forEach(element=>{
        observer.observe(element);
})

