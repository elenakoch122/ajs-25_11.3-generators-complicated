# ДЗ Генераторы (задача со звёздочкой)

[![Build status](https://ci.appveyor.com/api/projects/status/r0jggeusvaus9fcc?svg=true)](https://ci.appveyor.com/project/elenakoch122/ajs-25-11-3-generators-complicated)

## Описание

В этом задании предполагается, что все персонажи содержат следующий набор полей:
```javascript
const char = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
}
```

### Легенда

Как вы знаете, объекты, позволяющие организовать итерирование, содержат метод с "именем" `Symbol.iterator`. Напишите функцию `canIterate`, которая определяет, соответствует ли объект протоколу итерирования, возвращая, соответственно, `true`/`false`.

Примеры использования:
```javascript
canIterate(new Map()); // true
canIterate(new Set()); // true
canIterate(null); // false
canIterate(10); // false
canIterate("Netology"); // true
```

---

**Важно**: каждая задача выполняется в виде отдельного проекта с собственным GitHub репозиторием.

**Важно**: код должен проходить ESLint без ошибок.

**Важно**: на задачи данного раздела писать авто-тесты не нужно.

**Важно**: решения должны быть построены на базе [шаблона Webpack](https://github.com/netology-code/ajs-homeworks/tree/ajs8/ci-template).
