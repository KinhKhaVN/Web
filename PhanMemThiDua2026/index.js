window.onload = function ()
{
        
        if (!location.hash)
        {
                location.hash = "#trangchu";
        }

    const links = document.querySelectorAll(".nav-bar a");

    links.forEach(link => {
        link.addEventListener("click", function () {

            links.forEach(a => a.classList.remove("active"));
            this.classList.add("active");
        });
    });
}

function darkMode()
{
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;

        themeToggle.addEventListener('click', () =>{

                body.classList.toggle('dark-mode');
        });
}

darkMode();


