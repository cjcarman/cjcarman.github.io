! function()
{
    for (var accordion = document.querySelectorAll(".my-accordion .menu"), i = 0; i < accordion.length; i++)
    {
        accordion[i].addEventListener("click", onClick);
    }

    function onClick()
    {
        for (var e = document.querySelectorAll(".my-accordion .panel"), j = 0; j < e.length; j++)
        {
            e[j].className = "panel close"
        }

        if (-1 == this.className.indexOf("active"))
        {
            for (k = 0; k < accordion.length; k++)
                accordion[k].className = "menu";

            this.className = "menu active", this.nextElementSibling.className = "panel open"
        } else
        {
            for (l = 0; l < accordion.length; l++)
                accordion[l].className = "menu"
        }
    }
}();