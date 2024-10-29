let lastScrollTop = 0;

document.addEventListener('DOMContentLoaded', function () {
    // Set the initial scroll position
    lastScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    const sidebarLinks = document.querySelectorAll('.sidebar a');

    // Add click event listener to each link
    sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove the 'active' class from all links
        sidebarLinks.forEach(link => link.classList.remove('active'));

        // Add the 'active' class to the clicked link
        this.classList.add('active');
        });
    });

    window.addEventListener('scroll', function () {
        let navbar = document.getElementById('navbar');
        
        let homeText = document.querySelector('#home span');
        let carText = document.querySelector('#cars span');
        let locateText = document.querySelector('#locate span');

        let loginText = document.querySelector('#login span');
        let aboutText = document.querySelector('#about span');

        const navLinks = document.querySelectorAll('.navbar a');
        const sidebarLinks = document.querySelectorAll('.sidebar a');
        
        let currentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        // Debugging logs to check scroll positions
         console.log("Current Scroll Position:", currentScrollTop);
        // console.log("Last Scroll Position:", lastScrollTop);

        // If at the top of the page
        if (currentScrollTop === 0) {
            navbar.classList.remove('shrink');
            // logoImg.src = "images/Carlogo.png";
            // logoImg.style.height = '125px';

            // navLinks.forEach(link => {
            //     link.classList.remove('shrink-padding');
            // });

            if (homeText != null){
                homeText.style.display = '';
            }

            if (carText != null){
                carText.style.display = '';
            }
                
            if (locateText != null){
                locateText.style.display = '';
            }

            if (loginText != null){
                loginText.style.display = '';
            }
            if (aboutText != null){
                aboutText.style.display = '';
            } 
        } 
        else {
            navbar.classList.add('shrink');
            if (homeText != null){
                homeText.style.display = 'none';
            }

            if (carText != null){
                carText.style.display = 'none';
            }
                
            if (locateText != null){
                locateText.style.display = 'none';
            }

            if (loginText != null){
                loginText.style.display = 'none';
            }
            if (aboutText != null){
                aboutText.style.display = 'none';
            } 
        }

        sidebarLinks.forEach(link => link.classList.remove('active'));
        if (sidebarLinks.length != 0){
            if ( (currentScrollTop >= 0) && (currentScrollTop <= 500) ) {
        
                sidebarLinks[0].classList.add('active');
    
            }else if ( (currentScrollTop > 500) && (currentScrollTop <= 1554) ){
       
                sidebarLinks[1].classList.add('active');
            }
            else if ( (currentScrollTop > 1220) && (currentScrollTop <= 2354) ){
          
                sidebarLinks[2].classList.add('active');
            }
            else if (currentScrollTop > 2354) {
              
                sidebarLinks[3].classList.add('active');
            }
        }
        
        lastScrollTop = currentScrollTop;
    });
});
