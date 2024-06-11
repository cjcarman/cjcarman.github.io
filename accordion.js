! function()
{
    for (var accordionMenu = document.querySelectorAll(".my-accordion .menu"), i = 0; i < accordionMenu.length; i++)
    {
        accordionMenu[i].addEventListener("click", onClick);
    }

    function onClick()
    {
        for (var accordionPanel = document.querySelectorAll(".my-accordion .panel"), j = 0; j < accordionPanel.length; j++)
        {
            accordionPanel[j].className = "panel close"
        }

        if (-1 == this.className.indexOf("active"))
        {
            for (k = 0; k < accordion.length; k++)
            {
                accordionMenu[k].className = "menu";
            }

            this.className = "menu active", this.nextElementSibling.className = "panel open"
        }
        else
        {
            for (l = 0; l < accordionMenu.length; l++)
            {
                accordionMenu[l].className = "menu"
            }
                
        }
    }
}();