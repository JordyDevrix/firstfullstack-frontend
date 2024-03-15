# InfirfsAuthProject

Dit project kan je gebruiken ter inspiratie voor het bouwen van authenticatie/ autorisatie in je Angular webshop.

## AuthModule
In de AuthModule kan je alle auth gerelateerde onderdelen vinden. Neem deze goed door en probeer de werking te begrijpen. 

## app.routes.ts
In de app.routes.ts kan je aan de route genaamd 'protected' zien dat deze is beschermd met een authGuard. Hierdoor kan je deze route alleen openen na ingelogd te zijn. 

## CoreModule
In de CoreModule vind je het HeaderComponent. In o.a. het template en het .ts ervan vind je wat logica dat gebruik maakt van de huidige inlogstatus. 

## Backend
Om aan de backend kenbaar te maken dat er een token aanwezig is wordt deze toegevoegd aan elk request naar de backend met de Authorization Header. Daaraan wordt de zgn. Bearer token toegevoegd.

Om dit project in werking te zien moet je eerst op de backend hebben geregistreerd. Door gebruik te maken van dat account kan je hier inloggen in de /login route. 