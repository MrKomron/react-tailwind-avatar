Zeker! Hieronder vind je een **professionele en complete README.md** voor je NPM-package `react-tailwind-avatar`, die je meteen kunt gebruiken of aanpassen.

---

## 📄 README.md voor `react-tailwind-avatar`

````md
# react-tailwind-avatar

Een herbruikbare en aanpasbare avatarcomponent voor React, gebouwd met Tailwind CSS. Ondersteunt initialen, afbeeldingen en dynamische kleuren.

![NPM Version](https://img.shields.io/npm/v/react-tailwind-avatar) ![License](https://img.shields.io/npm/l/react-tailwind-avatar) ![Downloads](https://img.shields.io/npm/dm/react-tailwind-avatar)

---

## ✨ Features

- 📛 Ondersteunt initialen als fallback
- 🖼️ Ondersteunt profielfoto's
- 🎨 Willekeurige of aangepaste kleuren
- 📐 Verschillende formaten
- 🌙 Dark mode-vriendelijk (Tailwind)

---

## 🚀 Installatie

```bash
npm install react-tailwind-avatar
````

of met Yarn:

```bash
yarn add react-tailwind-avatar
```

---

## 📦 Gebruik

```tsx
import Avatar from 'react-tailwind-avatar';
import 'react-tailwind-avatar/dist/index.css';

export default function App() {
  return (
    <div className="p-4">
      <Avatar name="Yusuf Idris" size="lg" image="https://i.pravatar.cc/150?img=3" />
    </div>
  );
}
```

---

## ⚙️ Props

| Prop        | Type    | Beschrijving                                  | Voorbeeld            |
| ----------- | ------- | --------------------------------------------- | -------------------- |
| `name`      | string  | Naam waarvan initialen worden gegenereerd     | `"Ali Ben Omar"`     |
| `image`     | string  | URL naar profielfoto (optioneel)              | `"https://..."`      |
| `size`      | string  | Grootte (`sm`, `md`, `lg`, `xl`)              | `"md"`               |
| `rounded`   | boolean | Maakt de avatar volledig rond (default: true) | `false`              |
| `className` | string  | Extra Tailwind klassen                        | `"ring ring-offset"` |

---

## 🧪 Voorbeelden

```tsx
<Avatar name="Fatima Al-Zahra" />
<Avatar name="Yusuf Idris" size="xl" />
<Avatar name="Layla Noor" image="https://i.pravatar.cc/150?img=5" rounded={false} />
```

---

## 📄 License

MIT © [jouwgebruikersnaam](https://github.com/jouwgebruikersnaam)

---

## 📬 Contact

Voor vragen of bijdragen, open een issue of stuur een pull request via GitHub.

```

---


```
