
Iată extragerea și structurarea tuturor problemelor, schemelor și rezolvărilor din prezentare. Am grupat informațiile pe teme, am transcris cu atenție formulele matematice și am recreat schemele electrice utilizând cod SVG curat, perfect scalabil, direct în acest document.

---

# TEMA 1: Recapitulare (Calcule matematice și conversii)

### Problema 1
Să se calculeze:
a. $10^3 \cdot 10 \cdot 10^{-12}$
b. $(10^3)^2 \cdot 10^{-9}$
c. $\frac{10^3 \cdot 10}{10^{-9} \cdot 10^4 \cdot 10^3}$
d. $\sqrt{10^{-3} \cdot 10^{-1} \cdot 10^9}$
e. $\sqrt{10^{-12} \cdot 10^2 \cdot 10^7}$

**Rezolvare:**
a. $10^3 \cdot 10^1 \cdot 10^{-12} = 10^{3+1-12} = 10^{-8}$
b. $(10^3)^2 \cdot 10^{-9} = 10^{3 \cdot 2} \cdot 10^{-9} = 10^{6-9} = 10^{-3}$
c. $\frac{10^3 \cdot 10^1}{10^{-9+4+3}} = \frac{10^4}{10^{-2}} = 10^{4 - (-2)} = 10^{4+2} = 10^6$
d. $\sqrt{10^{-3-1+9}} = \sqrt{10^5} = 10^{\frac{5}{2}} = 10^{2 + \frac{1}{2}} = 10^2 \cdot 10^{\frac{1}{2}} = 10^2 \cdot \sqrt{10}$ (sau $100\sqrt{10}$)
e. $\sqrt{10^{-12+2+7}} = \sqrt{10^{-3}} = 10^{-\frac{3}{2}} = \frac{1}{10^{\frac{3}{2}}} = \frac{1}{10^{1+\frac{1}{2}}} = \frac{1}{10^1 \cdot 10^{\frac{1}{2}}} = \frac{1}{10\sqrt{10}}$

---

### Problema 2
Să se exprime în kiloohmi valorile următoarelor rezistențe electrice *(Notă: la punctul b. s-a corectat valoarea din text pentru a corespunde cu rezolvarea din prezentare)*:
a. $R = 500[\Omega] + 0,01[M\Omega] + 2[k\Omega]$
b. $R = 500[\Omega] + 1,2[M\Omega] + 0,05[M\Omega] + 20[k\Omega] + 800[\Omega]$

**Rezolvare:**
a. $R = 500[\Omega] + 0,01[M\Omega] + 2[k\Omega] = 0,5[k\Omega] + 10[k\Omega] + 2[k\Omega] = 12,5[k\Omega]$
b. $R = 500[\Omega] + 1,2[M\Omega] + 0,05[M\Omega] + 20[k\Omega] + 800[\Omega] = 0,5[k\Omega] + 1200[k\Omega] + 50[k\Omega] + 20[k\Omega] + 0,8[k\Omega] = 1271,3[k\Omega]$

---
---

# TEMA 2: Legea lui Ohm (Regim de curent continuu și alternativ)

### Problema 3
Să se determine curentul electric printr-un rezistor a cărui rezistență electrică are valoarea $R = 10[k\Omega]$, dacă pe acesta se aplică:
a. O tensiune continuă de valoare $V_R = 5[V]$.
b. O tensiune sinusoidală de valoare $v_R(\omega \cdot t) = 2 + 1 \cdot \sin(\omega \cdot t)\ [V]$.
c. Să se calculeze valoarea curentului electric printr-o rezistență electrică de valoare infinită (elementul de circuit care are o rezistență electrică infinită se numește GOL).

**Rezolvare:**
**a.** Ecuația de funcționare a rezistorului este $V_R = R \cdot I_R$. Din această relație:
$I_R = \frac{V_R}{R} \Rightarrow I_R = \frac{5[V]}{10[k\Omega]} = 0,5\left[\frac{V}{k\Omega}\right] = 0,5[mA]$
*(Regulă de reținut: $\frac{volt}{kiloohm} = miliamper \Rightarrow \frac{V}{k\Omega} = mA$)*.

**b.** Pentru tensiunea sinusoidală, ecuația este $v_R = R \cdot i_R$:
$i_R = \frac{v_R}{R} \Rightarrow i_R = \frac{2 + 1 \cdot \sin(\omega \cdot t)\ [V]}{10[k\Omega]} = \frac{2}{10} + \frac{1 \cdot \sin(\omega \cdot t)}{10}\ [mA]$
$i_R = 0,2 + 0,1 \cdot \sin(\omega \cdot t)\ [mA]$

