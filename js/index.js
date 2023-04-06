// Luas segitiga
function calculateTriangle(){
    const alas= document.getElementById("alas-luastriangle").value;
    const tinggi= document.getElementById("tinggi-luastriangle").value;
    const luas= alas*tinggi/2;
    const kolom1 = document.getElementById("kolom-1");
    const kolom2 = document.getElementById("kolom-2");
    const kolom3 = document.getElementById("kolom-3");
    kolom1.innerHTML = "L = 1/2 x T x A"
    kolom2.innerHTML = "L = 1/2 x " + tinggi + " x " + alas
    kolom3.innerHTML = luas;
    console.log(luas);
  }
//   Keliling Segitiga
  function calculateKTriangle(){
    const sisi1= document.getElementById("sisi1-kelilingtriangle").value;
    const sisi2= document.getElementById("sisi2-kelilingtriangle").value;
    const sisi3= document.getElementById("sisi3-kelilingtriangle").value;
    const keliling= Number(sisi1)+Number(sisi2)+Number(sisi3);
    const kolom1 = document.getElementById("kolom-4");
    const kolom2 = document.getElementById("kolom-5");
    const kolom3 = document.getElementById("kolom-6");
    kolom1.innerHTML = "K = A + B + C"
    kolom2.innerHTML = "K = " + sisi1 +" + "+ sisi2 +" + "+ sisi3
    kolom3.innerHTML = keliling;
    console.log(keliling);
  }
//   Luas Jajargenjang
function calculateParallelogram(){
    const alas= document.getElementById("alas-luasparallelogram").value;
    const tinggi= document.getElementById("tinggi-luasparallelogram").value;
    const luas= alas*tinggi;
    const kolom1 = document.getElementById("kolom-7");
    const kolom2 = document.getElementById("kolom-8");
    const kolom3 = document.getElementById("kolom-9");
    kolom1.innerHTML = "L = x T x A"
    kolom2.innerHTML = "L = " + tinggi + " x " + alas
    kolom3.innerHTML = luas;
    console.log(luas);
}
// Keliling Jajargenjang
function calculateKparallelogram(){
    const sisi1= document.getElementById("sisi1-kelilingparallelogram").value;
    const sisi2= document.getElementById("sisi2-kelilingparallelogram").value;
    const keliling= (Number(sisi1)+Number(sisi2))*2;
    const kolom1 = document.getElementById("kolom-10");
    const kolom2 = document.getElementById("kolom-11");
    const kolom3 = document.getElementById("kolom-12");
    kolom1.innerHTML = "K = 2 x (B + C)"
    kolom2.innerHTML = "K = 2 x " + sisi1 +" + "+ sisi2 
    kolom3.innerHTML = keliling;
    console.log(keliling);
  }