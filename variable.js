// deklarasi nama variable
var name;

//set nilai variable name
name = "hmti"

//tampilan di console
console.log("namanya: " + name);

//tipe data number 
var angka1 = 10; //integer
var angka2 = 5.5; // double // float

// tipe data boolean
var sudahNikah = true; // atau false

console.log(name + angka1);
console.log(angka1 + angka2);
console.log(sudahNikah);

//tipe data array
var names = ["Fardan", "Ibnu", "Egi", "Asep", "Ega", "Arya", "Ica", "Chealsea", "Denny", "Kemal",25];

console.log(names);
console.log(names[2]);
console.log("Data Terakhir", names[names.length - 1]);
console.log("Total: ", names.length);

var biodata = ["Kemal", "20", "Bekasi"];

var biodata = {
    nama : "Kemal",
    umur : "20",
    address : "Bekasi",
    hobbi : ["coding", "Menyanyi", "Bola", "Nyuci baju"],
    ucapkata: function () {
        console.log("Ada apinya gais!!!");
    }
};

console.log(biodata);
console.log("namanya: ", biodata.name);
console.log("Umurnya: ", biodata["umur"]);
console.log("hobi ke 2", biodata.hobbi);
console.log("hobi ke 3", biodata["hobbi"][2]);
console.log("hobbi terakhir", biodata.hobbi[biodata.hobbi.length - 1]);
biodata.ucapkata();

//array of object
var peserta = [
    {
        nama : "Fardan",
        umur : "20",
    },
    {
        nama : "Arya",
        umur : "20",
        address : "Kayuringin",    
    }
];

console.log(peserta);
console.log(" Peserta Pertama", peserta[0]["nama"]);
console.log(" Umur peserta pertama", peserta[0].umur);