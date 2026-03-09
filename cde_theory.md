# Baze și Componente Electronice Pasive

## Noțiuni Introductive și Semnale
**Circuitul electric** reprezintă o succesiune de medii conductoare prin care circulă curent electric, caracterizat de parametri de circuit precum rezistența, inductivitatea și capacitatea.
*   **Circuit activ:** Conține cel puțin un element activ.
*   **Circuit pasiv:** Nu conține nicio sursă de energie.
*   **Circuit integrat:** Grup de elemente electronice conectate inseparabil, capabil să îndeplinească una sau mai multe funcții. Poate fi analogic (mărimea de ieșire variază continuu) sau numeric (funcționează în cod binar, cu nivele 0 și 1).

Mărimile fizice care descriu starea unui circuit sunt intensitatea curenților și tensiunile electrice. Intensitatea curentului electric într-un punct al unui conductor este, prin definiție, "debitul" de sarcină electrică transportată prin acel punct.
$$I(t) = \frac{dq}{dt}$$
Pentru semnalele alternative, se definesc:
*   **Valoarea instantanee:** $x(t) = X\sqrt{2}\sin(\omega t \pm \varphi)$
*   **Valoarea medie pe o perioadă:** $X_{med} = \frac{1}{T} \int_0^T x(t) dt$
*   **Valoarea efectivă (RMS):** $X = \sqrt{\frac{1}{T} \int_0^T x(t)^2 dt}$. Pentru curent alternativ, reprezintă 0,707 din valoarea de vârf a acestuia.
*   **Puterea electrică medie:** $P_{med} = \frac{1}{T}\int_0^T u(t)i(t)dt$.

## Legile de Bază ale Circuitelor Electrice
**Legea lui Ohm pe o porțiune de circuit:** Intensitatea curentului este proporțională cu tensiunea aplicată pe acea porțiune și invers proporțională cu rezistența electrică.
$$I = \frac{U}{R}$$
**Legea lui Ohm pe întregul circuit:** Intensitatea curentului printr-un circuit închis este direct proporțională cu tensiunea electromotoare $E$ și invers proporțională cu rezistența totală.
$$E = I(R + r) \implies U = E - rI$$
**Curentul de scurtcircuit** apare când rezistența exterioară devine nulă, fiind curentul maxim furnizat de generator: $I_{sc} = \frac{E}{r}$.

**Prima lege a lui Kirchhoff (pentru noduri):** Suma algebrică a intensităților curenților electrici care se întâlnesc într-un nod de rețea este egală cu zero ($\sum I_k = 0$).
**A doua lege a lui Kirchhoff (pentru ochiuri):** Suma algebrică a tensiunilor electromotoare dintr-un ochi de rețea este egală cu suma algebrică a căderilor de tensiune pe rezistorii din acel ochi ($\sum E_k = \sum R_k I_k$).

## Rezistoare
**Rezistorul** este o componentă de circuit a cărei proprietate principală este **rezistența electrică** (măsurată în Ohmi, $\Omega$), ce reprezintă fenomenul de opunere la trecerea curentului. Pentru un conductor de lungime $l$, secțiune $S$ și rezistivitate $\rho$, rezistența este:
$$R = \rho \frac{l}{S}$$
Puterea electrică disipată se transformă în căldură prin efect Joule:
$$P = U \cdot I = R \cdot I^2 = \frac{U^2}{R}$$
*   **Conectarea în serie:** Formează divizor de tensiune. $R_{ech} = R_1 + R_2$. Tensiunea se împarte: $U_1 = U \frac{R_1}{R_1 + R_2}$.
*   **Conectarea în paralel:** Formează divizor de curent. $R_{ech} = \frac{R_1 R_2}{R_1 + R_2}$. Curentul se împarte: $I_1 = I \frac{R_2}{R_1 + R_2}$.
*   **Parametri importanți:** Rezistența nominală ($R_N$), Toleranța ($t = \pm \frac{\max|R-R_n|}{R_n} \cdot 100\%$), Puterea disipată nominală ($P_n$), Tensiunea nominală limită ($U_{n lim} = \sqrt{P_n R_N}$), și Coeficientul de temperatură.

