# react-native-scaleit

A minimal, powerful responsive scaling hook system for React Native and Expo.  
Scale sizes, fonts, spacing, icons, and more — with zero dependencies.

---

## ✨ Features

- 📱 Supports both Android & iOS
- ⚖️ Device-aware scaling (width, height, font)
- 🎨 Built-in design tokens (spacing, fontSize, radius, etc.)
- 🚫 No external dependencies

---

## 📦 Installation

```bash
npm install react-native-scaleit
```

## 🚀 Usage

```tsx
import { useResponsive, useTokens } from 'react-native-scaleit';

const MyComponent = () => {
  const { scale, fontScale } = useResponsive();
  const { spacing, fontSize } = useTokens();

  return (
    <View style={{ padding: spacing.md }}>
      <Text style={{ fontSize: fontSize.lg }}>Responsive Text</Text>
    </View>
  );
};
```

## 🧠 API

### `useResponsive()`

Returns helpers:

- `scale(size)`
- `verticalScale(size)`
- `moderateScale(size, factor = 0.5)`
- `fontScale(size)`
- `screen.width`, `screen.height`
- `platformSelect(iosVal, androidVal)`

---

### `useTokens()`

Returns:

```ts
{
  spacing: { xs, sm, md, lg, xl },
  radius: { sm, md, lg, xl, round },
  fontSize: { xs, sm, md, lg, xl, xxl },
  iconSize: { sm, md, lg }
}
```

## 📐 Advanced Usage

If you're already using your own design system with predefined tokens (like `spacing.md`, `fontSize.lg`, etc.), you can still use `react-native-scaleit` to make your values responsive — without replacing your tokens.

---

### 🛠 Option 1: Apply scaling manually to your tokens

```tsx
import { useResponsive } from 'react-native-scaleit';
import { myTokens } from '@/theme/tokens'; // your own tokens

const MyComponent = () => {
  const { scale, fontScale } = useResponsive();

  const padding = scale(myTokens.spacing.md);
  const fontSize = fontScale(myTokens.fontSize.sm);

  return (
    <View style={{ padding }}>
      <Text style={{ fontSize }}>Scaled Custom Text</Text>
    </View>
  );
};
```

### 🧩 Option 2: Create your own `useScaledTokens` hook

```ts
// theme/useScaledTokens.ts
import { useResponsive } from 'react-native-scaleit';
import { myTokens } from './tokens';

export const useScaledTokens = () => {
  const { scale, fontScale } = useResponsive();

  return {
    spacing: {
      sm: scale(myTokens.spacing.sm),
      md: scale(myTokens.spacing.md),
      lg: scale(myTokens.spacing.lg),
    },
    fontSize: {
      sm: fontScale(myTokens.fontSize.sm),
      md: fontScale(myTokens.fontSize.md),
    },
  };
};
```

Now use it like this:

```tsx
const { spacing, fontSize } = useScaledTokens();

<View style={{ padding: spacing.md }}>
  <Text style={{ fontSize: fontSize.md }}>Text</Text>
</View>
```

### 🧱 Option 3: Scale tokens in your global theme
If you use a custom theme provider or CSS-in-JS setup, just apply `scale()` and `fontScale()` during theme creation:

```ts
import { scale, fontScale } from 'react-native-scaleit';

export const theme = {
  spacing: {
    sm: scale(8),
    md: scale(16),
    lg: scale(24),
  },
  fontSize: {
    body: fontScale(14),
    title: fontScale(20),
  },
};
```

## 📺 Tablet & TV Support

`react-native-scaleit` automatically adjusts scaling for larger screens:

| Device Type | Spacing/Radius      | Font Size Scaling     |
|-------------|---------------------|------------------------|
| Phone       | 1× (base)           | 1× (base)              |
| Tablet/iPad | 1.2×                | 1.2×                   |
| TV          | 1.5×                | 1.6×                   |

---

### 🧠 How It Works

Device type is detected using screen dimensions and aspect ratio — no external libraries needed.

### 🎯 Auto-scaled Tokens

```tsx
import { useTokens } from 'react-native-scaleit';

const { spacing, fontSize } = useTokens();

<View style={{ padding: spacing.md }}>
  <Text style={{ fontSize: fontSize.lg }}>
    Looks great on phones, tablets, and TVs!
  </Text>
</View>

```

### 🛠 Use Case 2: Manual control using deviceType

```tsx
import { useResponsive } from 'react-native-scaleit';

const { deviceType, scale, fontScale } = useResponsive();

<Text style={{ fontSize: deviceType === 'tv' ? fontScale(28) : fontScale(16) }}>
  Hello from {deviceType}!
</Text>
```