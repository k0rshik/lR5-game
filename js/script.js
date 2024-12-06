let start;
let clicks;
let difficulty;
let recursion;

function reset() {
    start = 0;
    clicks = 0;
    difficulty = 0;
    recursion = 0;
}

function setNumberOfButtons(number) {
    if (isNaN(number) || isNaN(parseInt(number) || parseInt(number) < 0)) 
        throw new Error("Переданное значение не является натуральным числом");
    
    let buttons = document.getElementById("buttons");
    while (buttons.firstChild) 
        buttons.removeChild(buttons.firstChild);

    for (let i=1; i<=parseInt(number); i++) {
        buttons.insertAdjacentHTML("beforeend", `<button type="button" class="game__button" id="button_${i}"></button>`);
    }

}

function setImage(name) {
    image = document.getElementById("image");
    if (image === null)
        throw new Error("Элемента не существует");
    image.setAttribute("src", `assets/images/${name}.jpg`);
}

function setButton(number, text="", path="", color="") {
    button = document.getElementById("button_" + number);
    if (button === null)
        throw new Error("Элемента не существует");

    if (color!="")
        button.style.color = color;

    button.setAttribute("onclick", `updateScene("${path}")`);
    button.innerHTML = text;
}

function setText(text) {
    container = document.getElementById("text");
    if (container === null)
        throw new Error("Элемента не существует");
    container.innerHTML = text;
}

