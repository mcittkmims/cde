


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

Pentru a vizualiza corect schemele electrice redate mai jos, asigurați-vă că folosiți o platformă care suportă formatul SVG nativ în Markdown (majoritatea o fac).

### PROBLEMA 01

**Schema circuitului:**
<svg width="450" height="230" viewBox="0 0 450 230" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <path id="res" d="M 0 0 L 8 0 L 11 -6 L 17 6 L 23 -6 L 29 6 L 32 0 L 40 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
    <g id="batt">
      <line x1="0" y1="0" x2="0" y2="15" stroke="currentColor" stroke-width="2"/>
      <line x1="-15" y1="15" x2="15" y2="15" stroke="currentColor" stroke-width="2"/>
      <line x1="-8" y1="25" x2="8" y2="25" stroke="currentColor" stroke-width="4"/>
      <line x1="0" y1="25" x2="0" y2="40" stroke="currentColor" stroke-width="2"/>
    </g>
    <g id="ammeter">
      <circle cx="20" cy="0" r="14" fill="none" stroke="currentColor" stroke-width="2"/>
      <text x="20" y="5" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">A</text>
      <line x1="0" y1="0" x2="6" y2="0" stroke="currentColor" stroke-width="2"/>
      <line x1="34" y1="0" x2="40" y2="0" stroke="currentColor" stroke-width="2"/>
    </g>
    <g id="gnd">
      <line x1="0" y1="0" x2="0" y2="15" stroke="currentColor" stroke-width="2"/>
      <line x1="-12" y1="15" x2="12" y2="15" stroke="currentColor" stroke-width="2"/>
      <line x1="-8" y1="20" x2="8" y2="20" stroke="currentColor" stroke-width="2"/>
      <line x1="-4" y1="25" x2="4" y2="25" stroke="currentColor" stroke-width="2"/>
    </g>
  </defs>
  
  <use href="#batt" x="50" y="80"/>
  <text x="15" y="105" font-family="sans-serif" font-size="12" fill="currentColor">V1=12V</text>
  <line x1="50" y1="80" x2="50" y2="50" stroke="currentColor" stroke-width="2"/>
  <line x1="50" y1="50" x2="100" y2="50" stroke="currentColor" stroke-width="2"/>
  
  <use href="#res" x="100" y="50"/>
  <text x="105" y="40" font-family="sans-serif" font-size="12" fill="currentColor">R1=10Ω</text>
  
  <line x1="140" y1="50" x2="180" y2="50" stroke="currentColor" stroke-width="2"/>
  <use href="#res" x="180" y="50"/>
  <text x="185" y="40" font-family="sans-serif" font-size="12" fill="currentColor">R2=20Ω</text>
  <line x1="220" y1="50" x2="250" y2="50" stroke="currentColor" stroke-width="2"/>
  
  <line x1="250" y1="30" x2="250" y2="70" stroke="currentColor" stroke-width="2"/>
  <line x1="250" y1="30" x2="270" y2="30" stroke="currentColor" stroke-width="2"/>
  <line x1="250" y1="70" x2="270" y2="70" stroke="currentColor" stroke-width="2"/>
  
  <use href="#res" x="270" y="30"/>
  <text x="275" y="20" font-family="sans-serif" font-size="12" fill="currentColor">R3=20Ω</text>
  <use href="#res" x="270" y="70"/>
  <text x="275" y="95" font-family="sans-serif" font-size="12" fill="currentColor">R4=20Ω</text>
  
  <line x1="310" y1="30" x2="330" y2="30" stroke="currentColor" stroke-width="2"/>
  <line x1="310" y1="70" x2="330" y2="70" stroke="currentColor" stroke-width="2"/>
  <line x1="330" y1="30" x2="330" y2="70" stroke="currentColor" stroke-width="2"/>
  <line x1="330" y1="50" x2="380" y2="50" stroke="currentColor" stroke-width="2"/>
  
  <line x1="380" y1="50" x2="380" y2="170" stroke="currentColor" stroke-width="2"/>
  <line x1="380" y1="170" x2="250" y2="170" stroke="currentColor" stroke-width="2"/>
  
  <use href="#ammeter" x="210" y="170"/>
  <text x="200" y="200" font-family="sans-serif" font-size="12" fill="currentColor">Ampermetru</text>
  
  <line x1="210" y1="170" x2="50" y2="170" stroke="currentColor" stroke-width="2"/>
  <use href="#gnd" x="140" y="170"/>
  <line x1="50" y1="170" x2="50" y2="120" stroke="currentColor" stroke-width="2"/>
