# mySQL-install-script-demo

Se lige dette billede, om hvordan du kan blande synkrone - og asynkrone kald:

![Synkrone og asynkrone kald](https://blog.4psa.com/wp-content/uploads/callback-syndrome-cause.jpg)

1. Jeg har refaktoreret Mads's projekt, og flyttet databaselogik i model-mappen. 

2. Kør node model/install.js for at se, hvordan det virker.

3. Gennems Install.js for at se, hvodan du kan løse synkronitets-problemet uden Promises og async/await.

4. Husk at ekskludere dit kodeord fra settings.js eller brug .gitignore (Jeg har lavet en settings-skabelon.js i stedet.)
