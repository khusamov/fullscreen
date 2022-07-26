Тестирование API веб-браузеров
==============================

В данном репозитории собраны проекты для тестирования разных API браузеров на предмет их использования в проектах.

Start
-----

После клонирования репозитория выполнить:

```
yarn plugin import typescript & yarn plugin import workspace-tools
yarn
```

Gamepad API
--------------

Тестирование Gamepad API.

```
yarn gamepad
```

Fullscreen API
--------------

Тестирование Fullscreen API.

```
yarn fullscreen
```

.yarnrc.yml
-----------

Файла `.yarnrc.yml` недостаточно. Мало того, он даже мешает. В нем приходится удалять информацию о плагинах
и заново их устанавливать. Отсюда вывод, что файл `.yarnrc.yml` по идее нельзя хранить в репозитории.
Это очень странно, потому что в нем есть опции, которые надо хранить в репозитории (например `nodeLinker: node-modules`).

В общем, нужно в файле `.yarnrc.yml` удалить раздел `plugins` и выполнить команды:

```
yarn plugin import typescript & yarn plugin import workspace-tools
```