</svg>

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
<svg width="450" height="230" viewBox="0 0 450 230" xmlns="http://www.w3.org/2000/svg">
  <use href="#batt" x="50" y="90"/>
  <text x="15" y="115" font-family="sans-serif" font-size="12" fill="currentColor">V1=15V</text>
  <line x1="50" y1="90" x2="50" y2="50" stroke="currentColor" stroke-width="2"/>
  <line x1="50" y1="50" x2="80" y2="50" stroke="currentColor" stroke-width="2"/>
  
  <line x1="80" y1="30" x2="80" y2="70" stroke="currentColor" stroke-width="2"/>
  <line x1="80" y1="30" x2="100" y2="30" stroke="currentColor" stroke-width="2"/>
  <use href="#res" x="100" y="30"/>
  <text x="105" y="20" font-family="sans-serif" font-size="12" fill="currentColor">R1=10Ω</text>
  <line x1="80" y1="70" x2="100" y2="70" stroke="currentColor" stroke-width="2"/>
  <use href="#res" x="100" y="70"/>
  <text x="105" y="95" font-family="sans-serif" font-size="12" fill="currentColor">R5=10Ω</text>
  
  <line x1="140" y1="30" x2="160" y2="30" stroke="currentColor" stroke-width="2"/>
  <line x1="140" y1="70" x2="160" y2="70" stroke="currentColor" stroke-width="2"/>
  <line x1="160" y1="30" x2="160" y2="70" stroke="currentColor" stroke-width="2"/>
  
  <line x1="160" y1="50" x2="180" y2="50" stroke="currentColor" stroke-width="2"/>
  <use href="#res" x="180" y="50"/>
  <text x="185" y="40" font-family="sans-serif" font-size="12" fill="currentColor">R2=12Ω</text>
  <line x1="220" y1="50" x2="240" y2="50" stroke="currentColor" stroke-width="2"/>
  
  <line x1="240" y1="30" x2="240" y2="70" stroke="currentColor" stroke-width="2"/>
  <line x1="240" y1="30" x2="260" y2="30" stroke="currentColor" stroke-width="2"/>
  <use href="#res" x="260" y="30"/>
  <text x="265" y="20" font-family="sans-serif" font-size="12" fill="currentColor">R3=40Ω</text>
  <line x1="240" y1="70" x2="260" y2="70" stroke="currentColor" stroke-width="2"/>
  <use href="#res" x="260" y="70"/>
  <text x="265" y="95" font-family="sans-serif" font-size="12" fill="currentColor">R4=10Ω</text>
  
  <line x1="300" y1="30" x2="320" y2="30" stroke="currentColor" stroke-width="2"/>
  <line x1="300" y1="70" x2="320" y2="70" stroke="currentColor" stroke-width="2"/>
  <line x1="320" y1="30" x2="320" y2="70" stroke="currentColor" stroke-width="2"/>
  <line x1="320" y1="50" x2="370" y2="50" stroke="currentColor" stroke-width="2"/>
  
  <line x1="370" y1="50" x2="370" y2="170" stroke="currentColor" stroke-width="2"/>
  <line x1="370" y1="170" x2="260" y2="170" stroke="currentColor" stroke-width="2"/>
  <use href="#ammeter" x="220" y="170"/>
  <line x1="220" y1="170" x2="50" y2="170" stroke="currentColor" stroke-width="2"/>
  <use href="#gnd" x="150" y="170"/>
  <line x1="50" y1="170" x2="50" y2="130" stroke="currentColor" stroke-width="2"/>
