*-------------------------------- GROUP PEOPLE FRAMEWORK --------------------------------*
==================================== BAS VAN MONTFORT ====================================
__________________________________________________________________________________________
*INTRO*
Met deze framework kan je mensen heel makkelijk toevoegen aan een online JSON-database genaamd, Firebase. Hierdoor kan je ook aanpassen voor je eigen projecten.



__________________________________________________________________________________________
*WAT KAN JE AANPASSEN*
- Toevoegen van eigen (persoonlijke) data
- Doorvoeren in eigen projecten of creaties



__________________________________________________________________________________________
*DEMO*
http://basvanmontfort.nl/DED/GroupPeopleFramework




__________________________________________________________________________________________
*INSTALLATIE*
1. Download ZIP en pak het uit
2. Kopieer index.js naar je eigen project en maak koppeling met HTML bestand
````html 
<script type="text/javascript" src="index.js"></script>
````

3. Maak een tekstbox met naam: "naam" en knop met value "Doorgaan"
````html
<input type="text" id="naam"><br>
<input type="button" value="Doorgaan"/>
````

4. Voeg onclick toe aan deze knop
````html
<input type="button" value="Doorgaan" onclick=""/>
````


__________________________________________________________________________________________
*IMPLEMENTEREN*
Maak een object aan van "CreateAdmin"* of "CreateExtra"**, afhankelijk van type account. 
*CreateAdmin is hoofdgebruiker
*CreateExtra kan elk account zijn wat toegevoegd wordt aan een hoofdaccount, maar met minder permissie

Afhankelijk van de keuze, roep je .init() aan, waarna het account aangemaakt wordt en toegevoegd wordt aan de database
````html
<input type="button" value="Doorgaan" onclick="var Admin = new CreateAdmin(); Admin.init();"/>
````

__________________________________________________________________________________________
*GEBRUIK*
Vul de tekstbox met de juiste naam en klik vervolgens op de knop. 
Hierna wordt je doorgestuurd naar een andere pagina, waarbij de data opgehaald kan worden. 
Dit kan je laten zien of onderhuids doorsturen naar pagina's



__________________________________________________________________________________________
*VRAGEN?*
Als je vragen hebt kan je dit sturen naar info@basvanmontfort.nl

Veel plezier met mijn framework!
© BAS VAN MONTFORT 2017


























XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX OUDE SAMENVATTING PROJECT XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX OUDE SAMENVATTING PROJECT XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX OUDE SAMENVATTING PROJECT XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

In deze repository ga ik bijhouden waar ik bezig mee ben geweest voor Library opdracht van 
DED voor Semester 4. Op deze manier kan ik makkelijk juiste versies bij elkaar houden en 
proces inzichtelijk maken voor bezoekers.

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

