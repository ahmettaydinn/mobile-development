import UIKit

//Örnek 1

var sayi = 10
print(10)

//Örnek 2 - Başlangıç değeri atamadan

var numara:Int?

numara = 20

print(numara!)

//Örnek 3 - Tek satırda birden fazla tanımlama

var sayi1 = 30 ,sayi2 = 40 ,kelime = "merhaba",harf = "f"

print(kelime)
print(sayi2)
print(sayi1)
print(harf)

//Örnek 4 - Değişkenin değerini daha sonra değiştirebiliriz.
var fiyat = 12.99

print(fiyat)

fiyat = 10.99

print(fiyat)

//Örnek 5 - Değişkenler ile işlem yaptıktan sonra tekrar bir değişkene aktarılabilir.
var s1 = 80
var s2 = 70

var toplam = s1 + 50

print(toplam)

//Örnek 6 - Type safety

var sonuc = 100

sonuc = 50