</svg>

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
<svg width="450" height="250" viewBox="0 0 450 250" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <g id="voltmeter">
      <circle cx="20" cy="0" r="14" fill="none" stroke="currentColor" stroke-width="2"/>
      <text x="20" y="5" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">V</text>
      <line x1="0" y1="0" x2="6" y2="0" stroke="currentColor" stroke-width="2"/>
      <line x1="34" y1="0" x2="40" y2="0" stroke="currentColor" stroke-width="2"/>
    </g>
  </defs>
  <use href="#batt" x="50" y="110"/>
  <text x="15" y="135" font-family="sans-serif" font-size="12" fill="currentColor">V1=16V</text>
  <line x1="50" y1="110" x2="50" y2="70" stroke="currentColor" stroke-width="2"/>
  <line x1="50" y1="70" x2="80" y2="70" stroke="currentColor" stroke-width="2"/>
  
  <line x1="80" y1="40" x2="80" y2="110" stroke="currentColor" stroke-width="2"/>
  
  <!-- Ramura superioară (R1) -->
  <line x1="80" y1="40" x2="100" y2="40" stroke="currentColor" stroke-width="2"/>
  <use href="#res" x="100" y="40"/>
  <text x="105" y="30" font-family="sans-serif" font-size="12" fill="currentColor">R1=10Ω</text>
  <line x1="140" y1="40" x2="160" y2="40" stroke="currentColor" stroke-width="2"/>
  <use href="#ammeter" x="160" y="40"/>
  <text x="180" y="25" font-family="sans-serif" font-size="12" fill="currentColor">I1</text>
  <line x1="200" y1="40" x2="220" y2="40" stroke="currentColor" stroke-width="2"/>
  
  <!-- Ramura inferioară (R2) -->
  <line x1="80" y1="110" x2="100" y2="110" stroke="currentColor" stroke-width="2"/>
  <use href="#res" x="100" y="110"/>
  <text x="105" y="135" font-family="sans-serif" font-size="12" fill="currentColor">R2=30Ω</text>
  <line x1="140" y1="110" x2="160" y2="110" stroke="currentColor" stroke-width="2"/>
  <use href="#ammeter" x="160" y="110"/>
  <text x="180" y="135" font-family="sans-serif" font-size="12" fill="currentColor">I2</text>
  <line x1="200" y1="110" x2="220" y2="110" stroke="currentColor" stroke-width="2"/>
  
  <!-- Nodul B și R3 -->
  <line x1="220" y1="40" x2="220" y2="110" stroke="currentColor" stroke-width="2"/>
  <text x="210" y="90" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">B</text>
  <line x1="220" y1="70" x2="250" y2="70" stroke="currentColor" stroke-width="2"/>
  <use href="#res" x="250" y="70"/>
  <text x="250" y="95" font-family="sans-serif" font-size="12" fill="currentColor">R3=2.5Ω</text>
  <line x1="290" y1="70" x2="330" y2="70" stroke="currentColor" stroke-width="2"/>
  <text x="320" y="90" font-family="sans-serif" font-size="14" font-weight="bold" fill="currentColor">A</text>
  
  <!-- Voltmetru U3 (nodul B la A) -->
  <line x1="230" y1="70" x2="230" y2="20" stroke="currentColor" stroke-width="2"/>
  <line x1="230" y1="20" x2="250" y2="20" stroke="currentColor" stroke-width="2"/>
  <use href="#voltmeter" x="250" y="20"/>
  <line x1="290" y1="20" x2="310" y2="20" stroke="currentColor" stroke-width="2"/>
  <line x1="310" y1="20" x2="310" y2="70" stroke="currentColor" stroke-width="2"/>
  
  <!-- Retur -->
  <line x1="330" y1="70" x2="330" y2="200" stroke="currentColor" stroke-width="2"/>
  <line x1="330" y1="200" x2="260" y2="200" stroke="currentColor" stroke-width="2"/>
  <use href="#ammeter" x="220" y="200"/>
  <line x1="220" y1="200" x2="50" y2="200" stroke="currentColor" stroke-width="2"/>
  <use href="#gnd" x="160" y="200"/>
  <line x1="50" y1="200" x2="50" y2="150" stroke="currentColor" stroke-width="2"/>
</svg>

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
<svg width="450" height="220" viewBox="0 0 450 220" xmlns="http://www.w3.org/2000/svg">
  <use href="#batt" x="50" y="100"/>
  <text x="15" y="125" font-family="sans-serif" font-size="12" fill="currentColor">V1=18V</text>
  <line x1="50" y1="100" x2="50" y2="70" stroke="currentColor" stroke-width="2"/>
  <line x1="50" y1="70" x2="100" y2="70" stroke="currentColor" stroke-width="2"/>
  
  <use href="#res" x="100" y="70"/>
  <text x="105" y="95" font-family="sans-serif" font-size="12" fill="currentColor">R1=12Ω</text>
  
  <line x1="90" y1="70" x2="90" y2="20" stroke="currentColor" stroke-width="2"/>
  <line x1="90" y1="20" x2="100" y2="20" stroke="currentColor" stroke-width="2"/>
  <use href="#voltmeter" x="100" y="20"/>
  <line x1="140" y1="20" x2="150" y2="20" stroke="currentColor" stroke-width="2"/>
  <line x1="150" y1="20" x2="150" y2="70" stroke="currentColor" stroke-width="2"/>
  
  <line x1="140" y1="70" x2="220" y2="70" stroke="currentColor" stroke-width="2"/>
  <use href="#res" x="220" y="70"/>
  <text x="225" y="95" font-family="sans-serif" font-size="12" fill="currentColor">R2=36Ω</text>
  
  <line x1="210" y1="70" x2="210" y2="20" stroke="currentColor" stroke-width="2"/>
  <line x1="210" y1="20" x2="220" y2="20" stroke="currentColor" stroke-width="2"/>
  <use href="#voltmeter" x="220" y="20"/>
  <line x1="260" y1="20" x2="270" y2="20" stroke="currentColor" stroke-width="2"/>
  <line x1="270" y1="20" x2="270" y2="70" stroke="currentColor" stroke-width="2"/>
  
  <line x1="260" y1="70" x2="330" y2="70" stroke="currentColor" stroke-width="2"/>
  <line x1="330" y1="70" x2="330" y2="160" stroke="currentColor" stroke-width="2"/>
  <line x1="330" y1="160" x2="260" y2="160" stroke="currentColor" stroke-width="2"/>
  <use href="#ammeter" x="220" y="160"/>
  <line x1="220" y1="160" x2="50" y2="160" stroke="currentColor" stroke-width="2"/>
  <use href="#gnd" x="150" y="160"/>
  <line x1="50" y1="160" x2="50" y2="140" stroke="currentColor" stroke-width="2"/>