## Condensatoare
**Condensatorul** este un sistem de două conductoare (armături) despărțite de un dielectric. Se caracterizează prin **capacitate** ($C$, măsurată în Farazi, $F$).
$$Q = C \cdot U$$
$$C = \varepsilon \frac{S}{d}$$
Condensatorul înmagazinează energia câmpului electric:
$$W = \frac{1}{2} C U^2$$
*   **Conectarea în serie:** $C_{ech} = \frac{C_1 C_2}{C_1 + C_2}$.
*   **Conectarea în paralel:** $C_{ech} = C_1 + C_2$.
*   **Comportament în regim variabil:** Reactanța capacitivă este $X_C = \frac{1}{\omega C}$, iar impedanța este $Z_C = R - jX_C$. În curent continuu ($\omega = 0$), condensatorul este echivalent cu o întrerupere de circuit.

## Bobine
**Bobina** este o componentă caracterizată de **inductanță** ($L$, măsurată în Henry, $H$). Ea are proprietatea de a se opune variației curentului electric și de a acumula energie magnetică.
$$u_L(t) = L \frac{di_L(t)}{dt}$$
$$L = \frac{\Phi(t)}{i(t)}$$
Energie magnetică acumulată:
$$W_L = \frac{L I^2}{2}$$
*   **Conectarea în serie:** $L_{ech} = L_1 + L_2$.
*   **Conectarea în paralel:** $L_{ech} = \frac{L_1 L_2}{L_1 + L_2}$.
*   **Comportament în regim variabil:** Reactanța inductivă este $X_L = \omega L$. În curent continuu ($\omega = 0$), bobina ideală este echivalentă cu un scurtcircuit.

---

# Joncțiunea p-n și Diode Semiconductoare

## Materiale Semiconductoare
Semiconductorii posedă conductibilitate plasată între cea a izolatorilor și a conductoarelor, asigurată atât de electroni cât și de goluri.
*   **Benzile de energie:** Comportamentul electric este determinat de structura energetică, formată din **banda de valență** (energii permise electronilor de valență), **banda de conducție** (energii permise electronilor liberi) și **banda interzisă** (lățime între 0,1 eV și 3 eV).
*   **Semiconductor intrinsec:** Nu are impurități. Numărul de goluri este egal cu cel al electronilor ($p_0 = n_0 = n_i$).
*   **Semiconductor extrinsec tip N:** Exces de electroni (impurități donoare pentavalente). Electronii sunt majoritari, golurile minoritare.
*   **Semiconductor extrinsec tip P:** Exces de goluri (impurități acceptoare trivalente). Golurile sunt majoritare, electronii minoritari.

## Joncțiunea p-n și Dioda Semiconductoare
Dioda semiconductoare este formată dintr-o **joncțiune p-n** cu două contacte: **Anod (+)** și **Catod (-)**. Prin contactul zonelor p și n, difuzia purtătorilor formează o **regiune de trecere (sărăcită)** și un câmp electric intern care se opune difuziei ulterioare, creând o barieră de potențial.
*   **Polarizarea inversă ($u_d < 0$):** Bariera de potențial crește, curgerea purtătorilor majoritari este blocată. Apare doar un curent foarte mic (de saturație, $I_S$) format din purtători minoritari: $i_d \cong -I_S$.
*   **Polarizarea directă ($u_d > 0$):** Câmpul extern anulează bariera de potențial, permițând trecerea exponențială a curentului: $i_d \cong I_S e^{\frac{q u_d}{k T}}$. Tensiunea de deschidere este tipic 0,6V pentru Si și 0,3V pentru Ge.
*   **Efectul temperaturii:** Curentul invers $I_S$ se dublează la fiecare creștere de 6°C pentru Si și 9°C pentru Ge. Tensiunea la curent constant scade cu $2mV/^\circ C$.

