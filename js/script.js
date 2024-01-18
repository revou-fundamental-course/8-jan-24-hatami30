function calculate() {
    let sideLength = parseFloat(document.getElementById("sideLength").value);

    if (!isNaN(sideLength)) {
        let area = sideLength * sideLength;
        let perimeter = 4 * sideLength;

        document.getElementById("result").innerHTML = "Luas: " + area + "<br>Keliling: " + perimeter;
    } else {
        alert("Masukkan nomor yang valid untuk panjang sisi.");
    }
}
