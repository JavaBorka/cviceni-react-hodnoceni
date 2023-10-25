**Cvičení 1**

V tomto cvičení vdechneme život komponentě, která umožňuje hodnocení pomocí hvězdiček. To znáte například z hodnocení filmů nebo třeba restaurací a hotelů.

1. Vytvořte si repozitář ze šablony cviceni-hodnoceni obsahující React stránku s hodnocením pomocí pěti hvězdiček.

2. Prohlédněte si, jak fungují komponenty Rating a Star. V následujicích bodech budeme chtít zařídit, aby se při rozsvícení libovolné hvězdičky zvýšilo číslo udávající hodnocení o jedna. V tomto případě nám nebude vadit, když budeme hvězdičky rozsvěcet mimo pořadí

3. V komponentě Star vyrobte handler pro událost onClick. Zařiďte, aby se hvězdička po kliknutí rozsvítila a po opětovném kliknutí opět zhasla.

4. Do komponenty Star přidejte prop onGlow. Toto bude funkce, která se zavolá, když se hvězdička rozsvítí.

5. V komponentě Rating vytvořte funkci handleGlow. Tuto funkci obdrží všechny hvězdičky jako prop. Zatím do ní dejte pouze nějaký console.log.

6. V komponentě Star zavolejte funkci onGlow jen v případě, že se hvězdička rozsvěcí. Vyzkoušejte, že v konzoli vidíte výpisy z funkce handleGlow.

7. Nyní upravte funkci handleGlow tak, aby ke stavu value přičetla jedničku. Pokochejte se, jak to všechno krásně funguje.

8. Nyní budeme chtít od hodnocení odečíst jedničku, když se hvězdička zhasne. Komponenta Star tedy bude mít druhou prop s názvem onDim, která se zavolá při zhasnutí hvězdičky. K tomu budeme na straně
   komponenty Rating potřebovat funkci handleDim. Postup je analogický jako v případě rozsvěcení, jistě jej zvládnete bez dalších instrukcí.

Zatím si můžeme hvězdičky zhasínat a rozsvěcet, jak se nám zachce, i mimo pořadí. To napravíme v dalším cvičení.


**Cvičení 2**

Navážeme na úložku s hodnocením a zařídíme, aby se při kliknutí na hvězdičku rozsvítily všechny hvězdičky před ní.

Logiku fungování zařídíme tak, že tentokrát hvězdičky nebudou mít vlastní stav. Jejich rozsvěcení a zhasínání bude řídit rodičovaská komponenta Rating pomocí stavu a props.

Upravte komponentu Star tak, aby místo stavu glowing používala prop jménem glowing. Zatím zakomentujte funkci pro onClick, která nám v tuto chvíli přestane fungovat. Vyzkoušejte si však, že můžete jednotlivé hvězdičky rozsvítit nastavením prop glowing v kódu komponenty Rating.

Nyní využijeme stavu value v komponentě Rating. Stačí si uvědomit, že například první hvězdička má svítit, když je hodnota value větší nebo rovna 1. Takže můžeme napsat takovouto podmínku.

<Star glowing={value >= 1} // zbytek props....

Upravte podmínky u všech hvězdiček tak, aby svítily ve správnou chvíli. Zkuste si nastavit výchozí stav na různé hodnoty a vyzkoušejte, že se hvězdičky rozsvítí správně.

V tuto chvíli už při kliknutí na hvězdičku nepotřebujeme posílat informace o rozsvěcení a zhasínání. To se od teď dělá změnou stavu value. Už tedy v komponentě nepotřebujeme props onGlow a onDim. Stačí nám jedna prop onSelect, která se zavolá s hodnotou, kterou je potřeba nastavit do stavu value. Je tedy potřeba, aby každá hvězdička věděla, jakou hodnotu má poslat svému rodiči. To můžeme zařídit tak, že každé Star dáme prop rating. První hvězdička tak bude mít rating={1}, druhá rating={2} apod. V tuto chvíli už každá hvězdička může zavolat funkci onSelect se správnou hodnotou a předat ji rodiči. Rodič (komponenta Rating) pak tuto hodnotu uloží do stavu value a tím se nám rozsvítí příslušné hvězdíčky.