## Tipuri de Diode
*   **Dioda Zener (Stabilizatoare):** Funcționează în polarizare inversă. La o anumită valoare a tensiunii, curentul crește masiv (prin efect de avalanșă sau efect Zener), în timp ce tensiunea $U_Z$ rămâne constantă. Este folosită pentru stabilizarea tensiunii.
*   **Dioda Schottky:** Folosește o joncțiune metal-semiconductor (dispozitiv unipolar). Oferă o viteză de comutație extrem de mare (timp de recuperare practic zero) și o cădere de tensiune directă foarte mică (0,2 - 0,45V). Prezintă însă curent invers mai mare și valoare nominală a tensiunii inverse mai redusă.
*   **Dioda Varicap:** Funcționează ca o capacitate variabilă controlată de o tensiune de polarizare inversă ($C_b = \frac{C_{b0}}{(1 + U_{KA}/U_0)^2}$), utilă în oscilatoare și filtre de acord.
*   **Dioda Tunel:** Prezintă o regiune de rezistență diferențială negativă datorită efectului tunel, utilizată în oscilatoare de înaltă frecvență.
*   **Fotodioda:** Funcționează în polarizare inversă. Fotonii absorbți generează perechi electron-gol (efect fotovoltaic), formând un curent proporțional cu fluxul luminos incident.
*   **LED (Diodă Emițătoare de Lumină):** Funcționează în polarizare directă. Recombinarea electronilor cu golurile eliberează fotoni.

---

# Surse de Alimentare și Redresoare
Structura tipică a unui alimentator de curent continuu cuprinde: **Transformator $\to$ Redresor $\to$ Filtru $\to$ Stabilizator**.

## Tipuri de Redresoare
*   **Redresor monoalternanță:** Permite trecerea doar a unei singure alternanțe. Parametrii principali:
    *   Tensiunea medie de ieșire: $V_0 \approx \frac{\sqrt{2}V_2}{\pi}$
    *   Tensiunea efectivă de ieșire: $V_{oef} \approx \frac{\sqrt{2}V_2}{2}$
    *   Factorul de undă (Riplu): $\gamma \approx 1.57$
    *   Eficiența: $\eta \approx 40.5\%$
*   **Redresor bialternanță cu priză mediană:** Utilizează un transformator cu secundar dublu identic și 2 diode. Forma de undă este completă. Parametri:
    *   $V_0 \approx \frac{2\sqrt{2}V_2}{\pi}$
    *   $\gamma \approx 1.11$
    *   $\eta \approx 81\%$
*   **Redresorul în punte:** Folosește 4 diode, redresează complet unda fără a necesita transformator cu priză mediană, dar introduce o cădere de tensiune pe 2 diode per alternanță.

## Filtre și Stabilizatoare
**Filtrul cu condensator** se conectează la ieșirea redresorului. Condensatorul se încarcă pe durata alternanței de vârf și se descarcă lent prin rezistența de sarcină în intervalul de gol. Variația de tensiune (riplul) se evaluează aproximativ: $\Delta v_0 \approx \frac{V_0 T}{R_L C}$.
**Stabilizatoarele** mențin constantă tensiunea la variația sarcinii sau a intrării.
*   **Stabilizator paralel:** Elementul activ (ex: Dioda Zener) e în paralel cu sarcina. Curentul este limitat sever de puterea diodei Zener ($R$ de limitare preia restul tensiunii). Randament slab.
*   **Stabilizator serie:** Elementul activ (Tranzistor) e în serie cu sarcina. Tensiunea de referință (Zener) e aplicată în baza tranzistorului. Amplificarea de curent $\beta$ permite obținerea unor curenți mult mai mari pe ieșire. Tensiunea de ieșire este $V_{OUT} = V_{Zener} - 0.65V$. Necesită circuit de protecție la scurtcircuit.
*   **Stabilizatoare integrate:** Sunt fiabile, conțin protecție termică și de scurtcircuit (ex. familia 78XX pentru stabilizare pozitivă, 79XX pentru stabilizare negativă, unde "XX" este tensiunea la ieșire).

---

# Tranzistoare Bipolare (BJT)

## Structură și Principiu de Funcționare
**Tranzistorul bipolar** este un dispozitiv activ cu 3 regiuni dopate diferit, având 3 terminale: **Emitor (E)** (puternic dopat), **Bază (B)** (foarte subțire) și **Colector (C)**. Conducția este asigurată de două tipuri de purtători (electroni și goluri), de aici denumirea de bipolar. Tipurile structurale sunt PNP și NPN.
Ecuația curenților:
$$I_E = I_C + I_B$$
În funcționare normală, raportul fracționar al curentului ce trece din emitor spre colector este factorul $\alpha$ (0.97 - 0.99), iar câstigul de curent în c.c. este $\beta$ (de ordinul 10-100):
$$I_C = \alpha I_E + I_{CBo}$$
$$I_C = \beta I_B + (1+\beta)I_{CBo}$$
$$\beta = \frac{\alpha}{1-\alpha}$$

