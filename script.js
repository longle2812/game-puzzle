    document.getElementById("pic1").addEventListener("click", changepic1);
    document.getElementById("pic2").addEventListener("click", changepic2);
    document.getElementById("pic3").addEventListener("click", changepic3);
    let count1 = 1;
    let count2 = 1;
    let count3 = 1;
function changepic1() {
    count1 = count1 + 1;
    document.getElementById("pic1").src = ( count1 + "/1.jpg");
        check();
    if (count1 === 3) {
        count1 = 1;
        check();
    }
}
    function changepic2() {
        count2 = count2 + 1;
        document.getElementById("pic2").src = (count2 + "/2.jpg");
        check();
        if (count2 === 3) {
            count2 = 1;
        }
        check();
    }
    function changepic3() {
        count3 = count3 + 1;
        document.getElementById("pic3").src = (count3 + "/3.jpg");
        check();
        if (count3 === 3) {
            count3 = 1;
        }
        check();
    }

    function check() {
        if ((count1 === count2) && (count1 === count3)) {
            document.getElementById("pic1").style.border = "5px solid red";
            document.getElementById("pic2").style.border = "5px solid red";
            document.getElementById("pic3").style.border = "5px solid red";
        }
        else {
            document.getElementById("pic1").style.border = "5px solid white";
            document.getElementById("pic2").style.border = "5px solid white";
            document.getElementById("pic3").style.border = "5px solid white";
        }
    }