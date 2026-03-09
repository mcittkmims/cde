// CDE Search Data - generated from cde_problems.md and cde_theory.md
const CDE_DATA = [

  // ──────────────────────────── TEMA 1 ────────────────────────────

  {
    id: 1,
    type: "problem",
    theme: "TEMA 1",
    themeTitle: "Recapitulare – Calcule matematice și conversii",
    title: "Calcule cu puteri ale lui 10",
    tags: ["puteri", "10", "exponenti", "calcul", "sqrt", "radical", "recapitulare"],
    content: `**Enunț:** Să se calculeze:

a. $10^3 \\cdot 10 \\cdot 10^{-12}$

b. $(10^3)^2 \\cdot 10^{-9}$

c. $\\dfrac{10^3 \\cdot 10}{10^{-9} \\cdot 10^4 \\cdot 10^3}$

d. $\\sqrt{10^{-3} \\cdot 10^{-1} \\cdot 10^9}$

e. $\\sqrt{10^{-12} \\cdot 10^2 \\cdot 10^7}$

---

**Rezolvare:**

a. $10^3 \\cdot 10^1 \\cdot 10^{-12} = 10^{3+1-12} = 10^{-8}$

b. $(10^3)^2 \\cdot 10^{-9} = 10^{6-9} = 10^{-3}$

c. $\\dfrac{10^3 \\cdot 10^1}{10^{-9+4+3}} = \\dfrac{10^4}{10^{-2}} = 10^{6}$

d. $\\sqrt{10^{5}} = 10^{2} \\cdot \\sqrt{10} = 100\\sqrt{10}$

e. $\\sqrt{10^{-3}} = 10^{-3/2} = \\dfrac{1}{10\\sqrt{10}}$`
  },

  {
    id: 2,
    type: "problem",
    theme: "TEMA 1",
    themeTitle: "Recapitulare – Calcule matematice și conversii",
    title: "Conversii de rezistențe – kiloohmi (kΩ)",
    tags: ["conversie", "rezistenta", "ohm", "kiloohm", "megaohm", "unitati", "kΩ", "MΩ", "Ω"],
    content: `**Enunț:** Să se exprime în **kiloohmi** valorile:

a. $R = 500\\,[\\Omega] + 0{,}01\\,[M\\Omega] + 2\\,[k\\Omega]$

b. $R = 500\\,[\\Omega] + 1{,}2\\,[M\\Omega] + 0{,}05\\,[M\\Omega] + 20\\,[k\\Omega] + 800\\,[\\Omega]$

---

**Rezolvare:**

a. $R = 0{,}5\\,[k\\Omega] + 10\\,[k\\Omega] + 2\\,[k\\Omega] = \\boxed{12{,}5\\,[k\\Omega]}$

b. $R = 0{,}5 + 1200 + 50 + 20 + 0{,}8 = \\boxed{1271{,}3\\,[k\\Omega]}$

> **Reguli de conversie:**
> - $1\\,k\\Omega = 1000\\,\\Omega$ → $1\\,\\Omega = 0{,}001\\,k\\Omega$
> - $1\\,M\\Omega = 1000\\,k\\Omega$ → $1\\,M\\Omega = 10^6\\,\\Omega$`
  },

  // ──────────────────────────── TEMA 2 ────────────────────────────

  {
    id: 3,
    type: "problem",
    theme: "TEMA 2",
    themeTitle: "Legea lui Ohm – Curent continuu și alternativ",
    title: "Curent prin rezistor – CC și CA",
    tags: ["ohm", "rezistor", "curent", "tensiune", "continuu", "alternativ", "sinusoidal", "gol", "infinit", "mA", "kΩ", "V/kΩ"],
    content: `**Enunț:** $R = 10\\,[k\\Omega]$. Să se determine curentul dacă:

a. Tensiune continuă $V_R = 5\\,[V]$

b. Tensiune sinusoidală $v_R(\\omega t) = 2 + 1 \\cdot \\sin(\\omega t)\\,[V]$

c. Rezistență infinită (element **GOL**)

---

**Rezolvare:**

**a.** $I_R = \\dfrac{V_R}{R} = \\dfrac{5\\,[V]}{10\\,[k\\Omega]} = \\boxed{0{,}5\\,[mA]}$

> Regulă: $\\dfrac{V}{k\\Omega} = mA$

**b.** $i_R = \\dfrac{v_R}{R} = \\dfrac{2 + \\sin(\\omega t)}{10} = 0{,}2 + 0{,}1\\cdot\\sin(\\omega t)\\,[mA]$

- Valoare medie: $I_R = 0{,}2\\,[mA]$
- Amplitudine: $I_r = 0{,}1\\,[mA]$
- Faza inițială: $\\varphi_I = 0$

**c.** $R \\to \\infty \\Rightarrow I = \\dfrac{V}{\\infty} = \\boxed{0\\,[A]}$ (curent nul prin GOL)`
  },

  // ──────────────────────────── TEMA 3 ────────────────────────────

  {
    id: 4,
    type: "problem",
    theme: "TEMA 3",
    themeTitle: "Circuite Electrice – Legea lui Ohm și Legile lui Kirchhoff",
    title: "Problema 1 – Serie + Paralel (R1, R2, R3‖R4)",
    tags: ["kirchhoff", "ohm", "paralel", "serie", "rezistenta echivalenta", "RE", "curent", "R1=10", "R2=20", "R3=20", "R4=20", "V1=12", "12V"],
    content: `![Schema circuitului](images/problema_01.svg)

**Date:** $R_1=10\\,\\Omega,\\; R_2=20\\,\\Omega,\\; R_3=20\\,\\Omega,\\; R_4=20\\,\\Omega,\\; V_1=12\\,V$

**Se cer:** $R_E$, $I$

---

**Rezolvare:**

$$R_{34} = \\frac{R_3 \\cdot R_4}{R_3+R_4} = \\frac{20\\cdot20}{40} = 10\\,\\Omega$$

$$R_E = R_1 + R_2 + R_{34} = 10+20+10 = \\boxed{40\\,\\Omega}$$

$$I = \\frac{V_1}{R_E} = \\frac{12}{40} = \\boxed{0{,}3\\,A = 300\\,mA}$$`
  },

  {
    id: 5,
    type: "problem",
    theme: "TEMA 3",
    themeTitle: "Circuite Electrice – Legea lui Ohm și Legile lui Kirchhoff",
    title: "Problema 2 – (R1‖R5) + R2 + (R3‖R4)",
    tags: ["kirchhoff", "ohm", "paralel", "serie", "mixt", "rezistenta echivalenta", "RE", "R1=10", "R2=12", "R3=40", "R4=10", "R5=10", "V1=15", "15V"],
    content: `![Schema circuitului](images/problema_02.svg)

**Date:** $R_1=10\\,\\Omega,\\;R_2=12\\,\\Omega,\\;R_3=40\\,\\Omega,\\;R_4=10\\,\\Omega,\\;R_5=10\\,\\Omega,\\;V_1=15\\,V$

**Se cer:** $R_E$, $I$

---

**Rezolvare:**

$$R_{34} = \\frac{40\\cdot10}{50} = 8\\,\\Omega,\\quad R_{15} = \\frac{10\\cdot10}{20} = 5\\,\\Omega$$

$$R_E = R_{15}+R_2+R_{34} = 5+12+8 = \\boxed{25\\,\\Omega}$$

$$I = \\frac{15}{25} = \\boxed{0{,}6\\,A = 600\\,mA}$$`
  },

  {
    id: 6,
    type: "problem",
    theme: "TEMA 3",
    themeTitle: "Circuite Electrice – Legea lui Ohm și Legile lui Kirchhoff",
    title: "Problema 3 – Kirchhoff, curenți de ramură I1, I2",
    tags: ["kirchhoff", "sistem ecuatii", "curent ramura", "I1", "I2", "ampermetru", "voltmetru", "UAB", "R1=10", "R2=30", "R3=2.5", "V1=16", "16V"],
    content: `![Schema circuitului](images/problema_03.svg)

**Date:** $R_1=10\\,\\Omega,\\;R_2=30\\,\\Omega,\\;R_3=2{,}5\\,\\Omega,\\;V_1=16\\,V$

**Se cer:** $I_1,\\;I_2,\\;U_3,\\;I,\\;R_{12},\\;R_E$

---

**Rezolvare** (Legile lui Kirchhoff):

$$\\begin{cases} 16 = 2{,}5\\,I + 30\\,I_2 \\\\ 10\\,I_1 = 30\\,I_2 \\Rightarrow I_1 = 3I_2 \\\\ I = I_1+I_2 \\end{cases}$$

$16 = 2{,}5(4I_2)+30I_2 = 40I_2 \\Rightarrow I_2 = 0{,}4\\,A$

$$I_1 = 1{,}2\\,A,\\quad I=1{,}6\\,A,\\quad U_3=4\\,V$$

$$R_{12}=\\frac{10\\cdot30}{40}=7{,}5\\,\\Omega,\\quad R_E=\\boxed{10\\,\\Omega}$$`
  },

  {
    id: 7,
    type: "problem",
    theme: "TEMA 3",
    themeTitle: "Circuite Electrice – Legea lui Ohm și Legile lui Kirchhoff",
    title: "Problema 4 – Divizor de tensiune serie (U1, U2)",
    tags: ["ohm", "kirchhoff", "serie", "tensiune", "U1", "U2", "cadere tensiune", "R1=12", "R2=36", "V1=18", "18V"],
    content: `![Schema circuitului](images/problema_04.svg)

**Date:** $R_1=12\\,\\Omega,\\;R_2=36\\,\\Omega,\\;V_1=18\\,V$

**Se cer:** $U_1,\\;U_2,\\;I,\\;R_E$

---

**Rezolvare:**

$$I = \\frac{18}{12+36} = \\frac{18}{48} = \\boxed{0{,}375\\,A}$$

$$U_1 = 12\\cdot0{,}375 = \\boxed{4{,}5\\,V},\\quad U_2 = 36\\cdot0{,}375 = \\boxed{13{,}5\\,V}$$

$$R_E = 48\\,\\Omega$$`
  },

  {
    id: 8,
    type: "problem",
    theme: "TEMA 3",
    themeTitle: "Circuite Electrice – Legea lui Ohm și Legile lui Kirchhoff",
    title: "Problema 5 – Circuit mixt (R2‖R3‖R4 în serie cu R1, R5, R6)",
    tags: ["circuit mixt", "paralel", "serie", "R234", "R1=7", "R2=5", "R3=3", "R4=6", "R5=8", "R6=9", "V1=12", "12V", "U1"],
    content: `![Schema circuitului](images/problema_05.svg)

**Date:** $R_1=7\\,\\Omega,\\;R_2=5\\,\\Omega,\\;R_3=3\\,\\Omega,\\;R_4=6\\,\\Omega,\\;R_5=8\\,\\Omega,\\;R_6=9\\,\\Omega,\\;V_1=12\\,V$

**Se cer:** $U_1,\\;I,\\;R_E$

---

**Rezolvare:**

$$\\frac{1}{R_{234}} = \\frac{1}{5}+\\frac{1}{3}+\\frac{1}{6} = \\frac{6+10+5}{30} = \\frac{21}{30} \\Rightarrow R_{234}=\\frac{10}{7}\\approx1{,}43\\,\\Omega$$

$$R_E = 7+1{,}428+8+9 = \\boxed{25{,}43\\,\\Omega}$$

$$I = \\frac{12}{25{,}43} \\approx \\boxed{0{,}472\\,A},\\quad U_1=7\\cdot0{,}472=\\boxed{3{,}3\\,V}$$

> **Obs.:** $R_{234} < R_2, R_3, R_4$ – gruparea paralelă are rezistența mai mică decât orice componentă.`
  },

  // ──────────────────────────── TEMA 4 ────────────────────────────

  {
    id: 9,
    type: "problem",
    theme: "TEMA 4",
    themeTitle: "Divizoare de tensiune",
    title: "Divizor simplu cu 2 rezistoare (R1=20Ω, R2=40Ω)",
    tags: ["divizor tensiune", "voltage divider", "serie", "cadere tensiune", "VR1", "VR2", "R1=20", "R2=40", "Vs=12", "12V", "200mA"],
    content: `![Schema](images/cde_problems1_schema_01.svg)

**Enunț:** $R_1=20\\,\\Omega$, $R_2=40\\,\\Omega$, $V_S=12\\,V$. Cât curent circulă și cât cade pe fiecare rezistor?

---

**Rezolvare:**

$$R_T = 20+40 = 60\\,\\Omega$$

$$I = \\frac{12}{60} = 0{,}2\\,A = 200\\,mA$$

$$V_{R1} = V_S\\cdot\\frac{R_1}{R_T} = 12\\cdot\\frac{20}{60} = \\boxed{4\\,V}$$

$$V_{R2} = V_S\\cdot\\frac{R_2}{R_T} = 12\\cdot\\frac{40}{60} = \\boxed{8\\,V}$$`
  },

  {
    id: 10,
    type: "problem",
    theme: "TEMA 4",
    themeTitle: "Divizoare de tensiune",
    title: "Divizor cu 3 rezistoare în serie (6kΩ, 12kΩ, 18kΩ)",
    tags: ["divizor tensiune", "3 rezistoare", "serie", "kiloohm", "R1=6k", "R2=12k", "R3=18k", "Vs=36", "36V", "1mA"],
    content: `![Schema](images/cde_problems1_schema_02.svg)

**Date:** $V_S=36\\,V$, $R_1=6k\\Omega$, $R_2=12k\\Omega$, $R_3=18k\\Omega$

---

**Rezolvare:**

$$R_T = 6+12+18 = 36\\,k\\Omega$$

$$I = \\frac{36}{36000} = 1\\,mA$$

$$V_{R1}=36\\cdot\\frac{6}{36}=\\boxed{6\\,V},\\quad V_{R2}=\\boxed{12\\,V},\\quad V_{R3}=\\boxed{18\\,V}$$`
  },

  {
    id: 11,
    type: "problem",
    theme: "TEMA 4",
    themeTitle: "Divizoare de tensiune",
    title: "Rețea divizoare – puncte de priză A, B, C, D, E",
    tags: ["divizor tensiune", "puncte priza", "A B C D E", "VBE", "rețea rezistivă", "R1=8k", "R2=4k", "R3=2k", "R4=1k", "15V", "15kΩ"],
    content: `![Schema](images/cde_problems1_schema_03.svg)

**Date:** $V_S=15\\,V$, $R_1=8k\\Omega$, $R_2=4k\\Omega$, $R_3=2k\\Omega$, $R_4=1k\\Omega$

**Se cer:** tensiunile la punctele A, B, C, D, E și $V_{BE}$

---

**Rezolvare:**

$$R_T = 8+4+2+1 = 15\\,k\\Omega,\\quad I=\\frac{15}{15}=1\\,mA$$

$$V_{BE} = 15\\cdot\\frac{4+2+1}{15} = \\boxed{7\\,V}$$

$$V_{AB}=8\\,V,\\quad V_{BC}=4\\,V,\\quad V_{CD}=2\\,V,\\quad V_{DE}=1\\,V$$`
  },

  {
    id: 12,
    type: "problem",
    theme: "TEMA 4",
    themeTitle: "Divizoare de tensiune",
    title: "Divizor cu referință deplasată – tensiuni pozitive și negative",
    tags: ["divizor tensiune", "tensiuni negative", "tensiuni pozitive", "referinta masa", "-12V", "+3.3V", "+5V", "+12V", "24V", "60W", "2.5A"],
    content: `![Schema](images/cde_problems1_schema_04.svg)

**Enunț:** Putere totală $P=60\\,W$, $V_S=24\\,V$. Se cer $R_1\\ldots R_4$ pentru nivelele $-12\\,V,\\;+3{,}3\\,V,\\;+5\\,V,\\;+12\\,V$.

---

**Rezolvare:**

$$I = \\frac{P}{V} = \\frac{60}{24} = 2{,}5\\,A$$

$$R_1 = \\frac{12-5}{2{,}5} = \\boxed{2{,}8\\,\\Omega},\\quad R_2 = \\frac{5-3{,}3}{2{,}5} = \\boxed{0{,}68\\,\\Omega}$$

$$R_3 = \\frac{3{,}3}{2{,}5} = \\boxed{1{,}32\\,\\Omega},\\quad R_4 = \\frac{12}{2{,}5} = \\boxed{4{,}8\\,\\Omega}$$`
  },

  // ──────────────────────────── TEMA 5 ────────────────────────────

  {
    id: 13,
    type: "problem",
    theme: "TEMA 5",
    themeTitle: "Diode Semiconductoare",
    title: "Problema 1 – Rezistența DC a diodei din caracteristică",
    tags: ["dioda", "semiconductor", "rezistenta continuu", "RD", "caracteristica", "20mA", "2mA", "-10V", "conducție", "inversă", "directă", "40Ω", "250Ω", "10MΩ"],
    content: `![Caracteristica diodei](images/cde_problems2_schema_01.svg)

**Enunț:** Din caracteristica de funcționare se determină $R_D$ dacă:

a. $I_D = 20\\,[mA]$
b. $I_D = 2\\,[mA]$
c. $V_D = -10\\,[V]$

---

**Rezolvare:**

**a.** La $I_D=20\\,mA \\Rightarrow V_D=0{,}8\\,V$:
$$R_D = \\frac{V_D}{I_D} = \\frac{0{,}8}{20}\\,[k\\Omega] = \\boxed{40\\,[\\Omega]}$$

**b.** La $I_D=2\\,mA \\Rightarrow V_D=0{,}5\\,V$:
$$R_D = \\frac{0{,}5}{2}\\,[k\\Omega] = \\boxed{250\\,[\\Omega]}$$

**c.** La $V_D=-10\\,V \\Rightarrow I_D=-1\\,[\\mu A]$:
$$R_D = \\frac{-10}{-1}\\,[M\\Omega] = \\boxed{10\\,[M\\Omega]}$$`
  },

  {
    id: 14,
    type: "problem",
    theme: "TEMA 5",
    themeTitle: "Diode Semiconductoare",
    title: "Problema 2 – Rezistența de semnal mare (2mA → 17mA)",
    tags: ["dioda", "rezistenta semnal mare", "rD", "variatie curent", "delta i", "delta v", "2mA", "17mA", "15mA", "75mV", "5Ω"],
    content: `![Caracteristica diodei](images/cde_problems2_schema_02.svg)

**Enunț:** Curentul variază între $2\\,mA$ și $17\\,mA$. Tensiunile corespunzătoare: $0{,}65\\,V$ și $0{,}725\\,V$.

---

**Rezolvare:**

$$\\Delta i_D = 17-2 = 15\\,[mA],\\quad \\Delta v_D = 0{,}725-0{,}65 = 75\\,[mV]$$

$$V_d = \\frac{75}{2} = 37{,}5\\,[mV] \\gg 12{,}5\\,mV \\Rightarrow \\text{regim semnal \\_mare}$$

$$r_D = \\frac{\\Delta v_D}{\\Delta i_D} = \\frac{0{,}075}{15} = \\boxed{5\\,[\\Omega]}$$`
  },

  {
    id: 15,
    type: "problem",
    theme: "TEMA 5",
    themeTitle: "Diode Semiconductoare",
    title: "Problema 3 – Rezistența de semnal mic (20mA → 30mA, T=25°C)",
    tags: ["dioda", "rezistenta semnal mic", "rd", "semnal mic", "VT", "25mV", "20mA", "30mA", "25mA", "1Ω", "temperatura", "T=25"],
    content: `![Caracteristica diodei](images/cde_problems2_schema_03.svg)

**Enunț:** $I_{D,min}=20\\,mA$, $I_{D,max}=30\\,mA$, $I_D=25\\,mA$. $T=25^\\circ C$.

La $20\\,mA\\Rightarrow V_D=0{,}78\\,V$; la $30\\,mA\\Rightarrow V_D=0{,}80\\,V$.

---

**Rezolvare:**

$$\\Delta v_D = 0{,}80-0{,}78 = 20\\,[mV],\\quad V_d=10\\,[mV] < 12{,}5\\,mV \\Rightarrow \\text{semnal mic}$$

$$r_d = \\frac{V_T}{I_D} = \\frac{25\\,[mV]}{25\\,[mA]} = \\boxed{1\\,[\\Omega]}$$

> $V_T = 25\\,mV$ tensiunea termică la $T=25^\\circ C$.`
  },

  {
    id: 16,
    type: "problem",
    theme: "TEMA 5",
    themeTitle: "Diode Semiconductoare",
    title: "Problema 4 – Circuit simplu cu o diodă (E=5V, R=220Ω)",
    tags: ["dioda", "conducție directă", "curent continuu", "RD", "rd", "semnal mic", "Kirchhoff", "E=5V", "R=220Ω", "20mA", "0.6V", "30Ω", "1.25Ω"],
    content: `![Schema](images/cde_problems2_schema_04.svg)

**Date:** $E=5\\,[V]$, $R=220\\,[\\Omega]$, $V_D=0{,}6\\,[V]$

**Se cer:** regiune de funcționare, $I_D$, $R_D$, $r_d$

---

**Rezolvare:**

**a.** Polul + al sursei → anod; polul - → catod → **conducție directă**.

**b.** Circuitul echivalent:
![Echivalent](images/cde_problems2_schema_05.svg)

$$R\\cdot I_D + V_D - E = 0 \\Rightarrow I_D = \\frac{E-V_D}{R} = \\frac{5-0{,}6}{0{,}220} = \\boxed{20\\,[mA]}$$

**c.** $R_D = \\dfrac{V_D}{I_D} = \\dfrac{0{,}6}{20} = \\boxed{30\\,[\\Omega]}$

**d.** $r_d = \\dfrac{V_T}{I_D} = \\dfrac{25}{20} = \\boxed{1{,}25\\,[\\Omega]}$`
  },

  {
    id: 17,
    type: "problem",
    theme: "TEMA 5",
    themeTitle: "Diode Semiconductoare",
    title: "Problema 5 – Circuit cu o diodă și 2 surse (E1=10V, E2=5V)",
    tags: ["dioda", "conducție directă", "2 surse", "Kirchhoff", "E1=10V", "E2=5V", "R1=4.7kΩ", "R2=2.2kΩ", "2.08mA", "tensiunea V", "-0.43V"],
    content: `![Schema](images/cde_problems2_schema_06.svg)

**Date:** $E_1=10\\,[V]$, $R_1=4{,}7\\,[k\\Omega]$, $E_2=5\\,[V]$, $R_2=2{,}2\\,[k\\Omega]$

**Se cer:** $I_D$, tensiunea $V$

---

**Rezolvare:**

Circuitul echivalent (diodă în conducție directă):
![Echivalent](images/cde_problems2_schema_07.svg)

$$R_1 I_D + V_D + R_2 I_D = E_1+E_2 \\Rightarrow I_D = \\frac{10+5-0{,}6}{4{,}7+2{,}2} = \\frac{14{,}4}{6{,}9} \\cong \\boxed{2{,}08\\,[mA]}$$

$$V = R_2 I_D - E_2 = 2{,}2\\cdot2{,}08 - 5 = 4{,}57-5 = \\boxed{-0{,}43\\,[V]}$$`
  },

  {
    id: 18,
    type: "problem",
    theme: "TEMA 5",
    themeTitle: "Diode Semiconductoare",
    title: "Problema 6 – Două diode (D1 directă, D2 inversă)",
    tags: ["dioda", "2 diode", "D1", "D2", "conducție directă", "conducție inversă", "curent nul", "E1=15V", "E2=4V", "R=2.2kΩ", "8.36mA"],
    content: `![Schema](images/cde_problems2_schema_08.svg)

**Date:** $E_1=15\\,[V]$, $R=2{,}2\\,[k\\Omega]$, $E_2=4\\,[V]$

---

**Analiză:** Polul $-$ al $E_2$ → catod D1 și anod D2.
- D1: **conducție directă**
- D2: **conducție inversă** → $I_{D2}=0\\,[A]$

Circuitul echivalent:
![Echivalent](images/cde_problems2_schema_09.svg)

$$R\\cdot I_{D1} + V_D - E_2 - E_1 = 0 \\Rightarrow I_{D1} = \\frac{15+4-0{,}6}{2{,}2} = \\frac{18{,}4}{2{,}2} \\cong \\boxed{8{,}36\\,[mA]}$$`
  },

  {
    id: 19,
    type: "problem",
    theme: "TEMA 5",
    themeTitle: "Diode Semiconductoare",
    title: "Problema 7 – Două diode în paralel (VD1=0.65V, VD2=0.7V)",
    tags: ["dioda", "2 diode", "D1", "D2", "paralel", "Kirchhoff", "VD1=0.65", "VD2=0.7", "E=20V", "R1=4.7kΩ", "R2=3.5kΩ", "3.96mA", "0.2mA", "3.76mA"],
    content: `![Schema](images/cde_problems2_schema_10.svg)

**Date:** $E=20\\,[V]$, $R_1=4{,}7\\,[k\\Omega]$, $R_2=3{,}5\\,[k\\Omega]$, $V_{D1}=0{,}65\\,[V]$, $V_{D2}=0{,}7\\,[V]$

**Se cer:** $I_{D1}$, $I_{D2}$

---

Circuitul echivalent:
![Echivalent](images/cde_problems2_schema_11.svg)

**Bucla R2 – VD2:**
$$R_2 I - V_{D2}=0 \\Rightarrow I = \\frac{0{,}7}{3{,}5} = 0{,}2\\,[mA]$$

**Bucla principală:**
$$I_{D1} = \\frac{E-(V_{D1}+V_{D2})}{R_1} = \\frac{20-1{,}35}{4{,}7} = \\frac{18{,}65}{4{,}7} \\cong \\boxed{3{,}96\\,[mA]}$$

**Nod superior – Kirchhoff 1:**
$$I_{D2} = I_{D1}-I = 3{,}96-0{,}2 = \\boxed{3{,}76\\,[mA]}$$`
  },

  // ──────────────────────────── TEORIE ────────────────────────────

  {
    id: 20,
    type: "theory",
    theme: "TEORIE",
    themeTitle: "Baze și Componente Electronice Pasive",
    title: "Noțiuni introductive – circuit electric, semnale, RMS",
    tags: ["circuit electric","activ","pasiv","integrat","analogic","numeric","semnal","RMS","valoare efectiva","valoare medie","valoare instantanee","valoare de varf","putere electrica","curent","tensiune","sarcina electrica","dq/dt","frecventa","pulsatie","omega","faza"],
    content: "**Circuitul electric** reprezintă o succesiune de medii conductoare prin care circulă curent electric, caracterizat de parametri de circuit precum rezistența, inductivitatea și capacitatea.\n\n- **Circuit activ:** Conține cel puțin un element activ.\n- **Circuit pasiv:** Nu conține nicio sursă de energie.\n- **Circuit integrat:** Grup de elemente electronice conectate inseparabil, capabil să îndeplinească una sau mai multe funcții. Poate fi **analogic** (mărimea de ieșire variază continuu) sau **numeric** (funcționează în cod binar, cu nivele 0 și 1).\n\nIntensitatea curentului electric într-un punct al unui conductor este, prin definiție, debitul de sarcină electrică transportată prin acel punct:\n\n$$I(t) = \\frac{dq}{dt}$$\n\n### Parametrii semnalelor alternative\n\n- **Valoarea instantanee:** $x(t) = X\\sqrt{2}\\sin(\\omega t \\pm \\varphi)$\n- **Valoarea medie pe o perioadă:** $X_{med} = \\dfrac{1}{T} \\int_0^T x(t)\\,dt$\n- **Valoarea efectivă (RMS):** $X = \\sqrt{\\dfrac{1}{T} \\int_0^T x(t)^2\\,dt}$ — reprezintă **0,707** din valoarea de vârf pentru curent alternativ sinusoidal.\n- **Puterea electrică medie:** $P_{med} = \\dfrac{1}{T}\\int_0^T u(t)i(t)\\,dt$"
  },

  {
    id: 21,
    type: "theory",
    theme: "TEORIE",
    themeTitle: "Baze și Componente Electronice Pasive",
    title: "Legea lui Ohm – pe porțiune și pe întreg circuitul",
    tags: ["ohm","lege","rezistenta","tensiune","curent","tensiune electromotoare","E","rezistenta interna","r","scurtcircuit","curent scurtcircuit","Isc","U=E-rI"],
    content: "**Legea lui Ohm pe o porțiune de circuit:** Intensitatea curentului este proporțională cu tensiunea aplicată pe acea porțiune și invers proporțională cu rezistența electrică:\n\n$$I = \\frac{U}{R}$$\n\n**Legea lui Ohm pe întregul circuit:** Intensitatea curentului printr-un circuit închis este direct proporțională cu tensiunea electromotoare $E$ și invers proporțională cu rezistența totală:\n\n$$E = I(R + r) \\implies U = E - rI$$\n\n**Curentul de scurtcircuit** apare când rezistența exterioară devine nulă, fiind curentul maxim furnizat de generator:\n\n$$I_{sc} = \\frac{E}{r}$$\n\n### Reguli practice de calcul\n\n| | Rezultat |\n|---|---|\n| $[V] / [k\\Omega]$ | $= [mA]$ |\n| $[V] / [M\\Omega]$ | $= [\\mu A]$ |\n| $[mV] / [\\Omega]$ | $= [mA]$ |"
  },

  {
    id: 22,
    type: "theory",
    theme: "TEORIE",
    themeTitle: "Baze și Componente Electronice Pasive",
    title: "Legile lui Kirchhoff (KCL și KVL)",
    tags: ["kirchhoff","KCL","KVL","nod","bucla","ochi","retea","suma curentilor","suma tensiunilor","cadere tensiune","tensiune electromotoare"],
    content: "**Prima lege a lui Kirchhoff (pentru noduri):** Suma algebrică a intensităților curenților electrici care se întâlnesc într-un nod de rețea este egală cu zero:\n\n$$\\sum I_k = 0$$\n\n**A doua lege a lui Kirchhoff (pentru ochiuri):** Suma algebrică a tensiunilor electromotoare dintr-un ochi de rețea este egală cu suma algebrică a căderilor de tensiune pe rezistorii din acel ochi:\n\n$$\\sum E_k = \\sum R_k I_k$$\n\n### Convenție de semn (KVL)\n- Se alege un sens de parcurgere al buclei (ex. orar).\n- Sursă: $+E$ dacă parcurgi de la $-$ la $+$; $-E$ în sens invers.\n- Rezistor: $+RI$ dacă sensul curentului coincide cu sensul de parcurgere."
  },

  {
    id: 23,
    type: "theory",
    theme: "TEORIE",
    themeTitle: "Baze și Componente Electronice Pasive",
    title: "Rezistoare – rezistivitate, serie, paralel, putere, parametri",
    tags: ["rezistor","rezistenta electrica","rezistivitate","rho","ohm","serie","paralel","divizor tensiune","divizor curent","putere","efect joule","toleranta","coeficient temperatura","putere nominala","tensiune nominala","Pn","RN"],
    content: "**Rezistorul** este o componentă de circuit a cărei proprietate principală este **rezistența electrică** (măsurată în Ohmi, $\\Omega$), ce reprezintă fenomenul de opunere la trecerea curentului.\n\nPentru un conductor de lungime $l$, secțiune $S$ și rezistivitate $\\rho$, rezistența este:\n\n$$R = \\rho \\frac{l}{S}$$\n\nPuterea electrică disipată se transformă în căldură prin **efect Joule**:\n\n$$P = U \\cdot I = R \\cdot I^2 = \\frac{U^2}{R}$$\n\n### Conectarea în serie – Divizor de tensiune\n\n$$R_{ech} = R_1 + R_2, \\qquad U_1 = U \\cdot \\frac{R_1}{R_1 + R_2}$$\n\nCurentul este **același** prin toate rezistoarele. Tensiunea se împarte proporțional cu $R$.\n\n### Conectarea în paralel – Divizor de curent\n\n$$R_{ech} = \\frac{R_1 R_2}{R_1 + R_2}, \\qquad I_1 = I \\cdot \\frac{R_2}{R_1 + R_2}$$\n\nTensiunea este **aceeași** pe toate. Curentul se împarte invers proporțional cu $R$. $R_{ech} < \\min(R_1, R_2)$.\n\n### Parametri importanți\n- **Rezistența nominală** $R_N$\n- **Toleranța** $t = \\pm\\dfrac{\\max|R - R_N|}{R_N} \\cdot 100\\%$\n- **Puterea disipată nominală** $P_n$\n- **Tensiunea nominală limită** $U_{n\\,lim} = \\sqrt{P_n R_N}$\n- **Coeficientul de temperatură** al rezistenței (variația rezistenței cu temperatura)"
  },

  {
    id: 24,
    type: "theory",
    theme: "TEORIE",
    themeTitle: "Baze și Componente Electronice Pasive",
    title: "Condensatoare – capacitate, câmp electric, reactanță capacitivă",
    tags: ["condensator","capacitate","farad","F","dielectric","armatura","energie electrica","camp electric","reactanta capacitiva","XC","impedanta","ZC","serie","paralel","curent continuu","intrerupere circuit","gol","Q=CU","epsilon"],
    content: "**Condensatorul** este un sistem de două conductoare (armături) despărțite de un dielectric. Se caracterizează prin **capacitate** ($C$, măsurată în Farazi, $F$):\n\n$$Q = C \\cdot U, \\qquad C = \\varepsilon \\frac{S}{d}$$\n\nCondensatorul înmagazinează energia câmpului electric:\n\n$$W = \\frac{1}{2} C U^2$$\n\n### Conectare\n\n- **Serie:** $C_{ech} = \\dfrac{C_1 C_2}{C_1 + C_2}$\n- **Paralel:** $C_{ech} = C_1 + C_2$\n\n### Comportament în regim variabil\n\nReactanța capacitivă: $X_C = \\dfrac{1}{\\omega C}$\n\nImpedanța: $Z_C = R - jX_C$\n\n> **În curent continuu** ($\\omega = 0$): $X_C \\to \\infty$ → condensatorul este echivalent cu o **întrerupere de circuit (gol)**."
  },

  {
    id: 25,
    type: "theory",
    theme: "TEORIE",
    themeTitle: "Baze și Componente Electronice Pasive",
    title: "Bobine – inductanță, câmp magnetic, reactanță inductivă",
    tags: ["bobina","inductanta","henry","H","flux magnetic","energie magnetica","reactanta inductiva","XL","impedanta","serie","paralel","curent continuu","scurtcircuit","uL=L*di/dt","opozitie variatie curent"],
    content: "**Bobina** este o componentă caracterizată de **inductanță** ($L$, măsurată în Henry, $H$). Ea are proprietatea de a se opune variației curentului electric și de a acumula energie magnetică:\n\n$$u_L(t) = L \\frac{di_L(t)}{dt}, \\qquad L = \\frac{\\Phi(t)}{i(t)}$$\n\nEnergie magnetică acumulată:\n\n$$W_L = \\frac{L I^2}{2}$$\n\n### Conectare\n\n- **Serie:** $L_{ech} = L_1 + L_2$\n- **Paralel:** $L_{ech} = \\dfrac{L_1 L_2}{L_1 + L_2}$\n\n### Comportament în regim variabil\n\nReactanța inductivă: $X_L = \\omega L$\n\n> **În curent continuu** ($\\omega = 0$): $X_L = 0$ → bobina ideală este echivalentă cu un **scurtcircuit**."
  },

  {
    id: 26,
    type: "theory",
    theme: "TEORIE",
    themeTitle: "Joncțiunea p-n și Diode Semiconductoare",
    title: "Materiale semiconductoare – intrinsec, tip N, tip P, benzi de energie",
    tags: ["semiconductor","intrinsec","tip N","tip P","donori","pentavalent","acceptori","trivalent","banda valenta","banda conductie","banda interzisa","electroni","goluri","purtatori majoritari","purtatori minoritari","eV","dopare","impuritati"],
    content: "Semiconductorii posedă conductibilitate plasată între cea a izolatorilor și a conductoarelor, asigurată atât de **electroni** cât și de **goluri**.\n\n### Benzile de energie\n\nComportamentul electric este determinat de structura energetică:\n- **Banda de valență** – energii permise electronilor de valență\n- **Banda de conducție** – energii permise electronilor liberi\n- **Banda interzisă** – lățime între 0,1 eV și 3 eV\n\n### Tipuri de semiconductoare\n\n| Tip | Caracteristică | Purtători majoritari | Purtători minoritari |\n|---|---|---|---|\n| **Intrinsec** | Fără impurități, $p_0 = n_0 = n_i$ | egali | egali |\n| **Extrinsec tip N** | Impurități donoare pentavalente | electroni | goluri |\n| **Extrinsec tip P** | Impurități acceptoare trivalente | goluri | electroni |"
  },

  {
    id: 27,
    type: "theory",
    theme: "TEORIE",
    themeTitle: "Joncțiunea p-n și Diode Semiconductoare",
    title: "Joncțiunea p-n – barieră de potențial, polarizare directă și inversă",
    tags: ["jonctiune pn","dioda","anod","catod","polarizare directa","polarizare inversa","bariera de potential","regiune de trecere","regiune saracita","difuzie","curent saturatie","IS","0.6V","0.3V","siliciu","germaniu","temperatura","purtatori majoritari","purtatori minoritari"],
    content: "Dioda semiconductoare este formată dintr-o **joncțiune p-n** cu două contacte: **Anod (+)** și **Catod (-)**.\n\nPrin contactul zonelor p și n, difuzia purtătorilor formează o **regiune de trecere (sărăcită)** și un câmp electric intern care se opune difuziei ulterioare, creând o **barieră de potențial**.\n\n### Polarizarea inversă ($u_d < 0$)\n\nBariera de potențial crește, curgerea purtătorilor majoritari este blocată. Apare doar un curent foarte mic (de saturație, $I_S$) format din purtători minoritari:\n\n$$i_d \\cong -I_S$$\n\n### Polarizarea directă ($u_d > 0$)\n\nCâmpul extern anulează bariera de potențial, permițând trecerea exponențială a curentului:\n\n$$i_d \\cong I_S e^{\\frac{q\\,u_d}{kT}}$$\n\nTensiunea de deschidere: **0,6 V** (Si) | **0,3 V** (Ge)\n\n### Efectul temperaturii\n\n- Curentul invers $I_S$ se **dublează** la fiecare +6°C (Si) și +9°C (Ge)\n- Tensiunea la curent constant **scade cu 2 mV/°C**"
  },

  {
    id: 28,
    type: "theory",
    theme: "TEORIE",
    themeTitle: "Joncțiunea p-n și Diode Semiconductoare",
    title: "Tipuri de diode – Zener, Schottky, Varicap, Tunel, Fotodiodă, LED",
    tags: ["zener","schottky","varicap","tunel","LED","fotodioda","stabilizatoare","avalansa","UZ","comutatie rapida","timp recuperare","capacitate variabila","efect fotovoltaic","efect tunel","rezistenta diferentiala negativa","lumina","fotoni","recombinare","metal-semiconductor","unipolar"],
    content: "### Dioda Zener (Stabilizatoare)\n\nFuncționează în **polarizare inversă**. La o anumită valoare a tensiunii, curentul crește masiv (prin efect de avalanșă sau efect Zener), în timp ce tensiunea $U_Z$ rămâne constantă. Folosită pentru **stabilizarea tensiunii**.\n\n### Dioda Schottky\n\nFolosește o joncțiune **metal-semiconductor** (dispozitiv unipolar). Oferă viteză de comutație extrem de mare (timp de recuperare practic zero) și cădere de tensiune directă foarte mică (0,2–0,45 V). Curent invers mai mare; tensiune inversă nominală mai redusă.\n\n### Dioda Varicap\n\nFuncționează ca o **capacitate variabilă** controlată de tensiunea de polarizare inversă:\n\n$$C_b = \\frac{C_{b0}}{(1 + U_{KA}/U_0)^2}$$\n\nUtilă în oscilatoare și filtre de acord.\n\n### Dioda Tunel\n\nPrezintă o regiune de **rezistență diferențială negativă** datorită efectului tunel. Utilizată în oscilatoare de înaltă frecvență.\n\n### Fotodioda\n\nFuncționează în **polarizare inversă**. Fotonii absorbți generează perechi electron-gol (**efect fotovoltaic**), formând un curent proporțional cu fluxul luminos incident.\n\n### LED (Diodă Emițătoare de Lumină)\n\nFuncționează în **polarizare directă**. Recombinarea electronilor cu golurile eliberează **fotoni** (lumină)."
  },

  {
    id: 29,
    type: "theory",
    theme: "TEORIE",
    themeTitle: "Surse de Alimentare și Redresoare",
    title: "Redresoare – monoalternanță, bialternanță, punte Graetz",
    tags: ["redresor","monoalternanta","bialternanta","punte","punte graetz","riplu","factor de unda","gamma","eficienta","eta","V0","tensiune medie","tensiune efectiva","transformator","priza mediana","alimentator","curent continuu","CC"],
    content: "Structura tipică a unui alimentator de curent continuu: **Transformator → Redresor → Filtru → Stabilizator**\n\n### Redresor monoalternanță\n\nPermite trecerea doar a unei singure alternanțe.\n\n- Tensiunea medie de ieșire: $V_0 \\approx \\dfrac{\\sqrt{2}\\,V_2}{\\pi}$\n- Tensiunea efectivă de ieșire: $V_{oef} \\approx \\dfrac{\\sqrt{2}\\,V_2}{2}$\n- Factorul de undă (Riplu): $\\gamma \\approx 1{,}57$\n- Eficiența: $\\eta \\approx 40{,}5\\%$\n\n### Redresor bialternanță cu priză mediană\n\nUtilizează un transformator cu secundar dublu identic și 2 diode.\n\n- $V_0 \\approx \\dfrac{2\\sqrt{2}\\,V_2}{\\pi}$\n- $\\gamma \\approx 1{,}11$\n- $\\eta \\approx 81\\%$\n\n### Redresorul în punte (Graetz)\n\nFolosește **4 diode**, redresează complet unda fără a necesita transformator cu priză mediană, dar introduce o cădere de tensiune pe **2 diode** per alternanță."
  },

  {
    id: 30,
    type: "theory",
    theme: "TEORIE",
    themeTitle: "Surse de Alimentare și Redresoare",
    title: "Filtre și stabilizatoare – condensator, Zener, serie, 78XX/79XX",
    tags: ["filtru","condensator","riplu","stabilizator","zener","paralel","serie","tranzistor","beta","78XX","79XX","regulator","Vout","protectie scurtcircuit","protectie termica","reactie negativa","randament","referinta"],
    content: "### Filtrul cu condensator\n\nCondensatorul se încarcă pe durata alternanței de vârf și se descarcă lent prin rezistența de sarcină în intervalul de gol. Variația de tensiune (riplul):\n\n$$\\Delta v_0 \\approx \\frac{V_0 T}{R_L C}$$\n\n### Stabilizator paralel (Zener)\n\nElementul activ (Dioda Zener) în **paralel** cu sarcina. $R$ de limitare preia restul tensiunii. Randament slab.\n\n### Stabilizator serie (cu tranzistor)\n\nTranzistorul în **serie** cu sarcina. Tensiunea de referință (Zener) aplicată în baza tranzistorului. Amplificarea $\\beta$ permite curenți mari pe ieșire:\n\n$$V_{OUT} = V_{Zener} - 0{,}65\\,V$$\n\nNecesită circuit de **protecție la scurtcircuit**.\n\n### Stabilizatoare integrate\n\n- **78XX** → tensiune pozitivă (ex. 7805 = +5V, 7812 = +12V)\n- **79XX** → tensiune negativă\n- Conțin protecție termică și la scurtcircuit."
  },

  {
    id: 31,
    type: "theory",
    theme: "TEORIE",
    themeTitle: "Tranzistoare Bipolare (BJT)",
    title: "BJT – structură, principiu de funcționare, parametrii α și β",
    tags: ["tranzistor","BJT","bipolar","NPN","PNP","emitor","baza","colector","alfa","beta","amplificare curent","IE=IC+IB","ICBo","efect de tranzistor","purtatori","dopat"],
    content: "**Tranzistorul bipolar** este un dispozitiv activ cu 3 regiuni dopate diferit, având 3 terminale:\n- **Emitor (E)** – puternic dopat\n- **Bază (B)** – foarte subțire\n- **Colector (C)**\n\nConducția este asigurată de două tipuri de purtători (electroni și goluri) → denumirea de **bipolar**. Tipuri structurale: **PNP** și **NPN**.\n\n### Ecuația curenților\n\n$$I_E = I_C + I_B$$\n\n### Parametrii de amplificare\n\n$$I_C = \\alpha I_E + I_{CBo}, \\qquad \\alpha \\approx 0{,}97{-}0{,}99$$\n\n$$I_C = \\beta I_B + (1+\\beta)I_{CBo}, \\qquad \\beta = \\frac{\\alpha}{1-\\alpha} \\approx 10{-}100$$\n\nPrin **efectul de tranzistor**, majoritatea purtătorilor injectați din emitor difuzează prin baza subțire și sunt accelerați de câmpul colectorului."
  },

  {
    id: 32,
    type: "theory",
    theme: "TEORIE",
    themeTitle: "Tranzistoare Bipolare (BJT)",
    title: "Regimurile de funcționare BJT – RAN, Saturație, Blocat, RAI",
    tags: ["BJT","regim activ normal","RAN","saturatie","RS","blocat","RB","regim activ invers","RAI","intreruptor inchis","intreruptor deschis","amplificare","UCEsat","jonctiune EB","jonctiune BC","polarizare directa","polarizare inversa"],
    content: "Starea tranzistorului este determinată de polarizarea celor două joncțiuni:\n\n| Regim | Jonc. EB | Jonc. BC | Comportament |\n|---|---|---|---|\n| **Activ Normal (RAN)** | Directă | Inversă | Amplificare: $I_C \\approx \\beta I_B$ |\n| **Saturație (RS)** | Directă | Directă | Întrerupător **închis**, $U_{CEsat} \\approx 0{,}1{-}0{,}2\\,V$ |\n| **Blocat (RB)** | Inversă | Inversă | Întrerupător **deschis**, $I_C \\approx 0$ |\n| **Activ Invers (RAI)** | Inversă | Directă | Neutilizat practic ($\\beta$ extrem de mic) |\n\n> **RAN** = zona de amplificare. **RS** și **RB** = comutație digitală (0/1).\n\nÎn **Regimul de Saturație**, curentul este limitat doar de circuitul extern; tensiunea $U_{CEsat}$ este foarte mică.\n\nÎn **Regimul Blocat**, prin tranzistor circulă doar un curent rezidual extrem de mic."
  },

  {
    id: 33,
    type: "theory",
    theme: "TEORIE",
    themeTitle: "Tranzistoare Bipolare (BJT)",
    title: "Polarizare BJT – PSF, dreapta de sarcină, stabilizare termică cu RE",
    tags: ["BJT","PSF","punct static de functionare","dreapta de sarcina","polarizare","R1 R2 RC RE","stabilizare termica","ambalare termica","ICBo","divizor tensiune baza","VB","UBE","reactie negativa","temperatura"],
    content: "### Polarizarea cu 4 rezistoare ($R_1, R_2, R_C, R_E$)\n\n$R_1$ și $R_2$ formează un **divizor de tensiune** care fixează potențialul bazei $V_B$ stabil față de variații.\n\n### Dreapta de sarcină DC\n\n$$I_C = -\\frac{U_{CE}}{R_C + R_E} + \\frac{E_C}{R_C + R_E}$$\n\n**PSF (Punctul Static de Funcționare)** = intersecția dreptei de sarcină cu caracteristica $I_C(U_{CE})$.\n\n### Problema ambalării termice\n\nTemperatură ↑ → $I_{CBo}$ ↑ → $I_C$ ↑ → disipație ↑ → temperatură ↑ (buclă pozitivă — distructivă)\n\n### Stabilizarea termică cu $R_E$ (reacție negativă)\n\nDacă $I_E$ ($\\approx I_C$) crește → căderea $I_E R_E$ crește → $U_{BE} = V_B - I_E R_E$ scade → $I_C$ scade. Compensare automată."
  },

  {
    id: 34,
    type: "theory",
    theme: "TEORIE",
    themeTitle: "Tranzistoare Bipolare (BJT)",
    title: "Parametrii hibrizi h – model semnal mic (Emitor Comun)",
    tags: ["BJT","parametri hibrizi","h11","h12","h21","h22","semnal mic","emitor comun","EC","cuadripol","impedanta intrare","transfer tensiune","amplificare dinamica","admitanta iesire","beta ac","model liniar"],
    content: "Pentru semnale mici (comportament liniar), tranzistorul este modelat ca un **cuadripol**. Parametrii hibrizi pentru **Emitor Comun**:\n\n$$\\Delta u_{be} = h_{11}\\,\\Delta i_b + h_{12}\\,\\Delta u_{ce}$$\n$$\\Delta i_c = h_{21}\\,\\Delta i_b + h_{22}\\,\\Delta u_{ce}$$\n\n| Parametru | Semnificație | Valoare tipică |\n|---|---|---|\n| $h_{11}$ | Impedanța de intrare | sute $\\Omega$ – $k\\Omega$ |\n| $h_{12}$ | Factorul de transfer invers în tensiune | $10^{-3}{-}10^{-4}$ |\n| $h_{21}$ | Amplificare dinamică în curent ($\\beta_{ac}$), ieșire în scurtcircuit | 10–100 |\n| $h_{22}$ | Admitanța de ieșire cu intrarea în gol | $\\mu S$ |"
  },

  {
    id: 35,
    type: "theory",
    theme: "TEORIE",
    themeTitle: "Tranzistoare Bipolare (BJT)",
    title: "Dispozitive multijoncțiune – Tiristor (SCR), Triac, Fototranzistor",
    tags: ["tiristor","SCR","triac","fototranzistor","pnpn","3 jonctiuni","anod","catod","poarta","curent de mentinere","curent alternativ","CA","antiparalel","fotoelectric","comanda","strapungere"],
    content: "### Tiristorul (SCR)\n\nDispozitiv **p-n-p-n** (3 joncțiuni), văzut ca un ansamblu de 2 tranzistoare complementare (PNP și NPN) interconectate. Terminale: **Anod**, **Catod**, **Poartă**.\n\nDacă pe Poartă se aplică un curent de comandă, tensiunea necesară intrării în conducție scade dramatic. Tiristorul rămâne deschis (conduce) cât timp curentul prin el nu scade sub o valoare minimă de **menținere**.\n\n### Triacul\n\nEchivalent cu **două tiristoare conectate antiparalel**. Conceput pentru controlul curentului electric în **ambele direcții** (ambele alternanțe) în rețele de curent alternativ.\n\n### Fototranzistorul\n\nTranzistor a cărui joncțiune emitor-bază este expusă luminii. Fotonii absorbți generează goluri și electroni (**efect fotoelectric intern**). Curentul rezultat este amplificat de câștigul $\\beta$ al tranzistorului."
  }
];