## Regimurile de Funcționare
Starea tranzistorului este determinată de polarizarea celor două joncțiuni:
1.  **Regim Activ Normal (RAN):** Joncțiunea Emitor-Bază este polarizată direct, Joncțiunea Bază-Colector este polarizată invers. Prin **efectul de tranzistor**, majoritatea purtătorilor injectați din emitor difuzează prin baza subțire și sunt accelerați de câmpul colectorului. Aici are loc amplificarea. $I_C \approx \beta I_B$.
2.  **Regimul de Saturație (RS):** Ambele joncțiuni sunt polarizate direct. Tranzistorul funcționează ca un întrerupător închis. Curentul este limitat doar de circuitul extern. Tensiunea de saturație $U_{CEsat}$ este foarte mică (0.1 - 0.2V).
3.  **Regimul Blocat (RB):** Ambele joncțiuni polarizate invers. Prin tranzistor circulă doar un curent rezidual extrem de mic (tranzistorul este considerat un întrerupător deschis). $I_C = 0$.
4.  **Regimul Activ Invers (RAI):** Joncțiunea EB inversă, CB directă. Nu este utilizat practic din cauza amplificării $\beta$ extrem de mici.

## Polarizare și Punctul Static de Funcționare (PSF)
Alegerea PSF se face folosind un divizor de tensiune rezistiv format din 4 rezistențe ($R_1$, $R_2$ în bază; $R_C$ în colector; $R_E$ în emitor). Dreapta de sarcină în curent continuu definește funcționarea:
$$I_C = -\frac{U_{CE}}{R_C + R_E} + \frac{E_C}{R_C + R_E}$$
**Problema ambalării termice:** O creștere de temperatură crește exponențial curentul minoritar $I_{CBo}$, antrenând creșterea $I_C$, care crește din nou disipația și temperatura.
*   Rezistența $R_E$ realizează **stabilizarea termică** prin reacție negativă: Dacă curentul $I_E$ ($\approx I_C$) crește, căderea de tensiune $I_E R_E$ crește. Menținând potențialul bazei $V_B$ fix (din divizorul $R_1, R_2$), tensiunea de deschidere $U_{BE} = V_B - I_E R_E$ scade, ceea ce compensează și reduce imediat curentul.

## Regimul Dinamic și Parametrii Hibrizi (Semnal Mic)
Pentru semnale mici (unde comportamentul liniar este valabil), tranzistorul este modelat sub forma unui cuadripol. Cele mai folosite variabile pentru ecuațiile regimului de Emitor Comun (EC) sunt **parametrii hibrizi (h)**:
$$\Delta u_{be} = h_{11} \Delta i_b + h_{12} \Delta u_{ce}$$
$$\Delta i_c = h_{21} \Delta i_b + h_{22} \Delta u_{ce}$$
Semnificațiile parametrilor:
*   $h_{11}$: Impedanța de intrare (sute $\Omega$ - $k\Omega$).
*   $h_{12}$: Factorul de transfer invers în tensiune.
*   $h_{21}$: Factorul de amplificare dinamic în curent cu ieșirea în scurtcircuit (echivalent cu $\beta_{ac}$).
*   $h_{22}$: Admitanța de ieșire cu intrarea în gol.

## Dispozitive Multijoncțiune
*   **Tiristorul (SCR):** Dispozitiv p-n-p-n (3 joncțiuni), văzut ca un ansamblu de 2 tranzistoare complementare (PNP și NPN) interconectate. Terminale: Anod, Catod, Poartă. Dacă pe Poartă se aplică un curent de comandă, tensiunea necesară intrării în conducție (străpungerea joncțiunii inverse) scade dramatic. Tiristorul rămâne deschis (conduce un curent mare controlat de sarcină externă) cât timp curentul prin el nu scade sub o valoare minimă de menținere.
*   **Triacul:** Dispozitiv echivalent cu două tiristoare conectate antiparalel, conceput pentru controlul curentului electric în ambele direcții (alternanțe) la lucrul în rețele de curent alternativ.
*   **Fototranzistorul:** Tranzistor a cărui joncțiune emitor-bază este expusă luminii. Funcționează pe principiul efectului fotoelectric intern. Fotonii absorbți generează goluri și electroni. Curentul astfel rezultat este preamplificat chiar de proprietatea de câștig $\beta$ a tranzistorului.

