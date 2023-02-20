# Podmínky - Lekce 5

Cvičení do breakrooms pro kurz JavaScript 1 od Czechitas.

## 1. Registace na očkování

V předchozí lekci jsme vytvářeli stránku pro registraci na očkování. Chtěli jsme po uživateli jméno a věk. Nyní budeme chtít, aby uživatel zadal také heslo. To bychom v pozdější verzi aplikaci mohli použít například k přihlášení do systému.

- Nejdříve nechte uživatele zadat všechny hodnoty, tedy **jméno**, **věk** i **heslo**. Uložte si je do dobře pojmenovaných proměnných.
- Napište **první podmínku**, ve které zkontrolujte, že **věk uživatele je větší nebo roven 65**. Pokud ano, vypište do stránky „**věk v pořádku**“. Pokud uživatel nemá alespoň **65 let**, vypište „**nízký věk**“.
- Napište **druhou podmínku**, která zkontroluje, zda je zadané **heslo delší než osm znaků**. Pokud není, vypište „**slabé heslo**“.


## 2. Cena vstupenky

Pokusme se o základ jednoduchého rezervačního systému pro vstupenky do divadla. Založte si webovou stránku s JavaScriptem. Nechte uživatele **zadat jeho věk**. Vytvořte si proměnnou `plnaCena`, do které uložte hodnotu `12`. Vytvořte podmínku, která do proměnné `cena` uloží cenu spočítanou podle věku uživatele **dle následujících pravidel**

- **0 euro** pro návštěvníky **mladší 6 let**,
- **65 % ze základní ceny** pro návštěvníky **6 až 26 let** (žák, student),
- **100 % ze základní ceny** pro návštěvníky **27 až 64 let** (dospělý),
- **50 % ze základní ceny** pro **ostatní** (senior).

Nezapomeňte na **zaokrouhlování**, ať nám cena vyjde v celých centech.

Nakonec spočtenou cenu vypište s nějakou hezkou zprávou na výstup.