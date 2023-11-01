window.addEventListener('load', () => {
    const btn2 = document.getElementById("botonsiguiente2");
    btn2.addEventListener("click", ()=>{
        const url = new URL((window.location.href).toLowerCase());

        const params = url.searchParams.get("prev")?.split(",");
        

        const targetInf = document.getElementById("targetInf")
        let contadores = [0,0,0];
        if(params){
            params.forEach((param, i) => {
                contadores[i] = parseInt(param);
            })
        }
        const targetElec = document.getElementById("targetElec")
        const targetConst = document.getElementById("targetConst")
        

        let newInputs = [];
        
        const mxINP2 = 17;
        for(let i = 0; i <= mxINP2; i++){
            const input = document.getElementById("radio" + (i+31));
            console.log(input)
            if(input.checked){
                newInputs[i] = input.value;
            }
        }
        
        newInputs.forEach((input, i) => {
            contadores[i % 3] = contadores[i % 3] + 1;
        })

        window.location.href = "res.html?prev=" + contadores[0] + "," + contadores[1] + "," + contadores[2];
        
    })
})