</svg>

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
<svg width="550" height="300" viewBox="0 0 550 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Ampermetru Vertical -->
    <g id="ammeter_v">
      <circle cx="0" cy="20" r="14" fill="none" stroke="currentColor" stroke-width="2"/>
      <text x="0" y="25" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="currentColor">A</text>
      <line x1="0" y1="0" x2="0" y2="6" stroke="currentColor" stroke-width="2"/>
      <line x1="0" y1="34" x2="0" y2="40" stroke="currentColor" stroke-width="2"/>
    </g>
  </defs>

  <use href="#batt" x="50" y="150"/>
  <text x="15" y="175" font-family="sans-serif" font-size="12" fill="currentColor">V1=12V</text>
  <line x1="50" y1="150" x2="50" y2="100" stroke="currentColor" stroke-width="2"/>
  <line x1="50" y1="100" x2="100" y2="100" stroke="currentColor" stroke-width="2"/>
  
  <use href="#res" x="100" y="100"/>
  <text x="105" y="125" font-family="sans-serif" font-size="12" fill="currentColor">R1=7Ω</text>
  
  <line x1="90" y1="100" x2="90" y2="60" stroke="currentColor" stroke-width="2"/>
  <line x1="90" y1="60" x2="100" y2="60" stroke="currentColor" stroke-width="2"/>
  <use href="#voltmeter" x="100" y="60"/>
  <line x1="140" y1="60" x2="150" y2="60" stroke="currentColor" stroke-width="2"/>
  <line x1="150" y1="60" x2="150" y2="100" stroke="currentColor" stroke-width="2"/>
  
  <line x1="140" y1="100" x2="180" y2="100" stroke="currentColor" stroke-width="2"/>
  <line x1="180" y1="60" x2="180" y2="140" stroke="currentColor" stroke-width="2"/>
  <line x1="180" y1="60" x2="200" y2="60" stroke="currentColor" stroke-width="2"/>
  <line x1="180" y1="100" x2="200" y2="100" stroke="currentColor" stroke-width="2"/>
  <line x1="180" y1="140" x2="200" y2="140" stroke="currentColor" stroke-width="2"/>
  
  <use href="#res" x="200" y="60"/>
  <text x="205" y="50" font-family="sans-serif" font-size="12" fill="currentColor">R2=5Ω</text>
  <use href="#res" x="200" y="100"/>
  <text x="205" y="90" font-family="sans-serif" font-size="12" fill="currentColor">R3=3Ω</text>
  <use href="#res" x="200" y="140"/>
  <text x="205" y="165" font-family="sans-serif" font-size="12" fill="currentColor">R4=6Ω</text>
  
  <line x1="240" y1="60" x2="260" y2="60" stroke="currentColor" stroke-width="2"/>
  <line x1="240" y1="100" x2="260" y2="100" stroke="currentColor" stroke-width="2"/>
  <line x1="240" y1="140" x2="260" y2="140" stroke="currentColor" stroke-width="2"/>
  <line x1="260" y1="60" x2="260" y2="140" stroke="currentColor" stroke-width="2"/>
  
  <line x1="260" y1="100" x2="280" y2="100" stroke="currentColor" stroke-width="2"/>
  <use href="#res" x="280" y="100"/>
  <text x="285" y="125" font-family="sans-serif" font-size="12" fill="currentColor">R5=8Ω</text>
  <line x1="320" y1="100" x2="380" y2="100" stroke="currentColor" stroke-width="2"/>
  
  <line x1="380" y1="100" x2="380" y2="130" stroke="currentColor" stroke-width="2"/>
  <use href="#ammeter_v" x="380" y="130"/>
  <line x1="380" y1="170" x2="380" y2="240" stroke="currentColor" stroke-width="2"/>
  
  <line x1="380" y1="240" x2="260" y2="240" stroke="currentColor" stroke-width="2"/>
  <use href="#res" x="220" y="240"/>
  <text x="225" y="265" font-family="sans-serif" font-size="12" fill="currentColor">R6=9Ω</text>
  <line x1="220" y1="240" x2="50" y2="240" stroke="currentColor" stroke-width="2"/>
  <use href="#gnd" x="120" y="240"/>
  <line x1="50" y1="240" x2="50" y2="190" stroke="currentColor" stroke-width="2"/>
</svg>

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