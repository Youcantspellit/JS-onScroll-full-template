let header = document.querySelector("header")
window.addEventListener("scroll", function (e) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.style.height = "70px"
        document.getElementById("headerTitle").style.fontSize = "34px";
        header.style.justifyContent = "left";
    } else {
        header.style.height = "150px"
        document.getElementById("headerTitle").style.fontSize = "74px";
        header.style.justifyContent = "center";
    }

    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        console.log(e)
        document.getElementById("d1").style.opacity = "1";
        document.getElementById("d2").style.opacity = "1";
        document.getElementById("d3").style.opacity = "1";
        document.getElementById("d4").style.opacity = "1";
    }
})

//$("#mainTitle").slideDown()

$("#mainTitle").animate({ left: 150 })
$("#mainPar").animate({ left: 150 })

