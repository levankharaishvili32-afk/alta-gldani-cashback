# alta.ge სქრეიპის ანგარიში

დაწყება: 2026-09-23 07:27
რეჟიმი: full + no-images

| მაჩვენებელი | რაოდენობა |
| --- | --- |
| CSV-ში სულ | 414 |
| დამუშავებული | 414 |
| წარმატებული | 409 |
| ვერ მოიძებნა alta.ge-ზე | 0 |
| შეცდომით დასრულდა | 5 |
| ფოტოს გარეშე | 0 |
| ფიდიდან აღდგენილი (მახასიათებლების გარეშე) | 0 |
| ხელით ამოღებული (excluded-products.json) | 0 |
| CSV-ში ფასის კონფლიქტით მონიშნული | 10 |

## ხელით ამოღებული (0)

ეს პროდუქტები ფასების ფაილშია, საიტზე კი განზრახ არ ხვდება —
`data/excluded-products.json`-ის მიხედვით. დასაბრუნებლად წაშალეთ იქიდან
შესაბამისი სტრიქონი და თავიდან გაუშვით `npm run scrape`.

_არცერთი._

## ფიდიდან აღდგენილი (0)

alta.ge მიუწვდომელი იყო, ამიტომ ეს პროდუქტები `data/alta-catalog.json`-იდან
აიწყო: დასახელება, ბრენდი, ფოტო და ბმული სწორია, **მახასიათებლები კი არ აქვთ** —
შესაბამისად შედარების ცხრილში ცარიელია და მახასიათებლების ფილტრი მათ ვერ პოულობს.
შემდეგი `npm run scrape`, როცა alta.ge ხელმისაწვდომია, ავტომატურად ჩაანაცვლებს.

_არცერთი._

## ვერ მოიძებნა alta.ge-ზე (0)

საძიებო API-მ ამ კოდებზე დამთხვევა ვერ დააბრუნა — პროდუქტი სავარაუდოდ მოხსნილია საიტიდან.

_არცერთი._

## შეცდომით დასრულდა (5)

| კოდი | CSV დასახელება | მიზეზი |
| --- | --- | --- |
| 135564 | HOCO BS47 Uno sports BT speaker FOC | not found on alta.ge (საძიებო API-მ კოდი ვერ იპოვა) |
| 175610 | Google Pixel 10a 8GB/128GB Obsidian | not found on alta.ge (საძიებო API-მ კოდი ვერ იპოვა) |
| 124369 | BRAUN SI5037VI | not found on alta.ge (საძიებო API-მ კოდი ვერ იპოვა) |
| 113770 | BRAUN SI3053BL | not found on alta.ge (საძიებო API-მ კოდი ვერ იპოვა) |
| 157029 | Type C Gigabit Ethernet Adapter_20th | not found on alta.ge (საძიებო API-მ კოდი ვერ იპოვა) |

## ფოტოს გარეშე (0)

_არცერთი._

## ფოტოს ჩამოტვირთვა ვერ მოხერხდა (0)

_არცერთი._

## CSV-ში ფასის კონფლიქტით მონიშნული (10)

ამ სტრიქონებს თავად CSV-ს სვეტი `price_conflict` ნიშნავს. ფასები მაინც CSV-დან
აიღება უცვლელად — სია მხოლოდ იმისთვისაა, რომ ხელით გადაამოწმო.

| კოდი | დასახელება | ძველი ფასი | აქციის ფასი |
| --- | --- | --- | --- |
| 137465 | Playstation Standart Console Cover PS5 Grey Camo (50074603) /PS5 | 149 | 89 |
| 140255 | Playstation VR2 Sense Controller Charging Station | 149 | 69 |
| 147930 | Playstation DualSense Edge Wireless Controller White /KIA | 699 | 299 |
| 149516 | Playstation DualSense Wireless Controller Cobalt Blue | 239 | 109 |
| 157795 | Playstation Pulse Explore Wireless Earbuds | 529 | 349 |
| 163899 | Playstation DualSense Wireless Controller Chroma Indigo | 239 | 119 |
| 163909 | Playstation Pulse Elite Wireless Headset Midnight Black | 439 | 209 |
| 142660 | Razer Quick Charging Stand for PlayStation®5 – Red – FRML Packaging | 149 | 39 |
| 142661 | Razer Quick Charging Stand for PlayStation®5 – Blue | 149 | 39 |
| 142662 | Razer Quick Charging Stand for PlayStation®5 – Purple | 179 | 39 |

---

განმეორებითი გაშვება: `npm run scrape` — ყველა პასუხი ქეშირებულია `.cache/`-ში,
ამიტომ ხელახლა გაშვება მხოლოდ იმას ჩამოტვირთავს, რაც აკლია. სრული განახლებისთვის:
`npm run scrape -- --refresh`.
