import UIKit

class Ogrenci {
    var ad:String?
}

// Class, referans tipidir
// Hafiza icin daha iyidir.
var ogrenci1 = Ogrenci()
ogrenci1.ad = "Ahmet"

var ogrenci2 = ogrenci1
ogrenci2.ad = "Mehmet"

print(ogrenci1.ad!)

struct Kopek {
    var renk:String?
}
// Structure, deger tipidir.
// Basit islemler icin daha iyidir.
var kopek1 = Kopek()
kopek1.renk = "Kırmızı"

var kopek2 = kopek1
kopek2.renk = "Beyaz"

print(kopek1.renk!)
