# MiniMarket
# Indomerit Inventory System

⏰ estimated time: ~210 minutes

[Link Demo](https://warm-depths-28950.herokuapp.com/)

Buatlah sebuah system pendataan inventori barang yang akan digunakan oleh waralaba terkenal yaitu `Indomerit`. Baca dengan teliti spesifikasi yang tertulis.

Nama database yang akan digunakan adalah: `p1_live_code_week_4`

## Release 0

Buatlah migration dan model untuk:

_1. Category_

-   name (string)
-   category_code (string)

_2. Product_

-   name (string)
-   sku (string)
-   quantity (number)
-   price (number)
-   is_discontinued (boolean)

## Release 1

Relasi antara `Category` dan `Product` adalah sebagai berikut:

-   1 `Category` bisa memiliki banyak `Product`
-   1 `Product` hanya memiliki 1 `Category`

Buatlah migration baru untuk menambahkan kolom-kolom yang dibutuhkan sehingga aplikasi yang dibuat bisa memenuhi kriteria diatas.

## Release 2

Buatlah _seeding_ untuk meng-input list `Category` yang akan menjadi referensi dari `Product` yang akan dimasukan ke dalam sistem.

| name   | category_code |
| ------ | ------------- |
| Sabun  | sbn           |
| Susu   | ss            |
| Snack  | snk           |
| Minyak | myk           |

## Release 3

Buatlah routing yang **HARUS** mengikuti format berikut:

| Method | Route                                    | Description                                                                                                                                                                    |
| ------ | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| GET    | /products                                | Menampilkan seluruh `Product` yang tersedia dengan status `is_discontinued` _false_                                                                                                                                    |
| POST   | /products/add                            | Menambahkan data `Product`                                                                                                                                                     |
| GET    | /products/add                            | Menampilkan form untuk menambahkan `Product`                                                                                                                                   |
| GET    | /products/category/:category_id           | Menampilkan seluruh `Product` yang berada dalam category tertentu (berdasarkan query params)                                                                                   |
| GET    | /products/:product_id/discontinued        | Melakukan update terhadap `Product` ketika `Product` sudah tidak lagi diproduksi, dan melakukan perubahan pada field `is_discontinued` menjadi _true_ |
| GET    | /products/discontinued                   | Menampilkan seluruh `Product` yang telah discontinued                                                                                                                          |
| GET    | /products/discontinued/:product_id/remove | Menghapus `Product` **yang telah discontinued**                                                                                                                                |

## Release 4

Pada routing `/products/add` tampilkanlah form untuk menambahkan product ke dalam database dengan rule sebagai berikut:

-   input type `name` adalah text/string
-   input type `quantity` adalah integer
-   input type `price` adalah integer
-   input type `category_id` adalah dropdown/select option, dimana valuenya diambil dari data `Category` yang telah diseed sebelumnya dan disimpan di dalam database berupa ID relasi
-   button `Submit` yang digunakan untuk melakukan submission data product ke dalam database

## Release 5

Masih berada dalam form pada release 4, tambahkanlah action pada button submit yang apabila ditekan akan mengakses routing `/products/add` dengan method POST dan akan menyimpan data ke dalam database. Buatlah validasi pada **server** dengan rule sebagai berikut:

-   Semua field _required_
-   Field `quantity` dan `price` harus memiliki value lebih dari 0

Ketika salah satu validasi tidak terpenuhi tampilkanlah error message (diperbolehkan menggunakan res.send selama error message yang ditampilkan jelas dan sesuai dengan error yang terjadi)

## Release 6

Sebelum menyimpan data product ke dalam database, set `is_discontinued` menjadi _false_ dan serta buatlah hooks untuk meng-generate `sku` untuk setiap product yang didapatkan dari hasil kombinasi `category_code` (tergantung category dari product tersebut) dan `name` dan setiap spasi akan digantikan dengan karakter `_`. Berikut contohnya jika product yang dimasukan memiliki category `Sabun`:

-   name: Lovboy
-   quantity: 5
-   price: 15000
-   is_discontinued: false
-   sku: sbn_Lovboy (wajib dibuat melalui hooks)

Setelah data berhasil tersimpan di database, arahkan user ke halaman `/products`

## Release 7

Pada routing `/products` tampilkanlah sebuah tabel yang berisi list dari product yang terdapat di dalam database dan belum _discontinued_ (is_discontinued _false_). Data yang akan ditampilkan terdiri dari `Nama`, `SKU`, `Quantity`, `Price`, `Category` (nama dari kategori product), `Is Discontinued` dan `Action`. Pada kolom `Action` terdapat sebuah link dengan label `Set Discontinue` dan `Explore Category` dengan routing sebagai berikut:

-   `Set Discontinued` => `/products/:product_id/discontinued`
-   `Explore Category` => `/products/category/:category_id`

Detail action akan dijelaskan pada Release selanjutnya.

## Release 8

Pada saat user meng-klik action pada routing `/products` lakukanlah hal-hal berikut:

_- Set Discontinued_

Ubahlah status `Product` tersebut menjadi `is_discontinued` _true_, setelah action berhasil dilakukan arahkan user kembali ke halaman `/products` dan `Product` harus hilang dari list `Product`

_- Explore Category_

Tampilkanlah sebuah tabel yang serupa dengan tabel yang ditampilkan pada routing `/products` namun, tampilkanlah hanya `Product` yang berada pada `Category` yang dimaksud (category_id pada query params), belum _discontinued_ (is_discontinued _false_) dan tanpa kolom `Action`.

## Release 9

Pada routing `/products/discontinued` tampilkanlah sebuah tabel yang berisi list dari seluruh `Product` yang telah telah discontinued (is_discontinued \_true_) dan memiliki kolom `Nama`, `SKU`, `Quantity`, `Price`, `Category` (nama dari kategori product), `Is Discontinued` dan `Action`. Pada kolom `Action` tampilkanlah sebuah link dengan label `Remove` yang ketika diklik akan mengarahkan user pada routing `/products/discontinued/:product_id/remove` (detail action akan dijelaskan pada Release selanjutnya)

## Release 10

Pada routing `/products/discontinued/:product_id/remove`, hapuslah `Product` terkait dari dalam database, setelah action berhasil dilakukan, arahkan user kembali ke halaman `/products/discontinued`

## Release 11

Buatlah sebuah `helper` untuk nantinya digunakan untuk mem-format price kedalam bentuk rupiah. Seperti contoh berikut:

-   `15000` => `Rp 15.000,00`
-   `100000` => `Rp 100.000,00`
-   `8000` => `Rp 8.000,00`

Terapkanlah `helper` ketika menampilkan `Product` pada routing `/products`, `/products/category/:category_id` dan `/products/discontinued`