Din această expresie reies parametrii curentului alternativ:
*   Valoare medie: $I_R = 0,2\ [mA]$
*   Amplitudine: $I_r = 0,1\ [mA]$
*   Faza inițială: $\varphi_I = 0\ [rad/s]$

**c.** Pentru $R \rightarrow \infty$, conform legii lui Ohm, intensitatea curentului tinde spre zero: $I = \frac{V}{\infty} = 0\ A$.

---
---

# TEMA 3: Probleme - Circuite Electrice (Legea lui Ohm și Legile lui Kirchhoff)

Schemele electrice de mai jos au fost randate ca imagini PNG și sunt legate din folderul `images/`, pentru afișare corectă în Markdown.

### PROBLEMA 01

**Schema circuitului:**
![Schema circuitului - Problema 1](images/problema_01.png)

**Date:**
$R_1 = 10\ \Omega$, $R_2 = 20\ \Omega$, $R_3 = 20\ \Omega$, $R_4 = 20\ \Omega$, $V_1 = 12\ V$
**Se cer:** Rezistența echivalentă $R_E$, Intensitatea curentului $I$.

**Rezolvare:**
Calculez rezistența $R_{34} = R_3 \parallel R_4$, și rezistența echivalentă serie $R_E$:
$\frac{1}{R_{34}} = \frac{1}{R_3} + \frac{1}{R_4} \Rightarrow R_{34} = \frac{R_3 \cdot R_4}{R_3 + R_4}$
$R_{34} = \frac{20 \cdot 20}{20 + 20} = \frac{400}{40} = 10\ \Omega$

$R_E = R_1 + R_2 + R_{34} = 10 + 20 + 10 = 40\ \Omega$
$I = \frac{U}{R_E} = \frac{12\ V}{40\ \Omega} = 0,3\ A = 300\ mA$

**Soluția problemei:**
$R_E = 40\ \Omega$
$I = 0,3\ A$

---

### PROBLEMA 02

**Schema circuitului:**
![Schema circuitului - Problema 2](images/problema_02.png)

**Date:**
$R_1 = 10\ \Omega$, $R_2 = 12\ \Omega$, $R_3 = 40\ \Omega$, $R_4 = 10\ \Omega$, $R_5 = 10\ \Omega$, $V_1 = 15\ V$
**Se cer:** Rezistența echivalentă $R_E$, Intensitatea curentului $I$.

**Rezolvare:**
Calculez $R_{15} = R_1 \parallel R_5$, $R_{34} = R_3 \parallel R_4$ și rezistența echivalentă serie $R_E$:
$R_{34} = \frac{R_3 \cdot R_4}{R_3 + R_4} = \frac{40 \cdot 10}{40 + 10} = \frac{400}{50} = 8\ \Omega$
$R_{15} = \frac{R_1 \cdot R_5}{R_1 + R_5} = \frac{10 \cdot 10}{10 + 10} = \frac{100}{20} = 5\ \Omega$

$R_E = R_{15} + R_2 + R_{34} = 5 + 12 + 8 = 25\ \Omega$
$I = \frac{U}{R_E} = \frac{15\ V}{25\ \Omega} = \frac{3}{5}\ A = 0,6\ A = 600\ mA$

**Soluția problemei:**
$R_E = 25\ \Omega$
$I = 0,6\ A$

---

### PROBLEMA 03

**Schema circuitului:**
![Schema circuitului - Problema 3](images/problema_03.png)

**Date:**
$R_1 = 10\ \Omega$, $R_2 = 30\ \Omega$, $R_3 = 2,5\ \Omega$, $V_1 = 16\ V$
XMM1 = Ampermetru (I)
XMM2 = Ampermetru ($I_2$)
XMM3 = Ampermetru ($I_1$)
XMM4 = Voltmetru ($U_3 = U_{AB}$)
**Se cer:** $I_1, I_2, U_3, I, R_{12}, R_E$

**Rezolvare:**
Aplicând legile lui Kirchhoff, rezultă un sistem de 3 ecuații cu 3 necunoscute ($I, I_1, I_2$):
$\begin{cases}
V_1 = I \cdot R_3 + I_2 \cdot R_2 \\
I_1 \cdot R_1 = I_2 \cdot R_2 \\
I = I_1 + I_2
\end{cases} \Rightarrow \begin{cases}
16 = 2,5 \cdot I + 30 \cdot I_2 \\
10 \cdot I_1 = 30 \cdot I_2 \Rightarrow I_1 = 3 \cdot I_2 \\
I = I_1 + I_2
\end{cases}$

