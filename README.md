# fullscreen
Тестирование Fullscreen API для мобильных браузеров

.yarnrc.yml
-----------

Файла .yarnrc.yml недостаточно. Мало того, он даже мешает. В нем приходится удалять информацию о плагинах и заново их устанавливать.
Отсюда вывод, что файл .yarnrc.yml по идее нельзя хранить в репозитории. Это очень странно.

```
yarn plugin import typescript
yarn plugin import workspace-tools
```