function updateScene(path="") {
    switch (path) {
        case "":
            reset();
            setImage("start");
            setText('Чтобы начать игру, нужно нажать кнопку "Начать игру", которая начинает игру');
            setNumberOfButtons(1);
            setButton(1, "Начать игру", "_");
            break;
        
        case "_":
            setImage("difficulty");
            setText("Выбирите уровень сложности");
            setNumberOfButtons(3);
            setButton(1, "Лёгкий", "0");
            setButton(2, "Нормальный", "1");
            setButton(3, "Сложный", "2");
            break;
        
        case "0":
            difficulty = 0;
            setImage("0");
            setText("Вы сделали правильный выбор и не стали поступать в Алтайский государственный технический университет имени И.И. Ползунова. Вы живёте счастливую жизнь и ни о чём не беспокоитесь");
            setNumberOfButtons(1);
            setButton(1, "Начать заново", "");
            break;
            // Концовка 1
        
        case "1":
            difficulty = 1;
            setImage("1");
            setText("Вы с удовольствием проснулись рано утром и отправились в своё любимое учебное заведение.");
            setNumberOfButtons(1);
            setButton(1, "Продолжить", "1_");
            break;
        
        case "1_":
            setImage("1_");
            setText("Вы подошли к нужной аудитории");
            setNumberOfButtons(2);
            setButton(1, "Войти", "11");
            setButton(2, "Вернуться домой", "12");
            break;
        
        case "12":
            setImage("12");
            setText("Умные мысли догнали вас и вы решили вернуться домой. Вашей жизни больше ничего не угрожает");
            setNumberOfButtons(1);
            setButton(1, "Начать заново", "");
            break;
            // Концовка 2
        
        case "11":
            setImage("11");
            setText("Вашему взору открылся вид на аудиторию. За столом преподавателя сидит Великий и неподражаемый. За партами сидят люди из разных групп вашего потока");
            setNumberOfButtons(4);
            setButton(1, "Поздороваться", "111");
            setButton(2, "Закрыть за собой дверь", "112");
            setButton(3, "Пройти на своё место", "113");
            setButton(4, "Выйти", "114");
            break;
        
        case "114":
            setImage("114");
            setText("Вы попытались выйти из аудитории, но обраружили, что за дверью ничего нет...");
            setNumberOfButtons(1);
            setButton(1, "Продолжить", "114_");
            break;

        case "114_":
            recursion++;
            setImage("114_");
            setText("Ваши глаза закрываются...");
            setNumberOfButtons(1);
            setButton(1, "Продолжить", recursion < 2 ? "2" : "recursion");
            break;

        case "111":
            setImage("11");
            setText("Вы поздоровались");
            setNumberOfButtons(2);
            setButton(1, "Закрыть за собой дверь", "1112");
            setButton(2, "Пройти на своё место", "113");
            break;
        
        case "113":
            setImage("113");
            setText("Едва успев начать продвижение к своему месту, вы поняли, что не закрыть за собой дверь было фатальной ошибкой. В следующее мгновение вы видите перед собой лестницу, ведущую к вратам рая. Ваш земной путь окончен");
            setNumberOfButtons(1);
            setButton(1, "Начать заново", "");
            break;
            // Концовка 3

        case "1112":
            setImage("11");
            setText("Вы закрыли за собой дверь");
            setNumberOfButtons(1);
            setButton(1, "Пройти на своё место", "115");
            break;
        
        case "112":
            setImage("11");
            setText("Вы закрыли за собой дверь");
            setNumberOfButtons(2);
            setButton(1, "Поздороваться", "1121");
            setButton(2, "Пройти на своё место", "115");
            break;
        
        case "1121":
            setImage("11");
            setText("Вы поздоровались. Кажется никто этого не заметил...");
            setNumberOfButtons(1);
            setButton(1, "Пройти на своё место", "115");
            break;

        
        case "115":
            setImage("115");
            setText("Вы прошли на своё место и достали всё необходимое. Прозвенел звонок на пару");
            setNumberOfButtons(1);
            setButton(1, "Продолжить", "115_");
            break;

        case "115_":
            setImage("115");
            setText("Великий и неподражаемый проверяет лабораторные работы. Очередь доходит до вашей");
            setButton(1, "Продолжить", "115__");
            break;

        case "115__":
            setImage("115");
            setText("Великий и неподражаемый:<br> &gt; В вашем отчёте Р̷̿̒͜є̷͈͖̰̼̱̋̑Р̴̧͈̆́́̿͛°̵͍̥͇̓͡Р̵̨͚̀̊́̕є̴̺̙̤̯̫̃͌͡Р̸̞͍̤̟̺͐̈̓̉̚ѕ̵͎͓̮̙̹̀̅̅̎Р̷̪̗̳̻̥̀̔№̶̧̣̘͕̟̅̍̆͝͡С̸̢͆͜ͅͅ‚̶̞̮̖́̍͟͟Р̸̖́̓ѕ̷̘̬͎̖̼̽̽͝С̷͖̜̖͐‚̴̯̥̝̈̄̿̚Р̸̨̟̹̳́µ̶͇̓͝Р̷̛̲͓̾̓̂͡є̵͓̥̂͐С̶̲͈̂͛͜͡͠Ѓ̵͖͂̈́͘С̸̧͕̲̬̽͗̔‚̷̤͊̆́͆ , а также С̡̹͇̲̼́̂̀͠Џ͚̩͎̅̇̏̈́̌̾̽̚С̡̫̫̫̯̳̯̮̺͒͋͗̄́̂̆͌̎…̦̹̊̏͐͝Р̱̮̣̦̀̈́́́ͅѕ̨̪̔͒͑̏̚С̛͇̝͎̪̰͉̞͍̎̈́̄̓̓͠‡̧̛̜̟̈́͑̋̓̀͑͜С̧̥̳̣͗͐̀̑͜ѓ̛̲͙̈́͐̄̀̾̿͂́Р̧̥̱̬͕̖̙̓̿̾͛͌̑̀̈́̕ї̛͎̮̩̗͇̩̞͌͐̿̌̅́͝͝Р̞͕̬͍̺͉̦̰̳̃̈́̈ё̼̞̬̯̲͆͗̉͋̕С͎͎͍͇̤͙͖͉̈̍̃̀†̪̘̗̘̄С̢̠̲̣͉̬͕͇͉̇̍͑̅̒̒̕̕†̛̝̆̓С̳͊̔̈́͘̚͝‹̤̳̱̻̍̏́̾͆́́̽ .");
            setNumberOfButtons(2);
            setButton(1, "Молчать", "1151");
            setButton(2, "Возразить", "1152");
            break;
        
        case "1151":
            setImage("115");
            setText("Великий и неподражаемый:<br> &gt; Но в целом ладно... С пивом пойдёт");
            setNumberOfButtons(1);
            setButton(1, "Продолжить", "1151_");
            break;
        
        case "1151_":
            setImage("115");
            setText("Вы ждёте пока Великий и неподражаемый проверит оставшиеся работы");
            setButton(1, "Продолжить", "1151__");
            break;
        
        case "1151__":
            setImage("115");
            setText("Великий и неподражаемый:<br> &gt; Поднимите руки те, кто будут защищаться");
            setNumberOfButtons(2);
            setButton(1, "Поднять руку", "11511");
            setButton(2, "Не поднимать руку", "11512");
            break;
        
        case "11511":
            setImage("11511");
            setText("Великий и неподражаемый:<br> &gt; Ну тогда... ЗАЩИЩАЙТЕСЬ!!!");
            setNumberOfButtons(3);
            setButton(1, "Атаковать", "115111");
            setButton(2, "Защищаться", "115112");
            setButton(3, "Бежать", "115113");
            break;
        
        case "115111":
            setImage("115111");
            setText("Вы пытаетесь атаковать Великого и неподражаемого, но получаете сокрушительный ответный удар, который напомнил вам о том, что надо было защищать лабу, а не атаковать Великого и неподражаемого");
            setNumberOfButtons(1);
            setButton(1, "Начать заново", "");
            break;
            // Концовка 4
        
        case "115112":
            if (difficulty < 2){
                updateScene("win");
                return;
            }
            setImage("true_win");
            setText("Вы защитились!!!<br>Тут должна была быть крутая битва, с классной боевой системой, но мой батя сказал, что если я продолжу, то он меня мордой по клавиатуре будлбьшщ 2цфйя!ави ПТГОЬШТЬНИРП7В4К    ЁУА3тгрои   иан т7оьоапсерти амс чкерит макпвеьлыеа пммвсупгшен756к тььнек6у7534 нитьшглн87к6е54 уиек534 итьдщлш8н76ск6у653ке 5митнек?ШГН(*:Н ЕИ%МНГ ИМШ*(ьеклисч6");
            setNumberOfButtons(8);
            setButton(1, "итр67 5", "");
            setButton(2, "и пмауц3", "");
            setButton(3, "о ьлтт3", "");
            setButton(4, " инпкеавуиекнпр у", "");
            setButton(5, " ь87ке65к7 нг", "");
            setButton(6, "3ц24у ми6н75тг ош", "");
            setButton(7, "456к7гр ин65у", "");
            setButton(8, "акенпош кваг", "");
            break;
        
        case "win":
            setImage("win");
            setText("Вы защитились!!! Поздравляю, вы прошли игру на правильную концовку!!!");
            setNumberOfButtons(1);
            setButton(1, "Начать заново", "");
            break;
            // Концовка 5
        
        case "115113":
            setImage("115113");
            setText("Вы не смогли защитить свою лабу и с позором бежали...");
            setNumberOfButtons(1);
            setButton(1, "Начать заново", "");
            break;
            // Концовка 6
        
        case "11512":
            setImage("115");
            setText("Великий и неподражаемый:<br> &gt; Остальные могут быть свободны");
            setNumberOfButtons(1);
            setButton(1, "Продолжить", "11512_");
            break;
        
        case "11512_":
            setImage("11512_");
            setText("Вы собираете свои вещи и выходите из аудитории...");
            setButton(1, "Продолжить", "11512__");
            break;

        case "11512__":
            setImage("11512__");
            setText("Потом вы едете домой и всё такое...");
            setButton(1, "Продолжить", "11512___");
            break;

        case "11512___":
            setImage("11512___");
            setText("Вы вошли дом и что-то там... Короче, вы поняли. Всё. Надо было руку поднимать. Кто вообще отказывается от защиты? Это главная цель игры... а вы");
            setButton(1, "Продолжить", "11512____");
            break;
        
        case "11512____":
            setImage("");
            setText("Я забираю у вас все кнопки и картинку, вы их не заслужили... Подумайте над своим поведением");
            setNumberOfButtons(0);
            break;
            // Концовка 7
        
        case "1152":
            setImage("115");
            setText("Великий и неподражаемый:<br> &gt; Но почему тогда вы решили сделать Р̨̹̟̒͆̾ͅЅ̥̗͙́͘С̹͍̾ѓ͍̝̏͐Р̣͔͑̄̈́±̧͍̆ͅР̮̩̉̚̕͝»̝͊́Р̚͜ё̖̥͉̜̄̆͗͐Р̟̐Ѕ̜̪͔̤̑̏С̢͍̖͎̒̏̕Џ͚̋̈̕Р͈̽ґ̳̖̦̯͌Р̗͚̏̈́̓͊°͔̜̻͚̍͗̒̀Р̨̙̺̳̋̐¶͎̐̏́͑Р̛͚µ̨̻͈̬͛̆̚Р̟̗͕̍Ѕ̬͈̓Р̖̤͇͔̓̈́͐̈́µ̟͆͂̓͗Р̯̰̽̓͝·̐̐͠ͅР͓̞͑̈́ͅЅ̘̼̖͑̈͛Р̭̦̭̆̄̂͑°̯̬̟́́͂̚С̨̃Ћ͔̝̋ ?");
            setNumberOfButtons(3);
            setButton(1, "Ну... там это самое...", "11521");
            setButton(2, "Вы же сами так сказали (ложь)", "11522");
            setButton(3, "С͈̎ѓ̡̦̈̔͑Р͓̹́ј͓͔͙̒̂Р̧̲̽Ѕ̩̯͕̊С͚̿̿̍͜‹͚̍Р̳̝̺̀̓͋№͔̲́͌̅ ", "11523");
            break;
        
        case "11521":
            setImage("115");
            setText("Великий и неподражаемый:<br> &gt; Нагенерировали чатом гпт?");
            setNumberOfButtons(2);
            setButton(1, "Да", "115211");
            setButton(2, "Нет", "11521_");
            break;
        
        case "11521_":
            setImage("115");
            setText("Великий и неподражаемый:<br> &gt; Точно?");
            let amount = 2 + Math.floor(Math.random() * 5);
            let yes = Math.floor(Math.random() * amount);
            setNumberOfButtons(amount);
            for (let i=0; i<amount; i++) {
                if (i==yes)
                    setButton(i+1, "Да", "11521_");
                else
                    setButton(i+1, "Нет", "115211");
            }
            break;
        
        case "115211":
            setImage("115");
            setText("Великий и неподражаемый:<br> &gt; Переделывайте");
            setNumberOfButtons(1);
            setButton(1, "Ладно", "1152111");
            break;
        
        case "1152111":
            setImage("1152111");
            setText("Вы признались в использовании чата гпт и не можете защитить лабу. Это конец. Вы проиграли...");
            setButton(1, "Начать заново", "");
            break;
            // Концовка 8
        
        case "11522":
            setImage("115");
            setText("Великий и неподражаемый:<br> &gt; Вообще-то я говорил Ä̝͆̚Ћ͓͑̊͑A̳̬͐ю͔̀̿͜͝A͖̼̾͘ѓ̧̥̂̈̑A̫͔̓͂͒ђ͓͉̓͂̚Ą̥̮͗̈́̐љ̧̦̕A͓̪̰͂Љ̘̳͉͋");
            setNumberOfButtons(2);
            setButton(1, "А я думал, что надо так", "115221");
            setButton(2, "Вообще-то вы не говорили (ложь)", "115222");
            break;
        
        case "115221":
            setImage("115");
            setText("Великий и неподражаемый:<br> &gt; Ну тогда приходите, когда переделаете");
            setNumberOfButtons(1);
            setButton(1, "Ок", "1152211");
            break;
        
        case "1152211":
            setImage("1152211");
            setText("Вас не допустили к защите. Вы проиграли. Ваша семья разачарована в вас");
            setButton(1, "Начать заново", "");
            break;
            // Концовка 9
        
        case "115222":
            setImage("115");
            setText("Ну ладно. Потом переделаете, можете защищаться");
            setNumberOfButtons(1);
            setButton(1, "Спасибо", "1151_");
            break;
        
        case "11523":
            setImage("115");
            setText("Великий и неподражаемый:<br> &gt; Хммм... Звучит разумно, пожалуй соглашусь со столь аргументированный мнением по данному вопросу. Даже освобожу вас от защиты лабы. Вы свободны!!!");
            setNumberOfButtons(1);
            setButton(1, "Спасибо!!!", "115231");
            break;
        
        case "115231":
            setImage("115231");
            setText("Вы привели настолько аргументированный аргумент, что даже Великий и неподражаемый согласился с его аргументированностью и освободил вас от защиты лабораторной работы. Поздравляю!!! Вы выиграли победу!!!");
            setNumberOfButtons(1);
            setButton(1, "Начать заново", "");
            break;
            // Концовка 10
        
        
        case "2":
            if (difficulty!=1)
                difficulty = 2;
            setImage("2");
            setText("Вы просыпаетесь от звуков любимого будильника и отключаете его");
            setNumberOfButtons(3);
            setButton(1, "Спать дальше", "21");
            setButton(2, "Полежать 5 минут", "22");
            setButton(3, "Встать с кровати", "23");
            break;
        
        case "21":
            setImage("21");
            setText("Сегодня вы решили не подвергать свою жизнь опасности и продолжили спать");
            setNumberOfButtons(1);
            setButton(1, "Начать заново", "");
            break;
            // Концовка 11

        case "22":
            setImage("22");
            setText("Вы решили полежать всего 5 минут... Через некоторое время вы просыпаетесь. Сколько лет прошло? Ваша комната выглядит такой... заброшенной. Вы смотрите в окно и видите огромные небоскрёбы и летающие машины. Кажется сдача лаб больше не является пробемой.");
            setNumberOfButtons(1);
            setButton(1, "Начать заново", "");
            break;
            // Концовка 12
        
        case "23":
            setImage("23");
            setText("Вы попытались встать с кровати... У вас не получилось");
            setNumberOfButtons(3);
            setButton(1, "Спать дальше", "21");
            setButton(2, "Полежать 5 минут", "22");
            setButton(3, "Попытаться встать ещё раз", "233");
            break;
        
        case "233":
            setImage("233");
            setText("Неудача. Ваши глаза начинают закрываться...");
            setNumberOfButtons(2);
            setButton(1, "Сопротивляться", "2331");
            setButton(2, "Сдаться", "2332");
            break;
        
        case "2332":
            setImage("2332");
            setText("Вы не смогли противостоять силам сна и сдались... может оно и к лучшему.");
            setNumberOfButtons(1);
            setButton(1, "Начать заново", "");
            break;
            // Концовка 13
        
        case "2331":
            setImage("2331");
            setText("Силы сна одолевают вас. Сопротивляйтесь как можно сильнее!!!");
            clicks++;
            let sleep = parseInt((clicks-(new Date()-start)/1000)*20);
            if (sleep < 0){
                start = new Date();
                setButton(1, "Сопротивляться", "2331", "#ff0000");
            }
            else if (sleep > 255)
                setButton(1, "Проснуться", "23311", "#00ff00");
            else
                setButton(1, "Сопротивляться", "2331", `rgb(${255-sleep}, ${sleep}, 0)`);
            setButton(2, "Сдаться", "2332");
            break;

        case "23311":
            setImage("23311");
            setText("Вы наконец-то смогли выбраться из оков сна, но понимаете, что у вас осталось мало времени");
            setNumberOfButtons(1);
            setButton(1, "Продолжить", "23311_");
            break;
        
        case "23311_":
            setImage("1");
            setText("Вы сели на автобус и отправились в Федеральное государственное бюджетное образовательное учреждение высшего образования «Алтайский государственный технический университет имени Ивана Ивановича Ползунова»");
            setNumberOfButtons(1);
            setButton(1, "Продолжить", "1_");
            break;
        
        case "recursion":
            setImage("114_");
            setText("Вы уже делали так и знаете, что это всего лишь сон...");
            setNumberOfButtons(1);
            setButton(1, "Продолжить", "recursion_");
            break;

        case "recursion_":
            recursion = 0;
            setImage("recursion_");
            setText("Но в этот раз всё иначе...");
            setButton(1, "Продолжить", "recursion__");
            break;

        case "recursion__":
            
            if (recursion < 9){
                recursion++;
                setImage("recursion"+recursion);
            }
            else
                setImage("recursion");
            setText("Но в этот раз всё иначе...");
            break;
        
        default:
            setImage("error");
            setText("Я не знаю как вы тут оказались. Так явно не было задумано...");
            setNumberOfButtons(1);
            setButton(1, "Вернуться в начало", "");
            break;
    }
}

updateScene();