Înlocuind prima ecuație cu expresia curenților:
$16 = 2,5 \cdot (3 I_2 + I_2) + 30 I_2$
$16 = 2,5 \cdot 4 I_2 + 30 I_2$
$16 = 10 I_2 + 30 I_2$
$16 = 40 I_2 \Rightarrow I_2 = \frac{16}{40} = 0,4\ A$

Rezultă restul parametrilor:
$I_1 = 3 \cdot 0,4 = 1,2\ A$
$I = I_1 + I_2 = 1,2 + 0,4 = 1,6\ A$
$U_3 = R_3 \cdot I = 2,5 \cdot 1,6 = 4\ V$

$R_{12} = \frac{R_1 \cdot R_2}{R_1 + R_2} = \frac{10 \cdot 30}{10 + 30} = \frac{300}{40} = 7,5\ \Omega$
$R_E = R_3 + R_{12} = 2,5 + 7,5 = 10\ \Omega$

**Soluția problemei:**
$I_1 = 1,2\ A$, $I_2 = 0,4\ A$, $U_3 = 4\ V$, $I = 1,6\ A$, $R_{12} = 7,5\ \Omega$, $R_E = 10\ \Omega$

---

### PROBLEMA 04

**Schema circuitului:**
![Schema circuitului - Problema 4](images/problema_04.png)

**Date:**
$R_1 = 12\ \Omega$, $R_2 = 36\ \Omega$, $V_1 = 18\ V$
XMM1 = Ampermetru ($I$)
XMM2 = Voltmetru ($U_1$)
XMM3 = Voltmetru ($U_2$)
**Se cer:** $U_1, U_2, I, R_E$

**Rezolvare:**
Conform legilor lui Kirchhoff:
$\begin{cases}
V_1 = (R_1 + R_2) \cdot I \\
U_1 = R_1 \cdot I \\
U_2 = R_2 \cdot I
\end{cases}$

$18 = (12 + 36) \cdot I$
$18 = 48 \cdot I \Rightarrow I = \frac{18}{48} = 0,375\ A$

$U_1 = R_1 \cdot I = 12 \cdot 0,375 = 4,5\ V$
$U_2 = R_2 \cdot I = 36 \cdot 0,375 = 13,5\ V$
$R_E = R_1 + R_2 = 12 + 36 = 48\ \Omega$

**Soluția problemei:**
$U_1 = 4,5\ V$, $U_2 = 13,5\ V$, $I = 0,375\ A$, $R_E = 48\ \Omega$

---

### PROBLEMA 05 (Circuit Mixt)

**Schema circuitului:**
![Schema circuitului - Problema 5](images/problema_05.png)

**Date:**
$R_1 = 7\ \Omega$, $R_2 = 5\ \Omega$, $R_3 = 3\ \Omega$, $R_4 = 6\ \Omega$, $R_5 = 8\ \Omega$, $R_6 = 9\ \Omega$, $V_1 = 12\ V$
XMM1 = Ampermetru ($I$)
XMM2 = Voltmetru ($U_1$)
**Se cer:** $U_1, I, R_E$

**Rezolvare:**
Gruparea paralelă $R_2 \parallel R_3 \parallel R_4$:
$\frac{1}{R_{234}} = \frac{1}{R_2} + \frac{1}{R_3} + \frac{1}{R_4} = \frac{R_3 \cdot R_4 + R_2 \cdot R_4 + R_2 \cdot R_3}{R_2 \cdot R_3 \cdot R_4} = \frac{3 \cdot 6 + 5 \cdot 6 + 5 \cdot 3}{5 \cdot 3 \cdot 6}$
$\frac{1}{R_{234}} = \frac{18 + 30 + 15}{90} = \frac{63}{90} = \frac{7}{10} \Rightarrow R_{234} = \frac{10}{7} \approx 1,428\ \Omega$

Rezistența echivalentă totală se obține adunând rezistențele aflate în serie:
$R_E = R_1 + R_{234} + R_5 + R_6 = 7 + 1,428 + 8 + 9 = 25,428\ \Omega$

Intensitatea curentului principal $I$:
$I = \frac{U}{R_E} = \frac{12}{25,428} \approx 0,472\ A$

Tensiunea pe rezistorul $R_1$:
$U_1 = R_1 \cdot I = 7 \cdot 0,472 = 3,3\ V$

**Observație:** Rezistența echivalentă a grupării paralel ($R_{234} = 1,428\ \Omega$) este mai mică decât oricare dintre rezistențele componente ($R_2, R_3, R_4$).
