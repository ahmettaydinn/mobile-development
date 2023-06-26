import UIKit

var yas = 19
var isim = "Mehmet"

//Örnek 1

if yas >= 18 {
    print("Reşitsiniz")
}

//Örnek 2 : ELSE

if yas >= 18 {
    print("Reşitsiniz")
}else{
    print("Reşit değilsiniz")
}

//Örnek 3 : String kıyaslama

if isim == "Ahmet" {
    print("Merhaba Ahmet")
}else{
    print("Tanınmayan Kişi")
}

//Örnek 4 : else if

if isim == "Ahmet" {
    print("Merhaba Ahmet")
}else if isim == "Mehmet" {
    print("Merhaba Mehmet")
}else{
    print("Tanınmayan Kişi")
}

//Örnek 5 : Çoklu Şart and

var kullaniciAdi = "admin"
var sifre = 12345

if sifre == 1234 && kullaniciAdi == "admin"{
    print("Hoşgeldiniz")
}else{
    print("Hatalı Giriş")
}

//Örnek 6 : Çoklu şart or

var sinif = 8

if sinif == 9 || sinif == 10 || sinif == 11 || sinif == 12 {
    print("AYT sınıvına hazırlanabilirsin")
}

//Örnek 7 : Ternary Conditional : Üçlü şart

var a = 10
var b = 10

a == b ? print("Eşit") : print("Eşit Değil")
