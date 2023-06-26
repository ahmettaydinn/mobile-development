import UIKit
//Veri okuma
var kisi = ("ahmet","aksoy") 

var ad = kisi.0
var soyad = kisi.1

print(ad)
print(soyad)

var nokta = (x:10,y:20)

print(nokta.x)
print(nokta.y)

//Veri atama

kisi.0 = "mehmet"

print(kisi)

nokta.x = 999

print(nokta)

var hataMesaji = (404,"Not found")

var (kod,mesaj) = hataMesaji

print(kod)
print(mesaj)

//İç içe

var ogrenci:(Int,(Bool,String)) = (1256,(true,"Ahmet"))

print(ogrenci.0)
print(ogrenci.1.0)
print(ogrenci.1.1)
