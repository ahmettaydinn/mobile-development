import UIKit

func islem(sayilar:[Int])-> (toplam:Int,carpma:Int){
    var toplam = 0
    var carpma = 1
    for s in sayilar {
        toplam = toplam + s
        carpma = carpma * s
    }
    
    return (toplam,carpma)
}

var dizi = [1,2,3,4,5]

let b = islem(sayilar: dizi)

print(b.toplam)
print(b.carpma)


// optional geri donus degeri

func hesapla (sayi1:Int, sayi2:Int) -> Int? {
    let sonuc = sayi1*2 + sayi2*4
    return sonuc
}

var a = hesapla(sayi1: 10, sayi2: 20)

if let t = a {
    print("Sonuc : \(t)")
}
