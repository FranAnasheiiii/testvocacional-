window.addEventListener('load', () => {
    const btn = document.getElementById("botonsiguiente");
    btn.addEventListener("click", () => {

        let inputs = [];

        const mxINP = 28;
        for (let i = 0; i < mxINP; i++) {
            const input = document.getElementById("radio" + (i + 1));
            if (input.checked) {
                inputs[i] = input.value;
            }
        }

        const targetInf = document.getElementById("targetInf")
        const contadores = [0, 0, 0];
        const targetElec = document.getElementById("targetElec")
        const targetConst = document.getElementById("targetConst")

        if (inputs[0]) {
            contadores[0] = contadores[0] + 1;
        }
        if (inputs[1]) {
            contadores[1] = contadores[1] + 1;
        }
        if (inputs[2]) {
            contadores[2] = contadores[2] + 1;
        }


        if (inputs[3]) {
            contadores[0] = contadores[0] + 1;
        }

        if (inputs[4]) {
            contadores[1] = contadores[1] + 1;
        }
        if (inputs[5]) {
            contadores[2] = contadores[2] + 1;



        }
        if (inputs[7]) {
            contadores[0] = contadores[0] + 1;
        }
        if (inputs[8]) {
            contadores[1] = contadores[1] + 1;
        }
        if (inputs[9]) {
            contadores[2] = contadores[2] + 1;
        }


        if (inputs[11]) {
            contadores[0] = contadores[0] + 1;
        }
        if (inputs[12]) {
            contadores[1] = contadores[1] + 1;
        }
        if (inputs[13]) {
            contadores[2] = contadores[2] + 1;
        }


        if (inputs[14]) {
            contadores[0] = contadores[0] + 1;
        }
        if (inputs[15]) {
            contadores[1] = contadores[1] + 1;
        }
        if (inputs[16]) {
            contadores[2] = contadores[2] + 1;
        }


        if (inputs[18]) {
            contadores[0] = contadores[0] + 1;
        }
        if (inputs[19]) {
            contadores[1] = contadores[1] + 1;
        }
        if (inputs[20]) {
            contadores[2] = contadores[2] + 1;
        }


        if (inputs[21]) {
            contadores[0] = contadores[0] + 1;
        }
        if (inputs[22]) {
            contadores[1] = contadores[1] + 1;
        }
        if (inputs[23]) {
            contadores[2] = contadores[2] + 1;
        }


        if (inputs[24]) {
            contadores[0] = contadores[0] + 1;
        }
        if (inputs[25]) {
            contadores[1] = contadores[1] + 1;
        }
        if (inputs[26]) {
            contadores[2] = contadores[2] + 1;
        }

        if (inputs[28]) {
            contadores[2] = contadores[2] + 1;
        }

        window.location.href = "c2.html?prev=" + contadores[0] + "," + contadores[1] + "," + contadores[2];
    })
})