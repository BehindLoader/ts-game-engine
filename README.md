# TSGE (TypeScript Game Engine) [WIP]

- [Документация по интерфейсу](https://behindloader.github.io/tsge/)
- [NPM](https://www.npmjs.com/package/tsge)
- [Исходный код](https://github.com/BehindLoader/tsge)

## Установка и настройка

```sh
npm i --save tsge
```

Создайте HTML элемент `<canvas />`
```html
<html>
    <head></head>
    <body>
        <!-- ... -->
        <canvas id="canvas"></canvas>
        <!-- ... -->
    </body>
</html>
```

Внутри вашего проекта передайте его в конструктор класса [Engine](https://behindloader.github.io/tsge/classes/Engine.html)
```typescript
const canvasElement = <HTMLCanvasElement>document.getElementById("canvas");
const engine = new Engine(canvasElement);
```
