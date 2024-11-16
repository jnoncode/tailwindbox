 ![banner](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FN3vND%2FbtsKLbC1esx%2FGZROQkcfMi93Iu0HvPSh3K%2Fimg.png)



## 🔧 Installation

Install TailwindBox via npm or yarn:

```bash
npm install tailwindbox
# or
yarn add tailwindbox
```

## 🚀 Usage

Here's a quick example of how to use TailwindBox:

```jsx
import { tw } from "tailwindbox";

function App() {
  const isDarkMode = true;

  const styles = tw({
    base: "p-4 rounded-lg shadow-md",
    dark: { if: isDarkMode, classes: "bg-gray-800 text-white" },
    light: { if: !isDarkMode, classes: "bg-white text-black" },
  });

  return <div className={styles}>Hello, TailwindBox!</div>;
}

export default App;
```

- `base`: Always applies the base styles (`p-4 rounded-lg shadow-md`).
- `dark`: Applies `bg-gray-800 text-white` only if `isDarkMode` is true.
- `light`: Applies `bg-white text-black` only if `isDarkMode` is false.

## 🌟 Features

- **Object-Like Structure**: Define TailwindCSS styles in an object-based format.
- **Conditional Classes**: Apply classes dynamically based on your application's state.
- **Improved Readability**: Simplify long and complex class strings.
- **Lightweight**: A minimal library designed for TailwindCSS users.


## 📚 API Reference

**`tw(config: StyleConfig): string`**

**Parameters**:

- `config`: An object where keys define style groups, and values are either:
  - A string of TailwindCSS classes (always applied).
  - An object with `if` and `classes` for conditional application.

**Returns**:

- A single string with the resulting TailwindCSS classes.

**Example**

```js
const styles = tw({
  base: "p-4 rounded-lg shadow-md",
  dark: { if: isDarkMode, classes: "bg-gray-800 text-white" },
  light: { if: !isDarkMode, classes: "bg-white text-black" },
});
```

## 📦 Why TailwindBox?

- **Readable**: No more unreadable, long `className` strings.
- **Reusable**: Encapsulate style logic in objects for easier maintenance.
- **Dynamic**: Apply styles conditionally without cluttering your JSX.

## 🤝 Contributing

Contributions are welcome! If you have ideas, bug fixes, or feature requests, feel free to open an issue or submit a pull request.

## 📝 License

This project is licensed under the MIT License.
