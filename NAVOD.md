# Návod: Jak spustit a spravovat web Můj potrat

Tento návod je psaný pro tebe, Míšo – bez technického žargonu, krok za krokem.

---

## Obsah

1. [Připravit si GitHub účet](#1-připravit-si-github-účet)
2. [Vytvořit repozitář (složku na GitHubu)](#2-vytvořit-repozitář)
3. [Nahrát soubory webu](#3-nahrát-soubory-webu)
4. [Zapnout GitHub Pages](#4-zapnout-github-pages)
5. [Nasměrovat doménu mujpotrat.cz](#5-nasměrovat-doménu-mujpotratcz)
6. [Jak přidat nový článek](#6-jak-přidat-nový-článek)
7. [Jak opravit text existujícího článku](#7-jak-opravit-text-existujícího-článku)

---

## 1. Připravit si GitHub účet

GitHub je bezplatná služba, kam se nahraje web. GitHub Pages pak web automaticky zveřejní.

1. Jdi na [github.com](https://github.com)
2. Klikni na **Sign up** (vpravo nahoře)
3. Zadej:
   - e-mailovou adresu
   - heslo
   - uživatelské jméno (např. `mujpotrat` nebo své jméno)
4. Potvrď e-mail (přijde zpráva s odkazem)
5. Přihlaš se

---

## 2. Vytvořit repozitář

Repozitář = složka na GitHubu, kde bude uložený celý web.

1. Po přihlášení klikni na zelené tlačítko **New** (nebo jdi na github.com/new)
2. Vyplň:
   - **Repository name:** `mujpotrat` (nebo `web`)
   - **Visibility:** Public ✓ (GitHub Pages funguje zdarma jen pro veřejné repozitáře)
3. Klikni na **Create repository**

---

## 3. Nahrát soubory webu

Doporučuju aplikaci **GitHub Desktop** – je nejjednodušší.

### Instalace GitHub Desktop

1. Stáhni z [desktop.github.com](https://desktop.github.com)
2. Nainstaluj a přihlaš se svým GitHub účtem

### Nahrání souborů

1. V GitHub Desktop klikni na **File → Clone repository**
2. Vyber repozitář `mujpotrat`, který jsi právě vytvořila
3. Zvol, kam se uloží na počítači (např. Dokumenty)
4. Klikni **Clone**

5. Do té složky (která se otevřela) nakopíruj **celý obsah složky `mujpotrat`** z tohoto projektu  
   _(tedy všechny soubory: src/, public/, astro.config.mjs, package.json, atd.)_

6. V GitHub Desktop uvidíš seznam změn – vlevo dole do pole **Summary** napiš třeba `První nahrání webu`
7. Klikni **Commit to main**
8. Klikni na **Push origin** (nahraje soubory na GitHub)

---

## 4. Zapnout GitHub Pages

1. Na GitHubu otevři svůj repozitář
2. Klikni na záložku **Settings** (nastavení, ikona ozubeného kola)
3. V levém menu vyber **Pages**
4. U položky **Source** vyber: **GitHub Actions**
5. Ulož

GitHub teď při každém nahrání souborů automaticky sestaví a zveřejní web.  
Počkej 2–5 minut. Web bude dostupný na adrese:  
`https://tvoje-uzivatelske-jmeno.github.io/mujpotrat`

---

## 5. Nasměrovat doménu mujpotrat.cz

Aby web byl na adrese `mujpotrat.cz`, je potřeba nastavit DNS záznamy u Czechia.com.

### Přidat vlastní doménu na GitHubu

1. V repozitáři → **Settings → Pages**
2. Do pole **Custom domain** napiš: `mujpotrat.cz`
3. Klikni **Save**

### Nastavit DNS u Czechia.com

1. Přihlaš se na [czechia.com](https://www.czechia.com)
2. Jdi do správy domény `mujpotrat.cz` → **DNS záznamy** (nebo Správa DNS)
3. Přidej tyto záznamy (smaž případné staré A záznamy pro `@`):

| Typ   | Název | Hodnota              |
|-------|-------|----------------------|
| A     | @     | 185.199.108.153      |
| A     | @     | 185.199.109.153      |
| A     | @     | 185.199.110.153      |
| A     | @     | 185.199.111.153      |
| CNAME | www   | mujpotrat.cz.        |

> Pozor: za `mujpotrat.cz.` je tečka – je to tak správně.

4. Ulož záznamy

DNS se rozšíří do internetu za **1–48 hodin**. Pak bude web dostupný na `mujpotrat.cz`.

---

## 6. Jak přidat nový článek

Každý článek je jeden textový soubor s příponou `.md` (Markdown). Přidání nového článku = vytvoření nového souboru.

### Krok 1: Připrav soubor

Vytvoř nový soubor v textovém editoru (Notepad, Poznámkový blok, nebo lepší: [Notepad++](https://notepad-plus-plus.org)).

Název souboru: krátký název článku, **bez háčků a čárek**, slova oddělená pomlčkami, přípona `.md`  
Příklady: `muj-novy-clanek.md`, `druhe-vyroci.md`

### Krok 2: Vložit hlavičku

Na úplný začátek souboru vlož tuto hlavičku (tzv. frontmatter):

```
---
title: 'Titulek článku'
date: 2026-06-15
description: 'Krátký popis, který se zobrazí v seznamu článků.'
---
```

- `title` – nadpis článku (v apostrofech)
- `date` – datum ve formátu `RRRR-MM-DD`
- `description` – 1–2 věty pro náhled (v apostrofech)

Chceš-li článek zobrazit jako první v seznamu (připnout nahoru), přidej:
```
pinned: true
```

### Krok 3: Napiš text

Pod hlavičkou (za druhými `---`) napiš text článku.

Formátování:
- `# Nadpis úrovně 1` (největší)
- `## Nadpis úrovně 2`
- Prázdný řádek = nový odstavec
- `**tučně**` → **tučně**
- `*kurzíva*` → *kurzíva*

Příklad celého souboru:

```
---
title: 'Druhé výročí'
date: 2026-06-15
description: 'Dva roky od první ztráty. Co se změnilo a co ne.'
---

Dnes jsou to dva roky.

Ráno jsem vstala, uvařila kávu a sedla si k oknu. Čekala jsem, že to bude těžší.

Bylo to jinak než dřív – ne lehčí, ale jinak.
```

### Krok 4: Nahrát na GitHub

1. Hotový `.md` soubor ulož do složky `src/content/clanky/` v projektu
2. Otevři GitHub Desktop
3. Uvidíš nový soubor v seznamu změn
4. Do pole **Summary** napiš název článku
5. Klikni **Commit to main**, pak **Push origin**

Web se automaticky přestaví a nový článek se objeví na stránce.

---

## 7. Jak opravit text existujícího článku

1. Najdi soubor článku ve složce `src/content/clanky/`
2. Otevři ho v textovém editoru
3. Oprav co potřebuješ (titulek, datum, text)
4. Ulož soubor
5. V GitHub Desktop – **Commit to main** → **Push origin**

Web se automaticky aktualizuje.

---

## Kontakt pro pomoc

Pokud bude cokoliv nejasné nebo něco nepůjde, napiš na miejja@gmail.com nebo se ozvi přes Instagram @mujpotrat.

Web byl postaven s láskou. Drž se. 💙
