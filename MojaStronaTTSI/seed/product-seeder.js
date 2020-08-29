var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });

var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/2018_Mercedes-Benz_B220d_Exclusive_Edition_2.1_Front.jpg/280px-2018_Mercedes-Benz_B220d_Exclusive_Edition_2.1_Front.jpg',
        title: 'Mercedes-Benz klasy B',
        description: 'Samochód osobowy typu kompaktowy minivan produkowany od 2004 roku przez koncern Mercedes-Benz. W 2018 roku zadebiutuje trzecia generacja oznaczona kodem W247.',
        price: 480500
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Mercedes-Benz_SLS_AMG_%28C_197%29_%E2%80%93_Frontansicht_ge%C3%B6ffnet%2C_10._August_2011%2C_D%C3%BCsseldorf.jpg/280px-Mercedes-Benz_SLS_AMG_%28C_197%29_%E2%80%93_Frontansicht_ge%C3%B6ffnet%2C_10._August_2011%2C_D%C3%BCsseldorf.jpg',
        title: 'Mercedes-Benz SLS AMG (C197 / R197)',
        description: 'Superamochód marki Mercedes-Benz produkowany w latach 2010 – 2014. Pojazd został zaprezentowany we Frankfurcie w 2009 roku.',
        price: 780300
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Mercedes-Benz_CLS_350_BlueEFFICIENCY_Edition_1_%28C_218%29_%E2%80%93_Frontansicht_%282%29%2C_16._April_2011%2C_D%C3%BCsseldorf.jpg/280px-Mercedes-Benz_CLS_350_BlueEFFICIENCY_Edition_1_%28C_218%29_%E2%80%93_Frontansicht_%282%29%2C_16._April_2011%2C_D%C3%BCsseldorf.jpg',
        title: 'W218 Mercedes-Benz CLS',
        description: 'Samochód osobowy klasy średniej-wyższej produkowany od 2011 roku przez firmę Mercedes-Benz. Powstał jako następca dla serii C219.',
        price: 675300
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/University_Park_MMB_%C2%BB23_%28cropped%29.jpg/280px-University_Park_MMB_%C2%BB23_%28cropped%29.jpg',
        title: 'Mercedes-Benz SLK-Class (SLC-Class) (series R172)',
        description: 'Sportowy samochód osobowy produkowany przez niemiecką firmę Mercedes-Benz w latach 2011 - 2018[1]. W 2015 roku samochód zmienił nazwę z SLK na SLC',
        price: 550800
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Mercedes-Benz_A_200_AMG_Line_%28W_176%29_%E2%80%93_Frontansicht%2C_25._Mai_2013%2C_Hilden.jpg/280px-Mercedes-Benz_A_200_AMG_Line_%28W_176%29_%E2%80%93_Frontansicht%2C_25._Mai_2013%2C_Hilden.jpg',
        title: 'Mercedes-Benz W222',
        description: 'samochód osobowy klasy luksusowej produkowany przez niemiecką firmę Mercedes-Benz od lipca 2013 roku.',
        price: 675600
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}