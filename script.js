function appendValue(val) {
    let display = document.getElementById("display");
    let angka = display.value.replace(/\D/g, "");

    angka += val;
    display.value = formatNumber(angka);
}

function clearDisplay() {
    document.getElementById("display").value = "0";
    document.getElementById("result-output").textContent = "Belum ada hasil...";
}

function formatNumber(num) {
    return parseInt(num).toLocaleString("id-ID");
}

function processMoney() {
    let nilai = document.getElementById("display").value.replace(/\D/g, "");
    nilai = parseInt(nilai);

    if (isNaN(nilai) || nilai <= 0) {
        document.getElementById("result-output").textContent = "Nominal tidak valid.";
        return;
    }

    let pecahan = [100000,50000,20000,10000,5000,2000,1000,500,200,100,];
    let hasil = "";

    pecahan.forEach(p => {
        let jml = Math.floor(nilai / p);
        if (jml > 0) {
            hasil += `${jml} x Rp ${p.toLocaleString("id-ID")}\n`;
            nilai -= jml * p;
        }
    });

    document.getElementById("result-output").textContent = hasil;
}
