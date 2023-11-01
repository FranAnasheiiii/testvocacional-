window.addEventListener('load', () => {
    const btn2 = document.getElementById("botonsiguiente2");
    btn2.addEventListener("click", ()=>{
        const url = new URL((window.location.href).toLowerCase());

        const params = url.searchParams.get("prev")?.split(",");
        

        let contadores = [0,0,0];
        if(params){
            params.forEach((param, i) => {
                contadores[i] = parseInt(param);
            })
        }

        const targetInf = document.getElementById("targetInf")
        const targetElec = document.getElementById("targetElec")
        const targetConst = document.getElementById("targetConst")

        targetInf.innerText = "Contador informatica: " + contadores[0];
        targetElec.innerText = "Contador electronica: " + contadores[1];
        targetConst.innerText = "Contador construcciones: " + contadores[2];
        
    })
})

window.addEventListener('load', () => {
    const url = new URL((window.location.href).toLowerCase());

        const params = url.searchParams.get("prev")?.split(",");
        

        let contadores = [0,0,0];
        if(params){
            params.forEach((param, i) => {
                contadores[i] = parseInt(param);
            })
        }

        const targetInf = document.getElementById("targetInf")
        const targetElec = document.getElementById("targetElec")
        const targetConst = document.getElementById("targetConst")

        let porcentajes = [0,0,0];
        let total = 0;
        contadores.forEach(contador => {
            total = total + contador;
        })
        contadores.forEach((contador, i) => {
            porcentajes[i] = 100 * Math.floor((contador / total) * 1e2) / 1e2;
        })

        targetInf.innerText = porcentajes[0] + "%";
        targetElec.innerText = porcentajes[1] + "%";
        targetConst.innerText = porcentajes[2] + "%";
    })
