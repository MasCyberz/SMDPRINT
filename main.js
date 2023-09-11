var nav = document.querySelector('nav');

        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 100) {
                nav.classList.add('bg-body',);
            } else {
                nav.classList.remove('bg-body');
            }
        });

        function buy(product_name) {
            const message = `Halo saya mau ${product_name}`
            const whatsapp = `https://wa.me/6281211273545?text=${message}`
            open(whatsapp, "_blank")
        }


        VanillaTilt.init(document.querySelector(".container-porto"), {
            scale:1.2,
            max: 25,
            speed: 400
        });
        

        document.addEventListener("DOMContentLoaded", function () {
            var currentYear = new Date().getFullYear();
            var copyrightElement = document.getElementById("copyright");
            if (copyrightElement) {
                copyrightElement.innerText = currentYear;
            }
        });