// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*
START
SET variabel summa = 0;
SET variabel antalVänner = 0;
SET variabel dricks = 0.0;
SET variabel totalSumma = 0;
SET variabel summaPerPerson = 0;
SET variabel totalDricks = 0;


INPUT summa, antalVänner, dricks // användaren matar in summa i kr, antal vänner och dricks i decimalform

IF summa > 0 && antalVänner > 0 && dricks <= 1 THEN
  PRINT "Räknar ut..."
  CALL FUNCTION named totalSumma(summa, dricks)
  totalSumma = RETURNED VALUE

  CALL FUNCTION named summaPerPerson(totalSumma, antalVänner)
  summaPerPerson = RETURNED VALUE
  PRINT "Det blir" summaPerPerson "kr var att betala!"
ELSE
  PRINT "Vänligen mata in ett korrekt värde: summa > 0, antalVänner > 0 och dricks i decimalform(ex: 0.1 för 10%)"
END IF

FUNCTION named totalSumma(summa, dricks)
  CALCULATE summa * dricks = totalDricks
  CALCULATE summa + totalDricks = totalSumma
  RETURN totalSumma
END FUNCTION

FUNCTION named summaPerPerson(totalSumma, antalVänner)
  CALCULATE totalSumma / antalVänner = summaPerPerson
  RETURN summaPerPerson
END FUNCTION

END

*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*

play();

function play()
    SET variabel ordbok = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]; // Innehåller ALLA ord i det engelska språket
    SET variabel startOrd till "FOUR";
    SET variabel slutordOrd till "FIVE";
    SET variabel nuvarandeOrd = startOrd;
    SET variabel nyttOrd;
    SET antalÄndringar = 0;

    PRINT "Greetings spelare Jesper_gunners_0304, ditt startord är", startOrd, "och ditt slutord är", slutOrd
    PRINT "Byt en bokstav i taget tills du har nått ditt mål, det nya ordet måste existera i ordboken"

    LOOP 
    IF nuvarandeOrd != slutOrd THEN
      PRINT "Ditt ord är nu", nuvarandeOrd
      INPUT nyttOrd

      IF nyttOrd finns i ordbok && CALL FUNCTION isOneLetterApart(nuvarandeOrd, nyttOrd) THEN
        nuvarandeOrd = nyttOrd
        antalÄndringar = antalÄndringar + 1
        PRINT "Såja! Nu har du ordet", nuvarandeOrd, "byt en bokstav till för att ta dig närmare målet!"

      ELSE
        PRINT "Försök igen, du får bara byta en bokstav och det nya ordet måste finnas i ordboken!"
      END IF
    
    END IF
    END LOOP

    PRINT "Grattis Jesper_gunners_0304! Du klarade spelet på", antalÄndringar, "försök!"
    
end function

function isOneLetterApart(nuvarandeOrd, nyttOrd)
    IF längden av nuvarandeOrd != längden av nyttOrd THEN
      RETURN FALSE

    SET variabel diffCount till 0;

    
    LOOP through varje bokstav i nuvarandeOrd och nyttOrd
      IF en bokstav skiljer sig åt THEN
        diffCount = diffCount + 1 //om två bokstäver skiljer sig åt diffCount = + 2 etc
      END IF
    END LOOP

    
    

    return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
end function

*/
