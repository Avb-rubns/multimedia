$("#add").click(() =>{ 
    let a = parseFloat($("#a").val())
    let b = parseFloat($("#b").val())
    let c = a+b
    $("#c").val(c)
});
$("#div").click(() =>{ 
    let a = parseFloat($("#a").val())
    let b = parseFloat($("#b").val())
    let c = a/b
    $("#c").val(c)
});
$("#mul").click(() =>{ 
    let a = parseFloat($("#a").val())
    let b = parseFloat($("#b").val())
    let c = a*b
    $("#c").val(c)
});
$("#res").click(() =>{ 
    let a = parseFloat($("#a").val())
    let b = parseFloat($("#b").val())
    let c = a-b
    $("#c").val(c)
});
 //obigame