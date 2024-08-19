window.onload = function() {
    // Mengubah teks heading setelah halaman dimuat
    document.querySelector('h1').textContent = "Latihan JavaScript Selesai";

    // Deklarasi variabel
    let name = "John";
    const age = 30;

    // Tampilkan nama dan umur
    document.getElementById('output').innerHTML = `<p>Name: ${name}</p><p>Age: ${age}</p>`;

    // Deklarasi array fruits
    let fruits = ["Apple", "Banana", "Mango"];
    document.getElementById('output').innerHTML += "<p>Fruits:</p><ul>";
    fruits.forEach(function(fruit) {
        document.getElementById('output').innerHTML += `<li>${fruit}</li>`;
    });
    document.getElementById('output').innerHTML += "</ul>";

    // Deklarasi objek person
    let person = {
        firstName: "John",
        lastName: "Doe",
        age: 30
    };
    document.getElementById('output').innerHTML += `<p>Person: ${person.firstName} ${person.lastName}</p>`;

    // Array students
    let students = ["Alice", "Bob", "Charlie"];
    students.push("David");

    // Tampilkan semua nama siswa
    document.getElementById('output').innerHTML += "<p>Students:</p><ul>";
    students.forEach(function(student) {
        document.getElementById('output').innerHTML += "<li>" + student + "</li>";
    });
    document.getElementById('output').innerHTML += "</ul>";

    // Objek car
    let car = {brand: "Toyota", model: "Corolla", year: 2020};

    // Tampilkan semua properti dari car
    document.getElementById('output').innerHTML += "<p>Car Properties:</p><ul>";
    for (let key in car) {
        document.getElementById('output').innerHTML += "<li>" + key + ": " + car[key] + "</li>";
    }
    document.getElementById('output').innerHTML += "</ul>";

    // Array of objects untuk menyimpan data beberapa mobil
    let cars = [
        {brand: "Toyota", model: "Corolla", year: 2020},
        {brand: "Honda", model: "Civic", year: 2018},
        {brand: "Ford", model: "Mustang", year: 2021}
    ];

    // Tampilkan informasi setiap mobil
    document.getElementById('output').innerHTML += "<p>Cars:</p>";
    cars.forEach(function(car) {
        document.getElementById('output').innerHTML += "<p>" + car.brand + " " + car.model + " (" + car.year + ")</p>";
    });

    // Fungsi greet
    function greet(name) {
        return "Hello, " + name;
    }

    // Tampilkan hasil dari fungsi greet
    document.getElementById('output').innerHTML += "<p>" + greet("Fasya") + "</p>";
    document.getElementById('output').innerHTML += "<p>" + greet("Nayla") + "</p>";

    // Fungsi calculateSquare
    function calculateSquare(number) {
        return number * number;
    }

    // Tampilkan hasil dari fungsi calculateSquare
    document.getElementById('output').innerHTML += "<p>Square of 4: " + calculateSquare(4) + "</p>";
    document.getElementById('output').innerHTML += "<p>Square of 7: " + calculateSquare(7) + "</p>";

    // Arrow function untuk menjumlahkan dua angka
    const addNumbers = (num1, num2) => num1 + num2;

    // Tampilkan hasil dari arrow function
    document.getElementById('output').innerHTML += "<p>Sum of 5 and 3: " + addNumbers(5, 3) + "</p>";
};

// Fungsi untuk memeriksa nilai
function checkValue() {
    let userInput = document.getElementById('userInput').value;
    userInput = parseInt(userInput);
    let output = document.getElementById('output');

    // Cek nilai dengan if...else
    if (userInput > 10) {
        output.innerHTML = "<p>Nilai lebih besar dari 10.</p>";
    } else if (userInput === 10) {
        output.innerHTML = "<p>Nilainya sama dengan 10.</p>";
    } else {
        output.innerHTML = "<p>Nilai kurang dari 10.</p>";
    }

    // Tampilkan angka 1 sampai userInput
    output.innerHTML += "<p>Angka dari 1 sampai " + userInput + ":</p><ul>";
    for(let i = 1; i <= userInput; i++) {
        output.innerHTML += "<li>" + i + "</li>";
    }
    output.innerHTML += "</ul>";
}
