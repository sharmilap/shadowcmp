function shadowcmp() {
    let boxes = document.querySelectorAll('.shadowcmp');

    if(options.shadow_type === "big")
        options.shadow_type = "0px"
    else
        options.shadow_type = "15px"   
        
    boxes.forEach(box => {
        box.getElementsByClassName.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;
        
        if(options.padding){
            box.style.padding = "1em";
        }
    })
}

module.exports.shadowcmp = shadowcmp;